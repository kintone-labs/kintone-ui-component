import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,r as c,s as l,t as u,u as d}from"./decorate-33sGx9Ox.js";import{f,m as p,p as m,v as h}from"./utils-BITFIerI.js";import{t as g}from"./month-DoNHETzq.js";import{t as _}from"./year-BTAQmcQ3.js";var v,y=e((()=>{v=`
kuc-base-datetime-calendar-header,
kuc-base-datetime-calendar-header *,
kuc-base-datetime-calendar-header:lang(en),
kuc-base-datetime-calendar-header:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header:lang(ja),
kuc-base-datetime-calendar-header:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  font-weight: 700;
}
kuc-base-datetime-calendar-header:lang(zh),
kuc-base-datetime-calendar-header:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-header:lang(zh-TW),
kuc-base-datetime-calendar-header:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-header:lang(es),
kuc-base-datetime-calendar-header:lang(es) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-header:lang(ja) kuc-base-datetime-listbox * {
  font-weight: 400;
}
.kuc-base-datetime-calendar-header__group {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e7e8;
  padding: 0;
  white-space: nowrap;
  width: 266px;
  height: 44px;
}
.kuc-base-datetime-calendar-header__group__button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 38px;
  height: 32px;
  margin: 0;
  text-align: center;
}
.kuc-base-datetime-calendar-header__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-header__group__button-icon {
  vertical-align: middle;
}
.kuc-base-datetime-calendar-header__group__center {
  width: 190px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.kuc-base-datetime-calendar-header__month {
  margin: 0 4px 0 4px;
}
`}));function b(e){return e>0&&e<13}function x(e){return e>=0&&e<1e4}var S,C=e((()=>{n(),i(),l(),_(),g(),h(),y(),s(),S=class extends c{constructor(...e){super(...e),this.language=`en`,this.month=1,this.year=new Date().getFullYear(),this._locale=m(`en`)}update(e){e.has(`language`)&&(this._locale=m(this.language)),super.update(e)}render(){return t`
      <div class="kuc-base-datetime-calendar-header__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${f()}
        </button>
        <div class="kuc-base-datetime-calendar-header__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header__group__button kuc-base-datetime-calendar-header__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${p()}
        </button>
      </div>
    `}_getYearTemplate(){return t`
      <kuc-base-datetime-header-year
        class="kuc-base-datetime-calendar-header__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year>
    `}_getMonthTemplate(){return t`
      <kuc-base-datetime-header-month
        class="kuc-base-datetime-calendar-header__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month>
    `}_getYearMonthTemplate(){return this.language===`zh`||this.language===`ja`||this.language===`zh-TW`?t` ${this._getYearTemplate()}${this._getMonthTemplate()} `:t` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),this.month===1?(this.month=12,this.year--):--this.month,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){!e.shiftKey||e.key!==`Tab`||(e.preventDefault(),r(this,`kuc:calendar-header-previous-shifttab`))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),this.month===12?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){let e={value:`${this.year}-${this.month}`};r(this,`kuc:calendar-header-change`,e)}},u([a({type:String,attribute:`lang`,reflect:!0})],S.prototype,`language`,void 0),u([a({type:Number,hasChanged(e){return b(e)}})],S.prototype,`month`,void 0),u([a({type:Number,hasChanged(e){return x(e)}})],S.prototype,`year`,void 0),u([d(`.kuc-base-datetime-calendar-header__month`)],S.prototype,`_baseDateTimeHeaderMonthEl`,void 0),u([d(`.kuc-base-datetime-calendar-header__year`)],S.prototype,`_baseDateTimeHeaderYearEl`,void 0),u([d(`.kuc-base-datetime-header-month__listbox`)],S.prototype,`_listBoxMonthEl`,void 0),u([d(`.kuc-base-datetime-header-year__listbox`)],S.prototype,`_listBoxYearEl`,void 0),window.customElements.get(`kuc-base-datetime-calendar-header`)||(o(v),window.customElements.define(`kuc-base-datetime-calendar-header`,S))}));export{C as t};