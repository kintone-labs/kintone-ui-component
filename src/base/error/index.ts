import { html } from "lit";
import { property } from "lit/decorators.js";
import { KucBase } from "../kuc-base";

export class BaseError extends KucBase {
  @property({ type: String }) ariaLive = "";
  @property({ type: String }) guid = "";
  @property({ type: String }) text = "";

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      ${this.ariaLive && this.ariaLive !== ""
        ? html`
            <div
              class="kuc-base-error__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `
        : html`
            <div
              class="kuc-base-error__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-error,
        kuc-base-error *,
        :lang(en) kuc-base-error,
        :lang(en) kuc-base-error * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-error,
        :lang(ja) kuc-base-error * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-error,
        :lang(zh) kuc-base-error * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-base-error {
          font-size: 14px;
          display: inline-table;
          vertical-align: top;
        }
        kuc-base-error[hidden] {
          display: none;
        }
        .kuc-base-error__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-base-error__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-base-error")) {
  window.customElements.define("kuc-base-error", BaseError);
}
