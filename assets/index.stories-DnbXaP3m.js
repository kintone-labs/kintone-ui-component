import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,f as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./decorate-33sGx9Ox.js";import{n as m,t as h}from"./constant-BNAIZv_2.js";import{n as g,o as _}from"./converter-BYYAaneI.js";import{f as v,g as y,i as b,t as x,u as S}from"./validator-d05NeqaQ.js";import{t as C}from"./mobile-error-E2pOXAJn.js";import{t as w}from"./mobile-label-D17Mc1rx.js";var T,E=e((()=>{T=`
  kuc-mobile-radio-button,
  kuc-mobile-radio-button * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-radio-button:lang(es),
  kuc-mobile-radio-button:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-radio-button:lang(zh) ,
  kuc-mobile-radio-button:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-radio-button:lang(zh-TW),
  kuc-mobile-radio-button:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-radio-button {
    width: 100%;
    display: inline-block;
  }

  kuc-mobile-radio-button[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button__group {
    border: none;
    height: auto;
    display: inline-block;
    width: 100%;
    vertical-align: top;
  }

  .kuc-mobile-radio-button__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }

  .kuc-mobile-radio-button__group__label[hidden] {
    display: none;
  }

  .kuc-mobile-radio-button__group__select-menu {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }

  .kuc-mobile-radio-button__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.4em;
  }

  .kuc-mobile-radio-button__group__select-menu__item {
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 45px;
    display: block;
  }

  .kuc-mobile-radio-button__group__select-menu[bordervisible]
    .kuc-mobile-radio-button__group__select-menu__item {
    border-bottom: 1px solid #b3b3b3;
  }

  .kuc-mobile-radio-button__group__select-menu[bordervisible]
    .kuc-mobile-radio-button__group__select-menu__item:last-child {
    border-bottom: 0px;
  }

  .kuc-mobile-radio-button__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-mobile-radio-button__group__select-menu__item__label__icon {
    position: absolute;
    top: 50%;
    box-sizing: border-box;
    margin-top: -11px;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
    left: 8px;
  }

  .kuc-mobile-radio-button__group__select-menu__item__label__value {
    height: 45px;
    line-height: 45px;
    padding-left: 35px;
  }

  .kuc-mobile-radio-button__group__select-menu[disabled], 
  .kuc-mobile-radio-button__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-radio-button__group__select-menu[bordervisible]
  .kuc-mobile-radio-button__group__select-menu__item--disabled:last-child {
    border-bottom-left-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
  }
  .kuc-mobile-radio-button__group__select-menu[bordervisible]
  .kuc-mobile-radio-button__group__select-menu__item--disabled:first-child {
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  .kuc-mobile-radio-button__group__select-menu__item__label {
    position: absolute;
    white-space: nowrap;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    padding: 0px;
  }
`})),D,O=e((()=>{r(),a(),m(),g(),f(),C(),w(),x(),E(),l(),(()=>{if(D=window.customElements.get(`kuc-mobile-radio-button`),D)return;class e extends d{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=u();let t=v(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,a=parseInt(r,10);if(this.value===n&&this.selectedIndex===a)return;let o={oldValue:this.value,value:n};this.value=n,this.selectedIndex=a,i(this,`change`,o)}_getRadioIconSvgTemplate(e,n){return t`
      <svg
        class="kuc-mobile-radio-button__group__select-menu__item__label__icon"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <radialGradient id="${this._GUID}-shadow">
          <stop offset="0%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="30%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="80%" style="stop-color:#5b5b5b;stop-opacity:0.1" />
          <stop offset="90%" style="stop-color:#5b5b5b;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#5b5b5b;stop-opacity:0.2" />
        </radialGradient>
      </defs>
        <circle
          fill="url(#shadow)"
          cx="10.5"
          cy="10.5"
          r="10.15"
          stroke="#bbbbbb" stroke-width="1"/>
        ${n?t`<circle cx="10.5" cy="10.5" r="6.5" fill="${`#5b5b5b`}"/>`:``}
      </svg>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let r=this._isCheckedItem(e,t);return n`
        <div
          class="kuc-mobile-radio-button__group__select-menu__item${e.disabled?` kuc-mobile-radio-button__group__select-menu__item--disabled`:``}"
        >
          <input
            type="radio"
            aria-describedby="${this._GUID}-error"
            id="${this._GUID}-item-${t}"
            data-index="${t}"
            class="kuc-mobile-radio-button__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value===void 0?``:e.value}"
            aria-invalid="${this.error!==``}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled||e.disabled}"
            @change="${this._handleChangeInput}"
          />
          <label
            class="kuc-mobile-radio-button__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(this.disabled,r)}
            <div
              class="kuc-mobile-radio-button__group__select-menu__item__label__value"
            >
              ${e.label===void 0?e.value:e.label}
            </div>
          </label>
        </div>
      `}shouldUpdate(e){return e.has(`items`)&&!b(this.items)?(this.throwErrorAfterUpdateComplete(h.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!y(this.value)?(this.throwErrorAfterUpdateComplete(h.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!S(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(h.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return n`
        <div class="kuc-mobile-radio-button__group">
          <div
            class="kuc-mobile-radio-button__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label>
          </div>
          <div
            class="kuc-mobile-radio-button__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-mobile-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error>
        </div>
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}p([o({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),p([o({type:String})],e.prototype,`error`,void 0),p([o({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),p([o({type:String})],e.prototype,`label`,void 0),p([o({type:String})],e.prototype,`value`,void 0),p([o({type:Number})],e.prototype,`selectedIndex`,void 0),p([o({type:Boolean})],e.prototype,`borderVisible`,void 0),p([o({type:Boolean})],e.prototype,`disabled`,void 0),p([o({type:Boolean})],e.prototype,`requiredIcon`,void 0),p([o({type:Boolean,attribute:`hidden`,reflect:!0,converter:_})],e.prototype,`visible`,void 0),p([o({type:Array})],e.prototype,`items`,void 0),p([c(`.kuc-mobile-radio-button__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-mobile-radio-button`,e),s(T),D=e})()})),k,A,j,M,N,P;e((()=>{r(),O(),k={title:`mobile/radio-button`,argTypes:{borderVisible:{name:`borderVisible`},className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},items:{name:`items`},label:{name:`label`},requiredIcon:{name:`requiredIcon`},selectedIndex:{name:`selectedIndex`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},A=e=>n`
    <kuc-mobile-radio-button
      .className="${e.className}"
      .borderVisible="${e.borderVisible}"
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
    ></kuc-mobile-radio-button>
  `,j=A.bind({}),j.args={items:[{label:`Item 1`,value:`item-1`},{label:`Item 2`,value:`item-2`},{label:`Item 3`,value:`item-3`,disabled:!0}],value:`item-2`,selectedIndex:1,className:`sample-class`,id:`sample-id`,visible:!0,disabled:!1,borderVisible:!0,label:`Radio button`,requiredIcon:!0,error:`Error occurred!`},M=A.bind({}),M.args={items:[{label:`Item 1`,value:`item-1`},{label:`Item 2`,value:`item-2`},{label:`Item 3`,value:`item-3`},{label:`Item 3`,value:`item-3`}],value:`item-3`,selectedIndex:3,className:`sample-class`,id:`sample-id`,visible:!0,disabled:!1,borderVisible:!0,label:`Radio Button`,requiredIcon:!0,error:`Error occurred!`},N=A.bind({}),N.args={items:[{label:`Item 1`,value:`item-1`},{label:`Item 2`,value:`item-2`},{label:`Item 3`,value:`item-3`}],value:``,selectedIndex:0,className:`sample-class`,id:`sample-id`,visible:!0,disabled:!1,borderVisible:!0,label:`Radio button`,requiredIcon:!0,error:`Error occurred!`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const handleRadioButtonChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-radio-button
      .className="\${args.className}"
      .borderVisible="\${args.borderVisible}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleRadioButtonChange}"
    ></kuc-mobile-radio-button>
  \`;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const handleRadioButtonChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-radio-button
      .className="\${args.className}"
      .borderVisible="\${args.borderVisible}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleRadioButtonChange}"
    ></kuc-mobile-radio-button>
  \`;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
  const handleRadioButtonChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-radio-button
      .className="\${args.className}"
      .borderVisible="\${args.borderVisible}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleRadioButtonChange}"
    ></kuc-mobile-radio-button>
  \`;
}`,...N.parameters?.docs?.source}}},P=[`Base`,`Base1`,`Base2`]}))();export{j as Base,M as Base1,N as Base2,P as __namedExportsOrder,k as default};