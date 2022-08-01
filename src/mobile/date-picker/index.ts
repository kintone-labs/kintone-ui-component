import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { visiblePropConverter, dateValueConverter } from "../../base/converter";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
  createStyleOnHeader,
} from "../../base/kuc-base";
import {
  validateProps,
  validateDateValue,
  isValidDate,
  throwErrorAfterUpdateComplete,
} from "../../base/validator";
import "../../base/datetime/mobile-date";
import "../../base/mobile-label";
import "../../base/mobile-error";
import { MOBILE_DATE_PICKER_CSS } from "./style";
import { MobileDatePickerProps } from "./type";
import { FORMAT_IS_NOT_VALID } from "../../base/datetime/resource/constant";

let exportMobileDatePicker;
(() => {
  exportMobileDatePicker = window.customElements.get("kuc-mobile-date-picker");
  if (exportMobileDatePicker) {
    return;
  }

  class KucMobileDatePicker extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({ type: String }) language = "auto";
    @property({ type: String }) value? = "";
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;

    private _GUID: string;
    private _dateConverted: string = "";

    @state()
    private _inputValue: string = "";

    constructor(props?: MobileDatePickerProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    protected shouldUpdate(
      _changedProperties: Map<string | number | symbol, unknown>
    ): boolean {
      if (this.value === undefined || this.value === "") return true;

      if (!validateDateValue(this.value)) {
        throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
        return false;
      }

      this._dateConverted = dateValueConverter(this.value);
      if (this._dateConverted !== "" && !isValidDate(this._dateConverted)) {
        throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
        return false;
      }
      return true;
    }

    willUpdate(changedProperties: PropertyValues): void {
      if (changedProperties.has("value")) {
        if (this.value !== undefined && this.value !== "") {
          this.value = this._dateConverted;
        }
      }
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("value")) {
        this._updateInputValue();
      }
      super.update(changedProperties);
    }

    render() {
      return html`
        <div class="kuc-mobile-date-picker__group">
          <label
            class="kuc-mobile-date-picker__group__label"
            for="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label>
          </label>
          <kuc-mobile-base-date
            class="kuc-mobile-date-picker__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error !== ""}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date>
          <kuc-base-mobile-error .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error>
        </div>
      `;
    }

    private _updateInputValue() {
      if (this.value === undefined || this.value === "") {
        this._inputValue = "";
        return;
      }
      this._inputValue = this.value;
    }

    private _getLanguage() {
      const langs = ["en", "ja", "zh"];
      if (langs.indexOf(this.language) !== -1) return this.language;

      if (langs.indexOf(document.documentElement.lang) !== -1)
        return document.documentElement.lang;

      return "en";
    }

    private _handleDateChange(event: CustomEvent) {
      event.stopPropagation();
      event.preventDefault();
      const eventDetail: CustomEventDetail = {
        oldValue: this.value,
        value: "",
      };
      const theSameValue =
        event.detail.value === this.value ||
        (event.detail.value === undefined && this.value === "");
      if (!theSameValue) {
        this.error = "";
      }
      this.value = event.detail.value;
      eventDetail.value = this.value;
      this._disptchChangeEvent(eventDetail);
    }

    private _disptchChangeEvent(eventDetail: CustomEventDetail) {
      dispatchCustomEvent(this, "change", eventDetail);
    }
  }

  window.customElements.define("kuc-mobile-date-picker", KucMobileDatePicker);
  createStyleOnHeader(MOBILE_DATE_PICKER_CSS);
  exportMobileDatePicker = KucMobileDatePicker;
})();
const MobileDatePicker = exportMobileDatePicker as any;
export { MobileDatePicker };
