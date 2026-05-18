import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{c as r,d as i,f as a,i as o,n as s,r as c,s as l,t as u}from"./decorate-33sGx9Ox.js";import{g as d,v as f}from"./utils-BITFIerI.js";import{t as p}from"./body--8lAjohs.js";import{t as m}from"./footer-BshUdlfK.js";import{t as h}from"./header-r8232DFR.js";var g,_=e((()=>{g=`
.kuc-base-mobile-datetime-calendar__group {
    display: inline-block;
    box-sizing: border-box;
    width: 290px;
    padding: 0 10px;
    background: #ffffff;
    text-align: center;
    font-size: 13px;
    border: 1px solid #d8d8d8;
}
`})),v,y=e((()=>{n(),r(),f(),l(),h(),p(),m(),_(),s(),v=class extends c{constructor(...e){super(...e),this.language=`en`,this.value=``,this._month=1,this._year=new Date().getFullYear()}update(e){e.has(`value`)&&this._updateValue(),super.update(e)}render(){return t`
      <div
        class="kuc-base-mobile-datetime-calendar__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
      >
        <kuc-base-mobile-datetime-calendar-header
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:mobile-calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-mobile-datetime-calendar-header>
        <kuc-base-mobile-datetime-calendar-body
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-body>
        <kuc-base-mobile-datetime-calendar-footer
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-footer>
      </div>
    `}updated(e){super.updated(e)}_handleClickCalendarGroup(e){e.stopPropagation()}_handleCalendarHeaderChange(e){let{year:t,month:n}=this._separateValue(e.detail.value);this._year=t,this._month=n}_updateValue(){this.value===``&&(this.value=d().slice(0,7)+`-01`);let{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){let t=e.split(`-`);return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}},u([a({type:String,attribute:`lang`,reflect:!0})],v.prototype,`language`,void 0),u([a({type:String,reflect:!0})],v.prototype,`value`,void 0),u([i()],v.prototype,`_month`,void 0),u([i()],v.prototype,`_year`,void 0),window.customElements.get(`kuc-base-mobile-datetime-calendar`)||(o(g),window.customElements.define(`kuc-base-mobile-datetime-calendar`,v))}));export{y as t};