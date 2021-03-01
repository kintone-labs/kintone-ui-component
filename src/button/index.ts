import { LitElement, html, property } from "lit-element";

type ButtonProps = {
  className?: string;
  id?: string;
  text?: string;
  type?: "normal" | "submit" | "alert";
  disabled?: boolean;
  visible?: boolean;
};

export class Button extends LitElement {
  @property({ type: String }) text = "";
  @property({ type: String }) type = "normal";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) visible = true;

  constructor(props?: ButtonProps) {
    super();
    if (!props) {
      return;
    }
    this.className =
      props.className !== undefined ? props.className : this.className;
    this.id = props.id !== undefined ? props.id : this.id;
    this.text = props.text !== undefined ? props.text : this.text;
    this.type = props.type !== undefined ? props.type : this.type;
    this.disabled =
      props.disabled !== undefined ? props.disabled : this.disabled;
    this.visible = props.visible !== undefined ? props.visible : this.visible;
  }

  private _updateVisible() {
    if (!this.visible) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  }

  private _handleClickButton(event: MouseEvent) {
    event.stopPropagation();
    this._dispatchCustomEvent("click");
  }

  private _dispatchCustomEvent(eventName: string) {
    const event = new CustomEvent(eventName, {
      bubbles: true,
      composed: true
    });
    return this.dispatchEvent(event);
  }

  createRenderRoot() {
    return this;
  }

  private _getButtonColorType() {
    if (
      this.type === "normal" ||
      this.type === "submit" ||
      this.type === "alert"
    ) {
      return this.type;
    }
    return "normal";
  }

  render() {
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <button
        type="button"
        class="kuc-button__button kuc-button__button--${this._getButtonColorType()}"
        ?disabled="${this.disabled}"
        @click="${this._handleClickButton}"
      >
        ${this.text}
      </button>
    `;
  }
  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-button,
        kuc-button *,
        :lang(en) kuc-button,
        :lang(en) kuc-button * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-button,
        :lang(ja) kuc-button * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-button,
        :lang(zh) kuc-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-button {
          display: inline-block;
          vertical-align: top;
        }
        kuc-button[hidden] {
          display: none;
        }
        .kuc-button__button {
          font-size: 16px;
          min-width: 163px;
          height: 48px;
          padding: 0px 16px;
          user-select: none;
        }
        .kuc-button__button:focus {
          outline: none;
        }
        .kuc-button__button--normal {
          border: 1px solid #e3e7e8;
          background-color: #f7f9fa;
          box-shadow: 1px 1px 1px #ffffff inset;
          color: #3498db;
        }
        .kuc-button__button--normal:hover,
        .kuc-button__button--normal:focus,
        .kuc-button__button--normal:active {
          background-color: #c8d6dd;
          box-shadow: none;
          cursor: pointer;
        }
        .kuc-button__button--submit {
          border: 1px solid #e3e7e8;
          background-color: #3498db;
          color: #ffffff;
        }
        .kuc-button__button--submit:hover,
        .kuc-button__button--submit:focus,
        .kuc-button__button--submit:active {
          background-color: #1d6fa5;
          cursor: pointer;
        }
        .kuc-button__button--alert {
          border: 0 none;
          background-color: #e74c3c;
          box-shadow: 1px 1px 1px #ffffff inset;
          color: #ffffff;
        }
        .kuc-button__button--alert:hover,
        .kuc-button__button--alert:focus,
        .kuc-button__button--alert:active {
          background-color: #bf2718;
          box-shadow: none;
          cursor: pointer;
        }
        .kuc-button__button:disabled {
          border: 1px solid #e3e7e8;
          background-color: #d4d7d7;
          box-shadow: none;
          color: #888888;
          cursor: default;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-button")) {
  window.customElements.define("kuc-button", Button);
}
