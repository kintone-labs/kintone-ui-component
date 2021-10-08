import { html, property, query, PropertyValues, state } from "lit-element";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../../../../kuc-base";
import { BaseDateTimeListbox, Item } from "../../../../listbox";
import { en } from "../../../../resource/locale";
import { getToggleIconSvgTemplate, getLocale } from "../../ultils";

export class BaseDateTimeMonthDropdown extends KucBase {
  @property({ type: String }) language = "en";
  @property({ type: Number }) month = 1;

  @state()
  private _listboxVisible = false;
  private _locale = en;
  private _monthLabel = "";
  private _GUID = generateGUID();
  private _listboxItems: Item[] | undefined;
  private _maxHeight = 1000;

  @query(".kuc-base-datetime-month-dropdown__toggle")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-datetime-month-dropdown__listbox")
  private _listboxEl!: BaseDateTimeListbox;

  update(changedProperties: PropertyValues) {
    if (changedProperties.has("language")) {
      this._locale = getLocale(this.language);
      this._listboxItems = this._getListboxItems();
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
        class="kuc-base-datetime-month-dropdown__toggle"
        aria-haspopup="true"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @blur="${this._handleBlurDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-month-dropdown__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-month-dropdown__toggle__icon"
          >${getToggleIconSvgTemplate()}
        </span>
      </button>
      <kuc-base-datetime-listbox
        .items="${this._listboxItems || []}"
        .value="${this.month.toString()}"
        .maxHeight="${this._maxHeight}"
        class="kuc-base-datetime-month-dropdown__listbox"
        @kuc:calendar-listbox-click="${this._handleChangeListbox}"
        aria-hidden="${!this._listboxVisible}"
        ?hidden="${!this._listboxVisible}"
      >
      </kuc-base-datetime-listbox>
    `;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-datetime-month-dropdown__toggle {
          position: relative;
          box-sizing: border-box;
          height: 32px;
          padding: 0 14px 0 8px;
          line-height: 30px;
          overflow: hidden;
          background-color: white;
          border: 1px solid transparent;
          cursor: pointer;
        }
        .kuc-base-datetime-month-dropdown__toggle__icon {
          flex: none;
          width: 38px;
          height: 38px;
        }
      </style>
    `;
  }

  private _handleClickDropdownMonthToggle(event: MouseEvent) {
    if (!this._listboxVisible) {
      this._openListbox();
    } else {
      this._closeListbox();
    }
  }

  private _handleMouseUpDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleMouseDownDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleKeyDownMonthToggle(event: KeyboardEvent) {
    if (!this._listboxVisible) {
      this._listboxEl.highlightFirstItem();
      return;
    }
    switch (event.key) {
      case "Up":
      case "ArrowUp": {
        event.preventDefault();
        this._listboxEl.highlightPrevItem();
        this._setActiveDescendant(
          this._toggleEl,
          this._listboxEl.getHighlightItemId()
        );
        break;
      }
      case "Down":
      case "ArrowDown": {
        event.preventDefault();
        this._listboxEl.highlightNextItem();
        this._setActiveDescendant(
          this._toggleEl,
          this._listboxEl.getHighlightItemId()
        );
        break;
      }
      case "Home":
        event.preventDefault();
        this._listboxEl.highlightFirstItem();
        this._setActiveDescendant(
          this._toggleEl,
          this._listboxEl.getHighlightItemId()
        );
        break;
      case "End":
        event.preventDefault();
        this._listboxEl.highlightLastItem();
        this._setActiveDescendant(
          this._toggleEl,
          this._listboxEl.getHighlightItemId()
        );
        break;
      case "Enter": {
        event.preventDefault();
        const highlightValue = this._listboxEl.getHighlightValue();
        if (highlightValue) {
          this.month = Number(highlightValue);
          const detail: CustomEventDetail = { value: `${this.month}` };
          dispatchCustomEvent(this, "kuc:month-dropdown-change", detail);
        }
        this._listboxVisible = false;
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

  private _handleBlurDropdownMonthToggle(event: Event) {
    this._listboxVisible = false;
  }

  private _handleChangeListbox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.month = Number(event.detail.value);
    this._listboxVisible = false;
    const detail: CustomEventDetail = { value: `${this.month}` };
    dispatchCustomEvent(this, "kuc:month-dropdown-change", detail);
  }

  private _openListbox() {
    this._toggleEl.focus();
    this._listboxVisible = true;
    this._listboxEl.highlightSelectedItem();
  }

  private _closeListbox() {
    this._listboxVisible = false;
    this._removeActiveDescendant(this._toggleEl);
  }

  private _removeActiveDescendant(_buttonEl: HTMLButtonElement) {
    _buttonEl.removeAttribute("aria-activedescendant");
  }

  private _getListboxItems() {
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
      (month: string, index: number) => this.month === index + 1
    );
    return monthSelected.length > 0 ? monthSelected[0] : "JANUARY";
  }
}

if (!window.customElements.get("kuc-base-datetime-month-dropdown")) {
  window.customElements.define(
    "kuc-base-datetime-month-dropdown",
    BaseDateTimeMonthDropdown
  );
}
