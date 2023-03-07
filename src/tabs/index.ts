import { html, PropertyValues } from "lit";
import { property, queryAll, state } from "lit/decorators.js";

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

    private _GUID: string;
    private _selectedValue: string = "";

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
          if (!validateValueString(this.items[index].value)) {
            this.throwErrorAfterUpdateComplete(
              ERROR_MESSAGE.ITEMS.IS_NOT_STRING
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
      this._selectedValue = "";
      this.items.forEach((item) => {
        if (
          item.visible !== false &&
          (this.value === item.value || this._selectedValue === "")
        ) {
          this._selectedValue = item.value;
        }
      });
    }

    render() {
      return html`
        <div class="kuc-tabs__group">
          <ul
            class="kuc-tabs__group__tab-list"
            role="tablist"
            @blur="${this._handleBlur}"
          >
            ${this.items.map((item) => this._getTabTemplate(item))}
          </ul>
          <div
            class="kuc-tabs__group__tab-panel"
            ?border-visible="${this.borderVisible}"
          >
            ${this.items.map((item) => this._getTabContentTemplate(item))}
          </div>
        </div>
      `;
    }

    private _getTabTemplate(item: TabsItem) {
      const isSelected = item.value === this._selectedValue;
      return html`<li
        role="presentation"
        class="kuc-tabs__group__tab-list__tab"
      >
        <button
          role="tab"
          ?hidden="${item.visible === false}"
          aria-selected="${isSelected}"
          tabindex="${isSelected ? "" : "-1"}"
          class="kuc-tabs__group__tab-list__tab__button ${this._isClick
            ? "kuc-tabs__group__tab-list__tab__button--click"
            : ""}"
          id="${this._GUID}-button-${item.value}"
          aria-controls="${this._GUID}-tabpanel-${item.value}"
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

    private _getTabContentTemplate(item: TabsItem) {
      const isSelected = item.value === this._selectedValue;
      return html`<div
        class="kuc-tabs__group__tab-panel__content"
        role="tabpanel"
        id="${this._GUID}-tabpanel-${item.value}"
        aria-labelledby="${this._GUID}-button-${item.value}"
        ?hidden="${!isSelected}"
        @change="${this._handleChangeEvent}"
      >
        ${item.content ? unsafeHTMLConverter(item.content) : ""}
      </div>`;
    }

    private _handleMouseDown(event: Event) {
      this._isClick = true;
    }

    private _handleClickTab(event: Event) {
      const tabEl = event.target as HTMLButtonElement;
      const currentIndex = this._getCurrentTabIndex(tabEl.value);
      this._tabButtons[currentIndex].focus();
      if (this.value === tabEl.value) return;
      const eventDetail: TabsChangeEventDetail = this._generateEventDetail(
        tabEl.value
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
          const tabEl = event.target as HTMLButtonElement;
          this._moveToAdjacentTab(tabEl.value, "prev");
          break;
        }
        case "Right":
        case "ArrowRight": {
          doPreventEvent = true;
          const tabEl = event.target as HTMLButtonElement;
          this._moveToAdjacentTab(tabEl.value, "next");
          break;
        }
        case "Home": {
          doPreventEvent = true;
          const tabEl = event.target as HTMLButtonElement;
          this._moveToLastFirstTab(tabEl.value, "first");
          break;
        }
        case "End": {
          doPreventEvent = true;
          const tabEl = event.target as HTMLButtonElement;
          this._moveToLastFirstTab(tabEl.value, "last");
          break;
        }
      }
      if (doPreventEvent) {
        event.stopPropagation();
        event.preventDefault();
      }
    }

    private _getCurrentTabIndex(currentValue: string) {
      let currentIndex = 0;
      for (let index = 0; index < this.items.length; index++) {
        if (this.items[index].value === currentValue) {
          currentIndex = index;
          break;
        }
      }
      return currentIndex;
    }

    private _moveToLastFirstTab(
      currentValue: string,
      direction: "first" | "last"
    ) {
      const currentIndex = this._getCurrentTabIndex(currentValue);
      const increment = direction === "last" ? -1 : 1;
      let index = direction === "last" ? this.items.length - 1 : 0;
      while (index !== currentIndex) {
        if (
          this.items[index].visible !== false &&
          this.items[index].disabled !== true
        ) {
          dispatchCustomEvent(
            this,
            "change",
            this._generateEventDetail(this.items[index].value)
          );
          this._tabButtons[index].focus();
          break;
        }
        index += increment;
      }
    }

    private _moveToAdjacentTab(
      currentValue: string,
      direction: "next" | "prev"
    ) {
      const currentIndex = this._getCurrentTabIndex(currentValue);
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
          dispatchCustomEvent(
            this,
            "change",
            this._generateEventDetail(this.items[index].value)
          );
          this._tabButtons[index].focus();
          break;
        }
        index += increment;
      }
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
