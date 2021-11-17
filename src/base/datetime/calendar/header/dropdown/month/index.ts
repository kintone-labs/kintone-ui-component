import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../../../../kuc-base";
import { BaseDateTimeListBox, Item } from "../../../../listbox";
import { getToggleIconSvgTemplate, getLocale } from "../../../../utils";

export class BaseDateTimeHeaderMonth extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: Number }) month = 1;

  @state()
  private _listBoxVisible = false;
  private _locale = getLocale("en");
  private _monthLabel = "";
  private _GUID = generateGUID();
  private _listBoxItems: Item[] | undefined;
  private _maxHeight = 1000;

  @query(".kuc-base-datetime-header-month__toggle")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-datetime-header-month__listbox")
  private _listBoxEl!: BaseDateTimeListBox;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
      this._listBoxItems = this._getListBoxItems();
    }
    if (changedProperties.has("month")) {
      this._monthLabel = this._getMonthLabel();
    }
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <button
        class="kuc-base-datetime-header-month__toggle"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible ? "-1" : "0"}"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month__toggle__icon"
          >${getToggleIconSvgTemplate()}
        </span>
      </button>
      ${this._listBoxVisible
        ? html`
            <kuc-base-datetime-listbox
              .items="${this._listBoxItems || []}"
              .value="${this.month.toString()}"
              .maxHeight="${this._maxHeight}"
              class="kuc-base-datetime-header-month__listbox"
              @kuc:calendar-listbox-click="${this._handleChangeListBox}"
              @kuc:focus-out-listbox="${this._handleFocusOutListBox}"
              aria-hidden="${!this._listBoxVisible}"
              ?hidden="${!this._listBoxVisible}"
            >
            </kuc-base-datetime-listbox>
          `
        : ""}
    `;
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("_listBoxVisible")) {
      if (!this._listBoxVisible) return;
      setTimeout(() => {
        this._listBoxEl.highlightSelectedItem();
      });
    }
    super.update(changedProperties);
  }

  private _handleFocusOutListBox() {
    this._listBoxVisible = false;
    this._toggleEl.focus();
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-datetime-header-month__toggle {
          position: relative;
          box-sizing: border-box;
          height: 32px;
          padding: 0 24px 0 8px;
          line-height: 30px;
          overflow: hidden;
          background-color: white;
          border: 1px solid transparent;
          cursor: pointer;
        }
        .kuc-base-datetime-header-month__toggle__icon {
          position: absolute;
          flex: none;
          width: 24px;
          height: 32px;
        }
        .kuc-base-datetime-header-month__toggle__label {
          font-size: 13px;
          color: #333333;
        }
        .kuc-base-datetime-header-month__toggle:focus {
          border: 1px solid #3498db;
          outline: none;
        }
      </style>
    `;
  }

  private _handleClickDropdownMonthToggle(event: Event) {
    event.stopPropagation();
    if (!this._listBoxVisible) {
      this._openListBox();
    } else {
      this._closeListBox();
    }
  }

  private _handleMouseUpDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleMouseDownDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleKeyDownMonthToggle(event: KeyboardEvent) {
    if (this._handleTabKey(event.key)) return;
    event.preventDefault();
    this._openListBoxByKey(event.key);
  }

  private _openListBoxByKey(key: string) {
    const isOpenListBox =
      [" ", "Up", "ArrowUp", "Down", "ArrowDown", "Enter"].indexOf(key) > -1;
    if (!isOpenListBox) return;
    this._openListBox();
  }

  private _handleTabKey(key: string) {
    return key === "Tab";
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._closeListBox();
    if (!event.detail.value) return;
    this.month = Number(event.detail.value);
    const detail: CustomEventDetail = { value: `${this.month}` };
    dispatchCustomEvent(this, "kuc:month-dropdown-change", detail);
  }

  private _openListBox() {
    this._listBoxVisible = true;
  }

  private _closeListBox() {
    this._listBoxVisible = false;
    this._toggleEl.focus();
    this._removeActiveDescendant(this._toggleEl);
  }

  private _removeActiveDescendant(_buttonEl: HTMLButtonElement) {
    _buttonEl.removeAttribute("aria-activedescendant");
  }

  private _getListBoxItems() {
    return this._locale.MONTH_SELECT.map((month: string, index: number) => {
      const item: Item = {
        value: `${index + 1}`,
        label: `${month}`
      };
      return item;
    });
  }

  private _getMonthLabel() {
    const monthSelected = this._locale.MONTH_SELECT.filter(
      (_: string, index: number) => this.month === index + 1
    );
    return monthSelected.length > 0 ? monthSelected[0] : "JANUARY";
  }
}

if (!window.customElements.get("kuc-base-datetime-header-month")) {
  window.customElements.define(
    "kuc-base-datetime-header-month",
    BaseDateTimeHeaderMonth
  );
}
