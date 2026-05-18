import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,f as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./decorate-33sGx9Ox.js";import{n as m,t as h}from"./constant-BNAIZv_2.js";import{n as g,o as _}from"./converter-BYYAaneI.js";import{t as v}from"./error-BtvpQcD5.js";import{t as y}from"./label-D4AWTD2g.js";import{f as b,g as x,i as S,t as C,u as w}from"./validator-d05NeqaQ.js";var T,E=e((()=>{T=`
  kuc-radio-button,
  kuc-radio-button *,
  kuc-radio-button:lang(en),
  kuc-radio-button:lang(en) * {
    font-family: sans-serif;
  }
  kuc-radio-button:lang(es),
  kuc-radio-button:lang(es) * {
    font-family: sans-serif;
  }
  kuc-radio-button:lang(ja),
  kuc-radio-button:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-radio-button:lang(zh),
  kuc-radio-button:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-radio-button:lang(zh-TW),
  kuc-radio-button:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-radio-button {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    width: var(--kuc-radio-button-menu-width, 239px);
    min-width: var(--kuc-radio-button-menu-width, 239px);
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-radio-button[hidden] {
    display: none;
  }

  .kuc-radio-button__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    margin: 0px;
    width: 100%;
  }

  .kuc-radio-button__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }

  .kuc-radio-button__group__label[hidden] {
    display: none;
  }

  .kuc-radio-button__group__select-menu {
    display: flex;
    align-items: flex-start;
    width: var(--kuc-radio-button-menu-width, 100%);
    height: var(--kuc-radio-button-menu-height);
    color: var(--kuc-radio-button-menu-color, #333333);
    font-size: var(--kuc-radio-button-menu-font-size, 14px);
  }

  .kuc-radio-button__group__select-menu[itemlayout="vertical"] {
    display: block;
  }

  .kuc-radio-button__group__select-menu[bordervisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding-top: 4px;
    box-sizing: border-box;
  }

  .kuc-radio-button__group__select-menu__item {
    margin-left: 4px;
    margin-bottom: 4px;
    margin-right: 16px;
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    display: flex;
    align-items: center;
  }

  .kuc-radio-button__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }

  .kuc-radio-button__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .kuc-radio-button__group__select-menu__item__input:hover
    + .kuc-radio-button__group__select-menu__item__label {
    color: var(--kuc-radio-button-menu-color-hover, #666666);
  }

  .kuc-radio-button__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
    border-radius: 9px;
  }

  .kuc-radio-button__group__select-menu__item__input[disabled]
    + .kuc-radio-button__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }

  .kuc-radio-button__group__select-menu__item__label {
    cursor: pointer;
    position: relative;
    margin-left: 32px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    white-space: nowrap;
    line-height: 1.2;
    min-height: 24px;
  }
`})),D,O,k=e((()=>{r(),a(),m(),g(),v(),f(),y(),C(),E(),l(),(()=>{if(D=window.customElements.get(`kuc-radio-button`),D)return;class e extends d{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.value=``,this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=u();let t=b(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}shouldUpdate(e){return e.has(`items`)&&!S(this.items)?(this.throwErrorAfterUpdateComplete(h.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!x(this.value)?(this.throwErrorAfterUpdateComplete(h.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!w(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(h.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}_findItemToFocus(){let e=-1;for(let t=0;t<this.items.length;t++){let n=this.items[t];if(!n.disabled){if(this.selectedIndex===t&&n.value===this.value){e=t;continue}e===-1&&(e=t)}}return e}willUpdate(e){if(e.has(`value`)){if(this.value!==``)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.value,r=t.dataset.index||`0`,a=parseInt(r,10);if(this.value===n&&this.selectedIndex===a)return;let o={oldValue:this.value,value:n};this.value=n,this.selectedIndex=a,i(this,`change`,o)}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getRadioIconSvgTemplate(e,n){return t`
    <svg
      class="kuc-radio-button__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${n?t`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?`#e3e7e8`:`#3498db`}"/>`:``}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let r=this._isCheckedItem(e,t),i=e.disabled||this.disabled,a=e.value===void 0?``:e.value,o=t===this._findItemToFocus()?`0`:`-1`;return n`
        <div
          class="kuc-radio-button__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${r?`true`:`false`}"
            aria-describedby="${this._GUID}-error"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-radio-button__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${a}"
            tabindex="${o}"
            aria-required="${this.requiredIcon}"
            ?disabled="${i}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            class="kuc-radio-button__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(i,r)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}render(){return n`
        <div
          class="kuc-radio-button__group"
          role="radiogroup"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-radio-button__group__label" ?hidden="${!this.label}">
            <kuc-base-label
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <div
            class="kuc-radio-button__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error>
        </div>
      `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex})}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}}p([o({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),p([o({type:String})],e.prototype,`error`,void 0),p([o({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),p([o({type:String})],e.prototype,`itemLayout`,void 0),p([o({type:String})],e.prototype,`label`,void 0),p([o({type:String})],e.prototype,`value`,void 0),p([o({type:Number})],e.prototype,`selectedIndex`,void 0),p([o({type:Boolean})],e.prototype,`borderVisible`,void 0),p([o({type:Boolean})],e.prototype,`disabled`,void 0),p([o({type:Boolean})],e.prototype,`requiredIcon`,void 0),p([o({type:Boolean,attribute:`hidden`,reflect:!0,converter:_})],e.prototype,`visible`,void 0),p([o({type:Array})],e.prototype,`items`,void 0),p([c(`.kuc-radio-button__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),window.customElements.define(`kuc-radio-button`,e),s(T),D=e})(),O=D}));export{k as n,O as t};