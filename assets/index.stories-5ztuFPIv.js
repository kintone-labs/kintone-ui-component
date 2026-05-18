import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./decorate-33sGx9Ox.js";import{a as p,n as m,o as h}from"./converter-BYYAaneI.js";import{t as g}from"./label-D4AWTD2g.js";import{f as _,n as v,t as y}from"./validator-d05NeqaQ.js";import{n as b,t as x}from"./date-picker-4749uxp9.js";import{n as S,t as C}from"./dropdown-BbOEfyZ5.js";import{n as w,t as T}from"./text-4QviyCTu.js";import{n as E,t as D}from"./textarea-CzrU2iqj.js";import{n as O,t as k}from"./time-picker-XZuAZLxF.js";var A,j=e((()=>{A=`
  kuc-field-group .kuc-field-group__group__toggle .kuc-base-label__text,
  kuc-field-group:lang(en) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: sans-serif;
  }
  kuc-field-group:lang(es) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: sans-serif;
  }
  kuc-field-group:lang(ja) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-field-group:lang(zh) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-field-group:lang(zh-TW) .kuc-field-group__group__toggle .kuc-base-label__text {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-field-group {
    display: inline-table;
  }
  kuc-field-group[hidden] {
    display: none;
  }
  .kuc-field-group__group {
    min-width: 517px;
    padding: 0px 8px;
    border: 1px solid #e3e7e8;
    background-color: #f5f5f5;
  }
  .kuc-field-group__group h3 {
    margin: 0px;
    padding: 0px;
  }
  .kuc-field-group__group__toggle {
    display: flex;
    align-items: center;
    border-style: none;
    position: relative;
    outline: none;
    margin: 12px 0px 12px 8px;
    min-height: 34px;
    padding: 4px 8px 4px 24px;
    color: #333333;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: inherit;
    line-height: 1.5;
  }
  .kuc-field-group__group__toggle:disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group__group__toggle:disabled .kuc-base-label__text {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .kuc-field-group__group__toggle .kuc-base-label__text {
    font-size: 16px;
  }
  .kuc-field-group__group__toggle:disabled:focus {
    outline: 0;
    border: 1px solid transparent;
  }
  .kuc-field-group__group__toggle:focus {
    outline: 0;
    border: 1px solid #3498db;
  }
  .kuc-field-group__group__toggle svg {
    position: absolute;
    left: 8px;
  }
  .kuc-field-group__group__body {
    padding: 0px 8px;
    margin-left: 0px;
    white-space: nowrap;
    word-wrap: normal;
    margin-bottom: 12px;
  }
`})),M,N,P,F=e((()=>{n(),i(),m(),u(),y(),j(),g(),s(),M=517,(()=>{if(N=window.customElements.get(`kuc-field-group`),N)return;class e extends l{constructor(e){super(),this.className=``,this.content=``,this.id=``,this.label=``,this.disabled=!1,this.expanded=!1,this.visible=!0,this._content=``,this._GUID=c();let t=_(e);Object.assign(this,t)}update(e){e.has(`content`)&&(this.content&&v(this.content)?this._content=p(this.content):this._content=this.content),super.update(e)}render(){return t`
        <div
          class="kuc-field-group__group"
          role="group"
          aria-labelledby="${this._GUID}-control"
        >
          <button
            type="button"
            id="${this._GUID}-control"
            class="kuc-field-group__group__toggle"
            aria-controls="${this._GUID}-body"
            aria-expanded="${this.expanded&&!this.disabled}"
            ?disabled="${this.disabled}"
            @click="${this._handleClickButton}"
            @keydown="${this._handleKeyDownButton}"
          >
            ${this._getSvgTemplate()}
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${!1}"
            ></kuc-base-label>
          </button>
          <div
            id="${this._GUID}-body"
            class="kuc-field-group__group__body"
            ?hidden="${!this.expanded||this.disabled}"
            @change="${this._handleChangeBody}"
          >
            ${this._content}
          </div>
        </div>
      `}updated(e){e.has(`content`)&&(this._groupEl.style.minWidth=M+`px`,requestAnimationFrame(()=>{this._updateContainerWidth()}))}_updateContainerWidth(){if(!this._bodyEl)return;let e=this._bodyEl.hasAttribute(`hidden`);e&&this._bodyEl.removeAttribute(`hidden`);let t=this._bodyEl.offsetWidth;e&&this._bodyEl.setAttribute(`hidden`,``),!(t<=M)&&(this._groupEl.style.minWidth=t+`px`)}_getSvgTemplate(){return this.expanded?t`<svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7122 0.5L12.5 1.03608L7.23318 7.11548L5.76682 7.11548L0.5 1.03608L1.2878 0.5L6.26504 6.19318L6.73496 6.19318L11.7122 0.5Z"
              fill="#939393"
            />
          </svg>`:t`<svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 1.2878L1.03608 0.5L7.11548 5.76682V7.23318L1.03608 12.5L0.5 11.7122L6.19318 6.73496V6.26504L0.5 1.2878Z"
              fill="#939393"
            />
          </svg> `}_handleChangeBody(e){e.stopPropagation()}_handleKeyDownButton(e){e.key!==`Tab`&&(e.preventDefault(),(e.key===`Enter`||e.key===` `)&&this._handleClickButton(e))}_handleClickButton(e){if(e.target!==document.activeElement&&this._toggle.focus(),this.expanded){let e=this._bodyEl.getBoundingClientRect().width;e>M&&(this._groupEl.style.minWidth=e+`px`)}else this._groupEl.style.minWidth=M+`px`;this.expanded=!this.expanded;let t={expanded:this.expanded};r(this,`change`,t)}}d([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),d([a()],e.prototype,`content`,void 0),d([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),d([a({type:String})],e.prototype,`label`,void 0),d([a({type:Boolean})],e.prototype,`disabled`,void 0),d([a({type:Boolean})],e.prototype,`expanded`,void 0),d([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:h})],e.prototype,`visible`,void 0),d([f(`.kuc-field-group__group`)],e.prototype,`_groupEl`,void 0),d([f(`.kuc-field-group__group__body`)],e.prototype,`_bodyEl`,void 0),d([f(`.kuc-field-group__group__toggle`)],e.prototype,`_toggle`,void 0),window.customElements.define(`kuc-field-group`,e),o(A),N=e})(),P=N})),I,L,R,z,B,V;e((()=>{b(),S(),w(),E(),O(),F(),I={title:`desktop/field-group`,argTypes:{},parameters:{actions:{handles:[`change`]}}},L=()=>{let e=document.createElement(`div`),t=new T({label:`Text`,error:`Error occurred`,value:`orange`}),n=new C({label:`Dropdown`,items:[{label:`-----`,value:`-----`},{label:`Orange`,value:`orange`},{label:`Apple`,value:`apple`}],value:`apple`,error:`Error occurred`}),r=new x({value:`2012-12-12`}),i=new k({value:`12:12`}),a=new D({value:`text area`});return e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(i),e},R=e=>new P({...e}),z=R.bind({}),z.args={label:`Field Group normal`,disabled:!1,expanded:!1,content:L(),visible:!0},B=R.bind({}),B.args={label:`Field Group disabled`,disabled:!0,expanded:!1,content:L(),visible:!0},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  const fieldGroup = new FieldGroup({
    ...args
  });
  return fieldGroup;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
  const fieldGroup = new FieldGroup({
    ...args
  });
  return fieldGroup;
}`,...B.parameters?.docs?.source}}},V=[`Base`,`BaseDisabled`]}))();export{z as Base,B as BaseDisabled,V as __namedExportsOrder,I as default};