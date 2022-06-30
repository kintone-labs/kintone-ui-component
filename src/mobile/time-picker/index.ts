import { html, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { timeValueConverter, visiblePropConverter } from "../../base/converter";
import { FORMAT_IS_NOT_VALID } from "../../base/datetime/resource/constant";
import {
  CustomEventDetail,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../../base/kuc-base";
import {
  throwErrorAfterUpdateComplete,
  validateProps,
  validateTimeValue,
} from "../../base/validator";
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
  @property({
    type: String,
    hasChanged(newVal: string, oldVal: string) {
      if ((newVal === "" || newVal === undefined) && newVal === oldVal) {
        return true;
      }
      return newVal !== oldVal;
    },
  })
  value? = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter,
  })
  visible = true;

  private _GUID: string;

  @state()
  private _inputValue: string = "";

  @state()
  private _errorFormat = "";

  private _isSelectError = false;

  constructor(props?: MobileTimePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  protected shouldUpdate(changedProperties: PropertyValues): boolean {
    if (this.value === undefined || this.value === "") return true;
    if (!validateTimeValue(this.value)) {
      throwErrorAfterUpdateComplete(this, FORMAT_IS_NOT_VALID);
      return false;
    }
    return true;
  }

  willUpdate(): void {
    if (this.value === undefined || this.value === "") return;
    this.value = timeValueConverter(this.value);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value") && !this._isSelectError) {
      if (this.value === undefined) {
        this._inputValue = "";
      } else {
        this._inputValue = this.value || "";
      }
      this._errorFormat = "";
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-mobile-time-picker__group">
        <label
          class="kuc-mobile-time-picker__group__label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label
            .guid="${this._GUID}"
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label>
        </label>
        <div class="kuc-base-mobile-time__group__wrapper">
          <kuc-base-mobile-time
            .value="${this._inputValue}"
            .disabled="${this.disabled}"
            .hour12="${this.hour12}"
            .guid="${this._GUID}"
            .language="${this._getLanguage()}"
            .required="${this.requiredIcon}"
            @kuc:base-mobile-time-change="${this._handleTimeChange}"
          ></kuc-base-mobile-time>
        </div>
        <kuc-base-mobile-error
          .guid="${this._GUID}"
          .text="${this._errorFormat || this.error}"
          ariaLive="assertive"
        ></kuc-base-mobile-error>
      </div>
    `;
  }

  updated() {
    this._isSelectError = false;
  }

  private _handleTimeChange(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    const detail: CustomEventDetail = {
      value: event.detail.value,
      oldValue: this.value,
    };
    this._inputValue = event.detail.value;
    if (event.detail.error) {
      this._isSelectError = true;
      this._errorFormat = event.detail.error;
      this.value = undefined;
      detail.value = undefined;
      this.error = "";
      dispatchCustomEvent(this, "change", detail);
      return;
    }
    const theSameValue = event.detail.value === this.value;
    if (!theSameValue) {
      this.error = "";
    }
    this._isSelectError = false;
    this._errorFormat = "";
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
          font-size: 13px;
          display: inline-block;
          vertical-align: top;
          width: 100%;
        }
        kuc-mobile-time-picker[hidden] {
          display: none;
        }
        .kuc-mobile-time-picker__group__label {
          display: inline-block;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }
        .kuc-mobile-time-picker__group__label[hidden] {
          display: none;
        }
        .kuc-base-mobile-time__group__wrapper {
          padding-left: 0.5em;
          max-width: 10px;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-mobile-time-picker")) {
  window.customElements.define("kuc-mobile-time-picker", MobileTimePicker);
}
