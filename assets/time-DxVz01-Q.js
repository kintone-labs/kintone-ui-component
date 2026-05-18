import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{A as p,C as m,S as h,a as g,b as _,h as v,j as y,p as b,r as x,u as S,v as C,x as w}from"./utils-BITFIerI.js";import{t as T}from"./listbox-BU_zLM_V.js";var E,D=e((()=>{E=`
:lang(ja) .kuc-base-time__group input.kuc-base-time__group__hours,
:lang(ja) .kuc-base-time__group input.kuc-base-time__group__minutes {
  width: 2ch;
}
.kuc-base-time__group {
  display: inline-flex;
  position: relative;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  max-width: 85px;
  width: 85px;
  height: 40px;
  color: #333333;
  border: solid 1px #e3e7e8;
  box-sizing: border-box;
  padding: 0px 8px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  background-color: #ffffff;
  overflow: hidden;
}
.kuc-base-time__group input.kuc-base-time__group__hours {
  border: 0px;
  padding: 0px;
  width: 2ch;
  font-size: inherit;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time__group input.kuc-base-time__group__minutes {
  border: 0px;
  padding: 0px;
  width: 2ch;
  font-size: inherit;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time__group input.kuc-base-time__group__hours:focus {
  border: 0px;
}
.kuc-base-time__group input.kuc-base-time__group__minutes:focus {
  border: 0px;
}
.kuc-base-time__group__colon {
  width: auto;
  text-align: center;
}
.kuc-base-time__group input.kuc-base-time__group__suffix {
  border: 0px;
  width: 3ch;
  text-align: right;
  font-size: inherit;
  outline: none;
  appearance: none;
  margin-left: 1px;
  padding: 0px;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time__group--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-base-time__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
.kuc-base-time__group--disabled {
  background-color: #d4d7d7;
  box-shadow: none;
  color: #888888;
  cursor: not-allowed;
}
.kuc-base-time__group--disabled input:disabled,
.kuc-base-time__group--disabled span {
  cursor: not-allowed;
  color: #888888;
  -webkit-text-fill-color: #888888;
}
`})),O,k=e((()=>{n(),i(),u(),T(),y(),C(),D(),c(),O=class extends l{constructor(...e){super(...e),this.language=`en`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.timeStep=30,this._listBoxVisible=!1,this._valueLabel=``,this._doFocusListBox=!1,this._hours=``,this._minutes=``,this._suffix=``,this._valueForReset=``,this._locale=b(`en`),this._scrollTargets=[],this._listBoxMaxHeight=165,this._listBoxMaxWidth=0,this._resizeDebounceTimer=null,this._DEBOUNCE_DELAY=200,this._schedulePositionOnResize=()=>{this._listBoxVisible&&(this._resizeDebounceTimer!==null&&window.clearTimeout(this._resizeDebounceTimer),this._resizeDebounceTimer=window.setTimeout(()=>{this._resizeDebounceTimer=null,h({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})},this._DEBOUNCE_DELAY))},this._boundOnScroll=()=>h({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth})}disconnectedCallback(){this._detachListeners(),super.disconnectedCallback()}update(e){(e.has(`hour12`)||e.has(`timeStep`)||e.has(`max`)||e.has(`min`))&&(this._listBoxItems=S(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),e.has(`value`)&&this._updateInputValue(),e.has(`language`)&&(this._locale=b(this.language)),super.update(e)}render(){return t`
      <div class="kuc-base-time__group" @click="${this._handleClickInputGroup}">
        <input
          type="text"
          class="kuc-base-time__group__hours"
          role="spinbutton"
          tabindex="${this._hours?`0`:`-1`}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes?`0`:`-1`}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){e.has(`disabled`)&&this._toggleDisabledGroup(),super.update(e)}_handleClickInputGroup(e){if(this.disabled)return;if(this.value===``){this._toggleEl.focus(),this._openListBox();return}let t=e.target;if(this._openListBox(),t.tagName.toUpperCase()===`INPUT`){t.select();return}this._hoursEl.select()}_handleBlurListBox(e){e.preventDefault(),!this._inputFocusEl&&this._closeListBox()}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add(`kuc-base-time__group--disabled`):this._inputGroupEl.classList.remove(`kuc-base-time__group--disabled`)}_updateInputValue(){let e=g(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||``,this._valueLabel=this._getValueLabel(e),this._inputGroupEl&&(this._setValueToInput(e),this._inputFocusEl?.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return``;let t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||``)}_handleKeyDownButton(e){switch(e.key){case`Tab`:case`Escape`:if(e.key===`Escape`&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case`Enter`:case` `:case`ArrowUp`:case`ArrowDown`:e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key);break}}_handleBlurButton(){this._inputGroupEl.classList.remove(`kuc-base-time__group--focus`)}_handleFocusButton(e){e.stopPropagation(),this._inputGroupEl.classList.add(`kuc-base-time__group--focus`)}_openListBoxByKey(){return this._listBoxVisible?!1:(this._valueForReset=this.value,this._openListBox(),this._doFocusListBox=!0,this._inputGroupEl.classList.remove(`kuc-base-time__group--focus`),!0)}_handleListBoxEscape(){if(this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),this.value===``){this._toggleEl.focus();return}this._hoursEl.select()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||this.value!==``)return;let t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;let t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){let t=e.detail.value,n=x(t);this._actionUpdateInputValue(n)}_handleFocusInput(e){this._inputFocusEl=e.target,this._inputFocusEl.select(),this._inputGroupEl.classList.add(`kuc-base-time__group--focus`)}_handleBlurInput(e){this._inputFocusEl=null;let t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._closeListBox(),this._inputGroupEl.classList.remove(`kuc-base-time__group--focus`))}_handleTabKey(e){return e.key===`Tab`}_handleKeyDownInput(e){this._closeListBox(),!this._handleTabKey(e)&&this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleSupportedKey(e){e.preventDefault();let t=e.key,n;switch(t){case`Enter`:case`ArrowRight`:this._actionSelectNextRange();break;case`ArrowLeft`:this._actionSelectPreviousRange();break;case`ArrowUp`:n=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(n);break;case`ArrowDown`:n=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(n);break;case`Backspace`:case`Delete`:n=this._computeDeleteValue(),this._actionUpdateInputValue(n);break;default:n=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(n);break}}_actionUpdateInputValue(e){let t=x(this.value===``?this.value:this._formatKeyDownValue()),n=x(e);t!==n&&(this.value=n,this._dispatchEventTimeChange(n,t))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:`00`}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:`00`}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){let e=this._suffix===p.AM?p.PM:p.AM;return this._formatKeyDownValue({suffix:e})}if([`a`,`A`,`p`,`P`].indexOf(e)===-1)return this._formatKeyDownValue();let t=e===`a`||e===`A`?p.AM:p.PM;return this.value===``&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=12,t=t<=0?12:t):(t%=24,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){let t=w(this._getPreviousMinutes(this._minutes)+e);return this.value===``?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:t})}_computeNumberKeyValueHours(e){let t=w(this._getPreviousHours(this._hours,e)+e);return this.value===``?this._formatKeyDownValue({hours:t,minutes:`00`}):this._formatKeyDownValue({hours:t})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(``+e)[1]:``+e,t=parseInt(t,10)>5?`0`:t,t}_getPreviousHours(e,t){let n;n=parseInt(e,10)>10?(``+e)[1]:``+e;let r=parseInt(n+t,10);return n=this.hour12&&r>12||!this.hour12&&r>=24?`0`:n,n}_actionSelectNextRange(){if(this._inputFocusEl===this._hoursEl){this._minutesEl.select();return}this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select()}_actionSelectPreviousRange(){if(this._inputFocusEl===this._suffixEl){this._minutesEl.select();return}this._inputFocusEl===this._minutesEl&&this._hoursEl.select()}_dispatchEventTimeChange(e,t){let n={value:e,oldValue:t};(m(e,this.min)<0||m(this.max,e)<0)&&(n.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),r(this,`kuc:base-time-change`,n)}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){let t=e.hours||this._hours,n=e.minutes||this._minutes,r=e.suffix||this._suffix,i=`${w(t)}:${w(n)}`;return r?`${i} ${r}`:i}async _openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0,await this.updateComplete,this._listboxEl&&(this._listboxEl.showPopover(),this._listBoxMaxWidth=_(this._listBoxUl).width,h({anchorEl:this._inputGroupEl,popoverEl:this._listBoxUl,popoverHeight:this._listBoxMaxHeight,popoverWidth:this._listBoxMaxWidth}),this._attachListeners()))}_attachListeners(){this._detachListeners(),this._scrollTargets=v(this._inputGroupEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._boundOnScroll,{passive:!0});window.addEventListener(`resize`,this._schedulePositionOnResize)}_detachListeners(){for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._boundOnScroll);this._scrollTargets=[],window.removeEventListener(`resize`,this._schedulePositionOnResize)}_closeListBox(){this._doFocusListBox=!1,this._listBoxVisible=!1,this._listboxEl?.hidePopover(),this._detachListeners()}_getColonTemplate(){return this._hours?t` <span class="kuc-base-time__group__colon">:</span> `:``}_getSuffixTemplate(){return this.hour12?t`
          <input
            class="kuc-base-time__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix?`0`:`-1`}"
            aria-label="${this._suffix||`suffix`}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `:``}_getListBoxTemplate(){return this._listBoxVisible?t`
          <kuc-base-datetime-listbox
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time__group__listbox"
            .items="${this._listBoxItems||[]}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox>
        `:``}},d([o({type:String,attribute:`lang`,reflect:!0})],O.prototype,`language`,void 0),d([o({type:String})],O.prototype,`max`,void 0),d([o({type:String})],O.prototype,`min`,void 0),d([o({type:String})],O.prototype,`value`,void 0),d([o({type:Boolean})],O.prototype,`disabled`,void 0),d([o({type:Boolean})],O.prototype,`hour12`,void 0),d([o({type:Number})],O.prototype,`timeStep`,void 0),d([a()],O.prototype,`_listBoxVisible`,void 0),d([a()],O.prototype,`_valueLabel`,void 0),d([a()],O.prototype,`_doFocusListBox`,void 0),d([a()],O.prototype,`_hours`,void 0),d([a()],O.prototype,`_minutes`,void 0),d([a()],O.prototype,`_suffix`,void 0),d([a()],O.prototype,`_inputFocusEl`,void 0),d([f(`.kuc-base-time__group__hours`)],O.prototype,`_hoursEl`,void 0),d([f(`.kuc-base-time__group__minutes`)],O.prototype,`_minutesEl`,void 0),d([f(`.kuc-base-time__group__suffix`)],O.prototype,`_suffixEl`,void 0),d([f(`.kuc-base-time__assistive-text`)],O.prototype,`_toggleEl`,void 0),d([f(`.kuc-base-time__group`)],O.prototype,`_inputGroupEl`,void 0),d([f(`.kuc-base-time__group__listbox`)],O.prototype,`_listboxEl`,void 0),d([f(`.kuc-base-datetime-listbox__listbox`)],O.prototype,`_listBoxUl`,void 0),window.customElements.get(`kuc-base-time`)||(s(E),window.customElements.define(`kuc-base-time`,O))}));export{k as t};