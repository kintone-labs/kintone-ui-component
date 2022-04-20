import { html } from "lit";
import { property } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";
import { validateProps } from "../../base/validator";
import { BaseMobileLabel } from "../../base/mobile-label";
import { BaseMobileError } from "../../base/mobile-error";
export { BaseMobileLabel, BaseMobileError };

type MobileTextAreaProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};

export class MobileTextArea extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
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

  constructor(props?: MobileTextAreaProps) {
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
    const targetEl = event.target as HTMLTextAreaElement;
    const detail: CustomEventDetail = { value: "", oldValue: this.value };
    this.value = targetEl.value;
    detail.value = this.value;
    dispatchCustomEvent(this, "change", detail);
  }

  private _handleInputTextArea(event: InputEvent) {
    event.stopPropagation();
    const targetEl = event.target as HTMLTextAreaElement;
    const detail: CustomEventDetail = {
      value: targetEl.value,
      data: event.data
    };
    dispatchCustomEvent(this, "input", detail);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-textarea__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <kuc-base-mobile-label
          .requiredIcon="${this.requiredIcon}"
          .text="${this.label}"
        ></kuc-base-mobile-label>
      </label>
      <div class="kuc-mobile-textarea__form">
        <textarea
          class="kuc-mobile-textarea__form__textarea"
          id="${this._GUID}-label"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          .value="${this.value}"
          aria-invalid="${this.error !== ""}"
          aria-describedby="${this._GUID}-error"
          aria-required="${this.requiredIcon}"
          @focus="${this._handleFocusInput}"
          @change="${this._handleChangeInput}"
          @input="${this._handleInputTextArea}"
        /></textarea>
      </div>
      <kuc-base-mobile-error .guid="${this._GUID}" .text="${this.error}">
      </kuc-base-mobile-error>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-textarea {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-textarea,
        :lang(zh) kuc-mobile-textarea * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-textarea[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__label {
          padding: 0;
          margin: 0 0 4px 0;
          display: inline-block;
          font-weight: bold;
          line-height: 1.5;
          white-space: nowrap;
        }
        .kuc-mobile-textarea__label[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__form {
          padding-left: 0.5em;
          padding-right: 0.5em;
        }
        .kuc-mobile-textarea__form__textarea {
          width: 100%;
          height: 120px;
          padding: 0.4em;
          border: 1px solid #b3b3b3;
          outline: 0;
          box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
          border-radius: 0.4em;
          box-sizing: border-box;
        }
        .kuc-mobile-textarea__form__textarea[aria-required="true"] {
          border: 1px solid #cf4a38;
        }
        .kuc-mobile-textarea__form__textarea:disabled {
          color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-textarea")) {
  window.customElements.define("kuc-mobile-textarea", MobileTextArea);
}
