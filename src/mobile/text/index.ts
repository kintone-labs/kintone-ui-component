import { html } from "lit";
import { property } from "lit/decorators.js";

import { visiblePropConverter } from "../../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../../base/kuc-base";
import { BaseMobileError } from "../../base/mobile-error";
import { BaseMobileLabel } from "../../base/mobile-label";
import { validateProps } from "../../base/validator";

import { MOBILE_TEXT_CSS } from "./style";
import {
  MobileTextChangeEventDetail,
  MobileTextFocusEventDetail,
  MobileTextInputEventDetail,
  MobileTextProps,
} from "./type";
export { BaseMobileLabel, BaseMobileError };

let exportMobileText;
(() => {
  exportMobileText = window.customElements.get("kuc-mobile-text");
  if (exportMobileText) {
    return;
  }
  class KucMobileText extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
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
      converter: visiblePropConverter,
    })
    visible = true;

    private _GUID: string;

    constructor(props?: MobileTextProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    private _handleFocusInput(event: FocusEvent) {
      const detail: MobileTextFocusEventDetail = { value: this.value };
      dispatchCustomEvent(this, "focus", detail);
    }

    private _handleChangeInput(event: Event) {
      event.stopPropagation();
      const targetEl = event.target as HTMLInputElement;
      const detail: MobileTextChangeEventDetail = {
        value: "",
        oldValue: this.value,
      };
      this.value = targetEl.value;
      detail.value = this.value;
      dispatchCustomEvent(this, "change", detail);
    }

    private _handleInputText(event: InputEvent) {
      event.stopPropagation();
      const targetEl = event.target as HTMLInputElement;
      const detail: MobileTextInputEventDetail = {
        value: targetEl.value,
        data: event.data,
      };
      dispatchCustomEvent(this, "input", detail);
    }

    render() {
      return html`
        <label
          class="kuc-mobile-text__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label>
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
            placeholder="${this.placeholder}"
            textAlign="${this.textAlign}"
            type="text"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            aria-invalid="${this.error !== ""}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputText}"
          />
          <span
            class="kuc-mobile-text__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <kuc-base-mobile-error .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error>
      `;
    }
  }
  window.customElements.define("kuc-mobile-text", KucMobileText);
  createStyleOnHeader(MOBILE_TEXT_CSS);
  exportMobileText = KucMobileText;
})();
const MobileText = exportMobileText as any;
export { MobileText };
