import { html, property, query, PropertyValues, state } from "lit-element";
import {
  KucBase,
  generateGUID,
  CustomEventDetail,
  dispatchCustomEvent
} from "../kuc-base";
import { BaseDateTimeListBox, Item } from "../datetime/listbox";
import { timeList12H, timeList24H } from "./utils";

export class BaseDateTime extends KucBase {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) hour12 = false;
  @property({ type: Boolean }) visible = false;
  @property({ type: String }) value = "";

  @state()
  private _listBoxVisible = false;
  @state()
  private _listBoxValue = "";

  private _GUID = generateGUID();
  private _listBoxItems: Item[] | undefined;

  @query(".kuc-base-time__toggle")
  private _toggleEl!: HTMLButtonElement;

  @query(".kuc-base-time__listbox")
  private _listBoxEl!: BaseDateTimeListBox;

  update(changedProperties: PropertyValues) {
    this._listBoxItems = this._getTimeOptions(this.hour12);
    super.update(changedProperties);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <input
        type="text"
        class="kuc-base-time__toggle"
        aria-haspopup="true"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        @mouseup="${this._handleMouseUpDateTime}"
        @mousedown="${this._handleMouseDownDateTime}"
        @click="${this._handleClickDateTime}"
        @blur="${this._handleBlurDateTime}"
        @keydown="${this._handleKeyDownDateTime}"
        value="${this._listBoxValue}"
      />
      <kuc-base-datetime-listbox
        .items="${this._listBoxItems || []}"
        .value="${this.value}"
        class="kuc-base-time__listbox"
        @kuc:calendar-listbox-click="${this._handleChangeListBox}"
        aria-hidden="${!this._listBoxVisible}"
        ?hidden="${!this._listBoxVisible}"
      >
      </kuc-base-datetime-listbox>
    `;
  }

  private _handleMouseUpDateTime(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleMouseDownDateTime(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleClickDateTime() {
    if (!this._listBoxVisible) {
      this._openListBox();
    } else {
      this._closeListBox();
    }
  }

  private _handleKeyDownDateTime(event: KeyboardEvent) {
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
          this.value = highlightValue;
          const detail: CustomEventDetail = { value: `${this.value}` };
          dispatchCustomEvent(this, "kuc:date-time-change", detail);
        }
        this._listBoxVisible = false;
        break;
      }
    }
  }

  private _handleBlurDateTime() {
    this._listBoxVisible = false;
  }

  private _handleChangeListBox(event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.value = event.detail.value;
    this._listBoxVisible = false;
    this._listBoxValue = this._listBoxEl.getHighlightDataLabel() || "";
    const detail: CustomEventDetail = { value: `${this.value}` };
    dispatchCustomEvent(this, "kuc:date-time-change", detail);
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

  private _getTimeOptions(hour12 = false) {
    if (hour12) return timeList12H;
    return timeList24H;
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

  private _getStyleTagTemplate() {
    return html`
      <style>
        .kuc-base-time__toggle {
          position: relative;
          box-sizing: border-box;
          height: 32px;
          padding: 0 24px 0 8px;
          line-height: 30px;
          overflow: hidden;
          background-color: white;
          border: 1px solid #d5d5d5;
          cursor: pointer;
        }
        .kuc-base-time__toggle__icon {
          position: absolute;
          flex: none;
          width: 24px;
          height: 32px;
        }
        .kuc-base-time__toggle__label {
          font-size: 13px;
          color: #333333;
        }
        .kuc-base-time__toggle:focus {
          border: 1px solid #3498db;
          outline: none;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-time")) {
  window.customElements.define("kuc-base-time", BaseDateTime);
}
