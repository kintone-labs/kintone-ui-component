import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{c as i,f as a,i as o,n as s,r as c,s as l,t as u}from"./decorate-33sGx9Ox.js";import{n as d,t as f}from"./constant-BNAIZv_2.js";import{f as p,t as m}from"./validator-d05NeqaQ.js";var h,g=e((()=>{h=`
  kuc-spinner,
  kuc-spinner *,
  kuc-spinner:lang(en),
  kuc-spinner:lang(en) * {
    font-family: sans-serif;
  }
  kuc-spinner:lang(es),
  kuc-spinner:lang(es) * {
    font-family: sans-serif;
  }
  kuc-spinner:lang(ja),
  kuc-spinner:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-spinner:lang(zh),
  kuc-spinner:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-spinner:lang(zh-TW),
  kuc-spinner:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-spinner {
    font-size: 14px;
    color: #333333;
  }
  .kuc-spinner__spinner {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .kuc-spinner__spinner__loader {
    width: var(--kuc-spinner-loader-width, 50px);
    height: var(--kuc-spinner-loader-height, 50px);
    animation: rotate-loading 1s steps(12) infinite;
    fill: var(--kuc-spinner-loader-color, #99ccff);
  }
  .kuc-spinner__spinner__text {
    margin: 10px 0;
    font-size: var(--kuc-spinner-text-font-size, 14px);
    color: var(--kuc-spinner-text-color, #333333);
  }
  .visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
  .kuc-spinner__mask {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #666666;
    opacity: 0.6;
    z-index: 9999;
  }
  .kuc--has-spinner {
    overflow: hidden;
  }
  @keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`})),_,v,y=e((()=>{r(),i(),d(),l(),m(),g(),s(),(()=>{if(_=window.customElements.get(`kuc-spinner`),_)return;class e extends c{constructor(e){super(),this.className=``,this.id=``,this.text=``,this.container=document.body,this._isOpened=!1;let t=p(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return t`
        <svg
          class="kuc-spinner__spinner__loader"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle r="4" cx="30.43" cy="4.72" opacity="0.3" />
          <circle r="4" cx="39.85" cy="10.15" opacity="0.3" />
          <circle r="4" cx="45.28" cy="19.56" opacity="0.3" />
          <circle r="4" cx="45.28" cy="30.43" opacity="0.3" />
          <circle r="4" cx="39.85" cy="39.85" opacity="0.3" />
          <circle r="4" cx="30.44" cy="45.28" opacity="0.4" />
          <circle r="4" cx="19.56" cy="45.28" opacity="0.5" />
          <circle r="4" cx="10.15" cy="39.85" opacity="0.6" />
          <circle r="4" cx="4.7" cy="30.44" opacity="0.7" />
          <circle r="4" cx="4.7" cy="19.56" opacity="0.8" />
          <circle r="4" cx="10.15" cy="10.15" opacity="0.9" />
          <circle r="4" cx="19.56" cy="4.72" opacity="1" />
        </svg>
      `}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){if(!this._isValidContainerElement()){document.body.appendChild(this),requestAnimationFrame(()=>{document.body.removeChild(this)}),this.performUpdate();return}this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this.container.appendChild(this),this.performUpdate(),this.container.classList.contains(`kuc--has-spinner`)||this.container.classList.add(`kuc--has-spinner`),this._isOpened=!0}close(){this.parentElement&&this.parentElement.classList.remove(`kuc--has-spinner`),this._isOpened=!1,this.parentNode&&this.parentNode.removeChild(this)}shouldUpdate(e){if(e.has(`container`)){if(this.container===null||this.container===void 0)return this._isOpened&&this.close(),!1;let e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this.close(),!e)return this.throwErrorAfterUpdateComplete(f.CONTAINER.INVALID),!1}return!0}render(){return n`
        <div class="kuc-spinner__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner__spinner__text${this.text?``:` visually-hidden`}"
          >
            ${this.text?this.text:`now loading…`}
          </div>
        </div>
        <div class="kuc-spinner__mask"></div>
      `}}u([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),u([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),u([a({type:String})],e.prototype,`text`,void 0),u([a()],e.prototype,`container`,void 0),window.customElements.define(`kuc-spinner`,e),o(h),_=e})(),v=_})),b,x,S,C,w;e((()=>{y(),b={title:`desktop/spinner`,argTypes:{text:{name:`text`},className:{name:`className`},id:{name:`id`},container:{name:`container`}}},x=e=>{let t=new v({...e}),n=document.createElement(`div`),r=S(`OPEN`,()=>{t.open()}),i=S(`CLOSE`,()=>{t.close()}),a=S(`Fullscreen Mode`,()=>{document.getElementById(`storybook-root`).requestFullscreen()}),o=S(`Set Root element`,()=>{t.container=document.getElementById(`storybook-root`)}),s=S(`Set Body element`,()=>{t.container=document.body}),c=S(`Set undefined`,()=>{t.container=void 0}),l=S(`Set null`,()=>{t.container=null}),u=S(`Set nonexistent element`,()=>{t.container=document.createElement(`div`)}),d=S(`Set invalid value`,()=>{t.container=12}),f=S(`GETTER`,()=>{console.log(`container value:`,t.container)}),p=document.createElement(`div`);return p.style.cssText=`z-index:10010; position: fixed;`,p.appendChild(r),p.appendChild(i),p.appendChild(a),p.appendChild(o),p.appendChild(s),p.appendChild(c),p.appendChild(l),p.appendChild(u),p.appendChild(d),p.appendChild(f),n.appendChild(p),n},S=(e,t)=>{let n=document.createElement(`button`);return n.textContent=e,n.addEventListener(`click`,t),n},C=x.bind({}),C.args={text:`now loading...`,className:`options-class`,id:`options-id`,container:void 0},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const spinner = new Spinner({
    ...args
  });
  const root = document.createElement("div");
  const openButton = createButton("OPEN", () => {
    spinner.open();
  });
  const closeButton = createButton("CLOSE", () => {
    spinner.close();
  });
  const fullScreenButton = createButton("Fullscreen Mode", () => {
    document.getElementById("storybook-root").requestFullscreen();
  });
  const setRootButton = createButton("Set Root element", () => {
    spinner.container = document.getElementById("storybook-root");
  });
  const setBodyButton = createButton("Set Body element", () => {
    spinner.container = document.body;
  });
  const setUndefinedButton = createButton("Set undefined", () => {
    spinner.container = undefined;
  });
  const setNullButton = createButton("Set null", () => {
    spinner.container = null;
  });
  const setNonexistentELementButton = createButton("Set nonexistent element", () => {
    spinner.container = document.createElement("div");
  });
  const setInvalidValueButton = createButton("Set invalid value", () => {
    spinner.container = 12;
  });
  const getterButton = createButton("GETTER", () => {
    console.log("container value:", spinner.container);
  });
  const buttonDiv = document.createElement("div");
  buttonDiv.style.cssText = \`z-index:10010; position: fixed;\`;
  buttonDiv.appendChild(openButton);
  buttonDiv.appendChild(closeButton);
  buttonDiv.appendChild(fullScreenButton);
  buttonDiv.appendChild(setRootButton);
  buttonDiv.appendChild(setBodyButton);
  buttonDiv.appendChild(setUndefinedButton);
  buttonDiv.appendChild(setNullButton);
  buttonDiv.appendChild(setNonexistentELementButton);
  buttonDiv.appendChild(setInvalidValueButton);
  buttonDiv.appendChild(getterButton);
  root.appendChild(buttonDiv);
  return root;
}`,...C.parameters?.docs?.source}}},w=[`Base`]}))();export{C as Base,w as __namedExportsOrder,b as default};