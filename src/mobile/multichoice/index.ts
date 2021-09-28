import { html, property, PropertyValues } from "lit-element";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";
import { validateProps } from "../../base/validator";

type Item = {
  label?: string;
  value?: string;
};

type MobileMultiChoiceProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
  value?: string[];
};

export class MobileMultiChoice extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;
  @property({ type: Array }) items: Item[] = [];
  @property({ type: Array }) value: string[] = [];

  private _GUID: string;

  constructor(props?: MobileMultiChoiceProps) {
    super();
    this._GUID = generateGUID();

    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const selectEl = event.target as HTMLSelectElement;
    const detail: CustomEventDetail = { value: [], oldValue: this.value };
    this.value = Array.from(selectEl.selectedOptions, option => option.value);
    detail.value = this.value;
    dispatchCustomEvent(this, "change", detail);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("items")) this._validateItems();
    if (changedProperties.has("value")) this._validateValues();
    super.update(changedProperties);
  }

  private _getItemTemplate(item: Item) {
    return html`
      <option
        value="${item.value || ""}"
        ?selected="${item.value !== undefined
          ? this.value.some(val => val === item.value)
          : false}"
      >
        ${item.label === undefined ? item.value : item.label}
      </option>
    `;
  }

  private _getDuplicatedIndex(values: string[]) {
    for (let index = 0; index < values.length; index++) {
      const value = values[index];
      if (value !== undefined && values.indexOf(value) !== index) return index;
    }
    return -1;
  }

  private _validateItems() {
    if (!Array.isArray(this.items)) {
      throw new Error("'items' property is not array");
    }
    const itemsValue = this.items.map(item => item.value || "");
    const index = this._getDuplicatedIndex(itemsValue);
    if (index > -1)
      throw new Error(`'items[${index}].value' property is duplicated`);
  }

  private _validateValues() {
    if (!Array.isArray(this.value)) {
      throw new Error("'value' property is not array");
    }
    const index = this._getDuplicatedIndex(this.value);
    if (index > -1) throw new Error(`'value[${index}]' property is duplicated`);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-multi-choice__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-mobile-multi-choice__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-multi-choice__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </label>
      <div class="kuc-mobile-multi-choice__input-form">
        <div
          class="kuc-mobile-multi-choice__input-form__select
          ${this.requiredIcon ? "kuc--required" : ""}"
        >
          <select
            class="kuc-mobile-multi-choice__input-form__select__input"
            id="${this._GUID}-label"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            aria-invalid="${this.error !== ""}"
            ?disabled="${this.disabled}"
            multiple
            @change="${this._handleChangeInput}"
          >
            ${this.items.map(item => this._getItemTemplate(item))}
          </select>
        </div>
      </div>
      <div
        class="kuc-mobile-multi-choice__error"
        id="${this._GUID}-error"
        role="alert"
        aria-live="assertive"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-multi-choice,
        kuc-mobile-multi-choice * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-multi-choice,
        :lang(zh) kuc-mobile-multi-choice * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-multi-choice {
          display: inline-block;
          width: 100%;
        }

        kuc-mobile-multi-choice[hidden] {
          display: none;
        }

        .kuc-mobile-multi-choice__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }

        .kuc-mobile-multi-choice__label[hidden] {
          display: none;
        }

        .kuc-mobile-multi-choice__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
        }

        .kuc-mobile-multi-choice__label__required-icon {
          color: #d01212;
          left: 3px;
          position: relative;
        }

        .kuc-mobile-multi-choice__label__required-icon[hidden] {
          display: none;
        }

        .kuc-mobile-multi-choice__input-form {
          word-wrap: break-word;
          min-height: 1em;
          padding-left: 0.5em;
          padding-right: 0.5em;
        }

        .kuc-mobile-multi-choice__input-form__select {
          display: inline-block;
          border-radius: 0.4em;
          max-width: 100%;
        }

        .kuc-mobile-multi-choice__input-form__select.kuc--required {
          border: 1px solid #cf4a38;
        }

        .kuc-mobile-multi-choice__input-form__select__input {
          min-width: 100px;
          max-width: 100%;
        }

        .kuc-mobile-multi-choice__input-form__select__input:disabled {
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-multi-choice__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-multi-choice")) {
  window.customElements.define("kuc-mobile-multi-choice", MobileMultiChoice);
}
