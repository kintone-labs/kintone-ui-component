import { LitElement, html, property } from "lit-element";

type MobileButtonProps = {
  className?: string;
  id?: string;
  text?: string;
  type?: "normal" | "submit";
  disabled?: boolean;
  visible?: boolean;
};

export class MobileButton extends LitElement {
  @property({ type: String }) text = "";
  @property({ type: String }) type = "normal";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) visible = true;

  constructor(props?: MobileButtonProps) {
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
    if (this.type === "normal" || this.type === "submit") {
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
        class="kuc-mobile-button__button kuc-mobile-button__button--${this._getButtonColorType()}"
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
        kuc-mobile-button,
        kuc-mobile-button * {
          font-size: 14px;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }
        :lang(zh) kuc-mobile-button,
        :lang(zh) kuc-mobile-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }
        kuc-mobile-button {
          display: inline-block;
          vertical-align: top;
        }
        kuc-mobile-button[hidden] {
          display: none;
        }
        .kuc-mobile-button__button {
          min-width: 100px;
          height: 42px;
          padding: 12px 12px;
          user-select: none;
          font-weight: 700;
          line-height: 1;
        }
        .kuc-mobile-button__button:focus {
          outline: none;
        }
        .kuc-mobile-button__button--submit {
          border: 2px solid #206694;
          background-color: #206694;
          color: #fff;
          border-radius: 6px;
        }
        .kuc-mobile-button__button--submit:disabled {
          border-color: #a5a5a5;
          background: #a5a5a5;
        }
        .kuc-mobile-button__button--normal {
          border: 2px solid #206694;
          background-color: #ffffff;
          color: #206694;
          border-radius: 6px;
        }
        .kuc-mobile-button__button--normal:disabled {
          color: #a5a5a5;
          border-color: #a5a5a5;
          cursor: default;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-button")) {
  window.customElements.define("kuc-mobile-button", MobileButton);
}
