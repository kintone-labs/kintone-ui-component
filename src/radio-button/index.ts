import { html, PropertyValues, svg } from "lit";
import { property, queryAll } from "lit/decorators.js";

import { ERROR_MESSAGE } from "../base/constant";
import { visiblePropConverter } from "../base/converter";
import { BaseError } from "../base/error";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import { BaseLabel } from "../base/label";
import {
  validateArrayType,
  validateNumberType,
  validateProps,
  validateValueString,
} from "../base/validator";

import { RADIOBUTTON_CSS } from "./style";
import {
  RadioButtonChangeEventDetail,
  RadioButtonItem,
  RadioButtonProps,
} from "./type";

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
    @property({ type: String }) itemLayout: "horizontal" | "vertical" =
      "horizontal";
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

    private _GUID: string;

    @queryAll(".kuc-radio-button__group__select-menu__item__input")
    private _inputEls!: HTMLInputElement[];

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
        if (!validateArrayType(this.items)) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
          return false;
        }
      }

      if (changedProperties.has("value")) {
        if (!validateValueString(this.value)) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.VALUE.IS_NOT_STRING);
          return false;
        }
      }

      if (changedProperties.has("selectedIndex")) {
        if (!validateNumberType(this.selectedIndex)) {
          this.throwErrorAfterUpdateComplete(
            ERROR_MESSAGE.SELECTED_INDEX.IS_NOT_NUMBER,
          );
          return false;
        }
      }
      return true;
    }

    private _findItemToFocus() {
      let index = -1;

      for (let i = 0; i < this.items.length; i++) {
        const currentItem = this.items[i];
        if (currentItem.disabled) continue;

        if (this.selectedIndex === i && currentItem.value === this.value) {
          index = i;
          continue;
        }
        if (index === -1) {
          index = i;
        }
      }

      return index;
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
      const eventDetail: RadioButtonChangeEventDetail = {
        oldValue: this.value,
        value: value,
      };
      this.value = value;
      this.selectedIndex = indexNumber;
      dispatchCustomEvent(this, "change", eventDetail);
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

    private _getRadioIconSvgTemplate(
      disabled: boolean | undefined,
      checked: boolean,
    ) {
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
      const isDisabledItem = item.disabled || this.disabled;
      const itemValue = item.value !== undefined ? item.value : "";
      const tabIndex = index === this._findItemToFocus() ? "0" : "-1";

      return html`
        <div
          class="kuc-radio-button__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${isCheckedItem ? "true" : "false"}"
            aria-describedby="${this._GUID}-error"
            data-index="${index}"
            id="${this._GUID}-item-${index}"
            class="kuc-radio-button__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${itemValue}"
            tabindex="${tabIndex}"
            aria-required="${this.requiredIcon}"
            ?disabled="${isDisabledItem}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            class="kuc-radio-button__group__select-menu__item__label"
            for="${this._GUID}-item-${index}"
            >${this._getRadioIconSvgTemplate(
              isDisabledItem,
              isCheckedItem,
            )}${item.label === undefined ? item.value : item.label}
          </label>
        </div>
      `;
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
              this._getItemTemplate(item, index),
            )}
          </div>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error>
        </div>
      `;
    }

    updated() {
      this._inputEls.forEach((inputEl: HTMLInputElement, idx) => {
        inputEl.checked =
          this.value === inputEl.value && idx === this.selectedIndex;
      });
    }

    private _getSelectedIndex() {
      if (!this.value) {
        if (this.items[this.selectedIndex]) return this.selectedIndex;
        return -1;
      }

      const firstIndex = this.items.findIndex(
        (item) => item.value === this.value,
      );
      if (firstIndex === -1) return -1;
      const selectedIndex = this.items.findIndex(
        (item, index) =>
          item.value === this.value && index === this.selectedIndex,
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
  }
  window.customElements.define("kuc-radio-button", KucRadioButton);
  createStyleOnHeader(RADIOBUTTON_CSS);
  exportRadioButton = KucRadioButton;
})();
const RadioButton = exportRadioButton as any;
export { RadioButton };
