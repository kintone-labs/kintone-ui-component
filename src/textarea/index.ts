import { html } from "lit";
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

    @query(".kuc-textarea__group__textarea")
    private _textarea!: HTMLTextAreaElement;

    @query(".kuc-textarea__error")
    private _error!: HTMLElement;

    @query(".kuc-textarea__group__label")
    private _labelEl!: HTMLElement;

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
            aria-invalid="${this.error !== ""}"
            @change="${this._handleChangeTextarea}"
            @focus="${this._handleFocusTextarea}"
            @input="${this._handleInputTextArea}"
            ?disabled="${this.disabled}"
          >
          </textarea>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            class="kuc-textarea__error"
          ></kuc-base-error>
        </div>
      `;
    }

    protected updated(): void {
      const onResize = () => {
        const textAreaWidth = getComputedStyle(this._textarea).width;
        const labelWidth = getComputedStyle(this._labelEl).width;
        this._error.style.width =
          parseFloat(textAreaWidth) > parseFloat(labelWidth)
            ? textAreaWidth
            : labelWidth;
      };
      new ResizeObserver(onResize).observe(this._textarea);
    }
  }

  window.customElements.define("kuc-textarea", KucTextArea);
  createStyleOnHeader(TEXTAREA_CSS);
  exportTextarea = KucTextArea;
})();

const TextArea = exportTextarea as any;
export { TextArea };
