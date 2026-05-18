import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,f as o,i as s,n as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{n as p,o as m}from"./converter-BYYAaneI.js";var h,g=e((()=>{h=`
  .kuc-base-pagination__group {
    margin-top: 10px;
  }
  .kuc-base-pagination__group button {
    cursor: pointer;
  }
  .kuc-base-pagination__group__pager-prev {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination__group__pager-next {
    border: none;
    background-color: transparent;
    visibility: visible;
    height: 23px;
    vertical-align: middle;
  }
  .kuc-base-pagination__group__pager-next:hover svg path,
  .kuc-base-pagination__group__pager-prev:hover svg path,
  .kuc-base-pagination__group__pager-next:focus-visible svg path,
  .kuc-base-pagination__group__pager-prev:focus-visible svg path
  {
    fill: #3498db;
  }
  .kuc-base-pagination__group__pager--focus,
  .kuc-base-pagination__group__pager-next:focus-visible,
  .kuc-base-pagination__group__pager-prev:focus-visible {
    outline: 1px solid #3498db;
  }
  .kuc-base-pagination__group__pager--horver svg path {
    fill: #3498db;
  }
  .kuc-base-pagination__group__pager-next svg,
  .kuc-base-pagination__group__pager-prev svg {
    margin-top: 3px;
  }
  .kuc-base-pagination__group__pager-disable {
    visibility: hidden;
  }
  .kuc-base-pagination__group__pager-current {
    display: inline-block;
    height: 23px;
    line-height: 23px;
    vertical-align: middle;
    font-size: 14px;
    color: #333333;
  }
`})),_,v=e((()=>{r(),a(),p(),u(),g(),c(),(()=>{if(_=window.customElements.get(`kuc-base-pagination`),_)return;class e extends l{constructor(...e){super(...e),this.pagePosition=1,this.rowsPerPage=5,this.total=1,this.isNext=!0,this.isPrev=!0,this.visible=!0}render(){return n`
        <div class="kuc-base-pagination__group" ?hidden="${!this.visible}">
          <button
            title="previous"
            class="kuc-base-pagination__group__pager-prev${this.isPrev?``:` kuc-base-pagination__group__pager-disable`}"
            type="button"
            @click="${this._handleClickPrevButton}"
            @focus="${this._handleFocusPrevButton}"
            @blur="${this._handleBlurPrevButton}"
            @mouseover="${this._handleMouseOverPrevButton}"
            @mouseleave="${this._handleMouseLeavePrevButton}"
          >
            ${this._getPrevButtonSvgTemplate()}</button
          >${this._getCurrentPageNumberTemplate()}<button
            title="next"
            class="kuc-base-pagination__group__pager-next${this.isNext?``:` kuc-base-pagination__group__pager-disable`}"
            type="button"
            @click="${this._handleClickNextButton}"
            @focus="${this._handleFocusNextButton}"
            @blur="${this._handleBlurNextButton}"
            @mouseover="${this._handleMouseOverNextButton}"
            @mouseleave="${this._handleMouseLeaveNextButton}"
          >
            ${this._getNextButtonSvgTemplate()}
          </button>
        </div>
      `}_handleClickPrevButton(e){e.stopPropagation(),i(this,`kuc:pagination-click-prev`)}_handleFocusPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination__group__pager--focus`)}_handleBlurPrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination__group__pager--focus`)}_handleMouseOverPrevButton(){this._prevButtonEl.classList.add(`kuc-base-pagination__group__pager--horver`)}_handleMouseLeavePrevButton(){this._prevButtonEl.classList.remove(`kuc-base-pagination__group__pager--horver`)}_handleClickNextButton(e){e.stopPropagation(),i(this,`kuc:pagination-click-next`)}_handleFocusNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination__group__pager--focus`)}_handleBlurNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination__group__pager--focus`)}_handleMouseOverNextButton(){this._nextButtonEl.classList.add(`kuc-base-pagination__group__pager--horver`)}_handleMouseLeaveNextButton(){this._nextButtonEl.classList.remove(`kuc-base-pagination__group__pager--horver`)}_getPrevButtonSvgTemplate(){return t`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="#888888"
          />
        </svg>
      `}_getNextButtonSvgTemplate(){return t`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="#888888"
        />
      </svg>
      `}_getCurrentPageNumberTemplate(){let e=this._createCurrentPageInfo();return n`<span class="kuc-base-pagination__group__pager-current"
        >${`${e.firstNum} - ${e.lastNum} / ${this.total}`}</span
      >`}_createCurrentPageInfo(){let e=(this.pagePosition-1)*this.rowsPerPage+1,t=this.pagePosition*this.rowsPerPage;return t=t>this.total?this.total:t,{firstNum:e,lastNum:t}}}d([o({type:Number})],e.prototype,`pagePosition`,void 0),d([o({type:Number})],e.prototype,`rowsPerPage`,void 0),d([o({type:Number})],e.prototype,`total`,void 0),d([o({type:Boolean})],e.prototype,`isNext`,void 0),d([o({type:Boolean})],e.prototype,`isPrev`,void 0),d([o({type:Boolean,attribute:`hidden`,reflect:!0,converter:m})],e.prototype,`visible`,void 0),d([f(`.kuc-base-pagination__group__pager-prev`)],e.prototype,`_prevButtonEl`,void 0),d([f(`.kuc-base-pagination__group__pager-next`)],e.prototype,`_nextButtonEl`,void 0),window.customElements.define(`kuc-base-pagination`,e),s(h),_=e})()}));export{v as t};