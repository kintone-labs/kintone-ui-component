import { html, svg } from "lit";
import { property } from "lit/decorators.js";
import { createStyleOnHeader, KucBase } from "../base/kuc-base";
import { validateProps } from "../base/validator";
import { SpinnerProps } from "./type";
import { SPINNER_CSS } from "./style";

let exportSpinner;

(() => {
  exportSpinner = window.customElements.get("kuc-spinner");
  if (exportSpinner) {
    return;
  }

  class KucSpinner extends KucBase {
    @property({ type: String }) text = "";

    private _body: Element = document.getElementsByTagName("BODY")[0];

    constructor(props?: SpinnerProps) {
      super();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    private _getSpinnerSvgTemplate() {
      return svg`
        <svg
          class="kuc-spinner__spinner__loader"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle r="4" cx="30.43" cy="4.72" opacity="0.3" />
          <circle r="4" cx="39.85" cy="10.15" opacity="0.3" />
          <circle r="4" cx="45.28" cy="19.56" opacity="0.3" />
          <circle r="4" cx="45.28" cy="30.43" opacity="0.3" />
          <circle r="4" cx="39.85" cy="39.85" opacity="0.3" />
          <circle r="4" cx="30.44" cy="45.28" opacity="0.4" />
          <circle r="4" cx="19.56" cy="45.28" opacity="0.5" />
          <circle r="4" cx="10.15" cy="39.85" opacity="0.6" />
          <circle r="4" cx="4.7" cy="30.44" opacity="0.7" />
          <circle r="4" cx="4.7" cy="19.56" opacity="0.8" />
          <circle r="4" cx="10.15" cy="10.15" opacity="0.9" />
          <circle r="4" cx="19.56" cy="4.72" opacity="1" />
        </svg>
      `;
    }

    open() {
      if (this._body.classList.contains("kuc--has-spinner") === false) {
        this._body.classList.add("kuc--has-spinner");
      }
      this._body.appendChild(this);
    }

    close() {
      this._body.classList.remove("kuc--has-spinner");
      this.parentNode && this.parentNode.removeChild(this);
    }

    render() {
      return html`
        <div class="kuc-spinner__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner__spinner__text${!this.text
              ? " visually-hidden"
              : ""}"
          >
            ${!this.text ? "now loading…" : this.text}
          </div>
        </div>
        <div class="kuc-spinner__mask"></div>
      `;
    }
  }
  window.customElements.define("kuc-spinner", KucSpinner);
  createStyleOnHeader(SPINNER_CSS);
  exportSpinner = KucSpinner;
})();

const Spinner = exportSpinner as any;
export { Spinner };
