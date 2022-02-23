import { html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
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
  @property({ type: String }) value = "";
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

  constructor(props: MobileTimePickerProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }
  update(changedProperties: PropertyValues) {
    if (changedProperties.has("value")) {
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
      <div
        class="kuc-mobile-time-picker__group"
        aria-describedby="${this._GUID}-error"
      >
        <kuc-base-mobile-label
          .guid="${this._GUID}"
          .text="${this.label}"
          .requiredIcon="${this.requiredIcon}"
        ></kuc-base-mobile-label>
        <div class="kuc-base-mobile-time__wrapper">
        <kuc-base-mobile-time
          .value="${this.value}"
          .disabled="${this.disabled}"
          .hour12="${this.hour12}"
          @kuc:base-mobile-time-change="${this._handleTimeChange}"
          style="dislpay:inlineblock"
        ></kuc-base-mobile-time>
        </div>
        <kuc-base-mobile-error .uuid="${this._GUID}" .text="${this.error}"
        .aria-live="assertive"" ></kuc-base-mobile-error>
      </div>
    `;
  }
  private _handleTimeChange(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    const detail: CustomEventDetail = {
      value: event.detail.value,
      oldValue: event.detail.oldValue
    };
    dispatchCustomEvent(this, "change", detail);
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
