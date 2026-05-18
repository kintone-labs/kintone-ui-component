import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,d as o,f as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./decorate-33sGx9Ox.js";import{n as g,t as _}from"./constant-BNAIZv_2.js";import{n as v,o as y}from"./converter-BYYAaneI.js";import{t as b}from"./error-BtvpQcD5.js";import{t as x}from"./label-D4AWTD2g.js";import{f as S,i as C,t as w}from"./validator-d05NeqaQ.js";var T,E=e((()=>{T=`
  kuc-multi-choice,
  kuc-multi-choice *,
  kuc-multi-choice:lang(en),
  kuc-multi-choice:lang(en) * {
    font-family: sans-serif;
  }
  kuc-multi-choice:lang(es),
  kuc-multi-choice:lang(es) * {
    font-family: sans-serif;
  }
  kuc-multi-choice:lang(ja),
  kuc-multi-choice:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-multi-choice:lang(zh),
  kuc-multi-choice:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-multi-choice:lang(zh-TW),
  kuc-multi-choice:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-multi-choice {
    display: inline-table;
    font-size: 14px;
    color: var(--kuc-multi-choice-menu-color, #333333);
    width: var(--kuc-multi-choice-menu-width, 180px);
    min-width: var(--kuc-multi-choice-menu-width, 180px);
    line-height: 1.5;
  }
  kuc-multi-choice[hidden] {
    display: none;
  }
  .kuc-multi-choice__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
  }
  .kuc-multi-choice__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-multi-choice__group__label[hidden] {
    display: none;
  }
  .kuc-multi-choice__group__menu {
    position: relative;
    background: #ffffff;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;
    padding: 6px 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: var(--kuc-multi-choice-menu-height, auto);
    max-height: var(--kuc-multi-choice-menu-height, 134px);
    width: var(--kuc-multi-choice-menu-width, auto);
    font-size: var(--kuc-multi-choice-menu-font-size, 14px);
  }
  .kuc-multi-choice__group__menu:not([disabled]):focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-multi-choice__group__menu[disabled] {
    background-color: #dbdcdd;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
    outline: none;
  }
  .kuc-multi-choice__group__menu__item {
    padding: 4px 16px;
    margin-bottom: 2px;
    line-height: 1;
    position: relative;
    white-space: nowrap;
  }
  .kuc-multi-choice__group__menu__item__icon {
    position: absolute;
    top: 50%;
    left: 16px;
    margin-top: -6px;
    pointer-events: none;
  }
  .kuc-multi-choice__group__menu__item--disabled {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-multi-choice__group__menu__item[aria-selected="true"] {
    color: var(--kuc-multi-choice-menu-color-selected, #3498db);
    padding-left: 32px;
  }
  .kuc-multi-choice__group__menu__item--disabled[aria-selected="true"] {
    color: #888888;
    padding-left: 32px;
  }
  .kuc-multi-choice__group__menu[disabled]
    .kuc-multi-choice__group__menu__item[aria-selected="true"] {
    color: #888888;
  }
  .kuc-multi-choice__group__menu__highlight[role="option"] {
    background-color: var(--kuc-multi-choice-menu-background-color-hover, #e2f2fe);
    cursor: pointer;
  }
`})),D,O,k=e((()=>{r(),a(),g(),v(),b(),p(),x(),w(),E(),u(),(()=>{if(D=window.customElements.get(`kuc-multi-choice`),D)return;class e extends f{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._DISABLED_CLASS=`kuc-multi-choice__group__menu__item--disabled`,this._GUID=d();let t=S(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!C(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}shouldUpdate(e){return e.has(`items`)&&!C(this.items)?(this.throwErrorAfterUpdateComplete(_.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!C(this.value)?(this.throwErrorAfterUpdateComplete(_.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!C(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(_.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return n`
        <div class="kuc-multi-choice__group">
          <div
            class="kuc-multi-choice__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <div
            class="kuc-multi-choice__group__menu"
            role="listbox"
            aria-multiselectable="true"
            aria-describedby="${this._GUID}-error"
            aria-labelledby="${this._GUID}-label"
            ?disabled="${this.disabled}"
            tabindex="${this.disabled?`-1`:`0`}"
            @keydown="${this._handleKeyDownMultiChoice}"
          >
            ${this.items.map((e,t)=>this._getMenuItemTemplate(e,t))}
          </div>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error>
        </div>
      `}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;let t=e.target,n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._handleChangeValue(n,r)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach(e=>{e.classList.contains(`kuc-multi-choice__group__menu__highlight`)&&e.classList.remove(`kuc-multi-choice__group__menu__highlight`)});let t=e.currentTarget;t.classList.add(`kuc-multi-choice__group__menu__highlight`),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove(`kuc-multi-choice__group__menu__highlight`),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(!this.disabled)switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightPrevMenuItem();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;this._actionHighlightNextMenuItem();break;case`Spacebar`:case` `:e.preventDefault(),this._actionUpdateValue();break;default:break}}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl,this._highlightItemEl===null&&(e=this._firstItemEl));let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);t||(e.classList.add(`kuc-multi-choice__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;this._actionClearAllHighlightMenuItem();for(let n=0;n<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);t||(e.classList.add(`kuc-multi-choice__group__menu__highlight`),this._setActiveDescendant(e.id))}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-multi-choice__group__menu__highlight`)})}_actionUpdateValue(){this._itemsEl.forEach(e=>{if(e.classList.contains(`kuc-multi-choice__group__menu__highlight`)){let t=e.getAttribute(`value`),n=e.dataset.index||`0`;this._handleChangeValue(t,n)}})}_getMultiChoiceCheckedIconSvgTemplate(e,n){return t`
        ${n?t`<svg
            class="kuc-multi-choice__group__menu__item__icon"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
              fill="${e?`#888888`:`#3498db`}"
            />
          </svg>`:``}`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getMenuItemTemplate(e,t){let r=this._isCheckedItem(e,t),i=e.disabled||this.disabled;return n`
        <div
          class="kuc-multi-choice__group__menu__item ${i?this._DISABLED_CLASS:``}"
          role="option"
          aria-selected="${r}"
          aria-required="${this.requiredIcon}"
          data-index="${t}"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${i?null:this._handleMouseDownMultiChoiceItem}"
          @mouseover="${i?null:this._handleMouseOverMultiChoiceItem}"
          @mouseleave="${i?null:this._handleMouseLeaveMultiChoiceItem}"
        >
          ${this._getMultiChoiceCheckedIconSvgTemplate(i,r)}
          ${e.label===void 0?e.value:e.label}
        </div>
      `}_setActiveDescendant(e){e!==void 0&&this._menuEl!==null?this._menuEl.setAttribute(`aria-activedescendant`,e):this._menuEl.removeAttribute(`aria-activedescendant`)}_handleChangeValue(e,t){let n=this.value?[...this.value]:this.value,r=this._getNewValueMapping(e,t),a=this.items.map(e=>e.value),o=Object.values(r).filter(e=>a.indexOf(e)>-1);if(o===n)return;let s=Object.keys(r).map(e=>parseInt(e,10));this.value=o,this.selectedIndex=s,i(this,`change`,{oldValue:n,value:o})}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}}m([s({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),m([s({type:String})],e.prototype,`error`,void 0),m([s({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),m([s({type:String})],e.prototype,`label`,void 0),m([s({type:Boolean})],e.prototype,`disabled`,void 0),m([s({type:Boolean})],e.prototype,`requiredIcon`,void 0),m([s({type:Boolean,attribute:`hidden`,reflect:!0,converter:y})],e.prototype,`visible`,void 0),m([s({type:Array})],e.prototype,`items`,void 0),m([s({type:Array})],e.prototype,`selectedIndex`,void 0),m([s({type:Array})],e.prototype,`value`,void 0),m([h(`.kuc-multi-choice__group__menu`)],e.prototype,`_menuEl`,void 0),m([l(`.kuc-multi-choice__group__menu__item`)],e.prototype,`_itemsEl`,void 0),m([h(`.kuc-multi-choice__group__menu__item`)],e.prototype,`_firstItemEl`,void 0),m([h(`.kuc-multi-choice__group__menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),m([h(`.kuc-multi-choice__group__menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),m([o()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-multi-choice`,e),c(T),D=e})(),O=D}));export{k as n,O as t};