import { html, svg, PropertyValues } from "lit";
import { property, queryAll, state } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent
} from "../../base/kuc-base";
import { visiblePropConverter } from "../../base/converter";
import {
  validateProps,
  validateItems,
  validateValueArray,
  validateSelectedIndexArray,
  throwErrorAfterUpdateComplete
} from "../../base/validator";
import { ERROR_MESSAGE } from "../../base/constant";
import { BaseMobileLabel } from "../../base/mobile-label";
import { BaseMobileError } from "../../base/mobile-error";
export { BaseMobileLabel, BaseMobileError };

type Item = { label?: string; value?: string };
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
  selectedIndex?: number[];
};
type ValueMapping = {
  [key: number]: string;
};

export class MobileCheckbox extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: String }) error = "";
  @property({ type: String, reflect: true, attribute: "id" }) id = "";
  @property({ type: String }) label = "";
  @property({ type: Boolean }) borderVisible = true;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter
  })
  visible = true;
  @property({ type: Array }) items: Item[] = [];
  @property({ type: Array }) selectedIndex: number[] = [];
  @property({ type: Array }) value: string[] = [];

  @queryAll(".kuc-mobile-checkbox__group__select-menu__item__input")
  private _inputEls!: HTMLInputElement[];
  private _GUID: string;

  @state()
  private _valueMapping: ValueMapping = {};

  constructor(props?: MobileCheckboxProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    this._setInitialValue(validProps);
    Object.assign(this, validProps);
  }

  private _setInitialValue(validProps: MobileCheckboxProps) {
    const hasValue = "value" in validProps;
    const hasSelectedIndex = "selectedIndex" in validProps;
    const _selectedIndex = validProps.selectedIndex || [];
    if (!hasValue && hasSelectedIndex) {
      if (!validateSelectedIndexArray(_selectedIndex)) return;
      const _valueMapping = this._getValueMapping(validProps);
      this.value = this._getValidValue(_valueMapping, _selectedIndex);
    }
  }

  private _getNewValueMapping(value: string, selectedIndex: string) {
    const selectedIndexNumber = parseInt(selectedIndex, 10);
    const keys = Object.keys(this._valueMapping);
    const newValue = { ...this._valueMapping };
    if (keys.indexOf(selectedIndex) > -1) {
      delete newValue[selectedIndexNumber];
      return newValue;
    }
    newValue[selectedIndexNumber] = value;
    return newValue;
  }

  private _handleChangeInput(event: Event) {
    event.stopPropagation();
    const inputEl = event.target as HTMLInputElement;
    const selectedIndex = inputEl.dataset.index || "0";
    const value = inputEl.value;

    const oldValue = !this.value ? this.value : [...this.value];
    const newValueMapping = this._getNewValueMapping(value, selectedIndex);
    const itemsValue = this.items.map(item => item.value);
    const newValue = Object.values(newValueMapping).filter(
      item => itemsValue.indexOf(item) > -1
    );
    if (newValue === oldValue) return;

    const newSelectedIndex = Object.keys(newValueMapping).map((item: string) =>
      parseInt(item, 10)
    );
    this.value = newValue;
    this.selectedIndex = newSelectedIndex;
    dispatchCustomEvent(this, "change", {
      oldValue,
      value: newValue
    });
  }

  private _getCheckboxIconSvgTemplate(checked: boolean) {
    return svg`
     <svg
       class="kuc-mobile-checkbox__group__select-menu__item__label__icon"
       xmlns="http://www.w3.org/2000/svg"
       x="0px"
       y="0px"
       width="44px"
       height="34px"
       viewBox="0 0 44 34"
       enable-background="new 0 0 44 34"
       xml:space="preserve">
       <image width="44" height="34" x="0" y="0" href="${this._getSVGStrokeValue(
         checked
       )}"/>
    </svg>
     `;
  }

  private _getSVGStrokeValue(checked: boolean) {
    if (checked) {
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC";
    }
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC";
  }

  private _isCheckedItem(item: Item, index: number) {
    const values = Object.values(this._valueMapping);
    const keys = Object.keys(this._valueMapping);
    const result = values.filter(
      (val, indexVal) =>
        val === item.value && index === parseInt(keys[indexVal], 10)
    );
    return result.length > 0;
  }

  private _getItemTemplate(item: Item, index: number) {
    const isCheckedItem = this._isCheckedItem(item, index);
    return html`
      <label
        for="${this._GUID}-item-${index}"
        class="kuc-mobile-checkbox__group__select-menu__item"
        ?borderVisible="${this.borderVisible}"
      >
        <input
          type="checkbox"
          id="${this._GUID}-item-${index}"
          class="kuc-mobile-checkbox__group__select-menu__item__input"
          name="${this._GUID}-group"
          data-index="${index}"
          value="${item.value !== undefined ? item.value : ""}"
          aria-describedby="${this._GUID}-error}"
          aria-required="${this.requiredIcon}"
          aria-invalid="${!this.error}"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
        />
        <div class="kuc-mobile-checkbox__group__select-menu__item__label">
          ${this._getCheckboxIconSvgTemplate(isCheckedItem)}${item.label ===
          undefined
            ? item.value
            : item.label}
        </div>
      </label>
    `;
  }

  shouldUpdate(changedProperties: PropertyValues): boolean {
    if (changedProperties.has("items")) {
      if (!validateItems(this.items)) {
        throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
        return false;
      }
    }

    if (changedProperties.has("value")) {
      if (!validateValueArray(this.value)) {
        throwErrorAfterUpdateComplete(this, ERROR_MESSAGE.VALUE.IS_NOT_ARRAY);
        return false;
      }
    }

    if (changedProperties.has("selectedIndex")) {
      if (!validateSelectedIndexArray(this.selectedIndex)) {
        throwErrorAfterUpdateComplete(
          this,
          ERROR_MESSAGE.SELECTED_INDEX.IS_NOT_ARRAY
        );
        return false;
      }
    }
    return true;
  }

  willUpdate(changedProperties: PropertyValues): void {
    if (changedProperties.has("value")) {
      if (this.value.length > 0) return;

      this.selectedIndex = [];
    }
  }

  update(changedProperties: PropertyValues) {
    if (
      changedProperties.has("items") ||
      changedProperties.has("value") ||
      changedProperties.has("selectedIndex")
    ) {
      this._valueMapping = this._getValueMapping({
        items: this.items,
        value: this.value,
        selectedIndex: this.selectedIndex
      });
      this._setValueAndSelectedIndex();
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-mobile-checkbox__group">
        <legend
          class="kuc-mobile-checkbox__group__label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label>
        </legend>
        <div
          class="kuc-mobile-checkbox__group__select-menu ${this.requiredIcon
            ? "kuc-mobile-checkbox__group__select-menu--required"
            : ""}"
          ?borderVisible="${this.borderVisible}"
          ?disabled="${this.disabled}"
        >
          ${this.items.map((item, index) => this._getItemTemplate(item, index))}
        </div>
        <kuc-base-mobile-error
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error>
      </fieldset>
    `;
  }

  updated() {
    this._inputEls.forEach((inputEl: HTMLInputElement) => {
      inputEl.checked = this.value.indexOf(inputEl.value) > -1;
    });
  }

  private _setValueAndSelectedIndex() {
    this.value = Object.values(this._valueMapping);
    this.selectedIndex = Object.keys(this._valueMapping).map(key =>
      parseInt(key, 10)
    );
  }

  private _getValueMapping(validProps: MobileCheckboxProps) {
    const _items = validProps.items || [];
    const _value = validProps.value || [];
    const _selectedIndex = validProps.selectedIndex || [];

    const itemsValue = _items.map(item => item.value || "");
    const itemsMapping = Object.assign({}, itemsValue);
    const result: ValueMapping = {};
    if (_value.length === 0) {
      const value = this._getValidValue(itemsMapping, _selectedIndex);
      _selectedIndex.forEach((key, i) => (result[key] = value[i]));
      return result;
    }
    const validSelectedIndex = this._getValidSelectedIndex(itemsMapping);
    validSelectedIndex.forEach((key, i) => (result[key] = _value[i]));
    return result;
  }

  private _getValidValue(itemsMapping: ValueMapping, _selectedIndex: number[]) {
    return _selectedIndex
      .filter(item => itemsMapping[item])
      .map(item => itemsMapping[item]);
  }

  private _getValidSelectedIndex(itemsMapping: ValueMapping) {
    const validSelectedIndex: number[] = [];
    for (let i = 0; i < this.value.length; i++) {
      const selectedIndex = this.selectedIndex[i];
      if (itemsMapping[selectedIndex] === this.value[i]) {
        validSelectedIndex.push(selectedIndex);
        continue;
      }
      const firstIndex = this.items.findIndex(
        item => item.value === this.value[i]
      );
      validSelectedIndex.push(firstIndex);
    }

    return validSelectedIndex;
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
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-mobile-checkbox")) {
  window.customElements.define("kuc-mobile-checkbox", MobileCheckbox);
}
