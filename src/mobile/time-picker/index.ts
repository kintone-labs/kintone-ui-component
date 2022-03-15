import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { timeValueConverter, visiblePropConverter } from "../../base/converter";
import { FORMAT_IS_NOT_VALID } from "../../base/datetime/resource/constant";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase
} from "../../base/kuc-base";
import { validateProps, validateTimeValue } from "../../base/validator";
import "../../base/mobile-error";
import "../../base/datetime/mobile-time";
import "../../base/mobile-label";
type MobileTimePickerProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  language?: "ja" | "en" | "zh" | "auto";
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};
export class MobileTimePicker extends KucBase {
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
  @state()
  private _inputValue!: string;
  constructor(props?: MobileTimePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }
  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value") && this.value) {
      if (!validateTimeValue(this.value)) {
        throw new Error(FORMAT_IS_NOT_VALID);
      }
      this.value = timeValueConverter(this.value);
    }
    super.update(changedProperties);
  }
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-mobile-time-picker__group">
        <kuc-base-mobile-label
          .guid="${this._GUID}"
          .text="${this.label}"
          .requiredIcon="${this.requiredIcon}"
        ></kuc-base-mobile-label>
        <div class="kuc-base-mobile-time__wrapper">
          <kuc-base-mobile-time
            .value="${this._inputValue}"
            .disabled="${this.disabled}"
            .hour12="${this.hour12}"
            .guid="${this._GUID}"
            .language="${this._getLanguage()}"
            @kuc:base-mobile-time-change="${this._handleTimeChange}"
          ></kuc-base-mobile-time>
        </div>
        <kuc-base-mobile-error
          .guid="${this._GUID}"
          .text="${this.error}"
          ariaLive="assertive"
        ></kuc-base-mobile-error>
      </div>
    `;
  }
  updated(changedProperties: PropertyValues) {
    this._updateInputValue();
    super.update(changedProperties);
  }
  private _updateInputValue() {
    if (this.value === undefined) return;
    this._inputValue = this.value;
  }
  private _handleTimeChange(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    const detail: CustomEventDetail = {
      value: event.detail.value,
      oldValue: event.detail.oldValue
    };
    if (event.detail.error) {
      this.error = event.detail.error;
      this.value = undefined;
      detail.value = undefined;
      dispatchCustomEvent(this, "change", detail);
      return;
    }
    if (this.value === undefined) {
      this.error = "";
      detail.oldValue = undefined;
    }
    this.value = event.detail.value;
    dispatchCustomEvent(this, "change", detail);
  }
  private _getLanguage() {
    const langs = ["en", "ja", "zh"];
    if (langs.indexOf(this.language) !== -1) return this.language;

    if (langs.indexOf(document.documentElement.lang) !== -1)
      return document.documentElement.lang;

    return "en";
  }
  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-time-picker,
        kuc-mobile-time-picker * {
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-time-picker,
        :lang(zh) kuc-mobile-time-picker * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-time-picker {
          display: inline-block;
          vertical-align: top;
          width: 100%;
        }
        kuc-mobile-time-picker[hidden] {
          display: none;
        }
        .kuc-mobile-time-picker__group {
          padding: 0.5em 0.5em 1em;
        }
        .kuc-base-mobile-time__wrapper {
          padding-left: 0.5em;
          max-width: 80px;
          word-wrap: break-word;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-time-picker")) {
  window.customElements.define("kuc-mobile-time-picker", MobileTimePicker);
}
