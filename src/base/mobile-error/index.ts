import { html } from "lit";
import { property } from "lit/decorators.js";
import { KucBase } from "../../base/kuc-base";

export class BaseMobileError extends KucBase {
  @property({ type: String }) ariaLive = "";
  @property({ type: String }) guid = "";
  @property({ type: String }) text = "";

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      ${this.ariaLive && this.ariaLive !== ""
        ? html`
            <div
              class="kuc-base-mobile-error__error"
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
              class="kuc-base-mobile-error__error"
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
        kuc-base-mobile-error {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-base-mobile-error,
        :lang(zh) kuc-base-mobile-error * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-base-mobile-error[hidden] {
          display: none;
        }
        .kuc-base-mobile-error__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
        .kuc-base-mobile-error__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-base-mobile-error")) {
  window.customElements.define("kuc-base-mobile-error", BaseMobileError);
}
