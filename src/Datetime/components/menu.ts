import { html } from "lit-html";
import { KucBase } from "../../base/kuc-base";

export class Menu extends KucBase {
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <ul class="kuc-menu__menu">
        <li class="kuc-menu__menu__item" value="item-1">Item 1</li>
        <li class="kuc-menu__menu__item" value="item-2">Item 2</li>
        <li class="kuc-menu__menu__item" value="item-3">Item 3</li>
        <li class="kuc-menu__menu__item" value="item-4">Item 4</li>
        <li class="kuc-menu__menu__item" value="item-5">Item 5</li>
        <li class="kuc-menu__menu__item" value="item-6">Item 6</li>
        <li class="kuc-menu__menu__item" value="item-7">Item 7</li>
        <li class="kuc-menu__menu__item" value="item-8">Item 8</li>
        <li class="kuc-menu__menu__item" value="item-9">Item 9</li>
      </ul>
    `;
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
          position: absolute;
          z-index: 2000;
          margin: 0;
          padding: 8px 0;
          border: 1px solid #e3e7e8;
          background-color: #fff;
          list-style: none;
          line-height: 1;
          -webkit-tap-highlight-color: transparent;
        }
        .kuc-menu__menu {
          padding-inline: 0px;
          margin-block: 0px;
          margin-inline: 0px;
        }
        .kuc-menu__menu__item {
          color: #333;
          list-style: none;
          padding: 8px 16px 8px 25px;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-menu")) {
  window.customElements.define("kuc-menu", Menu);
}
