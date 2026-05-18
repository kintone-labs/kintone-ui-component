import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,r as c,s as l,t as u}from"./decorate-33sGx9Ox.js";import{a as d,n as f,o as p}from"./converter-BYYAaneI.js";import{f as m,n as h,t as g}from"./validator-d05NeqaQ.js";var _,v=e((()=>{_=`
  kuc-mobile-button,
  kuc-mobile-button * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-button:lang(es),
  kuc-mobile-button:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-button:lang(zh),
  kuc-mobile-button:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-button:lang(zh-TW),
  kuc-mobile-button:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-button {
    display: inline-block;
    vertical-align: top;
  }
  kuc-mobile-button[hidden] {
    display: none;
  }
  .kuc-mobile-button__button {
    min-width: var(--kuc-mobile-button-width, 100px);
    width: var(--kuc-mobile-button-width, auto);
    height: var(--kuc-mobile-button-height, 42px);
    padding: 0 12px;
    user-select: none;
    font-weight: 700;
    font-size: var(--kuc-mobile-button-font-size, 14px);
    line-height: 1;
    display: grid;
    align-items: center;
    align-content: center;
  }
  .kuc-mobile-button__button:focus {
    outline: none;
  }
  .kuc-mobile-button__button--submit {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #206694);
    color: var(--kuc-mobile-button-text-color, #ffffff);
    border-radius: 6px;
  }
  .kuc-mobile-button__button--submit:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button__button--submit:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
  }
  .kuc-mobile-button__button--submit:disabled {
    color: #ffffff;
    border-color: #a5a5a5;
    background: #a5a5a5;
  }
  .kuc-mobile-button__button--normal {
    border: 2px solid;
    border-color: var(--kuc-mobile-button-background-color, #206694);
    background-color: var(--kuc-mobile-button-background-color, #ffffff);
    color: var(--kuc-mobile-button-text-color, #206694);
    border-radius: 6px;
  }
  .kuc-mobile-button__button--normal:focus {
    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button__button--normal:active {
    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));
    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #ffffff));
  }
  .kuc-mobile-button__button--normal:disabled {
    color: #a5a5a5;
    border-color: #a5a5a5;
    background-color: #ffffff;
    cursor: default;
  }
`})),y,b=e((()=>{n(),i(),f(),l(),g(),v(),s(),(()=>{if(y=window.customElements.get(`kuc-mobile-button`),y)return;class e extends c{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`normal`,this.content=``,this.disabled=!1,this.visible=!0,this._content=``;let t=m(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),r(this,`click`)}_getButtonColorType(){return this.type===`normal`||this.type===`submit`?this.type:`normal`}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?h(this.content)?this._content=d(this.content):this._content=this.content:this._content=this.text)}render(){return t`
        <button
          type="button"
          class="kuc-mobile-button__button kuc-mobile-button__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this._content}
        </button>
      `}}u([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),u([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),u([a({type:String})],e.prototype,`text`,void 0),u([a({type:String})],e.prototype,`type`,void 0),u([a()],e.prototype,`content`,void 0),u([a({type:Boolean})],e.prototype,`disabled`,void 0),u([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:p})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-mobile-button`,e),o(_),y=e})()})),x,S,C,w,T,E;e((()=>{n(),b(),x={title:`mobile/button`,argTypes:{className:{name:`className`},content:{name:`content`},disabled:{name:`disabled`},id:{name:`id`},type:{name:`type`,options:[`normal`,`submit`],control:{type:`select`}},text:{name:`text`},visible:{name:`visible`}},parameters:{actions:{handles:[`click`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},S=e=>t`
    <kuc-mobile-button
      .className="${e.className}"
      .content="${e.content}"
      .disabled="${e.disabled}"
      .id="${e.id}"
      .type="${e.type}"
      .text="${e.text}"
      .visible="${e.visible}"
      @click="${e=>{console.log(e)}}"
    ></kuc-mobile-button>
  `,C=S.bind({}),C.args={className:`sample-class`,id:`sample-id`,text:`MobileButton`,visible:!0,disabled:!1,type:`normal`},w=()=>{let e=document.createElement(`span`),t=document.createElement(`span`);t.innerText=`Search`,t.style.display=`inline-block`,e.innerHTML=`<svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>`,e.style.display=`inline-block`,e.style.verticalAlign=`middle`;let n=document.createElement(`div`);return n.appendChild(e),n.appendChild(t),n},T=S.bind({}),T.args={className:`sample-class`,content:w(),id:`sample-id`,text:`MobileButton`,visible:!0,disabled:!1,type:`normal`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const handleClick = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-button
      .className="\${args.className}"
      .content="\${args.content}"
      .disabled="\${args.disabled}"
      .id="\${args.id}"
      .type="\${args.type}"
      .text="\${args.text}"
      .visible="\${args.visible}"
      @click="\${handleClick}"
    ></kuc-mobile-button>
  \`;
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const handleClick = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-button
      .className="\${args.className}"
      .content="\${args.content}"
      .disabled="\${args.disabled}"
      .id="\${args.id}"
      .type="\${args.type}"
      .text="\${args.text}"
      .visible="\${args.visible}"
      @click="\${handleClick}"
    ></kuc-mobile-button>
  \`;
}`,...T.parameters?.docs?.source}}},E=[`Base`,`Base1`]}))();export{C as Base,T as Base1,E as __namedExportsOrder,x as default};