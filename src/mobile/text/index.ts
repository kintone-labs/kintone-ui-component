import { html, property } from "lit-element";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";

type MobileTextProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  textAlign?: "left" | "right";
  value?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};

export class MobileText extends KucBase {
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) prefix = "";
  @property({ type: String }) suffix = "";
  @property({ type: String }) textAlign: "left" | "right" = "left";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;

  private _GUID: string;

  constructor(props?: MobileTextProps) {
    super();
    this._GUID = generateGUID();
    if (!props) {
      return;
    }
    this.className =
      props.className !== undefined ? props.className : this.className;
    this.error = props.error !== undefined ? props.error : this.error;
    this.id = props.id !== undefined ? props.id : this.id;
    this.label = props.label !== undefined ? props.label : this.label;
    this.placeholder =
      props.placeholder !== undefined ? props.placeholder : this.placeholder;
    this.prefix = props.prefix !== undefined ? props.prefix : this.prefix;
    this.suffix = props.suffix !== undefined ? props.suffix : this.suffix;
    this.textAlign =
      props.textAlign !== undefined ? props.textAlign : this.textAlign;
    this.value = props.value !== undefined ? props.value : this.value;
    this.disabled =
      props.disabled !== undefined ? props.disabled : this.disabled;
    this.requiredIcon =
      props.requiredIcon !== undefined ? props.requiredIcon : this.requiredIcon;
    this.visible = props.visible !== undefined ? props.visible : this.visible;
  }

  private _handleFocusInput(event: FocusEvent) {
    const detail: CustomEventDetail = { value: this.value };
    dispatchCustomEvent(this, "focus", detail);
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const targetEl = event.target as HTMLInputElement;
    const detail: CustomEventDetail = { value: "", oldValue: this.value };
    this.value = targetEl.value;
    detail.value = this.value;
    dispatchCustomEvent(this, "change", detail);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-text__label"
        for="${this._GUID}-label"
        ?hidden=${!this.label}
      >
        <span class="kuc-mobile-text__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-text__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </label>
      <div class="kuc-mobile-text__input-form">
        <span
          class="kuc-mobile-text__input-form__prefix"
          ?hidden="${!this.prefix}"
          >${this.prefix}</span
        >
        <input
          class="kuc-mobile-text__input-form__input"
          id="${this._GUID}-label"
          placeholder=${this.placeholder}
          textAlign=${this.textAlign}
          type="text"
          .value=${this.value}
          ?disabled="${this.disabled}"
          aria-invalid="${this.error !== ""}"
          aria-describedby="${this._GUID}-error"
          aria-required="${this.requiredIcon}"
          @focus="${this._handleFocusInput}"
          @change="${this._handleChangeInput}"
        />
        <span
          class="kuc-mobile-text__input-form__suffix"
          ?hidden="${!this.suffix}"
          >${this.suffix}</span
        >
      </div>
      <div
        class="kuc-mobile-text__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-text {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-text,
        :lang(zh) kuc-mobile-text * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-text[hidden] {
          display: none;
        }
        .kuc-mobile-text__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }
        .kuc-mobile-text__label[hidden] {
          display: none;
        }
        .kuc-mobile-text__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
        }
        .kuc-mobile-text__label__required-icon {
          position: relative;
          left: 3px;
          color: #d01212;
        }
        .kuc-mobile-text__label__required-icon[hidden] {
          display: none;
        }
        .kuc-mobile-text__input-form {
          padding-left: 0.5em;
          padding-right: 0.5em;
          display: flex;
          align-items: center;
        }
        .kuc-mobile-text__input-form__prefix {
          margin-right: 4px;
          color: #888888;
        }
        .kuc-mobile-text__input-form__prefix[hidden] {
          display: none;
        }
        .kuc-mobile-text__input-form__input {
          width: 100%;
          min-width: 20px;
          padding: 0.4em;
          border: 1px solid #b3b3b3;
          outline: 0;
          box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
          border-radius: 0.4em;
          box-sizing: border-box;
          text-align: left;
        }
        .kuc-mobile-text__input-form__input[aria-required="true"] {
          border: 1px solid #cf4a38;
        }
        .kuc-mobile-text__input-form__input[textAlign="right"] {
          text-align: right;
        }
        .kuc-mobile-text__input-form__input:disabled {
          color: #999999;
          background-color: #d5d7d9;
          -webkit-text-fill-color: #999999;
          opacity: 1;
          -webkit-opacity: 1;
        }
        .kuc-mobile-text__input-form__suffix {
          margin-left: 4px;
          color: #888888;
        }
        .kuc-mobile-text__input-form__suffix[hidden] {
          display: none;
        }
        .kuc-mobile-text__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
        .kuc-mobile-text__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-text")) {
  window.customElements.define("kuc-mobile-text", MobileText);
}
