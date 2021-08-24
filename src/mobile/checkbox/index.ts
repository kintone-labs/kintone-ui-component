import { LitElement, html, property, queryAll, svg } from "lit-element";

type Item = { value?: string; label?: string };
type MobileCheckboxProps = {
  className?: string;
  error?: string;
  id?: string;
  label?: string;
  borderVisible?: boolean;
  disabled?: boolean;
  requiredIcon?: boolean;
  visible?: boolean;
  items?: Item[];
  value?: string[];
};

type CustomEventDetail = {
  value?: string[];
  oldValue?: string[];
};

export class MobileCheckbox extends LitElement {
  @property({ type: String }) error = "";
  @property({ type: String }) label = "";
  @property({ type: Boolean }) borderVisible = true;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({ type: Boolean }) visible = true;
  @property({
    type: Array,
    hasChanged(newVal: Item[], _oldVal) {
      if (!Array.isArray(newVal)) {
        throw new Error("'items' property is not array");
      }
      const checkedList: string[] = [];
      newVal.forEach((item, index) => {
        if (
          checkedList.indexOf(item.value === undefined ? "" : item.value) > -1
        ) {
          throw new Error(
            `'items[${index}].value' is duplicated! You can specify unique one.`
          );
        }
        checkedList.push(item.value === undefined ? "" : item.value);
      });
      return true;
    }
  })
  items: Item[] = [];
  @property({
    type: Array,
    hasChanged(newVal: string[], _oldVal) {
      if (!Array.isArray(newVal)) {
        throw new Error("'value' property is not array");
      }
      const checkedList: string[] = [];
      newVal.forEach((value, index) => {
        if (checkedList.indexOf(value === undefined ? "" : value) > -1) {
          throw new Error(
            `'value[${index}]' is duplicated! You can specify unique one.`
          );
        }
        checkedList.push(value === undefined ? "" : value);
      });
      return true;
    }
  })
  value: string[] = [];

  @queryAll(".kuc-mobile-checkbox__group__select-menu__item__input")
  private _inputEls!: HTMLInputElement[];
  private _GUID: string;

