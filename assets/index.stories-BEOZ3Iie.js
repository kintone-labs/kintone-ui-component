import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,d as o,f as s,i as c,n as l,r as u,s as d,t as f}from"./decorate-33sGx9Ox.js";import{n as p,t as m}from"./constant-BNAIZv_2.js";import{a as h,n as g}from"./converter-BYYAaneI.js";import{f as _,n as v,t as y}from"./validator-d05NeqaQ.js";var b,x=e((()=>{b=`
  kuc-mobile-notification {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    visibility: hidden;
    animation-fill-mode: forwards;
    position: relative;
    top: -100px;
    left: 0;
  }
  kuc-mobile-notification:lang(es),
  kuc-mobile-notification:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-notification:lang(zh),
  kuc-mobile-notification:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-notification:lang(zh-TW),
  kuc-mobile-notification:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  .kuc-mobile-notification-fadein {
    animation-name: kuc-mobile-notification-fade-in;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
    visibility: visible;
  }

  .kuc-mobile-notification-fadeout {
    animation-name: kuc-mobile-notification-fade-out;
    animation-duration: 250ms;
    animation-timing-function: ease-out;
    width: 100%;
    position: fixed;
  }

  .kuc-mobile-notification__notification {
    background-color: #ffffcf;
    background: linear-gradient(#ffda4a, #ffc32c);
    width: 100%;
    min-height: 48px;
    z-index: 20;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;
    color: #333333;
    text-align: center;
    vertical-align: top;
  }

  .kuc-mobile-notification__notification__title {
    display: inline-block;
    vertical-align: middle;
    padding: 17px 44px 11px 44px;
    margin: 0 0 0 -20px;
    text-align: left;
    font-weight: inherit;
    font-family: inherit;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .kuc-mobile-notification__notification__title--html {
    white-space: normal;
  }

  .kuc-mobile-notification__notification__close-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 44px;
    height: 48px;
    padding: 0;
    background-color: transparent;
    border: none;
    vertical-align: middle;
    pointer-events: auto;
    outline: none;
  }
  @keyframes kuc-mobile-notification-fade-in {
    0% {
      top: -100px;
      left: 0;
    }
    50% {
      top: -50px;
      left: 0;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
  @keyframes kuc-mobile-notification-fade-out {
    0% {
      visibility: visible;
      top: 0;
      left: 0;
    }
    50% {
      visibility: visible;
      top: -50px;
      left: 0;
    }
    100% {
      top: -100px;
      left: 0;
    }
  }
`})),S,C,w=e((()=>{r(),a(),p(),g(),d(),y(),x(),l(),(()=>{if(S=window.customElements.get(`kuc-mobile-notification`),S)return;class e extends u{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.duration=-1,this.container=document.body,this.content=``,this._isOpened=!1,this._content=``;let t=_(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return t`
      <svg
        height="12"
        width="12"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"/>
          </g>
        </svg>
      `}_setAutoCloseTimer(){this._clearAutoCloseTimer(),!(!Number.isFinite(this.duration)||this.duration<0)&&(this._timeoutID=window.setTimeout(()=>{this.close()},this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.container.appendChild(this),this.performUpdate(),this.classList.remove(`kuc-mobile-notification-fadeout`),this.classList.add(`kuc-mobile-notification-fadein`),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._close(),i(this,`close`)}_close(){this._isOpened=!1,this.classList.remove(`kuc-mobile-notification-fadein`),this.classList.add(`kuc-mobile-notification-fadeout`),this._clearAutoCloseTimer()}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this._close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(m.CONTAINER.INVALID),!1}return!0}willUpdate(e){(e.has(`content`)||e.has(`text`))&&(this.content!==null&&this.content!==void 0&&this.content!==``?v(this.content)?this._content=n`<div
              class="kuc-mobile-notification__notification__title--html"
            >
              ${h(this.content)}
            </div>`:this._content=this.content:this._content=this.text)}_isValidContainerElement(){return this.container instanceof HTMLElement}render(){return n`
        <div class="kuc-mobile-notification__notification">
          <pre
            class="kuc-mobile-notification__notification__title"
            aria-live="assertive"
            role="${this._isOpened?`alert`:``}"
          ><!---->${this._content}</pre>
          <button
            class="kuc-mobile-notification__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}f([s({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),f([s({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),f([s({type:String})],e.prototype,`text`,void 0),f([s({type:Number})],e.prototype,`duration`,void 0),f([s()],e.prototype,`container`,void 0),f([s()],e.prototype,`content`,void 0),f([o()],e.prototype,`_isOpened`,void 0),window.customElements.define(`kuc-mobile-notification`,e),c(b),S=e})(),C=S})),T,E,D,O,k,A,j,M,N;e((()=>{w(),T={title:`mobile/notification`,argTypes:{text:{name:`text`},content:{name:`content`},className:{name:`className`},id:{name:`id`},duration:{name:`duration`},container:{name:`container`}}},E=e=>{let t=new C({...e});t.addEventListener(`close`,e=>{console.log(e)});let n=document.createElement(`div`),r=D(`OPEN`,()=>{t.open()}),i=D(`CLOSE`,()=>{t.close()}),a=D(`full screen mode`,()=>{document.getElementById(`storybook-root`).requestFullscreen()}),o=D(`Set Root element`,()=>{t.container=A()}),s=D(`Set Body element`,()=>{t.container=k()}),c=D(`Set undefined`,()=>{t.container=void 0}),l=D(`Set null`,()=>{t.container=null}),u=D(`Set non exist element`,()=>{t.container=O()}),d=D(`Set invalid value`,()=>{t.container=12}),f=D(`GETTER`,()=>{console.log(`container value:`,t.container)});return n.appendChild(r),n.appendChild(i),n.appendChild(a),n.appendChild(o),n.appendChild(s),n.appendChild(c),n.appendChild(l),n.appendChild(u),n.appendChild(d),n.appendChild(f),n},D=(e,t)=>{let n=document.createElement(`button`);return n.textContent=e,n.addEventListener(`click`,t),n},O=()=>document.createElement(`div`),k=()=>document.body,A=()=>document.getElementById(`storybook-root`),j=E.bind({}),j.args={text:`Duration 3 seconds`,duration:3e3,content:``,className:`options-class`,id:`options-id`},M=E.bind({}),M.args={text:`不正です!!`,container:document.body,content:`Error occurred!<br>Please click on the <a href="#">link</a> for details.`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const notification = new MobileNotification({
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
  const notification = new MobileNotification({
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
}`,...M.parameters?.docs?.source}}},N=[`Base`,`BaseContainer`]}))();export{j as Base,M as BaseContainer,N as __namedExportsOrder,T as default};