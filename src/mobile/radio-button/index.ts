import { html, svg, PropertyValues } from "lit";
import { property, queryAll } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail,
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
import { BaseMobileLabel } from "../../base/mobile-label";
import { BaseMobileError } from "../../base/mobile-error";
export { BaseMobileLabel, BaseMobileError };

type Item = { label?: string; value?: string };
type RadioButtonProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  selectedIndex?: number;
  borderVisible?: boolean;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
};

export class MobileRadioButton extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
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
  @property({ type: Array }) items: Item[] = [];

  @queryAll(".kuc-mobile-radio-button__group__select-menu__item__input")
  private _inputEls!: HTMLInputElement[];

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

  private _isCheckedItem(item: Item, index: number) {
    if (!this.value) return this.selectedIndex === index;
    return item.value === this.value && this.selectedIndex === index;
  }

  private _getItemTemplate(item: Item, index: number) {
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
        throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.VALUE.IS_NOT_STRING);
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
      ${this._getStyleTagTemplate()}
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
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
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
      (item, index) => item.value === this.value && index === this.selectedIndex
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

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-radio-button,
        kuc-mobile-radio-button * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-radio-button,
        :lang(zh) kuc-mobile-radio-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-radio-button {
          width: 100%;
          display: inline-block;
        }

        kuc-mobile-radio-button[hidden] {
          display: none;
        }

        .kuc-mobile-radio-button__group {
          border: none;
          height: auto;
          display: inline-block;
          width: 100%;
        }

        .kuc-mobile-radio-button__group__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }

        .kuc-mobile-radio-button__group__label[hidden] {
          display: none;
        }

        .kuc-mobile-radio-button__group__select-menu {
          margin-right: 0.5em;
          margin-left: 0.5em;
        }

        .kuc-mobile-radio-button__group__select-menu[bordervisible] {
          border-color: #b3b3b3;
          border-width: 1px;
          border-style: solid;
          border-radius: 0.4em;
        }

        .kuc-mobile-radio-button__group__select-menu__item {
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          height: 45px;
          display: block;
        }

        .kuc-mobile-radio-button__group__select-menu[bordervisible]
          .kuc-mobile-radio-button__group__select-menu__item {
          border-bottom: 1px solid #b3b3b3;
        }

        .kuc-mobile-radio-button__group__select-menu[bordervisible]
          .kuc-mobile-radio-button__group__select-menu__item:last-child {
          border-bottom: 0px;
        }

        .kuc-mobile-radio-button__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .kuc-mobile-radio-button__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
          border-radius: 9px;
          left: 8px;
        }

        .kuc-mobile-radio-button__group__select-menu__item__label__value {
          height: 45px;
          line-height: 45px;
          padding-left: 35px;
        }

        .kuc-mobile-radio-button__group__select-menu[disabled] {
          background-color: #d5d7d9;
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-radio-button__group__select-menu__item__label {
          position: absolute;
          white-space: nowrap;
          width: 100%;
          top: 50%;
          transform: translateY(-50%);
          height: 100%;
          padding: 0px;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-radio-button")) {
  window.customElements.define("kuc-mobile-radio-button", MobileRadioButton);
}
