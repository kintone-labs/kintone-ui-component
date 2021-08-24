import { LitElement, html, property } from "lit-element";

type MobileTextAreaProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
};

type CustomEventDetail = {
  value: string;
  oldValue?: string;
};

export class MobileTextArea extends LitElement {
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: Boolean }) visible = true;

  private _GUID: string;

  constructor(props?: MobileTextAreaProps) {
    super();
    this._GUID = this._generateGUID();
    if (!props) {
      return;
    }
    this.className =
      props.className !== undefined ? props.className : this.className;
    this.error = props.error !== undefined ? props.error : this.error;
    this.id = props.id !== undefined ? props.id : this.id;
    this.label = props.label !== undefined ? props.label : this.label;
    this.placeholder =
      props.placeholder !== undefined ? props.placeholder : this.placeholder;
    this.value = props.value !== undefined ? props.value : this.value;
    this.disabled =
      props.disabled !== undefined ? props.disabled : this.disabled;
    this.requiredIcon =
      props.requiredIcon !== undefined ? props.requiredIcon : this.requiredIcon;
    this.visible = props.visible !== undefined ? props.visible : this.visible;
  }

  private _generateGUID(): string {
    return (
      new Date().getTime().toString(16) +
      Math.floor(Math.random() * 0x1000).toString(16)
    );
  }

  private _updateVisible() {
    if (!this.visible) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  }

  private _handleFocusInput(event: FocusEvent) {
    const detail: CustomEventDetail = { value: this.value };
    this._dispatchCustomEvent("focus", detail);
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const targetEl = event.target as HTMLTextAreaElement;
    const detail: CustomEventDetail = { value: "", oldValue: this.value };
    this.value = targetEl.value;
    detail.value = this.value;
    this._dispatchCustomEvent("change", detail);
  }

  private _dispatchCustomEvent(eventName: string, detail?: CustomEventDetail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  createRenderRoot() {
    return this;
  }

  render() {
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-mobile-textarea__label"
        for="${this._GUID}-label"
        ?hidden=${!this.label}
      >
        <span class="kuc-mobile-textarea__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-mobile-textarea__label__required-icon"
          ?hidden=${!this.requiredIcon}
          >*</span
        >
      </label>
      <div class="kuc-mobile-textarea__form">
        <textarea
          class="kuc-mobile-textarea__form__textarea"
          id="${this._GUID}-label"
          placeholder=${this.placeholder}
          ?disabled="${this.disabled}"
          .value=${this.value}
          aria-invalid="${this.error !== ""}"
          aria-describedby="${this._GUID}-error"
          aria-required=${this.requiredIcon}
          @focus="${this._handleFocusInput}"
          @change="${this._handleChangeInput}"
        /></textarea>
      </div>
      <div
        class="kuc-mobile-textarea__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden=${!this.error}
      >
        ${this.error}
      </div>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-textarea {
          display: block;
          font-size: 13px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-textarea,
        :lang(zh) kuc-mobile-textarea * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-textarea[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__label {
          padding: 0;
          margin: 0 0 4px 0;
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          white-space: nowrap;
        }
        .kuc-mobile-textarea__label[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
        }
        .kuc-mobile-textarea__label__required-icon {
          position: relative;
          left: 3px;
          color: #d01212;
        }
        .kuc-mobile-textarea__label__required-icon[hidden] {
          display: none;
        }
        .kuc-mobile-textarea__form {
          padding-left: 0.5em;
          padding-right: 0.5em;
        }
        .kuc-mobile-textarea__form__textarea {
          width: 100%;
          height: 120px;
          padding: 0.4em;
          border: 1px solid #b3b3b3;
          outline: 0;
          box-shadow: 0 1px 0 #fff, inset 0 2px 3px #dadada;
          border-radius: 0.4em;
          box-sizing: border-box;
        }
        .kuc-mobile-textarea__form__textarea[aria-required="true"] {
          border: 1px solid #cf4a38;
        }
        .kuc-mobile-textarea__form__textarea:disabled {
          color: #999;
          background-color: #d5d7d9;
          opacity: 1;
        }
        .kuc-mobile-textarea__error {
          line-height: 1.5;
          color: #000000;
          background-color: #fdffc9;
          border: 1px solid #e5db68;
          border-radius: 0.4em;
          padding: 0.4em 1em;
          margin-top: 0.3em;
          margin-left: 0.5em;
        }
        .kuc-mobile-textarea__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-textarea")) {
  window.customElements.define("kuc-mobile-textarea", MobileTextArea);
}
