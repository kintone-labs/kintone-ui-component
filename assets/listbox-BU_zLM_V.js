import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,d as o,f as s,i as c,l,n as u,r as d,s as f,t as p,u as m}from"./decorate-33sGx9Ox.js";var h,g=e((()=>{h=`
kuc-base-datetime-listbox,
kuc-base-datetime-listbox *,
kuc-base-datetime-listbox:lang(en),
kuc-base-datetime-listbox:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-listbox:lang(ja),
kuc-base-datetime-listbox:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-listbox:lang(zh),
kuc-base-datetime-listbox:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-listbox:lang(zh-TW),
kuc-base-datetime-listbox:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-base-datetime-listbox:lang(es),
kuc-base-datetime-listbox:lang(es) * {
  font-family: sans-serif;
}
.kuc-base-datetime-listbox__listbox[popover] {
  margin: 0;
  padding: 8px 0;
  box-sizing: border-box;
  border: 1px solid #e3e7e8;
  background-color: #ffffff;
  list-style: none;
  line-height: 1;
  overflow-y: auto;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  position: fixed;
  z-index: 2000;
}
.kuc-base-datetime-listbox__listbox__item {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: 130px;
  padding: 8px 16px 8px 25px;
  color: #333333;
  cursor: pointer;
  -webkit-tap-highlight-color: initial;
  text-align: left;
  font-size: 14px;
  user-select: none;
}
.kuc-base-datetime-listbox__listbox__item[aria-selected="true"] {
  color: #3498db;
}
.kuc-base-datetime-listbox__listbox--highlight {
  background-color: #e2f2fe;
  cursor: pointer;
}
.kuc-base-datetime-listbox__listbox__item__icon {
  position: absolute;
  left: 8px;
  top: 10px;
  background-color: transparent;
}
.kuc-base-datetime-listbox__listbox__item:focus {
  outline: none;
}
`})),_,v=e((()=>{r(),a(),f(),g(),u(),_=class extends d{constructor(){super(),this.value=``,this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout(()=>{document.addEventListener(`click`,this._handleClickDocument)},1)}disconnectedCallback(){document.removeEventListener(`click`,this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}showPopover(){this.requestUpdate(),this._listBoxEl?.showPopover()}hidePopover(){this._listBoxEl?.hidePopover(),this.requestUpdate()}render(){return n`
      <ul
        popover="manual"
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map(e=>this._getListBoxItemTemplate(e))}
      </ul>
    `}async updated(e){await this.updateComplete,e.has(`value`)&&this._highlightSelectedItem(),this._scrollToView(),super.updated(e)}_handleClickDocument(){i(this,`kuc:listbox-blur`,{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case`Up`:case`ArrowUp`:this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Down`:case`ArrowDown`:this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case`Home`:this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case`End`:this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case`Tab`:i(this,`kuc:listbox-click`,{});break;case`Escape`:i(this,`kuc:listbox-escape`,{});break;case` `:case`Enter`:{let e={value:this._highlightItemEl.getAttribute(`value`)||``};i(this,`kuc:listbox-click`,e);break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;let t={value:e.target.getAttribute(`value`)||``};i(this,`kuc:listbox-click`,t)}_handleMouseOverItem(e){if(this._actionKeyboard){this._actionKeyboard=!1;return}let t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add(`kuc-base-datetime-listbox__listbox--highlight`),e.setAttribute(`tabindex`,`0`)}_highlightSelectedItem(){if(!this.doFocus)return;let e=Array.from(this._itemsEl).filter(e=>e.getAttribute(`aria-selected`)===`true`)[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightFirstItem();return}let e=this._getNextItemEl();if(e){this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e;return}this._highlightFirstItem()}_getNextItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(this._highlightItemEl===null||this._iconChecked===null){this._highlightLastItem();return}let e=this._getPreviousItemEl();if(e){this._setHighlightItemEl(e),this._firstHighlight=!1,this._itemSelectedEl=e;return}this._highlightLastItem()}_getPreviousItemEl(){let e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute(`tabindex`,`-1`),this._highlightItemEl.classList.remove(`kuc-base-datetime-listbox__listbox--highlight`))}_focusHighlightItemEl(e){let t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),e!==!1&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){let e={value:this._highlightItemEl.getAttribute(`value`)||``};i(this,`kuc:listbox-focus-change`,e)}_scrollToView(){let e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;let t=e.offsetHeight,n=this._listBoxEl.clientHeight/t/2,r=e.offsetTop-n*t;r<0&&(r=0),this._listBoxEl.scrollTop=r}_getHighlightItemByValue(){let e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`)),n=e.find(e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t);return n||=e[e.length-1],!this.doFocus||!n?n:(this._setHighlightItemEl(n),this._focusHighlightItemEl(),n)}_getListBoxItemTemplate(e){let t=this.value===e.value&&this.doFocus;return n`
      <li
        class="kuc-base-datetime-listbox__listbox__item"
        role="option"
        tabindex="${t?`0`:`-1`}"
        aria-selected="${t}"
        title="${e.label||``}"
        value="${e.value===void 0?``:e.value}"
        @mouseover="${this._handleMouseOverItem}"
        @keydown="${this._handleKeyDownListBox}"
      >
        ${t?this._getCheckedIconSvgTemplate():``}
        ${e.label===void 0?e.value:e.label}
      </li>
    `}_getCheckedIconSvgTemplate(){return t`<svg
          class="kuc-base-datetime-listbox__listbox__item__icon"
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
            fill="#3498db"
          />
        </svg>`}},p([s({type:String})],_.prototype,`value`,void 0),p([s({type:Array})],_.prototype,`items`,void 0),p([s({type:Number})],_.prototype,`maxHeight`,void 0),p([s({type:Boolean})],_.prototype,`doFocus`,void 0),p([m(`.kuc-base-datetime-listbox__listbox`)],_.prototype,`_listBoxEl`,void 0),p([l(`.kuc-base-datetime-listbox__listbox__item`)],_.prototype,`_itemsEl`,void 0),p([m(`.kuc-base-datetime-listbox__listbox__item`)],_.prototype,`_firstItemEl`,void 0),p([m(`.kuc-base-datetime-listbox__listbox__item:last-child`)],_.prototype,`_lastItemEl`,void 0),p([m(`.kuc-base-datetime-listbox__listbox--highlight`)],_.prototype,`_highlightItemEl`,void 0),p([m(`.kuc-base-datetime-listbox__listbox__item__icon`)],_.prototype,`_iconChecked`,void 0),p([o()],_.prototype,`_actionKeyboard`,void 0),p([o()],_.prototype,`_firstHighlight`,void 0),window.customElements.get(`kuc-base-datetime-listbox`)||(c(h),window.customElements.define(`kuc-base-datetime-listbox`,_))}));export{v as t};