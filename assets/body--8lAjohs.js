import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d}from"./decorate-33sGx9Ox.js";import{d as f,p,v as m}from"./utils-BITFIerI.js";var h,g=e((()=>{h=`
kuc-base-mobile-datetime-calendar-body,
kuc-base-mobile-datetime-calendar-body * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body:lang(zh),
kuc-base-mobile-datetime-calendar-body:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}

kuc-base-mobile-datetime-calendar-body:lang(zh-TW),
kuc-base-mobile-datetime-calendar-body:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}

kuc-base-mobile-datetime-calendar-body:lang(es),
kuc-base-mobile-datetime-calendar-body:lang(es) * {
    font-family: sans-serif;
}

.kuc-base-mobile-datetime-calendar-body__table,
.kuc-base-mobile-datetime-calendar-body__table tr {
    border-collapse: separate;
    border-spacing: 0;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected {
    border-spacing: 1px;
    padding: 0px;
}
.kuc-base-mobile-datetime-calendar-body__table__date {
    max-width: 40px;
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 1px solid #ffffff;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    color: #333333;
    font-size: 14px;
    font-weight: 400;
}
.kuc-base-mobile-datetime-calendar-body__table__date
    .kuc-base-mobile-datetime-calendar-body__table__date__button {
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    color: #333333;
}
.kuc-base-mobile-datetime-calendar-body__table__date,
.kuc-base-mobile-datetime-calendar-body__table__date--selected,
.kuc-base-mobile-datetime-calendar-body__table__header {
    box-sizing: border-box;
    height: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 400;
    font-size: 12px;
    color: #333333;
    padding: 0;
}
.kuc-base-mobile-datetime-calendar-body__table__date {
    font-size: 14px;
}
th.kuc-base-mobile-datetime-calendar-body__table__header {
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected
    .kuc-base-mobile-datetime-calendar-body__table__date__button,
.kuc-base-mobile-datetime-calendar-body__table__date
    .kuc-base-mobile-datetime-calendar-body__table__date__button,
.kuc-base-mobile-datetime-calendar-body__table__header {
    box-sizing: border-box;
    border: 1px solid #ffffff;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected
    .kuc-base-mobile-datetime-calendar-body__table__date__button,
.kuc-base-mobile-datetime-calendar-body__table__date
    .kuc-base-mobile-datetime-calendar-body__table__date__button {
    background: none;
    cursor: pointer;
    max-width: 40px;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected {
    border: 1px solid #206694;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected
    .kuc-base-mobile-datetime-calendar-body__table__date__button {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body__table__date
    .kuc-base-mobile-datetime-calendar-body__table__date__button:focus-visible {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body__table__date--today {
    color: #333333;
    background: #d8d8d8;
}
.kuc-base-mobile-datetime-calendar-body__table__date--other-month {
    color: #a5a5a5;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected:focus {
    outline: none;
}
`})),_,v=e((()=>{n(),i(),u(),m(),g(),c(),_=class extends l{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=p(`en`),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=p(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return t`
      <table class="kuc-base-mobile-datetime-calendar-body__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){r(this,`kuc:mobile-calendar-body-blur`,{})}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`);this._dispatchClickEvent(n)}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};r(this,`kuc:mobile-calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-mobile-datetime-calendar-body__table__date--today`:``:` kuc-base-mobile-datetime-calendar-body__table__date--other-month`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return t`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>t`
              <th
                class="kuc-base-mobile-datetime-calendar-body__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){let e=f(this._year,this._month-1),n=this._locale.MONTH_SELECT[this._month-1];return t`
      <tbody>
        ${e.map(e=>t`
            <tr>
              ${e.map(e=>{let r=e.text.split(`-`),i=this._isSameDayOfMoment(r),a=parseInt(r[1],10)===this._month,o=(this.value===e.attr||i)&&a;return t`
                  <td
                    role="gridcell"
                    tabindex="${o?0:-1}"
                    aria-selected="${this.value===e.attr}"
                    aria-current="${this._isToday(r)?`date`:!1}"
                    class="kuc-base-mobile-datetime-calendar-body__table__date${o?`--selected`:``}${this._getDateClass(r,a)}"
                    data-date="${e.attr}"
                    aria-label="${r[2]} ${n}"
                    @click="${this._handleClickDate}"
                  >
                    ${r[2]||``}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    `}},d([o({type:Number})],_.prototype,`month`,void 0),d([o({type:Number})],_.prototype,`year`,void 0),d([o({type:String,attribute:`lang`,reflect:!0})],_.prototype,`language`,void 0),d([o({type:String,reflect:!0})],_.prototype,`value`,void 0),d([a()],_.prototype,`_month`,void 0),d([a()],_.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar-body`)||(s(h),window.customElements.define(`kuc-base-mobile-datetime-calendar-body`,_))}));export{v as t};