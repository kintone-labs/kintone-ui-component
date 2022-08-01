import { html, svg } from "lit";
import { property, state } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../../base/kuc-base";
import { validateProps } from "../../base/validator";
import { MOBILE_NOTIFICATION_CSS } from "./style";
import { MobileNotificationProps } from "./type";

let exportMobileNotification;
(() => {
  exportMobileNotification = window.customElements.get(
    "kuc-mobile-notification"
  );
  if (exportMobileNotification) {
    return;
  }

  class KucMobileNotification extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) text = "";
    @property({ type: Number }) duration = -1;

    @state()
    private _isOpened = false;

    private _timeoutID!: number;

    constructor(props?: MobileNotificationProps) {
      super();

      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    private _handleClickCloseButton(event: MouseEvent) {
      this.close();
    }

    private _getCloseButtonSvgTemplate() {
      return svg`
      <svg
        height="12"
        width="12"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"/>
          </g>
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

      this.classList.remove("kuc-mobile-notification-fadeout");
      this.classList.add("kuc-mobile-notification-fadein");
      this._isOpened = true;

      this._setAutoCloseTimer();
    }

    close() {
      this._isOpened = false;
      this.classList.remove("kuc-mobile-notification-fadein");
      this.classList.add("kuc-mobile-notification-fadeout");

      this._clearAutoCloseTimer();

      dispatchCustomEvent(this, "close");
    }

    render() {
      return html`
        <div class="kuc-mobile-notification__notification">
          <pre
            class="kuc-mobile-notification__notification__title"
            aria-live="assertive"
            role="${this._isOpened ? "alert" : ""}"
          ><!---->${this.text}</pre>
          <button
            class="kuc-mobile-notification__notification__close-button"
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

  window.customElements.define(
    "kuc-mobile-notification",
    KucMobileNotification
  );
  createStyleOnHeader(MOBILE_NOTIFICATION_CSS);
  exportMobileNotification = KucMobileNotification;
})();

const MobileNotification = exportMobileNotification as any;
export { MobileNotification };
