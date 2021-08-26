import { property } from "lit-element";
import { html } from "lit-html";
import { KucBase } from "../../base/kuc-base";

export class CalendarButton extends KucBase {
  @property({ type: String }) action = "none";

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <button class="kuc-calendar-button kuc-calendar-button--${this.action}">
        ${this._getContentByAction()}
      </button>
    `;
  }

  private _getContentByAction() {
    switch (this.action) {
      case "prev":
        return "<";
      case "next":
        return ">";
      case "today":
        return "Today";
      case "none":
      default:
        return "None";
    }
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
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

if (!window.customElements.get("kuc-calendar-button")) {
  window.customElements.define("kuc-calendar-button", CalendarButton);
}
