import { html, PropertyValues } from "lit";
import { state, property, query } from "lit/decorators.js";
import { BaseDateTimeCalendar } from "../datetime/calendar";
import { CustomEventDetail, dispatchCustomEvent, generateGUID, KucBase } from "../kuc-base";


function isValidDate(d: Date) {
  return d instanceof Date && !isNaN(d.getTime());
}
function getFormatDate(date: string, language: string){
  const tempDate = new Date(date);
  let dateString = date;
  if(isValidDate(tempDate)){
    switch (language) {
      case "ja":
      case "zh":
        dateString = `${tempDate.getFullYear()}-${
          tempDate.getMonth() < 9
            ? "0" + (tempDate.getMonth() + 1)
            : tempDate.getMonth() + 1
        }-${tempDate.getDate() < 9 ? "0" + tempDate.getDate() : tempDate.getDate()}`;
        break;
      default:
        dateString = `${
          tempDate.getMonth() < 9
            ? "0" + (tempDate.getMonth() + 1)
            : tempDate.getMonth() + 1
        }/${
          tempDate.getDate() < 9 ? "0" + tempDate.getDate() : tempDate.getDate()
        }/${tempDate.getFullYear()}`;
    }
  }
  return dateString;
}
export class BaseDate extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: String }) value = getFormatDate(new Date().toDateString(), this.language);
  @property({ type: Boolean }) disabled = false;
  @query(".kuc-base-datetime-calendar")
  private _dateTimeCalendar!: BaseDateTimeCalendar;
  @query(".kuc-base-date__input")
  private _dateInput!: HTMLInputElement;
  private _GUID = generateGUID();
  @state()
  private _dateTimeCalendarVisible = false;
  private _handleMouseDownInputToggle(event: Event) {

    this._openCalendar();
  }

  updated(changedProperties: PropertyValues) {
    this._updateDateTimeCalendarPosition();
    super.updated(changedProperties);
  }
  private _updateDateTimeCalendarPosition() {
    if (this._dateTimeCalendarVisible) {
      const datePickerHeight = this._dateTimeCalendar.offsetHeight;
      const dateInputTop = this._dateInput.offsetTop;
      let datePickerTop = 0;
      if (this._dateInput.getBoundingClientRect().top > datePickerHeight) {
        datePickerTop = dateInputTop - datePickerHeight;
      } else {
        datePickerTop = dateInputTop + this._dateInput.offsetHeight;
      }
      this._dateTimeCalendar.style.top = datePickerTop + "px";
      this._dateTimeCalendar.style.left = this._dateInput.offsetLeft + "px";
    }
  }
  private _handleBlurToggle(event: FocusEvent){
    // console.log(event.relatedTarget);
    // To do: close calendar when clicking outside area of input and calendar
  }

  private _handleChangeInputToggle(event: Event){
    event.stopPropagation();
    const newValue = (event.target as HTMLInputElement).value;
    const detail: CustomEventDetail = { value: newValue, oldValue: this.value };
    this.value = newValue;
    dispatchCustomEvent(this,"kuc:base-date-change", detail);
  }
  private _closeCalendar(){
    this._dateTimeCalendarVisible = false;
  }
  private _openCalendar(){
    this._dateTimeCalendarVisible = true;
  }
  private _handleClickCalendarChangeDate(event: CustomEvent){
    dispatchCustomEvent(this,"kuc:base-date-change",event.detail);
    this.value = event.detail.value;
  }
  private _handleClickCalendarClickDate(event: CustomEvent){
    this._closeCalendar();
    dispatchCustomEvent(this,"kuc:base-date-change",event.detail);
    this.value = getFormatDate(event.detail.value, this.language);
  }
  private _handleClickCalendarFooterButtonNone(){
    this._closeCalendar();
    this._dispathDateChangeCustomEvent("");
    this.value = "";
  }
  private _handleClickCalendarFooterButtonToday(){
    this._closeCalendar();
    const today = getFormatDate(new Date().toDateString(), this.language);
    this._dispathDateChangeCustomEvent(today);
    this.value = today;
  }
  private _dispathDateChangeCustomEvent(newValue: string){
    const detail: CustomEventDetail = { value: newValue, oldValue: this.value };
    this.value = newValue;
    dispatchCustomEvent(this,"kuc:base-date-change", detail);
  }
  render() {
    console.log(this.value);
    return html`
      ${this._getStyleTagTemplate()}
      <input
        class="kuc-base-date__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this.value}"
        aria-describedby="${this._GUID}-error"
        ?disabled="${this.disabled}"
        @mousedown="${this._handleMouseDownInputToggle}"
        @blur="${this._handleBlurToggle}"
        @change="${this._handleChangeInputToggle}"
      />
      <kuc-base-datetime-calendar
        class="kuc-base-datetime-calendar"
        .language="${this.language}"
        .value="${getFormatDate(this.value, "ja")}"
        ?hidden="${!this._dateTimeCalendarVisible}"
        @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
        @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
        @kuc:calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
        @kuc:calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
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
          outline-width: 2px;
          outline-color: #3498db;
        }

        .kuc-base-datetime-date__input:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-base-datetime-date__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }
        .kuc-base-datetime-calendar {
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
