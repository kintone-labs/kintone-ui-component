import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,d as o,f as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./decorate-33sGx9Ox.js";import{n as g,t as _}from"./constant-BNAIZv_2.js";import{n as v,o as y}from"./converter-BYYAaneI.js";import{t as b}from"./error-BtvpQcD5.js";import{t as x}from"./label-D4AWTD2g.js";import{f as S,g as C,i as w,t as T,u as E}from"./validator-d05NeqaQ.js";var D,O=e((()=>{D=`
  kuc-dropdown,
  kuc-dropdown *,
  kuc-dropdown:lang(en),
  kuc-dropdown:lang(en) * {
    font-family: sans-serif;
  }
  kuc-dropdown:lang(es),
  kuc-dropdown:lang(es) * {
    font-family: sans-serif;
  }
  kuc-dropdown:lang(ja),
  kuc-dropdown:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-dropdown:lang(zh),
  kuc-dropdown:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-dropdown:lang(zh-TW),
  kuc-dropdown:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-dropdown {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    width: var(--kuc-dropdown-toggle-width, 180px);
    min-width: var(--kuc-dropdown-toggle-width, 180px);
    line-height: 1.5;
  }
  kuc-dropdown[hidden] {
    display: none;
  }
  .kuc-dropdown__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    margin: 0px;
    position: relative;
  }
  .kuc-dropdown__group__label {
    padding: 4px 0px 8px 0px;
    display: inline-block;
    white-space: nowrap;
  }
  .kuc-dropdown__group__label[hidden] {
    display: none;
  }
  .kuc-dropdown__group__toggle {
    height: var(--kuc-dropdown-toggle-height, 40px);
    box-sizing: border-box;
    box-shadow: 1px 1px 1px #ffffff inset;
    border: 1px solid #e3e7e8;
    color: var(--kuc-dropdown-toggle-color, #3498db);
    background-color: #f7f9fa;
    padding: 0 0 0 24px;
    display: grid;
    grid: auto / auto-flow;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    width: var(--kuc-dropdown-toggle-width, 100%);
    cursor: pointer;
  }
  .kuc-dropdown__group__toggle:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-dropdown__group__toggle:disabled {
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    color: #888888;
  }
  .kuc-dropdown__group__toggle__selected-item-label {
    font-size: var(--kuc-dropdown-font-size, 14px);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kuc-dropdown__group__toggle__icon {
    flex: none;
    width: 38px;
    height: 38px;
  }
  .kuc-dropdown__group__select-menu {
    min-width: 280px;
    margin: 0;
    padding: 8px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    list-style: none;
    box-sizing: border-box;
    border: none;
  }
  .kuc-dropdown__group__select-menu__item {
    padding: 8px 16px 8px 24px;
    line-height: 1;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    color: var(--kuc-dropdown-menu-color, #333333);
    font-size: var(--kuc-dropdown-font-size, 14px);
  }
  .kuc-dropdown__group__select-menu__item__icon {
    position: absolute;
    top: 50%;
    left: 6px;
    margin-top: -5px;
  }
  .kuc-dropdown__group__select-menu__item[aria-selected="true"] {
    color: var(--kuc-dropdown-menu-color-selected, #3498db);
  }
  .kuc-dropdown__group__select-menu__highlight[role="option"] {
    background-color: #e2f2fe;
  }
  .kuc-dropdown__group__select-menu__item--disabled,
  .kuc-dropdown__group__select-menu__item--disabled[aria-selected="true"] {
    background-color: #d4d7d7;
    cursor: not-allowed;
    color: #888888;
  }
`})),k,A,j=e((()=>{r(),a(),g(),v(),b(),p(),x(),T(),O(),u(),(()=>{if(k=window.customElements.get(`kuc-dropdown`),k)return;class e extends f{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.value=``,this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._DISABLED_CLASS=`kuc-dropdown__group__select-menu__item--disabled`,this._hasValueInItems=!1,this._scrollTargets=[],this._GUID=d();let t=S(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._handleScrollMenu=this._handleScrollMenu.bind(this),this._setMenuPosition=this._setMenuPosition.bind(this),this._actionResizeScrollWindow=this._actionResizeScrollWindow.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e;!t&&n&&(this.value=this._getValue(e)||``)}_getSelectedLabel(){let e=this.items.filter((e,t)=>this._isCheckedItem(e,t));return e.length===0?``:e[0].label===void 0?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return t`
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
    `}shouldUpdate(e){return e.has(`items`)&&!w(this.items)?(this.throwErrorAfterUpdateComplete(_.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!C(this.value)?(this.throwErrorAfterUpdateComplete(_.VALUE.IS_NOT_STRING),!1):e.has(`selectedIndex`)&&!E(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(_.SELECTED_INDEX.IS_NOT_NUMBER),!1):!0}willUpdate(e){if((e.has(`items`)||e.has(`value`))&&(this._hasValueInItems=this.items.some(e=>e.value===this.value)),e.has(`value`)){if(this.value!==``||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||``),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;let e=this.items.findIndex(e=>e.value===this.value);if(e===-1)return-1;let t=this.items.findIndex((e,t)=>e.value===this.value&&t===this.selectedIndex);return t>-1?t:e}_getValue(e){let t=(e.items||[])[e.selectedIndex===0||e.selectedIndex?e.selectedIndex:-1];return t?t.value:``}render(){return n`
        <div class="kuc-dropdown__group">
          <div
            class="kuc-dropdown__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </div>
          <button
            class="kuc-dropdown__group__toggle"
            id="${this._GUID}-toggle"
            type="button"
            aria-haspopup="true"
            aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @mouseup="${this._handleMouseUpDropdownToggle}"
            @mousedown="${this._handleMouseDownDropdownToggle}"
            @click="${this._handleClickDropdownToggle}"
            @keydown="${this._handleKeyDownDropdownToggle}"
          >
            <span class="kuc-dropdown__group__toggle__selected-item-label"
              >${this._getSelectedLabel()}</span
            >
            <span class="kuc-dropdown__group__toggle__icon">
              ${this._getToggleIconSvgTemplate()}
            </span>
          </button>
          <ul
            popover="manual"
            class="kuc-dropdown__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </ul>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error>
        </div>
      `}async updated(){await this.updateComplete,this._selectorVisible&&this._scrollToView()}_handleMouseDownDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target),n=t.getAttribute(`value`),r=t.dataset.index||`0`;this._actionUpdateValue(n,r)}_handleMouseOverDropdownItem(e){let t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),!Array.from(this._disabledItemsEl).some(t=>t===e.target||t.contains(e.target))&&this._actionHideMenu()}_handleScrollMenu(){this._previousScrollTop=this._menuEl.scrollTop}_handleKeyDownDropdownToggle(e){switch(e.key){case`Up`:case`ArrowUp`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case`Tab`:this._selectorVisible&&this._actionHideMenu();break;case`Down`:case`ArrowDown`:if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case`Enter`:{if(e.preventDefault(),this.items.length===0)break;if(!this._selectorVisible){this._actionShowMenu();break}let{value:t,selectedIndex:n}=this._getInfoHighlightItem();if(t===null)break;this._actionUpdateValue(t,n),this._actionHideMenu();break}case`Escape`:e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case`Home`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case`End`:this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem());break;default:break}}_getInfoHighlightItem(){let e=this._highlightItemEl;return e===null?{value:null,selectedIndex:`-1`}:{value:e.getAttribute(`value`),selectedIndex:e.dataset.index||`0`}}_actionShowMenu(){this._buttonEl.focus(),this.items.length!==0&&(this._selectorVisible=!0,this._menuEl.showPopover(),!(!this._menuEl||!this._buttonEl)&&(this._setMenuPosition(),this._attachListeners(),!(this._selectedItemEl===null||this._selectedItemEl.classList.contains(this._DISABLED_CLASS))&&this._setHighlightAndActiveDescendantMenu(this._selectedItemEl)))}_attachListeners(){this._detachListeners(),this._scrollTargets=this._getScrollableAncestors(this._buttonEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._setMenuPosition,{passive:!0});this._menuEl.addEventListener(`scroll`,this._handleScrollMenu),window.addEventListener(`resize`,this._actionResizeScrollWindow),document.addEventListener(`click`,this._handleClickDocument,{capture:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._setMenuPosition);this._scrollTargets=[],this._menuEl&&this._menuEl.removeEventListener(`scroll`,this._handleScrollMenu),window.removeEventListener(`resize`,this._actionResizeScrollWindow),document.removeEventListener(`click`,this._handleClickDocument,{capture:!0})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback&&super.disconnectedCallback()}_actionHideMenu(){this._selectorVisible=!1,this._menuEl.hidePopover(),this._detachListeners(),this._actionRemoveActiveDescendant()}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_actionToggleMenu(){if(this.items.length!==0){if(this._selectorVisible){this._actionHideMenu();return}this._actionShowMenu()}}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.previousElementSibling),e===null&&(e=this._lastItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.previousElementSibling,e===null&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;this._highlightItemEl!==null&&(e=this._highlightItemEl.nextElementSibling),e===null&&(e=this._firstItemEl);let t=!1;for(let n=0;n<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);n++)e=e.nextElementSibling,e===null&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach(e=>{e.classList.remove(`kuc-dropdown__group__select-menu__highlight`)}),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add(`kuc-dropdown__group__select-menu__highlight`)}_actionUpdateValue(e,t){let n=parseInt(t,10);if(this.value===e&&this.selectedIndex===n)return;let r={oldValue:this.value,value:e};this.value=e,this.selectedIndex=n,i(this,`change`,r)}_actionSetActiveDescendant(e){e!==void 0&&this._buttonEl!==null&&this._buttonEl.setAttribute(`aria-activedescendant`,e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute(`aria-activedescendant`)}_setMenuPositionAboveOrBelow(e,t){let n=t.getBoundingClientRect(),r=n.top,i=window.innerHeight;window.innerHeight>document.documentElement.clientHeight&&(i=document.documentElement.clientHeight);let a=i-n.bottom;e.style.height=`auto`,e.style.maxHeight=`none`,e.style.top=`auto`,e.style.bottom=`auto`;let o=e.getBoundingClientRect().height;e.style.maxHeight=`var(--kuc-dropdown-menu-max-height, none)`;let s=getComputedStyle(e).maxHeight,c;s&&s!==`none`&&(c=parseFloat(s));let l=c?Math.min(o,c):o,u,d;a>=l?(u=n.bottom,d=l):r>=l?(u=n.top-l,d=l):a>=r?(u=n.bottom,d=a):(u=n.top-r,d=r),e.style.position=`fixed`;let f=`${u}px`;e.style.top!==f&&(e.style.top=f);let p=`${d}px`;e.style.height!==p&&(e.style.height=p),e.style.overflowY=`auto`}_setMenuPositionLeftOrRight(e,t){e.style.right=`auto`;let n=e.offsetWidth,r=t.getBoundingClientRect(),i=window.innerWidth;window.innerWidth>document.documentElement.clientWidth&&(i=document.documentElement.clientWidth);let a=r.left;i<r.right&&i>r.left&&(a=i-n);let o=`${a}px`;e.style.left!==o&&(e.style.left=o)}_setMenuPosition(){if(!this._menuEl||!this._buttonEl){this._detachListeners();return}this._setMenuPositionAboveOrBelow(this._menuEl,this._buttonEl),this._setMenuPositionLeftOrRight(this._menuEl,this._buttonEl),this._menuEl&&this._previousScrollTop&&(this._menuEl.scrollTop=this._previousScrollTop)}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;let e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){this._timeoutID||!this._selectorVisible||(this._timeoutID=window.setTimeout(()=>{this._timeoutID=null,this._setMenuPosition()},50))}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){let r=this._isCheckedItem(e,t);return n`
        <li
          class="kuc-dropdown__group__select-menu__item ${e.disabled?this._DISABLED_CLASS:``}"
          role="option"
          tabindex="${!e.disabled&&r?`0`:`-1`}"
          aria-selected="${r?`true`:`false`}"
          data-index="${t}"
          value="${e.value===void 0?``:e.value}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${e.disabled?null:this._handleMouseDownDropdownItem}"
          @mouseover="${e.disabled?null:this._handleMouseOverDropdownItem}"
        >
          ${this._getDropdownIconSvgTemplate(r,!!e.disabled)}
          ${e.label===void 0?e.value:e.label}
        </li>
      `}_getDropdownIconSvgTemplate(e,n){return t`
      ${e?t`<svg
          class="kuc-dropdown__group__select-menu__item__icon"
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
        </svg>`:``}`}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(` `).includes(`kuc-dropdown__group__select-menu__item`)?e:this._getItemElementWhenMouseOverDown(e.parentElement)}}m([s({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),m([s({type:String})],e.prototype,`error`,void 0),m([s({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),m([s({type:String})],e.prototype,`label`,void 0),m([s({type:String})],e.prototype,`value`,void 0),m([s({type:Number})],e.prototype,`selectedIndex`,void 0),m([s({type:Boolean})],e.prototype,`disabled`,void 0),m([s({type:Boolean})],e.prototype,`requiredIcon`,void 0),m([s({type:Boolean,attribute:`hidden`,reflect:!0,converter:y})],e.prototype,`visible`,void 0),m([s({type:Array})],e.prototype,`items`,void 0),m([o()],e.prototype,`_selectorVisible`,void 0),m([h(`.kuc-dropdown__group__select-menu`)],e.prototype,`_menuEl`,void 0),m([l(`.kuc-dropdown__group__select-menu__item`)],e.prototype,`_itemsEl`,void 0),m([h(`button.kuc-dropdown__group__toggle`)],e.prototype,`_buttonEl`,void 0),m([h(`.kuc-dropdown__group__select-menu__item`)],e.prototype,`_firstItemEl`,void 0),m([h(`.kuc-dropdown__group__select-menu__item:last-child`)],e.prototype,`_lastItemEl`,void 0),m([h(`.kuc-dropdown__group__select-menu__item[aria-selected=true]`)],e.prototype,`_selectedItemEl`,void 0),m([h(`.kuc-dropdown__group__select-menu__highlight`)],e.prototype,`_highlightItemEl`,void 0),m([l(`.kuc-dropdown__group__select-menu__item--disabled`)],e.prototype,`_disabledItemsEl`,void 0),window.customElements.define(`kuc-dropdown`,e),c(D),k=e})(),A=k}));export{j as n,A as t};