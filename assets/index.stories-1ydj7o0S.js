import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,d as o,f as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./decorate-33sGx9Ox.js";import{n as g,t as _}from"./constant-BNAIZv_2.js";import{n as v,o as y}from"./converter-BYYAaneI.js";import{t as b}from"./error-BtvpQcD5.js";import{t as x}from"./label-D4AWTD2g.js";import{f as S,g as C,i as w,s as T,t as E}from"./validator-d05NeqaQ.js";var D,O=e((()=>{D=`
  kuc-combobox,
  kuc-combobox *,
  kuc-combobox:lang(en),
  kuc-combobox:lang(en) * {
    font-family: sans-serif;
  }
  kuc-combobox:lang(es),
  kuc-combobox:lang(es) * {
    font-family: sans-serif;
  }
  kuc-combobox:lang(ja),
  kuc-combobox:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-combobox:lang(zh),
  kuc-combobox:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox:lang(zh-TW),
  kuc-combobox:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-combobox {
    position: relative;
    display: inline-table;
    font-size: 14px;
    color: #333333;
    width: var(--kuc-combobox-toggle-width, 180px);
    vertical-align: top;
    line-height: 1.5;
  }
  kuc-combobox[hidden] {
    display: none;
  }
  .kuc-combobox__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-combobox__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-combobox__group__label[hidden] {
    display: none;
  }
  .kuc-combobox__group__toggle {
    position: relative;
    display: flex;
    width: var(--kuc-combobox-toggle-width);
  }
  input[type=text].kuc-combobox__group__toggle__input {
    width: 100%;
    height: var(--kuc-combobox-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #e3e7e8;
    background-color: #ffffff;
    color: var(--kuc-combobox-toggle-color, #000000);
    font-size: var(--kuc-combobox-font-size, 14px);
    line-height: 1.5;
    padding: 0 40px 0 8px;
    margin: 0;
  }
  input[type=text].kuc-combobox__group__toggle__input:focus {
    outline: none;
    border: 1px solid #3498db;
    background-color: #e2f2fe;
    box-shadow: none;
  }
  input[type=text].kuc-combobox__group__toggle__input:disabled,
  .kuc-combobox__group__toggle__icon__button:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox__group__toggle__icon {
    position: absolute;
    right: 0px;
    top: 2px;
    border-left: 1px solid #e3e7e8;
  }
  .kuc-combobox__group__toggle__icon__button {
    width: 40px;
    height: calc(var(--kuc-combobox-toggle-height, 40px) - 4px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
  }
  .kuc-combobox__group__select-menu {
    min-width: 280px;
    color: var(--kuc-combobox-menu-color);
    padding: 8px 0;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
    list-style: none;
  }
  .kuc-combobox__group__select-menu__item {
    font-size: var(--kuc-combobox-font-size, 14px);
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
  }
  .kuc-combobox__group__select-menu__item:lang(en) b,
  .kuc-combobox__group__select-menu__item:lang(ja) b,
  .kuc-combobox__group__select-menu__item:lang(zh) b,
  .kuc-combobox__group__select-menu__item:lang(zh-TW) b{
    font-weight: 700;
  }
  .kuc-combobox__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-combobox__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-combobox-menu-color-selected, #3498db);
  }
  .kuc-combobox__group__select-menu__item--disabled,
  .kuc-combobox__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-combobox__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
`})),k,A,j=e((()=>{r(),a(),g(),v(),p(),E(),O(),x(),b(),u(),(()=>{if(k=window.customElements.get(`kuc-combobox`),k)return;class e extends f{_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._searchText=``,this._DISABLED_CLASS=`kuc-combobox__group__select-menu__item--disabled`,this._query=``,this._matchingItems=[],this._scrollTargets=[],this._GUID=d(),this._timeoutID=null;let t=S(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has(`items`)){if(!w(this.items))return this.throwErrorAfterUpdateComplete(_.ITEMS.IS_NOT_ARRAY),!1;if(!T(this.items.map(e=>e.value)))return this.throwErrorAfterUpdateComplete(_.ITEMS.IS_DUPLICATED),!1}return e.has(`value`)&&!C(this.value)?(this.throwErrorAfterUpdateComplete(_.VALUE.IS_NOT_STRING),!1):!0}willUpdate(e){e.has(`value`)&&(this._searchText=this._getSelectedLabel()||``)}render(){return n`
        <div class="kuc-combobox__group">
          <div
            class="kuc-combobox__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <div class="kuc-combobox__group__toggle">
            <input
              class="kuc-combobox__group__toggle__input"
              role="combobox"
              type="text"
              .value="${this._searchText}"
              aria-haspopup="listbox"
              aria-autocomplete="list"
              aria-labelledby="${this._GUID}-label"
              aria-controls="${this._GUID}-listbox"
              aria-describedby="${this._GUID}-error"
              aria-expanded="${this._selectorVisible}"
              aria-required="${this.requiredIcon}"
              placeholder="${this.placeholder}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeComboboxInput}"
              @input="${this._handleInputComboboxInput}"
              @keydown="${this._handleKeyDownComboboxInput}"
              @click="${this._handleClickComboboxInput}"
              @blur="${this._handleBlurComboboxInput}"
            />
            <div class="kuc-combobox__group__toggle__icon">
              <button
                class="kuc-combobox__group__toggle__icon__button"
                tabindex="-1"
                type="button"
                aria-labelledby="${this._GUID}-label"
                aria-controls="${this._GUID}-listbox"
                aria-expanded="${this._selectorVisible}"
                ?disabled="${this.disabled}"
                @click="${this._handleClickToggleButton}"
              >
                ${this._getToggleIconSvgTemplate()}
              </button>
            </div>
          </div>
          <ul
            id="${this._GUID}-listbox"
            popover="manual"
            class="kuc-combobox__group__select-menu"
            role="listbox"
            aria-labelledby="${this._GUID}-label"
            aria-hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this._matchingItems.map((e,t)=>this._getItemTemplate(e,t))}
          </ul>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error>
        </div>
      `}async updated(e){super.updated(e),await this.updateComplete,this._selectorVisible&&(this._scrollToView(),this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)?this._actionClearAllHighlightMenuItem():this._setHighlightAndActiveDescendantMenu(this._selectedItemEl))}_getToggleIconSvgTemplate(){return t`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}_getItemTemplate(e,t){let r=this._isCheckedItem(e),i=e.disabled,a=e.label===void 0?e.value:e.label,o=r?n`<b>${a}</b>`:n`${a}`,s=this._query.trim().toLowerCase();if(s&&a){let e=a.toLowerCase().indexOf(s),t=e+s.length;o=n`
          ${a.slice(0,e)}<b>${a.slice(e,t)}</b>${a.slice(t)}
        `}return n`
        <li
          class="kuc-combobox__group__select-menu__item ${i?this._DISABLED_CLASS:``}"
          role="option"
          aria-selected="${r?`true`:`false`}"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @click="${i?null:this._handleClickComboboxItem}"
          @mouseover="${i?null:this._handleMouseOverComboboxItem}"
        >
          ${this._getComboboxIconSvgTemplate(r,i)}
          ${o}
        </li>
      `}_getComboboxIconSvgTemplate(e,n){return t`
      ${e?t`<svg
          class="kuc-combobox__group__select-menu__item__icon"
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
            fill="${n?`#888888`:`#3498db`}"/>
        </svg>`:``}`}_handleClickComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target).getAttribute(`value`);this._actionUpdateValue(t)}_handleMouseOverComboboxItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus(),this._inputEl.select(),this._resetToggleInputValue(),this._actionToggleMenu()}_handleInputComboboxInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickComboboxInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleChangeComboboxInput(e){e.stopPropagation()}_handleBlurComboboxInput(e){this._resetToggleInputValue()}_handleClickDocument(e){(e.target===this._toggleEl||this._toggleEl.contains(e.target))&&(this._inputEl.focus(),e.stopPropagation()),!Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))&&this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownComboboxInput(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{e.preventDefault();let t=this._highlightItemEl;if(t===null)break;let n=t.getAttribute(`value`);this._actionUpdateValue(n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break;default:break}}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}async _actionShowMenu(){this._query.trim()===``&&(this._matchingItems=this.items),!(this.items.length===0||this._matchingItems.length===0)&&(this._inputEl.focus(),this._selectorVisible=!0,this._menuEl.showPopover(),await this.updateComplete,!(!this._menuEl||!this._toggleEl)&&(this._setMenuPosition(),this._attachListeners()))}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_actionToggleMenu(){if(this._selectorVisible){this._actionHideMenu();return}this._actionShowMenu()}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-combobox__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-combobox__group__select-menu__highlight`)}_actionUpdateValue(e){if(this.value===e){this._resetToggleInputValue();return}let t={oldValue:this.value,value:e};this.value=e,this._query=``,i(this,`change`,t)}_actionSetActiveDescendant(e){e!==void 0&&this._inputEl!==null&&this._inputEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute(`aria-activedescendant`)}_setMatchingItems(){let e=this.items.filter(e=>{let t=new RegExp((e=>e.replace(/[.*+?^=!:${}()|[\]/\\]/g,`\\$&`))(this._query.trim()),`gi`);return e.label?t.test(e.label):e.value?t.test(e.value):!1});e.length===0?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-combobox-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){if(!this._menuEl||!this._toggleEl){this._detachListeners();return}this._setMenuPositionAboveOrBelow(this._menuEl,this._toggleEl),this._setMenuPositionLeftOrRight(this._menuEl,this._toggleEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e){return e.value===this.value}_resetToggleInputValue(){let e=this._getSelectedLabel();this._searchText!==e&&(this._searchText=e||``),this._query=``}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-combobox__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}}m([s({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),m([s({type:String})],e.prototype,`error`,void 0),m([s({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),m([s({type:String})],e.prototype,`label`,void 0),m([s({type:String})],e.prototype,`placeholder`,void 0),m([s({type:String})],e.prototype,`value`,void 0),m([s({type:Boolean})],e.prototype,`disabled`,void 0),m([s({type:Boolean})],e.prototype,`requiredIcon`,void 0),m([s({type:Boolean,attribute:`hidden`,reflect:!0,converter:y})],e.prototype,`visible`,void 0),m([s({type:Array})],e.prototype,`items`,void 0),m([o()],e.prototype,`_selectorVisible`,void 0),m([h(`.kuc-combobox__group__toggle`)],e.prototype,`_toggleEl`,void 0),m([h(`.kuc-combobox__group__toggle__input`)],e.prototype,`_inputEl`,void 0),m([h(`.kuc-combobox__group__select-menu`)],e.prototype,`_menuEl`,void 0),m([l(`.kuc-combobox__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),m([h(`.kuc-combobox__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),m([h(`.kuc-combobox__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),m([h(`.kuc-combobox__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),m([h(`.kuc-combobox__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),m([h(`.kuc-base-error__error`)],e.prototype,`_errorEl`,void 0),m([l(`.kuc-combobox__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),m([o()],e.prototype,`_searchText`,void 0),window.customElements.define(`kuc-combobox`,e),c(D),k=e})(),A=k})),M,N,P,F;e((()=>{j(),M={title:`desktop/combobox`,argTypes:{className:{name:`className`},error:{name:`error`},id:{name:`id`},label:{name:`label`},disabled:{name:`disabled`},placeholder:{name:`placeholder`},requiredIcon:{name:`requiredIcon`},value:{name:`value`},visible:{name:`visible`},items:{name:`items`}},parameters:{actions:{handles:[`change`]}}},N=e=>{let t=new A({...e});return t.addEventListener(`change`,e=>{console.log(e)}),t},P=N.bind({}),P.args={className:`combobox-class`,error:`Error occurred`,id:`combobox-id`,label:`Combobox Label`,disabled:!1,requiredIcon:!1,placeholder:``,value:`item-2`,visible:!0,items:[{label:`Item 1`,value:`item-1`},{label:`Item 2`,value:`item-2`,disabled:!0},{label:`Item 3`,value:`item-3`,disabled:!0},{label:`Item 11`,value:`item-11`},{label:`Item 12`,value:`item-12`},{label:`Item 13`,value:`item-13`}]},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  const combobox = new Combobox({
    ...args
  });
  combobox.addEventListener("change", event => {
    console.log(event);
  });
  return combobox;
}`,...P.parameters?.docs?.source}}},F=[`Base`]}))();export{P as Base,F as __namedExportsOrder,M as default};