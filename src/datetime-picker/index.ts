/* eslint-disable kuc-v1/validator-in-should-update */
import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import {
  generateGUID,
  KucBase,
  dispatchCustomEvent,
  createStyleOnHeader
} from "../base/kuc-base";
import {
  visiblePropConverter,
  dateValueConverter,
  timeValueConverter
} from "../base/converter";
import { getWidthElmByContext } from "../base/context";
import {
  validateProps,
  validateDateTimeValue,
  isValidDate,
  throwErrorAfterUpdateComplete
} from "../base/validator";
import { FORMAT_IS_NOT_VALID } from "../base/datetime/resource/constant";
import { DateTimePickerProps } from "./type";
import { DATETIMEPICKER_CSS } from "./style";

import "../base/datetime/date";
import "../base/datetime/time";

type DateAndTime = {
  date: string;
  time: string;
};

let exportDateTimePicker;
(() => {
  exportDateTimePicker = window.customElements.get("kuc-datetime-picker");
  if (exportDateTimePicker) {
    return;
  }

  class KucDateTimePicker extends KucBase {
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
      }
    })
    value? = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) hour12 = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter
    })
    visible = true;

    @query(".kuc-base-date__input")
    private _dateInput!: HTMLInputElement;

    @query(".kuc-datetime-picker__group__error")
    private _errorEl!: HTMLDivElement;

    @query(".kuc-datetime-picker__group__label")
    private _labelEl!: HTMLFieldSetElement;

    private _dateValue = "";
    private _timeValue = "";

    private _previousTimeValue = "";
    private _previousDateValue = "";

    private _errorFormat = "";
    private _errorText = "";

    private _GUID: string;
    private _dateAndTime!: DateAndTime;
    private _dateConverted: string = "";
    private _changeDateByUI = false;
    private _changeTimeByUI = false;

    constructor(props?: DateTimePickerProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
      if (this.value === undefined || this.value === "") return true;

      if (typeof this.value !== "string") {
        throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
        return false;
      }

      this._dateAndTime = this._getDateTimeValue(this.value);
      this._dateConverted = dateValueConverter(this._dateAndTime.date);
      const isValidValue =
        validateDateTimeValue(this._dateAndTime.date, this._dateAndTime.time) &&
        isValidDate(this._dateConverted);
      if (!isValidValue) {
        throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
        return false;
      }

      return true;
    }

    willUpdate(_changedProperties: PropertyValues): void {
      const changeByUI = this._changeDateByUI || this._changeTimeByUI;
      if (changeByUI) {
        this._updateValueChangeByUI();
        return;
      }

      this._updateValueWhenSetter();
    }

    private _updateValueChangeByUI() {
      const validFormat = this._validateDateTimeFormat();
      this.value = validFormat ? this.value : undefined;
      if (this._changeTimeByUI) return;

      this._errorText = validFormat ? this.error : this._errorFormat;
    }

    private _validateDateTimeFormat() {
      const isMissingDatePart = Boolean(this._timeValue) && !this._dateValue;
      const isMissingTimePart = Boolean(this._dateValue) && !this._timeValue;
      const validFormat =
        !this._errorFormat && !isMissingDatePart && !isMissingTimePart;
      return validFormat;
    }

    private _updateValueWhenSetter() {
      this._errorText = this.error;
      if (this.value === "" || this.value === undefined) {
        this._previousTimeValue = "";
        this._errorFormat = "";
        return;
      }

      this._setDateTimeValueSeparate(this._dateAndTime, this._dateConverted);
      this.value = this._getDateTimeString();
    }

    private _setDateTimeValueSeparate(
      dateTime: DateAndTime,
      dateValue: string
    ) {
      this._dateValue = dateValue || this._dateInput.value;
      this._timeValue =
        this._dateValue && isValidDate(dateValue)
          ? timeValueConverter(dateTime.time.slice(0, 5))
          : this._previousTimeValue;
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("value")) {
        if (this.value === undefined) {
          this._setUndefinedValue();
        }
        if (this.value === "") {
          this._setEmptyValue();
        }
      }
      super.update(changedProperties);
    }

    private _setUndefinedValue() {
      if (this._changeTimeByUI) return;

      if (this._errorFormat) {
        if (this._changeDateByUI) {
          this._dateValue = this._dateInput.value;
          return;
        }
        this._dateValue = "";
        this._timeValue = "";
        return;
      }
      this._dateValue = this._previousDateValue;
      this._timeValue = this._previousTimeValue;
    }

    private _setEmptyValue() {
      this._dateValue = "";
      this._timeValue = "";
      this._previousTimeValue = "";
      this._previousDateValue = "";
      this._errorFormat = "";
    }

    render() {
      return html`
        <fieldset
          class="kuc-datetime-picker__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-datetime-picker__group__label"
            ?hidden="${!this.label}"
          >
            <span class="kuc-datetime-picker__group__label__text"
              >${this.label}</span
            ><!--
            --><span
              class="kuc-datetime-picker__group__label__required-icon"
              ?hidden="${!this.requiredIcon}"
              >*</span
            >
          </legend>
          <div class="kuc-datetime-picker__group__inputs">
            <kuc-base-date
              class="kuc-datetime-picker__group__inputs--date"
              .value="${this._dateValue}"
              .language="${this._getLanguage()}"
              .disabled="${this.disabled}"
              inputAriaLabel="date"
              @kuc:base-date-change="${this._handleDateChange}"
            ></kuc-base-date
            ><kuc-base-time
              class="kuc-datetime-picker__group__inputs--time"
              .value="${this._timeValue}"
              .hour12="${this.hour12}"
              .disabled="${this.disabled}"
              @kuc:base-time-change="${this._handleTimeChange}"
            ></kuc-base-time>
          </div>
          <div
            class="kuc-datetime-picker__group__error"
            id="${this._GUID}-error"
            role="alert"
            ?hidden="${!this._errorText}"
          >
            ${this._errorText}
          </div>
        </fieldset>
      `;
    }

    updated() {
      this._updateErrorWidth();
      this._resetState();
    }

    private _resetState() {
      this._previousTimeValue = "";
      this._previousDateValue = "";
      this._changeDateByUI = false;
      this._changeTimeByUI = false;
    }

    private _updateErrorWidth() {
      const labelWidth = getWidthElmByContext(this._labelEl);
      const inputGroupWitdh = 185;
      if (labelWidth > inputGroupWitdh) {
        this._errorEl.style.width = labelWidth + "px";
        return;
      }
      this._errorEl.style.width = inputGroupWitdh + "px";
    }

    private _handleDateChange(event: CustomEvent) {
      event.stopPropagation();
      event.preventDefault();
      this._changeDateByUI = true;
      let newValue = this._dateValue;
      if (event.detail.error) {
        this._errorFormat = event.detail.error;
        this.error = "";
      } else {
        newValue = event.detail.value;
        this._errorFormat = "";
      }
      this._updateDateTimeValue(newValue, "date");
    }

    private _handleTimeChange(event: CustomEvent) {
      event.preventDefault();
      event.stopPropagation();
      this._changeTimeByUI = true;
      const newValue = event.detail.value;
      this._updateDateTimeValue(newValue, "time");
    }

    private _updateDateTimeValue(newValue: string, type: string) {
      const oldDateTime = this.value;

      if (type === "date") {
        this._dateValue = newValue || "";
      } else {
        this._timeValue = newValue;
      }
      this._previousTimeValue = this._timeValue;
      this._previousDateValue = this._dateValue;
      const newDateTime = this._errorFormat
        ? undefined
        : this._getDateTimeString();
      const _value = this._errorFormat ? undefined : newDateTime;
      this.value = _value;
      const detail = {
        value: _value,
        oldValue: oldDateTime,
        changedPart: type
      };
      dispatchCustomEvent(this, "change", detail);
    }

    private _getDateTimeString() {
      if (!this._dateValue || !this._timeValue) return undefined;

      if (!this.value) return `${this._dateValue}T${this._timeValue}:00`;

      const splitValue = this.value.split(":");
      if (splitValue.length === 3) {
        return `${this._dateValue}T${this._timeValue}:${splitValue[2]}`;
      }

      return `${this._dateValue}T${this._timeValue}:00`;
    }

    private _getDateTimeValue(value: string | undefined) {
      if (value === "" || value === undefined) return { date: "", time: "" };

      const dateTime = value.split("T");
      const date = dateTime[0];
      const time = dateTime[1];
      if (value.indexOf("T") === value.length - 1 || dateTime.length > 2)
        return { date, time: "" };

      if (!time) return { date, time: "00:00" };

      const [hours, minutes, seconds] = time.split(":");
      if (hours === "" || minutes === "" || seconds === "") {
        return { date, time: time };
      }

      const tempTime = `${hours}:${minutes || "00"}`;
      if (!seconds) return { date, time: tempTime };

      return { date, time: `${tempTime}:${seconds}` };
    }

    private _getLanguage() {
      const langs = ["en", "ja", "zh"];
      if (langs.indexOf(this.language) !== -1) return this.language;

      if (langs.indexOf(document.documentElement.lang) !== -1)
        return document.documentElement.lang;

      return "en";
    }
  }

  window.customElements.define("kuc-datetime-picker", KucDateTimePicker);
  createStyleOnHeader(DATETIMEPICKER_CSS);
  exportDateTimePicker = KucDateTimePicker;
})();
const DateTimePicker = exportDateTimePicker as any;
export { DateTimePicker };
