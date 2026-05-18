import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{c as r,f as i,i as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./decorate-33sGx9Ox.js";import{a as f,n as p}from"./converter-BYYAaneI.js";import{f as m,n as h,t as g}from"./validator-d05NeqaQ.js";var _,v=e((()=>{_=`
  kuc-tooltip,
  kuc-tooltip *,
  kuc-tooltip:lang(en),
  kuc-tooltip:lang(en) * {
    font-family: sans-serif;
  }
  kuc-tooltip:lang(es),
  kuc-tooltip:lang(es) * {
    font-family: sans-serif;
  }
  kuc-tooltip:lang(ja),
  kuc-tooltip:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tooltip:lang(zh),
  kuc-tooltip:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tooltip:lang(zh-TW),
  kuc-tooltip:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  .kuc-tooltip__group {
    position: relative;
    display: inline-block;
  }
  .kuc-tooltip__group::after {
    position: absolute;
    right: -20%;
    top: 100%;
    left: -20%;
    display: block;
    height: calc(0.5em * 2);
  }
  .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper__text {
    max-width: var(--kuc-tooltip-width, 250px);
    width: var(--kuc-tooltip-width, auto);
    min-height: var(--kuc-tooltip-height, 32px);;
    height: var(--kuc-tooltip-height, auto);
    padding: 6px 8px;
    color: var(--kuc-tooltip-color, #ffffff);
    text-align: start;
    text-decoration: none;
    word-wrap: break-word;
    overflow: auto;
    white-space: normal;
    background-color: var(--kuc-tooltip-background-color, #000000);
    font-size: var(--kuc-tooltip-font-size);
    border-radius: 6px;
    box-sizing: border-box;
  }
  .kuc-tooltip__group__title[popover] {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border-width: 0;
    border-radius: 0.25em;
    color: var(--kuc-tooltip-color, #ffffff);
    width: max-content;
  }
  .kuc-tooltip__group .kuc-tooltip__group__title__wrapper__arrow {
    border: 0.5em solid transparent;
    border-bottom-color: var(--kuc-tooltip-background-color, #000000);
  }
  .kuc-tooltip__group.kuc-tooltip__group--top > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper__arrow {
    border-top-color: var(--kuc-tooltip-background-color, #000000);
    border-right-color: transparent;
    border-bottom-color: transparent;
    margin: auto 0;
  }
  .kuc-tooltip__group.kuc-tooltip__group--left > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper__arrow {
    border-left-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
  }
  .kuc-tooltip__group.kuc-tooltip__group--right > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper__arrow {
    border-right-color: var(--kuc-tooltip-background-color, #000000);
    border-bottom-color: transparent;
    width: fit-content;
    height: fit-content;
    margin: auto 0;
    top: 0;
    bottom: 0;
    right: 100%;
    left: auto;
  }
  .kuc-tooltip__group.kuc-tooltip__group--left > .kuc-tooltip__group__title,
  .kuc-tooltip__group.kuc-tooltip__group--right > .kuc-tooltip__group__title {
    width: max-content;
    height: fit-content;
  }
  .kuc-tooltip__group .kuc-tooltip__group__title__wrapper {
    display: flex;
    align-items: center;
  }
  .kuc-tooltip__group.kuc-tooltip__group--top > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper {
    flex-direction: column-reverse;
  }
  .kuc-tooltip__group.kuc-tooltip__group--bottom > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper {
    flex-direction: column;
  }
  .kuc-tooltip__group.kuc-tooltip__group--left > .kuc-tooltip__group__title .kuc-tooltip__group__title__wrapper {
    flex-direction: row-reverse;
  }
`})),y,b,x=e((()=>{n(),r(),p(),l(),g(),v(),o(),(()=>{if(y=window.customElements.get(`kuc-tooltip`),y)return;class e extends c{constructor(e){super(),this.className=``,this.id=``,this.placement=`top`,this.title=``,this.container=``,this.describeChild=!1,this._container=``,this._scrollTargets=[],this._timeoutID=null,this._handleScroll=()=>{this._timeoutID!==null&&clearTimeout(this._timeoutID),this._timeoutID=window.setTimeout(()=>{this._setTooltipPositionBound(),this._timeoutID=null},20)},this._GUID=s();let t=m(e);Object.assign(this,t),this._globalEscapeBound=this._globalEscape.bind(this),this._setTooltipPositionBound=this._setTooltipPosition.bind(this)}update(e){e.has(`container`)&&(this.container&&h(this.container)?this._container=f(this.container):this._container=this.container),super.update(e)}render(){return t`
        <div
          class="kuc-tooltip__group kuc-tooltip__group--${this._getPlacement()}"
        >
          <div
            class="kuc-tooltip__group__container"
            @focusin="${this._handleFocusinContainer}"
            @focusout="${this._handleFocusoutContainer}"
            @mouseenter="${this._handleMouseEnterContainer}"
            @mouseleave="${this._handleMouseLeaveContainer}"
            @touchstart="${this._handleTouchStartContainer}"
          >
            ${this._container}
          </div>
          ${this._getTitleTemplate()}
        </div>
      `}updated(){this._initializeFirstChildElement(),this.describeChild?this._setChildTitleAttribute():this._setChildAriaLabelAttribute()}_handleMouseEnterContainer(){this._openTooltip()}_handleTouchStartContainer(){this._openTooltip()}_handleMouseLeaveContainer(e){let t=e.relatedTarget;this._titleWrapper&&this._titleWrapper.contains(t)||this._closeTooltip()}_initializeFirstChildElement(){if(typeof this._container!=`string`){let e=this._groupContainerEL.firstElementChild;e&&!e.getAttribute(`aria-describedby`)&&(this._firstChildEl=e)}}_setChildTitleAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`title`,this.title),this._firstChildEl.removeAttribute(`aria-label`))}_setChildAriaLabelAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute(`aria-label`,this.title),this._firstChildEl.removeAttribute(`title`))}_getTitleTemplate(){return this.title?t`
        <div
          id="${this._GUID}-title"
          popover="manual"
          class="kuc-tooltip__group__title"
          role="tooltip"
          @mouseleave="${this._handleMouseLeaveTitle}"
        >
          <div class="kuc-tooltip__group__title__wrapper">
            <div class="kuc-tooltip__group__title__wrapper__arrow"></div>
            <div class="kuc-tooltip__group__title__wrapper__text">
              ${this.title}
            </div>
          </div>
        </div>
      `:t``}_handleMouseLeaveTitle(e){let t=e.relatedTarget;this._groupContainerEL.contains(t)||this._closeTooltip()}_handleFocusinContainer(){this._openTooltip()}_handleFocusoutContainer(){this._closeTooltip()}_openTooltip(){this._updateChildElementAttributes(!0);let e=this.querySelector(`.kuc-tooltip__group__title`);e&&(e.showPopover(),requestAnimationFrame(()=>{this._setTooltipPosition()})),this._attachGlobalListener()}_closeTooltip(){this._updateChildElementAttributes(!1);let e=this.querySelector(`.kuc-tooltip__group__title`);e&&e.hidePopover(),this._removeGlobalListener()}_updateChildElementAttributes(e){if(!(!this._firstChildEl||!this.describeChild)){if(e){this._firstChildEl.removeAttribute(`title`),this._firstChildEl.setAttribute(`aria-describedby`,`${this._GUID}-title`);return}this._firstChildEl.removeAttribute(`aria-describedby`),this._firstChildEl.setAttribute(`title`,this.title)}}_attachGlobalListener(){document.addEventListener(`keydown`,this._globalEscapeBound),this._scrollTargets=this._getScrollableAncestors(this._containerEl);for(let e of this._scrollTargets)e.addEventListener(`scroll`,this._handleScroll,{passive:!0})}_removeGlobalListener(){document.removeEventListener(`keydown`,this._globalEscapeBound);for(let e of this._scrollTargets)e.removeEventListener(`scroll`,this._handleScroll);this._scrollTargets=[],this._timeoutID!==null&&(clearTimeout(this._timeoutID),this._timeoutID=null)}_getScrollableAncestors(e){let t=[],n=e.parentElement,r=/(auto|scroll|overlay)/;for(;n&&n!==document.body&&n!==document.documentElement;){let e=getComputedStyle(n);(r.test(e.overflowY)||r.test(e.overflowX))&&t.push(n),n=n.parentElement}return t.push(window),t}_globalEscape(e){(e.key===`Escape`||e.key===`Esc`)&&this._closeTooltip()}_getPlacement(){return[`top`,`bottom`,`left`,`right`].includes(this.placement)?this.placement:`top`}_setTooltipPosition(){if(!this._titleEl||!this._containerEl)return;let e=this._containerEl.getBoundingClientRect(),t=this._titleEl.getBoundingClientRect(),n,r;switch(this.placement){case`bottom`:n=e.bottom,r=e.left+e.width/2-t.width/2;break;case`left`:n=e.top+e.height/2-t.height/2,r=e.left-t.width;break;case`right`:n=e.top+e.height/2-t.height/2,r=e.right;break;default:n=e.top-t.height,r=e.left+e.width/2-t.width/2}this._titleEl.style.position=`fixed`,this._titleEl.style.top=`${Math.round(n)}px`,this._titleEl.style.left=`${Math.round(r)}px`,this._titleEl.style.transform=`none`}}u([i({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),u([i({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),u([i({type:String})],e.prototype,`placement`,void 0),u([i({type:String})],e.prototype,`title`,void 0),u([i()],e.prototype,`container`,void 0),u([i({type:Boolean})],e.prototype,`describeChild`,void 0),u([d(`.kuc-tooltip__group__container`)],e.prototype,`_groupContainerEL`,void 0),u([d(`.kuc-tooltip__group__title__wrapper`)],e.prototype,`_titleWrapper`,void 0),u([d(`.kuc-tooltip__group__container`)],e.prototype,`_containerEl`,void 0),u([d(`.kuc-tooltip__group__title`)],e.prototype,`_titleEl`,void 0),window.customElements.define(`kuc-tooltip`,e),a(_),y=e})(),b=y}));export{x as n,b as t};