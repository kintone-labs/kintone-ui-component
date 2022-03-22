import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import {
  visiblePropConverter,
  dateValueConverter,
  timeValueConverter
} from "../../base/converter";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase
} from "../../base/kuc-base";
import {
  validateProps,
  validateDateTimeValue,
  isValidDate
} from "../../base/validator";

import { FORMAT_IS_NOT_VALID } from "../../base/datetime/resource/constant";

type MobileDateTimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  language?: "ja" | "en" | "zh" | "auto";
  value?: string;
};

export class MobileDateTimePicker extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) language = "auto";
  @property({ type: String }) value? = "";
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

  private _GUID: string;

  @state()
  private _dateValue = "";

  @state()
  private _timeValue = "";

  @state()
  private _errorFormat = "";

  @state()
  private _errorText = "";

  private _tempTime = "";
  private _tempDate = "";

  constructor(props?: MobileDateTimePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  protected shouldUpdate(_changedProperties: PropertyValues): boolean {
    if (!this.value) {
      if (!this._tempTime) return true;

      this.updateComplete.then(() => {
        this._tempTime = "";
        this._updateErrorText();
      });
      return false;
    }

    return true;
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
      console.log("update");
      const isUndefined =
        this.value === "" || this.value === undefined || this.value === null;
      if (isUndefined) {
        this._dateValue = "";
        this._timeValue = "";
        this.value = undefined;
      } else {
        if (
          this.value !== null &&
          this.value !== undefined &&
          typeof this.value !== "string"
        ) {
          throw new Error(FORMAT_IS_NOT_VALID);
        }
        const dateTime = this._getDateTimeValue(this.value);
        const dateValue = dateValueConverter(dateTime.date);
        if (
          dateValue !== "" &&
          (!validateDateTimeValue(dateTime.date, dateTime.time) ||
            !isValidDate(dateValue))
        ) {
          throw new Error(FORMAT_IS_NOT_VALID);
        }
        this._dateValue = dateValue;
        this._timeValue = timeValueConverter(dateTime.time.slice(0, 5));
      }
    }
    super.update(changedProperties);
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
    const tempTime = `${hours}:${minutes || "00"}`;
    if (!seconds) return { date, time: tempTime };

    return { date, time: `${tempTime}:${seconds}` };
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <fieldset
        class="kuc-mobile-datetime-picker__group"
        aria-describedby="${this._GUID}-error"
      >
        <label
          class="kuc-mobile-datetime-picker__group__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label>
        </label>
        <div class="kuc-mobile-datetime-picker__group__input">
          <kuc-mobile-base-date
            class="kuc-mobile-datetime-picker__group__input--date"
            .disabled="${this.disabled}"
            .value="${this._dateValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error !== ""}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date>
          <kuc-base-mobile-time
            class="kuc-mobile-datetime-picker__group__input--time"
            .value="${this._timeValue}"
            .disabled="${this.disabled}"
            .hour12="${this.hour12}"
            .guid="${this._GUID}"
            .language="${this._getLanguage()}"
            .required="${this.requiredIcon}"
            @kuc:base-mobile-time-change="${this._handleTimeChange}"
          ></kuc-base-mobile-time>
        </div>
        <kuc-base-mobile-error .guid="${this._GUID}" .text="${this._errorText}">
        </kuc-base-mobile-error>
      </fieldset>
    `;
  }

  updated() {
    this._updateErrorText();
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
    let newValue = this._timeValue;
    if (event.detail.error) {
      this._errorFormat = event.detail.error;
      newValue = event.detail.value;
      this.error = "";
    } else {
      this._errorFormat = "";
      newValue = event.detail.value;
    }
    this._updateDateTimeValue(newValue, "time");
  }

  private _updateDateTimeValue(newValue: string, type: string) {
    const oldDateTime = this._getDateTimeString();
    if (type === "date") {
      this._dateValue = newValue || "";
    } else {
      this._timeValue = newValue;
    }
    if (this._dateValue === "") {
      this._tempTime = this._timeValue;
    }
    const newDateTime = this._getDateTimeString();
    const _newValue =
      this._errorFormat || newDateTime === "" ? undefined : newDateTime;
    this.value = _newValue;
    const detail = {
      value: _newValue,
      oldValue: oldDateTime === "" ? undefined : oldDateTime,
      changedPart: type
    };
    dispatchCustomEvent(this, "change", detail);
  }

  private _getDateTimeString() {
    if (!this._dateValue || !this._timeValue) return "";

    return `${this._dateValue}T${this._timeValue}:00`;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-datetime-picker,
        kuc-mobile-datetime-picker * {
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-datetime-picker,
        :lang(zh) kuc-mobile-datetime-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-datetime-picker {
          font-size: 13px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
          width: 100%;
        }
        kuc-mobile-datetime-picker[hidden] {
          display: none;
        }
        .kuc-mobile-datetime-picker__group {
          border: 0;
        }
        .kuc-mobile-datetime-picker__group__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          white-space: nowrap;
          margin: 0 0 4px 0;
        }
        .kuc-mobile-datetime-picker__group__label[hidden] {
          display: none;
        }
        .kuc-mobile-datetime-picker__group__input {
          display: flex;
          align-items: center;
          margin-right: 0.5em;
          margin-left: 0.5em;
        }
        .kuc-mobile-datetime-picker__group__input--date {
          width: 130px;
          margin-right: 10px;
        }
        .kuc-mobile-datetime-picker__group__input--time {
          max-width: 80px;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-datetime-picker")) {
  window.customElements.define(
    "kuc-mobile-datetime-picker",
    MobileDateTimePicker
  );
}