  constructor(props?: MobileCheckboxProps) {
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
    this.borderVisible =
      props.borderVisible !== undefined
        ? props.borderVisible
        : this.borderVisible;
    this.disabled =
      props.disabled !== undefined ? props.disabled : this.disabled;
    this.requiredIcon =
      props.requiredIcon !== undefined ? props.requiredIcon : this.requiredIcon;
    this.visible = props.visible !== undefined ? props.visible : this.visible;
    this.items = props.items !== undefined ? props.items : this.items;
    this.value = props.value !== undefined ? props.value : this.value;
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

  private _getNewValue(value: string) {
    const sorting = this.items.map(item => item.value);
    if (this.value.indexOf(value) === -1) {
      return [...this.value, value].sort(
        (item1: string, item2: any) =>
          sorting.indexOf(item1) - sorting.indexOf(item2)
      );
    }
    return this.value.filter(val => val !== value);
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const inputEl = event.target as HTMLInputElement;
    const oldValue = this.value;
    const newValue = this._getNewValue(inputEl.value);
    this.value = newValue;
    const detail: CustomEventDetail = { value: newValue, oldValue: oldValue };
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

  private _getCheckboxIconSvgTemplate(checked: boolean) {
    return svg`
     <svg
       class="kuc-mobile-checkbox__group__select-menu__item__label__icon"
       xmlns="http://www.w3.org/2000/svg"
       id="Layer_1"
       x="0px"
       y="0px"
       width="44px"
       height="34px"
       viewBox="0 0 44 34"
       enable-background="new 0 0 44 34"
       xml:space="preserve">
       <image id="image0" width="44" height="34" x="0" y="0" href='${this._getSVGStrokeValue(
         checked
       )}'/>
    </svg>
     `;
  }

  private _getSVGStrokeValue(checked: boolean) {
    if (checked) {
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC";
    }
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC";
  }

  private _getItemTemplate(item: Item, index: number) {
    return html`
      <label
        for="${this._GUID}-item-${index}"
        class="kuc-mobile-checkbox__group__select-menu__item"
        ?borderVisible=${this.borderVisible}
      >
        <input
          type="checkbox"
          id="${this._GUID}-item-${index}"
          class="kuc-mobile-checkbox__group__select-menu__item__input"
          name="${this._GUID}-group"
          value=${item.value !== undefined ? item.value : ""}
          aria-describedby="${this._GUID}-error}"
          aria-required=${this.requiredIcon}
          aria-invalid="${!this.error}"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
        />
        <div class="kuc-mobile-checkbox__group__select-menu__item__label">
          ${this._getCheckboxIconSvgTemplate(
            item.value !== undefined
              ? this.value.some(val => val === item.value)
              : false
          )}${item.label === undefined ? item.value : item.label}
        </div>
      </label>
    `;
  }

  render() {
    this._updateVisible();
    return html`
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-mobile-checkbox__group">
        <legend
          class="kuc-mobile-checkbox__group__label"
          ?hidden="${!this.label}"
        >
          <span class="kuc-mobile-checkbox__group__label__text"
            >${this.label}</span
          ><!--
          --><span
            class="kuc-mobile-checkbox__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <div
          class="kuc-mobile-checkbox__group__select-menu ${this.requiredIcon
            ? "kuc-mobile-checkbox__group__select-menu--required"
            : ""}"
          ?borderVisible=${this.borderVisible}
          ?disabled="${this.disabled}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <div
          class="kuc-mobile-checkbox__error"
          id="${this._GUID}-error"
          role="alert"
          aria-live="assertive"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </fieldset>
    `;
  }

  updated() {
    this._inputEls.forEach((inputEl: HTMLInputElement) => {
      inputEl.checked = this.value.indexOf(inputEl.value) > -1;
    });
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-mobile-checkbox,
        kuc-mobile-checkbox * {
          font-size: 13px;
          color: #333333;
          font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
            "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
            "Lucida Sans Unicode", Arial, Verdana, sans-serif;
        }

        :lang(zh) kuc-mobile-checkbox,
        :lang(zh) kuc-mobile-checkbox * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
            Verdana, sans-serif;
        }

        kuc-mobile-checkbox {
          width: 100%;
          display: inline-block;
        }

        kuc-mobile-checkbox[hidden] {
          display: none;
        }

        .kuc-mobile-checkbox__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
          width: 100%;
          box-sizing: border-box;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }

        .kuc-mobile-checkbox__group__label {
          display: inline-block;
          font-size: 86%;
          font-weight: bold;
          line-height: 1.5;
          padding: 0px;
          margin: 0 0 4px 0;
          white-space: nowrap;
        }

        .kuc-mobile-checkbox__group__label[hidden] {
          display: none;
        }

        .kuc-mobile-checkbox__group__label__text {
          text-shadow: 0 1px 0 #ffffff;
          color: #888888;
          white-space: normal;
        }

        .kuc-mobile-checkbox__group__label__required-icon {
          position: relative;
          left: 3px;
          color: #d01212;
        }

        .kuc-mobile-checkbox__group__label__required-icon[hidden] {
          display: none;
        }

        .kuc-mobile-checkbox__group__select-menu {
          margin-left: 0.5em;
          margin-right: 0.5em;
        }

        .kuc-mobile-checkbox__group__select-menu[bordervisible] {
          border-color: #b3b3b3;
          border-width: 1px;
          border-style: solid;
          border-radius: 8px;
        }

        .kuc-mobile-checkbox__group__select-menu[disabled] {
          background-color: #d5d7d9;
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-checkbox__group__select-menu--required[bordervisible] {
          border-color: #cf4a38;
          border-width: 1px;
          border-style: solid;
          border-radius: 8px;
        }

        .kuc-mobile-checkbox__group__select-menu__item[bordervisible] {
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          height: 30px;
          display: block;
          border-bottom: 1px solid #b3b3b3;
          padding: 8px;
        }

        .kuc-mobile-checkbox__group__select-menu__item {
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          height: 30px;
          display: block;
          padding: 8px;
        }

        .kuc-mobile-checkbox__group__select-menu__item:last-child {
          border-bottom: 0px;
        }

        .kuc-mobile-checkbox__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
        }

        .kuc-mobile-checkbox__group__select-menu__item__input[disabled]
          + .kuc-mobile-checkbox__group__select-menu__item__label {
          background-color: #d5d7d9;
          color: #999999;
          -webkit-text-fill-color: #999999;
          background-color: #d5d7d9;
          opacity: 1;
        }

        .kuc-mobile-checkbox__group__select-menu__item__label {
          position: relative;
          margin: -7px 0px 0px 34px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
          padding: 11px 13px 13px 0px;
          font-size: 14.04px;
        }

        .kuc-mobile-checkbox__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          left: -30px;
          margin-top: -13px;
          box-sizing: border-box;
          width: 22px;
          height: 22px;
          background-size: 22px 17px;
          content: "";
        }

        .kuc-mobile-checkbox__error {
          line-height: 1.5;
          border: 1px solid #e5db68;
          background-color: #fdffc9;
          margin-top: 0.3em;
          margin-left: 0.5em;
          padding: 0.4em 1em;
          border-radius: 0.4em;
          color: #000000;
        }

        .kuc-mobile-checkbox__error[hidden] {
          display: none;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-checkbox")) {
  window.customElements.define("kuc-mobile-checkbox", MobileCheckbox);
}
