import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { visiblePropConverter, dateValueConverter } from "../base/converter";
import { getTodayStringByLocale } from "../base/datetime/utils";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase
} from "../base/kuc-base";
import { validateProps, validateDateValue } from "../base/validator";
import "../base/datetime/date";
import { FORMAT_IS_NOT_VALID } from "../base/datetime/resource/constant";

type DatePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  language?: "ja" | "en" | "zh" | "auto";
  value: string;
};

export class DatePicker extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: String }) language = "auto";
  @property({ type: String }) value? = getTodayStringByLocale();
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;

  private _GUID: string;

  constructor(props?: DatePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
      if (!validateDateValue(this.value)) {
        throw new Error(FORMAT_IS_NOT_VALID);
      }
      this.value = dateValueConverter(this.value);
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-date-picker__group">
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
          .inputId="${this._GUID}"
          .inputAriaInvalid="${this.error !== ""}"
          .disabled="${this.disabled}"
          .value="${this.value}"
          .language="${this._getLanguage()}"
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

  private _getStyleTagTemplate() {
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
          max-width: 100px;
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
  private _getLanguage() {
    const langs = ["en", "ja", "zh"];
    if (langs.indexOf(this.language) !== -1) return this.language;

    if (langs.indexOf(document.documentElement.lang) !== -1)
      return document.documentElement.lang;

    return "en";
  }

  private _handleDateChange(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();
    const eventDetail: CustomEventDetail = {
      oldValue: this.value,
      value: ""
    };
    this.error = "";
    if (event.detail.error) {
      this.error = event.detail.error;
    } else {
      this.value = event.detail.value;
    }
    eventDetail.value = this.value;
    this._disptchChangeEvent(eventDetail);
  }

  private _disptchChangeEvent(eventDetail: CustomEventDetail) {
    dispatchCustomEvent(this, "change", eventDetail);
  }
}
if (!window.customElements.get("kuc-date-picker")) {
  window.customElements.define("kuc-date-picker", DatePicker);
}
