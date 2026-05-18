import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{d as p,p as m,v as h,x as g}from"./utils-BITFIerI.js";var _,v=e((()=>{_=`
kuc-base-datetime-calendar-body,
kuc-base-datetime-calendar-body *,
kuc-base-datetime-calendar-body:lang(en),
kuc-base-datetime-calendar-body:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-body:lang(ja),
kuc-base-datetime-calendar-body:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-body:lang(zh),
kuc-base-datetime-calendar-body:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-body:lang(zh-TW),
kuc-base-datetime-calendar-body:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-body:lang(es),
kuc-base-datetime-calendar-body:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-calendar-body__table,
.kuc-base-datetime-calendar-body__table tr {
  border-collapse: separate;
  border-spacing: 0;
}
.kuc-base-datetime-calendar-body__table__date,
.kuc-base-datetime-calendar-body__table__date--selected {
  border-spacing: 1px;
  padding: 0px;
  border: 1px solid #ffffff;
}
.kuc-base-datetime-calendar-body__table__header {
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
}
:lang(ja) th.kuc-base-datetime-calendar-body__table__header {
  font-weight: 700;
}
:lang(es) th.kuc-base-datetime-calendar-body__table__header {
  text-transform: revert;
}
.kuc-base-datetime-calendar-body__table__date--selected,
.kuc-base-datetime-calendar-body__table__date,
.kuc-base-datetime-calendar-body__table__header {
  box-sizing: border-box;
  padding: 8px 0;
  width: 36px;
  height: 31px;
  border: 1px solid #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
}
.kuc-base-datetime-calendar-body__table__header:nth-child(1),
.kuc-base-datetime-calendar-body__table__header:nth-child(7) {
  color: #d4d7d7;
}
.kuc-base-datetime-calendar-body__table__date:focus,
.kuc-base-datetime-calendar-body__table__date--selected:focus {
  outline: none;
}
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button:hover {
  color: #000000;
}
.kuc-base-datetime-calendar-body__table__date--selected {
  border-color: #3498db;
}
.kuc-base-datetime-calendar-body__table__date--selected--today,
.kuc-base-datetime-calendar-body__table__date--today {
  color: #ffffff;
  background: #888888;
}
.kuc-base-datetime-calendar-body__table__date--today:hover {
  color: #333333;
}
.kuc-base-datetime-calendar-body__table__date--other-month,
.kuc-base-datetime-calendar-body__table__date--other-month:hover {
  color: #d4d7d7;
}
`})),y,b=e((()=>{n(),i(),u(),h(),v(),c(),y=class extends l{constructor(){super(),this.month=1,this.year=2021,this.language=`en`,this.value=``,this._month=1,this._year=2021,this._locale=m(`en`),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`keydown`,this._handleKeyDownDocument)},1)}disconnectedCallback(){document.removeEventListener(`keydown`,this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach((e,t)=>{t===`language`&&(this._locale=m(this.language))}),e.has(`month`)&&(this._month=this.month),e.has(`year`)&&(this._year=this.year),e.has(`value`)){let{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return t`
      <table class="kuc-base-datetime-calendar-body__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has(`value`)&&this.focusActiveDate(),super.update(e)}focusActiveDate(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}_handleKeyDownDocument(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),r(this,`kuc:calendar-body-blur`,{}))}_handleClickDate(e){e.preventDefault(),e.stopPropagation();let t=e.target;t.setAttribute(`aria-selected`,`true`);let n=t.getAttribute(`data-date`)||``;this._dispatchClickEvent(n)}_handleKeyDownDate(e){let t=!1;switch(e.key){case`Up`:case`ArrowUp`:t=!0,this._moveToDate(-7);break;case`Down`:case`ArrowDown`:t=!0,this._moveToDate(7);break;case`Left`:case`ArrowLeft`:t=!0,this._moveToDate(-1);break;case`Right`:case`ArrowRight`:t=!0,this._moveToDate(1);break;case` `:case`Enter`:{t=!0;let e=this._getSelectedValue();this._dispatchClickEvent(e);break}default:break}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){let t={oldValue:this.value,value:e};r(this,`kuc:calendar-body-click-date`,t),this.value=e}_isToday(e){let t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this.value,n=this._getSelectedValue(),{day:i}=this._separateDateValue(n);t=`${this._year}-${g(this._month)}-${i}`;let a=new Date(`${t||this._getValueItemFocused()}T00:00:00`);if(isNaN(a.getTime()))return;a.setDate(a.getDate()+e);let o=this._getDateString(a),s=t;this.value=o,r(this,`kuc:calendar-body-change-date`,{oldValue:s,value:o})}_separateDateValue(e=this.value){let t=e.split(`-`);return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||``:this._selectedItem&&this._selectedItem.getAttribute(`data-date`)||``}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute(`data-date`)||``}_getDateClass(e,t){return t?this._isToday(e)?` kuc-base-datetime-calendar-body__table__date--selected--today`:``:this._isToday(e)?` kuc-base-datetime-calendar-body__table__date--selected--today`:` kuc-base-datetime-calendar-body__table__date--other-month`}_getDateString(e=new Date){return`${e.getFullYear()}-${g(e.getMonth()+1)}-${g(e.getDate())}`}_isSameDayOfMoment(e){let t=parseInt(e[1],10),n=parseInt(e[2],10),r=parseInt(e[0],10),i=new Date().getDate();if(!this.value.split(`-`)[2])return!1;if(this.value&&(i=new Date(`${this.value}T00:00:00`).getDate()),i===n&&t===this._month)return!0;let a=new Date(r,this._month,0).getDate();return i>a&&a===n&&t===this._month}_getHeaderItemsTemplate(){return t`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map(e=>t`
              <th
                class="kuc-base-datetime-calendar-body__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `)}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){let e=p(this._year,this._month-1),n=this._locale.MONTH_SELECT[this._month-1];return t`
      <tbody>
        ${e.map(e=>t`
            <tr>
              ${e.map(e=>{let r=e.text.split(`-`),i=this._isSameDayOfMoment(r),a=parseInt(r[1],10)===this._month,o=(this.value===e.attr||i)&&a;return t`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body__table__date${o?`--selected`:``}${this._getDateClass(r,a)}"
                    aria-selected="${this.value===e.attr}"
                    tabindex="${o?`0`:`-1`}"
                    aria-current="${this._isToday(r)?`date`:!1}"
                    aria-label="${r[2]} ${n}"
                    data-date="${e.attr}"
                    @click="${this._handleClickDate}"
                    @keydown="${this._handleKeyDownDate}"
                  >
                    ${r[2]||``}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    `}},d([o({type:Number})],y.prototype,`month`,void 0),d([o({type:Number})],y.prototype,`year`,void 0),d([o({type:String,attribute:`lang`,reflect:!0})],y.prototype,`language`,void 0),d([o({type:String,reflect:!0})],y.prototype,`value`,void 0),d([a()],y.prototype,`_month`,void 0),d([a()],y.prototype,`_year`,void 0),d([f(`.kuc-base-datetime-calendar-body__table__date--selected[aria-selected="true"]`)],y.prototype,`_selectedItem`,void 0),d([f(`.kuc-base-datetime-calendar-body__table__date--selected`)],y.prototype,`_highlightItem`,void 0),d([f(`.kuc-base-datetime-calendar-body__table__date--selected[tabindex="0"]`)],y.prototype,`_focusedItem`,void 0),window.customElements.get(`kuc-base-datetime-calendar-body`)||(s(_),window.customElements.define(`kuc-base-datetime-calendar-body`,y))}));export{b as t};