import { html, PropertyValues } from "lit";
import { property, queryAll } from "lit/decorators.js";

import { ERROR_MESSAGE } from "../base/constant";
import { unsafeHTMLConverter, visiblePropConverter } from "../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import {
  validateItems,
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
    @property({ type: Boolean }) borderVisible = true;
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: Array }) items: TabsItem[] = [];
    @property({ type: String }) value = "";
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    @queryAll(".kuc-tabs__group__tabs__tab__button")
    private _tabButtons!: HTMLButtonElement[];

    private _GUID: string;
    private _selectedValue: string = "";
    private _defaultTabIndex = 0;

    constructor(props?: TabsProp) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }
    shouldUpdate(changedProperties: PropertyValues): boolean {
      if (changedProperties.has("items")) {
        if (!validateItems(this.items)) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
          return false;
        }
        for (let index = 0; index < this.items.length; index++) {
          if (!validateValueString(this.items[index].value)) {
            this.throwErrorAfterUpdateComplete(
              ERROR_MESSAGE.VALUE.IS_NOT_STRING
            );
            return false;
          }
        }
        if (this._validateItemsHaveDuplicateValue(this.items)) {
          this.throwErrorAfterUpdateComplete(
            ERROR_MESSAGE.ITEMS.HAVE_DUPLICATE_VALUE
          );
          return false;
        }
      }
      return true;
    }
    willUpdate(_changedProperties: PropertyValues): void {
      if (this._isValueMatchingItems(this.value)) {
        this._selectedValue = this.value;
      } else {
        this._selectedValue =
          this.items.length > 0 ? this.items[this._defaultTabIndex].value : "";
      }
    }

    render() {
      return html`
        <div class="kuc-tabs__group" aria-labelledby="${this._GUID}-group">
          <ul class="kuc-tabs__group__tabs" role="tablist">
            ${this.items.map((item) => this._getTabTemplate(item))}
          </ul>
          <div
            class="kuc-tabs__group__tab-panel"
            ?borderVisible="${this.borderVisible}"
          >
            ${this.items.map((item) => this._getTabContentTemplate(item))}
          </div>
        </div>
      `;
    }

    private _getTabTemplate(item: TabsItem) {
      const isSelected = item.value === this._selectedValue;
      return html`<li role="presentation" class="kuc-tabs__group__tabs__tab">
        <button
          role="tab"
          aria-selected="${isSelected}"
          class="kuc-tabs__group__tabs__tab__button"
          value="${item.value}"
          @click="${this._handleClickTab}"
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
        ?hidden="${!isSelected}"
      >
        ${item.content ? unsafeHTMLConverter(item.content) : ""}
      </div>`;
    }

    private _validateItemsHaveDuplicateValue(items: TabsItem[]) {
      const valueArray = items.map((item) => item.value);
      const valueSet = new Set(valueArray);
      return valueSet.size !== valueArray.length;
    }

    private _handleClickTab(event: Event) {
      const tabEl = event.target as HTMLButtonElement;
      if (this.value === tabEl.value) return;
      const oldValue = this.value;
      const newValue = tabEl.value;
      this.value = newValue;
      const eventDetail: TabsChangeEventDetail = {
        oldValue,
        value: newValue,
      };
      dispatchCustomEvent(this, "change", eventDetail);
    }

    private _handleKeyDownTab(event: KeyboardEvent) {
      let doPreventEvent = false;
      switch (event.key) {
        case "Left":
        case "ArrowLeft": {
          doPreventEvent = true;
          const tabEl = event.target as HTMLButtonElement;
          this._moveToPreTab(tabEl.value);
          break;
        }
        case "Right":
        case "ArrowRight": {
          doPreventEvent = true;
          const tabEl = event.target as HTMLButtonElement;
          this._moveToNextTab(tabEl.value);
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

    private _moveToPreTab(currentValue: string) {
      const currentIndex = this._getCurrentTabIndex(currentValue);
      for (let preIndex = currentIndex - 1; preIndex >= 0; preIndex--) {
        if (this.items[preIndex].disabled !== true) {
          const oldValue = this.value;
          const newValue = this.items[preIndex].value;
          this.value = newValue;
          const eventDetail: TabsChangeEventDetail = {
            oldValue,
            value: newValue,
          };
          dispatchCustomEvent(this, "change", eventDetail);
          this._tabButtons[preIndex].focus();
          break;
        }
      }
    }

    private _moveToNextTab(currentValue: string) {
      const currentIndex = this._getCurrentTabIndex(currentValue);
      for (
        let nextIndex = currentIndex + 1;
        nextIndex <= this.items.length;
        nextIndex++
      ) {
        if (this.items[nextIndex].disabled !== true) {
          const oldValue = this.value;
          const newValue = this.items[nextIndex].value;
          this.value = newValue;
          const eventDetail: TabsChangeEventDetail = {
            oldValue,
            value: newValue,
          };
          dispatchCustomEvent(this, "change", eventDetail);
          this._tabButtons[nextIndex].focus();
          break;
        }
      }
    }

    private _isValueMatchingItems(value: string): boolean {
      for (let i = 0; i < this.items.length; i++) {
        if (value === this.items[i].value) {
          return true;
        }
      }
      return false;
    }
  }
  window.customElements.define("kuc-tabs", KucTabs);
  createStyleOnHeader(TABS_CSS);
  exportTabs = KucTabs;
})();

const Tabs = exportTabs as any;
export { Tabs };
