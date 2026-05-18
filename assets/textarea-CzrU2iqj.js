import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./decorate-33sGx9Ox.js";import{n as m,o as h}from"./converter-BYYAaneI.js";import{t as g}from"./error-BtvpQcD5.js";import{t as _}from"./label-D4AWTD2g.js";import{f as v,t as y}from"./validator-d05NeqaQ.js";var b,x=e((()=>{b=`
  kuc-textarea,
  kuc-textarea *,
  kuc-textarea:lang(en),
  kuc-textarea:lang(en) * {
    font-family: sans-serif;
  }
  kuc-textarea:lang(es),
  kuc-textarea:lang(es) * {
    font-family: sans-serif;
  }
  kuc-textarea:lang(ja),
  kuc-textarea:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-textarea:lang(zh),
  kuc-textarea:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-textarea:lang(zh-TW),
  kuc-textarea:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-textarea {
    font-size: 14px;
    color: var(--kuc-textarea-input-color, #333333);
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-textarea-input-width, 299px);
    height: var(--kuc-textarea-input-height, 125px);
    line-height: 1.5;
  }
  kuc-textarea[hidden] {
    display: none;
  }
  .kuc-textarea__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin: 0px;
    white-space: normal;
  }
  .kuc-textarea__group__label {
    white-space: nowrap;
    display: inline-block;
    padding: 4px 0px 8px 0px;
  }
  .kuc-textarea__group__label[hidden] {
    display: none;
  }
  .kuc-textarea__group__container {
    position: relative;
    display: inline-table;
    width: var(--kuc-textarea-input-width, 100%);
    min-width: var(--kuc-textarea-input-width, 100%);
  }
  textarea.kuc-textarea__group__textarea {
    display: block;
    border: 1px solid #e3e7e8;
    box-sizing: border-box;
    font-size: var(--kuc-textarea-input-font-size, 14px);
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    min-width: var(--kuc-textarea-input-width, 299px);
    min-height: var(--kuc-textarea-input-height, 125px);
    width: var(--kuc-textarea-input-width, 299px);
    height: var(--kuc-textarea-input-height, 125px);
    padding: 8px;
    resize: none;
    width: 100%;
    background-color: #ffffff;
    color: var(--kuc-textarea-input-color, #333333);
  }
  .kuc-textarea__group__textarea:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
    border: 1px solid #3498db;
    background-color: #ffffff;
    color: var(--kuc-textarea-input-color, #333333);
  }
  .kuc-textarea__group__textarea:disabled {
    color: #888888;
    background-color: #d4d7d7;
    box-shadow: none;
    cursor: not-allowed;
    resize: none;
  }
  .kuc-textarea__group__resizer {
    position: absolute;
    width: 16px;
    height: 16px;
    cursor: se-resize;
    float: right;
    margin: -16px 0px;
    right: 0px;
  }
`})),S,C,w=e((()=>{r(),a(),m(),g(),d(),_(),y(),c(),x(),(()=>{if(S=window.customElements.get(`kuc-textarea`),S)return;let e={MIN_WIDTH:16,MIN_HEIGHT:16};class r extends u{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.placeholder=``,this.value=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=l();let t=v(e);Object.assign(this,t)}_handleFocusTextarea(e){let t={value:this.value};i(this,`focus`,t)}_handleChangeTextarea(e){e.stopPropagation();let t=e.target,n={value:``,oldValue:this.value};this.value=t.value,n.value=this.value,i(this,`change`,n)}_handleInputTextArea(e){e.stopPropagation();let t={value:e.target.value,data:e.data};i(this,`input`,t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(t){if(!this._onResize)return;let n=this._textarea.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;r<e.MIN_WIDTH&&(r=e.MIN_WIDTH),i<e.MIN_HEIGHT&&(i=e.MIN_HEIGHT),this._container.style.width=r+`px`,this._textarea.style.height=i+`px`}_getResizerButtonSvgTemplate(){return t`
      <svg height="16" width="16">
        <g fill="none" stroke="#b6b6b6" stroke-width="2">
          <line x1="14" x2="16" y1="15" y2="15" />
          <line x1="14" x2="16" y1="11" y2="11" />
          <line x1="14" x2="16" y1="7" y2="7" />
          <line x1="10" x2="12" y1="15" y2="15" />
          <line x1="6" x2="8" y1="15" y2="15" />
          <line x1="10" x2="12" y1="11" y2="11" />
        </g>
      </svg>
      `}firstUpdated(){document.addEventListener(`mousemove`,e=>this._handleMouseMoveDocument(e)),document.addEventListener(`mouseup`,e=>this._handleMouseUpDocument())}render(){return n`
        <div class="kuc-textarea__group">
          <label
            class="kuc-textarea__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-label"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </label>
          <div class="kuc-textarea__group__container">
            <textarea
              id="${this._GUID}-label"
              class="kuc-textarea__group__textarea"
              placeholder="${this.placeholder}"
              .value="${this.value}"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error!==``}"
              @change="${this._handleChangeTextarea}"
              @focus="${this._handleFocusTextarea}"
              @input="${this._handleInputTextArea}"
              ?disabled="${this.disabled}"
            >
            </textarea>
            <div
              class="kuc-textarea__group__resizer"
              @mousedown="${this._handleMouseDownResize}"
              ?hidden="${this.disabled}"
            >
              ${this._getResizerButtonSvgTemplate()}
            </div>
          </div>
          <kuc-base-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error>
        </div>
      `}}f([o({type:String,reflect:!0,attribute:`class`})],r.prototype,`className`,void 0),f([o({type:String})],r.prototype,`error`,void 0),f([o({type:String,reflect:!0,attribute:`id`})],r.prototype,`id`,void 0),f([o({type:String})],r.prototype,`label`,void 0),f([o({type:String})],r.prototype,`placeholder`,void 0),f([o({type:String})],r.prototype,`value`,void 0),f([o({type:Boolean})],r.prototype,`disabled`,void 0),f([o({type:Boolean})],r.prototype,`requiredIcon`,void 0),f([o({type:Boolean,attribute:`hidden`,reflect:!0,converter:h})],r.prototype,`visible`,void 0),f([p(`.kuc-textarea__group__container`)],r.prototype,`_container`,void 0),f([p(`.kuc-textarea__group__textarea`)],r.prototype,`_textarea`,void 0),window.customElements.define(`kuc-textarea`,r),s(b),S=r})(),C=S}));export{w as n,C as t};