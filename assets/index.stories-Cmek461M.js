import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./decorate-33sGx9Ox.js";import{n as f,o as p}from"./converter-BYYAaneI.js";import{f as m,t as h}from"./validator-d05NeqaQ.js";import{t as g}from"./mobile-error-E2pOXAJn.js";import{t as _}from"./mobile-label-D17Mc1rx.js";var v,y=e((()=>{v=`
  kuc-mobile-textarea,
  kuc-mobile-textarea * {
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-textarea:lang(es),
  kuc-mobile-textarea:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-textarea:lang(zh),
  kuc-mobile-textarea:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-textarea:lang(zh-TW),
  kuc-mobile-textarea:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-textarea {
    display: block;
  }
  kuc-mobile-textarea[hidden] {
    display: none;
  }
  .kuc-mobile-textarea__label {
    padding: 0;
    margin: 0 0 4px 0;
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    white-space: nowrap;
  }
  .kuc-mobile-textarea__label[hidden] {
    display: none;
  }
  .kuc-mobile-textarea__form {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .kuc-mobile-textarea__form__textarea {
    width: 100%;
    height: 120px;
    padding: 0.4em;
    border: 1px solid #b3b3b3;
    outline: 0;
    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;
    border-radius: 0.4em;
    box-sizing: border-box;
    vertical-align: top;
  }
  .kuc-mobile-textarea__form__textarea[aria-required="true"] {
    border: 1px solid #cf4a38;
  }
  .kuc-mobile-textarea__form__textarea:disabled {
    color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`})),b,x=e((()=>{n(),i(),f(),u(),g(),_(),h(),s(),y(),(()=>{if(b=window.customElements.get(`kuc-mobile-textarea`),b)return;class e extends l{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=c();let t=m(e);Object.assign(this,t)}_handleFocusInput(e){let t={value:this.value};r(this,`focus`,t)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,r(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};r(this,`input`,t)}render(){return t`
        <label
          class="kuc-mobile-textarea__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label>
        </label>
        <div class="kuc-mobile-textarea__form">
          <textarea
            class="kuc-mobile-textarea__form__textarea"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            .value="${this.value}"
            aria-invalid="${this.error!==``}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputTextArea}"
          /></textarea>
        </div>
        <kuc-base-mobile-error .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error>
      `}}d([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),d([a({type:String})],e.prototype,`error`,void 0),d([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),d([a({type:String})],e.prototype,`label`,void 0),d([a({type:String})],e.prototype,`placeholder`,void 0),d([a({type:String})],e.prototype,`value`,void 0),d([a({type:Boolean})],e.prototype,`disabled`,void 0),d([a({type:Boolean})],e.prototype,`requiredIcon`,void 0),d([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:p})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-textarea`,e),o(v),b=e})()})),S,C,w,T;e((()=>{n(),x(),S={title:`mobile/textarea`,argTypes:{className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},label:{name:`label`},requiredIcon:{name:`requiredIcon`},placeholder:{name:`placeholder`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`,`focus`,`input`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},C=e=>t`
    <kuc-mobile-textarea
      .className="${e.className}"
      .disabled="${e.disabled}"
      .error="${e.error}"
      .id="${e.id}"
      .label="${e.label}"
      .requiredIcon="${e.requiredIcon}"
      .placeholder="${e.placeholder}"
      .value="${e.value}"
      .visible="${e.visible}"
      @change="${e=>{console.log(e)}}"
      @focus="${e=>{console.log(e)}}"
      @input="${e=>{console.log(e)}}"
    ></kuc-mobile-textarea>
  `,w=C.bind({}),w.args={label:`Label`,requiredIcon:!0,value:``,placeholder:`Place holder`,error:`Error occurred!`,className:`options-class`,id:`options-id`,visible:!0,disabled:!1},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const handleMopbileTextAreaChange = event => {
    console.log(event);
  };
  const handleMobileTextAreaFocus = event => {
    console.log(event);
  };
  const handleMobileTextAreaInput = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-textarea
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .placeholder="\${args.placeholder}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleMopbileTextAreaChange}"
      @focus="\${handleMobileTextAreaFocus}"
      @input="\${handleMobileTextAreaInput}"
    ></kuc-mobile-textarea>
  \`;
}`,...w.parameters?.docs?.source}}},T=[`Base`]}))();export{w as Base,T as __namedExportsOrder,S as default};