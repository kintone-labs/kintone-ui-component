import { html, property, query, queryAll, svg } from "lit-element";
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

export class BaseDateTimeMenu extends KucBase {
  @property({ type: String }) value: string = "";
  @property({ type: Array }) items: Item[] = [];
  @property({ type: Number }) maxHeight = 300;

  @query(".kuc-base-datetime-menu__menu")
  private _menuEl!: HTMLLIElement;

  @queryAll(".kuc-base-datetime-menu__menu__item")
  private _itemsEl!: HTMLLIElement[];

  @query(".kuc-base-datetime-menu__menu__item")
  private _firstItemEl!: HTMLLIElement;

  @query(".kuc-base-datetime-menu__menu__item:last-child")
  private _lastItemEl!: HTMLLIElement;

  @query(".kuc-base-datetime-menu__menu--highlight")
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
      if (itemEl.getAttribute("aria-checked") === "true") {
        this._removeHighlight();
        itemEl.classList.add("kuc-base-datetime-menu__menu--highlight");
        break;
      }
    }
  }
  private _removeHighlight() {
    if (this._highlightItemEl) {
      this._highlightItemEl.classList.remove(
        "kuc-base-datetime-menu__menu--highlight"
      );
    }
  }
  public highlightFirstItem() {
    this._removeHighlight();
    this._firstItemEl.classList.add("kuc-base-datetime-menu__menu--highlight");
  }

  public highlightLastItem() {
    this._removeHighlight();
    this._lastItemEl.classList.add("kuc-base-datetime-menu__menu--highlight");
  }

  public scrollToView() {
    if (!this._highlightItemEl || !this._menuEl) {
      return;
    }
    const lineHeight = this._highlightItemEl.offsetHeight;
    const offsetItemCount = this._menuEl.clientHeight / lineHeight / 2;
    const offsetScrollTop =
      this._highlightItemEl.offsetTop - offsetItemCount * lineHeight < 0
        ? 0
        : this._highlightItemEl.offsetTop - offsetItemCount * lineHeight;
    this._menuEl.scrollTop = offsetScrollTop;
  }
  public scrollToTop() {
    if (!this._menuEl) {
      return;
    }
    this._menuEl.scrollTop = 0;
  }
  public scrollToBottom() {
    if (!this._menuEl) {
      return;
    }
    this._menuEl.scrollTop = this._menuEl.scrollHeight;
  }

  public highlightNextItem() {
    if (this._highlightItemEl === null) {
      this.highlightFirstItem();
      return;
    }
    const nextItemEl = this._highlightItemEl.nextElementSibling;
    this._highlightItemEl.classList.remove(
      "kuc-base-datetime-menu__menu--highlight"
    );
    if (nextItemEl) {
      nextItemEl.classList.add("kuc-base-datetime-menu__menu--highlight");
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
    this._highlightItemEl.classList.remove(
      "kuc-base-datetime-menu__menu--highlight"
    );
    if (prevItemEl) {
      prevItemEl.classList.add("kuc-base-datetime-menu__menu--highlight");
      return;
    }
    this.highlightLastItem();
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <ul
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-menu__menu"
        role="menu"
        @mousedown="${this._handleMouseDownMenu}"
      >
        ${this.items.map((item, number) =>
          this._getMenuItemTemplate(item, number)
        )}
      </ul>
    `;
  }

  updated(_changedProperties: any) {
    this.scrollToView();
  }

  private _handleMouseDownMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    const itemEl = event.target as HTMLLIElement;

    const value = itemEl.getAttribute("value");
    if (value) {
      const detail: CustomEventDetail = { value: value };
      dispatchCustomEvent(this, "kuc:calendar-menu-click", detail);
    }
  }
  private _handleMouseOverItem(event: MouseEvent) {
    const itemEl = event.target as HTMLLIElement;
    this._removeHighlight();
    itemEl.classList.add("kuc-base-datetime-menu__menu--highlight");
  }

  private _handleMouseLeaveItem(event: MouseEvent) {
    const itemEl = event.target as HTMLLIElement;
    itemEl.classList.remove("kuc-base-datetime-menu__menu--highlight");
  }

  private _getMenuItemTemplate(item: Item, index: number) {
    return html`
      <li
        class="kuc-base-datetime-menu__menu__item"
        role="menuitemradio"
        aria-checked="${this.value === item.value}"
        title="${item.label || ""}"
        id="${this._GUID}-menuitem-${index}"
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
          class='kuc-base-datetime-menu__menu__item__icon'
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
        kuc-base-datetime-menu,
        kuc-base-datetime-menu *,
        :lang(en) kuc-base-datetime-menu,
        :lang(en) kuc-base-datetime-menu * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-base-datetime-menu,
        :lang(ja) kuc-base-datetime-menu * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-base-datetime-menu,
        :lang(zh) kuc-base-datetime-menu * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-base-datetime-menu__menu {
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
        .kuc-base-datetime-menu__menu__item {
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
        .kuc-base-datetime-menu__menu__item[aria-checked="true"] {
          color: #3498db;
        }
        .kuc-base-datetime-menu__menu--highlight {
          background-color: #e2f2fe;
          color: #3498db;
          cursor: pointer;
        }
        .kuc-base-datetime-menu__menu__item__icon {
          position: absolute;
          left: 8px;
          top: 10px;
          background-color: transparent;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-datetime-menu")) {
  window.customElements.define("kuc-base-datetime-menu", BaseDateTimeMenu);
}
