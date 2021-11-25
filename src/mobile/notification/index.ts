import { html, svg } from "lit";
import { property, state } from "lit/decorators.js";
import { KucBase, dispatchCustomEvent } from "../../base/kuc-base";
import { validateProps } from "../../base/validator";
type MobileNotificationProps = {
  className?: string;
  text?: string;
  duration?: number;
};

export class MobileNotification extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
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
      ${this._getStyleTagTemplate()}
      <div class="kuc-mobile-notification__notification">
        <pre
          class="kuc-mobile-notification__notification__title"
          aria-live="assertive"
          role="${this._isOpened ? "alert" : ""}"
        ><!---->${this.text}</pre>
        <button
          class="kuc-mobile-notification__notification__closeButton"
          type="button"
          aria-label="close"
          @click="${this._handleClickCloseButton}"
        >
          ${this._getCloseButtonSvgTemplate()}
        </button>
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-notification {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
          visibility: hidden;
          animation-fill-mode: forwards;
          position: relative;
          top: -100px;
          left: 0;
        }

        :lang(zh) kuc-mobile-notification,
        :lang(zh) kuc-mobile-notification * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        .kuc-mobile-notification-fadein {
          animation-name: kuc-mobile-notification-fade-in;
          animation-duration: 250ms;
          animation-timing-function: ease-out;
          width: 100%;
          position: fixed;
          visibility: visible;
        }

        .kuc-mobile-notification-fadeout {
          animation-name: kuc-mobile-notification-fade-out;
          animation-duration: 250ms;
          animation-timing-function: ease-out;
          width: 100%;
          position: fixed;
        }

        .kuc-mobile-notification__notification {
          background-color: #ffffcf;
          background: linear-gradient(#ffda4a, #ffc32c);
          width: 100%;
          min-height: 48px;
          z-index: 20;
          font-size: 12px;
          font-weight: 700;
          line-height: 14px;
          text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;
          color: #333333;
          text-align: center;
          vertical-align: top;
        }

        .kuc-mobile-notification__notification__title {
          display: inline-block;
          vertical-align: middle;
          padding: 17px 44px 11px 44px;
          margin: 0 0 0 -20px;
          text-align: left;
          font-weight: inherit;
          font-family: inherit;
          word-break: break-word;
          white-space: pre-wrap;
        }

        .kuc-mobile-notification__notification__closeButton {
          position: absolute;
          right: 0;
          top: 0;
          width: 44px;
          height: 48px;
          padding: 0;
          background-color: transparent;
          border: none;
          vertical-align: middle;
          pointer-events: auto;
          outline: none;
        }
        @keyframes kuc-mobile-notification-fade-in {
          0% {
            top: -100px;
            left: 0;
          }
          50% {
            top: -50px;
            left: 0;
          }
          100% {
            top: 0;
            left: 0;
          }
        }
        @keyframes kuc-mobile-notification-fade-out {
          0% {
            visibility: visible;
            top: 0;
            left: 0;
          }
          50% {
            visibility: visible;
            top: -50px;
            left: 0;
          }
          100% {
            top: -100px;
            left: 0;
          }
        }
      </style>
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
}
if (!window.customElements.get("kuc-mobile-notification")) {
  window.customElements.define("kuc-mobile-notification", MobileNotification);
}
