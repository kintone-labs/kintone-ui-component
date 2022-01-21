import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../../kuc-base";
import { Item } from "../../listbox";
import {
  getLeftArrowIconSvgTemplate,
  getRightArrowIconSvgTemplate,
  getLocale
} from "../../utils/";

function isValidMonth(month: number) {
  return month > 0 && month < 13;
}
function isValidYear(year: number) {
  return year >= 0 && year < 10000;
}
export class BaseMobileDateTimeCalendarHeader extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: String }) postfix = "";
  @property({
    type: Number,
    hasChanged(newVal: number) {
      return isValidMonth(newVal);
    }
  })
  month = 1;
  @property({
    type: Number,
    hasChanged(newVal: number) {
      return isValidYear(newVal);
    }
  })
  year = 2021;
  @state()
  private _monthOptions!: Item[];
  @state()
  private _yearOptions!: Item[];
  private _locale = getLocale("en");

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
    }
    this._monthOptions = this._generateMonthOptions();
    this._yearOptions = this._generateYearOptions();
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-mobile-datetime-calendar-header__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header__group__button kuc-base-mobile-datetime-calendar-header__group__button--previous-month"
          @click="${this._handleClickMobileCalendarPrevMonthBtn}"
        >
          ${getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-mobile-datetime-calendar-header__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header__group__button kuc-base-mobile-datetime-calendar-header__group__button--next-month"
          @click="${this._handleClickMobileCalendarNextMonthBtn}"
        >
          ${getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `;
  }

  private _getOptionsMonthTemplate() {
    return this._monthOptions.map(
      month =>
        html`
          <option
            ?selected="${parseInt(month.value || "1", 10) === this.month}"
            value="${month.value || ""}"
            >${month.label}</option
          >
        `
    );
  }

  private _getMonthTemplate() {
    return html`
      <div
        class="kuc-base-mobile-datetime-calendar-header__group__center__month"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header__group__center__month__select"
          @change="${this._handleChangeMonthDropdown}"
        >
          ${this._getOptionsMonthTemplate()}
        </select>
      </div>
    `;
  }

  private _getOptionsYearTemplate() {
    return this._yearOptions.map(
      year =>
        html`
          <option
            ?selected="${parseInt(year.value || "2021", 10) === this.year}"
            value="${year.value || ""}"
            >${year.label}</option
          >
        `
    );
  }

  private _getYearTemplate() {
    return html`
      <div
        class="kuc-base-mobile-datetime-calendar-header__group__center__year"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header__group__center__year__select"
          @change="${this._handleChangeYearDropdown}"
        >
          ${this._getOptionsYearTemplate()}
        </select>
      </div>
    `;
  }

  private _generateMonthOptions() {
    return this._locale.MOBILE_MONTH_SELECT.map(
      (month: string, index: number) => {
        const item: Item = {
          value: `${index + 1}`,
          label: `${month}`
        };
        return item;
      }
    );
  }

  private _generateYearOptions() {
    return this._getMobileYearOptions().map((year: number) => {
      const item: Item = {
        value: `${year}`,
        label: `${year}${this._locale.MOBILE_YEAR_SELECT_POSTFIX}`
      };
      return item;
    });
  }

  private _getMobileYearOptions = () => {
    const year = new Date().getFullYear();
    const options = [];
    let i = year < 100 ? 0 : year - 100;
    const maxYear = year >= 9999 - 100 ? 9999 : year + 100;
    for (i; i <= maxYear; i++) {
      options.push(i);
    }
    return options;
  };

  private _getYearMonthTemplate() {
    return this.language === "zh" || this.language === "ja"
      ? html`
          ${this._getYearTemplate()}${this._getMonthTemplate()}
        `
      : html`
          ${this._getMonthTemplate()}${this._getYearTemplate()}
        `;
  }

  private _handleChangeMonthDropdown(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    const target = event.target as HTMLOptionElement;
    this.month = parseInt(target.value, 10);
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _handleChangeYearDropdown(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    const target = event.target as HTMLOptionElement;
    this.year = parseInt(target.value, 10);
    this._dispatchCalendarHeaderChangeEvent();
  }

  private _handleClickMobileCalendarPrevMonthBtn(event: MouseEvent) {
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

  private _handleClickMobileCalendarNextMonthBtn(event: MouseEvent) {
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
    dispatchCustomEvent(this, "kuc:mobile-calendar-header-change", detail);
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-mobile-datetime-calendar-header,
        kuc-base-mobile-datetime-calendar-header *,
        :lang(en) kuc-base-mobile-datetime-calendar-header,
        :lang(en) kuc-base-mobile-datetime-calendar-header * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-mobile-datetime-calendar-header,
        :lang(ja) kuc-base-mobile-datetime-calendar-header * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
          font-weight: 700;
        }
        :lang(zh) kuc-base-mobile-datetime-calendar-header,
        :lang(zh) kuc-base-mobile-datetime-calendar-header * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-mobile-datetime-calendar-header__group {
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          border-bottom: 1px solid #e3e7e8;
          padding: 0;
          white-space: nowrap;
          height: 41px;
        }
        .kuc-base-mobile-datetime-calendar-header__group__button {
          background-color: inherit;
          border: 0;
          padding: 0;
          margin: 0;
          width: 40px;
          height: 40px;
          overflow: hidden;
          text-indent: 100%;
          white-space: nowrap;
          word-wrap: normal;
        }
        .kuc-base-mobile-datetime-calendar-header__group__button--previous-month {
          background: url(https://static-y.kintone.com/contents/k/image/gaia/mobile/v2/arrow_left.svg)
            no-repeat center center #ffffff;
        }
        .kuc-base-mobile-datetime-calendar-header__group__button--next-month {
          background: url(https://static-y.kintone.com/contents/k/image/gaia/mobile/v2/arrow_right.svg)
            no-repeat center center #ffffff;
        }
        .kuc-base-mobile-datetime-calendar-header__group__button:focus {
          border: 1px solid #3498db;
          outline: none;
        }
        .kuc-base-mobile-datetime-calendar-header__group__button-icon {
          vertical-align: middle;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center {
          width: 190px;
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center__month {
          padding-left: 13px;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center__month,
        .kuc-base-mobile-datetime-calendar-header__group__center__year {
          position: relative;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center__month__select,
        .kuc-base-mobile-datetime-calendar-header__group__center__year__select {
          font-size: 14px;
          font-weight: 700;
          padding: 0 22.4px 0 0;
          line-height: 40px;
          border: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: url(https://static-y.kintone.com/contents/k/image/gaia/mobile/v2/downward-triangle-icon-black.svg)
            no-repeat center right 0.6em #ffffff;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center__month__select:focus,
        .kuc-base-mobile-datetime-calendar-header__group__center__year__select:focus {
          outline: none;
        }
        .kuc-base-mobile-datetime-calendar-header__month {
          margin: 0 4px 0 4px;
        }
        .kuc-base-mobile-datetime-calendar-header__group__center__month__icon;
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-mobile-datetime-calendar-header")) {
  window.customElements.define(
    "kuc-base-mobile-datetime-calendar-header",
    BaseMobileDateTimeCalendarHeader
  );
}
