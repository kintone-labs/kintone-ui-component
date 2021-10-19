import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase
} from "../base/kuc-base";
import { validateProps } from "../base/validator";

type DateProps = {
  value?: string;
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  language?: "ja" | "en" | "zh" | "auto";
};

export class KucDate extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: String }) value = this._getFormatDate(new Date());
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: String }) language = "auto";

  @query(".kuc-date__date__picker")
  private _datePicker!: HTMLDivElement;
  @query(".kuc-date__group__input-form__input-outer__input")
  private _dateInput!: HTMLInputElement;
  private _GUID: string;
  @state()
  private _datePickerVisible = false;
  constructor(props?: DateProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }
  private _locale = this._getLocale("en");
  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = this._getLocale(this._getLanguage());
    }
    super.update(changedProperties);
  }
  updated(changedProperties: PropertyValues) {
    this._updateDatePickerPosition();
    super.updated(changedProperties);
  }
  _getLocale(language: string) {
    switch (language) {
      case "ja":
        return { INVALID_FORMAT: "日付の形式が不正です。" };
      case "zh":
        return {
          INVALID_FORMAT: "日期格式不正确。"
        };
      default:
        return { INVALID_FORMAT: "Format is not valid." };
    }
  }
  _getLanguage() {
    switch (this.language) {
      case "auto": {
        switch (document.documentElement.lang) {
          case "ja":
            return "ja";
          case "zh":
            return "zh";
          default:
            return "en";
        }
      }
      case "ja":
        return "ja";
      case "zh":
        return "zh";
      default:
        return "en";
    }
  }
  private _updateDatePickerPosition() {
    if (this._datePickerVisible) {
      const datePickerHeight = this._datePicker.offsetHeight;
      const dateInputTop = this._dateInput.offsetTop;
      let datePickerTop = 0;
      if (this._dateInput.getBoundingClientRect().top > datePickerHeight) {
        datePickerTop = dateInputTop - datePickerHeight;
      } else {
        datePickerTop = dateInputTop + this._dateInput.offsetHeight;
      }
      this._datePicker.style.top = datePickerTop + "px";
      this._datePicker.style.left = this._dateInput.offsetLeft + "px";
    }
  }
  private _handleMouseDownDateToggle(event: MouseEvent) {
    if (this._datePickerVisible) {
      return;
    }
    this._openDatePicker();
  }

  _handleChangeDateToggle(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const targetEl = event.target as HTMLInputElement;
    this.error = !this._validateFormat(targetEl.value)
      ? this._locale.INVALID_FORMAT
      : "";
    this._disptchChangeEvent(targetEl.value);
    this.value = targetEl.value;
  }
  _handleChangeDatePicker(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    const newValue = this._getFormatDate(new Date(event.detail.value));
    // TO do: dispatch the change event
    this._disptchChangeEvent(newValue);
    this.value = newValue;
    this.error = "";
    this._closeDatePicker();
  }
  _validateFormat(date: string) {
    // To do: validate date format
    return false;
  }
  _disptchChangeEvent(newValue: string) {
    const detail: CustomEventDetail = { value: "", oldValue: this.value };
    detail.value = newValue;
    dispatchCustomEvent(this, "change", detail);
  }
  _handleBlurDateToggle(event: Event) {
    // To do: close calendar popup
    // this._closeDatePicker();
  }
  _getFormatDate(date: Date) {
    let dateString = "";
    switch (this._getLanguage()) {
      case "ja":
      case "zh":
        dateString = `${date.getFullYear()}-${
          date.getMonth() < 9
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
        }-${date.getDate() < 9 ? "0" + date.getDate() : date.getDate()}`;
        break;
      default:
        dateString = `${
          date.getMonth() < 9
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
        }/${
          date.getDate() < 9 ? "0" + date.getDate() : date.getDate()
        }/${date.getFullYear()}`;
    }
    return dateString;
  }
  _openDatePicker() {
    this._datePickerVisible = true;
  }
  _closeDatePicker() {
    this._datePickerVisible = false;
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-date-group">
        <label
          class="kuc-date__group__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-date__group__label__text">${this.label}</span
          ><!--
--><span
            class="kuc-date__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </label>
        <div class="kuc-date__group__input-form">
          <div class="kuc-date__group__input-form__input-outer">
            <input
              class="kuc-date__group__input-form__input-outer__input"
              id="${this._GUID}-label"
              type="text"
              text-align="center"
              .value="${this.value}"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error !== ""}"
              aria-describedby="${this._GUID}-error"
              @mousedown="${this._handleMouseDownDateToggle}"
              @change="${this._handleChangeDateToggle}"
              ?disabled="${this.disabled}"
              @blur="${this._handleBlurDateToggle}"
            />
          </div>
        </div>
        <div
          class="kuc-date__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
      <div class="kuc-date__date__picker" ?hidden="${!this._datePickerVisible}">
        <kuc-base-datetime-calendar-body
          language="${this._getLanguage()}"
          @kuc:calendar-body-click-date=${this._handleChangeDatePicker}
        />
      </div>
    `;
  }
  _getStyleTagTemplate() {
    return html`
      <style>
        kuc-date,
        kuc-date *,
        :lang(en) kuc-date,
        :lang(en) kuc-date * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-date,
        :lang(ja) kuc-date * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-date,
        :lang(zh) kuc-date * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-date {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
          msx-width: 100px;
          width: 100px;
        }
        kuc-date[hidden] {
          display: none;
        }
        .kuc-date__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin: 0px;
        }
        .kuc-date__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-date__group__label[hidden] {
          display: none;
        }
        .kuc-date__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-date__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-date__group__input-form {
          display: table;
          width: 100%;
        }

        .kuc-date__group__input-form__input-outer {
          display: table-cell;
        }

        .kuc-date__group__input-form__input-outer {
          min-width: 26px;
          width: 100%;
        }
        .kuc-date__group__input-form__input-outer__input {
          min-width: 100%;
          width: 100%;
          height: 40px;
          padding: 0 8px;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
        }

        .kuc-date__group__input-form__input-outer__input:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-date__group__input-form__input-outer__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }

        .kuc-date__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }

        .kuc-date__date__picker {
          width: 336px;
          position: absolute;
          z-index: 2000;
          background-color: #ffffff;
          box-shadow: 0 0 8px 2px rgb(0, 0, 0, 0.1);
          text-align: center;
          box-sizing: border-box;
          padding: 32px 32px 24px;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-date")) {
  window.customElements.define("kuc-date", KucDate);
}
