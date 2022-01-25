import { html, svg, PropertyValues } from "lit";
import { property, query, queryAll } from "lit/decorators.js";
import { KucBase, dispatchCustomEvent, generateGUID } from "../base/kuc-base";
import { validateProps } from "../base/validator";
import { unsafeHTMLConverter } from "../base/converter";
import { DirectiveResult } from "lit/directive.js";
import { UnsafeHTMLDirective } from "lit/directives/unsafe-html.js";

type DialogProps = {
  title?: string;
  content?: string | HTMLElement;
  footer?: string | HTMLElement;
};

export class Dialog extends KucBase {
  @property({ type: String }) title = "";
  @property() content: string | HTMLElement = "";
  @property() footer: string | HTMLElement = "";

  @query(".kuc-dialog__dialog") private _dialogEl!: HTMLDivElement;
  @queryAll(
    "a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']"
  )
  private _focusableElements!: HTMLElement[];
  private _triggeredElement: Element | null = null;
  private _GUID: string;

  private _content: HTMLElement | DirectiveResult<typeof UnsafeHTMLDirective> =
    "";
  private _footer: HTMLElement | DirectiveResult<typeof UnsafeHTMLDirective> =
    "";

  constructor(props?: DialogProps) {
    super();
    this._GUID = generateGUID();

    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("content")) {
      this._content = unsafeHTMLConverter(this.content);
    }
    if (changedProperties.has("footer")) {
      this._footer = unsafeHTMLConverter(this.footer);
    }
    super.update(changedProperties);
  }

  open() {
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(this);
    body.classList.add("kuc--has-dialog");
    this.performUpdate();

    this.setAttribute("opened", "");
    this._triggeredElement = document.activeElement;
    this._dialogEl && this._dialogEl.focus();
  }

  close() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("kuc--has-dialog");
    this.removeAttribute("opened");
    if (this._triggeredElement instanceof HTMLElement) {
      this._triggeredElement.focus();
    }

    dispatchCustomEvent(this, "close");
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <span
        class="kuc-dialog__first-dummy"
        tabIndex="0"
        @focus="${this._handleFocusFirstDummy}"
      ></span>
      <div
        class="kuc-dialog__dialog"
        role="dialog"
        tabindex="-1"
        aria-labelledby="${this._GUID}-title"
        aria-modal="true"
        @keydown="${this._handleKeyDownDialog}"
      >
        <div class="kuc-dialog__dialog__header">
          <h2
            class="kuc-dialog__dialog__header__title"
            id="${this._GUID}-title"
          >
            ${this.title}
          </h2>
          <button
            class="kuc-dialog__dialog__header__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
        <div class="kuc-dialog__dialog__content">${this._content}</div>
        <div class="kuc-dialog__dialog__footer">${this._footer}</div>
      </div>
      <span
        class="kuc-dialog__last-dummy"
        tabIndex="0"
        @focus="${this._handleFocusLastDummy}"
      ></span>
      <div class="kuc-dialog__mask"></div>
    `;
  }

  private _handleFocusFirstDummy() {
    const lastFocusableElement = this._focusableElements[
      this._focusableElements.length - 2
    ];
    lastFocusableElement && lastFocusableElement.focus();
  }

  private _handleFocusLastDummy() {
    this._dialogEl.focus();
  }

  private _handleKeyDownDialog(event: KeyboardEvent) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.close();
    }
  }

  private _handleClickCloseButton(event: MouseEvent) {
    this.close();
  }

  private _getCloseButtonSvgTemplate() {
    return svg`
      <svg
        class="kuc-dialog__dialog__header__close-button-svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          fill="#f7f9fa"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
          fill="#888888"
        />
      </svg>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-dialog,
        kuc-dialog *,
        :lang(en) kuc-dialog,
        :lang(en) kuc-dialog * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-dialog,
        :lang(ja) kuc-dialog * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-dialog,
        :lang(zh) kuc-dialog * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }

        kuc-dialog {
          display: none;
        }

        kuc-dialog[opened] {
          display: block;
        }

        .kuc-dialog__dialog {
          min-width: 320px;
          font-size: 20px;
          background-color: #ffffff;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10000;
        }

        .kuc-dialog__dialog__header {
          min-height: 64px;
          border-bottom: 1px solid #e3e7e8;
          display: flex;
          justify-content: space-between;
        }

        .kuc-dialog__dialog__header__title {
          font-size: 24px;
          padding: 0 24px;
          align-self: center;
          font-weight: 400;
        }

        .kuc-dialog__dialog__header__close-button {
          width: 48px;
          height: 48px;
          border: none;
          background-color: #ffffff;
          margin-right: 12px;
          margin-top: 11px;
          cursor: pointer;
        }

        .kuc-dialog__dialog__header__close-button:focus-visible {
          outline: -webkit-focus-ring-color auto 1px;
        }

        /* Firefox */
        @-moz-document url-prefix() {
          .kuc-dialog__dialog__header__close-button:focus-visible {
            outline: 1px dotted;
          }
        }

        /* Safari */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          _::-webkit-full-page-media,
          _:future,
          :root .kuc-dialog__dialog__header__close-button:focus {
            outline: 5px auto -webkit-focus-ring-color;
          }
        }

        .kuc-dialog__dialog__header__close-button-svg {
          vertical-align: middle;
        }

        .kuc-dialog__dialog__content {
          min-height: 48px;
          border-bottom: #e3e7e8 solid 1px;
          background-color: #f7f9fa;
        }

        .kuc-dialog__dialog__footer {
          min-height: 48px;
        }

        .kuc-dialog__mask {
          position: fixed;
          top: 0;
          right: 0;
          display: block;
          width: 100%;
          height: 100%;
          background-color: #000000;
          opacity: 0.6;
          z-index: 9999;
        }

        .kuc--has-dialog {
          overflow: hidden;
        }

        .kuc--has-dialog .kuc-dialog__dialog {
          overflow-x: hidden;
          overflow-y: auto;
          max-height: 80vh;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-dialog")) {
  window.customElements.define("kuc-dialog", Dialog);
}
