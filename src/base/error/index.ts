import { html } from "lit";
import { property } from "lit/decorators.js";
import { createStyleOnHeader, KucBase } from "../kuc-base";
import { BASEERROR_CSS } from "./style";
let exportBaseError;
(() => {
  exportBaseError = window.customElements.get("kuc-base-error");
  if (exportBaseError) {
    return;
  }
  class KucBaseError extends KucBase {
    @property({ type: String }) ariaLive = "";
    @property({ type: String }) guid = "";
    @property({ type: String }) text = "";

    render() {
      return html`
        ${this.ariaLive && this.ariaLive !== ""
          ? html`
              <div
                class="kuc-base-error__error"
                .id="${this.guid}-error"
                role="alert"
                aria-live="${this.ariaLive}"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `
          : html`
              <div
                class="kuc-base-error__error"
                .id="${this.guid}-error"
                role="alert"
                ?hidden="${!this.text}"
              >
                ${this.text}
              </div>
            `}
      `;
    }
  }
  window.customElements.define("kuc-base-error", KucBaseError);
  createStyleOnHeader(BASEERROR_CSS);
  exportBaseError = KucBaseError;
})();
const BaseError = exportBaseError as any;
export { BaseError };
