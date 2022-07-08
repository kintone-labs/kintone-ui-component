import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { timeValueConverter, visiblePropConverter } from "../../base/converter";
import { FORMAT_IS_NOT_VALID } from "../../base/datetime/resource/constant";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
  createStyleOnHeader,
} from "../../base/kuc-base";
import {
  throwErrorAfterUpdateComplete,
  validateProps,
  validateTimeValue,
} from "../../base/validator";
import { MOBILE_TIME_PICKER_CSS } from "./style";
import { MobileTimePickerProps } from "./type";
import "../../base/mobile-error";
import "../../base/datetime/mobile-time";
import "../../base/mobile-label";

let exportMobileTimePicker;
(() => {
  exportMobileTimePicker = window.customElements.get("kuc-mobile-time-picker");
  if (exportMobileTimePicker) {
    return;
  }

  class KucMobileTimePicker extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: String }) language = "auto";
    @property({
      type: String,
      hasChanged(newVal: string, oldVal: string) {
        if ((newVal === "" || newVal === undefined) && newVal === oldVal) {
          return true;
        }
        return newVal !== oldVal;
      },
    })
    value? = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) hour12 = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    private _GUID: string;

    @state()
    private _inputValue: string = "";

    @state()
    private _errorFormat = "";

    private _isSelectError = false;

    constructor(props?: MobileTimePickerProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    protected shouldUpdate(changedProperties: PropertyValues): boolean {
      if (this.value === undefined || this.value === "") return true;
      if (!validateTimeValue(this.value)) {
        throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
        return false;
      }
      return true;
    }

    willUpdate(): void {
      if (this.value === undefined || this.value === "") return;
      this.value = timeValueConverter(this.value);
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("value") && !this._isSelectError) {
        if (this.value === undefined) {
          this._inputValue = "";
        } else {
          this._inputValue = this.value || "";
        }
        this._errorFormat = "";
      }
      super.update(changedProperties);
    }

    render() {
      return html`
        <div class="kuc-mobile-time-picker__group">
          <label
            class="kuc-mobile-time-picker__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label
              .guid="${this._GUID}"
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label>
          </label>
          <div class="kuc-base-mobile-time__group__wrapper">
            <kuc-base-mobile-time
              .value="${this._inputValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time>
          </div>
          <kuc-base-mobile-error
            .guid="${this._GUID}"
            .text="${this._errorFormat || this.error}"
            ariaLive="assertive"
          ></kuc-base-mobile-error>
        </div>
      `;
    }

    updated() {
      this._isSelectError = false;
    }

    private _handleTimeChange(event: CustomEvent) {
      event.preventDefault();
      event.stopPropagation();
      const detail: CustomEventDetail = {
        value: event.detail.value,
        oldValue: this.value,
      };
      this._inputValue = event.detail.value;
      if (event.detail.error) {
        this._isSelectError = true;
        this._errorFormat = event.detail.error;
        this.value = undefined;
        detail.value = undefined;
        this.error = "";
        dispatchCustomEvent(this, "change", detail);
        return;
      }
      const theSameValue = event.detail.value === this.value;
      if (!theSameValue) {
        this.error = "";
      }
      this._isSelectError = false;
      this._errorFormat = "";
      this.value = event.detail.value;
      dispatchCustomEvent(this, "change", detail);
    }

    private _getLanguage() {
      const langs = ["en", "ja", "zh"];
      if (langs.indexOf(this.language) !== -1) return this.language;

      if (langs.indexOf(document.documentElement.lang) !== -1)
        return document.documentElement.lang;

      return "en";
    }
  }

  window.customElements.define("kuc-mobile-time-picker", KucMobileTimePicker);
  createStyleOnHeader(MOBILE_TIME_PICKER_CSS);
  exportMobileTimePicker = KucMobileTimePicker;
})();
const MobileTimePicker = exportMobileTimePicker as any;
export { MobileTimePicker };
