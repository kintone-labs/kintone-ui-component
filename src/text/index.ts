import { html } from "lit";
import { property } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail,
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
export { BaseError, BaseLabel };

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

export class Text extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) prefix = "";
  @property({ type: String }) suffix = "";
  @property({ type: String }) textAlign = "left";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter,
  })
  visible = true;

  private _GUID: string;

  constructor(props?: TextProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
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

  private _handleInputText(event: InputEvent) {
    event.stopPropagation();
    const targetEl = event.target as HTMLInputElement;
    const detail: CustomEventDetail = {
      value: targetEl.value,
      data: event.data,
    };
    dispatchCustomEvent(this, "input", detail);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-text__group">
        <label
          class="kuc-text__group__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-label
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-label>
        </label>
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
              placeholder="${this.placeholder}"
              textAlign="${this.textAlign}"
              type="text"
              .value="${this.value}"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error !== ""}"
              aria-describedby="${this._GUID}-error"
              @focus="${this._handleFocusInput}"
              @change="${this._handleChangeInput}"
              @input="${this._handleInputText}"
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
        <kuc-base-error
          .text="${this.error}"
          .guid="${this._GUID}"
        ></kuc-base-error>
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
          display: inline-table;
          vertical-align: top;
          min-width: 193px;
          width: 193px;
          line-height: 1.5;
        }
        kuc-text[hidden] {
          display: none;
        }
        .kuc-text__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin: 0px;
        }
        .kuc-text__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-text__group__label[hidden] {
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
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-text")) {
  window.customElements.define("kuc-text", Text);
}
