import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,d as o,f as s,i as c,n as l,r as u,s as d,t as f}from"./decorate-33sGx9Ox.js";import{n as p,t as m}from"./constant-BNAIZv_2.js";import{a as h,n as g}from"./converter-BYYAaneI.js";import{f as _,n as v,t as y}from"./validator-d05NeqaQ.js";var b,x=e((()=>{b=`
  kuc-notification,
  kuc-notification *,
  kuc-notification:lang(en),
  kuc-notification:lang(en) * {
    font-family: sans-serif;
  }
  kuc-notification:lang(es),
  kuc-notification:lang(es) * {
    font-family: sans-serif;
  }
  kuc-notification:lang(ja),
  kuc-notification:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-notification:lang(zh),
  kuc-notification:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-notification:lang(zh-TW),
  kuc-notification:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-notification {
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);
  }
  kuc-notification {
    position: fixed;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 1.5;
    z-index: 10000;
    margin-top: 16px;
    pointer-events: none;
    visibility: hidden;
    animation-fill-mode: forwards;
  }
  .kuc-notification-fadein {
    animation-name: kuc-notification-fade-in;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification-fadeout {
    animation-name: kuc-notification-fade-out;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
  }
  .kuc-notification__notification {
    position: relative;
    display: inline-block;
    text-align: left;
    pointer-events: auto;
    padding: 16px 56px 16px 24px;
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification__notification--info {
    background-color: var(--kuc-notification-background-color, #3498db);
  }
  .kuc-notification__notification--success {
    background-color: var(--kuc-notification-background-color, #91c36c);
  }
  .kuc-notification__notification--danger {
    background-color: var(--kuc-notification-background-color, #e74c3c);
  }
  .kuc-notification__notification__title {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: var(--kuc-notification-font-size, 16px);
    color: var(--kuc-notification-color, #ffffff);
    max-width: 500px;
    min-height: 24px;
    word-break: break-word;
    white-space: pre-wrap;
  }
  .kuc-notification__notification__title--html {
    white-space: normal;
    max-width: 500px;
  }
  .kuc-notification__notification__close-button {
    position: absolute;
    top: 4px;
    right: 0;
    width: 48px;
    height: 48px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .kuc-notification__notification__close-button__icon-background--danger {
    fill: var(--kuc-notification-close-button-background-color, #c65040);
  }
  .kuc-notification__notification__close-button__icon-background--info {
    fill: var(--kuc-notification-close-button-background-color, #448aca);
  }
  .kuc-notification__notification__close-button__icon-background--success {
    fill: var(--kuc-notification-close-button-background-color, #9bbc65);
  }
  @keyframes kuc-notification-fade-in {
    0% {
      visibility: visible;
      top: -56px;
    }
    100% {
      visibility: visible;
      top: 0;
    }
  }
  @keyframes kuc-notification-fade-out {
    0% {
      visibility: visible;
      top: 0;
    }
    10% {
      visibility: visible;
      top: 14px;
    }
    100% {
      top: -56px;
    }
  }
`})),S,C,w=e((()=>{r(),a(),p(),g(),d(),y(),x(),l(),(()=>{if(S=window.customElements.get(`kuc-notification`),S)return;class e extends u{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.type=`danger`,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=_(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(m.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?v(this.content)?this._content=n`<div
              class="kuc-notification__notification__title--html"
            >
              ${h(this.content)}
            </div>`:this._content=this.content:this._content=this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}_handleClickCloseButton(e){this.close()}_getCloseButtonColorType(){switch(this.type){case`info`:case`success`:return this.type;default:return`danger`}}_getCloseButtonSvgTemplate(){return t`
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close button</title>
          <path
            class="kuc-notification__notification__close-button__icon-background--${this._getCloseButtonColorType()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="white"
          />
        </svg>
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!(!Number.isFinite(this.duration)||this.duration<0)&&(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-notification-fadeout`),this.classList.add(`kuc-notification-fadein`),this._isOpened=!0,this._setAutoCloseTimer()}_close(){this._isOpened=!1,this.classList.remove(`kuc-notification-fadein`),this.classList.add(`kuc-notification-fadeout`),this._clearAutoCloseTimer()}close(){this._close(),i(this,`close`)}render(){return n`
        <div
          class="kuc-notification__notification kuc-notification__notification--${this.type}"
        >
          <pre
            class="kuc-notification__notification__title"
            aria-live="assertive"
            role="${this._isOpened?`alert`:``}"
          ><!--
          -->${this._content}</pre>
          <button
            class="kuc-notification__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}f([s({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),f([s({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),f([s({type:String})],e.prototype,`text`,void 0),f([s({type:String})],e.prototype,`type`,void 0),f([s({type:Number})],e.prototype,`duration`,void 0),f([s()],e.prototype,`container`,void 0),f([s()],e.prototype,`content`,void 0),f([o()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-notification`,e),c(b),S=e})(),C=S})),T,E,D,O,k,A,j,M,N;e((()=>{w(),T={title:`desktop/notification`,argTypes:{text:{name:`text`},content:{name:`content`},duration:{name:`duration`},type:{name:`type`,options:[`success`,`info`,`danger`],control:{type:`select`}},className:{name:`className`},id:{name:`id`},container:{name:`container`}}},E=e=>{let t=new C({...e});t.addEventListener(`close`,e=>{console.log(e)});let n=document.createElement(`div`),r=D(`OPEN`,()=>{t.open()}),i=D(`CLOSE`,()=>{t.close()}),a=D(`full screen mode`,()=>{document.getElementById(`storybook-root`).requestFullscreen()}),o=D(`Set Root element`,()=>{t.container=A()}),s=D(`Set Body element`,()=>{t.container=k()}),c=D(`Set undefined`,()=>{t.container=void 0}),l=D(`Set null`,()=>{t.container=null}),u=D(`Set non exist element`,()=>{t.container=O()}),d=D(`Set invalid value`,()=>{t.container=12}),f=D(`GETTER`,()=>{console.log(`container value:`,t.container)});return n.appendChild(r),n.appendChild(i),n.appendChild(a),n.appendChild(o),n.appendChild(s),n.appendChild(c),n.appendChild(l),n.appendChild(u),n.appendChild(d),n.appendChild(f),n},D=(e,t)=>{let n=document.createElement(`button`);return n.textContent=e,n.addEventListener(`click`,t),n},O=()=>document.createElement(`div`),k=()=>document.body,A=()=>document.getElementById(`storybook-root`),j=E.bind({}),j.args={className:`options-class`,id:`options-id`,text:`不正です!!`,content:`Error occurred!<br>Please click on the <a href="#">link</a> for details.`,type:`info`,container:void 0},M=E.bind({}),M.args={id:`options-id`,text:`Duration 3 seconds`,type:`info`,duration:3e3},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const notification = new Notification({
    ...args
  });
  notification.addEventListener("close", event => {
    console.log(event);
  });
  const root = document.createElement("div");
  const openButton = createButton("OPEN", () => {
    notification.open();
  });
  const closeButton = createButton("CLOSE", () => {
    notification.close();
  });
  const buttonFullScreen = createButton("full screen mode", () => {
    document.getElementById("storybook-root").requestFullscreen();
  });
  const buttonSetRoot = createButton("Set Root element", () => {
    notification.container = getRootElement();
  });
  const buttonSetBody = createButton("Set Body element", () => {
    notification.container = getBodyElement();
  });
  const buttonSetUndefined = createButton("Set undefined", () => {
    notification.container = undefined;
  });
  const buttonSetNull = createButton("Set null", () => {
    notification.container = null;
  });
  const buttonSetNonExistELement = createButton("Set non exist element", () => {
    notification.container = getNonExistElement();
  });
  const buttonInvalidValue = createButton("Set invalid value", () => {
    notification.container = 12;
  });
  const buttonGetter = createButton("GETTER", () => {
    console.log("container value:", notification.container);
  });
  root.appendChild(openButton);
  root.appendChild(closeButton);
  root.appendChild(buttonFullScreen);
  root.appendChild(buttonSetRoot);
  root.appendChild(buttonSetBody);
  root.appendChild(buttonSetUndefined);
  root.appendChild(buttonSetNull);
  root.appendChild(buttonSetNonExistELement);
  root.appendChild(buttonInvalidValue);
  root.appendChild(buttonGetter);
  return root;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const notification = new Notification({
    ...args
  });
  notification.addEventListener("close", event => {
    console.log(event);
  });
  const root = document.createElement("div");
  const openButton = createButton("OPEN", () => {
    notification.open();
  });
  const closeButton = createButton("CLOSE", () => {
    notification.close();
  });
  const buttonFullScreen = createButton("full screen mode", () => {
    document.getElementById("storybook-root").requestFullscreen();
  });
  const buttonSetRoot = createButton("Set Root element", () => {
    notification.container = getRootElement();
  });
  const buttonSetBody = createButton("Set Body element", () => {
    notification.container = getBodyElement();
  });
  const buttonSetUndefined = createButton("Set undefined", () => {
    notification.container = undefined;
  });
  const buttonSetNull = createButton("Set null", () => {
    notification.container = null;
  });
  const buttonSetNonExistELement = createButton("Set non exist element", () => {
    notification.container = getNonExistElement();
  });
  const buttonInvalidValue = createButton("Set invalid value", () => {
    notification.container = 12;
  });
  const buttonGetter = createButton("GETTER", () => {
    console.log("container value:", notification.container);
  });
  root.appendChild(openButton);
  root.appendChild(closeButton);
  root.appendChild(buttonFullScreen);
  root.appendChild(buttonSetRoot);
  root.appendChild(buttonSetBody);
  root.appendChild(buttonSetUndefined);
  root.appendChild(buttonSetNull);
  root.appendChild(buttonSetNonExistELement);
  root.appendChild(buttonInvalidValue);
  root.appendChild(buttonGetter);
  return root;
}`,...M.parameters?.docs?.source}}},N=[`BaseContainer`,`BaseBody`]}))();export{M as BaseBody,j as BaseContainer,N as __namedExportsOrder,T as default};