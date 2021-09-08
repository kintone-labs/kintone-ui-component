import { html, property, query, svg } from "lit-element";
import {
  KucBase,
  dispatchCustomEvent,
  CustomEventDetail
} from "../../kuc-base";

type Item = {
  label?: string;
  value?: string;
};

export class BaseDateTimeMenu extends KucBase {
  @property({ type: Array }) items: Item[] = [];
  @property({ type: String }) selectedValue: string = "";

  @query(".kuc-base-datetime-menu__menu__item")
  private _firstItemEl!: HTMLLIElement;

  @query(".kuc-base-datetime-menu__menu__item:last-child")
  private _lastItemEl!: HTMLLIElement;

  @query(".kuc-base-datetime-menu__menu--highlight")
  private _highlightItemEl!: HTMLLIElement;

  public highlightFirstItem() {
    this._firstItemEl.classList.add("kuc-base-datetime-menu__menu--highlight");
  }

  public highlightLastItem() {
    this._lastItemEl.classList.add("kuc-base-datetime-menu__menu--highlight");
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
    nextItemEl?.classList.add("kuc-base-datetime-menu__menu--highlight");
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
    prevItemEl?.classList.add("kuc-base-datetime-menu__menu--highlight");
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <ul
        class="kuc-base-datetime-menu__menu"
        role="menu"
        @click=${this._handleClickMenu}
      >
        ${this.items.map((item, number) =>
          this._getMenuItemTemplate(item, number)
        )}
      </ul>
    `;
  }

  private _handleClickMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    const itemEl = event.target as HTMLLIElement;
    const value = itemEl.getAttribute("value");

    const detail: CustomEventDetail = { value: value ? value : "" };
    dispatchCustomEvent(this, "click", detail);
  }

  private _handleMouseOverItem(event: MouseEvent) {
    const itemEl = event.target as HTMLLIElement;
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
        aria-checked="${this.selectedValue === item.value}"
        value="${item.value !== undefined ? item.value : ""}"
        @mouseover=${this._handleMouseOverItem}
        @mouseleave=${this._handleMouseLeaveItem}
      >
        ${this.selectedValue === item.value
          ? this._getCheckedIconSvgTemplate()
          : ""}
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
          background-color: #fff;
          list-style: none;
          line-height: 1;
          -webkit-tap-highlight-color: transparent;
          box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
        }
        .kuc-base-datetime-menu__menu__item {
          position: relative;
          display: block;
          box-sizing: border-box;
          width: 100%;
          padding: 8px 16px 8px 25px;
          color: #333;
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
          cursor: pointer;
        }
        .kuc-base-datetime-menu__menu__item__icon {
          position: absolute;
          left: 8px;
          top: 10px;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-base-datetime-menu")) {
  window.customElements.define("kuc-base-datetime-menu", BaseDateTimeMenu);
}
