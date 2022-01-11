import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import {
  generateGUID,
  KucBase,
  CustomEventDetail,
  dispatchCustomEvent
} from "../base/kuc-base";
import {
  visiblePropConverter,
  dateValueConverter,
  timeValueConverter
} from "../base/converter";
import { validateProps, validateDateTimeValue } from "../base/validator";
import { FORMAT_IS_NOT_VALID } from "../base/datetime/resource/constant";

import "../base/datetime/date";
import "../base/datetime/time";

type DateTimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  language?: "ja" | "en" | "zh" | "auto";
  value: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};

export class DateTimePicker extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) language = "auto";
  @property({ type: String }) value = "";
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

  @state()
  private _dateValue = "";

  @state()
  private _timeValue = "";

  private _GUID: string;

  constructor(props?: DateTimePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
      const dateTime = this._getDateTimeValue(this.value);
      if (!validateDateTimeValue(dateTime.date, dateTime.time)) {
        throw new Error(FORMAT_IS_NOT_VALID);
      }
      this._dateValue = dateValueConverter(dateTime.date);
      this._timeValue = timeValueConverter(dateTime.time);
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
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
            @kuc:base-time-change="${this._handleTimeChange}"
          ></kuc-base-time>
        </div>
        <div
          class="kuc-datetime-picker__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </fieldset>
    `;
  }

  private _handleDateChange(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.error = "";
    let newValue = this._dateValue;
    if (event.detail.error) {
      this.error = event.detail.error;
    } else {
      newValue = event.detail.value;
    }
    this._updateDateTimeValue(newValue, "date");
  }

  private _handleTimeChange(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    const newValue = event.detail.value;
    this._updateDateTimeValue(newValue, "time");
  }

  private _updateDateTimeValue(newValue: string, type: string) {
    const oldDateTime = `${this._dateValue}T${this._timeValue}:00`;
    if (type === "date") {
      this._dateValue = newValue || "";
    } else {
      this._timeValue = newValue;
    }
    let newDateTime = `${this._dateValue}`;

    if (this._timeValue && newDateTime) newDateTime += `T${this._timeValue}:00`;

    if (newDateTime) this.value = newDateTime;

    const detail: CustomEventDetail = {
      value: this.error || newDateTime === "" ? undefined : newDateTime,
      oldValue: oldDateTime
    };
    dispatchCustomEvent(this, "change", detail);
  }

  private _getDateTimeValue(value: string) {
    const dateTime = value.split("T");
    const date = dateTime[0];
    const time = dateTime[1];
    if (value.indexOf("T") === value.length - 1 || dateTime.length > 2)
      return { date, time: "" };

    if (!time) return { date, time: "00:00" };

    const [hours, minutes] = time.split(":");
    return { date, time: `${hours}:${minutes || "00"}` };
  }

  private _getLanguage() {
    const langs = ["en", "ja", "zh"];
    if (langs.indexOf(this.language) !== -1) return this.language;

    if (langs.indexOf(document.documentElement.lang) !== -1)
      return document.documentElement.lang;

    return "en";
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-datetime-picker,
        kuc-datetime-picker *,
        :lang(en) kuc-datetime-picker,
        :lang(en) kuc-datetime-picker * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-datetime-picker,
        :lang(ja) kuc-datetime-picker * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-datetime-picker,
        :lang(zh) kuc-datetime-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-datetime-picker {
          display: inline-table;
          vertical-align: top;
        }
        kuc-datetime-picker[hidden] {
          display: none;
        }
        .kuc-datetime-picker__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin: 0px;
        }
        .kuc-datetime-picker__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-datetime-picker__group__label[hidden] {
          display: none;
        }
        .kuc-datetime-picker__group__label__text {
          color: #333333;
          font-size: 14px;
        }
        .kuc-datetime-picker__group__label__required-icon {
          margin-left: 4px;
          line-height: 1;
          vertical-align: -3px;
          color: #e74c3c;
          font-size: 20px;
        }
        .kuc-datetime-picker__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-datetime-picker__group__inputs {
          display: flex;
        }
        .kuc-datetime-picker__group__error {
          box-sizing: border-box;
          margin: 8px 0px;
          padding: 4px 18px;
          line-height: 1.5;
          font-size: 14px;
          background-color: #e74c3c;
          color: #ffffff;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-datetime-picker__group__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-datetime-picker")) {
  window.customElements.define("kuc-datetime-picker", DateTimePicker);
}
