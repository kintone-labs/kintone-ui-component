import { html } from "lit";
import { property } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail,
  createStyleOnHeader,
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
import { TextProps } from "./type";
import { TEXT_CSS } from "./style";
export { BaseError, BaseLabel };

let exportText;
(() => {
  exportText = window.customElements.get("kuc-text");
  if (exportText) {
    return;
  }
  class KucText extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
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
  }
  window.customElements.define("kuc-text", KucText);
  createStyleOnHeader(TEXT_CSS);
  exportText = KucText;
})();
const Text = exportText as any;
export { Text };
