import { html, PropertyValues } from "lit";
import { property, query } from "lit/decorators.js";
import { KucBase } from "../../base/kuc-base";

export class MobileBaseLabel extends KucBase {
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: String }) guid = "";
  @property({ type: String }) text = "";

  @query(".kuc-mobile-base-label__text")
  private _textEl!: HTMLSpanElement;

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <span class="kuc-mobile-base-label__text">${this.text}</span
      ><!--
        --><span
        class="kuc-mobile-base-label__required-icon"
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
        kuc-mobile-base-label {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-base-label,
        :lang(zh) kuc-mobile-base-label * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-base-label[hidden] {
          display: none;
        }
        .kuc-mobile-base-label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
        }
        .kuc-mobile-base-label__required-icon {
          position: relative;
          left: 3px;
          color: #d01212;
        }
        .kuc-mobile-base-label__required-icon[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-base-label")) {
  window.customElements.define("kuc-mobile-base-label", MobileBaseLabel);
}
