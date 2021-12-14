import { html } from "lit";
import { property } from "lit/decorators.js";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";

import "../base/datetime/date";
import "../base/datetime/time";

type DateTimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  language?: "ja" | "en" | "zh" | "auto";
  value: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};

export class DateTimePicker extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) language = "auto";
  @property({ type: String }) value? = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;

  private _GUID: string;

  constructor(props?: DateTimePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-datetime-picker__group">
        <legend
          class="kuc-datetime-picker__group__label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-datetime-picker__group__label__text"
            >${this.label}</span
          ><!--
          --><span
            class="kuc-datetime-picker__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <div class="kuc-datetime-picker__group__inputs">
          <kuc-base-date value="2021-11-12"></kuc-base-date
          ><kuc-base-time value="08:30"></kuc-base-time>
        </div>
        <div
          class="kuc-datetime-picker__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </fieldset>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-datetime-picker,
        kuc-datetime-picker *,
        :lang(en) kuc-datetime-picker,
        :lang(en) kuc-datetime-picker * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-datetime-picker,
        :lang(ja) kuc-datetime-picker * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-datetime-picker,
        :lang(zh) kuc-datetime-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-datetime-picker {
          display: inline-table;
          vertical-align: top;
        }
        kuc-datetime-picker[hidden] {
          display: none;
        }
        .kuc-datetime-picker__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          margin: 0px;
        }
        .kuc-datetime-picker__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-datetime-picker__group__label[hidden] {
          display: none;
        }
        .kuc-datetime-picker__group__label__text {
          color: #333333;
          font-size: 14px;
        }
        .kuc-datetime-picker__group__label__required-icon {
          margin-left: 4px;
          line-height: 1;
          vertical-align: -3px;
          color: #e74c3c;
          font-size: 20px;
        }
        .kuc-datetime-picker__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-datetime-picker__group__inputs {
          display: flex;
        }
        .kuc-datetime-picker__group__error {
          box-sizing: border-box;
          margin: 8px 0px;
          padding: 4px 18px;
          line-height: 1.5;
          font-size: 14px;
          background-color: #e74c3c;
          color: #ffffff;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-datetime-picker__group__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-datetime-picker")) {
  window.customElements.define("kuc-datetime-picker", DateTimePicker);
}
