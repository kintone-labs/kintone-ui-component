import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d}from"./decorate-33sGx9Ox.js";import{p as f,v as p}from"./utils-BITFIerI.js";var m,h=e((()=>{m=`
kuc-base-mobile-datetime-calendar-footer,
kuc-base-mobile-datetime-calendar-footer * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-footer:lang(zh),
kuc-base-mobile-datetime-calendar-footer:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-base-mobile-datetime-calendar-footer:lang(zh-TW),
kuc-base-mobile-datetime-calendar-footer:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-base-mobile-datetime-calendar-footer:lang(es),
kuc-base-mobile-datetime-calendar-footer:lang(es) * {
    font-family: sans-serif;
}
.kuc-base-mobile-datetime-calendar-footer__group {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-footer__group__button {
    background: transparent;
    border: 1px solid transparent;
    color: #206694;
    height: 40px;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    padding: 0;
    margin: 0;
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-footer__group__center {
    width: 100%;
}
`})),g,_=e((()=>{n(),i(),p(),u(),h(),c(),g=class extends l{constructor(...e){super(...e),this.language=`en`,this._locale=f(`en`)}update(e){e.has(`language`)&&(this._locale=f(this.language)),super.update(e)}_handleClickCalendarFooterButtonClose(e){e.stopPropagation(),r(this,`kuc:mobile-calendar-footer-click-close`)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),r(this,`kuc:mobile-calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),r(this,`kuc:mobile-calendar-footer-click-today`)}render(){return t`
      <div class="kuc-base-mobile-datetime-calendar-footer__group">
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer__group__button kuc-base-mobile-datetime-calendar-footer__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer__group__button kuc-base-mobile-datetime-calendar-footer__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer__group__button kuc-base-mobile-datetime-calendar-footer__group__button--close"
          @click="${this._handleClickCalendarFooterButtonClose}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `}},d([o({type:String,attribute:`lang`,reflect:!0})],g.prototype,`language`,void 0),d([a()],g.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-footer`)||(s(m),window.customElements.define(`kuc-base-mobile-datetime-calendar-footer`,g))}));export{_ as t};