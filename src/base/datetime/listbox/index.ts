import { html, svg, PropertyValues } from "lit";
import { property, query, queryAll } from "lit/decorators.js";
import {
  KucBase,
  generateGUID,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../kuc-base";

export type Item = {
  label?: string;
  value?: string;
};

export class BaseDateTimeListBox extends KucBase {
  @property({ type: String }) value: string = "";
  @property({ type: Array }) items: Item[] = [];
  @property({ type: Number }) maxHeight = 300;

  @query(".kuc-base-datetime-listbox__listbox")
  private _listBoxEl!: HTMLLIElement;

  @queryAll(".kuc-base-datetime-listbox__listbox__item")
  private _itemsEl!: HTMLLIElement[];

  @query(".kuc-base-datetime-listbox__listbox__item")
  private _firstItemEl!: HTMLLIElement;

  @query(".kuc-base-datetime-listbox__listbox__item:last-child")
  private _lastItemEl!: HTMLLIElement;

  @query(".kuc-base-datetime-listbox__listbox--highlight")
  private _highlightItemEl!: HTMLLIElement;

  private _GUID = generateGUID();

  public getHighlightItemEl() {
    return this._highlightItemEl;
  }

  public getHighlightItemId() {
    return this._highlightItemEl
      ? this._highlightItemEl.getAttribute("id")
      : "";
  }

  public getHighlightValue() {
    return this._highlightItemEl
      ? this._highlightItemEl.getAttribute("value")
      : "";
  }

  public highlightSelectedItem() {
    for (let index = 0; index < this._itemsEl.length; index++) {
      const itemEl = this._itemsEl[index];
      if (itemEl.getAttribute("aria-selected") === "true") {
        this._removeHighlight();
        itemEl.classList.add("kuc-base-datetime-listbox__listbox--highlight");
        itemEl.setAttribute("tabindex", "0");
        this.focusHiglightItemEl();
        break;
      }
    }
  }
  private _removeHighlight() {
    if (this._highlightItemEl) {
      this._highlightItemEl.setAttribute("tabindex", "-1");
      this._highlightItemEl.classList.remove(
        "kuc-base-datetime-listbox__listbox--highlight"
      );
    }
  }
  public highlightFirstItem() {
    this._removeHighlight();
    this._firstItemEl.classList.add(
      "kuc-base-datetime-listbox__listbox--highlight"
    );
    this._firstItemEl.setAttribute("tabindex", "0");
    this.focusHiglightItemEl();
  }

  public highlightLastItem() {
    this._removeHighlight();
    this._lastItemEl.classList.add(
      "kuc-base-datetime-listbox__listbox--highlight"
    );
    this._lastItemEl.setAttribute("tabindex", "0");
    this.focusHiglightItemEl();
  }

  public scrollToView() {
    if (!this._highlightItemEl || !this._listBoxEl) {
      return;
    }
    const lineHeight = this._highlightItemEl.offsetHeight;
    const offsetItemCount = this._listBoxEl.clientHeight / lineHeight / 2;
    const offsetScrollTop =
      this._highlightItemEl.offsetTop - offsetItemCount * lineHeight < 0
        ? 0
        : this._highlightItemEl.offsetTop - offsetItemCount * lineHeight;
    this._listBoxEl.scrollTop = offsetScrollTop;
  }

  public scrollToTop() {
    if (!this._listBoxEl) {
      return;
    }
    this._listBoxEl.scrollTop = 0;
  }

  public scrollToBottom() {
    if (!this._listBoxEl) {
      return;
    }
    this._listBoxEl.scrollTop = this._listBoxEl.scrollHeight;
  }

  public highlightNextItem() {
    if (this._highlightItemEl === null) {
      this.highlightFirstItem();
      return;
    }
    const nextItemEl = this._highlightItemEl.nextElementSibling;
    this._highlightItemEl.setAttribute("tabindex", "-1");
    this._highlightItemEl.classList.remove(
      "kuc-base-datetime-listbox__listbox--highlight"
    );
    if (nextItemEl) {
      nextItemEl.classList.add("kuc-base-datetime-listbox__listbox--highlight");
      nextItemEl.setAttribute("tabindex", "0");
      this.focusHiglightItemEl();
      return;
    }
    this.highlightFirstItem();
  }

  public highlightPrevItem() {
    if (this._highlightItemEl === null) {
      this.highlightLastItem();
      return;
    }
    const prevItemEl = this._highlightItemEl.previousElementSibling;
    this._highlightItemEl.setAttribute("tabindex", "-1");
    this._highlightItemEl.classList.remove(
      "kuc-base-datetime-listbox__listbox--highlight"
    );
    if (prevItemEl) {
      prevItemEl.classList.add("kuc-base-datetime-listbox__listbox--highlight");
      prevItemEl.setAttribute("tabindex", "0");
      this.focusHiglightItemEl();
      return;
    }
    this.highlightLastItem();
  }

  public focusHiglightItemEl() {
    const liEl = this.getHighlightItemEl() as HTMLLIElement;
    if (!liEl) return;
    liEl.focus();
  }

  constructor() {
    super();
    this._handleClickDocument = this._handleClickDocument.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this._handleClickDocument);
  }

  disconnectedCallback() {
    document.removeEventListener("click", this._handleClickDocument);
    super.disconnectedCallback();
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <ul
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @keydown="${this._handleKeyDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map((item, number) =>
          this._getListBoxItemTemplate(item, number)
        )}
      </ul>
    `;
  }

  updated(_changedProperties: any) {
    this.scrollToView();
  }

  private _handleClickDocument() {
    dispatchCustomEvent(this, "kuc:focus-out-listbox", {});
  }

  private _handleClickListBox(event: Event) {
    event.stopPropagation();
  }

  private _handleKeyDownListBox(event: KeyboardEvent) {
    event.preventDefault();
    switch (event.key) {
      case "Up":
      case "ArrowUp": {
        event.preventDefault();
        this.highlightPrevItem();
        break;
      }
      case "Down":
      case "ArrowDown":
        event.preventDefault();
        this.highlightNextItem();
        break;
      case "Home":
        event.preventDefault();
        this.highlightFirstItem();
        break;
      case "End":
        event.preventDefault();
        this.highlightLastItem();
        break;
      case "Tab":
      case "Escape":
        dispatchCustomEvent(this, "kuc:calendar-listbox-click", {});
        break;
      case "Enter": {
        event.preventDefault();
        const highlightValue = this.getHighlightValue();
        if (highlightValue) {
          const detail: CustomEventDetail = { value: highlightValue };
          dispatchCustomEvent(this, "kuc:calendar-listbox-click", detail);
        }
        break;
      }
    }
  }

  private _handleMouseDownListBox(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    const itemEl = event.target as HTMLLIElement;

    const value = itemEl.getAttribute("value");
    if (value) {
      const detail: CustomEventDetail = { value: value };
      dispatchCustomEvent(this, "kuc:calendar-listbox-click", detail);
    }
  }
  private _handleMouseOverItem(event: MouseEvent) {
    const itemEl = event.target as HTMLLIElement;
    this._removeHighlight();
    itemEl.setAttribute("tabindex", "0");
    itemEl.classList.add("kuc-base-datetime-listbox__listbox--highlight");
    this.focusHiglightItemEl();
  }

  private _handleMouseLeaveItem(event: MouseEvent) {
    const itemEl = event.target as HTMLLIElement;
    itemEl.setAttribute("tabindex", "-1");
    itemEl.classList.remove("kuc-base-datetime-listbox__listbox--highlight");
    this.focusHiglightItemEl();
  }

  private _getListBoxItemTemplate(item: Item, index: number) {
    return html`
      <li
        class="kuc-base-datetime-listbox__listbox__item"
        role="option"
        tabindex="${this.value === item.value ? "0" : "-1"}"
        aria-selected="${this.value === item.value}"
        title="${item.label || ""}"
        id="${this._GUID}-listboxitem-${index}"
        value="${item.value !== undefined ? item.value : ""}"
        @mouseover="${this._handleMouseOverItem}"
        @mouseleave="${this._handleMouseLeaveItem}"
      >
        ${this.value === item.value ? this._getCheckedIconSvgTemplate() : ""}
        ${item.label === undefined ? item.value : item.label}
      </li>
    `;
  }

  private _getCheckedIconSvgTemplate() {
    return svg`<svg
          class='kuc-base-datetime-listbox__listbox__item__icon'
          width='11'
          height='9'
          viewBox='0 0 11 9'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z'
            fill="#3498db"
          />
        </svg>`;
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-base-datetime-listbox,
        kuc-base-datetime-listbox *,
        :lang(en) kuc-base-datetime-listbox,
        :lang(en) kuc-base-datetime-listbox * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-listbox,
        :lang(ja) kuc-base-datetime-listbox * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-listbox,
        :lang(zh) kuc-base-datetime-listbox * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-listbox__listbox {
          position: absolute;
          z-index: 2000;
          min-width: 280px;
          margin: 0;
          padding: 8px 0;
          border: 1px solid #e3e7e8;
          background-color: #ffffff;
          list-style: none;
          line-height: 1;
          overflow-y: auto;
          -webkit-tap-highlight-color: transparent;
          box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
        }
        .kuc-base-datetime-listbox__listbox__item {
          position: relative;
          display: block;
          box-sizing: border-box;
          width: 100%;
          padding: 8px 16px 8px 25px;
          color: #333333;
          cursor: pointer;
          -webkit-tap-highlight-color: initial;
          text-align: left;
          font-size: 14px;
          user-select: none;
        }
        .kuc-base-datetime-listbox__listbox__item[aria-selected="true"] {
          color: #3498db;
        }
        .kuc-base-datetime-listbox__listbox--highlight {
          background-color: #e2f2fe;
          cursor: pointer;
        }
        .kuc-base-datetime-listbox__listbox__item__icon {
          position: absolute;
          left: 8px;
          top: 10px;
          background-color: transparent;
        }
        .kuc-base-datetime-listbox__listbox__item:focus {
          outline: none;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-datetime-listbox")) {
  window.customElements.define(
    "kuc-base-datetime-listbox",
    BaseDateTimeListBox
  );
}
