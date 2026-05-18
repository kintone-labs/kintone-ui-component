import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,d as o,f as s,i as c,l,n as u,o as d,r as f,s as p,t as m}from"./decorate-33sGx9Ox.js";import{n as h,t as g}from"./constant-BNAIZv_2.js";import{n as _,o as v}from"./converter-BYYAaneI.js";import{t as y}from"./error-BtvpQcD5.js";import{t as b}from"./label-D4AWTD2g.js";import{f as x,i as S,t as C}from"./validator-d05NeqaQ.js";var w,T=e((()=>{w=`
  kuc-checkbox,
  kuc-checkbox *,
  kuc-checkbox:lang(en),
  kuc-checkbox:lang(en) * {
    font-family: sans-serif;
  }
  kuc-checkbox:lang(es),
  kuc-checkbox:lang(es) * {
    font-family: sans-serif;
  }
  kuc-checkbox:lang(ja),
  kuc-checkbox:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-checkbox:lang(zh),
  kuc-checkbox:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-checkbox:lang(zh-TW),
  kuc-checkbox:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-checkbox {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-checkbox-menu-width, 239px);
    min-width: var(--kuc-checkbox-menu-width, 239px);
    line-height: 1.5;
  }
  kuc-checkbox[hidden] {
    display: none;
  }
  .kuc-checkbox__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
  }
  .kuc-checkbox__group__select-menu {
    white-space: nowrap;
    width: var(--kuc-checkbox-menu-width, auto);
    height: var(--kuc-checkbox-menu-height, auto);
    color: var(--kuc-checkbox-menu-color, #333333);
    font-size: var(--kuc-checkbox-menu-font-size, 14px);
    display: flex;
    align-items: flex-start;
  }
  .kuc-checkbox__group__select-menu[itemLayout="vertical"] {
    display: block;
  }
  .kuc-checkbox__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    white-space: nowrap;
  }
  .kuc-checkbox__group__label[hidden] {
    display: none;
  }
  .kuc-checkbox__group__select-menu[borderVisible] {
    border-color: #e3e7e8;
    border-width: 1px;
    border-style: solid;
    padding: 4px 0 0 4px;
  }
  .kuc-checkbox__group__select-menu__item {
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
  .kuc-checkbox__group__select-menu__item[focused] {
    border: 1px solid #3498db;
  }
  .kuc-checkbox__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .kuc-checkbox__group__select-menu__item__input:hover
    + .kuc-checkbox__group__select-menu__item__label {
    color: var(--kuc-checkbox-menu-color-hover, #666666);
  }
  .kuc-checkbox__group__select-menu__item__label__icon {
    position: absolute;
    left: -30px;
    box-sizing: border-box;
    width: 21px;
    height: 21px;
    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
    content: "";
  }
  .kuc-checkbox__group__select-menu__item__input[disabled]
    + .kuc-checkbox__group__select-menu__item__label {
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-checkbox__group__select-menu__item__label {
    cursor: pointer;
    position: relative;
    margin-left: 32px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    white-space: nowrap;
    min-height: 24px;
    line-height: 1.2;
  }
  `})),E,D,O=e((()=>{r(),a(),h(),_(),y(),p(),b(),C(),T(),u(),(()=>{if(E=window.customElements.get(`kuc-checkbox`),E)return;class e extends f{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.itemLayout=`horizontal`,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=d();let t=x(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!S(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!S(this.items)?(this.throwErrorAfterUpdateComplete(g.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!S(this.value)?(this.throwErrorAfterUpdateComplete(g.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!S(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(g.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,a=this.value?[...this.value]:this.value,o=this._getNewValueMapping(r,n),s=this.items.map(e=>e.value),c=Object.values(o).filter(e=>s.indexOf(e)>-1);if(c===a)return;let l=Object.keys(o).map(e=>parseInt(e,10));this.value=c,this.selectedIndex=l,i(this,`change`,{oldValue:a,value:c})}_handleFocusInput(e){e.target.parentNode.setAttribute(`focused`,``)}_handleBlurInput(e){e.target.parentNode.removeAttribute(`focused`)}_getCheckboxIconSvgTemplate(e,n){return t`
    <svg
      class="kuc-checkbox__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="1"
        fill="white"
        stroke="${this._getSVGStrokeValue(e,n)}"
        stroke-width="2"/>
      ${n?t`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?`#d8d8d8`:`#3498db`}"/>`:``}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?`#d8d8d8`:t?`#3498db`:`#d8d8d8`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let r=this._isCheckedItem(e,t),i=e.disabled||this.disabled;return n`
        <div
          class="kuc-checkbox__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="checkbox"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-checkbox__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${e.value===void 0?``:e.value}"
            ?disabled="${i}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            for="${this._GUID}-item-${t}"
            class="kuc-checkbox__group__select-menu__item__label"
            >${this._getCheckboxIconSvgTemplate(i,r)}${e.label===void 0?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return n`
        <div
          class="kuc-checkbox__group"
          role="group"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-checkbox__group__label" ?hidden="${!this.label}">
            <kuc-base-label
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <div
            class="kuc-checkbox__group__select-menu"
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
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}}m([s({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),m([s({type:String})],e.prototype,`error`,void 0),m([s({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),m([s({type:String})],e.prototype,`itemLayout`,void 0),m([s({type:String})],e.prototype,`label`,void 0),m([s({type:Boolean})],e.prototype,`borderVisible`,void 0),m([s({type:Boolean})],e.prototype,`disabled`,void 0),m([s({type:Boolean})],e.prototype,`requiredIcon`,void 0),m([s({type:Boolean,attribute:`hidden`,reflect:!0,converter:v})],e.prototype,`visible`,void 0),m([s({type:Array})],e.prototype,`items`,void 0),m([s({type:Array})],e.prototype,`selectedIndex`,void 0),m([s({type:Array})],e.prototype,`value`,void 0),m([l(`.kuc-checkbox__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),m([o()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-checkbox`,e),c(w),E=e})(),D=E}));export{O as n,D as t};