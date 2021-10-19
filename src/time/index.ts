import { html, property } from "lit-element";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent
} from "../base/kuc-base";
import "../base/time";

export class Time extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) value = "";
  @property({ type: Number }) timeStep = 30;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: Boolean }) visible = false;
  @property({ type: Boolean }) requiredIcon = false;

  private _GUID = generateGUID();

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-time__group" ?hidden="${!this.visible}">
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
          .visible="${this.visible}"
          .timeStep="${this.timeStep}"
          @kuc:base-time-change="${this._handleTimeChange}"
          .disabled="${this.disabled}"
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
    dispatchCustomEvent(this, "kuc:time-change", detail);
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-time__group {
          display: flex;
          flex-direction: column;
          border: none;
          padding: 0px;
          height: auto;
          margin: 0px;
        }
        .kuc-time__group[hidden] {
          display: none;
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
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-time")) {
  window.customElements.define("kuc-time", Time);
}
