import { html, PropertyValues } from "lit";
import { property, state, query } from "lit/decorators.js";
import { visiblePropConverter, dateValueConverter } from "../base/converter";
import {
  createStyleOnHeader,
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import {
  validateProps,
  validateDateValue,
  isValidDate,
  throwErrorAfterUpdateComplete,
} from "../base/validator";
import "../base/datetime/date";
import { FORMAT_IS_NOT_VALID } from "../base/datetime/resource/constant";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
import { DatePickerProps } from "./type";
import { DATE_PICKER_CSS } from "./style";
export { BaseError, BaseLabel };

let exportDatePicker;
(() => {
  exportDatePicker = window.customElements.get("kuc-date-picker");
  if (exportDatePicker) {
    return;
  }
  class KucDatePicker extends KucBase {
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

    @state()
    private _errorFormat = "";

    @state()
    private _errorText = "";

    private _inputValue? = "";
    private _invalidValue = "";
    private _valueConverted = "";

    private _GUID: string;

    @query(".kuc-base-date__input")
    private _dateInput!: HTMLInputElement;

    constructor(props?: DatePickerProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
      if (this.value === undefined || this.value === "") return true;

      if (typeof this.value !== "string" || !validateDateValue(this.value)) {
        throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
        return false;
      }

      this._valueConverted = dateValueConverter(this.value);
      if (this._valueConverted && !isValidDate(this._valueConverted)) {
        throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
        return false;
      }
      return true;
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("value")) {
        if (this.value === undefined) {
          this._inputValue = this._invalidValue;
        } else {
          this.value = this.value === "" ? this.value : this._valueConverted;
          this._inputValue = this.value;
          this._errorFormat = "";
        }
      }
      super.update(changedProperties);
    }

    render() {
      return html`
        <div class="kuc-date-picker__group">
          <label
            class="kuc-date-picker__group__label"
            for="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </label>
          <kuc-base-date
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error !== ""}"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:base-date-change="${this._handleDateChange}"
          >
          </kuc-base-date>
          <kuc-base-error
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error>
        </div>
      `;
    }

    updated() {
      this._updateErrorText();
      this._invalidValue = "";
    }

    private _updateErrorText() {
      this._errorText = this._errorFormat || this.error;
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
      if (event.detail.error) {
        this.value = undefined;
        this._invalidValue = this._dateInput.value;
        this._errorFormat = event.detail.error;
        this.error = "";
        eventDetail.value = undefined;
      } else {
        this._errorFormat = "";
        this.value = event.detail.value === undefined ? "" : event.detail.value;
        eventDetail.value = this.value;
      }
      this._disptchChangeEvent(eventDetail);
    }

    private _disptchChangeEvent(eventDetail: CustomEventDetail) {
      dispatchCustomEvent(this, "change", eventDetail);
    }
  }

  window.customElements.define("kuc-date-picker", KucDatePicker);
  createStyleOnHeader(DATE_PICKER_CSS);
  exportDatePicker = KucDatePicker;
})();
const DatePicker = exportDatePicker as any;
export { DatePicker };
