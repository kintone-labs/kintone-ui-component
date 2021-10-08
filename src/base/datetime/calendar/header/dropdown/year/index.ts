import { html, property, query, PropertyValues, state } from "lit-element";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../../../../kuc-base";
import { BaseDateTimeListbox, Item } from "../../../../listbox";
import { getToggleIconSvgTemplate } from "../../ultils";

export class BaseDateTimeYearDropdown extends KucBase {
  @property({ type: Number }) year = 2021;
  @property({ type: String }) postfix = "";

  @state()
  private _listboxVisible = false;

  @state()
  private _currentYear = new Date().getFullYear();

  private _GUID = generateGUID();
  private _listboxItems: Item[] | undefined;

  @query(".kuc-base-datetime-year-dropdown__toggle")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-datetime-year-dropdown__listbox")
  private _listboxEl!: BaseDateTimeListbox;

  update(changedProperties: PropertyValues) {
    this._listboxItems = this._getYearOptions().map((year: number) => {
      const item: Item = {
        value: `${year}`,
        label: `${year}${this.postfix}`
      };
      return item;
    });
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <button
        class="kuc-base-datetime-year-dropdown__toggle"
        aria-haspopup="true"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @blur="${this._handleBlurDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-year-dropdown__toggle__label"
          >${this.year}</span
        >
        <span class="kuc-base-datetime-year-dropdown__toggle__icon"
          >${getToggleIconSvgTemplate()}
        </span>
      </button>
      <kuc-base-datetime-listbox
        .items="${this._listboxItems || []}"
        .value="${this.year.toString()}"
        class="kuc-base-datetime-year-dropdown__listbox"
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
        .kuc-base-datetime-year-dropdown__toggle {
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
        .kuc-base-datetime-year-dropdown__toggle__icon {
          flex: none;
          width: 38px;
          height: 38px;
        }
      </style>
    `;
  }

  private _handleMouseUpDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleMouseDownDropdownToggle(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleClickDropdownYearToggle(event: MouseEvent) {
    if (!this._listboxVisible) {
      this._openListbox();
    } else {
      this._closeListbox();
    }
  }

  private _handleKeyDownYearToggle(event: KeyboardEvent) {
    if (!this._listboxVisible) {
      this._listboxEl.highlightFirstItem();
      return;
    }
    switch (event.key) {
      case "Up":
      case "ArrowUp": {
        event.preventDefault();
        this._listboxEl.highlightPrevItem();
        this._listboxEl.scrollToView();
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
        this._listboxEl.scrollToView();
        this._setActiveDescendant(
          this._toggleEl,
          this._listboxEl.getHighlightItemId()
        );
        break;
      }
      case "Home":
        event.preventDefault();
        this._listboxEl.highlightFirstItem();
        this._listboxEl.scrollToTop();
        this._setActiveDescendant(
          this._toggleEl,
          this._listboxEl.getHighlightItemId()
        );
        break;
      case "End":
        event.preventDefault();
        this._listboxEl.highlightLastItem();
        this._listboxEl.scrollToBottom();
        this._setActiveDescendant(
          this._toggleEl,
          this._listboxEl.getHighlightItemId()
        );
        break;
      case "Enter": {
        event.preventDefault();
        const highlightValue = this._listboxEl.getHighlightValue();
        if (highlightValue) {
          this.year = Number(highlightValue);
          const detail: CustomEventDetail = { value: `${this.year}` };
          dispatchCustomEvent(this, "kuc:year-dropdown-change", detail);
        }
        this._listboxVisible = false;
        break;
      }
    }
  }

  private _handleBlurDropdownYearToggle(event: Event) {
    this._listboxVisible = false;
  }

  private _handleChangeListbox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.year = Number(event.detail.value);
    this._listboxVisible = false;
    const detail: CustomEventDetail = { value: `${this.year}` };
    dispatchCustomEvent(this, "kuc:year-dropdown-change", detail);
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

  private _setActiveDescendant(
    _buttonEl: HTMLButtonElement,
    value: string | null
  ) {
    if (value && _buttonEl !== null) {
      _buttonEl.setAttribute("aria-activedescendant", value);
    }
  }

  private _removeActiveDescendant(_buttonEl: HTMLButtonElement) {
    _buttonEl.removeAttribute("aria-activedescendant");
  }

  private _getYearOptions() {
    const options = [];
    const year = this._currentYear;
    if (!Number.isInteger(this.year)) {
      this.year = 2021;
    }
    for (let i = year - 100; i <= year + 100; i++) {
      options.push(i);
    }
    return options;
  }
}

if (!window.customElements.get("kuc-base-datetime-year-dropdown")) {
  window.customElements.define(
    "kuc-base-datetime-year-dropdown",
    BaseDateTimeYearDropdown
  );
}
