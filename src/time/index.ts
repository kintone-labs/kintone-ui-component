import { html } from "lit";
import { property } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import "../base/time";

type TimeProps = {
  className?: string;
  id?: string;
  error?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  hour12?: boolean;
  visible?: boolean;
  requiredIcon?: boolean;
};

export class Time extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;
  @property({ type: Boolean }) requiredIcon = false;

  private _GUID: string;

  constructor(props?: TimeProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-time__group">
        <label
          class="kuc-time__group__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-time__group__label__text">${this.label}</span>
          <span
            class="kuc-time__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
          >
            *
          </span>
        </label>
        <kuc-base-time
          class="kuc-time__group__input"
          .value="${this.value}"
          .hour12="${this.hour12}"
          .disabled="${this.disabled}"
          @kuc:base-time-change="${this._handleTimeChange}"
        >
        </kuc-base-time>
        <div
          class="kuc-time__group__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
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
        kuc-time,
        kuc-time *,
        :lang(en) kuc-time,
        :lang(en) kuc-time * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-time,
        :lang(ja) kuc-time * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-time,
        :lang(zh) kuc-time * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-time {
          font-size: 14px;
          color: #333333;
          display: inline-table;
          vertical-align: top;
          min-width: 193px;
          width: 193px;
        }
        kuc-time[hidden] {
          display: none;
        }
        .kuc-time__group {
          display: flex;
          flex-direction: column;
          border: none;
          padding: 0px;
          height: auto;
          margin: 0px;
        }
        .kuc-time__group__label {
          display: inline-block;
          padding: 4px 0px 8px 0px;
          white-space: nowrap;
        }
        .kuc-time__group__label[hidden] {
          display: none;
        }
        .kuc-time__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-time__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-time__group__error {
          display: flex;
          width: 85px;
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0px;
          word-break: break-all;
          white-space: normal;
        }
        .kuc-time__group__error[hidden] {
          display: none;
        }
        .kuc-time__group[hidden] {
          display: none;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-time")) {
  window.customElements.define("kuc-time", Time);
}
