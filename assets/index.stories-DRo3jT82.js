import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./decorate-33sGx9Ox.js";import{n as p,o as m,r as h,t as g}from"./converter-BYYAaneI.js";import{j as _,w as v}from"./utils-BITFIerI.js";import{f as y,o as b,r as x,t as S}from"./validator-d05NeqaQ.js";import{t as C}from"./mobile-date-B6ZVf6Hb.js";import{t as w}from"./mobile-error-E2pOXAJn.js";import{t as T}from"./mobile-label-D17Mc1rx.js";var E,D=e((()=>{E=`
kuc-mobile-date-picker,
kuc-mobile-date-picker * {
  color: #333333;
  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
kuc-mobile-date-picker:lang(zh),
kuc-mobile-date-picker:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-date-picker:lang(zh-TW),
kuc-mobile-date-picker:lang(zh-TW) * {
    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
    Verdana,sans-serif
}
kuc-mobile-date-picker:lang(es),
kuc-mobile-date-picker:lang(es) * {
    font-family: sans-serif;
}
kuc-mobile-date-picker {
  font-size: 13px;
  color: #333333;
  display: inline-table;
  vertical-align: top;
  width: 100%;
}
kuc-mobile-date-picker[hidden] {
  display: none;
}
.kuc-mobile-date-picker__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}
.kuc-mobile-date-picker__group__label {
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  padding: 0px;
  white-space: nowrap;
  margin: 0 0 4px 0;
}
.kuc-mobile-date-picker__group__base__date {
  width: 130px;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
.kuc-mobile-date-picker__group__label[hidden] {
  display: none;
}
.kuc-mobile-date-picker__group input.kuc-base-date__input {
  width: 100px;
  height: 40px;
  padding: 0px;
  text-align: center;
  border: 1px solid #e3e7e8;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
}

.kuc-mobile-date-picker__group input.kuc-base-date__input:focus {
  outline: none;
  border: 1px solid #3498db;
}
.kuc-mobile-date-picker__group input.kuc-base-date__input--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-mobile-date-picker__group input.kuc-base-date__input:disabled {
  color: #888888;
  background-color: #d4d7d7;
  box-shadow: none;
  cursor: not-allowed;
}
`})),O,k=e((()=>{n(),i(),p(),_(),d(),S(),C(),T(),w(),D(),c(),(()=>{if(O=window.customElements.get(`kuc-mobile-date-picker`),O)return;class e extends u{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.language=`auto`,this.value=``,this.visible=!0,this._dateConverted=``,this._inputValue=``,this._GUID=l();let t=y(e);Object.assign(this,t)}shouldUpdate(e){return this.value===void 0||this.value===``?!0:!b(this.value)||(this._dateConverted=g(this.value),this._dateConverted!==``&&!x(this._dateConverted))?(this.throwErrorAfterUpdateComplete(v.VALUE),!1):!0}willUpdate(e){e.has(`value`)&&this.value!==void 0&&this.value!==``&&(this.value=this._dateConverted)}update(e){e.has(`value`)&&this._updateInputValue(),super.update(e)}render(){return t`
        <div class="kuc-mobile-date-picker__group">
          <label
            class="kuc-mobile-date-picker__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label>
          </label>
          <kuc-mobile-base-date
            class="kuc-mobile-date-picker__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${this.error!==``}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date>
          <kuc-base-mobile-error .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error>
        </div>
      `}_updateInputValue(){if(this.value===void 0||this.value===``){this._inputValue=``;return}this._inputValue=this.value}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();let t={oldValue:this.value,value:``};this.value=e.detail.value,t.value=this.value,this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){r(this,`change`,e)}}f([o({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),f([o({type:String})],e.prototype,`error`,void 0),f([o({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),f([o({type:String})],e.prototype,`label`,void 0),f([o({type:Boolean})],e.prototype,`disabled`,void 0),f([o({type:Boolean})],e.prototype,`requiredIcon`,void 0),f([o({type:String,attribute:`lang`,reflect:!0,converter:h})],e.prototype,`language`,void 0),f([o({type:String})],e.prototype,`value`,void 0),f([o({type:Boolean,attribute:`hidden`,reflect:!0,converter:m})],e.prototype,`visible`,void 0),f([a()],e.prototype,`_inputValue`,void 0),window.customElements.define(`kuc-mobile-date-picker`,e),s(E),O=e})()})),A,j,M,N;e((()=>{k(),n(),A={title:`mobile/date-picker`,argTypes:{className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},label:{name:`label`},language:{name:`language`,options:[`auto`,`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}},requiredIcon:{name:`requiredIcon`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},j=e=>t`
    <kuc-mobile-date-picker
      .disabled="${e.disabled}"
      .language="${e.language}"
      .value="${e.value}"
      .id="${e.id}"
      .label="${e.label}"
      .requiredIcon="${e.requiredIcon}"
      .visible="${e.visible}"
      .className="${e.className}"
      .error="${e.error}"
      @change="${e=>{console.log(e)}}"
    ></kuc-mobile-date-picker>
  `,M=j.bind({}),M.args={className:`date-picker-class`,disabled:!1,error:``,id:`date-picker-id`,label:`Date Picker Label`,language:`en`,requiredIcon:!1,value:`2021-03-31`,visible:!0},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-date-picker
      .disabled="\${args.disabled}"
      .language="\${args.language}"
      .value="\${args.value}"
      .id="\${args.id}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .visible="\${args.visible}"
      .className="\${args.className}"
      .error="\${args.error}"
      @change="\${handleDateChange}"
    ></kuc-mobile-date-picker>
  \`;
}`,...M.parameters?.docs?.source}}},N=[`Base`]}))();export{M as Base,N as __namedExportsOrder,A as default};