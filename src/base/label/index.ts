import { html } from "lit";
import { property } from "lit/decorators.js";
import { KucBase } from "../kuc-base";

export class BaseLabel extends KucBase {
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: String }) guid = "";
  @property({ type: String }) text = "";

  render() {
    return html`
      ${this._getStyleTagTemplate()}${this._getTextTemplate()}
      <span
        class="kuc-base-label__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `;
  }

  private _getTextTemplate() {
    return this.guid && this.guid !== ""
      ? html`
          <span class="kuc-base-label__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `
      : html` <span class="kuc-base-label__text">${this.text}</span> `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-label,
        kuc-base-label *,
        :lang(en) kuc-base-label,
        :lang(en) kuc-base-label * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-label,
        :lang(ja) kuc-base-label * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-label,
        :lang(zh) kuc-base-label * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-base-label {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
        }
        kuc-base-label[hidden] {
          display: none;
        }
        .kuc-base-label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-base-label__required-icon[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-base-label")) {
  window.customElements.define("kuc-base-label", BaseLabel);
}
