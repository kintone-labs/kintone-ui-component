import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./decorate-33sGx9Ox.js";import{i as p,n as m,o as h,r as g}from"./converter-BYYAaneI.js";import{j as _,w as v}from"./utils-BITFIerI.js";import{f as y,h as b,t as x}from"./validator-d05NeqaQ.js";import{t as S}from"./mobile-time-BdZN0EYB.js";import{t as C}from"./mobile-error-E2pOXAJn.js";import{t as w}from"./mobile-label-D17Mc1rx.js";var T,E=e((()=>{T=`
kuc-mobile-time-picker,
kuc-mobile-time-picker * {
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
  "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-time-picker:lang(zh),
kuc-mobile-time-picker:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif;
}
kuc-mobile-time-picker:lang(zh-TW),
kuc-mobile-time-picker:lang(zh-TW) * {
  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,
  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
  Verdana, sans-serif
}
kuc-mobile-time-picker:lang(es),
kuc-mobile-time-picker:lang(es) * {
  font-family: sans-serif;
}
kuc-mobile-time-picker {
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-time-picker[hidden] {
  display: none;
}
.kuc-mobile-time-picker__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  margin: 0 0 4px 0;
  white-space: nowrap;
}
.kuc-mobile-time-picker__group__label[hidden] {
  display: none;
}
.kuc-base-mobile-time__group__wrapper {
  padding-left: 0.5em;
  max-width: 10px;
}
`})),D,O=e((()=>{n(),i(),m(),_(),d(),x(),E(),C(),S(),w(),c(),(()=>{if(D=window.customElements.get(`kuc-mobile-time-picker`),D)return;class e extends u{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue=``,this._errorFormat=``,this._isSelectError=!1,this._GUID=l();let t=y(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``||b(this.value)?!0:(this.throwErrorAfterUpdateComplete(v.VALUE),!1)}willUpdate(){this.value===void 0||this.value===``||(this.value=p(this.value))}update(e){e.has(`value`)&&!this._isSelectError&&(this.value===void 0?this._inputValue=``:this._inputValue=this.value||``,this._errorFormat=``),super.update(e)}render(){return t`
        <div class="kuc-mobile-time-picker__group">
          <label
            class="kuc-mobile-time-picker__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label
              .guid="${this._GUID}"
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label>
          </label>
          <div class="kuc-base-mobile-time__group__wrapper">
            <kuc-base-mobile-time
              .value="${this._inputValue}"
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
            .text="${this._errorFormat||this.error}"
            ariaLive="assertive"
          ></kuc-base-mobile-error>
        </div>
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};if(this._inputValue=e.detail.value,e.detail.error){this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,t.value=void 0,this.error=``,r(this,`change`,t);return}this._isSelectError=!1,this._errorFormat=``,this.value=e.detail.value,r(this,`change`,t)}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}f([o({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),f([o({type:String})],e.prototype,`error`,void 0),f([o({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),f([o({type:String})],e.prototype,`label`,void 0),f([o({type:String,attribute:`lang`,reflect:!0,converter:g})],e.prototype,`language`,void 0),f([o({type:String,hasChanged(e,t){return(e===``||e===void 0)&&e===t?!0:e!==t}})],e.prototype,`value`,void 0),f([o({type:Boolean})],e.prototype,`disabled`,void 0),f([o({type:Boolean})],e.prototype,`hour12`,void 0),f([o({type:Boolean})],e.prototype,`requiredIcon`,void 0),f([o({type:Boolean,attribute:`hidden`,reflect:!0,converter:h})],e.prototype,`visible`,void 0),f([a()],e.prototype,`_inputValue`,void 0),f([a()],e.prototype,`_errorFormat`,void 0),window.customElements.define(`kuc-mobile-time-picker`,e),s(T),D=e})()})),k,A,j,M,N,P;e((()=>{n(),O(),k={title:`mobile/time-picker`,argTypes:{className:{name:`className`},error:{name:`error`},id:{name:`id`},label:{name:`label`},language:{name:`language`,options:[`auto`,`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}},requiredIcon:{name:`requiredIcon`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},A=e=>t`
  <kuc-mobile-time-picker
    .className="${e.className}"
    .error="${e.error}"
    .id="${e.id}"
    .label="${e.label}"
    .value="${e.value}"
    .disabled="${e.disabled}"
    .hour12="${e.hour12}"
    .requiredIcon="${e.requiredIcon}"
    .visible="${e.visible}"
    .language="${e.language}"
  ></kuc-mobile-time-picker>
`,j=A.bind({}),j.args={className:`mobile-time-picker-class`,error:``,id:`mobile-time-picker-id`,label:`Mobile Time Picker Label`,value:`13:15`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0,language:`auto`},M=A.bind({}),M.args={className:`mobile-time-picker-class`,error:``,id:`mobile-time-picker-id`,label:`Mobile Time Picker Label`,value:`13:15`,disabled:!1,hour12:!0,requiredIcon:!1,visible:!0,language:`auto`},N=A.bind({}),N.args={className:`mobile-time-picker-class`,error:`Mobile TimePicker error`,id:`mobile-time-picker-id`,label:`Mobile Time Picker Label`,value:`13:15`,disabled:!1,hour12:!1,requiredIcon:!1,visible:!0,language:`auto`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => html\`
  <kuc-mobile-time-picker
    .className="\${args.className}"
    .error="\${args.error}"
    .id="\${args.id}"
    .label="\${args.label}"
    .value="\${args.value}"
    .disabled="\${args.disabled}"
    .hour12="\${args.hour12}"
    .requiredIcon="\${args.requiredIcon}"
    .visible="\${args.visible}"
    .language="\${args.language}"
  ></kuc-mobile-time-picker>
\``,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => html\`
  <kuc-mobile-time-picker
    .className="\${args.className}"
    .error="\${args.error}"
    .id="\${args.id}"
    .label="\${args.label}"
    .value="\${args.value}"
    .disabled="\${args.disabled}"
    .hour12="\${args.hour12}"
    .requiredIcon="\${args.requiredIcon}"
    .visible="\${args.visible}"
    .language="\${args.language}"
  ></kuc-mobile-time-picker>
\``,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => html\`
  <kuc-mobile-time-picker
    .className="\${args.className}"
    .error="\${args.error}"
    .id="\${args.id}"
    .label="\${args.label}"
    .value="\${args.value}"
    .disabled="\${args.disabled}"
    .hour12="\${args.hour12}"
    .requiredIcon="\${args.requiredIcon}"
    .visible="\${args.visible}"
    .language="\${args.language}"
  ></kuc-mobile-time-picker>
\``,...N.parameters?.docs?.source}}},P=[`BaseHour24`,`BaseHour12`,`BaseError`]}))();export{N as BaseError,M as BaseHour12,j as BaseHour24,P as __namedExportsOrder,k as default};