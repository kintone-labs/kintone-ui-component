import { html, PropertyValues, svg } from "lit";
import { property, query } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail,
  createStyleOnHeader,
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import {
  validateProps,
  validateItems,
  validateValueString,
  validateSelectedIndexNumber,
  throwErrorAfterUpdateComplete,
} from "../base/validator";
import { ERROR_MESSAGE } from "../base/constant";
import { getWidthElmByContext } from "../base/context";
import { RadioButtonItem, RadioButtonProps } from "./type";
import { RADIOBUTTON_CSS } from "./style";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
export { BaseError, BaseLabel };

let exportRadioButton;
(() => {
  exportRadioButton = window.customElements.get("kuc-radio-button");
  if (exportRadioButton) {
    return;
  }

  class KucRadioButton extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) itemLayout = "horizontal";
    @property({ type: String }) label = "";
    @property({ type: String }) value = "";
    @property({ type: Number }) selectedIndex = -1;
    @property({ type: Boolean }) borderVisible = true;
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @property({ type: Array }) items: RadioButtonItem[] = [];

    @query(".kuc-radio-button__group__label")
    private _labelEl!: HTMLDivElement;

    @query(".kuc-base-error__error")
    private _errorEl!: HTMLDivElement;

    @query(".kuc-radio-button__group__select-menu")
    private _selectMenuEl!: HTMLDivElement;

    private _GUID: string;

    constructor(props?: RadioButtonProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      this._setInitialValue(validProps);

      Object.assign(this, validProps);
    }

    private _setInitialValue(validProps: RadioButtonProps) {
      const hasValue = "value" in validProps;
      const hasSelectedIndex = "selectedIndex" in validProps;
      if (!hasValue && hasSelectedIndex) {
        this.value = this._getValue(validProps) || "";
      }
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

    private _handleChangeInput(event: MouseEvent | KeyboardEvent) {
      event.stopPropagation();
      const inputEl = event.target as HTMLInputElement;
      const value = inputEl.value;
      const index = inputEl.dataset.index || "0";

      const indexNumber = parseInt(index, 10);
      if (this.value === value && this.selectedIndex === indexNumber) return;
      const detail: CustomEventDetail = { oldValue: this.value, value: value };
      this.value = value;
      this.selectedIndex = indexNumber;
      dispatchCustomEvent(this, "change", detail);
    }

    private _handleFocusInput(event: FocusEvent) {
      const inputEl = event.target as HTMLInputElement;
      const menuEl = inputEl.parentNode as HTMLDivElement;
      menuEl.setAttribute("focused", "");
    }

    private _handleBlurInput(event: FocusEvent) {
      const inputEl = event.target as HTMLInputElement;
      const menuEl = inputEl.parentNode as HTMLDivElement;
      menuEl.removeAttribute("focused");
    }

    private _getRadioIconSvgTemplate(disabled: boolean, checked: boolean) {
      return svg`
    <svg
      class="kuc-radio-button__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${
        checked
          ? svg`<circle cx="10.5" cy="10.5" r="6.5" fill="${
              disabled ? "#e3e7e8" : "#3498db"
            }"/>`
          : ""
      }
    </svg>
  `;
    }

    private _isCheckedItem(item: RadioButtonItem, index: number) {
      if (!this.value) return this.selectedIndex === index;
      return item.value === this.value && this.selectedIndex === index;
    }

    private _getItemTemplate(item: RadioButtonItem, index: number) {
      const isCheckedItem = this._isCheckedItem(item, index);
      return html`
        <div
          class="kuc-radio-button__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${isCheckedItem}"
            aria-describedby="${this._GUID}-error"
            data-index="${index}"
            id="${this._GUID}-item-${index}"
            class="kuc-radio-button__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${item.value !== undefined ? item.value : ""}"
            tabindex="${this._getTabIndex(index, item, this.items)}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            class="kuc-radio-button__group__select-menu__item__label"
            for="${this._GUID}-item-${index}"
            >${this._getRadioIconSvgTemplate(
              this.disabled,
              isCheckedItem
            )}${item.label === undefined ? item.value : item.label}
          </label>
        </div>
      `;
    }

    private _getTabIndex(
      index: number,
      currentItem: RadioButtonItem,
      items: RadioButtonItem[]
    ) {
      if (
        index === 0 &&
        items.filter((item) => item.value === this.value).length === 0
      )
        return "0";
      if (currentItem.value === this.value) return "0";
      return "-1";
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

    render() {
      return html`
        <div
          class="kuc-radio-button__group"
          role="radiogroup"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-radio-button__group__label" ?hidden="${!this.label}">
            <kuc-base-label
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <div
            class="kuc-radio-button__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((item, index) =>
              this._getItemTemplate(item, index)
            )}
          </div>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          ></kuc-base-error>
        </div>
      `;
    }

    async updated() {
      await this.updateComplete;
      this._updateErrorWidth();
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

    private _getValue(validProps: RadioButtonProps) {
      const _items = validProps.items || [];
      const _selectedIndex =
        validProps.selectedIndex === 0 || validProps.selectedIndex
          ? validProps.selectedIndex
          : -1;
      const item = _items[_selectedIndex];
      if (!item) return "";
      return item.value;
    }

    private _updateErrorWidth() {
      const MIN_WIDTH = 239;
      const labelWidth = getWidthElmByContext(this._labelEl);
      const menuWidth = getWidthElmByContext(this._selectMenuEl);

      let errorWidth = labelWidth > MIN_WIDTH ? labelWidth : MIN_WIDTH;
      if (menuWidth > errorWidth) errorWidth = menuWidth;
      this._errorEl.style.width = errorWidth + "px";
    }
  }
  window.customElements.define("kuc-radio-button", KucRadioButton);
  createStyleOnHeader(RADIOBUTTON_CSS);
  exportRadioButton = KucRadioButton;
})();
const RadioButton = exportRadioButton as any;
export { RadioButton };
