import { html, svg } from "lit";
import { property, query } from "lit/decorators.js";
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
export { BaseError, BaseLabel };

import { TEXTAREA_CSS } from "./style";
import { TextAreaProps } from "./type";

let exportTextarea;
(() => {
  exportTextarea = window.customElements.get("kuc-textarea");
  if (exportTextarea) {
    return;
  }

  const TextAreaLayout = {
    MIN_WIDTH: 299,
    MIN_HEIGHT: 125,
  };

  class KucTextArea extends KucBase {
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
      converter: visiblePropConverter,
    })
    visible = true;

    private _GUID: string;
    private _onResize = false;

    @query(".kuc-textarea__group__textarea")
    private _textarea!: HTMLTextAreaElement;

    constructor(props?: TextAreaProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    private _handleFocusTextarea(event: FocusEvent) {
      const detail: CustomEventDetail = { value: this.value };
      dispatchCustomEvent(this, "focus", detail);
    }

    private _handleChangeTextarea(event: Event) {
      event.stopPropagation();
      const targetEl = event.target as HTMLInputElement;
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
        data: event.data,
      };
      dispatchCustomEvent(this, "input", detail);
    }

    private _handleMouseDownResize() {
      this._onResize = true;
    }

    private _handleMouseUpDocument() {
      this._onResize = false;
    }

    private _handleMouseMoveDocument(event: MouseEvent) {
      if (!this._onResize) return;

      const textAreaRect = this._textarea.getBoundingClientRect();
      let textAreaWidth = event.clientX - textAreaRect.left;
      let textAreaHeight = event.clientY - textAreaRect.top;

      if (textAreaWidth < TextAreaLayout.MIN_WIDTH)
        textAreaWidth = TextAreaLayout.MIN_WIDTH;
      if (textAreaHeight < TextAreaLayout.MIN_HEIGHT)
        textAreaHeight = TextAreaLayout.MIN_HEIGHT;

      this.style.width = textAreaWidth + "px";
      this._textarea.style.height = textAreaHeight + "px";
    }

    private _getResizerButtonSvgTemplate() {
      return svg`
      <svg height="16" width="16">
        <g fill="none" stroke="#b6b6b6" stroke-width="2">
          <line x1="14" x2="16" y1="15" y2="15" />
          <line x1="14" x2="16" y1="11" y2="11" />
          <line x1="14" x2="16" y1="7" y2="7" />
          <line x1="10" x2="12" y1="15" y2="15" />
          <line x1="6" x2="8" y1="15" y2="15" />
          <line x1="10" x2="12" y1="11" y2="11" />
        </g>
      </svg>
      `;
    }

    firstUpdated() {
      document.addEventListener("mousemove", (event) =>
        this._handleMouseMoveDocument(event)
      );
      document.addEventListener("mouseup", (_) =>
        this._handleMouseUpDocument()
      );
    }

    render() {
      return html`
        <div class="kuc-textarea__group">
          <label
            class="kuc-textarea__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-label"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </label>
          <textarea
            id="${this._GUID}-label"
            class="kuc-textarea__group__textarea"
            placeholder="${this.placeholder}"
            .value="${this.value}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            aria-invalid="${!this.error}"
            @change="${this._handleChangeTextarea}"
            @focus="${this._handleFocusTextarea}"
            @input="${this._handleInputTextArea}"
            ?disabled="${this.disabled}"
          >
          </textarea>
          <div
            class="kuc-textarea__group__resizer"
            @mousedown="${this._handleMouseDownResize}"
            ?hidden="${this.disabled}"
          >
            ${this._getResizerButtonSvgTemplate()}
          </div>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
          ></kuc-base-error>
        </div>
      `;
    }
  }

  window.customElements.define("kuc-textarea", KucTextArea);
  createStyleOnHeader(TEXTAREA_CSS);
  exportTextarea = KucTextArea;
})();

const TextArea = exportTextarea as any;
export { TextArea };
