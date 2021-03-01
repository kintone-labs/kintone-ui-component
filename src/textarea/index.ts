import { LitElement, html, property, query, svg } from "lit-element";
import { v4 as uuid } from "uuid";

type TextAreaProps = {
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

const TextAreaLayout = {
  MIN_WIDTH: 299,
  MIN_HEIGHT: 125
};

export class TextArea extends LitElement {
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: Boolean }) visible = true;

  private _GUID: string;
  private _onResize = false;

  @query(".kuc-textarea__label")
  private _label!: HTMLLabelElement;

  @query(".kuc-textarea__textarea")
  private _textarea!: HTMLTextAreaElement;

  constructor(props?: TextAreaProps) {
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
    return uuid();
  }

  private _updateVisible() {
    if (!this.visible) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  }

  private _handleFocusTextarea(event: FocusEvent) {
    const detail: CustomEventDetail = { value: this.value };
    this._dispatchCustomEvent("focus", detail);
  }

  private _handleChangeTextarea(event: Event) {
    event.stopPropagation();
    const targetEl = event.target as HTMLInputElement;
    const detail: CustomEventDetail = { value: "", oldValue: this.value };
    this.value = targetEl.value;
    detail.value = this.value;
    this._dispatchCustomEvent("change", detail);
  }

  private _handleResizeMouseDown() {
    this._onResize = true;
  }

  private _handleResizeMouseUp() {
    this._onResize = false;
  }

  private _handleResizeMouseMove(event: MouseEvent) {
    if (!this._onResize) return;

    const textAreaRect = this._textarea.getBoundingClientRect();
    let textAreaWidth = event.clientX - textAreaRect.left;
    let textAreaHeight = event.clientY - textAreaRect.top;

    if (textAreaWidth < TextAreaLayout.MIN_WIDTH)
      textAreaWidth = TextAreaLayout.MIN_WIDTH;
    if (textAreaHeight < TextAreaLayout.MIN_HEIGHT)
      textAreaHeight = TextAreaLayout.MIN_HEIGHT;

    this.style.width = textAreaWidth + "px";
    this._textarea.style.height = textAreaHeight + "px";
  }

  private _dispatchCustomEvent(eventName: string, detail?: CustomEventDetail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true
    });
    return this.dispatchEvent(event);
  }

  createRenderRoot() {
    return this;
  }

  render() {
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-textarea__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-textarea__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-textarea__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </label>
      <textarea
        id="${this._GUID}-label"
        class="kuc-textarea__textarea"
        placeholder="${this.placeholder}"
        .value=${this.value}
        aria-describedby="${this._GUID}-error"
        aria-required=${this.requiredIcon}
        aria-invalid="${!this.error}"
        @change="${this._handleChangeTextarea}"
        @focus="${this._handleFocusTextarea}"
        ?disabled="${this.disabled}"
      >
      </textarea>
      <div
        class="kuc-textarea__resizer"
        @mousedown="${this._handleResizeMouseDown}"
        ?hidden="${this.disabled}"
      >
        ${this._getResizerButtonSvgTemplate()}
      </div>
      <div
        class="kuc-textarea__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `;
  }

  private _getResizerButtonSvgTemplate() {
    return svg`
    <svg height="16" width="16">
      <g fill="none" stroke="#b6b6b6" stroke-width="2">
        <line x1="14" x2="16" y1="15" y2="15" />
        <line x1="14" x2="16" y1="11" y2="11" />
        <line x1="14" x2="16" y1="7" y2="7" />
        <line x1="10" x2="12" y1="15" y2="15" />
        <line x1="6" x2="8" y1="15" y2="15" />
        <line x1="10" x2="12" y1="11" y2="11" />
      </g>
    </svg>
    `;
  }

  firstUpdated() {
    document.addEventListener("mousemove", event =>
      this._handleResizeMouseMove(event)
    );
    document.addEventListener("mouseup", () => this._handleResizeMouseUp());
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-textarea,
        kuc-textarea *,
        :lang(en) kuc-textarea,
        :lang(en) kuc-textarea * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-textarea,
        :lang(ja) kuc-textarea * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-textarea,
        :lang(zh) kuc-textarea * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-textarea {
          font-size: 14px;
          color: #333333;
          display: inline-block;
          vertical-align: top;
          width: 299px;
        }
        kuc-textarea[hidden] {
          display: none;
        }
        .kuc-textarea__label {
          display: inline-block;
          margin-top: 4px;
          margin-bottom: 8px;
        }
        .kuc-textarea__label[hidden] {
          display: none;
        }
        .kuc-textarea__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-textarea__label__required-icon[hidden] {
          display: none;
        }
        .kuc-textarea__textarea {
          display: block;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          min-width: 299px;
          min-height: 125px;
          padding: 8px;
          resize: none;
          width: 100%;
        }
        .kuc-textarea__textarea:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          border: 1px solid #3498db;
          background-color: #ffffff;
          color: #333333;
        }
        .kuc-textarea__textarea:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
          resize: none;
        }
        .kuc-textarea__resizer {
          position: relative;
          width: 16px;
          height: 16px;
          cursor: se-resize;
          float: right;
          margin: -16px 0px;
        }
        .kuc-textarea__error {
          line-height: 1.5;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin-top: 8px;
          word-break: break-all;
        }
        .kuc-textarea__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-textarea")) {
  window.customElements.define("kuc-textarea", TextArea);
}
