import { html } from "lit";
import { property } from "lit/decorators.js";
import { visiblePropConverter } from "../base/converter";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase
} from "../base/kuc-base";
import { validateProps } from "../base/validator";

type DatePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  language?: "ja" | "en" | "zh" | "auto";
};

export class DatePicker extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: String }) language = "auto";

  private _GUID: string;

  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;

  constructor(props?: DatePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  _getLanguage() {
    switch (this.language) {
      case "auto": {
        switch (document.documentElement.lang) {
          case "ja":
            return "ja";
          case "zh":
            return "zh";
          default:
            return "en";
        }
      }
      case "ja":
        return "ja";
      case "zh":
        return "zh";
      default:
        return "en";
    }
  }

  _handleDateChange(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    if (event.detail.error) {
      this.error = event.detail.error;
    } else {
      this.error = "";
    }
    this._disptchChangeEvent(event.detail);
  }

  _disptchChangeEvent(eventDetail: CustomEventDetail) {
    dispatchCustomEvent(this, "change", eventDetail);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-date-picker-group">
        <label
          class="kuc-date-picker__group__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-date-picker__group__label__text">${this.label}</span
          ><!--
--><span
            class="kuc-date-picker__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </label>
        <kuc-base-date
          .language="${this._getLanguage()}"
          .inputId="${this._GUID}"
          .inputAriaInvalid="${this.error !== ""}"
          .disabled="${this.disabled}"
          @kuc:base-date-change="${this._handleDateChange}"
        >
        </kuc-base-date>
        <div
          class="kuc-date-picker__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </div>
    `;
  }

  _getStyleTagTemplate() {
    return html`
      <style>
        kuc-date-picker,
        kuc-date-picker *,
        :lang(en) kuc-date-picker,
        :lang(en) kuc-date-picker * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-date-picker,
        :lang(ja) kuc-date-picker * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-date-picker,
        :lang(zh) kuc-date-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-date-picker {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
          msx-width: 100px;
          width: 100px;
        }
        kuc-date-picker[hidden] {
          display: none;
        }
        .kuc-date-picker__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin: 0px;
        }
        .kuc-date-picker__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-date-picker__group__label[hidden] {
          display: none;
        }
        .kuc-date-picker__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-date-picker__group__label__required-icon[hidden] {
          display: none;
        }

        .kuc-date-picker__group__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-date-picker")) {
  window.customElements.define("kuc-date-picker", DatePicker);
}
