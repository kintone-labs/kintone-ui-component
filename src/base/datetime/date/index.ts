import { html, PropertyValues } from "lit";
import { state, property, query } from "lit/decorators.js";
import { BaseDateTimeCalendar } from "../calendar";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  KucBase
} from "../../kuc-base";
import {
  formatInputValueToValue,
  formatValueToInputValue,
  getLocale,
  getTodayStringByLocale,
  isValidDateFormat
} from "../utils";
export { BaseDateTimeCalendar };

export class BaseDate extends KucBase {
  @property({ type: String }) inputId = "";
  @property({ type: String, reflect: true }) language = "en";
  @property({ type: String, reflect: true }) value? = "";
  @property({ type: Boolean }) inputAriaInvalid = false;
  @property({ type: Boolean }) disabled = false;

  @query(".kuc-base-date__input")
  private _dateInput!: HTMLInputElement;

  @query(".kuc-base-date__assistive-text")
  private _toggleEl!: HTMLButtonElement;

  private _GUID: string | undefined;
  @state()
  private _dateTimeCalendarVisible = false;
  private _locale = getLocale("en");
  private _calendarValue?: string = "";
  private _inputValue?: string = "";

  private _valueForReset?: string = "";

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("inputId")) {
      this._GUID = this.inputId;
    }
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
      this._updateValueProp();
    }
    if (changedProperties.has("value")) {
      this._updateValueProp();
    }

    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <input
        class="kuc-base-date__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this._inputValue}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        ?disabled="${this.disabled}"
        @click="${this._handleClickInput}"
        @change="${this._handleChangeInput}"
      />
      <button
        aria-haspopup="menu"
        aria-expanded="${this._dateTimeCalendarVisible}"
        class="kuc-base-date__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      ${this._dateTimeCalendarVisible
        ? html`
            <kuc-base-datetime-calendar
              class="kuc-base-date-calendar"
              .language="${this.language}"
              .value="${this._calendarValue}"
              ?hidden="${!this._dateTimeCalendarVisible}"
              @kuc:calendar-body-change-date="${this
                ._handleClickCalendarChangeDate}"
              @kuc:calendar-body-click-date="${this
                ._handleClickCalendarClickDate}"
              @kuc:calendar-body-escape="${this._handleCalendarBodyEscape}"
              @kuc:calendar-footer-click-none="${this
                ._handleClickCalendarFooterButtonNone}"
              @kuc:calendar-footer-click-today="${this
                ._handleClickCalendarFooterButtonToday}"
              @kuc:calendar-body-blur="${this._handleCalendarBlurBody}"
            >
            </kuc-base-datetime-calendar>
          `
        : ""}
    `;
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
  }

  private _handleCalendarBlurBody(event: Event) {
    event.preventDefault();
    this._dateTimeCalendarVisible = false;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-date__input {
          width: 100px;
          height: 40px;
          padding: 0px;
          text-align: center;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
        }

        .kuc-base-date__input:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-base-date__input--focus {
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          border: 1px solid #3498db;
          background-color: #ffffff;
          color: #333333;
        }
        .kuc-base-date__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }
        .kuc-base-date-calendar {
          position: absolute;
          z-index: 2000;
          background-color: #ffffff;
          text-align: center;
          box-sizing: border-box;
        }
        .kuc-base-date__assistive-text {
          clip: rect(1px, 1px, 1px, 1px);
          overflow: hidden;
          position: absolute !important;
          padding: 0px !important;
          border: 0px !important;
          height: 1px !important;
          width: 1px !important;
        }
      </style>
    `;
  }
  private _handleClickInput(event: Event) {
    if (!this._dateTimeCalendarVisible) {
      this._valueForReset = this.value;
      this._openCalendar();
    } else {
      this._closeCalendar();
    }
  }

  private _updateValueProp() {
    if (this.value) {
      this._inputValue = formatValueToInputValue(this.language, this.value);
      this._calendarValue = this.value;
    } else {
      this._inputValue = "";
    }
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    this._closeCalendar();
    const newValue = (event.target as HTMLInputElement).value;
    if (!isValidDateFormat(this.language, newValue)) {
      const detail: CustomEventDetail = {
        value: undefined,
        oldValue: this.value
      };
      if (newValue !== "") detail.error = this._locale.INVALID_FORMAT;
      this._calendarValue = this.value?.slice(0, 7);
      this._inputValue = newValue;
      dispatchCustomEvent(this, "kuc:base-date-change", detail);
      return;
    }
    this._calendarValue = this.value;
    this._dispathDateChangeCustomEvent(
      formatInputValueToValue(this.language, newValue)
    );
  }

  private _closeCalendar() {
    this._dateTimeCalendarVisible = false;
  }

  private _openCalendar() {
    this._dateTimeCalendarVisible = true;
  }

  private _handleClickCalendarChangeDate(event: CustomEvent) {
    event.detail.oldValue = this.value;
    this.value = event.detail.value;
    dispatchCustomEvent(this, "kuc:base-date-change", event.detail);
  }

  private _handleClickCalendarClickDate(event: CustomEvent) {
    this._closeCalendar();
    event.detail.oldValue = this.value;
    this._dateInput.focus();
    if (event.detail.oldValue === event.detail.value) return;

    this.value = event.detail.value;
    dispatchCustomEvent(this, "kuc:base-date-change", event.detail);
  }

  private _handleCalendarBodyEscape() {
    const newValue = this._valueForReset;
    this._closeCalendar();
    this._dateInput.focus();
    if (newValue === this.value) return;

    const detail = {
      oldValue: this.value,
      value: newValue
    };
    this.value = newValue;
    dispatchCustomEvent(this, "kuc:base-date-change", detail);
  }

  private _handleClickCalendarFooterButtonNone() {
    this._closeCalendar();
    this._dateInput.focus();
    this._inputValue = "";
    this._dispathDateChangeCustomEvent(undefined);
  }

  private _handleClickCalendarFooterButtonToday() {
    this._closeCalendar();
    const today = getTodayStringByLocale();
    this._dateInput.focus();
    this._dispathDateChangeCustomEvent(today);
  }

  private _dispathDateChangeCustomEvent(newValue?: string) {
    const detail: CustomEventDetail = { value: newValue, oldValue: this.value };
    this.value = newValue;
    dispatchCustomEvent(this, "kuc:base-date-change", detail);
  }

  private _openCalendarByKeyCode() {
    this._valueForReset = this.value;
    this._openCalendar();
    this._toggleEl.blur();
  }

  private _handleBlurButton() {
    this._dateInput.classList.remove("kuc-base-date__input--focus");
  }

  private _handleFocusButton() {
    this._dateInput.classList.add("kuc-base-date__input--focus");
  }

  private _handleTabKey(event: KeyboardEvent) {
    if (event.key === "Tab") return true;
    return false;
  }

  private _handleKeyDownButton(event: KeyboardEvent) {
    if (this._handleTabKey(event)) return;
    this._handleSupportedKey(event);
  }

  private _handleSupportedKey(event: KeyboardEvent) {
    event.preventDefault();
    const keyCode = event.key;
    switch (keyCode) {
      case "ArrowUp":
      case "ArrowDown":
      case "Enter":
      case " ":
        this._openCalendarByKeyCode();
        break;
      default:
        break;
    }
  }
}

if (!window.customElements.get("kuc-base-date")) {
  window.customElements.define("kuc-base-date", BaseDate);
}
