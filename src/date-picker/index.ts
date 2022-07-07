import { html, PropertyValues } from "lit";
import { property, state, query } from "lit/decorators.js";
import { visiblePropConverter, dateValueConverter } from "../base/converter";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import {
  validateProps,
  validateDateValue,
  isValidDate,
  throwErrorAfterUpdateComplete,
} from "../base/validator";
import "../base/datetime/date";
import { FORMAT_IS_NOT_VALID } from "../base/datetime/resource/constant";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
export { BaseError, BaseLabel };

type DatePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  language?: "ja" | "en" | "zh" | "auto";
  value?: string;
};

export class DatePicker extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: String }) language = "auto";
  @property({ type: String }) value? = "";
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter,
  })
  visible = true;

  @state()
  private _errorFormat = "";

  @state()
  private _errorText = "";

  private _inputValue? = "";
  private _invalidValue = "";
  private _valueConverted = "";

  private _GUID: string;

  @query(".kuc-base-date__input")
  private _dateInput!: HTMLInputElement;

  constructor(props?: DatePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  protected shouldUpdate(_changedProperties: PropertyValues): boolean {
    if (this.value === undefined || this.value === "") return true;

    if (typeof this.value !== "string" || !validateDateValue(this.value)) {
      throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
      return false;
    }

    this._valueConverted = dateValueConverter(this.value);
    if (this._valueConverted && !isValidDate(this._valueConverted)) {
      throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
      return false;
    }
    return true;
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
      if (this.value === undefined) {
        this._inputValue = this._invalidValue;
      } else {
        this.value = this.value === "" ? this.value : this._valueConverted;
        this._inputValue = this.value;
        this._errorFormat = "";
      }
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
          <kuc-base-label
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-label>
        </label>
        <kuc-base-date
          .inputId="${this._GUID}"
          .inputAriaInvalid="${this.error !== ""}"
          .disabled="${this.disabled}"
          .value="${this._inputValue}"
          .required="${this.requiredIcon}"
          .language="${this._getLanguage()}"
          @kuc:base-date-change="${this._handleDateChange}"
        >
        </kuc-base-date>
        <kuc-base-error
          .text="${this._errorText}"
          .guid="${this._GUID}"
        ></kuc-base-error>
      </div>
    `;
  }

  updated() {
    this._updateErrorText();
    this._invalidValue = "";
  }

  private _updateErrorText() {
    this._errorText = this._errorFormat || this.error;
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
          line-height: 1.5;
        }
        kuc-date-picker[hidden] {
          display: none;
        }
        .kuc-date-picker__group {
          display: flex;
          flex-direction: column;
          border: none;
          padding: 0px;
          height: auto;
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
        .kuc-date-picker__group input.kuc-base-date__input {
          width: 100px;
          height: 40px;
          padding: 0px;
          text-align: center;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
        }

        .kuc-date-picker__group input.kuc-base-date__input:focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-date-picker__group input.kuc-base-date__input--focus {
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          border: 1px solid #3498db;
          background-color: #ffffff;
          color: #333333;
        }
        .kuc-date-picker__group input.kuc-base-date__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
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
      value: "",
    };
    if (event.detail.error) {
      this.value = undefined;
      this._invalidValue = this._dateInput.value;
      this._errorFormat = event.detail.error;
      this.error = "";
      eventDetail.value = undefined;
    } else {
      this._errorFormat = "";
      this.value = event.detail.value === undefined ? "" : event.detail.value;
      eventDetail.value = this.value;
    }
    this._disptchChangeEvent(eventDetail);
  }

  private _disptchChangeEvent(eventDetail: CustomEventDetail) {
    dispatchCustomEvent(this, "change", eventDetail);
  }
}
if (!window.customElements.get("kuc-date-picker")) {
  window.customElements.define("kuc-date-picker", DatePicker);
}
