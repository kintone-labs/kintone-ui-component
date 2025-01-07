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
  const SCROLL_POSITION_THRESHOLD = 2; // pixels

  class KucTabs extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) value = "";
    @property({ type: Boolean }) borderVisible = true;
    @property({ type: Boolean }) scrollButtons = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @property({ type: Array }) items: TabsItem[] = [];

    @queryAll(
      ".kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab__button",
    )
    private _tabButtons!: HTMLButtonElement[];
    @query(".kuc-tabs__group__tabs-container__tab-list-container")
    private _tabListContainer!: HTMLDivElement;
    @query(".kuc-tabs__group")
    private _tabGroup!: HTMLDivElement;

    private _GUID: string;
    private _selectedValue: string = "";
    private _resizeObserver: ResizeObserver | null = null;

    @state()
    private _isClick = false;
    @state()
    private _isAtStart = true;
    @state()
    private _isAtEnd = false;

    constructor(props?: TabsProp) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
      this._handleResize = this._handleResize.bind(this);
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
          <div class="kuc-tabs__group__tabs-container">
            <button
              class="kuc-tabs__group__tabs-container__tab-pre-button"
              @mousedown="${this._handleMouseDownPrevButton}"
              ?hidden="${!this.scrollButtons}"
              ?disabled="${this._isAtStart}"
              aria-hidden="true"
              tabindex="-1"
            >
              ${this._getPrevButtonSvgTemplate()}
            </button>
            <div
              class="kuc-tabs__group__tabs-container__tab-list-container"
              @scroll="${this._handleScroll}"
            >
              <ul
                class="kuc-tabs__group__tabs-container__tab-list-container__tab-list"
                role="tablist"
                @blur="${this._handleBlur}"
              >
                ${this.items.map((item, index) =>
                  this._getTabTemplate(item, index),
                )}
              </ul>
            </div>
            <button
              class="kuc-tabs__group__tabs-container__tab-next-button"
              @mousedown="${this._handleMouseDownNextButton}"
              ?hidden="${!this.scrollButtons}"
              ?disabled="${this._isAtEnd}"
              aria-hidden="true"
              tabindex="-1"
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

    firstUpdated() {
      window.addEventListener("resize", this._handleResize);
      this._resizeObserver = new ResizeObserver(() => {
        if (this.scrollButtons) {
          this._updatePreNextButtonState();
        }
      });
      this._resizeObserver.observe(this._tabListContainer);
      this._setScrollStyles();
      this._scrollToSelectedTab(true);
    }

    protected updated(changedProperties: PropertyValues) {
      if (changedProperties.has("scrollButtons")) {
        this._setScrollStyles();
      }
      if (this.scrollButtons) {
        this._updatePreNextButtonState();
      }
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      window.removeEventListener("resize", this._handleResize);
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
        this._resizeObserver = null;
      }
    }

    private _getTabTemplate(item: TabsItem, index: number) {
      const isSelected = item.value === this._selectedValue;
      return html`<li
        role="presentation"
        class="kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab"
      >
        <button
          role="tab"
          ?hidden="${item.visible === false}"
          aria-selected="${isSelected}"
          tabindex="${isSelected && !item.disabled ? "0" : "-1"}"
          class="kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab__button ${this
            ._isClick
            ? "kuc-tabs__group__tabs-container__tab-list-container__tab-list__tab__button--click"
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
            fill="${this._isAtStart ? "GrayText" : "#333333"}"
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
          fill="${this._isAtEnd ? "GrayText" : "#333333"}"
        />
      </svg>
      `;
    }

    private _getVisibleTab(
      direction: "next" | "prev",
      currentTab: HTMLButtonElement,
    ) {
      const tabArray = Array.from(this._tabButtons);
      const currentIndex = tabArray.indexOf(currentTab);
      const increment = direction === "next" ? 1 : -1;
      const endIndex = direction === "next" ? tabArray.length : -1;

      for (let i = currentIndex + increment; i !== endIndex; i += increment) {
        if (!tabArray[i].hidden) {
          return tabArray[i];
        }
      }
      return null;
    }

    private _handleTabScroll(direction: "next" | "prev") {
      const targetTab = this._findVisibleTab(direction);
      if (!targetTab) return;

      const shouldScrollToFullyVisible = this._isTabPartiallyVisible(
        targetTab,
        direction,
      );

      const tabToScroll = shouldScrollToFullyVisible
        ? targetTab
        : this._getVisibleTab(direction, targetTab);

      if (tabToScroll) {
        this._scrollTab(tabToScroll, {
          direction,
          mode: "edge",
        });
      }

      this._updatePreNextButtonState();
    }

    private _findVisibleTab(
      direction: "next" | "prev",
    ): HTMLButtonElement | undefined {
      const containerRect = this._tabListContainer.getBoundingClientRect();
      const tabArray = Array.from(this._tabButtons);

      const isTabVisible = (tab: HTMLButtonElement) => {
        const rect = tab.getBoundingClientRect();
        return !(
          rect.right <= containerRect.left || rect.left >= containerRect.right
        );
      };

      return direction === "next"
        ? tabArray.reverse().find(isTabVisible)
        : tabArray.find(isTabVisible);
    }

    private _isTabPartiallyVisible(
      tab: HTMLButtonElement,
      direction: "next" | "prev",
    ): boolean {
      const containerRect = this._tabListContainer.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();

      return direction === "next"
        ? tabRect.right > containerRect.right + SCROLL_POSITION_THRESHOLD
        : tabRect.left < containerRect.left - SCROLL_POSITION_THRESHOLD;
    }

    private _calculateScrollPosition(
      tab: HTMLButtonElement,
      options: {
        direction?: "next" | "prev";
        mode: "visible" | "edge";
        immediate?: boolean;
      },
    ): number {
      const { direction, mode } = options;
      const containerRect = this._tabListContainer.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      let scrollLeft = this._tabListContainer.scrollLeft;

      if (mode === "edge" && direction) {
        scrollLeft +=
          direction === "next"
            ? tabRect.right - containerRect.right
            : tabRect.left - containerRect.left;
      } else {
        const isTabOverflow = tabRect.width > containerRect.width;

        if (isTabOverflow && direction) {
          scrollLeft +=
            direction === "next"
              ? tabRect.left - containerRect.left
              : tabRect.right - containerRect.right;
        } else if (tabRect.left < containerRect.left) {
          scrollLeft += tabRect.left - containerRect.left;
        } else if (tabRect.right > containerRect.right) {
          scrollLeft += tabRect.right - containerRect.right;
        }
      }

      return Math.max(
        0,
        Math.min(
          scrollLeft,
          this._tabListContainer.scrollWidth -
            this._tabListContainer.clientWidth,
        ),
      );
    }

    private _scrollTab(
      tab: HTMLButtonElement,
      options: {
        direction?: "next" | "prev";
        mode: "visible" | "edge";
        immediate?: boolean;
      },
    ) {
      const scrollLeft = this._calculateScrollPosition(tab, options);

      this._tabListContainer.scrollTo({
        left: scrollLeft,
        behavior: options.immediate ? "auto" : "smooth",
      });
    }

    private _handleMouseDownPrevButton(event: MouseEvent) {
      event.preventDefault();
      this._handleTabScroll("prev");
    }

    private _handleMouseDownNextButton(event: MouseEvent) {
      event.preventDefault();
      this._handleTabScroll("next");
    }

    private _handleResize() {
      if (this.scrollButtons) {
        this._updatePreNextButtonState();
      }
    }

    private _handleScroll() {
      this._updatePreNextButtonState();
    }

    private _isScrollToLeft() {
      return this._tabListContainer.scrollLeft === 0;
    }

    private _isScrollToRight() {
      const { scrollWidth, scrollLeft, clientWidth } = this._tabListContainer;
      return (
        Math.abs(scrollWidth - scrollLeft - clientWidth) <
        SCROLL_POSITION_THRESHOLD
      );
    }

    private _setScrollStyles() {
      this._tabGroup.parentElement?.style.setProperty(
        "max-width",
        this.scrollButtons ? "100%" : "",
      );
      this._tabListContainer.style.setProperty(
        "overflow-x",
        this.scrollButtons ? "auto" : "visible",
      );
    }

    private _updatePreNextButtonState() {
      const isAtStart = this._isScrollToLeft();
      const isAtEnd = this._isScrollToRight();
      if (isAtStart !== this._isAtStart) {
        this._isAtStart = isAtStart;
      }
      if (isAtEnd !== this._isAtEnd) {
        this._isAtEnd = isAtEnd;
      }
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
          this._scrollTab(
            this._tabButtons[this._getCurrentTabIndex(this.value)],
            {
              mode: "visible",
            },
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
          this._scrollTab(
            this._tabButtons[this._getCurrentTabIndex(this.value)],
            {
              mode: "visible",
              direction,
            },
          );
          break;
        }
        index += increment;
      }
    }

    private _scrollToSelectedTab(immediate = false) {
      if (!this.value || !this._tabButtons.length) return;

      const currentIndex = this._getCurrentTabIndex(this.value);
      if (currentIndex === -1) return;

      const targetTab = this._tabButtons[currentIndex];
      if (!targetTab) return;

      if (targetTab.hidden) return;
      this._scrollTab(targetTab, {
        mode: "visible",
        immediate,
      });

      this._updatePreNextButtonState();
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
