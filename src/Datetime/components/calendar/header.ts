import { html } from "lit-html";
import { KucBase } from "../../../base/kuc-base";

export class CalendarPresentationHeader extends KucBase {
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <span
        ><button
          class="kuc-calendar-button kuc-calendar-button--prev"
          @click=${this._handleClickPrevButton}
        >
          <
        </button></span
      >
      <span class="kuc-calendar-presentation-header__year-month">
        <select></select>
        <select></select>
      </span>
      <span
        ><button
          class="kuc-calendar-button kuc-calendar-button--next"
          @click=${this._handleClickNextButton}
        >
          >
        </button></span
      >
    `;
  }

  private _handleClickPrevButton() {
    console.log("prev");
  }

  private _handleClickNextButton() {
    console.log("next");
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-calendar-presentation-header {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          width: 272px;
          padding: 0;
          height: 44px;
          border-bottom: 1px solid #e3e7e8;
        }
        .kuc-calendar-presentation-header__year-month {
          width: 100%;
        }
        .kuc-calendar-button {
          background-color: unset;
          border: unset;
          cursor: pointer;
        }
        .kuc-calendar-button--prev,
        .kuc-calendar-button--next {
          width: 38px;
          height: 32px;
          margin: 0;
          padding: 0;
          border-style: none;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-calendar-presentation-header")) {
  window.customElements.define(
    "kuc-calendar-presentation-header",
    CalendarPresentationHeader
  );
}
