import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent,
} from "../base/kuc-base";
import { visiblePropConverter, timeValueConverter } from "../base/converter";
import { getWidthElmByContext } from "../base/context";
import {
  FORMAT_IS_NOT_VALID,
  MAX_MIN_IS_NOT_VALID,
  TIME_IS_OUT_OF_VALID_RANGE,
  TIMESTEP_IS_NOT_NUMBER,
  MIN_TIME,
  MAX_TIME,
} from "../base/datetime/resource/constant";
import {
  validateProps,
  validateTimeValue,
  validateTimeStepNumber,
  validateTimeStep,
  throwErrorAfterUpdateComplete,
} from "../base/validator";
import "../base/datetime/time";
import { timeCompare } from "../base/datetime/utils";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
export { BaseError, BaseLabel };

type TimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  max?: string;
  min?: string;
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  timeStep?: number;
  language?: "ja" | "en" | "zh" | "auto";
};

export class TimePicker extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) language = "auto";
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

  @query("kuc-base-label")
  private _baseLabelEl!: BaseLabel;

  @query("kuc-base-error")
  private _baseErrorEl!: BaseError;

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

    if (!validateTimeValue(this.value)) {
      throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
      return false;
    }

    this._valueConverted = timeValueConverter(this.value);
    if (
      _changedProperties.has("value") &&
      (timeCompare(this._valueConverted, this._inputMin) < 0 ||
        timeCompare(this._inputMax, this._valueConverted) < 0)
    ) {
      throwErrorAfterUpdateComplete(this, TIME_IS_OUT_OF_VALID_RANGE);
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
      ${this._getStyleTagTemplate()}
      <fieldset
        class="kuc-time-picker__group"
        aria-describedby="${this._GUID}-error"
      >
        <legend class="kuc-time-picker__group__label" ?hidden="${!this.label}">
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
        ></kuc-base-error>
      </fieldset>
    `;
  }

  updated() {
    this._baseLabelEl.updateComplete.then((_) => {
      this._updateErrorWidth();
    });
  }

  private _updateErrorWidth() {
    const labelWidth = getWidthElmByContext(this._baseLabelEl);
    const inputGroupWitdh = 85;
    if (labelWidth > inputGroupWitdh) {
      this._baseErrorEl.style.width = labelWidth + "px";
      return;
    }
    this._baseErrorEl.style.width = inputGroupWitdh + "px";
  }

  private _handleTimeChange(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    const detail: CustomEventDetail = {
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
    const languages = ["en", "ja", "zh"];
    if (languages.indexOf(this.language) !== -1) return this.language;

    if (languages.indexOf(document.documentElement.lang) !== -1)
      return document.documentElement.lang;

    return "en";
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-time-picker,
        kuc-time-picker *,
        :lang(en) kuc-time-picker,
        :lang(en) kuc-time-picker * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-time-picker,
        :lang(ja) kuc-time-picker * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-time-picker,
        :lang(zh) kuc-time-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-time-picker {
          font-size: 14px;
          color: #333333;
          display: inline-block;
          vertical-align: top;
          line-height: 1.5;
        }
        .kuc-time-picker__group__input {
          position: relative;
        }
        kuc-time-picker[hidden] {
          display: none;
        }
        .kuc-time-picker__group {
          display: flex;
          flex-direction: column;
          border: none;
          padding: 0px;
          height: auto;
          margin: 0px;
        }
        .kuc-time-picker__group__label {
          padding: 4px 0px 8px 0px;
          display: inline-block;
          white-space: nowrap;
        }
        .kuc-time-picker__group__label[hidden] {
          display: none;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-time-picker")) {
  window.customElements.define("kuc-time-picker", TimePicker);
}
