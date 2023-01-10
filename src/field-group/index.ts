import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { DirectiveResult } from "lit/directive";
import { UnsafeHTMLDirective } from "lit/directives/unsafe-html";
import { KucBase, generateGUID, createStyleOnHeader } from "../base/kuc-base";
import { unsafeHTMLConverter, visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { FieldGroupProps } from "./type";
import { FIELD_GROUP_CSS } from "./style";

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
    @property({ type: String }) header = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) toggle = false;
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
        <div class="kuc-field-group__group">
          <button
            type="button"
            id="${this._GUID}-control"
            class="kuc-field-group__trigger"
            aria-controls="${this._GUID}-body"
            aria-expanded="${this.toggle && !this.disabled}"
            aria-disabled="${this.disabled}"
            tabindex="${this.disabled ? -1 : 0}"
            @click="${this._handleClickButton}"
          >
            <span class="kuc-field-group__trigger--icon"></span>
            <span class="kuc-field-group__trigger--header">${this.header}</span>
          </button>
          <div
            id="${this._GUID}-body"
            class="kuc-field-group__body"
            aria-labelledby="${this._GUID}-control"
            ?hidden="${!this.toggle || this.disabled}"
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

      this.toggle = !this.toggle;
    }
  }
  window.customElements.define("kuc-field-group", KucFieldGroup);
  createStyleOnHeader(FIELD_GROUP_CSS);
  exportFieldGroup = KucFieldGroup;
})();
const FieldGroup = exportFieldGroup as any;
export { FieldGroup };
