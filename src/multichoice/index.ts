import { html, PropertyValues, svg } from "lit";
import { property, queryAll, query, state } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  createStyleOnHeader,
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import {
  validateProps,
  validateItems,
  validateValueArray,
  validateSelectedIndexArray,
  throwErrorAfterUpdateComplete,
} from "../base/validator";
import { ERROR_MESSAGE } from "../base/constant";
import { MultiChoiceItem, MultiChoiceProps } from "./type";
import { MULTICHOICE_CSS } from "./style";
import { BaseLabel } from "../base/label";
import { BaseError } from "../base/error";
export { BaseError, BaseLabel };

type ValueMapping = {
  [key: number]: string;
};

let exportMultiChoice;
(() => {
  exportMultiChoice = window.customElements.get("kuc-multi-choice");
  if (exportMultiChoice) {
    return;
  }

  class KucMultiChoice extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" }) id = "";
    @property({ type: String }) label = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @property({ type: Array }) items: MultiChoiceItem[] = [];
    @property({ type: Array }) selectedIndex: number[] = [];
    @property({ type: Array }) value: string[] = [];

    @query(".kuc-multi-choice__group__menu")
    private _menuEl!: HTMLDivElement;
    @queryAll(".kuc-multi-choice__group__menu__item")
    private _itemsEl!: HTMLDivElement[];
    private _GUID: string;

    @state()
    private _valueMapping: ValueMapping = {};

    constructor(props?: MultiChoiceProps) {
      super();
      this._GUID = generateGUID();

      const validProps = validateProps(props);
      this._setInitialValue(validProps);
      Object.assign(this, validProps);
    }

    private _setInitialValue(validProps: MultiChoiceProps) {
      const hasValue = "value" in validProps;
      const hasSelectedIndex = "selectedIndex" in validProps;
      const _selectedIndex = validProps.selectedIndex || [];
      if (!hasValue && hasSelectedIndex) {
        if (!validateSelectedIndexArray(_selectedIndex)) return;

        const _valueMapping = this._getValueMapping(validProps);
        this.value = this._getValidValue(_valueMapping, _selectedIndex);
      }
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
          selectedIndex: this.selectedIndex,
        });
        this._setValueAndSelectedIndex();
      }

      super.update(changedProperties);
    }

    render() {
      return html`
        <div class="kuc-multi-choice__group">
          <div
            class="kuc-multi-choice__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <div
            class="kuc-multi-choice__group__menu"
            role="listbox"
            aria-multiselectable="true"
            aria-describedby="${this._GUID}-error"
            aria-labelledby="${this._GUID}-label"
            ?disabled="${this.disabled}"
            tabindex="${this.disabled ? "-1" : "0"}"
            @keydown="${this._handleKeyDownMultiChoice}"
          >
            ${this.items.map((item, number) =>
              this._getMenuItemTemplate(item, number)
            )}
          </div>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          ></kuc-base-error>
        </div>
      `;
    }

    private _getValueMapping(validProps: MultiChoiceProps) {
      const _items = validProps.items || [];
      const _value = validProps.value || [];
      const _selectedIndex = validProps.selectedIndex || [];

      const itemsValue = _items.map((item) => item.value || "");
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

    private _getValidValue(
      itemsMapping: ValueMapping,
      _selectedIndex: number[]
    ) {
      return _selectedIndex
        .filter((item) => itemsMapping[item])
        .map((item) => itemsMapping[item]);
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
          (item) => item.value === this.value[i]
        );
        validSelectedIndex.push(firstIndex);
      }

      return validSelectedIndex;
    }

    private _setValueAndSelectedIndex() {
      this.value = Object.values(this._valueMapping);
      this.selectedIndex = Object.keys(this._valueMapping).map((key) =>
        parseInt(key, 10)
      );
    }

    private _handleMouseDownMultiChoiceItem(event: MouseEvent) {
      if (this.disabled) return;
      const itemEl = event.target as HTMLDivElement;
      const value = itemEl.getAttribute("value") as string;
      const selectedIndex = itemEl.dataset.index || "0";
      this._handleChangeValue(value, selectedIndex);
    }

    private _handleMouseOverMultiChoiceItem(event: Event) {
      if (this.disabled) return;
      this._itemsEl.forEach((itemEl: HTMLDivElement) => {
        if (
          itemEl.classList.contains("kuc-multi-choice__group__menu__highlight")
        ) {
          itemEl.classList.remove("kuc-multi-choice__group__menu__highlight");
        }
      });
      const itemEl = event.currentTarget as HTMLDivElement;
      itemEl.classList.add("kuc-multi-choice__group__menu__highlight");

      this._setActiveDescendant(itemEl.id);
    }

    private _handleMouseLeaveMultiChoiceItem(event: Event) {
      if (this.disabled) return;
      const itemEl = event.currentTarget as HTMLDivElement;
      itemEl.classList.remove("kuc-multi-choice__group__menu__highlight");

      this._setActiveDescendant();
    }

    private _handleKeyDownMultiChoice(event: KeyboardEvent) {
      if (this.disabled) return;
      let highLightNumber = 0;
      switch (event.key) {
        case "Up": // IE/Edge specific value
        case "ArrowUp": {
          event.preventDefault();

          this._itemsEl.forEach((itemEl: HTMLDivElement, number: number) => {
            if (
              itemEl.classList.contains(
                "kuc-multi-choice__group__menu__highlight"
              )
            ) {
              itemEl.classList.remove(
                "kuc-multi-choice__group__menu__highlight"
              );
              highLightNumber = number - 1;
            }
          });
          highLightNumber =
            highLightNumber <= -1 ? this._itemsEl.length - 1 : highLightNumber;

          const currentItemEl = this._itemsEl[highLightNumber];
          currentItemEl.classList.add(
            "kuc-multi-choice__group__menu__highlight"
          );

          this._setActiveDescendant(currentItemEl.id);
          break;
        }
        case "Down": // IE/Edge specific value
        case "ArrowDown": {
          event.preventDefault();
          this._itemsEl.forEach((itemEl: HTMLDivElement, number: number) => {
            if (
              itemEl.classList.contains(
                "kuc-multi-choice__group__menu__highlight"
              )
            ) {
              itemEl.classList.remove(
                "kuc-multi-choice__group__menu__highlight"
              );
              highLightNumber = number + 1;
            }
          });
          highLightNumber =
            highLightNumber >= this._itemsEl.length ? 0 : highLightNumber;

          const currentItemEl = this._itemsEl[highLightNumber];
          currentItemEl.classList.add(
            "kuc-multi-choice__group__menu__highlight"
          );

          this._setActiveDescendant(currentItemEl.id);
          break;
        }
        case "Spacebar": // IE/Edge specific value
        case " ": {
          event.preventDefault();
          this._itemsEl.forEach((itemEl: HTMLDivElement) => {
            if (
              itemEl.classList.contains(
                "kuc-multi-choice__group__menu__highlight"
              )
            ) {
              const value = itemEl.getAttribute("value") as string;
              const selectedIndex = itemEl.dataset.index || "0";
              this._handleChangeValue(value, selectedIndex);
            }
          });
          break;
        }
        default:
          break;
      }
    }

    private _getMultiChoiceCheckedIconSvgTemplate(
      disabled: boolean,
      checked: boolean
    ) {
      return svg`
        ${
          checked
            ? svg`<svg
            class="kuc-multi-choice__group__menu__item__icon"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
              fill="${disabled ? "#888888" : "#3498db"}"
            />
          </svg>`
            : ""
        }`;
    }

    private _isCheckedItem(item: MultiChoiceItem, index: number) {
      const values = Object.values(this._valueMapping);
      const keys = Object.keys(this._valueMapping);
      const result = values.filter(
        (val, indexVal) =>
          val === item.value && index === parseInt(keys[indexVal], 10)
      );
      return result.length > 0;
    }

    private _getMenuItemTemplate(item: MultiChoiceItem, index: number) {
      const isCheckedItem = this._isCheckedItem(item, index);
      return html`
        <div
          class="kuc-multi-choice__group__menu__item"
          role="option"
          aria-selected="${isCheckedItem}"
          aria-required="${this.requiredIcon}"
          data-index="${index}"
          value="${item.value !== undefined ? item.value : ""}"
          id="${this._GUID}-menuitem-${index}"
          @mousedown="${this._handleMouseDownMultiChoiceItem}"
          @mouseover="${this._handleMouseOverMultiChoiceItem}"
          @mouseleave="${this._handleMouseLeaveMultiChoiceItem}"
        >
          ${this._getMultiChoiceCheckedIconSvgTemplate(
            this.disabled,
            isCheckedItem
          )}
          ${item.label === undefined ? item.value : item.label}
        </div>
      `;
    }

    private _setActiveDescendant(value?: string) {
      value !== undefined && this._menuEl !== null
        ? this._menuEl.setAttribute("aria-activedescendant", value)
        : this._menuEl.removeAttribute("aria-activedescendant");
    }

    private _handleChangeValue(value: string, selectedIndex: string) {
      const oldValue = !this.value ? this.value : [...this.value];
      const newValueMapping = this._getNewValueMapping(value, selectedIndex);
      const itemsValue = this.items.map((item) => item.value);
      const newValue = Object.values(newValueMapping).filter(
        (item) => itemsValue.indexOf(item) > -1
      );
      if (newValue === oldValue) return;

      const newSelectedIndex = Object.keys(newValueMapping).map(
        (item: string) => parseInt(item, 10)
      );
      this.value = newValue;
      this.selectedIndex = newSelectedIndex;
      dispatchCustomEvent(this, "change", {
        oldValue,
        value: newValue,
      });
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
  }

  window.customElements.define("kuc-multi-choice", KucMultiChoice);
  createStyleOnHeader(MULTICHOICE_CSS);
  exportMultiChoice = KucMultiChoice;
})();
const MultiChoice = exportMultiChoice as any;
export { MultiChoice };
