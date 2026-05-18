import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{n as p,t as m}from"./constant-BNAIZv_2.js";import{n as h,o as g}from"./converter-BYYAaneI.js";import{f as _,g as v,i as y,t as b,u as x}from"./validator-d05NeqaQ.js";import{t as S}from"./mobile-error-E2pOXAJn.js";import{t as C}from"./mobile-label-D17Mc1rx.js";var w,T=e((()=>{w=`
  kuc-mobile-dropdown,
  kuc-mobile-dropdown * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-dropdown:lang(es),
  kuc-mobile-dropdown:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-dropdown:lang(zh),
  kuc-mobile-dropdown:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-dropdown:lang(zh-TW),
  kuc-mobile-dropdown:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-dropdown {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-dropdown[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-dropdown__label[hidden] {
    display: none;
  }

  .kuc-mobile-dropdown__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-dropdown__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-dropdown__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-dropdown__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-dropdown__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
`})),E,D=e((()=>{n(),i(),p(),h(),u(),S(),C(),b(),T(),s(),(()=>{if(E=window.customElements.get(`kuc-mobile-dropdown`),E)return;class e extends l{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._hasValueInItems=!1,this._GUID=c();let t=_(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value;if(this.value===n&&this.selectedIndex===t.selectedIndex)return;let i={oldValue:this.value,value:n};this.value=n,this.selectedIndex=t.selectedIndex,r(this,`change`,i)}shouldUpdate(e){return e.has(`items`)&&!y(this.items)?(this.throwErrorAfterUpdateComplete(m.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!v(this.value)?(this.throwErrorAfterUpdateComplete(m.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!x(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(m.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,n){let r=this._isCheckedItem(e,n);return t`
        <option
          value="${e.value||``}"
          ?selected="${r}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return t`
        <label
          class="kuc-mobile-dropdown__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label>
        </label>
        <div class="kuc-mobile-dropdown__input-form">
          <div
            class="kuc-mobile-dropdown__input-form__select
            ${this.requiredIcon?`kuc--required`:``}"
          >
            <select
              class="kuc-mobile-dropdown__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==``}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            >
              ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error>
      `}updated(e){e.has(`selectedIndex`)&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}d([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),d([a({type:String})],e.prototype,`error`,void 0),d([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),d([a({type:String})],e.prototype,`label`,void 0),d([a({type:String})],e.prototype,`value`,void 0),d([a({type:Number})],e.prototype,`selectedIndex`,void 0),d([a({type:Boolean})],e.prototype,`disabled`,void 0),d([a({type:Boolean})],e.prototype,`requiredIcon`,void 0),d([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:g})],e.prototype,`visible`,void 0),d([a({type:Array})],e.prototype,`items`,void 0),d([f(`.kuc-mobile-dropdown__input-form__select__input`)],e.prototype,`_selectEl`,void 0),window.customElements.define(`kuc-mobile-dropdown`,e),o(w),E=e})()})),O,k,A,j,M,N;e((()=>{D(),n(),O={title:`mobile/dropdown`,argTypes:{className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},items:{name:`items`},label:{name:`label`},requiredIcon:{name:`requiredIcon`},selectedIndex:{name:`selectedIndex`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},k=e=>t`
    <kuc-mobile-dropdown
      .className="${e.className}"
      .disabled="${e.disabled}"
      .error="${e.error}"
      .id="${e.id}"
      .items="${e.items}"
      .label="${e.label}"
      .requiredIcon="${e.requiredIcon}"
      .selectedIndex="${e.selectedIndex}"
      .value="${e.value}"
      .visible="${e.visible}"
      @change="${e=>{console.log(e)}}"
    ></kuc-mobile-dropdown>
  `,A=k.bind({}),A.args={className:`sample-class`,id:`sample-id`,items:[{label:`-----`,value:``},{label:`Orange`,value:`orange`,disabled:!0},{label:`Apple`,value:`apple`}],value:``,selectedIndex:0,label:`フルーツ一覧`,requiredIcon:!0,visible:!0,disabled:!1,error:`エラーです`},j=k.bind({}),j.args={className:`sample-class`,id:`sample-id`,items:[{label:`-----`,value:`-----`},{label:`Orange`,value:`orange`},{label:`Orange`,value:`orange`},{label:`Apple`,value:`apple`,disabled:!0}],value:`orange`,selectedIndex:2,label:`フルーツ一覧`,requiredIcon:!0,visible:!0,disabled:!1,error:`エラーです`},M=k.bind({}),M.args={className:`sample-class`,id:`sample-id`,items:null,value:`orange`,selectedIndex:2,label:`フルーツ一覧`,requiredIcon:!0,visible:!0,disabled:!1,error:`エラーです`},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  const handleDropDownChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-dropdown
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleDropDownChange}"
    ></kuc-mobile-dropdown>
  \`;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const handleDropDownChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-dropdown
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleDropDownChange}"
    ></kuc-mobile-dropdown>
  \`;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const handleDropDownChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-dropdown
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleDropDownChange}"
    ></kuc-mobile-dropdown>
  \`;
}`,...M.parameters?.docs?.source}}},N=[`Base`,`Base1`,`Base2`]}))();export{A as Base,j as Base1,M as Base2,N as __namedExportsOrder,O as default};