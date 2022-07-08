import { html, svg } from "lit";
import { property, state } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../base/kuc-base";
import { validateProps } from "../base/validator";
import { NOTIFICATION_CSS } from "./style";
import { NotificationProps } from "./type";

let exportNotification;
(() => {
  exportNotification = window.customElements.get("kuc-notification");
  if (exportNotification) {
    return;
  }

  class KucNotification extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) text = "";
    @property({ type: String }) type: "info" | "danger" | "success" = "danger";
    @property({ type: Number }) duration = -1;

    @state()
    private _isOpened = false;

    private _timeoutID!: number;

    constructor(props?: NotificationProps) {
      super();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    private _handleClickCloseButton(event: MouseEvent) {
      this.close();
    }

    private _getCloseButtonColor() {
      switch (this.type) {
        case "info":
          return "#448aca";
        case "success":
          return "#9bbc65";
        default:
          return "#c65040";
      }
    }

    private _getCloseButtonSvgTemplate() {
      return svg`
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close button</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="${this._getCloseButtonColor()}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="white"
          />
        </svg>
      `;
    }

    private _setAutoCloseTimer() {
      if (!Number.isFinite(this.duration) || this.duration < 0) {
        return;
      }
      this._clearAutoCloseTimer();
      this._timeoutID = window.setTimeout(() => {
        this.close();
      }, this.duration);
    }

    private _clearAutoCloseTimer() {
      this._timeoutID && window.clearTimeout(this._timeoutID);
    }

    open() {
      document.body.appendChild(this);
      this.performUpdate();
      this.classList.remove("kuc-notification-fadeout");
      this.classList.add("kuc-notification-fadein");
      this._isOpened = true;
      this._setAutoCloseTimer();
    }

    close() {
      this._isOpened = false;
      this.classList.remove("kuc-notification-fadein");
      this.classList.add("kuc-notification-fadeout");
      this._clearAutoCloseTimer();
      dispatchCustomEvent(this, "close");
    }

    render() {
      return html`
        <div
          class="kuc-notification__notification kuc-notification__notification--${this
            .type}"
        >
          <pre
            class="kuc-notification__notification__title"
            aria-live="assertive"
            role="${this._isOpened ? "alert" : ""}"
          ><!--
          -->${this.text}</pre>
          <button
            class="kuc-notification__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `;
    }
  }

  window.customElements.define("kuc-notification", KucNotification);
  createStyleOnHeader(NOTIFICATION_CSS);
  exportNotification = KucNotification;
})();

const Notification = exportNotification as any;
export { Notification };
