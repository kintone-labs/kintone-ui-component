import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import { KucBase } from "../kuc-base";

export class BaseLabel extends KucBase {
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: String }) guid = "";
  @property({ type: String }) text = "";

  @query(".kuc-base-label__text")
  private _textEl!: HTMLSpanElement;

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <span class="kuc-base-label__text">${this.text}</span
      ><!--
            --><span
        class="kuc-base-label__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("guid")) {
      this._setIdTextLabel();
    }
    super.update(changedProperties);
  }

  private _setIdTextLabel() {
    if (this.guid) {
      this._textEl.setAttribute("id", `${this.guid}-group`);
      return;
    }
    this._textEl.removeAttribute("id");
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
