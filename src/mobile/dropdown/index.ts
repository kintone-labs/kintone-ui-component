import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail,
  createStyleOnHeader,
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";
import {
  validateProps,
  validateValueString,
  validateItems,
  validateSelectedIndexNumber,
  throwErrorAfterUpdateComplete,
} from "../../base/validator";
import { ERROR_MESSAGE } from "../../base/constant";
import { MOBILE_DROPDOWN_CSS } from "./style";
import { MobileDropdownProps, MobileDropdownItem } from "./type";
import { BaseMobileLabel } from "../../base/mobile-label";
import { BaseMobileError } from "../../base/mobile-error";
export { BaseMobileLabel, BaseMobileError };

let exportMobileDropdown;
(() => {
  exportMobileDropdown = window.customElements.get("kuc-mobile-dropdown");
  if (exportMobileDropdown) {
    return;
  }

  class KucMobileDropdown extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: String }) value = "";
    @property({ type: Number }) selectedIndex = -1;
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @property({ type: Array }) items: MobileDropdownItem[] = [];

    @query(".kuc-mobile-dropdown__input-form__select__input")
    private _selectEl!: HTMLSelectElement;

    private _GUID: string;

    constructor(props?: MobileDropdownProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      this._setInitialValue(validProps);
      Object.assign(this, validProps);
    }

    private _setInitialValue(validProps: MobileDropdownProps) {
      const hasValue = "value" in validProps;
      const hasSelectedIndex = "selectedIndex" in validProps;
      if (!hasValue && hasSelectedIndex) {
        this.value = this._getValue(validProps) || "";
      }
    }

    private _handleChangeInput(event: Event) {
      event.stopPropagation();
      const selectEl = event.target as HTMLSelectElement;
      const value = selectEl.value;
      if (this.value === value && this.selectedIndex === selectEl.selectedIndex)
        return;
      const detail: CustomEventDetail = { oldValue: this.value, value: value };
      this.value = value;
      this.selectedIndex = selectEl.selectedIndex;
      dispatchCustomEvent(this, "change", detail);
    }

    shouldUpdate(changedProperties: PropertyValues): boolean {
      if (changedProperties.has("items")) {
        if (!validateItems(this.items)) {
          throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
          return false;
        }
      }

      if (changedProperties.has("value")) {
        if (!validateValueString(this.value)) {
          throwErrorAfterUpdateComplete(
            this,
            ERROR_MESSAGE.VALUE.IS_NOT_STRING
          );
          return false;
        }
      }

      if (changedProperties.has("selectedIndex")) {
        if (!validateSelectedIndexNumber(this.selectedIndex)) {
          throwErrorAfterUpdateComplete(
            this,
            ERROR_MESSAGE.SELECTED_INDEX.IS_NOT_NUMBER
          );
          return false;
        }
      }
      return true;
    }

    willUpdate(changedProperties: PropertyValues): void {
      if (changedProperties.has("value")) {
        if (this.value !== "") return;

        this.selectedIndex = -1;
      }
    }

    update(changedProperties: PropertyValues) {
      if (
        changedProperties.has("items") ||
        changedProperties.has("value") ||
        changedProperties.has("selectedIndex")
      ) {
        this.selectedIndex = this._getSelectedIndex();
        this.value =
          this._getValue({
            items: this.items,
            selectedIndex: this.selectedIndex,
          }) || "";
      }
      super.update(changedProperties);
    }

    private _getSelectedIndex() {
      if (!this.value) {
        if (this.items[this.selectedIndex]) return this.selectedIndex;
        return -1;
      }

      const firstIndex = this.items.findIndex(
        (item) => item.value === this.value
      );
      if (firstIndex === -1) return -1;
      const selectedIndex = this.items.findIndex(
        (item, index) =>
          item.value === this.value && index === this.selectedIndex
      );
      return selectedIndex > -1 ? selectedIndex : firstIndex;
    }

    private _getValue(validProps: MobileDropdownProps) {
      const _items = validProps.items || [];
      const _selectedIndex =
        validProps.selectedIndex === 0 || validProps.selectedIndex
          ? validProps.selectedIndex
          : -1;
      const item = _items[_selectedIndex];
      if (!item) return "";
      return item.value;
    }

    private _isCheckedItem(item: MobileDropdownItem, index: number) {
      if (!this.value) return this.selectedIndex === index;
      return item.value === this.value && this.selectedIndex === index;
    }

    private _getItemTemplate(item: MobileDropdownItem, index: number) {
      const isCheckedItem = this._isCheckedItem(item, index);
      return html`
        <option value="${item.value || ""}" ?selected="${isCheckedItem}">
          ${item.label === undefined ? item.value : item.label}
        </option>
      `;
    }

    render() {
      return html`
        <label
          class="kuc-mobile-dropdown__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label>
        </label>
        <div class="kuc-mobile-dropdown__input-form">
          <div
            class="kuc-mobile-dropdown__input-form__select
            ${this.requiredIcon ? "kuc--required" : ""}"
          >
            <select
              class="kuc-mobile-dropdown__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error !== ""}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            >
              ${this.items.map((item, index) =>
                this._getItemTemplate(item, index)
              )}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error>
      `;
    }

    updated(changedProperties: PropertyValues) {
      if (changedProperties.has("selectedIndex")) {
        this._selectEl.selectedIndex = this.selectedIndex;
      }
      super.update(changedProperties);
    }
  }

  window.customElements.define("kuc-mobile-dropdown", KucMobileDropdown);
  createStyleOnHeader(MOBILE_DROPDOWN_CSS);
  exportMobileDropdown = KucMobileDropdown;
})();
const MobileDropdown = exportMobileDropdown as any;
export { MobileDropdown };
