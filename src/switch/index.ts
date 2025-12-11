import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";

import { visiblePropConverter } from "../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import { validateProps } from "../base/validator";

import { SWITCH_CSS } from "./style";
import { SwitchLabelPlacement, SwitchProps } from "./type";

let exportSwitch;

(() => {
  exportSwitch = window.customElements.get("kuc-switch");
  if (exportSwitch) {
    return;
  }

  class KucSwitch extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: String }) labelPlacement: SwitchLabelPlacement = "left";
    @property({ type: String }) textOff = "";
    @property({ type: String }) textOn = "";
    @property({ type: Boolean }) checked = false;
    @property({ type: Boolean }) disabled = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    @query(".kuc-switch__group__switch__input")
    private _switchInputEl!: HTMLInputElement;

    @state()
    private _checked = false;

    private _GUID: string;

    constructor(props?: SwitchProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    willUpdate(changedProperties: PropertyValues): void {
      if (changedProperties.has("checked")) {
        this._checked = !!this.checked;
      }
    }

    render() {
      return html`
        <div
          class="kuc-switch__group kuc-switch__group--${this._getLabelPlacement()}"
        >
          <label
            class="kuc-switch__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
          >
            <kuc-base-label .text="${this.label}" />
          </label>
          <label class="kuc-switch__group__switch">
            <input
              class="kuc-switch__group__switch__input"
              id="${this._GUID}-input"
              type="checkbox"
              role="switch"
              aria-labelledby="${this._GUID}-label"
              .checked="${this._checked}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
              @focus="${this._handleFocusInput}"
              @blur="${this._handleBlurInput}"
            />
            <span class="kuc-switch__group__switch__slider">
              <span class="kuc-switch__group__switch__slider__text">
                ${this._checked ? this.textOn : this.textOff}
              </span>
            </span>
          </label>
        </div>
      `;
    }

    private _handleChangeInput(event: MouseEvent | KeyboardEvent) {
      event.stopPropagation();
      const inputEl = event.target as HTMLInputElement;
      this.checked = inputEl.checked;
      const detail = { checked: this.checked };
      dispatchCustomEvent(this, "change", detail);
    }

    private _handleFocusInput(event: MouseEvent | KeyboardEvent) {
      event.stopPropagation();
      const inputEl = event.target as HTMLInputElement;
      const switchEl = inputEl.parentNode as HTMLDivElement;
      switchEl.setAttribute("focused", "");
    }

    private _handleBlurInput(event: MouseEvent | KeyboardEvent) {
      event.stopPropagation();
      const inputEl = event.target as HTMLInputElement;
      const switchEl = inputEl.parentNode as HTMLDivElement;
      switchEl.removeAttribute("focused");
    }

    private _getLabelPlacement() {
      const labelPlacement: SwitchLabelPlacement[] = [
        "top",
        "bottom",
        "left",
        "right",
      ];
      return labelPlacement.includes(this.labelPlacement)
        ? this.labelPlacement
        : "left";
    }
  }
  window.customElements.define("kuc-switch", KucSwitch);
  createStyleOnHeader(SWITCH_CSS);
  exportSwitch = KucSwitch;
})();

const Switch = exportSwitch as any;
export { Switch };
