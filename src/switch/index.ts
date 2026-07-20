import { html } from "lit";
import { property } from "lit/decorators.js";

import { visiblePropConverter } from "../base/converter";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import { BaseLabel } from "../base/label";
import { validateProps } from "../base/validator";

import { SWITCH_CSS } from "./style";
import {
  SwitchChangeEventDetail,
  SwitchLabelPlacement,
  SwitchProps,
} from "./type";

export { BaseLabel };

let exportSwitch;

(() => {
  exportSwitch = window.customElements.get("kuc-switch");
  if (exportSwitch) {
    return;
  }

  class KucSwitch extends KucBase {
    @property({ type: String }) checkedText = "";
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: String }) labelPlacement: SwitchLabelPlacement = "left";
    @property({ type: String }) unCheckedText = "";
    @property({ type: Boolean }) checked = false;
    @property({ type: Boolean }) disabled = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    private _GUID: string;

    private _validLabelPlacement: SwitchLabelPlacement[] = [
      "top",
      "bottom",
      "left",
      "right",
    ];

    constructor(props?: SwitchProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    render() {
      return html`
        <div
          class="kuc-switch__group kuc-switch__group--${this._getLabelPlacement()}"
        >
          <label
            class="kuc-switch__group__label${this.disabled
              ? " kuc-switch__group__label--disabled"
              : ""}"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
          >
            <kuc-base-label
              .text="${this.label}"
              .guid="${this._GUID}"
            ></kuc-base-label>
          </label>
          <div class="kuc-switch__group__switch">
            <input
              class="kuc-switch__group__switch__input"
              id="${this._GUID}-input"
              type="checkbox"
              role="switch"
              aria-labelledby="${this._GUID}-group"
              aria-describedby="${this._GUID}-text-${this.checked
                ? "checked"
                : "unchecked"}"
              .checked="${this.checked}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            />
            <label
              class="kuc-switch__group__switch__track"
              for="${this._GUID}-input"
            >
              <span
                id="${this._GUID}-text-checked"
                class="kuc-switch__group__switch__track__text kuc-switch__group__switch__track__text--checked"
                >${this.checkedText}</span
              >
              <span
                id="${this._GUID}-text-unchecked"
                class="kuc-switch__group__switch__track__text kuc-switch__group__switch__track__text--unchecked"
                >${this.unCheckedText}</span
              >
            </label>
            <label
              class="kuc-switch__group__switch__handle"
              for="${this._GUID}-input"
            ></label>
          </div>
        </div>
      `;
    }

    private _handleChangeInput(event: Event) {
      event.stopPropagation();
      const inputEl = event.target as HTMLInputElement;
      this.checked = inputEl.checked;
      const detail: SwitchChangeEventDetail = { checked: this.checked };
      dispatchCustomEvent(this, "change", detail);
    }

    private _getLabelPlacement() {
      return this._validLabelPlacement.includes(this.labelPlacement)
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
