import { html, svg, PropertyValues } from "lit";
import { property, queryAll } from "lit/decorators.js";
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
  validateSelectedIndexNumber,
  validateItems,
  throwErrorAfterUpdateComplete,
} from "../../base/validator";
import { ERROR_MESSAGE } from "../../base/constant";
import { MOBILE_RADIO_BUTTON_CSS } from "./style";
import { MobileRadioButtonItem, MobileRadioButtonProps } from "./type";
import { BaseMobileLabel } from "../../base/mobile-label";
import { BaseMobileError } from "../../base/mobile-error";
export { BaseMobileLabel, BaseMobileError };

let exportMobileRadioButton;
(() => {
  exportMobileRadioButton = window.customElements.get(
    "kuc-mobile-radio-button"
  );
  if (exportMobileRadioButton) {
    return;
  }

  class KucMobileRadioButton extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
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
    @property({ type: Array }) items: MobileRadioButtonItem[] = [];

    @queryAll(".kuc-mobile-radio-button__group__select-menu__item__input")
    private _inputEls!: HTMLInputElement[];

    private _GUID: string;

    constructor(props?: MobileRadioButtonProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      this._setInitialValue(validProps);
      Object.assign(this, validProps);
    }

    private _setInitialValue(validProps: MobileRadioButtonProps) {
      const hasValue = "value" in validProps;
      const hasSelectedIndex = "selectedIndex" in validProps;
      if (!hasValue && hasSelectedIndex) {
        this.value = this._getValue(validProps) || "";
      }
    }

    willUpdate(changedProperties: PropertyValues): void {
      if (changedProperties.has("value")) {
        if (this.value !== "") return;

        this.selectedIndex = -1;
      }
    }

    private _handleChangeInput(event: Event) {
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

    private _getRadioIconSvgTemplate(disabled: boolean, checked: boolean) {
      return svg`
      <svg
        class="kuc-mobile-radio-button__group__select-menu__item__label__icon"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <radialGradient id="${this._GUID}-shadow">
          <stop offset="0%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="30%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="80%" style="stop-color:#5b5b5b;stop-opacity:0.1" />
          <stop offset="90%" style="stop-color:#5b5b5b;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#5b5b5b;stop-opacity:0.2" />
        </radialGradient>
      </defs>
        <circle
          fill="url(#shadow)"
          cx="10.5"
          cy="10.5"
          r="10.15"
          stroke="#bbbbbb" stroke-width="1"/>
        ${
          checked
            ? svg`<circle cx="10.5" cy="10.5" r="6.5" fill="${"#5b5b5b"}"/>`
            : ""
        }
      </svg>
    `;
    }

    private _isCheckedItem(item: MobileRadioButtonItem, index: number) {
      if (!this.value) return this.selectedIndex === index;
      return item.value === this.value && this.selectedIndex === index;
    }

    private _getItemTemplate(item: MobileRadioButtonItem, index: number) {
      const isCheckedItem = this._isCheckedItem(item, index);
      return html`
        <div class="kuc-mobile-radio-button__group__select-menu__item">
          <input
            type="radio"
            aria-describedby="${this._GUID}-error"
            id="${this._GUID}-item-${index}"
            data-index="${index}"
            class="kuc-mobile-radio-button__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${item.value !== undefined ? item.value : ""}"
            aria-invalid="${this.error !== ""}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <label
            class="kuc-mobile-radio-button__group__select-menu__item__label"
            for="${this._GUID}-item-${index}"
            >${this._getRadioIconSvgTemplate(this.disabled, isCheckedItem)}
            <div
              class="kuc-mobile-radio-button__group__select-menu__item__label__value"
            >
              ${item.label === undefined ? item.value : item.label}
            </div>
          </label>
        </div>
      `;
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
        <div class="kuc-mobile-radio-button__group">
          <div
            class="kuc-mobile-radio-button__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label>
          </div>
          <div
            class="kuc-mobile-radio-button__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((item, index) =>
              this._getItemTemplate(item, index)
            )}
          </div>
          <kuc-base-mobile-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error>
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
        (item) => item.value === this.value
      );
      if (firstIndex === -1) return -1;
      const selectedIndex = this.items.findIndex(
        (item, index) =>
          item.value === this.value && index === this.selectedIndex
      );
      return selectedIndex > -1 ? selectedIndex : firstIndex;
    }

    private _getValue(validProps: MobileRadioButtonProps) {
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

  window.customElements.define("kuc-mobile-radio-button", KucMobileRadioButton);
  createStyleOnHeader(MOBILE_RADIO_BUTTON_CSS);
  exportMobileRadioButton = KucMobileRadioButton;
})();
const MobileRadioButton = exportMobileRadioButton as any;
export { MobileRadioButton };
