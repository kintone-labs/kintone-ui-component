import { html } from "lit";
import { property } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail,
  createStyleOnHeader
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";
import { validateProps } from "../../base/validator";
import { MobileTextAreaProps } from "./type";
import { MOBILE_TEXTAREA_CSS } from "./style";

let exportMobileTextArea;
(() => {
  exportMobileTextArea = window.customElements.get("kuc-mobile-textarea");
  if (exportMobileTextArea) {
    return;
  }
  class KucMobileTextArea extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
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
        <label
          class="kuc-mobile-textarea__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-mobile-textarea__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-mobile-textarea__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
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
        <div
          class="kuc-mobile-textarea__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      `;
    }
  }
  window.customElements.define("kuc-mobile-textarea", KucMobileTextArea);
  createStyleOnHeader(MOBILE_TEXTAREA_CSS);
  exportMobileTextArea = KucMobileTextArea;
})();
const MobileTextArea = exportMobileTextArea as any;
export { MobileTextArea };
