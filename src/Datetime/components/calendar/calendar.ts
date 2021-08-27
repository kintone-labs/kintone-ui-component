import { html } from "lit-html";
import { KucBase } from "../../../base/kuc-base";
import "./header";
import "./body";
import "./footer";
import { query } from "lit-element";

export class Calendar extends KucBase {
  @query("kuc-calendar-presentation-body")
  private _bodyEl: HTMLElement | undefined;

  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-calendar">
        <div class="kuc-calendar-presentation">
          <kuc-calendar-presentation-header
            @change="${this._handleChangeHeader}"
          ></kuc-calendar-presentation-header>
          <kuc-calendar-presentation-body
            month="1"
            year="2018"
          ></kuc-calendar-presentation-body>
          <kuc-calendar-presentation-footer></kuc-calendar-presentation-footer>
        </div>
      </div>
    `;
  }

  private _handleChangeHeader(event: CustomEvent) {
    const value = event.detail.value.split("-");
    this._bodyEl?.setAttribute("year", value[0]);
    this._bodyEl?.setAttribute("month", value[1]);
  }

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-calendar,
        kuc-calendar *,
        :lang(en) kuc-calendar,
        :lang(en) kuc-calendar * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-calendar,
        :lang(ja) kuc-calendar * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-calendar,
        :lang(zh) kuc-calendar * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-calendar {
          display: flex;
          width: 336px;
          background: #fff;
          box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
          text-align: center;
          font-size: 13px;
          box-sizing: border-box;
          padding: 32px 32px 24px;
        }
      </style>
    `;
  }
}

if (!window.customElements.get("kuc-calendar")) {
  window.customElements.define("kuc-calendar", Calendar);
}
