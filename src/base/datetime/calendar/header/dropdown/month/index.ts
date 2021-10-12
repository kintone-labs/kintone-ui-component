import { html, property, query, PropertyValues, state } from "lit-element";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../../../../kuc-base";
import { BaseDateTimeListBox, Item } from "../../../../listbox";
import { en } from "../../../../resource/locale";
import { getToggleIconSvgTemplate, getLocale } from "../../ultils";

export class BaseDateTimeHeaderMonth extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: Number }) month = 1;

  @state()
  private _listBoxVisible = false;
  private _locale = en;
  private _monthLabel = "";
  private _GUID = generateGUID();
  private _listBoxItems: Item[] | undefined;
  private _maxHeight = 1000;

  @query(".kuc-base-datetime-header__month__toggle")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-datetime-header__month__listbox")
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
        class="kuc-base-datetime-header__month__toggle"
        aria-haspopup="true"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @blur="${this._handleBlurDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header__month__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header__month__toggle__icon"
          >${getToggleIconSvgTemplate()}
        </span>
      </button>
      <kuc-base-datetime-listbox
        .items="${this._listBoxItems || []}"
        .value="${this.month.toString()}"
        .maxHeight="${this._maxHeight}"
        class="kuc-base-datetime-header__month__listbox"
        @kuc:calendar-listbox-click="${this._handleChangeListBox}"
        aria-hidden="${!this._listBoxVisible}"
        ?hidden="${!this._listBoxVisible}"
      >
      </kuc-base-datetime-listbox>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-datetime-header__month__toggle {
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
        .kuc-base-datetime-header__month__toggle__icon {
          position: absolute;
          flex: none;
          width: 24px;
          height: 32px;
        }
        .kuc-base-datetime-header__month__toggle__label {
          font-size: 13px;
          color: #333333;
        }
        .kuc-base-datetime-header__month__toggle:focus {
          border: 1px solid #3498db;
          outline: none;
        }
      </style>
    `;
  }

  private _handleClickDropdownMonthToggle() {
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
    if (!this._listBoxVisible) {
      this._listBoxEl.highlightFirstItem();
      return;
    }
    switch (event.key) {
      case "Up":
      case "ArrowUp": {
        event.preventDefault();
        this._listBoxEl.highlightPrevItem();
        this._setActiveDescendant(
          this._toggleEl,
          this._listBoxEl.getHighlightItemId()
        );
        break;
      }
      case "Down":
      case "ArrowDown": {
        event.preventDefault();
        this._listBoxEl.highlightNextItem();
        this._setActiveDescendant(
          this._toggleEl,
          this._listBoxEl.getHighlightItemId()
        );
        break;
      }
      case "Home":
        event.preventDefault();
        this._listBoxEl.highlightFirstItem();
        this._setActiveDescendant(
          this._toggleEl,
          this._listBoxEl.getHighlightItemId()
        );
        break;
      case "End":
        event.preventDefault();
        this._listBoxEl.highlightLastItem();
        this._setActiveDescendant(
          this._toggleEl,
          this._listBoxEl.getHighlightItemId()
        );
        break;
      case "Enter": {
        event.preventDefault();
        const highlightValue = this._listBoxEl.getHighlightValue();
        if (highlightValue) {
          this.month = Number(highlightValue);
          const detail: CustomEventDetail = { value: `${this.month}` };
          dispatchCustomEvent(this, "kuc:month-dropdown-change", detail);
        }
        this._listBoxVisible = false;
        break;
      }
    }
  }

  private _setActiveDescendant(
    _buttonEl: HTMLButtonElement,
    value?: string | null
  ) {
    if (value && _buttonEl !== null) {
      _buttonEl.setAttribute("aria-activedescendant", value);
    }
  }

  private _handleBlurDropdownMonthToggle() {
    this._listBoxVisible = false;
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.month = Number(event.detail.value);
    this._listBoxVisible = false;
    const detail: CustomEventDetail = { value: `${this.month}` };
    dispatchCustomEvent(this, "kuc:month-dropdown-change", detail);
  }

  private _openListBox() {
    this._toggleEl.focus();
    this._listBoxVisible = true;
    this._listBoxEl.highlightSelectedItem();
  }

  private _closeListBox() {
    this._listBoxVisible = false;
    this._removeActiveDescendant(this._toggleEl);
  }

  private _removeActiveDescendant(_buttonEl: HTMLButtonElement) {
    _buttonEl.removeAttribute("aria-activedescendant");
  }

  private _getListBoxItems() {
    return this._locale.MONTHS_SELECT.map((month: string, index: number) => {
      const item: Item = {
        value: `${index + 1}`,
        label: `${month}`
      };
      return item;
    });
  }

  private _getMonthLabel() {
    const monthSelected = this._locale.MONTHS_SELECT.filter(
      (_, index: number) => this.month === index + 1
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
