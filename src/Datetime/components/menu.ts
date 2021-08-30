import { property, query } from "lit-element";
import { html } from "lit-html";
import { KucBase } from "../../base/kuc-base";

export class Menu extends KucBase {
  @property() for = "";
  @property() items = ["Item-1", "Item-2", "Item-3", "Item-4", "Item-5"];

  @query("ul") ulEl: HTMLUListElement | undefined;

  updated() {
    if (this.for === "") return;

    const mainEl = document.getElementById(this.for);
    if (mainEl === null) return;

    this.appendChild(mainEl);
    this.ulEl?.classList.add("kuc-menu--managed-by-main");
    this.ulEl?.setAttribute("hidden", "");

    this._handleMainEvent(mainEl);
  }

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <ul class="kuc-menu__menu">
        ${this.items.map(item => {
          return html`
            <li
              class="kuc-menu__menu__item"
              value="${item}"
              @click="${this._handleClickItem}"
            >
              ${item}
            </li>
          `;
        })}
      </ul>
    `;
  }

  private _handleClickItem(event: MouseEvent) {
    const mainEl = document.getElementById(this.for);
    if (mainEl === null) return;

    const value = (event.target as HTMLElement).getAttribute("value");
    mainEl?.setAttribute("value", value ? value : "");
    this.ulEl?.setAttribute("hidden", "");
  }

  private _handleMainEvent(mainEl: HTMLElement) {
    mainEl.addEventListener("focus", () => {
      this.ulEl?.removeAttribute("hidden");
    });
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-menu,
        kuc-menu * {
          font-family: HelveticaNeueW02-45Ligh, Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        kuc-menu {
          font-size: 14px;
        }
        kuc-menu {
          position: relative;
          display: inline-flex;
        }
        .kuc-menu__menu.kuc-menu--managed-by-main {
          position: absolute;
          min-width: 92px;
          top: 21px;
        }
        .kuc-menu__menu {
          z-index: 2000;
          margin: 0;
          padding: 8px 0;
          border: 1px solid #e3e7e8;
          background-color: #fff;
          list-style: none;
          line-height: 1;
          -webkit-tap-highlight-color: transparent;
          padding-inline: 0px;
          margin-block: 0px;
          margin-inline: 0px;
        }
        .kuc-menu__menu__item {
          color: #333;
          list-style: none;
          padding: 8px 16px 8px 25px;
          cursor: pointer;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-menu")) {
  window.customElements.define("kuc-menu", Menu);
}
