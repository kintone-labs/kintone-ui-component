import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{i as p,n as m,o as h,r as g,t as _}from"./converter-BYYAaneI.js";import{C as v,D as y,E as b,O as x,T as S,j as C,k as w,v as T,w as E}from"./utils-BITFIerI.js";import{t as D}from"./error-BtvpQcD5.js";import{t as O}from"./label-D4AWTD2g.js";import{a as k,f as A,h as j,m as M,r as N,t as P,u as F}from"./validator-d05NeqaQ.js";import{t as I}from"./date-qgwo-BNl.js";import{t as L}from"./time-DxVz01-Q.js";var R,z=e((()=>{R=`
kuc-datetime-picker,
kuc-datetime-picker *,
kuc-datetime-picker:lang(en),
kuc-datetime-picker:lang(en) * {
  font-family: sans-serif;
}
kuc-datetime-picker:lang(ja),
kuc-datetime-picker:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-datetime-picker:lang(zh),
kuc-datetime-picker:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-datetime-picker:lang(zh-TW),
kuc-datetime-picker:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-datetime-picker:lang(es),
kuc-datetime-picker:lang(es) * {
  font-family: sans-serif;
}
kuc-datetime-picker {
  font-size: 14px;
  display: inline-table;
  vertical-align: top;
  line-height: 1.5;
  max-width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
kuc-datetime-picker[hidden] {
  display: none;
}
.kuc-datetime-picker__group {
  border: none;
  padding: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px;
}
.kuc-datetime-picker__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-datetime-picker__group__label[hidden] {
  display: none;
}
.kuc-datetime-picker__group__inputs {
  display: flex;
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
.kuc-datetime-picker__group__inputs--time {
  position: relative;
}
.kuc-datetime-picker__group input[type=text].kuc-base-date__input {
  width: var(--kuc-date-time-picker-date-input-width, 100px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
}
.kuc-datetime-picker__group .kuc-base-time__group {
  max-width: var(--kuc-date-time-picker-time-input-width, 85px);
  width: var(--kuc-date-time-picker-time-input-width, 85px);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
}
.kuc-datetime-picker__group .kuc-base-time__group input[type=text].kuc-base-time__group__hours,
.kuc-datetime-picker__group .kuc-base-time__group input[type=text].kuc-base-time__group__minutes,
.kuc-datetime-picker__group .kuc-base-time__group input.kuc-base-time__group__suffix,
.kuc-datetime-picker__group .kuc-base-time__group--focus  {
  color: var(--kuc-date-time-picker-input-color, #333333);
}
`})),B,V=e((()=>{n(),i(),m(),C(),T(),I(),L(),D(),u(),O(),P(),z(),s(),(()=>{if(B=window.customElements.get(`kuc-datetime-picker`),B)return;class e extends l{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorText=``,this._dateConverted=``,this._changeDateByUI=!1,this._changeTimeByUI=!1,this._inputMax=``,this._inputMin=``,this._timeConverted=``,this._errorInvalidTime=``,this._inputTimeStep=30,this._GUID=c();let t=A(e);Object.assign(this,t)}shouldUpdate(e){return(e.has(`max`)||e.has(`min`))&&!this._checkAndUpdateMaxMinProperty()||e.has(`timeStep`)&&!this._checkAndUpdateTimeStepProperty()?!1:this.value===void 0||this.value===``?!0:typeof this.value!=`string`||(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=_(this._dateAndTime.date),!(k(this._dateAndTime.date,this._dateAndTime.time)&&N(this._dateConverted)))?(this.throwErrorAfterUpdateComplete(E.VALUE),!1):(this._timeConverted=p(this._dateAndTime.time.slice(0,5)),e.has(`value`)&&(v(this._timeConverted,this._inputMin)<0||v(this._inputMax,this._timeConverted)<0)?(this.throwErrorAfterUpdateComplete(w),!1):!0)}willUpdate(e){if(this._changeDateByUI||this._changeTimeByUI){this._updateValueChangeByUI();return}this._updateValueWhenSetter()}_checkAndUpdateMaxMinProperty(){let e=this._inputMin,t=this._inputMax;if(this.max===void 0||this.max===``)t=b;else{if(!j(this.max))return this.throwErrorAfterUpdateComplete(E.MAX),!1;t=this.max=p(this.max)}if(this.min===void 0||this.min===``)e=y;else{if(!j(this.min))return this.throwErrorAfterUpdateComplete(E.MIN),!1;e=this.min=p(this.min)}return v(t,e)<0?(this.throwErrorAfterUpdateComplete(S),!1):(this._inputMin=e,this._inputMax=t,!0)}_checkAndUpdateTimeStepProperty(){return F(this.timeStep)?M(this.timeStep,this._inputMax,this._inputMin)?(this._inputTimeStep=this.timeStep,!0):(this.throwErrorAfterUpdateComplete(E.TIME_STEP),!1):(this.throwErrorAfterUpdateComplete(x),!1)}_updateValueChangeByUI(){let e=this._validateDateTimeFormat();this.value=e?this.value:void 0,e&&!this._dateValue&&!this._timeValue&&(this.value=``);let t=!this._dateValue&&this._timeValue,n=this._dateValue&&!this._timeValue;if(t||n){this._errorText=this.error||this._errorFormat||this._errorInvalidTime;return}this._errorText=e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){let e=!!this._timeValue&&!this._dateValue,t=!!this._dateValue&&!this._timeValue;return!this._errorFormat&&!this._errorInvalidTime&&!e&&!t}_updateValueWhenSetter(){if(this._errorText=this.error,this.value===``||this.value===void 0){this._previousTimeValue=``,this._errorFormat=``,this._errorInvalidTime=``;return}this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&N(t)?p(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has(`value`)&&(this.value===void 0&&this._setUndefinedValue(),this.value===``&&this._setEmptyValue()),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalidTime=``),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI){this._dateValue=this._dateInput.value;return}this._dateValue=``,this._timeValue=``;return}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue=``,this._timeValue=``,this._previousTimeValue=``,this._previousDateValue=``,this._errorFormat=``,this._errorInvalidTime=``}render(){return t`
        <fieldset
          class="kuc-datetime-picker__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-datetime-picker__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </legend>
          <div class="kuc-datetime-picker__group__inputs">
            <kuc-base-date
              class="kuc-datetime-picker__group__inputs--date"
              .value="${this._dateValue}"
              .language="${this._getLanguage()}"
              .disabled="${this.disabled}"
              inputAriaLabel="date"
              @kuc:base-date-change="${this._handleDateChange}"
            ></kuc-base-date
            ><kuc-base-time
              class="kuc-datetime-picker__group__inputs--time"
              .value="${this._timeValue}"
              .hour12="${this.hour12}"
              .disabled="${this.disabled}"
              .timeStep="${this._inputTimeStep}"
              .min="${this._inputMin}"
              .max="${this._inputMax}"
              .language="${this._getLanguage()}"
              @kuc:base-time-change="${this._handleTimeChange}"
            ></kuc-base-time>
          </div>
          <kuc-base-error
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue=``,this._previousDateValue=``,this._changeDateByUI=!1,this._changeTimeByUI=!1}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=``):(t=e.detail.value,this._errorFormat=``),this._updateDateTimeValue(t,`date`)}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=``):this._errorInvalidTime=``,this._updateDateTimeValue(t,`time`)}_updateDateTimeValue(e,t){let n=this.value;t===`date`?this._dateValue=e||``:this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;let i=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString();this.value=this._errorFormat||this._errorInvalidTime?void 0:i,this._validateDateTimeFormat()&&!this._dateValue&&!this._timeValue&&(this.value=``);let a={value:this.value,oldValue:n,changedPart:t};r(this,`change`,a)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;let e=this.value.split(`:`);return e.length===3?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(e===``||e===void 0)return{date:``,time:``};let t=e.split(`T`),n=t[0],r=t[1];if(e.indexOf(`T`)===e.length-1||t.length>2)return{date:n,time:``};if(!r)return{date:n,time:y};let[i,a,o]=r.split(`:`);if(i===``||a===``||o===``)return{date:n,time:r};let s=`${i}:${a||`00`}`;return o?{date:n,time:`${s}:${o}`}:{date:n,time:s}}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}d([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),d([a({type:String})],e.prototype,`error`,void 0),d([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),d([a({type:String})],e.prototype,`label`,void 0),d([a({type:String,attribute:`lang`,reflect:!0,converter:g})],e.prototype,`language`,void 0),d([a({type:String})],e.prototype,`max`,void 0),d([a({type:String})],e.prototype,`min`,void 0),d([a({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t?!0:e!==t}})],e.prototype,`value`,void 0),d([a({type:Boolean})],e.prototype,`disabled`,void 0),d([a({type:Boolean})],e.prototype,`hour12`,void 0),d([a({type:Boolean})],e.prototype,`requiredIcon`,void 0),d([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:h})],e.prototype,`visible`,void 0),d([a({type:Number})],e.prototype,`timeStep`,void 0),d([f(`.kuc-base-date__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-datetime-picker`,e),o(R),B=e})()})),H,U,W,G,K,q,J,Y,X,Z;e((()=>{V(),n(),H={title:`desktop/datetime-picker`,argTypes:{className:{name:`className`},error:{name:`error`},id:{name:`id`},label:{name:`label`},language:{name:`language`,options:[`auto`,`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}},value:{name:`value`},requiredIcon:{name:`requiredIcon`},disabled:{name:`disabled`},hour12:{name:`hour12`},visible:{name:`visible`},timeStep:{name:`timeStep`},min:{name:`min`},max:{name:`max`}},parameters:{actions:{handles:[`change`]}}},U=e=>t`
    <kuc-datetime-picker
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
      .timeStep="${e.timeStep}"
      .min="${e.min}"
      .max="${e.max}"
      @change="${e=>{console.log(e)}}"
    ></kuc-datetime-picker>
  `,W=U.bind({}),W.args={className:`datetime-class`,error:`DateTimePicker error`,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!0,requiredIcon:!0,visible:!0,timeStep:60,min:`00:00`,max:`23:59`},G=U.bind({}),G.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!0,requiredIcon:!1,visible:!0,timeStep:30,min:`00:00`,max:`20:00`},K=U.bind({}),K.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0,timeStep:30,min:`00:00`,max:`20:00`},q=U.bind({}),q.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0,timeStep:60,min:`00:00`,max:`23:59`},J=U.bind({}),J.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`ja`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0,timeStep:60,min:`00:00`,max:`23:59`},Y=U.bind({}),Y.args={className:`datetime-class`,error:``,id:`datetime-id`,label:`Date and Time label`,language:`zh`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0,timeStep:60,min:`00:00`,max:`23:59`},X=U.bind({}),X.args={className:`datetime-class`,error:`Datetime error`,id:`datetime-id`,label:`Date and Time label`,language:`en`,value:`2021-02-28`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0,timeStep:30,min:`00:00`,max:`23:59`},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-datetime-picker
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
      .timeStep="\${args.timeStep}"
      .min="\${args.min}"
      .max="\${args.max}"
      @change="\${handleDateChange}"
    ></kuc-datetime-picker>
  \`;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-datetime-picker
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
      .timeStep="\${args.timeStep}"
      .min="\${args.min}"
      .max="\${args.max}"
      @change="\${handleDateChange}"
    ></kuc-datetime-picker>
  \`;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-datetime-picker
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
      .timeStep="\${args.timeStep}"
      .min="\${args.min}"
      .max="\${args.max}"
      @change="\${handleDateChange}"
    ></kuc-datetime-picker>
  \`;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-datetime-picker
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
      .timeStep="\${args.timeStep}"
      .min="\${args.min}"
      .max="\${args.max}"
      @change="\${handleDateChange}"
    ></kuc-datetime-picker>
  \`;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-datetime-picker
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
      .timeStep="\${args.timeStep}"
      .min="\${args.min}"
      .max="\${args.max}"
      @change="\${handleDateChange}"
    ></kuc-datetime-picker>
  \`;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-datetime-picker
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
      .timeStep="\${args.timeStep}"
      .min="\${args.min}"
      .max="\${args.max}"
      @change="\${handleDateChange}"
    ></kuc-datetime-picker>
  \`;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-datetime-picker
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
      .timeStep="\${args.timeStep}"
      .min="\${args.min}"
      .max="\${args.max}"
      @change="\${handleDateChange}"
    ></kuc-datetime-picker>
  \`;
}`,...X.parameters?.docs?.source}}},Z=[`Base`,`BaseHour12`,`BaseHour24`,`BaseLanguageEN`,`BaseLanguageJA`,`BaseLanguageZH`,`BaseError`]}))();export{W as Base,X as BaseError,G as BaseHour12,K as BaseHour24,q as BaseLanguageEN,J as BaseLanguageJA,Y as BaseLanguageZH,Z as __namedExportsOrder,H as default};