import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,r as c,s as l,t as u,u as d}from"./decorate-33sGx9Ox.js";import{n as f,t as p}from"./constant-BNAIZv_2.js";import{a as m,n as h,o as g}from"./converter-BYYAaneI.js";import{c as ee,f as te,i as _,l as ne,n as v,t as y}from"./validator-d05NeqaQ.js";import{n as b,t as x}from"./checkbox-CfFFrpLJ.js";import{n as S,t as C}from"./date-picker-4749uxp9.js";import{n as w,t as T}from"./dropdown-BbOEfyZ5.js";import{n as E,t as re}from"./textarea-CzrU2iqj.js";import{n as ie,t as ae}from"./time-picker-XZuAZLxF.js";import{n as oe,t as se}from"./multichoice-BlSAEuPb.js";import{n as ce,t as le}from"./radio-button-BnvMydlj.js";import{n as ue}from"./tooltip-C-7vR1Rf.js";var D,de=e((()=>{D=`
  kuc-table,
  kuc-table *,
  kuc-table:lang(en),
  kuc-table:lang(en) * {
    font-family: sans-serif;
  }
  kuc-table:lang(es),
  kuc-table:lang(es) * {
    font-family: sans-serif;
  }
  kuc-table:lang(ja),
  kuc-table:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-table:lang(zh),
  kuc-table:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-table:lang(zh-TW),
  kuc-table:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-table {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-table[hidden] {
    display: none;
  }
  kuc-table kuc-* {
    line-height: 1;
  }
  .kuc-table__table {
    border-collapse: separate;
    border-spacing: 0;
  }
  .kuc-table__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-table-header-background-color, #3498db);
    border-style: solid;
    border-right: 0;
  }
  .kuc-table__table__header[hidden] {
    display: none;
  }
  .kuc-table__table__header__cell {
    box-sizing: border-box;
    font-size: var(--kuc-table-header-font-size, 12px);
    font-weight: 400;
    background-color: var(--kuc-table-header-background-color, #3498db);
    color: var(--kuc-table-header-color, #ffffff);
    height: var(--kuc-table-header-height, 40px);
    padding: 4px 8px;
    text-align: left;
    white-space: normal;
  }
  .kuc-table__table__header__cell-title {
    overflow-wrap: break-word;
    display: flex;
    align-items: center;
  }
  .kuc-table__table__header__cell[hidden] {
    display: none;
  }
  .kuc-table__table__header__cell .kuc-base-label__required-icon {
    font-size: var(--kuc-table-header-font-size, 20px);
    align-self: flex-start;
  }
  .kuc-table__table__header__cell__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    right: var(--kuc-table-action-button-right, 0px);
  }
  .kuc-table__table__header__cell__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    position: sticky;
    left: var(--kuc-table-action-button-left, 0px);
    z-index: 1;
  }
  .kuc-table__table__body__row__cell-data {
    box-sizing: border-box;
    overflow-wrap: break-word;
    white-space: normal;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 1px 1px;
    padding: 8px 8px;
    vertical-align: top;
  }
  .kuc-table__table__body--no-header>.kuc-table__table__body__row:first-child>.kuc-table__table__body__row__cell-data {
    border-top-width: 1px;
  }
  .kuc-table__table__body__row__cell-data:not(.kuc-table__table__body__row__cell-data[hidden])~.kuc-table__table__body__row__cell-data {
    border-left-width: 0px;
  }
  .kuc-table__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-table__table__body__row__action {
    white-space: nowrap;
    background-color: var(--kuc-table-action-button-background-color, #f5f5f5);
    vertical-align: middle;
    position: sticky;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 0 0 1px;
  }
  .kuc-table__table__body--no-header>.kuc-table__table__body__row:first-child>.kuc-table__table__body__row__action {
    border-top-width: 1px;
  }
  .kuc-table__table__body__row__action--right {
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 8%);
    right: var(--kuc-table-action-button-right, 0px);
    border-right-width: 1px;
  }
  .kuc-table__table__body__row__action--left {
    box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 8%);
    left: var(--kuc-table-action-button-left, 0px);
    border-left-width: 1px;
    z-index: 1;
  }
  .kuc-table__table__body__row__action button {
    display: inline-block;
    align-items: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: 1px solid transparent;
    padding: 2px;
    cursor: pointer;
  }
  .kuc-table__table__body__row__action button[hidden] {
    display: none;
  }
  .kuc-table__table__body__row__action-add {
    margin-left: 8px;
    margin-right: 8px;
  }
  .kuc-table__table__body__row__action-remove {
    margin-left: 4px;
    margin-right: 8px;
  }
  .kuc-table__table__body__row__action-add:focus,
  .kuc-table__table__body__row__action-remove:focus {
    border: 1px solid #3498db;
    outline: none;
  }
  .kuc-table__table__body__row__action-remove:hover path {
    fill: #e74c3c;
  }
  .kuc-table__table__body__row__action[hidden] {
    display: none;
  }
  .kuc-table__table caption {
    text-align: left;
    margin-bottom: 6px;
    overflow-wrap: anywhere;
    white-space: normal;
  }
  .kuc-table__table .kuc-table__table__label--no-column {
    overflow-wrap: break-word;
  }
`})),O,k,A,j,M,N,P,F,I,L,R,z,B=e((()=>{n(),i(),f(),h(),l(),y(),de(),s(),O=`kuc-table__table__body__row__cell-data`,k=`kuc-table__table__body__row`,A=`kuc-table__table__body__row__action`,j=`kuc-table__table__body__row__action-add`,M=`kuc-table__table__body__row__action-remove`,N=e=>`var(--kuc-table-header-${e}-width, var(--kuc-table-header-width, auto))`,P=`M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.0355 8.49997V7.49997H8.50008V3.96454H7.50008V7.49997H3.96443V8.49997H7.50008V12.0356H8.50008V8.49997H12.0355Z`,F=`#3498db`,I=`M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0355 7.49997V8.49997L3.96443 8.49997V7.49997H12.0355Z`,L=`#b5b5b5`,(()=>{if(R=window.customElements.get(`kuc-table`),R)return;class e extends c{constructor(e){if(super(),this.actionButtonPosition=`right`,this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.actionButton=!0,this.headerVisible=!0,this.visible=!0,this._actionButton={add:!0,remove:!0},this._actionButtonPosition=`right`,!e)return;let t=te(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`data`)||e.has(`columns`)){let e=this._getErrorValidateColumnsAndData();if(e)return this.throwErrorAfterUpdateComplete(e),!1}return!0}willUpdate(e){e.has(`actionButtonPosition`)&&(this._actionButtonPosition=this.actionButtonPosition===`left`?`left`:`right`),e.has(`actionButton`)&&(this._actionButton=this._getActionButtonSettings()),this._tBody&&(this._tBody.innerHTML=``)}render(){return!this.columns||this.columns.length<1?t`<table class="kuc-table__table">
            <caption
              class="kuc-table__table__label kuc-table__table__label--no-column"
              ?hidden="${!this.label}"
            >
              ${this.label}
            </caption>
          </table>`:t`
            <table class="kuc-table__table">
              <caption class="kuc-table__table__label" ?hidden="${!this.label}">
                ${this.label}
              </caption>
              <thead
                class="kuc-table__table__header"
                ?hidden="${!this.headerVisible}"
              >
                ${this._getTableHeaderTemplate()}
              </thead>
              <tbody
                class="kuc-table__table__body${this.headerVisible?``:` kuc-table__table__body--no-header`}"
              ></tbody>
            </table>
          `}updated(e){if(this.columns.length!==0)for(let e=0;e<this.data.length;e++)this._addRowToTable(e,this.data[e])}_getTableHeaderTemplate(){return t`
        <tr>
          ${this._actionButtonPosition===`left`?this._getActionButtonHeaderTemplate():``}
          ${this.columns.map((e,t)=>this._getColumnHeaderTemplate(e,t))}
          ${this._actionButtonPosition===`right`?this._getActionButtonHeaderTemplate():``}
        </tr>
      `}_getActionButtonHeaderTemplate(){return!this.data||this.data.length<1||!this._actionButton.add&&!this._actionButton.remove?t``:t`
        <th
          class="kuc-table__table__header__cell kuc-table__table__header__cell__action${this._actionButtonPosition===`left`?`--left`:`--right`}"
        ></th>
      `}_getColumnHeaderTemplate(e,n){let r=N(n);return t`
        <th
          class="kuc-table__table__header__cell"
          ?hidden="${e.visible===!1}"
          style="width: ${r}; min-width: ${r}; max-width: ${r}"
        >
          <div class="kuc-table__table__header__cell-title">
            ${e.title&&v(e.title)?m(e.title):e.title}<!--
        --><span
              class="kuc-base-label__required-icon"
              ?hidden="${!e.requiredIcon}"
              >*</span
            >
          </div>
        </th>
      `}_getActionsCellWhenRemoveRow(e){let t=null,n=e;for(;this.data.length>1;){let e=this._table.rows[n];if(!e)n--;else{t=e.cells[this._actionButtonPosition===`left`?0:this.columns.length];break}}return t}_getDefaultDataRow(e){let t={};for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(Array.isArray(e[n])){t[n]=[];continue}if(typeof e[n]==`object`&&e[n]!==null){t[n]={};continue}t[n]=``}return t}_addRowToTable(e,t){let n=this._tBody.insertRow(e);n.classList.add(k),(this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`&&this._addActionsCellToNewRow(n);for(let r=0;r<this.columns.length;r++){let i=N(r),a=n.insertCell(r+((this._actionButton.add||this._actionButton.remove)&&this._actionButtonPosition===`left`?1:0)),o=this.columns[r];a.classList.add(O),a.style.width=i,a.style.maxWidth=i,a.style.minWidth=i,a.addEventListener(`change`,e=>{this._handleChangeCell(e,o.field)}),a.hidden=!(o.visible??!0);let s=o.render?o.render(t[o.field],t,e):t[o.field];s&&s.nodeType?a.appendChild(s):a.innerText=s||``}!this._actionButton.add&&!this._actionButton.remove||this._actionButtonPosition===`left`||this._addActionsCellToNewRow(n)}_handleChangeCell(e,t){e.stopPropagation();let n=this._deepCloneObject(this.data),r=e.currentTarget.parentElement.rowIndex-1,i=this.data[r];if(t in i){let n=e.target.value;`detail`in e&&(n=e.detail.value),i[t]=n}let a={type:`change-cell`,rowIndex:r,data:this._deepCloneObject(this.data),oldData:n,field:t};this._dispatchChangeEvent(a)}_handleAddRow(e){let t=this._deepCloneObject(this.data),n=this._getDefaultDataRow(this.data[0]);this._addRowToTable(e,n),this.data.splice(e,0,n);let r={type:`add-row`,rowIndex:e,data:this._deepCloneObject(this.data),oldData:t};this._dispatchChangeEvent(r),this._toggleRemoveRowButton()}_handleRemoveRow(e){if(this.data.length===1)return;let t=e-1,n=this._deepCloneObject(this.data);this._table.deleteRow(e),this.data.splice(t,1);let r={type:`remove-row`,rowIndex:t,data:this._deepCloneObject(this.data),oldData:n};this._dispatchChangeEvent(r),this._toggleRemoveRowButton(),this._focusActionsButtonWhenRemoveRow(e)}_focusActionsButtonWhenRemoveRow(e){let t=this._getActionsCellWhenRemoveRow(e);if(t){this._focusRemoveRowButton(t);return}this._focusFirstAddRowButton()}_focusRemoveRowButton(e){e.querySelector(`.${M}`).focus()}_focusFirstAddRowButton(){this._table.rows[1].cells[this._actionButtonPosition===`left`?0:this.columns.length].querySelector(`.${j}`)?.focus()}_toggleRemoveRowButton(){let e=this._actionButtonPosition===`left`?this._tBody.rows[0].firstChild:this._tBody.rows[0].lastChild,t=e.lastChild;if(this.data.length===1){t.style.display=`none`,this._actionButton.add||(e.style.display=`none`,this._hideActionHeaderCell());return}if(this.data.length===2){let n=(this._actionButtonPosition===`left`?this._tBody.rows[1].firstChild:this._tBody.rows[1].lastChild).lastChild;t.style.display=n.style.display=`inline-block`,e.style.removeProperty(`display`)}}_getSvgDOM(e,t){let n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);n.setAttribute(`fill`,`none`),n.setAttribute(`width`,`18`),n.setAttribute(`height`,`18`),n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`aria-hidden`,`true`);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return r.setAttribute(`d`,t),r.setAttribute(`fill-rule`,`evenodd`),r.setAttribute(`clip-rule`,`evenodd`),r.setAttribute(`fill`,e),n.appendChild(r),n}_addActionsCellToNewRow(e){if(!this._actionButton.add&&!this._actionButton.remove)return;let t=e.insertCell(this._actionButtonPosition===`left`?0:this.columns.length);if(t.classList.add(A),this._actionButtonPosition===`left`?t.classList.add(`kuc-table__table__body__row__action--left`):t.classList.add(`kuc-table__table__body__row__action--right`),this._actionButton.add){let n=this._getActionButtonDOM(`add`,e);t.appendChild(n)}if(this._actionButton.remove){let n=this._getActionButtonDOM(`remove`,e);t.appendChild(n),this.data.length===1&&(n.style.display=`none`)}!this._actionButton.add&&this.data.length===1?(this._hideActionHeaderCell(),t.style.display=`none`):(this._showActionHeaderCell(),t.style.removeProperty(`display`))}_getActionButtonDOM(e,t){let n=M,r=`Delete this row`,i=e===`add`;i&&(n=j,r=`Add row`);let a=i?F:L,o=i?P:I,s=this._getSvgDOM(a,o),c=document.createElement(`button`);return c.classList.add(n),c.setAttribute(`title`,r),c.type=`button`,c.appendChild(s),c.addEventListener(`click`,()=>{let e=this._getErrorValidateColumnsAndData();if(e){this.throwErrorAfterUpdateComplete(e);return}if(i){this._handleAddRow(t.rowIndex);return}this._handleRemoveRow(t.rowIndex)}),c}_getActionButtonSettings(){let e={add:!0,remove:!0};return this.actionButton?(typeof this.actionButton==`object`&&(e.add=Object.prototype.hasOwnProperty.call(this.actionButton,`add`)?!!this.actionButton.add:!0,e.remove=Object.prototype.hasOwnProperty.call(this.actionButton,`remove`)?!!this.actionButton.remove:!0),e):(e.add=e.remove=!1,e)}_getErrorValidateColumnsAndData(){return this._getErrorMessageWhenValidateColumns()||(_(this.data)?``:p.DATA.IS_NOT_ARRAY)}_getErrorMessageWhenValidateColumns(){return _(this.columns)?ee(this.columns)?ne(this.columns)?p.COLUMNS.FIELD_UNIQUE:``:p.COLUMNS.FIELD_REQUIRED:p.COLUMNS.IS_NOT_ARRAY}_deepCloneObject(e){return JSON.parse(JSON.stringify(e))}_dispatchChangeEvent(e){r(this,`change`,e)}_hideActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!0),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!0)}_showActionHeaderCell(){this._actionHeaderCellRight&&(this._actionHeaderCellRight.hidden=!1),this._actionHeaderCellLeft&&(this._actionHeaderCellLeft.hidden=!1)}}u([a({type:String})],e.prototype,`actionButtonPosition`,void 0),u([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),u([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),u([a({type:String})],e.prototype,`label`,void 0),u([a({type:Array})],e.prototype,`columns`,void 0),u([a({type:Array})],e.prototype,`data`,void 0),u([a()],e.prototype,`actionButton`,void 0),u([a({type:Boolean})],e.prototype,`headerVisible`,void 0),u([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:g})],e.prototype,`visible`,void 0),u([d(`.kuc-table__table`)],e.prototype,`_table`,void 0),u([d(`.kuc-table__table__body`)],e.prototype,`_tBody`,void 0),u([d(`.kuc-table__table__header__cell__action--right`)],e.prototype,`_actionHeaderCellRight`,void 0),u([d(`.kuc-table__table__header__cell__action--left`)],e.prototype,`_actionHeaderCellLeft`,void 0),window.customElements.define(`kuc-table`,e),o(D),R=e})(),z=R})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{b(),S(),w(),oe(),ce(),E(),ie(),ue(),B(),V={title:`desktop/table`,argTypes:{className:{name:`className`},id:{name:`id`},label:{name:`label`},data:{name:`data`},columns:{name:`columns`},headerVisible:{name:`headerVisible`},visible:{name:`visible`},actionButton:{name:`actionButton`},actionButtonPosition:{name:`actionButtonPosition`}},parameters:{actions:{handles:[`change`]}}},H=(e,t)=>new re({value:e}),U=(e,t,n)=>new T({items:[{label:`Nguyen Van A`,value:`a`},{label:`Vo Duc Hau`,value:`hau`}],value:e,selectedIndex:0}),W=(e,t,n)=>new x({id:`address-${n}`,items:[{label:`VietNam`,value:`vn`},{label:`Japan`,value:`ja`}],value:e}),G=e=>new C({value:e}),K=e=>new ae({value:e}),q=e=>new le({items:[{label:`male`,value:`male`},{label:`female`,value:`female`}],value:e}),J=e=>new se({items:[{label:`Orange`,value:`orange`},{label:`Banana`,value:`banana`},{label:`Tomato`,value:`tomato`}],value:e}),Y=e=>{let t=new z({...e});return t.addEventListener(`change`,e=>{console.log(e,`event`)}),t},X=[{title:`<kuc-tooltip title='Please select a user' container='Name column (Dropdown component)'>`,field:`name`,requiredIcon:!0,render:U},{title:`Address`,field:`address`,render:W},{title:`Age`,field:`age`,render:H},{title:`Date`,field:`date`,render:G},{title:`Gender`,field:`gender`,render:q},{title:`Time`,field:`time`,render:K},{title:`Multichoice`,field:`multichoice`,render:J}],Z=[{name:`a`,age:32,date:`2021-03-31`,time:`12:12`,gender:`female`,multichoice:[`banana`,`tomato`],address:[`vn`]},{name:`hau`,age:20,date:`2021-02-22`,time:`13:13`,gender:`male`,multichoice:[`orange`,`banana`],address:[`ja`]}],Q=Y.bind({}),Q.args={label:`Table component`,headerVisible:!0,visible:!0,columns:X,data:Z,id:`table-id`,className:`table-classname`,actionButton:{add:!0,remove:!0},actionButtonPosition:`right`},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
  const table = new Table({
    ...args
  });
  table.addEventListener("change", event => {
    console.log(event, "event");
  });
  return table;
}`,...Q.parameters?.docs?.source}}},$=[`Base`]}))();export{Q as Base,$ as __namedExportsOrder,V as default};