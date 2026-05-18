import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{n as p,o as m,r as h,t as g}from"./converter-BYYAaneI.js";import{j as _,w as v}from"./utils-BITFIerI.js";import{t as y}from"./error-BtvpQcD5.js";import{t as b}from"./label-D4AWTD2g.js";import{f as x,o as S,r as C,t as w}from"./validator-d05NeqaQ.js";import{t as T}from"./date-qgwo-BNl.js";var E,D=e((()=>{E=`
kuc-date-picker,
kuc-date-picker *,
kuc-date-picker:lang(en),
kuc-date-picker:lang(en) * {
  font-family: sans-serif;
}
kuc-date-picker:lang(ja),
kuc-date-picker:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-date-picker:lang(zh),
kuc-date-picker:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-date-picker:lang(zh-TW),
kuc-date-picker:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-date-picker:lang(es),
kuc-date-picker:lang(es) * {
  font-family: sans-serif;
}
kuc-date-picker {
  font-size: 14px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  max-width: var(--kuc-date-picker-input-width, 100px);
  width: var(--kuc-date-picker-input-width, 100px);
  line-height: 1.5;
}
kuc-date-picker[hidden] {
  display: none;
}
.kuc-date-picker__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-date-picker__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-date-picker__group__label[hidden] {
  display: none;
}
.kuc-date-picker__group input[type=text].kuc-base-date__input {
  width: var(--kuc-date-picker-input-width, 100px);
  height: var(--kuc-date-picker-input-height, 40px);
  padding: 0px;
  text-align: center;
  color: var(--kuc-date-picker-input-color);
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: var(--kuc-date-picker-input-font-size, 14px);
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-date-picker__group kuc-base-date {
  display: inline-flex;
}

.kuc-date-picker__group input[type=text].kuc-base-date__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-date-picker__group input[type=text].kuc-base-date__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: var(--kuc-date-picker-input-color, #333333);
}
.kuc-date-picker__group input[type=text].kuc-base-date__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`})),O,k,A=e((()=>{n(),i(),p(),_(),y(),u(),b(),w(),T(),D(),s(),(()=>{if(O=window.customElements.get(`kuc-date-picker`),O)return;class e extends l{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._errorFormat=``,this._errorText=``,this._inputValue=``,this._invalidValue=``,this._valueConverted=``,this._GUID=c();let t=x(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:typeof this.value!=`string`||!S(this.value)||(this._valueConverted=g(this.value),this._valueConverted&&!C(this._valueConverted))?(this.throwErrorAfterUpdateComplete(v.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&(this.value===void 0?this._inputValue=this._invalidValue:(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat=``)),this._updateErrorText()}render(){return t`
        <div class="kuc-date-picker__group">
          <label
            class="kuc-date-picker__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </label>
          <kuc-base-date
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==``}"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:base-date-change="${this._handleDateChange}"
          >
          </kuc-base-date>
          <kuc-base-error
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error>
        </div>
      `}updated(){this._invalidValue=``}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error=``,t.value=void 0):(this._errorFormat=``,this.value=e.detail.value===void 0?``:e.detail.value,t.value=this.value),this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){r(this,`change`,e)}}d([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),d([a({type:String})],e.prototype,`error`,void 0),d([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),d([a({type:String})],e.prototype,`label`,void 0),d([a({type:Boolean})],e.prototype,`disabled`,void 0),d([a({type:Boolean})],e.prototype,`requiredIcon`,void 0),d([a({type:String,attribute:`lang`,reflect:!0,converter:h})],e.prototype,`language`,void 0),d([a({type:String})],e.prototype,`value`,void 0),d([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:m})],e.prototype,`visible`,void 0),d([f(`.kuc-base-date__input`)],e.prototype,`_dateInput`,void 0),window.customElements.define(`kuc-date-picker`,e),o(E),O=e})(),k=O}));export{A as n,k as t};