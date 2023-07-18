import { html, PropertyValues, svg } from "lit";
import { property } from "lit/decorators.js";

import { ERROR_MESSAGE } from "../base/constant";
import { createStyleOnHeader, KucBase } from "../base/kuc-base";
import { validateProps } from "../base/validator";

import { SPINNER_CSS } from "./style";
import { SpinnerProps } from "./type";

let exportSpinner;

(() => {
  exportSpinner = window.customElements.get("kuc-spinner");
  if (exportSpinner) {
    return;
  }

  class KucSpinner extends KucBase {
    @property({ type: String }) text = "";
    @property() container: HTMLElement = document.body;

    private _isOpened = false;

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

    private _isValidContainerElement() {
      return this.container instanceof HTMLElement;
    }

    open() {
      const isValidContainer = this._isValidContainerElement();
      if (!isValidContainer) {
        document.body.appendChild(this);
        requestAnimationFrame(() => {
          document.body.removeChild(this);
        });
        this.performUpdate();
        return;
      }

      this.parentElement &&
        this.parentElement.classList.remove("kuc--has-spinner");
      this.container.appendChild(this);
      this.performUpdate();

      if (!this.container.classList.contains("kuc--has-spinner")) {
        this.container.classList.add("kuc--has-spinner");
      }
      this._isOpened = true;
    }

    close() {
      this.parentElement &&
        this.parentElement.classList.remove("kuc--has-spinner");
      this._isOpened = false;
      this.parentNode && this.parentNode.removeChild(this);
    }

    shouldUpdate(changedProperties: PropertyValues): boolean {
      if (changedProperties.has("container")) {
        if (this.container === null || this.container === undefined) {
          this._isOpened && this.close();
          return false;
        }

        const isValidContainer = this._isValidContainerElement();
        const shouldClose =
          !isValidContainer || !document.contains(this.container);
        if (this._isOpened && shouldClose) {
          this.close();
        }

        if (!isValidContainer) {
          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.CONTAINER.INVALID);
          return false;
        }
      }
      return true;
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
