import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
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
          >
            <span class="kuc-field-group__group__toggle__icon"></span>
            <span class="kuc-field-group__group__toggle__label"
              >${this.label}</span
            >
          </button>
          <div
            id="${this._GUID}-body"
            class="kuc-field-group__group__body"
            ?hidden="${!this.expanded || this.disabled}"
          >
            ${this._content}
          </div>
        </div>
      `;
    }

    private _handleClickButton(event: Event) {
      if (this.disabled) {
        event.preventDefault();
        return;
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
