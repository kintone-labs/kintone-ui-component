import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d}from"./decorate-33sGx9Ox.js";import{p as f,v as p}from"./utils-BITFIerI.js";var m,h=e((()=>{m=`
kuc-base-datetime-calendar-footer,
kuc-base-datetime-calendar-footer *,
kuc-base-datetime-calendar-footer:lang(en),
kuc-base-datetime-calendar-footer:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-footer:lang(ja),
kuc-base-datetime-calendar-footer:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-footer:lang(zh),
kuc-base-datetime-calendar-footer:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-footer:lang(zh-TW),
kuc-base-datetime-calendar-footer:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-footer:lang(es),
kuc-base-datetime-calendar-footer:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-footer__group {
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0;
  height: 27px;
  white-space: nowrap;
  width: 272px;
}
.kuc-base-datetime-calendar-footer__group__button {
  background: transparent;
  border: 1px solid transparent;
  color: #3498db;
  cursor: pointer;
  font-size: 13px;
  outline: none;
}
.kuc-base-datetime-calendar-footer__group__button:hover {
  color: #217dbb;
}
.kuc-base-datetime-calendar-footer__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-footer__group__center {
  width: 100%;
}
`})),g,_=e((()=>{n(),i(),u(),p(),h(),c(),g=class extends l{constructor(...e){super(...e),this.language=`en`,this._locale=f(`en`)}update(e){e.has(`language`)&&(this._locale=f(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),r(this,`kuc:calendar-footer-click-none`)}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),r(this,`kuc:calendar-footer-click-today`)}_handleKeyDownCalendarFooterButtonNone(e){e.key===`Tab`&&(e.shiftKey||(e.preventDefault(),r(this,`kuc:calendar-footer-tab-none`)))}render(){return t`
      <div class="kuc-base-datetime-calendar-footer__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer__group__button kuc-base-datetime-calendar-footer__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer__group__button kuc-base-datetime-calendar-footer__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
          @keydown="${this._handleKeyDownCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `}},d([o({type:String,attribute:`lang`,reflect:!0})],g.prototype,`language`,void 0),d([a()],g.prototype,`_locale`,void 0),window.customElements.get(`kuc-base-datetime-calendar-footer`)||(s(m),window.customElements.define(`kuc-base-datetime-calendar-footer`,g))}));export{_ as t};