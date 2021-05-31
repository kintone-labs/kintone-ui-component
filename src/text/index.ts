import { LitElement, html, property } from "lit-element";
import { v4 as uuid } from "uuid";

type TextProps = {
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

type CustomEventDetail = {
  value: string;
  oldValue?: string;
};

export class Text extends LitElement {
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) prefix = "";
  @property({ type: String }) suffix = "";
  @property({ type: String }) textAlign = "left";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: Boolean }) visible = true;

  private _GUID: string;

  constructor(props?: TextProps) {
    super();
    this._GUID = this._generateGUID();
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

  private _generateGUID(): string {
    return uuid();
  }

  private _updateVisible() {
    if (!this.visible) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  }

  private _handleFocusInput(event: FocusEvent) {
    const detail: CustomEventDetail = { value: this.value };
    this._dispatchCustomEvent("focus", detail);
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const targetEl = event.target as HTMLInputElement;
    const detail: CustomEventDetail = { value: "", oldValue: this.value };
    this.value = targetEl.value;
    detail.value = this.value;
    this._dispatchCustomEvent("change", detail);
  }

  private _dispatchCustomEvent(eventName: string, detail?: CustomEventDetail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });
    return this.dispatchEvent(event);
  }

  createRenderRoot() {
    return this;
  }

  render() {
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-text__group">
        <div class="kuc-text__group__label" ?hidden="${!this.label}">
          <span class="kuc-text__group__label__text">${this.label}</span
          ><!--
            --><span
            class="kuc-text__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </div>
        <div class="kuc-text__group__input-form">
          <div class="kuc-text__group__input-form__prefix-outer">
            <span
              class="kuc-text__group__input-form__prefix-outer__prefix"
              ?hidden="${!this.prefix}"
              >${this.prefix}</span
            >
          </div>
          <div class="kuc-text__group__input-form__input-outer">
            <input
              class="kuc-text__group__input-form__input-outer__input"
              id="${this._GUID}-label"
              placeholder=${this.placeholder}
              textAlign=${this.textAlign}
              type="text"
              .value=${this.value}
              aria-required=${this.requiredIcon}
              aria-invalid="${this.error !== ""}"
              aria-describedby="${this._GUID}-error"
              @focus="${this._handleFocusInput}"
              @change="${this._handleChangeInput}"
              ?disabled="${this.disabled}"
            />
          </div>
          <div class="kuc-text__group__input-form__suffix-outer">
            <span
              class="kuc-text__group__input-form__suffix-outer__suffix"
              ?hidden="${!this.suffix}"
              >${this.suffix}</span
            >
          </div>
        </div>
        <div
          class="kuc-text__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden=${!this.error}
        >
          ${this.error}
        </div>
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-text,
        kuc-text *,
        :lang(en) kuc-text,
        :lang(en) kuc-text * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-text,
        :lang(ja) kuc-text * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-text,
        :lang(zh) kuc-text * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-text {
          font-size: 14px;
          color: #333333;
          display: table;
          vertical-align: top;
          min-width: 193px;
          width: 193px;
        }
        kuc-text[hidden] {
          display: none;
        }
        .kuc-text__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        .kuc-text__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-text__group__label[hidden] {
          display: none;
        }
        .kuc-text__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-text__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-text__group__input-form {
          display: table;
          width: 100%;
        }
        .kuc-text__group__input-form__prefix-outer,
        .kuc-text__group__input-form__input-outer,
        .kuc-text__group__input-form__suffix-outer {
          display: table-cell;
        }
        .kuc-text__group__input-form__prefix-outer__prefix {
          padding-right: 4px;
          white-space: nowrap;
        }
        .kuc-text__group__input-form__input-outer {
          min-width: 26px;
          width: 100%;
        }
        .kuc-text__group__input-form__input-outer__input {
          min-width: 100%;
          width: 100%;
          height: 40px;
          padding: 0 8px;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
        }
        .kuc-text__group__input-form__input-outer__input[textAlign="left"] {
          text-align: left;
        }
        .kuc-text__group__input-form__input-outer__input[textAlign="right"] {
          text-align: right;
        }
        .kuc-text__group__input-form__input-outer__input:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-text__group__input-form__input-outer__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }
        .kuc-text__group__input-form__suffix-outer__suffix {
          padding-left: 4px;
          white-space: nowrap;
        }
        .kuc-text__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-text__group__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-text")) {
  window.customElements.define("kuc-text", Text);
}
