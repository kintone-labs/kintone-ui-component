import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{S as p,_ as m,h,p as g,v as _}from"./utils-BITFIerI.js";var v,y=e((()=>{v=`
.kuc-base-datetime-header-month__toggle {
  position: relative;
  box-sizing: border-box;
  height: 32px;
  padding: 0 24px 0 8px;
  line-height: 30px;
  overflow: hidden;
  background-color: white;
  border: 1px solid transparent;
  cursor: pointer;
}
.kuc-base-datetime-header-month__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-month__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-month__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`})),b,x=e((()=>{n(),i(),u(),_(),y(),c(),b=class extends l{constructor(...e){super(...e),this.language=`auto`,this.month=1,this._listBoxVisible=!1,this._locale=g(`en`),this._monthLabel=``,this._maxHeight=1e3,this._scrollTargets=[],this._listBoxMaxHeight=378,this._boundOnScrollAndResize=()=>p({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){e.has(`language`)&&(this._locale=g(this.language),this._listBoxItems=this._getListBoxItems()),e.has(`month`)&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return t`
      <button
        class="kuc-base-datetime-header-month__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?`-1`:`0`}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month__toggle__icon"
          >${m()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){!this._listBoxVisible||!this._listBoxEl||p({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=h(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),this._toggleEl?.focus()}_getListBoxTemplate(){return this._listBoxVisible?t`
          <kuc-base-datetime-listbox
            .items="${this._listBoxItems||[]}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox>
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),r(this,`kuc:month-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return e===`Tab`}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);let t={value:`${this.month}`};r(this,`kuc:month-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),p({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getListBoxItems(){return this._locale.MONTH_SELECT.map((e,t)=>({value:`${t+1}`,label:`${e}`}))}_getMonthLabel(){let e=this._locale.MONTH_SELECT.filter((e,t)=>this.month===t+1);return e.length>0?e[0]:`JANUARY`}},d([o({type:String,attribute:`lang`,reflect:!0})],b.prototype,`language`,void 0),d([o({type:Number})],b.prototype,`month`,void 0),d([a()],b.prototype,`_listBoxVisible`,void 0),d([f(`.kuc-base-datetime-header-month__toggle`)],b.prototype,`_toggleEl`,void 0),d([f(`.kuc-base-datetime-header-month__listbox`)],b.prototype,`_listBoxEl`,void 0),d([f(`.kuc-base-datetime-listbox__listbox`)],b.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-month`)||(s(v),window.customElements.define(`kuc-base-datetime-header-month`,b))}));export{x as t};