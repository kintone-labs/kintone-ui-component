import { html, PropertyValues } from "lit";
import { state, property, query } from "lit/decorators.js";
import { BaseMobileDateTimeCalendar } from "../mobile-calendar";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  KucBase
} from "../../kuc-base";
import {
  formatInputValueToValue,
  formatValueToInputValue,
  getTodayStringByLocale,
  isValidDateFormat,
  calculateDistanceInput
} from "../utils";
export { BaseMobileDateTimeCalendar };

export class BaseMobileDate extends KucBase {
  @property({ type: String }) inputId = "";
  @property({ type: String, reflect: true }) language = "en";
  @property({ type: String, reflect: true }) value? = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) inputAriaInvalid = false;
  @property({ type: Boolean }) required = false;

  @query(".kuc-mobile-base-date__group__button")
  private _btnToggleEl!: HTMLButtonElement;

  @query(".kuc-mobile-base-date__group__input")
  private _inputEl!: HTMLInputElement;

  @query(".kuc-base-mobile-date__calendar")
  private _calendarEl!: HTMLElement;

  private _GUID: string | undefined;
  @state()
  private _dateTimeCalendarVisible = false;
  private _calendarValue?: string = "";
  private _inputValue?: string = "";

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("inputId")) {
      this._GUID = this.inputId;
    }
    if (changedProperties.has("value") || changedProperties.has("language")) {
      this._updateValueProp();
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-mobile-base-date__group${this._getGroupClass()}">
        <input
          class="kuc-mobile-base-date__group__input"
          type="text"
          id="${this._GUID}-label"
          readonly="readonly"
          .value="${this._inputValue}"
          aria-label="Date"
          aria-describedby="${this._GUID}-error"
          aria-invalid="${this.inputAriaInvalid}"
          aria-required="${this.required}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickOpenCalendar}"
        />
        <button
          type="button"
          class="kuc-mobile-base-date__group__button"
          aria-label="calendar"
          @click="${this._handleClickOpenCalendar}"
          ?disabled="${this.disabled}"
        >
          ${this._getCalendarIconTemplate()}
        </button>
        ${this._getCalendarTemplate()}
      </div>
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (this._dateTimeCalendarVisible) {
      this._setCalendarPosition();
    }
    super.updated(changedProperties);
  }

  private _setCalendarPosition() {
    const borderWidth = 2;
    const { inputToBottom, inputToTop } = calculateDistanceInput(this);
    const inputHeight = this._inputEl.getBoundingClientRect().height;

    if (inputToBottom >= inputToTop) return;

    this._calendarEl.style.bottom = inputHeight + borderWidth + "px";
    this._calendarEl.style.top = "auto";
  }

  private _getGroupClass() {
    let groupClass = "";
    if (this.disabled) {
      groupClass += " kuc-mobile-base-date__group--disabled";
    }
    if (this.required) {
      groupClass += " kuc-mobile-base-date__group--required";
    }
    return groupClass;
  }

  private _handleClickOpenCalendar(event: Event) {
    if (this._dateTimeCalendarVisible) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this._calendarValue = this._getNewCalendarValue(this._inputValue || "");
    this._openCalendar();
  }

  private _updateValueProp() {
    if (this.value) {
      this._inputValue = formatValueToInputValue(this.language, this.value);
      this._calendarValue = this.value;
      return;
    }
    const today = getTodayStringByLocale();
    this._inputValue = "";
    this._calendarValue = this._calendarValue
      ? this._calendarValue.slice(0, 7) + "-01"
      : today.slice(0, 7);
  }

  private _getNewCalendarValue(value: string) {
    if (isValidDateFormat(this.language, value))
      return formatInputValueToValue(this.language, value);

    let temp = this._calendarValue!.slice(0, 7);
    if (value === "") temp = this._calendarValue!.slice(0, 7) + "-01";

    return temp;
  }

  private _closeCalendar() {
    this._dateTimeCalendarVisible = false;
  }

  private _openCalendar() {
    this._dateTimeCalendarVisible = true;
  }

  private _handleClickCalendarClickDate(event: CustomEvent) {
    this._closeCalendar();
    event.detail.oldValue = this.value;
    if (event.detail.oldValue === event.detail.value) return;

    this.value = event.detail.value;
    dispatchCustomEvent(this, "kuc:mobile-base-date-change", event.detail);
    this._btnToggleEl.focus();
  }

  private _handleClickCalendarFooterButtonNone() {
    this._closeCalendar();
    this._inputValue = "";
    let temp = this.value ? this.value.slice(0, 7) + "-01" : "";
    if (!temp) {
      temp = this._calendarValue!.slice(0, 7) + "-01";
    }
    this._calendarValue = temp;
    this._dispathDateChangeCustomEvent("");
  }

  private _handleClickCalendarFooterButtonToday() {
    this._closeCalendar();
    const today = getTodayStringByLocale();
    this._dispathDateChangeCustomEvent(today);
  }

  private _handleClickCalendarFooterButtonClose() {
    this._closeCalendar();
    this._btnToggleEl.focus();
  }

  private _handleCalendarBlurBody(event: Event) {
    event.preventDefault();
    this._dateTimeCalendarVisible = false;
  }

  private _dispathDateChangeCustomEvent(newValue?: string) {
    const detail: CustomEventDetail = { value: newValue, oldValue: this.value };
    this.value = newValue;
    dispatchCustomEvent(this, "kuc:mobile-base-date-change", detail);
    this._btnToggleEl.focus();
  }

  private _getCalendarTemplate() {
    return this._dateTimeCalendarVisible
      ? html`
          <kuc-base-mobile-datetime-calendar
            class="kuc-base-mobile-date__calendar"
            .language="${this.language}"
            .value="${this._calendarValue}"
            ?hidden="${!this._dateTimeCalendarVisible}"
            @kuc:mobile-calendar-body-click-date="${this
              ._handleClickCalendarClickDate}"
            @kuc:mobile-calendar-footer-click-none="${this
              ._handleClickCalendarFooterButtonNone}"
            @kuc:mobile-calendar-footer-click-today="${this
              ._handleClickCalendarFooterButtonToday}"
            @kuc:mobile-calendar-footer-click-close="${this
              ._handleClickCalendarFooterButtonClose}"
            @kuc:mobile-calendar-body-blur="${this._handleCalendarBlurBody}"
          >
          </kuc-base-mobile-datetime-calendar>
        `
      : "";
  }

  private _getCalendarIconTemplate() {
    return html`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-base-date,
        kuc-mobile-base-date * {
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-base-date,
        :lang(zh) kuc-mobile-base-date * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        .kuc-mobile-base-date__group {
          display: flex;
          align-items: center;
          position: relative;
          border-radius: 5.148px;
          border: 1px solid #b3b3b3;
          background-color: #ffffff;
          padding: 5.148px;
          box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;
        }
        .kuc-mobile-base-date__group--required {
          border-color: #cf4a38;
        }
        input.kuc-mobile-base-date__group__input {
          color: #000000;
          width: 100%;
          font-size: 99%;
          padding: 0px;
          -webkit-flex-grow: 1;
          flex-grow: 1;
          border: none;
          font-weight: 400;
          appearance: none;
          outline: 0;
          background: inherit;
        }
        .kuc-mobile-base-date__group--disabled {
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }
        .kuc-base-mobile-date__calendar {
          position: absolute;
          left: 0;
          top: 39px;
          z-index: 1000;
        }
        .kuc-mobile-base-date__group__button {
          position: absolute;
          display: flex;
          right: 10px;
          background-color: transparent;
          border: 0;
          padding: 0;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-mobile-base-date")) {
  window.customElements.define("kuc-mobile-base-date", BaseMobileDate);
}
