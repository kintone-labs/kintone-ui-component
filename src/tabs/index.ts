import { html, PropertyValues, svg } from "lit";
import { property, query, queryAll, state } from "lit/decorators.js";

import { ERROR_MESSAGE } from "../base/constant";
import { unsafeHTMLConverter, visiblePropConverter } from "../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import {
  validateArrayType,
  validateDuplicatedValues,
  validateProps,
  validateValueString,
} from "../base/validator";

import { TABS_CSS } from "./style";
import { TabsChangeEventDetail, TabsItem, TabsProp } from "./type";

let exportTabs;
(() => {
  exportTabs = window.customElements.get("kuc-tabs");
  if (exportTabs) {
    return;
  }
  class KucTabs extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) value = "";
    @property({ type: Boolean }) allowScroll = false;
    @property({ type: Boolean }) allowScrollButtons = false;
    @property({ type: Boolean }) borderVisible = true;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @property({ type: Array }) items: TabsItem[] = [];

    @queryAll(".kuc-tabs__group__tab-list__tab__button")
    private _tabButtons!: HTMLButtonElement[];
    @query(".kuc-tabs__group__tab-list-container")
    private _tabListContainer!: HTMLDivElement;
    @query(".kuc-tabs__group")
    private _tabGroup!: HTMLDivElement;
    @query(".kuc-tabs__group__tab-pre-button")
    private _tabPreButton!: HTMLButtonElement;
    @query(".kuc-tabs__group__tab-next-button")
    private _tabNextButton!: HTMLButtonElement;

    private _GUID: string;
    private _selectedValue: string = "";
    private _resizeObserver: ResizeObserver | null = null;

    @state()
    private _isClick = false;

    constructor(props?: TabsProp) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    shouldUpdate(changedProperties: PropertyValues): boolean {
      if (changedProperties.has("items")) {
        if (!validateArrayType(this.items)) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
          return false;
        }
        for (let index = 0; index < this.items.length; index++) {
          const itemValue = this.items[index].value;
          if (itemValue === undefined) {
            this.throwErrorAfterUpdateComplete(
              ERROR_MESSAGE.ITEMS.IS_NOT_SPECIFIED,
            );
            return false;
          }
        }
        const valueArray = this.items.map((item) => item.value);
        if (!validateDuplicatedValues(valueArray)) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ITEMS.IS_DUPLICATED);
          return false;
        }
      }
      if (changedProperties.has("value") && !validateValueString(this.value)) {
        this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.VALUE.IS_NOT_STRING);
        return false;
      }
      return true;
    }

    willUpdate(changedProperties: PropertyValues): void {
      let tabIndex = this._getMatchedTabIndex();
      if (tabIndex === -1) {
        tabIndex = this._getFirstVisibleTabIndex();
      }
      tabIndex > -1 && (this._selectedValue = this.items[tabIndex].value);
    }

    render() {
      return html`
        <div class="kuc-tabs__group">
          <div class="kuc-tabs__group__tabs-list__root">
            <button
              class="kuc-tabs__group__tab-pre-button"
              @click="${this._handleClickPrevButton}"
              ?hidden="${!this.allowScroll || !this.allowScrollButtons}"
            >
              ${this._getPrevButtonSvgTemplate()}
            </button>
            <div
              class="kuc-tabs__group__tab-list-container"
              @scroll="${this._handleScroll}"
            >
              <ul
                class="kuc-tabs__group__tab-list"
                role="tablist"
                @blur="${this._handleBlur}"
              >
                ${this.items.map((item, index) =>
                  this._getTabTemplate(item, index),
                )}
              </ul>
            </div>
            <button
              class="kuc-tabs__group__tab-next-button"
              @click="${this._handleClickNextButton}"
              ?hidden="${!this.allowScroll || !this.allowScrollButtons}"
            >
              ${this._getNextButtonSvgTemplate()}
            </button>
          </div>
          <div
            class="kuc-tabs__group__tab-panel"
            ?border-visible="${this.borderVisible}"
          >
            ${this.items.map((item, index) =>
              this._getTabContentTemplate(item, index),
            )}
          </div>
        </div>
      `;
    }
    protected updated() {
      this._tabGroup.parentElement &&
        this._tabGroup.parentElement.style.setProperty(
          "width",
          this.allowScroll ? "100%" : "auto",
        );
      this._tabListContainer.style.setProperty(
        "overflow-x",
        this.allowScroll ? "auto" : "visible",
      );
      if (this.allowScroll && this.allowScrollButtons) {
        this._updatePreNextButtonState();
      }
    }

    private _getTabTemplate(item: TabsItem, index: number) {
      const isSelected = item.value === this._selectedValue;
      return html`<li
        role="presentation"
        class="kuc-tabs__group__tab-list__tab"
      >
        <button
          role="tab"
          ?hidden="${item.visible === false}"
          aria-selected="${isSelected}"
          tabindex="${isSelected && !item.disabled ? "0" : "-1"}"
          class="kuc-tabs__group__tab-list__tab__button ${this._isClick
            ? "kuc-tabs__group__tab-list__tab__button--click"
            : ""}"
          id="${this._GUID}-button-${index}"
          aria-controls="${this._GUID}-tabpanel-${index}"
          value="${item.value}"
          @click="${this._handleClickTab}"
          @mousedown="${this._handleMouseDown}"
          @keydown="${this._handleKeyDownTab}"
          ?disabled="${item.disabled}"
        >
          ${item.label ? item.label : ""}
        </button>
      </li>`;
    }

    private _getTabContentTemplate(item: TabsItem, index: number) {
      const isSelected = item.value === this._selectedValue;
      return html`<div
        class="kuc-tabs__group__tab-panel__content"
        role="tabpanel"
        id="${this._GUID}-tabpanel-${index}"
        aria-labelledby="${this._GUID}-button-${index}"
        ?hidden="${!isSelected || item.visible === false}"
        @change="${this._handleChangeEvent}"
      >
        ${item.content ? unsafeHTMLConverter(item.content) : ""}
      </div>`;
    }

    private _getScrollSize() {
      const containerSize = this._tabListContainer.offsetWidth;
      let totalSize = 0;
      this._tabButtons.forEach((tab, i) => {
        if (totalSize + tab.offsetWidth > containerSize) {
          // If the first tab is already larger than the container, set the total size to the container size
          if (i === 0) {
            totalSize = containerSize;
          }
          return;
        }
        totalSize += tab.offsetWidth;
      });
      return totalSize;
    }

    firstUpdated() {
      window.addEventListener("resize", () => {
        if (this.allowScroll && this.allowScrollButtons) {
          this._updatePreNextButtonState();
        }
      });
      this._resizeObserver = new ResizeObserver(() => {
        if (this.allowScroll && this.allowScrollButtons) {
          this._updatePreNextButtonState();
        }
      });
      this._resizeObserver.observe(this._tabListContainer);
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      window.removeEventListener("resize", () => {
        if (this.allowScroll && this.allowScrollButtons) {
          this._updatePreNextButtonState();
        }
      });
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
        this._resizeObserver = null;
      }
    }

    private _handleClickPrevButton(event: MouseEvent) {
      const totalSize = this._getScrollSize();
      this._tabListContainer.scrollLeft -= totalSize;
      this._updatePreNextButtonState();
    }

    private _handleClickNextButton(event: MouseEvent) {
      const totalSize = this._getScrollSize();
      this._tabListContainer.scrollLeft += totalSize;
      this._updatePreNextButtonState();
    }

    private _handleScroll() {
      this._updatePreNextButtonState();
    }

    private _isScrollToLeft() {
      return this._tabListContainer.scrollLeft === 0;
    }

    private _isScrollToRight() {
      const threshold = 2; // To avoid the difference between scrollWidth and scrollLeft
      const { scrollWidth, scrollLeft, clientWidth } = this._tabListContainer;
      return Math.abs(scrollWidth - scrollLeft - clientWidth) < threshold;
    }

    private _updatePreNextButtonState() {
      this._tabPreButton.disabled = this._isScrollToLeft();
      this._tabNextButton.disabled = this._isScrollToRight();
    }

    private _handleMouseDown(event: Event) {
      this._isClick = true;
    }

    private _handleClickTab(event: Event) {
      const tabEl = event.target as HTMLButtonElement;
      tabEl.blur();
      const currentIndex = this._getCurrentTabIndex(
        tabEl.getAttribute("value") as string,
      );
      this._tabButtons[currentIndex].focus();
      if (this.value === tabEl.value) return;
      const eventDetail: TabsChangeEventDetail = this._generateEventDetail(
        tabEl.value,
      );
      dispatchCustomEvent(this, "change", eventDetail);
    }

    private _handleChangeEvent(event: Event) {
      event.stopPropagation();
    }

    private _handleBlur(event: Event) {
      this._isClick = false;
    }

    private _handleKeyDownTab(event: KeyboardEvent) {
      this._isClick = false;
      let doPreventEvent = false;
      switch (event.key) {
        case "Left":
        case "ArrowLeft": {
          doPreventEvent = true;
          this._moveToAdjacentTab(event.target as HTMLButtonElement, "prev");
          break;
        }
        case "Right":
        case "ArrowRight": {
          doPreventEvent = true;
          this._moveToAdjacentTab(event.target as HTMLButtonElement, "next");
          break;
        }
        case "Home": {
          doPreventEvent = true;
          this._moveToLastFirstTab(event.target as HTMLButtonElement, "first");
          break;
        }
        case "End": {
          doPreventEvent = true;
          this._moveToLastFirstTab(event.target as HTMLButtonElement, "last");
          break;
        }
      }
      if (doPreventEvent) {
        event.stopPropagation();
        event.preventDefault();
      }
    }

    private _getCurrentTabIndex(currentValue: string) {
      let currentIndex = -1;
      for (let index = 0; index < this.items.length; index++) {
        if (this.items[index].value === currentValue) {
          currentIndex = index;
          break;
        }
      }
      if (currentIndex === -1) {
        currentIndex = this._getFirstVisibleTabIndex();
      }
      return currentIndex;
    }

    private _getFirstVisibleTabIndex() {
      return this.items.findIndex((item) => item.visible !== false);
    }

    private _getMatchedTabIndex() {
      return this.items.findIndex(
        (item) => item.visible !== false && item.value === this.value,
      );
    }

    private _moveToLastFirstTab(
      triggerEl: HTMLButtonElement,
      direction: "first" | "last",
    ) {
      const currentIndex = this._getCurrentTabIndex(
        triggerEl.getAttribute("value") as string,
      );
      const increment = direction === "last" ? -1 : 1;
      let index = direction === "last" ? this.items.length - 1 : 0;
      while (index !== currentIndex) {
        if (
          this.items[index].visible !== false &&
          this.items[index].disabled !== true
        ) {
          triggerEl.blur();
          dispatchCustomEvent(
            this,
            "change",
            this._generateEventDetail(
              this._tabButtons[index].getAttribute("value") as string,
            ),
          );
          this._tabButtons[this._getCurrentTabIndex(this.value)].focus();
          this._tabButtons[this._getCurrentTabIndex(this.value)].scrollIntoView(
            { behavior: "smooth", block: "nearest", inline: "nearest" },
          );
          break;
        }
        index += increment;
      }
    }

    private _moveToAdjacentTab(
      triggerEl: HTMLButtonElement,
      direction: "next" | "prev",
    ) {
      const currentIndex = this._getCurrentTabIndex(
        triggerEl.getAttribute("value") as string,
      );
      const increment = direction === "next" ? 1 : -1;
      let index = currentIndex + increment;
      while (index !== currentIndex) {
        if (index === this.items.length) {
          index = 0;
        } else if (index === -1) {
          index = this.items.length - 1;
        }
        if (index === currentIndex) {
          break;
        }
        if (
          this.items[index].visible !== false &&
          this.items[index].disabled !== true
        ) {
          triggerEl.blur();
          dispatchCustomEvent(
            this,
            "change",
            this._generateEventDetail(
              this._tabButtons[index].getAttribute("value") as string,
            ),
          );
          this._tabButtons[this._getCurrentTabIndex(this.value)].focus();
          this._tabButtons[this._getCurrentTabIndex(this.value)].scrollIntoView(
            { behavior: "smooth", block: "nearest", inline: "nearest" },
          );
          break;
        }
        index += increment;
      }
    }

    private _getPrevButtonSvgTemplate() {
      return svg`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="var(--kuc-tabs-tab-color, #888888)"
          />
        </svg>
      `;
    }

    private _getNextButtonSvgTemplate() {
      return svg`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="var(--kuc-tabs-tab-color, #888888)"
        />
      </svg>
      `;
    }

    private _generateEventDetail(newValue: string) {
      const oldValue = this.value;
      this.value = newValue;
      const eventDetail: TabsChangeEventDetail = {
        oldValue,
        value: newValue,
      };
      return eventDetail;
    }
  }
  window.customElements.define("kuc-tabs", KucTabs);
  createStyleOnHeader(TABS_CSS);
  exportTabs = KucTabs;
})();

const Tabs = exportTabs as any;
export { Tabs };
