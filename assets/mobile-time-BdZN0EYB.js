import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{c as p,l as m,o as h,p as g,r as _,v}from"./utils-BITFIerI.js";import{f as y,h as b,t as x}from"./validator-d05NeqaQ.js";var S,C=e((()=>{S=`
kuc-base-mobile-time,
kuc-base-mobile-time * {
  font-size: 13px;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

kuc-base-mobile-time:lang(zh),
kuc-base-mobile-time:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}

kuc-base-mobile-time:lang(zh-TW),
kuc-base-mobile-time:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}

kuc-base-mobile-time:lang(es),
kuc-base-mobile-time:lang(es) * {
  font-family: sans-serif;
}

kuc-base-mobile-time {
  width: 100%;
  display: inline-block;
  vertical-align: top;
}

kuc-base-mobile-time[hidden] {
  display: none;
}

.kuc-base-mobile-time__group {
  padding: 0;
  margin: 0;
  height: 31.28px;
  border: 1px solid #b3b3b3;
  border-radius: 5.2px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;
}

.kuc-base-mobile-time__group--required {
  border-color: #cf4a38;
}

.kuc-base-mobile-time__group__hours {
  padding: 5.148px 7.722px;
}

.kuc-base-mobile-time__group__minutes {
  padding: 5.148px 7.722px;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}

.kuc-base-mobile-time__group__hours,
.kuc-base-mobile-time__group__minutes {
  font-size: 99%;
  height: 100%;
  color: #000000;
  border: none;
  border-radius: 5.148px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
}

.kuc-base-mobile-time__group__colon {
  color: #000000;
}

.kuc-base-mobile-time__group__hours:disabled
+ .kuc-base-mobile-time__group__colon {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time__group--disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  background-color: #d5d7d9;
  opacity: 1;
}

.kuc-base-mobile-time__group__hours:disabled,
.kuc-base-mobile-time__group__minutes:disabled {
  color: #999999;
  -webkit-text-fill-color: #999999;
  opacity: 1;
}

.kuc-base-mobile-time__group__hours:focus {
  outline: none;
}

.kuc-base-mobile-time__group__minutes:focus {
  outline: none;
}
`})),w,T=e((()=>{n(),i(),v(),u(),x(),C(),c(),w=class extends l{constructor(e){super(),this.guid=``,this.language=`en`,this.value=``,this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours=``,this._minutes=``,this._suffix=``,this._locale=g(`en`);let t=y(e);Object.assign(this,t)}update(e){e.has(`language`)&&(this._locale=g(this.language)),e.has(`hour12`)&&(this._hourOptions=p(this.hour12)),e.has(`_timeStep`)&&(this._minuteOptions=m(this._timeStep)),super.update(e)}render(){return t`
      <fieldset
        class="kuc-base-mobile-time__group${this.disabled?` kuc-base-mobile-time__group--disabled`:``}${this.required?` kuc-base-mobile-time__group--required`:``}"
        aria-label="label-text"
      >
        <select
          class="kuc-base-mobile-time__group__hours"
          aria-label="Hour"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time__group__colon">:</span>
        <select
          class="kuc-base-mobile-time__group__minutes"
          aria-label="Minute"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeMinutes}"
        >
          <option value selected></option>
          ${this._getOptionsMinuteTemplate()}
        </select>
      </fieldset>
    `}updated(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}_updateInputValue(){let e=h(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||``,this._setValueToInput(e)}_setValueToInput(e){if(this._minutesEl.value=e.minutes,e.suffix){this._hoursEl.value=e.suffix+` `+e.hours;return}this._hoursEl.value=e.hours}_handleChangeMinutes(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString();this._minutes=e.target.value;let n=this._getTimeValueString();this.value=n,this._dispatchEventTimeChange(n,t)}_handleChangeHours(e){e.preventDefault(),e.stopPropagation();let t=this._getTimeValueString(),n=e.target.value.split(` `);n.length===2?(this._hours=n[1],this._suffix=n[0]):(this._hours=n[0],this._suffix=``);let r=this._getTimeValueString();this.value=r,this._dispatchEventTimeChange(r,t)}_getTimeValueString(){let e=`${this._hours}:${this._minutes}`;return this._suffix?_(`${e} ${this._suffix}`):_(e)}_dispatchEventTimeChange(e,t){let n=e===`:`?``:e,i={value:n,oldValue:t===`:`?``:t};i.error=b(n)?``:this._locale.INVALID_TIME_FORMAT,r(this,`kuc:base-mobile-time-change`,i)}_getOptionsMinuteTemplate(){return this._minuteOptions.map(e=>t` <option value="${e.value}">${e.label}</option> `)}_getOptionsHourTemplate(){return this._hourOptions.map(e=>t` <option value="${e.value}">${e.label}</option> `)}},d([o({type:String})],w.prototype,`guid`,void 0),d([o({type:String,attribute:`lang`,reflect:!0})],w.prototype,`language`,void 0),d([o({type:String})],w.prototype,`value`,void 0),d([o({type:Boolean})],w.prototype,`disabled`,void 0),d([o({type:Boolean})],w.prototype,`hour12`,void 0),d([o({type:Boolean})],w.prototype,`required`,void 0),d([a()],w.prototype,`_timeStep`,void 0),d([a()],w.prototype,`_hours`,void 0),d([a()],w.prototype,`_minutes`,void 0),d([a()],w.prototype,`_suffix`,void 0),d([a()],w.prototype,`_hourOptions`,void 0),d([a()],w.prototype,`_minuteOptions`,void 0),d([f(`.kuc-base-mobile-time__group__hours`)],w.prototype,`_hoursEl`,void 0),d([f(`.kuc-base-mobile-time__group__minutes`)],w.prototype,`_minutesEl`,void 0),window.customElements.get(`kuc-base-mobile-time`)||(s(S),window.customElements.define(`kuc-base-mobile-time`,w))}));export{T as t};