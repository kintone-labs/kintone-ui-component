import { html, property, svg, query } from "lit-element";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../../kuc-base";

type BaseDateTimeCalendarHeaderProps = {
  language?: "en" | "zh" | "ja";
  month?: number;
  year?: number;
};

export class BaseDateTimeCalendarHeader extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: Number }) month = 1;
  @property({ type: Number }) year = 2021;

  @query(".kuc-base-datetime-calendar-header__group__year")
  private _yearSelectEl: HTMLSelectElement | undefined;

  @query(".kuc-base-datetime-calendar-header__group__month")
  private _monthSelectEl: HTMLSelectElement | undefined;

  constructor(props?: BaseDateTimeCalendarHeaderProps) {
    super();
    if (!props) {
      return;
    }
    this.language =
      props.language !== undefined ? props.language : this.language;
    this.month = props.month !== undefined ? props.month : this.month;
    this.year = props.year !== undefined ? props.year : this.year;
  }

  private _handleClickCalendarHeaderButtonPreviousMonth(event: MouseEvent) {
    event.stopPropagation();
    if (!this._monthSelectEl || !this._yearSelectEl) return;
    const monthSelectedIndex = this._monthSelectEl.selectedIndex;
    const yearSelectedIndex = this._yearSelectEl.selectedIndex;
    if (monthSelectedIndex === 0) {
      this._monthSelectEl.selectedIndex = 11;
      this._yearSelectEl.selectedIndex = yearSelectedIndex - 1;
    } else {
      this._monthSelectEl.selectedIndex = monthSelectedIndex - 1;
    }
    this._handleChangeCalendarHeader();
  }

  private _handleClickCalendarHeaderButtonNextMonth(event: MouseEvent) {
    event.stopPropagation();
    if (!this._monthSelectEl || !this._yearSelectEl) return;
    const monthSelectedIndex = this._monthSelectEl.selectedIndex;
    const yearSelectedIndex = this._yearSelectEl.selectedIndex;
    if (monthSelectedIndex === 11) {
      this._monthSelectEl.selectedIndex = 0;
      this._yearSelectEl.selectedIndex = yearSelectedIndex + 1;
    } else {
      this._monthSelectEl.selectedIndex = monthSelectedIndex + 1;
    }
    this._handleChangeCalendarHeader();
  }

  private _handleChangeCalendarHeaderYearSelect(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this._handleChangeCalendarHeader();
  }

  private _handleChangeCalendarHeaderMonthSelect(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this._handleChangeCalendarHeader();
  }

  private _handleChangeCalendarHeader() {
    const year = this._yearSelectEl?.value;
    const month = this._monthSelectEl?.value;
    const detail: CustomEventDetail = { value: `${year}-${month}` };
    dispatchCustomEvent(this, "kuc:calendar-header-change", detail);
  }

  private _getYearSelectOptions() {
    const yearSelectOptions = [];
    if (!Number.isInteger(this.year)) {
      this.year = 2021;
    }
    for (let i = this.year - 100; i <= this.year + 100; i++) {
      yearSelectOptions.push(i);
    }
    return yearSelectOptions;
  }

  private _getMonthSelectOptions() {
    switch (this.language) {
      case "en":
        return [
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
          "AUGUST",
          "SEPTEMBER",
          "OCTOBER",
          "NOVEMBER",
          "DECEMBER"
        ];
      case "zh":
        return [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ];
      case "ja":
        return [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ];
      default:
        return [
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
          "AUGUST",
          "SEPTEMBER",
          "OCTOBER",
          "NOVEMBER",
          "DECEMBER"
        ];
    }
  }

  private _getYearTemplate() {
    return html`
      <select
        class="kuc-base-datetime-calendar-header__group__year"
        @change="${this._handleChangeCalendarHeaderYearSelect}"
      >
        ${this._getYearSelectOptions().map((year: number) => {
          return html`
            <option ?selected="${this.year === year}" value="${year}"
              >${year}${this.language === "zh" || this.language === "ja"
                ? "年"
                : ""}</option
            >
          `;
        })}
      </select>
    `;
  }

  private _getMonthTemplate() {
    return html`
      <select
        class="kuc-base-datetime-calendar-header__group__month"
        @change="${this._handleChangeCalendarHeaderMonthSelect}"
      >
        ${this._getMonthSelectOptions().map((month: string, index: number) => {
          return html`
            <option ?selected="${this.month === index + 1}" value="${index + 1}"
              >${month}</option
            >
          `;
        })}
      </select>
    `;
  }

  private _getYearMonthTemplate() {
    return this.language === "zh" || this.language === "ja"
      ? html`
          ${this._getYearTemplate()}${this._getMonthTemplate()}
        `
      : html`
          ${this._getMonthTemplate()}${this._getYearTemplate()}
        `;
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-base-datetime-calendar-header__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button-previous-month"
          @click=${this._handleClickCalendarHeaderButtonPreviousMonth}
        >
          ${this._getCalendarHeaderButtonPreviousMonthIconSvgTemplate()}
        </button>
        <span class="kuc-base-datetime-calendar-header__group__center"
          >${this._getYearMonthTemplate()}</span
        >
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button-next-month"
          @click=${this._handleClickCalendarHeaderButtonNextMonth}
        >
          ${this._getCalendarHeaderButtonNextMonthIconSvgTemplate()}
        </button>
      </div>
    `;
  }

  private _getCalendarHeaderButtonPreviousMonthIconSvgTemplate() {
    return svg`
      <svg
        class="kuc-base-datetime-calendar-header__group__button-icon"
        width="9"
        height="14"
        viewBox="0 0 9 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z" 
          fill="#888888"
        />
      </svg>`;
  }

  private _getCalendarHeaderButtonNextMonthIconSvgTemplate() {
    return svg`
      <svg
        class="kuc-base-datetime-calendar-header__group__button-icon"
        width="9" 
        height="14" 
        viewBox="0 0 9 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
          fill="#888888"
        />
      </svg>`;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-datetime-calendar-header,
        kuc-base-datetime-calendar-header *,
        :lang(en) kuc-base-datetime-calendar-header,
        :lang(en) kuc-base-datetime-calendar-header * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-calendar-header,
        :lang(ja) kuc-base-datetime-calendar-header * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-calendar-header,
        :lang(zh) kuc-base-datetime-calendar-header * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-calendar-header__group {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          border-bottom: 1px solid #e3e7e8;
          padding: 0;
          white-space: nowrap;
          width: 272px;
          height: 44px;
        }
        .kuc-base-datetime-calendar-header__group__button {
          background: transparent;
          border: none;
          cursor: pointer;
          outline: none;
          width: 38px;
          height: 32px;
          padding: 1px;
          margin: 0;
          text-align: center;
        }
        .kuc-base-datetime-calendar-header__group__button:focus {
          padding: 1px;
          border: 1px solid #e3e7e8;
          border-radius: 4px;
          outline: none;
        }
        .kuc-base-datetime-calendar-header__group__button-icon {
          vertical-align: middle;
        }
        .kuc-base-datetime-calendar-header__group__center {
          width: 196px;
          text-align: center;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-datetime-calendar-header")) {
  window.customElements.define(
    "kuc-base-datetime-calendar-header",
    BaseDateTimeCalendarHeader
  );
}
