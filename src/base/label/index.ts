import { html } from "lit";
import { property } from "lit/decorators.js";
import { createStyleOnHeader, KucBase } from "../kuc-base";
import { BASELABEL_CSS } from "./style";

let exportBaseLabel;
(() => {
  exportBaseLabel = window.customElements.get("kuc-base-label");
  if (exportBaseLabel) {
    return;
  }
  class KucBaseLabel extends KucBase {
    @property({ type: Boolean }) requiredIcon = false;
    @property({ type: String }) guid = "";
    @property({ type: String }) text = "";

    render() {
      return html`
        ${this._getTextTemplate()}
        <span
          class="kuc-base-label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      `;
    }

    private _getTextTemplate() {
      return this.guid && this.guid !== ""
        ? html`
            <span class="kuc-base-label__text" .id="${this.guid}-group"
              >${this.text}</span
            >
          `
        : html`
            <span class="kuc-base-label__text">${this.text}</span>
          `;
    }
  }

  window.customElements.define("kuc-base-label", KucBaseLabel);
  createStyleOnHeader(BASELABEL_CSS);
  exportBaseLabel = KucBaseLabel;
})();
const BaseLabel = exportBaseLabel as any;
export { BaseLabel };
