import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./decorate-33sGx9Ox.js";import{i as p,n as m,o as h,r as g,t as _}from"./converter-BYYAaneI.js";import{j as v,w as y}from"./utils-BITFIerI.js";import{a as b,f as x,r as S,t as C}from"./validator-d05NeqaQ.js";import{t as w}from"./mobile-date-B6ZVf6Hb.js";import{t as T}from"./mobile-time-BdZN0EYB.js";import{t as E}from"./mobile-error-E2pOXAJn.js";import{t as D}from"./mobile-label-D17Mc1rx.js";var O,k=e((()=>{O=`
kuc-mobile-datetime-picker,
kuc-mobile-datetime-picker * {
color: #333333;
font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-datetime-picker:lang(zh),
kuc-mobile-datetime-picker:lang(zh) * {
font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-datetime-picker:lang(zh-TW),
kuc-mobile-datetime-picker:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-datetime-picker:lang(es),
kuc-mobile-datetime-picker:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-datetime-picker {
font-size: 13px;
color: #333333;
display: inline-table;
vertical-align: top;
width: 100%;
}
kuc-mobile-datetime-picker[hidden] {
display: none;
}
.kuc-mobile-datetime-picker__group {
border: 0;
padding: 0;
}
.kuc-mobile-datetime-picker__group__label {
display: inline-block;
font-weight: bold;
line-height: 1.5;
padding: 0px;
white-space: nowrap;
margin: 0 0 4px 0;
}
.kuc-mobile-datetime-picker__group__label[hidden] {
display: none;
}
.kuc-mobile-datetime-picker__group__input {
display: flex;
align-items: center;
margin-right: 0.5em;
margin-left: 0.5em;
}
.kuc-mobile-datetime-picker__group__input--date {
width: 130px;
margin-right: 10px;
}
.kuc-mobile-datetime-picker__group__input--time {
max-width: 10px;
}
`})),A,j=e((()=>{n(),i(),m(),v(),d(),C(),w(),T(),E(),D(),k(),c(),(()=>{if(A=window.customElements.get(`kuc-mobile-datetime-picker`),A)return;class e extends u{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue=``,this._previousDateValue=``,this._dateValue=``,this._timeValue=``,this._errorFormat=``,this._errorText=``,this._GUID=l();let t=x(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=_(this._dateAndTime.date),!(b(this._dateAndTime.date,this._dateAndTime.time)&&S(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(y.VALUE),!1):!0}willUpdate(e){if(this._changeDateByUI||this._changeTimeByUI){this._updateValueAndErrorWhenUIChange();return}this._errorFormat=``,this._updateErrorText(),this._updateValueWhenSetter()}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){if(this._errorFormat=``,this.value===``||this.value===void 0){this._previousTimeValue=``;return}this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t,this._timeValue=this._dateValue&&S(t)?p(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){this.value=this._checkDateTimeFormat()?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!e&&!t}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;this._dateValue=``,this._timeValue=``;return}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:`00:00`};let[i,a,o]=r.split(`:`),s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}render(){return t`
        <fieldset
          class="kuc-mobile-datetime-picker__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-mobile-datetime-picker__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label>
          </legend>
          <div class="kuc-mobile-datetime-picker__group__input">
            <kuc-mobile-base-date
              class="kuc-mobile-datetime-picker__group__input--date"
              .disabled="${this.disabled}"
              .value="${this._dateValue}"
              .inputId="${this._GUID}"
              .inputAriaInvalid="${this.error!==``}"
              .required="${this.requiredIcon}"
              .language="${this._getLanguage()}"
              @kuc:mobile-base-date-change="${this._handleDateChange}"
            >
            </kuc-mobile-base-date>
            <kuc-base-mobile-time
              class="kuc-mobile-datetime-picker__group__input--time"
              .value="${this._timeValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time>
          </div>
          <kuc-base-mobile-error
            .guid="${this._GUID}"
            .text="${this._errorText}"
          >
          </kuc-base-mobile-error>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):t=e.detail.value,this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=this._timeValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):this._errorFormat=``,t=e.detail.value,this._updateDateTimeValue(t,`time`)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let i=this._errorFormat?void 0:this._getDateTimeString(),a=this._errorFormat?void 0:i;this.value=a,this.value=this._errorFormat?void 0:i,r(this,`change`,{value:a,oldValue:n,changedPart:t})}_getDateTimeString(){if(this._dateValue===``&&this._timeValue===``)return``;if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}f([o({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),f([o({type:String})],e.prototype,`error`,void 0),f([o({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),f([o({type:String})],e.prototype,`label`,void 0),f([o({type:String,attribute:`lang`,reflect:!0,converter:g})],e.prototype,`language`,void 0),f([o({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t?!0:e!==t}})],e.prototype,`value`,void 0),f([o({type:Boolean})],e.prototype,`disabled`,void 0),f([o({type:Boolean})],e.prototype,`hour12`,void 0),f([o({type:Boolean})],e.prototype,`requiredIcon`,void 0),f([o({type:Boolean,attribute:`hidden`,reflect:!0,converter:h})],e.prototype,`visible`,void 0),f([a()],e.prototype,`_dateValue`,void 0),f([a()],e.prototype,`_timeValue`,void 0),f([a()],e.prototype,`_errorFormat`,void 0),f([a()],e.prototype,`_errorText`,void 0),window.customElements.define(`kuc-mobile-datetime-picker`,e),s(O),A=e})()})),M,N,P,F,I,L,R,z,B,V;e((()=>{j(),n(),M={title:`mobile/datetime-picker`,argTypes:{language:{name:`language`,options:[`auto`,`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}}},parameters:{actions:{handles:[`change`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},N=e=>t`
    <kuc-mobile-datetime-picker
      .className="${e.className}"
      .error="${e.error}"
      .id="${e.id}"
      .label="${e.label}"
      .language="${e.language}"
      .value="${e.value}"
      .disabled="${e.disabled}"
      .hour12="${e.hour12}"
      .requiredIcon="${e.requiredIcon}"
      .visible="${e.visible}"
      @change="${e=>{console.log(e)}}"
    ></kuc-mobile-datetime-picker>
  `,P=N.bind({}),P.args={className:`datetime-class`,error:`DateTimePicker error`,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!0,requiredIcon:!0,visible:!0},F=N.bind({}),F.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!0,requiredIcon:!1,visible:!0},I=N.bind({}),I.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0},L=N.bind({}),L.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0},R=N.bind({}),R.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`ja`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0},z=N.bind({}),z.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`zh`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0},B=N.bind({}),B.args={className:`datetime-class`,error:`Datetime error`,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-datetime-picker
      .className="\${args.className}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .language="\${args.language}"
      .value="\${args.value}"
      .disabled="\${args.disabled}"
      .hour12="\${args.hour12}"
      .requiredIcon="\${args.requiredIcon}"
      .visible="\${args.visible}"
      @change="\${handleDateChange}"
    ></kuc-mobile-datetime-picker>
  \`;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-datetime-picker
      .className="\${args.className}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .language="\${args.language}"
      .value="\${args.value}"
      .disabled="\${args.disabled}"
      .hour12="\${args.hour12}"
      .requiredIcon="\${args.requiredIcon}"
      .visible="\${args.visible}"
      @change="\${handleDateChange}"
    ></kuc-mobile-datetime-picker>
  \`;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-datetime-picker
      .className="\${args.className}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .language="\${args.language}"
      .value="\${args.value}"
      .disabled="\${args.disabled}"
      .hour12="\${args.hour12}"
      .requiredIcon="\${args.requiredIcon}"
      .visible="\${args.visible}"
      @change="\${handleDateChange}"
    ></kuc-mobile-datetime-picker>
  \`;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-datetime-picker
      .className="\${args.className}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .language="\${args.language}"
      .value="\${args.value}"
      .disabled="\${args.disabled}"
      .hour12="\${args.hour12}"
      .requiredIcon="\${args.requiredIcon}"
      .visible="\${args.visible}"
      @change="\${handleDateChange}"
    ></kuc-mobile-datetime-picker>
  \`;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-datetime-picker
      .className="\${args.className}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .language="\${args.language}"
      .value="\${args.value}"
      .disabled="\${args.disabled}"
      .hour12="\${args.hour12}"
      .requiredIcon="\${args.requiredIcon}"
      .visible="\${args.visible}"
      @change="\${handleDateChange}"
    ></kuc-mobile-datetime-picker>
  \`;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-datetime-picker
      .className="\${args.className}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .language="\${args.language}"
      .value="\${args.value}"
      .disabled="\${args.disabled}"
      .hour12="\${args.hour12}"
      .requiredIcon="\${args.requiredIcon}"
      .visible="\${args.visible}"
      @change="\${handleDateChange}"
    ></kuc-mobile-datetime-picker>
  \`;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-datetime-picker
      .className="\${args.className}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .language="\${args.language}"
      .value="\${args.value}"
      .disabled="\${args.disabled}"
      .hour12="\${args.hour12}"
      .requiredIcon="\${args.requiredIcon}"
      .visible="\${args.visible}"
      @change="\${handleDateChange}"
    ></kuc-mobile-datetime-picker>
  \`;
}`,...B.parameters?.docs?.source}}},V=[`Base`,`BaseHour12`,`BaseHour24`,`BaseLanguageEN`,`BaseLanguageJA`,`BaseLanguageZH`,`BaseError`]}))();export{P as Base,B as BaseError,F as BaseHour12,I as BaseHour24,L as BaseLanguageEN,R as BaseLanguageJA,z as BaseLanguageZH,V as __namedExportsOrder,M as default};