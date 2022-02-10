import { html, PropertyValues } from "lit";
import { property, state, query } from "lit/decorators.js";
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
import { getWidthElmByContext } from "../base/context";
import {
  validateProps,
  validateDateTimeValue,
  isValidDate
} from "../base/validator";
import { getTodayStringByLocale } from "../base/datetime/utils";
import { FORMAT_IS_NOT_VALID } from "../base/datetime/resource/constant";

import "../base/datetime/date";
import "../base/datetime/time";

type DateTimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  language?: "ja" | "en" | "zh" | "auto";
  value?: string;
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

  @query(".kuc-datetime-picker__group__label")
  private _labelEl!: HTMLFieldSetElement;

  @query(".kuc-datetime-picker__group__error")
  private _errorEl!: HTMLDivElement;

  @state()
  private _dateValue = "";

  @state()
  private _timeValue = "";

  @state()
  private _errorFormat = "";

  @state()
  private _errorText = "";

  private _GUID: string;

  constructor(props?: DateTimePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
      if (typeof this.value !== "string") {
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
    this._updateErrorText();
  }

  private _updateErrorText() {
    this._errorText = this._errorFormat || this.error;
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
    let newValue = this._dateValue;
    if (event.detail.error) {
      this._errorFormat = event.detail.error;
    } else {
      newValue = event.detail.value;
      this._errorFormat = "";
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
    const oldDateTime = this._getDateTimeString();
    if (type === "date") {
      this._dateValue = newValue || "";
    } else {
      this._timeValue = newValue;
    }
    const newDateTime = this._getDateTimeString();
    const detail = {
      value: this._errorText || newDateTime === "" ? undefined : newDateTime,
      oldValue: oldDateTime,
      changedPart: type
    };
    dispatchCustomEvent(this, "change", detail);
  }

  private _getDateTimeString() {
    if (this._dateValue) {
      if (this._timeValue) return `${this._dateValue}T${this._timeValue}:00`;

      return `${this._dateValue}T00:00:00`;
    }

    const todayString = getTodayStringByLocale();
    if (this._timeValue) return `${todayString}T${this._timeValue}:00`;

    return undefined;
  }

  private _getDateTimeValue(value: string) {
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
          font-size: 14px;
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
          max-width: 185px;
        }
        .kuc-datetime-picker__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
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
