import { html, property, svg } from "lit-element";
import { KucBase, dispatchCustomEvent } from "../../../kuc-base";

type BaseDateTimeCalendarHeaderProps = {
  language?: "en" | "zh" | "ja";
  month?: number;
  year?: number;
};

export class BaseDateTimeCalendarHeader extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: Number }) month = 1;
  @property({ type: Number }) year = 2021;

  constructor(props?: BaseDateTimeCalendarHeaderProps) {
    super();
    if (!props) {
      return;
    }
    this.language =
      props.language !== undefined ? props.language : this.language;
    this.month = props.month !== undefined ? props.month : this.month;
    this.year = props.year !== undefined ? props.year : this.year;

    this._setValidProperty();
  }

  private _setValidProperty() {
    if (
      this.language !== "en" &&
      this.language !== "zh" &&
      this.language !== "ja"
    ) {
      this.language = "en";
    }

    if (!Number.isInteger(this.month) || this.month < 1 || this.month > 12) {
      this.month = 1;
    }

    if (!Number.isInteger(this.year)) {
      this.year = 2021;
    }
  }

  private _handleClickCalendarHeaderButtonPreviousMonth(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:calendar-header-click-previous-month");
  }

  private _handleClickCalendarHeaderButtonNextMonth(event: MouseEvent) {
    event.stopPropagation();
    dispatchCustomEvent(this, "kuc:calendar-header-click-next-month");
  }

  private _getYearSelectOptions() {
    const yearSelectOptions = [];
    for (let i = this.year - 100; i < this.year + 100; i++) {
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
      <select class="kuc-base-datetime-calendar-header__group__year">
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
      <select class="kuc-base-datetime-calendar-header__group__month">
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
    return this.language === "en"
      ? html`
          ${this._getMonthTemplate()}${this._getYearTemplate()}
        `
      : html`
          ${this._getYearTemplate()}${this._getMonthTemplate()}
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
          ${this._getCalendarHeaderButtonIconSvgTemplate("previous-month")}
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
          ${this._getCalendarHeaderButtonIconSvgTemplate("next-month")}
        </button>
      </div>
    `;
  }

  private _getCalendarHeaderButtonIconSvgTemplate(type: string) {
    return svg`
      ${
        type === "previous-month"
          ? svg`
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
        </svg>`
          : svg`
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
        </svg>`
      }`;
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
        }
        .kuc-base-datetime-calendar-header__group__button-icon {
          vertical-align: middle;
        }
        .kuc-base-datetime-calendar-header__group__center {
          width: 100%;
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
