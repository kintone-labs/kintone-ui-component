import { html, property, svg, queryAll } from "lit-element";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";
import { validateProps } from "../../base/validator";

type Item = { value?: string; label?: string };
type RadioButtonProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  value?: string;
  borderVisible?: boolean;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
};

export class MobileRadioButton extends KucBase {
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) borderVisible = true;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;
  @property({
    type: Array,
    hasChanged(newVal: Item[], _oldVal) {
      if (!Array.isArray(newVal)) {
        throw new Error("'items' property is not array");
      }
      const checkedList: string[] = [];
      newVal.forEach((item, index) => {
        const value = item.value === undefined ? "" : item.value;
        if (checkedList.indexOf(value) > -1) {
          throw new Error(
            `'items[${index}].value' is duplicated! You can specify unique one.`
          );
        }
        checkedList.push(value);
      });
      return true;
    }
  })
  items: Item[] = [];

  @queryAll(".kuc-mobile-radio-button__group__select-menu__item__input")
  private _inputEls!: HTMLInputElement[];
  private _GUID: string;

  constructor(props?: RadioButtonProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const inputEl = event.target as HTMLInputElement;
    const value = inputEl.value;
    const detail: CustomEventDetail = { value: value, oldValue: this.value };
    this.value = value;
    dispatchCustomEvent(this, "change", detail);
  }

  private _getRadioIconSvgTemplate(disabled: boolean, checked: boolean) {
    return svg`
    <svg
      class="kuc-mobile-radio-button__group__select-menu__item__label__icon"
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
    <defs>
      <radialGradient id="shadow">
        <stop offset="0%" style="stop-color:#5B5B5B;stop-opacity:0" />
        <stop offset="30%" style="stop-color:#5B5B5B;stop-opacity:0" />
        <stop offset="80%" style="stop-color:#5B5B5B;stop-opacity:0.1" />
        <stop offset="90%" style="stop-color:#5B5B5B;stop-opacity:0.15" />
        <stop offset="100%" style="stop-color:#5B5B5B;stop-opacity:0.2" />
      </radialGradient>
    </defs>
      <circle
        fill="url(#shadow)"
        cx='10.5'
        cy='10.5'
        r='10.15'
        stroke='#bbbbbb' stroke-width='1'/>
      ${
        checked
          ? svg`<circle cx='10.5' cy='10.5' r='6.5' fill='${"#5B5B5B"}'/>`
          : ""
      }
    </svg>
  `;
  }

  private _getItemTemplate(item: Item, index: number) {
    return html`
      <div class="kuc-mobile-radio-button__group__select-menu__item">
        <input
          type="radio"
          aria-describedby="${this._GUID}-error"
          id="${this._GUID}-item-${index}"
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
          >${this._getRadioIconSvgTemplate(
            this.disabled,
            item.value !== undefined ? this.value === item.value : false
          )}
          <div
            class="kuc-mobile-radio-button__group__select-menu__item__label__value"
          >
            ${item.label === undefined ? item.value : item.label}
          </div>
        </label>
      </div>
    `;
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-mobile-radio-button__group">
        <div
          class="kuc-mobile-radio-button__group__label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-mobile-radio-button__group__label__text"
            ><!--
            -->${this.label}</span
          ><!--
            --><span
            class="kuc-mobile-radio-button__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div
          class="kuc-mobile-radio-button__group__select-menu"
          ?borderVisible="${this.borderVisible}"
          ?disabled="${this.disabled}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <div
          class="kuc-mobile-radio-button__group__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `;
  }

  updated() {
    this._inputEls.forEach((inputEl: HTMLInputElement, idx) => {
      inputEl.checked = this.value === inputEl.value;
    });
  }

  private _validateItems() {
    if (!Array.isArray(this.items)) {
      throw new Error("'items' property is not array");
    }
    const itemsValue = this.items.map(item => item.value);
    itemsValue.forEach((value, index, self) => {
      if (value !== undefined && self.indexOf(value) !== index) {
        throw new Error(
          `'items[${index}].value' is duplicated! You can specify unique one.`
        );
      }
    });
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

        .kuc-mobile-radio-button__group__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
        }

        .kuc-mobile-radio-button__group__label[hidden] {
          display: none;
        }

        .kuc-mobile-radio-button__group__label__required-icon {
          position: relative;
          left: 3px;
          color: #d01212;
        }

        .kuc-mobile-radio-button__group__label__required-icon[hidden] {
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

        .kuc-mobile-radio-button__group__error {
          line-height: 1.5;
          color: #000000;
          border: 1px solid #e5db68;
          background-color: #fdffc9;
          margin-top: 0.3em;
          padding: 0.4em 1em;
          border-radius: 0.4em;
          margin-left: 0.5em;
        }

        .kuc-mobile-radio-button__group__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-radio-button")) {
  window.customElements.define("kuc-mobile-radio-button", MobileRadioButton);
}
