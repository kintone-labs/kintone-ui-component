import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,d as o,f as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./decorate-33sGx9Ox.js";import{n as g,t as _}from"./constant-BNAIZv_2.js";import{n as v,o as y,r as b}from"./converter-BYYAaneI.js";import{t as x}from"./error-BtvpQcD5.js";import{t as S}from"./label-D4AWTD2g.js";import{d as C,f as w,g as T,i as E,t as D,u as O}from"./validator-d05NeqaQ.js";var k,A,j,M,N=e((()=>{k=1024,A=1048576,j=1073741824,M=`NaN size`})),P,F,I,L,R,z=e((()=>{P={ATTACHMENT_BROWSE:`Browse`,ATTACHMENT_DRAG_DROP_ZONE:`Drop files here.`},F={ATTACHMENT_BROWSE:`参照`,ATTACHMENT_DRAG_DROP_ZONE:`ここにファイルをドロップします。`},I={ATTACHMENT_BROWSE:`选择文件`,ATTACHMENT_DRAG_DROP_ZONE:`拖动文件到此。`},L={ATTACHMENT_BROWSE:`選擇檔案`,ATTACHMENT_DRAG_DROP_ZONE:`拖曳檔案到此。`},R={ATTACHMENT_BROWSE:`Examinar`,ATTACHMENT_DRAG_DROP_ZONE:`Suelte los archivos aquí.`}})),B,V=e((()=>{B=`
  kuc-attachment,
  kuc-attachment *,
  kuc-attachment:lang(en),
  kuc-attachment:lang(en) * {
    font-family: sans-serif;
  }
  kuc-attachment:lang(ja),
  kuc-attachment:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
        sans-serif;
  }
  kuc-attachment:lang(zh),
  kuc-attachment:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", sans-serif;
  }
  kuc-attachment:lang(zh-TW),
  kuc-attachment:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
        Hei,"Heiti SC",sans-serif;
  }
  kuc-attachment:lang(es),
  kuc-attachment:lang(es) * {
    font-family: sans-serif;
  }
  kuc-attachment {
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-attachment-width, 191px);
    min-width: var(--kuc-attachment-width, 191px);
  }
  kuc-attachment[hidden] {
    display: none;
  }
  .kuc-attachment__group {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    position: relative;
    display: block;
  }
  .kuc-attachment__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    color: #333333;
    white-space: nowrap;
  }
  .kuc-attachment__group__label[hidden] {
    display: none;
  }
  .kuc-attachment__group__files {
    border: solid 1px #e3e7e8;
    background-color: #eeeeee;
    padding: 16px 4px;
    display: block;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    width: var(--kuc-attachment-width, auto);
    height: var(--kuc-attachment-height, auto);
  }
  .kuc-attachment__group__files--disabled {
    cursor: not-allowed;
  }
  .kuc-attachment__group__files__browse-button {
    border: 1px solid transparent;
    position: relative;
    display: inline-block;
    margin-right: 16px;
    padding: 8px;
    text-decoration: none;
  }
  .kuc-attachment__group__files__browse-button[hidden]{
    display: none;
  }
  .kuc-attachment__group__files__browse-button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment__group__files__browse-button:hover
  .kuc-attachment__group__files__browse-button__text {
    color: #217dbb;
  }
  .kuc-attachment__group__files__browse-button__text {
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment__group__files__browse-button__input-container {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: inline-block;
  }
  .kuc-attachment__group__files__browse-button__input-container__input {
    cursor: pointer;
    font-size: 999px;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  .kuc-attachment__group__files__display-area {
    padding-inline-start: 0px;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .kuc-attachment__group__files__display-area__item {
    position: relative;
    margin-bottom: 8px;
    height: auto;
    min-height: 24px;
    border: 2px solid #f1f4f5;
    background-color: #f1f4f5;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .kuc-attachment__group__files__display-area__item__name {
    display: inline-block;
    padding: 3px calc(4.6em + 4px) 3px 26px;
    width: 100%;
    max-width: 177px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container {
    display: inline-block;
    position: absolute;
    top: calc(50% - 12px);
    left: 0;
    width: 24px;
    height: 24px;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container[hidden] {
    display: none;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container__button {
    background-color: #f2f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    padding: 0px;
    width:100%;
    height:100%;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container__button:hover {
    background: #d8e1e6;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container__button:focus {
    outline: none;
  }
  .kuc-attachment__group__files__display-area__item__size {
    display: inline-block;
    position: absolute;
    right: 0;
    color: #888888;
    padding: 0 3px 0 0;
    max-width: 4.6em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
  }
  .kuc-attachment__group__files__droppable {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto 0;
  }
  .kuc-attachment__group__files__droppable[hidden] {
    display: none;
  }
  .kuc-attachment__group__files__droppable__text {
    background-color: #e2f2fe;
    border: dashed 2px #3498db;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment__group__files__browse-message {
    display: inline-block;
    color: var(--kuc-attachment-message-color, #888888);
    font-size: var(--kuc-attachment-message-font-size, 14px);
    margin: 3px 0 0;
    word-break: break-all;
  }
  .kuc-attachment__group__files__browse-message--disabled {
    color: #888888;
  }
  .kuc-attachment__group__files__browse-message[hidden] {
    display: none;
  }
  .kuc-attachment__group__files__not-droppable--dragenter {
    visibility: hidden;
  }
`})),H,U,W=e((()=>{r(),a(),N(),z(),g(),v(),x(),S(),p(),D(),V(),u(),(()=>{if(H=window.customElements.get(`kuc-attachment`),H)return;class e extends f{constructor(e){super(),this.accept=``,this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.message=``,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.files=[],this._isDraging=!1,this._dragEnterCounter=0,this._locale=this._getLocale(),this._isFileOrDirectoryDrag=e=>{if(!e.dataTransfer)return!1;if(e.dataTransfer.items!==void 0){for(let t=0;t<e.dataTransfer.items.length;t++)if(e.dataTransfer.items[t].kind.toLowerCase()===`file`)return!0}if(e.dataTransfer.types!==void 0){for(let t=0;t<e.dataTransfer.types.length;t++)if(e.dataTransfer.types[t].toLowerCase()===`files`)return!0}return!1},this._GUID=d();let t=w(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`files`)&&!E(this.files)?(this.throwErrorAfterUpdateComplete(_.FILES.IS_NOT_ARRAY),!1):e.has(`accept`)&&!T(this.accept)?(this.throwErrorAfterUpdateComplete(_.ACCEPT.IS_NOT_STRING),!1):e.has(`maxFiles`)&&this.maxFiles!==void 0&&!O(this.maxFiles)?(this.throwErrorAfterUpdateComplete(_.MAX_FILES.IS_NOT_NUMBER),!1):!0}willUpdate(e){e.has(`language`)&&(this._locale=this._getLocale())}render(){return n`
        <div class="kuc-attachment__group">
          <label
            class="kuc-attachment__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
            @click="${this._handleClickLabel}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </label>
          <div
            class="kuc-attachment__group__files ${this.disabled?` kuc-attachment__group__files--disabled`:``}"
            @dragenter="${this._handleDragEnter}"
            @dragover="${this._handleDragOver}"
            @dragleave="${this._handleDragLeave}"
            @drop="${this._handleDragDrop}"
          >
            <div
              class="kuc-attachment__group__files__droppable"
              ?hidden="${!this._isDraging}"
            >
              <div class="kuc-attachment__group__files__droppable__text">
                ${this._locale.ATTACHMENT_DRAG_DROP_ZONE}
              </div>
            </div>
            <ul
              class="kuc-attachment__group__files__display-area${this._isDraging?` kuc-attachment__group__files__not-droppable--dragenter`:``}"
            >
              ${this.files.map((e,t)=>this._getAttachmentItemTemplate(e,t))}
            </ul>
            <div
              class="kuc-attachment__group__files__browse-button${this._isDraging?` kuc-attachment__group__files__not-droppable--dragenter`:``}"
              ?hidden="${this.disabled||this._isMaxFilesReached()}"
            >
              <span class="kuc-attachment__group__files__browse-button__text"
                >${this._locale.ATTACHMENT_BROWSE}</span
              >
              <div
                class="kuc-attachment__group__files__browse-button__input-container"
              >
                <input
                  class="kuc-attachment__group__files__browse-button__input-container__input"
                  type="file"
                  multiple
                  .id="${this._GUID}-input"
                  accept="${this.accept}"
                  aria-required="${this.requiredIcon}"
                  aria-invalid="${this.error}"
                  aria-describedby="${this._GUID}-error"
                  @change="${this._handleChangeFiles}"
                />
              </div>
            </div>
            <p
              class="kuc-attachment__group__files__browse-message${this.disabled?` kuc-attachment__group__files__browse-message--disabled`:``}"
              ?hidden="${!this.message}"
            >
              ${this.message}
            </p>
          </div>
          <kuc-base-error
            class="kuc-attachment__error"
            ?hidden="${!this.error}"
            .text="${this.error}"
            .guid="${this._GUID}"
          ></kuc-base-error>
        </div>
      `}_getAttachmentItemTemplate(e,t){return n`
        <li class="kuc-attachment__group__files__display-area__item">
          <div
            title="${e.name||``}"
            class="kuc-attachment__group__files__display-area__item__name"
          >
            ${e.name||``}
          </div>
          <div
            class="kuc-attachment__group__files__display-area__item__remove-button__container"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-attachment__group__files__display-area__item__remove-button__container__button"
              type="button"
              aria-label="Cancel File"
              data-file-index="${t}"
              @click="${this._handleClickFileRemove}"
              tabindex="0"
            >
              ${this._getRemoveButtonIcon()}
            </button>
          </div>
          <span class="kuc-attachment__group__files__display-area__item__size">
            ${this._getFileSize(e.size)}
          </span>
        </li>
      `}async updated(e){await this.updateComplete,this._updateFileNameMaxWidth()}_updateFileNameMaxWidth(){let e=this._labelEl.getBoundingClientRect().width;this._fileItemsEl.forEach(t=>{t.style.maxWidth=`calc(var(--kuc-attachment-width, ${e<191?191:e}px) - 14px)`})}_getRemoveButtonIcon(){return t`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.93933 7.00001L1.96966 3.03034L1.43933 2.50001L2.49999 1.43935L3.03032 1.96968L6.99999 5.93935L10.9697 1.96968L11.5 1.43935L12.5607 2.50001L12.0303 3.03034L8.06065 7.00001L12.0303 10.9697L12.5607 11.5L11.5 12.5607L10.9697 12.0303L6.99999 8.06067L3.03032 12.0303L2.49999 12.5607L1.43933 11.5L1.96966 10.9697L5.93933 7.00001Z"
          fill="#a8a8a8"
        />
      </svg>`}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}_getLocale(){switch(this._getLanguage()){case`en`:return P;case`zh`:return I;case`zh-TW`:return L;case`ja`:return F;case`es`:return R;default:return P}}_handleClickFileRemove(e){let t=e.currentTarget,n=parseInt(t.getAttribute(`data-file-index`),10);if(this.files){n===this.files.length-1&&this._inputEl.focus();let e=[...this.files];this.files.splice(n,1);let t={oldFiles:e,files:this.files,type:`remove-file`,fileIndex:[n]};i(this,`change`,t),this.requestUpdate(),n<=this.files.length-1&&this._fileRemoveButtons[n].focus()}}_handleClickLabel(e){e.preventDefault()}_handleDragEnter(e){!(this.disabled||this._isMaxFilesReached())&&(this._dragEnterCounter++,this._dragEnterCounter===1&&this._isFileOrDirectoryDrag(e))&&(e.preventDefault(),this._groupFilesEl.style.height=this._groupFilesEl.getBoundingClientRect().height+`px`,this._dragTextEl.style.width=this._groupFilesEl.getBoundingClientRect().width-2+`px`,this._dragTextEl.style.height=this._groupFilesEl.getBoundingClientRect().height-6+`px`,this._isDraging=!0)}_handleDragOver(e){this.disabled||(e.stopPropagation(),this._isFileOrDirectoryDrag(e)&&e.preventDefault())}_handleDragDrop(e){this.disabled||!this._isDraging||(e.preventDefault(),this._handleDragLeave(),this._isFileDrop(e)&&this._addFiles(e))}_isFileDrop(e){if(e.dataTransfer&&e.dataTransfer.items){for(let t=0;t<e.dataTransfer.items.length;t++)if(typeof e.dataTransfer.items[t].webkitGetAsEntry==`function`&&e.dataTransfer.items[t].webkitGetAsEntry()?.isDirectory)return!1}return!0}_handleDragLeave(){this.disabled||(this._dragEnterCounter--,this._dragEnterCounter===0&&(this._groupFilesEl.style.height=`var(--kuc-attachment-height, auto)`,this._isDraging=!1))}_handleChangeFiles(e){e.preventDefault(),e.stopPropagation(),this._addFiles(e)}_addFiles(e){if(this.files){let t=e.dataTransfer?e.dataTransfer.files:e.target.files;if(t=Object.keys(t).map(e=>t[e]),this.accept&&(t=t.filter(e=>this._matchesAccept(e))),this._hasMaxFilesLimit()){let e=Math.max(0,this._effectiveMaxFiles()-this.files.length);t=t.slice(0,e)}if(t.length===0){this._inputEl.value=``;return}let n=[...this.files],r=t.map((e,t)=>n.length+t);t.forEach(e=>this.files.push(e));let a={oldFiles:n,files:this.files,type:`add-file`,fileIndex:r};i(this,`change`,a),this.requestUpdate()}this._inputEl.value=``}_matchesAccept(e){let t=this.accept.split(`,`).map(e=>e.trim().toLowerCase()).filter(e=>e&&(e.startsWith(`.`)||e.includes(`/`)));if(t.length===0)return!0;let n=e.name.toLowerCase(),r=e.type.toLowerCase();return t.some(e=>{if(e===`*/*`)return!0;if(e.startsWith(`.`))return n.endsWith(e);if(e.endsWith(`/*`)){let t=e.slice(0,-1);return r.startsWith(t)}return r===e})}_hasMaxFilesLimit(){return this.maxFiles!==void 0&&this.maxFiles>=1}_effectiveMaxFiles(){return Math.floor(this.maxFiles)}_isMaxFilesReached(){return this._hasMaxFilesLimit()&&this.files.length>=this._effectiveMaxFiles()}_getFileSize(e){return typeof e==`number`?this._formatFileSize(e):C(e)?this._formatFileSize(parseInt(e,10)):M}_formatFileSize(e){return e>=1073741824?Math.round(e/j)+` GB`:e>=1048576?Math.round(e/A)+` MB`:e>=1024?Math.round(e/k)+` KB`:Math.round(e)+` bytes`}}m([s({type:String})],e.prototype,`accept`,void 0),m([s({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),m([s({type:String})],e.prototype,`error`,void 0),m([s({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),m([s({type:String})],e.prototype,`label`,void 0),m([s({type:String,attribute:`lang`,reflect:!0,converter:b})],e.prototype,`language`,void 0),m([s({type:String})],e.prototype,`message`,void 0),m([s({type:Boolean})],e.prototype,`disabled`,void 0),m([s({type:Boolean})],e.prototype,`requiredIcon`,void 0),m([s({type:Boolean,attribute:`hidden`,reflect:!0,converter:y})],e.prototype,`visible`,void 0),m([s({type:Number})],e.prototype,`maxFiles`,void 0),m([s({type:Array})],e.prototype,`files`,void 0),m([o()],e.prototype,`_isDraging`,void 0),m([h(`.kuc-attachment__group__files`)],e.prototype,`_groupFilesEl`,void 0),m([h(`.kuc-attachment__group__files__droppable__text`)],e.prototype,`_dragTextEl`,void 0),m([h(`.kuc-attachment__group__files__browse-button__input-container__input`)],e.prototype,`_inputEl`,void 0),m([h(`.kuc-attachment__group__label`)],e.prototype,`_labelEl`,void 0),m([l(`.kuc-attachment__group__files__display-area__item__name`)],e.prototype,`_fileItemsEl`,void 0),m([l(`.kuc-attachment__group__files__display-area__item__remove-button__container__button`)],e.prototype,`_fileRemoveButtons`,void 0),window.customElements.define(`kuc-attachment`,e),c(B),H=e})(),U=H})),G,K,q,J;e((()=>{W(),G={title:`desktop/attachment`,argTypes:{accept:{name:`accept`},message:{name:`message`},className:{name:`className`},error:{name:`error`},id:{name:`id`},label:{name:`label`},language:{name:`language`,options:[`auto`,`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}},requiredIcon:{name:`requiredIcon`},files:{name:`files`},visible:{name:`visible`},disabled:{name:`disabled`},maxFiles:{name:`maxFiles`,control:{type:`number`}}},parameters:{actions:{handles:[`change`]}}},K=e=>{let t=new U({...e});return t.addEventListener(`change`,e=>{console.log(e)}),t},q=K.bind({}),q.args={message:`max-size: (1GB)`,className:`attachment-class`,error:`Error`,id:`attachment-id`,label:`Attachment Label`,language:`auto`,requiredIcon:!0,files:[{name:`file.txt`,size:`150`}],visible:!0,disabled:!1,accept:`.txt,.pdf`,maxFiles:5},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
  const attachment = new Attachment({
    ...args
  });
  attachment.addEventListener("change", event => {
    console.log(event);
  });
  return attachment;
}`,...q.parameters?.docs?.source}}},J=[`BaseLanguageEN`]}))();export{q as BaseLanguageEN,J as __namedExportsOrder,G as default};