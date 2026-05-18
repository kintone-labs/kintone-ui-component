import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./decorate-33sGx9Ox.js";import{n as f,o as p}from"./converter-BYYAaneI.js";import{f as m,t as h}from"./validator-d05NeqaQ.js";import{t as g}from"./mobile-error-E2pOXAJn.js";import{t as _}from"./mobile-label-D17Mc1rx.js";var v,y=e((()=>{v=`
  kuc-mobile-text,
  kuc-mobile-text * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-text:lang(es),
  kuc-mobile-text:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-text:lang(zh),
  kuc-mobile-text:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-text:lang(zh-TW),
  kuc-mobile-text:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-text {
    display: block;
  }
  kuc-mobile-text[hidden] {
    display: none;
  }
  .kuc-mobile-text__label {
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    padding: 0;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-text__label[hidden] {
    display: none;
  }
  .kuc-mobile-text__input-form {
    padding-left: 0.5em;
    padding-right: 0.5em;
    display: flex;
    align-items: center;
  }
  .kuc-mobile-text__input-form__prefix {
    margin-right: 4px;
    color: #888888;
  }
  .kuc-mobile-text__input-form__prefix[hidden] {
    display: none;
  }
  .kuc-mobile-text__input-form__input {
    width: 100%;
    min-width: 20px;
    padding: 0.4em;
    border: 1px solid #b3b3b3;
    outline: 0;
    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
    border-radius: 0.4em;
    box-sizing: border-box;
    text-align: left;
  }
  .kuc-mobile-text__input-form__input[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-text__input-form__input[textAlign="right"] {
    text-align: right;
  }
  .kuc-mobile-text__input-form__input:disabled {
    color: #999999;
    background-color: #d5d7d9;
    -webkit-text-fill-color: #999999;
    opacity: 1;
    -webkit-opacity: 1;
  }
  .kuc-mobile-text__input-form__suffix {
    margin-left: 4px;
    color: #888888;
  }
  .kuc-mobile-text__input-form__suffix[hidden] {
    display: none;
  }
`})),b,x=e((()=>{n(),i(),f(),u(),g(),_(),h(),y(),s(),(()=>{if(b=window.customElements.get(`kuc-mobile-text`),b)return;class e extends l{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.prefix=``,this.suffix=``,this.textAlign=`left`,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=c();let t=m(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};r(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,r(this,`change`,n)}_handleInputText(e){e.stopPropagation();let t={value:e.target.value,data:e.data};r(this,`input`,t)}render(){return t`
        <label
          class="kuc-mobile-text__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label>
        </label>
        <div class="kuc-mobile-text__input-form">
          <span
            class="kuc-mobile-text__input-form__prefix"
            ?hidden="${!this.prefix}"
            >${this.prefix}</span
          >
          <input
            class="kuc-mobile-text__input-form__input"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            textAlign="${this.textAlign}"
            type="text"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            aria-invalid="${this.error!==``}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputText}"
          />
          <span
            class="kuc-mobile-text__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <kuc-base-mobile-error .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error>
      `}}d([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),d([a({type:String})],e.prototype,`error`,void 0),d([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),d([a({type:String})],e.prototype,`label`,void 0),d([a({type:String})],e.prototype,`placeholder`,void 0),d([a({type:String})],e.prototype,`prefix`,void 0),d([a({type:String})],e.prototype,`suffix`,void 0),d([a({type:String})],e.prototype,`textAlign`,void 0),d([a({type:String})],e.prototype,`value`,void 0),d([a({type:Boolean})],e.prototype,`disabled`,void 0),d([a({type:Boolean})],e.prototype,`requiredIcon`,void 0),d([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:p})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-text`,e),o(v),b=e})()})),S,C,w,T;e((()=>{n(),x(),S={title:`mobile/text`,argTypes:{className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},label:{name:`label`},requiredIcon:{name:`requiredIcon`},placeholder:{name:`placeholder`},prefix:{name:`prefix`},suffix:{name:`suffix`},textAlign:{name:`textAlign`,options:[`left`,`right`],control:{type:`select`}},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`,`focus`,`input`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},C=e=>t`
    <kuc-mobile-text
      .className="${e.className}"
      .disabled="${e.disabled}"
      .error="${e.error}"
      .id="${e.id}"
      .label="${e.label}"
      .requiredIcon="${e.requiredIcon}"
      .placeholder="${e.placeholder}"
      .prefix="${e.prefix}"
      .suffix="${e.suffix}"
      .textAlign="${e.textAlign}"
      .value="${e.value}"
      .visible="${e.visible}"
      @change="${e=>{console.log(e)}}"
      @focus="${e=>{console.log(e)}}"
      @input="${e=>{console.log(e)}}"
    ></kuc-mobile-text>
  `,w=C.bind({}),w.args={value:`Orange`,requiredIcon:!0,label:`Text`,error:`Error occured!`,className:`hoge var`,id:`aaaaaa`,textAlign:`left`,placeholder:`hogehoge1`,prefix:``,suffix:``,disabled:!1,visible:!0},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const handleMopbileTextChange = event => {
    console.log(event);
  };
  const handleMobileTextFocus = event => {
    console.log(event);
  };
  const handleMobileTextInput = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-text
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .placeholder="\${args.placeholder}"
      .prefix="\${args.prefix}"
      .suffix="\${args.suffix}"
      .textAlign="\${args.textAlign}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleMopbileTextChange}"
      @focus="\${handleMobileTextFocus}"
      @input="\${handleMobileTextInput}"
    ></kuc-mobile-text>
  \`;
}`,...w.parameters?.docs?.source}}},T=[`Base`]}))();export{w as Base,T as __namedExportsOrder,S as default};