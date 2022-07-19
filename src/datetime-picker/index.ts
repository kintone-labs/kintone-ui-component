/* eslint-disable kuc-v1/validator-in-should-update */
import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import {
  generateGUID,
  KucBase,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../base/kuc-base";
import {
  visiblePropConverter,
  dateValueConverter,
  timeValueConverter,
} from "../base/converter";
import { getWidthElmByContext } from "../base/context";
import {
  validateProps,
  validateDateTimeValue,
  isValidDate,
  validateTimeValue,
  validateTimeStepNumber,
  validateTimeStep,
  throwErrorAfterUpdateComplete,
} from "../base/validator";
import {
  FORMAT_IS_NOT_VALID,
  MAX_MIN_IS_NOT_VALID,
  TIME_IS_OUT_OF_VALID_RANGE,
  TIMESTEP_IS_NOT_NUMBER,
  MIN_TIME,
  MAX_TIME,
} from "../base/datetime/resource/constant";
import { timeCompare } from "../base/datetime/utils";

import "../base/datetime/date";
import "../base/datetime/time";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
import { DATE_TIME_PICKER_CSS } from "./style";
import { DateAndTime, DateTimePickerProps } from "./type";
export { BaseError, BaseLabel };

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
    @property({ type: String }) max = "";
    @property({ type: String }) min = "";
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
    @property({ type: Number }) timeStep = 30;

    @query(".kuc-base-date__input")
    private _dateInput!: HTMLInputElement;

    @query("kuc-base-label")
    private _baseLabelEl!: BaseLabel;

    @query("kuc-base-error")
    private _baseErrorEl!: BaseError;

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

    private _inputMax = "";
    private _inputMin = "";
    private _timeConverted: string = "";
    private _errorInvalidTime = "";
    private _inputTimeStep = 30;

    constructor(props?: DateTimePickerProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
      if (_changedProperties.has("max") || _changedProperties.has("min")) {
        let _inputMinTemp = this._inputMin;
        let _inputMaxTemp = this._inputMax;

        if (this.max === undefined || this.max === "") {
          _inputMaxTemp = MAX_TIME;
        } else {
          if (!validateTimeValue(this.max)) {
            throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
            return false;
          }
          _inputMaxTemp = this.max = timeValueConverter(this.max);
        }

        if (this.min === undefined || this.min === "") {
          _inputMinTemp = MIN_TIME;
        } else {
          if (!validateTimeValue(this.min)) {
            throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
            return false;
          }
          _inputMinTemp = this.min = timeValueConverter(this.min);
        }

        if (timeCompare(_inputMaxTemp, _inputMinTemp) < 0) {
          throwErrorAfterUpdateComplete(this, MAX_MIN_IS_NOT_VALID);
          return false;
        }
        this._inputMin = _inputMinTemp;
        this._inputMax = _inputMaxTemp;
      }

      if (_changedProperties.has("timeStep")) {
        if (!validateTimeStepNumber(this.timeStep)) {
          throwErrorAfterUpdateComplete(this, TIMESTEP_IS_NOT_NUMBER);
          return false;
        }

        if (!validateTimeStep(this.timeStep, this._inputMax, this._inputMin)) {
          throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
          return false;
        }
        this._inputTimeStep = this.timeStep;
      }

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

      this._timeConverted = timeValueConverter(
        this._dateAndTime.time.slice(0, 5)
      );
      if (
        _changedProperties.has("value") &&
        (timeCompare(this._timeConverted, this._inputMin) < 0 ||
          timeCompare(this._inputMax, this._timeConverted) < 0)
      ) {
        throwErrorAfterUpdateComplete(this, TIME_IS_OUT_OF_VALID_RANGE);
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

      this._errorText = validFormat
        ? this.error
        : this._errorFormat || this._errorInvalidTime;
    }

    private _validateDateTimeFormat() {
      const isMissingDatePart = Boolean(this._timeValue) && !this._dateValue;
      const isMissingTimePart = Boolean(this._dateValue) && !this._timeValue;
      const validFormat =
        !this._errorFormat &&
        !this._errorInvalidTime &&
        !isMissingDatePart &&
        !isMissingTimePart;
      return validFormat;
    }

    private _updateValueWhenSetter() {
      this._errorText = this.error;
      if (this.value === "" || this.value === undefined) {
        this._previousTimeValue = "";
        this._errorFormat = "";
        this._errorInvalidTime = "";
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

      if (
        (changedProperties.has("max") ||
          changedProperties.has("min") ||
          changedProperties.has("value")) &&
        this.value !== undefined
      ) {
        this._errorInvalidTime = "";
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
      this._errorInvalidTime = "";
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
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
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
              .timeStep="${this._inputTimeStep}"
              .min="${this._inputMin}"
              .max="${this._inputMax}"
              .language="${this._getLanguage()}"
              @kuc:base-time-change="${this._handleTimeChange}"
            ></kuc-base-time>
          </div>
          <kuc-base-error
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error>
        </fieldset>
      `;
    }

    updated() {
      this._resetState();
      this._baseLabelEl.updateComplete.then((_) => {
        this._updateErrorWidth();
      });
    }

    private _resetState() {
      this._previousTimeValue = "";
      this._previousDateValue = "";
      this._changeDateByUI = false;
      this._changeTimeByUI = false;
    }

    private _updateErrorWidth() {
      const labelWidth = getWidthElmByContext(this._baseLabelEl);
      const inputGroupWitdh = 185;
      if (labelWidth > inputGroupWitdh) {
        this._baseErrorEl.style.width = labelWidth + "px";
        return;
      }
      this._baseErrorEl.style.width = inputGroupWitdh + "px";
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

      if (event.detail.error) {
        this._errorInvalidTime = event.detail.error;
        this.error = "";
      } else {
        this._errorInvalidTime = "";
      }

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
      const newDateTime =
        this._errorFormat || this._errorInvalidTime
          ? undefined
          : this._getDateTimeString();
      const _value =
        this._errorFormat || this._errorInvalidTime ? undefined : newDateTime;
      this.value = _value;
      const detail = {
        value: _value,
        oldValue: oldDateTime,
        changedPart: type,
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

      if (!time) return { date, time: MIN_TIME };

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
  createStyleOnHeader(DATE_TIME_PICKER_CSS);
  exportDateTimePicker = KucDateTimePicker;
})();
const DateTimePicker = exportDateTimePicker as any;
export { DateTimePicker };
