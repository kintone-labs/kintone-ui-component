import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./decorate-33sGx9Ox.js";import{n as p,t as m}from"./constant-BNAIZv_2.js";import{n as h,o as g}from"./converter-BYYAaneI.js";import{f as _,i as v,t as y}from"./validator-d05NeqaQ.js";import{t as b}from"./mobile-error-E2pOXAJn.js";import{t as x}from"./mobile-label-D17Mc1rx.js";var S,C=e((()=>{S=`
  kuc-mobile-multi-choice,
  kuc-mobile-multi-choice * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-multi-choice:lang(es),
  kuc-mobile-multi-choice:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-multi-choice:lang(zh),
  kuc-mobile-multi-choice:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-multi-choice:lang(zh-TW),
  kuc-mobile-multi-choice:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-multi-choice {
    display: inline-block;
    width: 100%;
  }

  kuc-mobile-multi-choice[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-multi-choice__label[hidden] {
    display: none;
  }

  .kuc-mobile-multi-choice__input-form {
    word-wrap: break-word;
    min-height: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .kuc-mobile-multi-choice__input-form__select {
    display: inline-block;
    border-radius: 0.4em;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice__input-form__select.kuc--required {
    border: 1px solid #cf4a38;
  }

  .kuc-mobile-multi-choice__input-form__select__input {
    min-width: 100px;
    max-width: 100%;
  }

  .kuc-mobile-multi-choice__input-form__select__input:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice__input-form__select__input option:disabled {
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }

  .kuc-mobile-multi-choice__input-form__select__input option:disabled[selected] {
    background-color: #cecece; /* Chrome */
    background-color: -moz-cellhighlight; /* Firefox */
    opacity: 1;
  }

  .kuc-mobile-multi-choice__input-form__select__input:disabled option {
    color: #999999;
    -webkit-text-fill-color: #999999;
  }
`})),w,T=e((()=>{n(),i(),p(),h(),d(),b(),x(),y(),C(),c(),(()=>{if(w=window.customElements.get(`kuc-mobile-multi-choice`),w)return;class e extends u{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=l();let t=_(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!v(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=this.value?[...this.value]:this.value,i=Array.from(t.selectedOptions,e=>e.value),a=Array.from(t.selectedOptions,e=>e.dataset.index),o={value:i,oldValue:n};this.value=i,this.selectedIndex=a.map(e=>e?parseInt(e,10):0),r(this,`change`,o)}shouldUpdate(e){return e.has(`items`)&&!v(this.items)?(this.throwErrorAfterUpdateComplete(m.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!v(this.value)?(this.throwErrorAfterUpdateComplete(m.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!v(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(m.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,n){let r=this._isCheckedItem(e,n);return t`
        <option
          value="${e.value||``}"
          data-index="${n}"
          ?selected="${e.value===void 0?!1:r}"
          ?disabled="${e.disabled}"
        >
          ${e.label===void 0?e.value:e.label}
        </option>
      `}render(){return t`
        <label
          class="kuc-mobile-multi-choice__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label>
        </label>
        <div class="kuc-mobile-multi-choice__input-form">
          <div
            class="kuc-mobile-multi-choice__input-form__select
            ${this.requiredIcon?`kuc--required`:``}"
          >
            <select
              class="kuc-mobile-multi-choice__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==``}"
              ?disabled="${this.disabled}"
              multiple
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
      `}}f([o({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),f([o({type:String})],e.prototype,`error`,void 0),f([o({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),f([o({type:String})],e.prototype,`label`,void 0),f([o({type:Boolean})],e.prototype,`disabled`,void 0),f([o({type:Boolean})],e.prototype,`requiredIcon`,void 0),f([o({type:Boolean,attribute:`hidden`,reflect:!0,converter:g})],e.prototype,`visible`,void 0),f([o({type:Array})],e.prototype,`items`,void 0),f([o({type:Array})],e.prototype,`selectedIndex`,void 0),f([o({type:Array})],e.prototype,`value`,void 0),f([a()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-multi-choice`,e),s(S),w=e})()})),E,D,O,k,A;e((()=>{T(),n(),E={title:`mobile/multi-choice`,argTypes:{className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},items:{name:`items`},label:{name:`label`},requiredIcon:{name:`requiredIcon`},selectedIndex:{name:`selectedIndex`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},D=e=>t`
    <kuc-mobile-multi-choice
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
    ></kuc-mobile-multi-choice>
  `,O=D.bind({}),O.args={label:`Mutiple-Choice`,requiredIcon:!0,items:[{label:`Item 1`,value:`item-1`},{label:`Item 2`,value:`item-2`},{label:`Item 3`,value:`item-3`,disabled:!0},{label:`Item 4`,value:`item-4`,disabled:!0},{label:`Item 5`,value:`item-5`}],value:[`item-1`,`item-3`],selectedIndex:[0,2],error:`Error occurred!`,className:`sample-class`,id:`sample-id`,visible:!0,disabled:!1},k=D.bind({}),k.args={label:`Mutiple-Choice`,requiredIcon:!0,items:[{label:`Item 1`,value:`item-1`},{label:`Item 1`,value:`item-1`},{label:`Item 2`,value:`item-2`}],value:[`item-1`,`item-1`],selectedIndex:[0,1],error:`Error occurred!`,className:`sample-class`,id:`sample-id`,visible:!0,disabled:!1},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const handleMultiChoiceChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-multi-choice
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
      @change="\${handleMultiChoiceChange}"
    ></kuc-mobile-multi-choice>
  \`;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const handleMultiChoiceChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-multi-choice
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
      @change="\${handleMultiChoiceChange}"
    ></kuc-mobile-multi-choice>
  \`;
}`,...k.parameters?.docs?.source}}},A=[`Base`,`Base1`]}))();export{O as Base,k as Base1,A as __namedExportsOrder,E as default};