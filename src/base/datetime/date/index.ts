import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";

import {
  createStyleOnHeader,
  CustomEventDetail,
  dispatchCustomEvent,
  KucBase,
} from "../../kuc-base";
import { isValidDate } from "../../validator";
import { BaseDateTimeCalendar } from "../calendar";
import "../listbox";
import {
  formatInputValueToValue,
  formatValueToInputValue,
  getLocale,
  getScrollableAncestors,
  getTodayStringByLocale,
  isValidDateFormat,
  measureEl,
} from "../utils";

import { BASE_DATE_CSS } from "./style";
export { BaseDateTimeCalendar };

export class BaseDate extends KucBase {
  @property({ type: String }) inputAriaLabel = "";
  @property({ type: String }) inputId = "";
  @property({ type: String, attribute: "lang", reflect: true }) language = "en";
  @property({ type: String, reflect: true }) value? = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) inputAriaInvalid = false;
  @property({ type: Boolean }) required = false;

  @query(".kuc-base-date__input")
  private _dateInput!: HTMLInputElement;

  @query(".kuc-base-date__calendar")
  private _calendarEl!: BaseDateTimeCalendar;

  @query(".kuc-base-datetime-calendar-header__group__button--previous-month")
  private _previousMonth!: HTMLButtonElement;

  @query(".kuc-base-datetime-calendar-footer__group__button--none")
  private _footerNoneBtn!: HTMLButtonElement;

  private _GUID: string | undefined;

  @state()
  private _dateTimeCalendarVisible = false;

  private _locale = getLocale("en");
  private _calendarValue?: string = "";
  private _inputValue?: string = "";

  private _valueForReset?: string = "";

  private _resizeDebounceTimer: number | null = null;
  private _scrollRAF = 0;
  private _calendarNaturalWidth = 0;
  private _calendarNaturalHeight = 0;
  private _scrollTargets: Array<Window | Element> = [];

  private readonly _DEBOUNCE_DELAY = 200;

  private _schedulePositionOnScroll = () => {
    if (!this._dateTimeCalendarVisible) return;
    if (this._scrollRAF) return;
    this._scrollRAF = requestAnimationFrame(() => {
      this._scrollRAF = 0;
      this._positionCalendar();
    });
  };

  private _schedulePositionOnResize = () => {
    if (!this._dateTimeCalendarVisible) return;
    if (this._resizeDebounceTimer !== null) {
      window.clearTimeout(this._resizeDebounceTimer);
    }

    this._resizeDebounceTimer = window.setTimeout(() => {
      this._resizeDebounceTimer = null;
      this._positionCalendar();
      this._calendarEl?.repositionHeaderListboxes();
    }, this._DEBOUNCE_DELAY);
  };

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

  disconnectedCallback() {
    if (this._scrollRAF) {
      cancelAnimationFrame(this._scrollRAF);
      this._scrollRAF = 0;
    }

    if (this._resizeDebounceTimer !== null) {
      window.clearTimeout(this._resizeDebounceTimer);
      this._resizeDebounceTimer = null;
    }
    this._detachListeners();
    super.disconnectedCallback();
  }

  render() {
    return html`
      <input
        class="kuc-base-date__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this._inputValue}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        aria-required="${this.required}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @click="${this._handleClickInput}"
        @change="${this._handleChangeInput}"
        @keydown="${this._handleKeyDownInput}"
        @input="${this._handleInputValue}"
      />
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded="${this._dateTimeCalendarVisible}"
        class="kuc-base-date__assistive-text"
        @click="${this._handleClickButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      <kuc-base-datetime-calendar
        class="kuc-base-date__calendar"
        .language="${this.language}"
        .value="${this._calendarValue}"
        popover="manual"
        @kuc:calendar-header-previous-shifttab="${this
          ._handleShiftTabCalendarPrevMonth}"
        @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
        @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
        @kuc:calendar-footer-click-none="${this
          ._handleClickCalendarFooterButtonNone}"
        @kuc:calendar-footer-tab-none="${this
          ._handleTabCalendarFooterButtonNone}"
        @kuc:calendar-footer-click-today="${this
          ._handleClickCalendarFooterButtonToday}"
        @kuc:calendar-escape="${this._handleCalendarEscape}"
      >
      </kuc-base-datetime-calendar>
    `;
  }
  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("inputAriaLabel") && this.inputAriaLabel) {
      this._dateInput.setAttribute("aria-label", this.inputAriaLabel);
    }
    super.updated(changedProperties);
  }

  private _handleInputValue(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this._inputValue = newValue || "";
  }

  private _handleClickInput() {
    if (!this._dateTimeCalendarVisible) {
      this._valueForReset = this.value;
      this._calendarValue = this._getNewCalendarValue(this._inputValue || "");
      this._openCalendar();
      return;
    }
    this._closeCalendar();
  }

  private _updateValueProp() {
    if (this.value) {
      const tempValue = this._setCalendarValueWhenInvalidValue();
      this._inputValue = formatValueToInputValue(this.language, this.value);
      this._calendarValue = tempValue || this.value;
      return;
    }

    const today = getTodayStringByLocale();
    this._inputValue = "";
    this._calendarValue = this._calendarValue
      ? this._calendarValue.slice(0, 7) + "-01"
      : today.slice(0, 7);
  }

  private _setCalendarValueWhenInvalidValue() {
    if (this.value && !isValidDate(this.value)) {
      const today = getTodayStringByLocale();
      return this._calendarValue || today.slice(0, 7);
    }
    return "";
  }

  private _getNewCalendarValue(value: string) {
    if (isValidDateFormat(this.language, value))
      return formatInputValueToValue(this.language, value);

    if (!this._calendarValue) return "";

    let temp = this._calendarValue.slice(0, 7);
    if (value === "") temp = this._calendarValue.slice(0, 7) + "-01";
    return temp;
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const newValue = (event?.target as HTMLInputElement).value;
    this._calendarValue = this._getNewCalendarValue(newValue);
    if (this._calendarValue.length > 7) {
      this._dispathDateChangeCustomEvent(
        formatInputValueToValue(this.language, newValue),
      );
      return;
    }
    const detail: CustomEventDetail = {
      value: undefined,
      oldValue: this.value,
      error: this._locale.INVALID_FORMAT,
    };
    this._inputValue = newValue;
    dispatchCustomEvent(this, "kuc:base-date-change", detail);
  }

  private _handleKeyDownInput(event: KeyboardEvent) {
    if (event.key !== "Escape") return;
    this._closeCalendar();
  }

  private _onDocClick = (event: PointerEvent) => {
    const path = event.composedPath();
    const inCalendar = this._calendarEl && path.includes(this._calendarEl);
    const inInput = path.includes(this._dateInput);
    if (!inCalendar && !inInput) this._closeCalendar();
  };

  private _closeCalendar() {
    this._dateTimeCalendarVisible = false;
    if (this._calendarEl) {
      this._calendarEl.hidePopover();
    }

    if (this._scrollRAF) {
      cancelAnimationFrame(this._scrollRAF);
      this._scrollRAF = 0;
    }

    if (this._resizeDebounceTimer !== null) {
      window.clearTimeout(this._resizeDebounceTimer);
      this._resizeDebounceTimer = null;
    }

    this._detachListeners();
  }

  private async _openCalendar() {
    this._dateTimeCalendarVisible = true;
    if (this._calendarEl) {
      await this.updateComplete;
      this._calendarEl.showPopover();
      if(!this._calendarNaturalWidth || !this._calendarNaturalHeight){
        const measureResult = measureEl(this._calendarEl);
        this._calendarNaturalWidth = measureResult.width;
        this._calendarNaturalHeight = measureResult.height;
      }
      this._positionCalendar();
      this._attachListeners();
      this._calendarEl.focusActiveDate();
    }
  }

  private _positionCalendar = () => {
    if (!this._calendarEl || !this._dateInput) return;

    const inputRect = this._dateInput.getBoundingClientRect();
    const calWidth = this._calendarNaturalWidth || 336;
    const calHeight = this._calendarNaturalHeight || 0;

    const spaceAbove = inputRect.top;
    const spaceBelow = window.innerHeight - inputRect.bottom;

    // vertical
    let top: number;
    let maxHeight: number;
    if (spaceBelow >= calHeight) {
      top = inputRect.bottom;
      maxHeight = calHeight;
    } else if (spaceAbove >= calHeight) {
      top = inputRect.top - calHeight;
      maxHeight = calHeight;
    } else if (spaceBelow >= spaceAbove) {
      top = inputRect.bottom;
      maxHeight = spaceBelow;
    } else {
      maxHeight = spaceAbove;
      const visibleHeight = Math.min(calHeight || maxHeight, maxHeight);
      top = Math.max(0, inputRect.top - visibleHeight);
    }

    // horizontal
    let left = inputRect.left;
    let maxWidth = calWidth;
    if (left > window.innerWidth - calWidth) {
      const spaceRight = window.innerWidth - inputRect.left;
      const spaceLeft = inputRect.right;
      if (spaceRight < spaceLeft) {
        if(spaceLeft < calWidth){
          left = 0;
          maxWidth = spaceLeft;
        }else {
          left = inputRect.right - calWidth;
          maxWidth = calWidth;
        }
       
      }else{
        maxWidth = spaceRight;
      }
    }
    this._calendarEl.style.left = `${Math.floor(left)}px`;
    this._calendarEl.style.top = `${Math.floor(top)}px`;

    const newMaxHeight = Math.floor(maxHeight);
    const currentMaxHeight = parseInt(
      this._calendarEl.style.maxHeight || "0",
      10,
    );

    if (currentMaxHeight !== newMaxHeight) {
      this._calendarEl.style.maxHeight = `${newMaxHeight}px`;
    }

    const newMaxWidth = Math.floor(maxWidth);
    const currentMaxWidth = parseInt(
      this._calendarEl.style.maxWidth || "0",
      10,
    );

    if(currentMaxWidth != newMaxWidth){
      this._calendarEl.style.maxWidth = `${newMaxWidth}px`
    }
  };

  private _attachListeners() {
    this._detachListeners();
    this._scrollTargets = getScrollableAncestors(this._dateInput);
    for (const targetEl of this._scrollTargets) {
      targetEl.addEventListener(
        "scroll",
        this._schedulePositionOnScroll as EventListener,
        { passive: true },
      );
    }
    window.addEventListener("resize", this._schedulePositionOnResize);
    document.addEventListener("click", this._onDocClick, {
        capture: true,
      });
  }

  private _detachListeners() {
    for (const targetEl of this._scrollTargets) {
      targetEl.removeEventListener(
        "scroll",
        this._schedulePositionOnScroll as EventListener,
      );
    }
    this._scrollTargets = [];
    window.removeEventListener("resize", this._schedulePositionOnResize);
    document.removeEventListener("click", this._onDocClick, {
      capture: true,
    } as any);
  }

  private _handleShiftTabCalendarPrevMonth() {
    this._footerNoneBtn.focus();
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

  private _handleClickCalendarFooterButtonNone() {
    this._closeCalendar();
    this._dateInput.focus();
    this._inputValue = "";
    const today = getTodayStringByLocale();
    let temp = this._setCalendarValueWhenInvalidValue();
    if (!temp) {
      temp = this._calendarValue
        ? this._calendarValue.slice(0, 7) + "-01"
        : today.slice(0, 7) + "-01";
    }
    this._calendarValue = temp;
    this._dispathDateChangeCustomEvent(undefined);
  }

  private _handleTabCalendarFooterButtonNone() {
    this._previousMonth.focus();
  }

  private _handleClickCalendarFooterButtonToday() {
    this._closeCalendar();
    const today = getTodayStringByLocale();
    this._dateInput.focus();
    this._dispathDateChangeCustomEvent(today);
  }

  private _handleCalendarEscape() {
    const newValue = this._valueForReset;
    this._closeCalendar();
    this._dateInput.focus();
    if (newValue === this.value) return;

    const detail = {
      oldValue: this.value,
      value: newValue,
    };
    this.value = newValue;
    dispatchCustomEvent(this, "kuc:base-date-change", detail);
  }

  private _dispathDateChangeCustomEvent(newValue?: string) {
    const detail: CustomEventDetail = { value: newValue, oldValue: this.value };
    this.value = newValue === undefined ? "" : newValue;
    dispatchCustomEvent(this, "kuc:base-date-change", detail);
  }

  private _handleClickButton() {
    if (!this._dateTimeCalendarVisible) {
      this._valueForReset = this.value;
      this._calendarValue = this._getNewCalendarValue(this._inputValue || "");
      this._openCalendar();
      return;
    }
    this._closeCalendar();
  }

  private _handleBlurButton() {
    this._dateInput.classList.remove("kuc-base-date__input--focus");
  }

  private _handleFocusButton() {
    this._dateInput.classList.add("kuc-base-date__input--focus");
  }
}

if (!window.customElements.get("kuc-base-date")) {
  createStyleOnHeader(BASE_DATE_CSS);
  window.customElements.define("kuc-base-date", BaseDate);
}
