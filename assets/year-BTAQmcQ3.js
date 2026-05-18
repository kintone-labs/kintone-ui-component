import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{S as p,_ as m,h,v as g}from"./utils-BITFIerI.js";var _,v=e((()=>{_=`
.kuc-base-datetime-header-year__toggle {
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
.kuc-base-datetime-header-year__toggle__icon {
  position: absolute;
  flex: none;
  width: 24px;
  height: 32px;
}
.kuc-base-datetime-header-year__toggle__label {
  font-size: 13px;
  color: #333333;
}
.kuc-base-datetime-header-year__toggle:focus {
  border: 1px solid #3498db;
  outline: none;
}
`})),y,b=e((()=>{n(),i(),u(),g(),v(),c(),y=class extends l{constructor(...e){super(...e),this.year=new Date().getFullYear(),this.postfix=``,this._listBoxVisible=!1,this._listBoxMaxHeight=300,this._scrollTargets=[],this._boundOnScrollAndResize=()=>p({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map(e=>({value:`${e}`,label:`${e}${this.postfix}`})),super.update(e)}render(){return t`
      <button
        class="kuc-base-datetime-header-year__toggle"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?`-1`:`0`}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year__toggle__icon"
          >${m()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,super.update(e)}repositionListBox(){!this._listBoxVisible||!this._listBoxEl||p({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight})}_attachListeners(){this._detachListeners(),this._scrollTargets=h(this._toggleEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScrollAndResize,{passive:!0})}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScrollAndResize);this._scrollTargets=[]}closeListBox(){this._listBoxEl&&this._listBoxEl.hidePopover(),this._listBoxVisible=!1,this._detachListeners(),this._toggleEl?.focus()}_getListBoxTemplate(){return this._listBoxVisible?t`
          <kuc-base-datetime-listbox
            .items="${this._listBoxItems||[]}"
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox>
        `:``}_handleFocusOutListBox(){this.closeListBox()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),r(this,`kuc:year-dropdown-click`,{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){e.key!==`Tab`&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[` `,`Up`,`ArrowUp`,`Down`,`ArrowDown`,`Enter`].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);let t={value:`${this.year}`};r(this,`kuc:year-dropdown-change`,t)}async _openListBox(){this._listBoxVisible=!0,await this.updateComplete,this._listBoxEl&&(this._listBoxEl.showPopover(),p({anchorEl:this._toggleEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight}),this._attachListeners())}_getYearOptions(){let e=[];Number.isInteger(this.year)||(this.year=new Date().getFullYear());let t=this.year<100?0:this.year-100,n=this.year>=9899?9999:this.year+100;for(;t<=n;t++)e.push(t);return e}},d([o({type:Number})],y.prototype,`year`,void 0),d([o({type:String})],y.prototype,`postfix`,void 0),d([a()],y.prototype,`_listBoxVisible`,void 0),d([f(`.kuc-base-datetime-header-year__toggle`)],y.prototype,`_toggleEl`,void 0),d([f(`.kuc-base-datetime-header-year__listbox`)],y.prototype,`_listBoxEl`,void 0),d([f(`.kuc-base-datetime-listbox__listbox`)],y.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-datetime-header-year`)||(s(_),window.customElements.define(`kuc-base-datetime-header-year`,y))}));export{b as t};