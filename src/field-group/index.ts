import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import { DirectiveResult } from "lit/directive";
import { UnsafeHTMLDirective } from "lit/directives/unsafe-html";

import { unsafeHTMLConverter, visiblePropConverter } from "../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import { validateProps } from "../base/validator";

import { FIELD_GROUP_CSS } from "./style";
import { FieldGroupChangeEventDetail, FieldGroupProps } from "./type";

import "../base/label";

let exportFieldGroup;
(() => {
  exportFieldGroup = window.customElements.get("kuc-field-group");
  if (exportFieldGroup) {
    return;
  }

  class KucFieldGroup extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property() content: string | HTMLElement = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) expanded = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    private _content:
      | HTMLElement
      | DirectiveResult<typeof UnsafeHTMLDirective> = "";
    private _GUID: string;

    @query(".kuc-field-group__group")
    private _groupEl!: HTMLDivElement;
    @query(".kuc-field-group__group__body")
    private _bodyEl!: HTMLDivElement;
    @query(".kuc-field-group__group__toggle")
    private _toggle!: HTMLButtonElement;

    constructor(props?: FieldGroupProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("content")) {
        this._content = unsafeHTMLConverter(this.content);
      }
      super.update(changedProperties);
    }

    render() {
      return html`
        <div
          class="kuc-field-group__group"
          role="group"
          aria-labelledby="${this._GUID}-control"
        >
          <button
            type="button"
            id="${this._GUID}-control"
            class="kuc-field-group__group__toggle"
            aria-controls="${this._GUID}-body"
            aria-expanded="${this.expanded && !this.disabled}"
            ?disabled="${this.disabled}"
            @click="${this._handleClickButton}"
            @keydown="${this._handleKeyDownButton}"
          >
            ${this._getSvgTemplate()}
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${false}"
            ></kuc-base-label>
          </button>
          <div
            id="${this._GUID}-body"
            class="kuc-field-group__group__body"
            ?hidden="${!this.expanded || this.disabled}"
            @change="${this._handleChangeBody}"
          >
            ${this._content}
          </div>
        </div>
      `;
    }

    firstUpdated(): void {
      this._updateContainerWidth();
    }

    private _updateContainerWidth() {
      if (!this._bodyEl) return;

      const DEFAULT_WIDTH = 517;
      const isBodyHidden = this._bodyEl.hasAttribute("hidden");
      if (isBodyHidden) {
        this._bodyEl.removeAttribute("hidden");
      }
      const bodyWidth = this._bodyEl.offsetWidth;
      if (isBodyHidden) {
        this._bodyEl.setAttribute("hidden", "");
      }
      if (bodyWidth <= DEFAULT_WIDTH) return;

      this._groupEl.style.minWidth = bodyWidth + "px";
    }

    private _getSvgTemplate() {
      return this.expanded
        ? html`<svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7122 0.5L12.5 1.03608L7.23318 7.11548L5.76682 7.11548L0.5 1.03608L1.2878 0.5L6.26504 6.19318L6.73496 6.19318L11.7122 0.5Z"
              fill="#939393"
            />
          </svg>`
        : html`<svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 1.2878L1.03608 0.5L7.11548 5.76682V7.23318L1.03608 12.5L0.5 11.7122L6.19318 6.73496V6.26504L0.5 1.2878Z"
              fill="#939393"
            />
          </svg> `;
    }

    private _handleChangeBody(event: Event) {
      event.stopPropagation();
    }

    private _handleKeyDownButton(event: KeyboardEvent) {
      if (event.key === "Tab") return;

      event.preventDefault();
      if (event.key === "Enter" || event.key === " ") {
        this._handleClickButton(event);
      }
    }

    private _handleClickButton(event: Event) {
      if (event.target !== document.activeElement) {
        this._toggle.focus();
      }
      this.expanded = !this.expanded;
      const eventDetail: FieldGroupChangeEventDetail = {
        expanded: this.expanded,
      };
      dispatchCustomEvent(this, "change", eventDetail);
    }
  }
  window.customElements.define("kuc-field-group", KucFieldGroup);
  createStyleOnHeader(FIELD_GROUP_CSS);
  exportFieldGroup = KucFieldGroup;
})();
const FieldGroup = exportFieldGroup as any;
export { FieldGroup };
