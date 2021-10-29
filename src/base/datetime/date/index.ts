import { html, PropertyValues } from "lit";
import { state, property, query } from "lit/decorators.js";
import { BaseDateTimeCalendar } from "../calendar";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  KucBase
} from "../../kuc-base";
import { formatDateByLocale, getLocale, isValidDateFormat } from "../utils";
export class BaseDate extends KucBase {
  @property({ type: String }) inputId = "";
  @property({ type: String }) language = "en";
  @property({ type: String, reflect: true }) value = formatDateByLocale(
    new Date().toDateString()
  );
  @property({ type: Boolean }) inputAriaInvalid = false;
  @property({ type: Boolean }) disabled = false;
  @query(".kuc-base-date-calendar")
  private _dateTimeCalendar!: BaseDateTimeCalendar;
  @query(".kuc-base-date__input")
  private _dateInput!: HTMLInputElement;
  private _GUID: string | undefined;
  @state()
  private _dateTimeCalendarVisible = false;
  private _handleMouseDownInputToggle() {
    if (!this._dateTimeCalendarVisible) {
      this._openCalendar();
    }
  }
  private _locale = getLocale("en");
  updated(changedProperties: PropertyValues) {
    this._updateDateTimeCalendarPosition();
    super.updated(changedProperties);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("inputId")) {
      this._GUID = this.inputId;
    }
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    super.update(changedProperties);
  }

  private _updateDateTimeCalendarPosition() {
    if (!this._dateTimeCalendarVisible) {
      return;
    }
    const datePickerHeight = this._dateTimeCalendar.offsetHeight;
    const dateInputTop = this._dateInput.offsetTop;
    let datePickerTop = dateInputTop + this._dateInput.offsetHeight;
    if (this._dateInput.getBoundingClientRect().top > datePickerHeight) {
      datePickerTop = dateInputTop - datePickerHeight;
    }
    this._dateTimeCalendar.style.top = datePickerTop + "px";
    this._dateTimeCalendar.style.left = this._dateInput.offsetLeft + "px";
  }

  firstUpdated() {
    this._handleClickDocument();
  }
  private _handleChangeInputToggle(event: Event) {
    event.stopPropagation();
    const newValue = (event.target as HTMLInputElement).value;
    if (!isValidDateFormat(newValue, this.language)) {
      const detail: CustomEventDetail = {
        value: newValue,
        oldValue: this.value,
        error: this._locale.INVALID_FORMAT
      };
      dispatchCustomEvent(this, "kuc:base-date-change", detail);
      return;
    }
    this._dispathDateChangeCustomEvent(formatDateByLocale(newValue));
  }

  private _closeCalendar() {
    this._dateTimeCalendarVisible = false;
  }

  private _openCalendar() {
    this._dateTimeCalendarVisible = true;
  }

  private _handleClickCalendarChangeDate(event: CustomEvent) {
    dispatchCustomEvent(this, "kuc:base-date-change", event.detail);
    this.value = event.detail.value;
  }

  private _handleClickCalendarClickDate(event: CustomEvent) {
    this._closeCalendar();
    dispatchCustomEvent(this, "kuc:base-date-change", event.detail);
    this.value = event.detail.value;
  }

  private _handleClickCalendarFooterButtonNone() {
    this._closeCalendar();
    this._dispathDateChangeCustomEvent("");
  }

  private _handleClickCalendarFooterButtonToday() {
    this._closeCalendar();
    const today = formatDateByLocale(new Date().toDateString());
    this._dispathDateChangeCustomEvent(today);
  }

  private _dispathDateChangeCustomEvent(newValue: string) {
    const detail: CustomEventDetail = { value: newValue, oldValue: this.value };
    this.value = newValue;
    dispatchCustomEvent(this, "kuc:base-date-change", detail);
  }
  private _handleClickDocument() {
    window.document.addEventListener("click", event => {
      const targetEl = event.target as HTMLElement;
      const ignoreClass = [
        "kuc-base-date__input",
        "kuc-base-datetime-calendar__group"
      ];
      for (let index = 0; index < ignoreClass.length; index++) {
        const className = ignoreClass[index];
        if (targetEl.classList.contains(className)) return;
      }
      this._closeCalendar();
    });
  }
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <input
        class="kuc-base-date__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${formatDateByLocale(this.value, this.language)}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        ?disabled="${this.disabled}"
        @mousedown="${this._handleMouseDownInputToggle}"
        @change="${this._handleChangeInputToggle}"
      />
      <kuc-base-datetime-calendar
        class="kuc-base-date-calendar"
        .language="${this.language}"
        .value="${this.value}"
        ?hidden="${!this._dateTimeCalendarVisible}"
        @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
        @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
        @kuc:calendar-footer-click-none="${this
          ._handleClickCalendarFooterButtonNone}"
        @kuc:calendar-footer-click-today="${this
          ._handleClickCalendarFooterButtonToday}"
      >
      </kuc-base-datetime-calendar>
    `;
  }

  _getStyleTagTemplate() {
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
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-date")) {
  window.customElements.define("kuc-base-date", BaseDate);
}
