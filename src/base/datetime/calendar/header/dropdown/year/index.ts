import { html, property, query, PropertyValues, state } from "lit-element";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent
} from "../../../../../kuc-base";
import { BaseDateTimeListBox, Item } from "../../../../listbox";
import { getToggleIconSvgTemplate } from "../../ultils";

export class BaseDateTimeHeaderYear extends KucBase {
  @property({ type: Number }) year = 2021;
  @property({ type: String }) postfix = "";

  @state()
  private _listBoxVisible = false;

  private _GUID = generateGUID();
  private _listBoxItems: Item[] | undefined;

  @query(".kuc-base-datetime-header-year__toggle")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-datetime-header-year__listbox")
  private _listBoxEl!: BaseDateTimeListBox;

  update(changedProperties: PropertyValues) {
    this._listBoxItems = this._getYearOptions().map((year: number) => {
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
        class="kuc-base-datetime-header-year__toggle"
        aria-haspopup="true"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @blur="${this._handleBlurDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year__toggle__icon"
          >${getToggleIconSvgTemplate()}
        </span>
      </button>
      <kuc-base-datetime-listbox
        .items="${this._listBoxItems || []}"
        .value="${this.year.toString()}"
        class="kuc-base-datetime-header-year__listbox"
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
        .kuc-base-datetime-header-year__toggle {
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
        .kuc-base-datetime-header-year__toggle__icon {
          position: absolute;
          flex: none;
          width: 24px;
          height: 32px;
        }
        .kuc-base-datetime-header-year__toggle__label {
          font-size: 13px;
          color: #333333;
        }
        .kuc-base-datetime-header-year__toggle:focus {
          border: 1px solid #3498db;
          outline: none;
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

  private _handleClickDropdownYearToggle() {
    if (!this._listBoxVisible) {
      this._openListBox();
    } else {
      this._closeListBox();
    }
  }

  private _handleKeyDownYearToggle(event: KeyboardEvent) {
    if (!this._listBoxVisible) {
      this._listBoxEl.highlightFirstItem();
      return;
    }
    switch (event.key) {
      case "Up":
      case "ArrowUp": {
        event.preventDefault();
        this._listBoxEl.highlightPrevItem();
        this._listBoxEl.scrollToView();
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
        this._listBoxEl.scrollToView();
        this._setActiveDescendant(
          this._toggleEl,
          this._listBoxEl.getHighlightItemId()
        );
        break;
      }
      case "Home":
        event.preventDefault();
        this._listBoxEl.highlightFirstItem();
        this._listBoxEl.scrollToTop();
        this._setActiveDescendant(
          this._toggleEl,
          this._listBoxEl.getHighlightItemId()
        );
        break;
      case "End":
        event.preventDefault();
        this._listBoxEl.highlightLastItem();
        this._listBoxEl.scrollToBottom();
        this._setActiveDescendant(
          this._toggleEl,
          this._listBoxEl.getHighlightItemId()
        );
        break;
      case "Enter": {
        event.preventDefault();
        const highlightValue = this._listBoxEl.getHighlightValue();
        if (highlightValue) {
          this.year = Number(highlightValue);
          const detail: CustomEventDetail = { value: `${this.year}` };
          dispatchCustomEvent(this, "kuc:year-dropdown-change", detail);
        }
        this._listBoxVisible = false;
        break;
      }
    }
  }

  private _handleBlurDropdownYearToggle() {
    this._listBoxVisible = false;
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.year = Number(event.detail.value);
    this._listBoxVisible = false;
    const detail: CustomEventDetail = { value: `${this.year}` };
    dispatchCustomEvent(this, "kuc:year-dropdown-change", detail);
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
    if (!Number.isInteger(this.year)) {
      this.year = 2021;
    }
    for (let i = this.year - 100; i <= this.year + 100; i++) {
      options.push(i);
    }
    return options;
  }
}

if (!window.customElements.get("kuc-base-datetime-header-year")) {
  window.customElements.define(
    "kuc-base-datetime-header-year",
    BaseDateTimeHeaderYear
  );
}
