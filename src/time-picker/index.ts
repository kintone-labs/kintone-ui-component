import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";

import {
  languagePropConverter,
  timeValueConverter,
  visiblePropConverter,
} from "../base/converter";
import {
  INVALID_FORMAT_MESSAGE,
  MAX_MIN_IS_NOT_VALID,
  MAX_TIME,
  MIN_TIME,
  TIME_IS_OUT_OF_VALID_RANGE,
  TIMESTEP_IS_NOT_NUMBER,
} from "../base/datetime/resource/constant";
import "../base/datetime/time";
import { timeCompare } from "../base/datetime/utils";
import { BaseError } from "../base/error";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import { BaseLabel } from "../base/label";
import {
  validateNumberType,
  validateProps,
  validateTimeStep,
  validateTimeValue,
} from "../base/validator";

import { TIME_PICKER_CSS } from "./style";
import { TimePickerChangeEventDetail, TimePickerProps } from "./type";
export { BaseError, BaseLabel };

let exportTimePicker;
(() => {
  exportTimePicker = window.customElements.get("kuc-time-picker");
  if (exportTimePicker) {
    return;
  }
  class KucTimePicker extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({
      type: String,
      attribute: "lang",
      reflect: true,
      converter: languagePropConverter,
    })
    language = "auto";
    @property({ type: String }) max = "";
    @property({ type: String }) min = "";
    @property({ type: String }) value? = "";
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

    private _errorText = "";

    private _inputValue = "";
    private _errorInvalid = "";
    private _inputMax = "";
    private _inputMin = "";
    private _inputTimeStep = 30;

    private _valueConverted = "";

    private _GUID: string;

    constructor(props?: TimePickerProps) {
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
            this.throwErrorAfterUpdateComplete(INVALID_FORMAT_MESSAGE.MAX);
            return false;
          }
          _inputMaxTemp = this.max = timeValueConverter(this.max);
        }

        if (this.min === undefined || this.min === "") {
          _inputMinTemp = MIN_TIME;
        } else {
          if (!validateTimeValue(this.min)) {
            this.throwErrorAfterUpdateComplete(INVALID_FORMAT_MESSAGE.MIN);
            return false;
          }
          _inputMinTemp = this.min = timeValueConverter(this.min);
        }

        if (timeCompare(_inputMaxTemp, _inputMinTemp) < 0) {
          this.throwErrorAfterUpdateComplete(MAX_MIN_IS_NOT_VALID);
          return false;
        }
        this._inputMin = _inputMinTemp;
        this._inputMax = _inputMaxTemp;
      }

      if (_changedProperties.has("timeStep")) {
        if (!validateNumberType(this.timeStep)) {
          this.throwErrorAfterUpdateComplete(TIMESTEP_IS_NOT_NUMBER);
          return false;
        }

        if (!validateTimeStep(this.timeStep, this._inputMax, this._inputMin)) {
          this.throwErrorAfterUpdateComplete(INVALID_FORMAT_MESSAGE.TIME_STEP);
          return false;
        }
        this._inputTimeStep = this.timeStep;
      }

      if (this.value === undefined || this.value === "") return true;

      if (!validateTimeValue(this.value)) {
        this.throwErrorAfterUpdateComplete(INVALID_FORMAT_MESSAGE.VALUE);
        return false;
      }

      this._valueConverted = timeValueConverter(this.value);
      if (
        _changedProperties.has("value") &&
        (timeCompare(this._valueConverted, this._inputMin) < 0 ||
          timeCompare(this._inputMax, this._valueConverted) < 0)
      ) {
        this.throwErrorAfterUpdateComplete(TIME_IS_OUT_OF_VALID_RANGE);
        return false;
      }

      return true;
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("value")) {
        if (this.value === undefined) {
          if (this._errorInvalid === "") {
            this._inputValue = "";
          }
        } else {
          this.value = this.value === "" ? this.value : this._valueConverted;
          this._inputValue = this.value;
        }
      }

      if (
        (changedProperties.has("max") ||
          changedProperties.has("min") ||
          changedProperties.has("value")) &&
        this.value !== undefined
      ) {
        this._errorInvalid = "";
      }

      this._errorText = this._errorInvalid || this.error;

      super.update(changedProperties);
    }

    render() {
      return html`
        <fieldset
          class="kuc-time-picker__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-time-picker__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </legend>
          <kuc-base-time
            class="kuc-time-picker__group__input"
            .value="${this._inputValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            .timeStep="${this._inputTimeStep}"
            .min="${this._inputMin}"
            .max="${this._inputMax}"
            .language="${this._getLanguage()}"
            @kuc:base-time-change="${this._handleTimeChange}"
          >
          </kuc-base-time>
          <kuc-base-error
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error>
        </fieldset>
      `;
    }

    private _handleTimeChange(event: CustomEvent) {
      event.preventDefault();
      event.stopPropagation();
      const detail: TimePickerChangeEventDetail = {
        value: event.detail.value,
        oldValue: this.value,
      };

      if (event.detail.error) {
        detail.value = undefined;
        this.value = undefined;
        this._errorInvalid = event.detail.error;
        this.error = "";
      } else {
        this.value = event.detail.value;
        this._errorInvalid = "";
      }

      this._inputValue = event.detail.value;
      dispatchCustomEvent(this, "change", detail);
    }

    private _getLanguage() {
      const languages = ["en", "ja", "zh", "zh-TW", "es"];
      if (languages.indexOf(this.language) !== -1) return this.language;

      if (languages.indexOf(document.documentElement.lang) !== -1)
        return document.documentElement.lang;

      return "en";
    }
  }

  window.customElements.define("kuc-time-picker", KucTimePicker);
  createStyleOnHeader(TIME_PICKER_CSS);
  exportTimePicker = KucTimePicker;
})();
const TimePicker = exportTimePicker as any;
export { TimePicker };
