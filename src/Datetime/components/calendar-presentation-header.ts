import { html } from "lit-html";
import { KucBase } from "../../base/kuc-base";
import "./calendar-button";

export class CalendarPresentationHeader extends KucBase {
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <span
        ><kuc-calendar-button
          action="prev"
          @click=${this._handleClickPrevButton}
      /></span>
      <span class="kuc-calendar-presentation-header__year-month">
        <select></select>
        <select></select>
      </span>
      <span
        ><kuc-calendar-button
          action="next"
          @click=${this._handleClickNextButton}
      /></span>
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
          padding: 0;
          height: 44px;
          border-bottom: 1px solid #e3e7e8;
        }
        .kuc-calendar-presentation-header__year-month {
          width: 100%;
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
