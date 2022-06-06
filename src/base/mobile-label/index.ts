import { html } from "lit";
import { property } from "lit/decorators.js";
import { KucBase, createStyleOnHeader } from "../kuc-base";
import { BASE_MOBILE_LABEL } from "./style";

let exportBaseMobileLabel;
(() => {
  exportBaseMobileLabel = window.customElements.get("kuc-base-mobile-label");
  if (exportBaseMobileLabel) {
    return;
  }
  class KucBaseMobileLabel extends KucBase {
    @property({ type: Boolean }) requiredIcon = false;
    @property({ type: String }) guid = "";
    @property({ type: String }) text = "";

    render() {
      return html`
        ${this._getTextTemplate()}
        <span
          class="kuc-base-mobile-label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      `;
    }

    private _getTextTemplate() {
      return this.guid && this.guid !== ""
        ? html`
            <span class="kuc-base-mobile-label__text" .id="${this.guid}-group"
              >${this.text}</span
            >
          `
        : html`
            <span class="kuc-base-mobile-label__text">${this.text}</span>
          `;
    }
  }

  window.customElements.define("kuc-base-mobile-label", KucBaseMobileLabel);
  createStyleOnHeader(BASE_MOBILE_LABEL);
  exportBaseMobileLabel = KucBaseMobileLabel;
})();
const BaseMobileLabel = exportBaseMobileLabel as any;
export { BaseMobileLabel };
