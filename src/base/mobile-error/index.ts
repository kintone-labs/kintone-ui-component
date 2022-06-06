import { html } from "lit";
import { property } from "lit/decorators.js";
import { KucBase, createStyleOnHeader } from "../kuc-base";
import { BASE_MOBILE_ERROR } from "./style";

let exportBaseMobileError;
(() => {
  exportBaseMobileError = window.customElements.get("kuc-base-mobile-error");
  if (exportBaseMobileError) {
    return;
  }
  class KucBaseMobileError extends KucBase {
    @property({ type: String }) ariaLive = "";
    @property({ type: String }) guid = "";
    @property({ type: String }) text = "";

    render() {
      return html`
        ${this.ariaLive && this.ariaLive !== ""
          ? html`
              <div
                class="kuc-base-mobile-error__error"
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
                class="kuc-base-mobile-error__error"
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
  window.customElements.define("kuc-base-mobile-error", KucBaseMobileError);
  createStyleOnHeader(BASE_MOBILE_ERROR);
  exportBaseMobileError = KucBaseMobileError;
})();
const BaseMobileError = exportBaseMobileError as any;
export { BaseMobileError };
