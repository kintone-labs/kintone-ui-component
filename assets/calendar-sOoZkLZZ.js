import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{g as p,v as m}from"./utils-BITFIerI.js";import{t as h}from"./body-DCvj0iMC.js";import{t as g}from"./footer-ioL8AsF4.js";import{t as _}from"./header-Dc7kvE2Y.js";var v,y=e((()=>{v=`
.kuc-base-datetime-calendar__group {
  display: inline-block;
  box-sizing: border-box;
  width: 336px;
  padding: 32px 32px 24px;
  background: #ffffff;
  text-align: center;
  font-size: 13px;
}
`})),b,x=e((()=>{n(),i(),u(),m(),_(),g(),y(),c(),h(),b=class extends l{constructor(...e){super(...e),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return t`
      <div
        class="kuc-base-datetime-calendar__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header>
        <kuc-base-datetime-calendar-body
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body>
        <kuc-base-datetime-calendar-footer
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer>
      </div>
    `}async updated(e){await this.updateComplete,super.updated(e)}focusActiveDate(){let e=this.querySelector(`kuc-base-datetime-calendar-body`);e&&e.focusActiveDate()}repositionHeaderListboxes(){this._monthEl?.repositionListBox(),this._yearEl?.repositionListBox()}_handleKeyDownCalendarGroup(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),r(this,`kuc:calendar-escape`,{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_handleCalendarBodyChangeDate(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=p().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}},d([o({type:String,attribute:`lang`,reflect:!0})],b.prototype,`language`,void 0),d([o({type:String,reflect:!0})],b.prototype,`value`,void 0),d([f(`.kuc-base-datetime-calendar-header__month`)],b.prototype,`_monthEl`,void 0),d([f(`.kuc-base-datetime-calendar-header__year`)],b.prototype,`_yearEl`,void 0),d([f(`.kuc-base-datetime-header-month__listbox`)],b.prototype,`_listBoxMonthEl`,void 0),d([f(`.kuc-base-datetime-header-year__listbox`)],b.prototype,`_listBoxYearEl`,void 0),d([a()],b.prototype,`_month`,void 0),d([a()],b.prototype,`_year`,void 0),window.customElements.get(`kuc-base-datetime-calendar`)||(s(v),window.customElements.define(`kuc-base-datetime-calendar`,b))}));export{x as t};