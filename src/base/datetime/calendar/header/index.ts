import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail,
  createStyleOnHeader,
} from "../../../kuc-base";
import "../../calendar/header/dropdown/year";
import "../../calendar/header/dropdown/month";
import { BaseDateTimeListBox } from "../../listbox";
import {
  getLeftArrowIconSvgTemplate,
  getRightArrowIconSvgTemplate,
  getLocale,
} from "../../utils/";
import { CALENDAR_HEADER_CSS } from "./style";

function isValidMonth(month: number) {
  return month > 0 && month < 13;
}
function isValidYear(year: number) {
  return year >= 0 && year < 10000;
}
export class BaseDateTimeCalendarHeader extends KucBase {
  @property({ type: String }) language = "en";
  @property({
    type: Number,
    hasChanged(newVal: number) {
      return isValidMonth(newVal);
    },
  })
  month = 1;
  @property({
    type: Number,
    hasChanged(newVal: number) {
      return isValidYear(newVal);
    },
  })
  year = 2021;
  private _locale = getLocale("en");
  @query(".kuc-base-datetime-calendar-header__month")
  private _baseDateTimeHeaderMonthEl!: any;

  @query(".kuc-base-datetime-calendar-header__year")
  private _baseDateTimeHeaderYearEl!: any;

  @query(".kuc-base-datetime-header-month__listbox")
  private _listBoxMonthEl!: BaseDateTimeListBox;

  @query(".kuc-base-datetime-header-year__listbox")
  private _listBoxYearEl!: BaseDateTimeListBox;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      <div class="kuc-base-datetime-calendar-header__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-datetime-calendar-header__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `;
  }

  private _getYearTemplate() {
    return html`
      <kuc-base-datetime-header-year
        class="kuc-base-datetime-calendar-header__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year>
    `;
  }

  private _getMonthTemplate() {
    return html`
      <kuc-base-datetime-header-month
        class="kuc-base-datetime-calendar-header__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month>
    `;
  }

  private _getYearMonthTemplate() {
    return this.language === "zh" || this.language === "ja"
      ? html` ${this._getYearTemplate()}${this._getMonthTemplate()} `
      : html` ${this._getMonthTemplate()}${this._getYearTemplate()} `;
  }

  private _handleMonthDropdownChange(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.month = parseInt(event.detail.value, 10);
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _handleYearDropdownChange(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.year = parseInt(event.detail.value, 10);
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _handleYearDropdownClick() {
    if (!this._listBoxMonthEl) return;

    this._baseDateTimeHeaderMonthEl.closeListBox();
  }

  private _handleMonthDropdownClick() {
    if (!this._listBoxYearEl) return;

    this._baseDateTimeHeaderYearEl.closeListBox();
  }

  private _handleClickCalendarPrevMonthBtn(event: MouseEvent) {
    event.stopPropagation();
    const monthSelected = this.month;
    if (monthSelected === 1) {
      this.month = 12;
      this.year--;
    } else {
      this.month -= 1;
    }
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _handleKeyDownCalendarPrevMonthBtn(event: KeyboardEvent) {
    if (!event.shiftKey || event.key !== "Tab") return;

    event.preventDefault();
    dispatchCustomEvent(this, "kuc:calendar-header-previous-shifttab");
  }

  private _handleClickCalendarNextMonthBtn(event: MouseEvent) {
    event.stopPropagation();
    const monthSelected = this.month;
    if (monthSelected === 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month += 1;
    }
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _dispatchCalendarHeaderChangeEvent() {
    const year = this.year;
    const month = this.month;
    const detail: CustomEventDetail = { value: `${year}-${month}` };
    dispatchCustomEvent(this, "kuc:calendar-header-change", detail);
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar-header")) {
  createStyleOnHeader(CALENDAR_HEADER_CSS);
  window.customElements.define(
    "kuc-base-datetime-calendar-header",
    BaseDateTimeCalendarHeader
  );
}
