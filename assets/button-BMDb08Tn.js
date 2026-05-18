import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,r as c,s as l,t as u}from"./decorate-33sGx9Ox.js";import{a as d,n as f,o as p}from"./converter-BYYAaneI.js";import{f as m,n as h,t as g}from"./validator-d05NeqaQ.js";var _,v=e((()=>{_=`
  kuc-button,
  kuc-button *,
  kuc-button:lang(en),
  kuc-button:lang(en) * {
    font-family: sans-serif;
  }
  kuc-button:lang(es),
  kuc-button:lang(es) * {
    font-family: sans-serif;
  }
  kuc-button:lang(ja),
  kuc-button:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-button:lang(zh),
  kuc-button:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,
      "Heiti SC", sans-serif;
  }
  kuc-button:lang(zh-TW),
  kuc-button:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-button {
    display: inline-block;
    vertical-align: top;
  }
  kuc-button[hidden] {
    display: none;
  }
  .kuc-button__button {
    display: grid;
    align-items: center;
    align-content: center;
    font-size: var(--kuc-button-font-size, 16px);
    width: var(--kuc-button-width, "auto");
    height: var(--kuc-button-height, 48px);
    min-width: var(--kuc-button-width, 163px);
    padding: 0px 16px;
    user-select: none;
    white-space: nowrap;
  }
  .kuc-button__button--normal {
    background-color: var(--kuc-button-background-color, #f7f9fa);
    color: var(--kuc-button-text-color, #3498db);
    border: 1px solid #e3e7e8;
  }
  .kuc-button__button--normal:hover,
  .kuc-button__button--normal:focus-visible,
  .kuc-button__button--normal:active {
    cursor: pointer;
  }
  .kuc-button__button--normal:hover {
    background-color: var(--kuc-button-background-color-hover, #c8d6dd);
  }
  .kuc-button__button--normal:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #c8d6dd);
  }
  .kuc-button__button--normal:active {
    background-color: var(--kuc-button-background-color-active, #c8d6dd);
  }
  .kuc-button__button--submit {
    background-color: var(--kuc-button-background-color, #3498db);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button__button--submit:hover,
  .kuc-button__button--submit:focus-visible,
  .kuc-button__button--submit:active {
    cursor: pointer;
  }
  .kuc-button__button--submit:hover {
    background-color: var(--kuc-button-background-color-hover, #1d6fa5);
  }
  .kuc-button__button--submit:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #1d6fa5);
  }
  .kuc-button__button--submit:active {
    background-color: var(--kuc-button-background-color-active, #1d6fa5);
  }
  .kuc-button__button--alert {
    background-color: var(--kuc-button-background-color, #e74c3c);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button__button--alert:hover,
  .kuc-button__button--alert:focus-visible,
  .kuc-button__button--alert:active {
    cursor: pointer;
  }
  .kuc-button__button--alert:hover {
    background-color: var(--kuc-button-background-color-hover, #bf2718);
  }
  .kuc-button__button--alert:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #bf2718);
  }
  .kuc-button__button--alert:active {
    background-color: var(--kuc-button-background-color-active, #bf2718);
  }
  .kuc-button__button:disabled {
    background-color: #d4d7d7;
    border: 1px solid #e3e7e8;
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-button__button--normal:focus-visible,
  .kuc-button__button--submit:focus-visible,
  .kuc-button__button--alert:focus-visible {
    outline: 1px solid #3498db;
  }
`})),y,b,x=e((()=>{n(),i(),f(),l(),g(),v(),s(),(()=>{if(y=window.customElements.get(`kuc-button`),y)return;class e extends c{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=m(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),r(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`||this.type===`alert`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?h(this.content)?this._content=d(this.content):this._content=this.content:this._content=this.text)}render(){return t`
        <button
          type="button"
          class="kuc-button__button kuc-button__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}u([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),u([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),u([a({type:String})],e.prototype,`text`,void 0),u([a({type:String})],e.prototype,`type`,void 0),u([a()],e.prototype,`content`,void 0),u([a({type:Boolean})],e.prototype,`disabled`,void 0),u([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:p})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-button`,e),o(_),y=e})(),b=y}));export{x as n,b as t};