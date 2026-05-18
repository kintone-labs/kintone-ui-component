import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{c as i,d as a,f as o,i as s,n as c,r as l,s as u,t as d}from"./decorate-33sGx9Ox.js";import{n as f,t as p}from"./constant-BNAIZv_2.js";import{a as m,n as h,o as g}from"./converter-BYYAaneI.js";import{f as _,i as v,n as y,p as b,r as x,t as S}from"./validator-d05NeqaQ.js";import{t as C}from"./pagination-D6qjLMah.js";import{n as w,t as T}from"./tooltip-C-7vR1Rf.js";var E,D=e((()=>{E=`
  kuc-readonly-table ,
  kuc-readonly-table  *,
  kuc-readonly-table:lang(en),
  kuc-readonly-table:lang(en) * {
    font-family: sans-serif;
  }
  kuc-readonly-table:lang(es),
  kuc-readonly-table:lang(es) * {
    font-family: sans-serif;
  }
  kuc-readonly-table:lang(ja),
  kuc-readonly-table:lang(ja) * {
      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-readonly-table:lang(zh),
  kuc-readonly-table:lang(zh) * {
      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-readonly-table:lang(zh-TW),
  kuc-readonly-table:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-readonly-table {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  kuc-readonly-table[hidden] {
    display: none;
  }
  .kuc-readonly-table__table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    display: inline-block;
  }
  .kuc-readonly-table__table__header {
    border-width: 0px 1px;
    border-color: var(--kuc-readonly-table-header-background-color, #3498db);
    border-style: solid;
  }
  .kuc-readonly-table__table__header__cell--sort.kuc-readonly-table__table__header__cell--first-visible:hover {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table__table__header__cell--sort.kuc-readonly-table__table__header__cell--last-visible:hover {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table__table__header__cell--sort.kuc-readonly-table__table__header__cell--first-visible:focus-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table__table__header__cell--sort.kuc-readonly-table__table__header__cell--last-visible:focus-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table__table__header__cell--sorted-asc.kuc-readonly-table__table__header__cell--first-visible,
  .kuc-readonly-table__table__header__cell--sorted-desc.kuc-readonly-table__table__header__cell--first-visible {
    border-left: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table__table__header__cell--sorted-asc.kuc-readonly-table__table__header__cell--last-visible,
  .kuc-readonly-table__table__header__cell--sorted-desc.kuc-readonly-table__table__header__cell--last-visible {
    border-right: 1px solid var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
  .kuc-readonly-table__table__label {
    text-align: left;
    white-space: normal;
    overflow-wrap: anywhere;
    padding: 4px 0px;
  }
  .kuc-readonly-table__table__label[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__label--no-column {
    overflow-wrap: break-word;
  }
  .kuc-readonly-table__table__header__cell {
    background-color: var(--kuc-readonly-table-header-background-color, #3498db);
    color: var(--kuc-readonly-table-header-color, #ffffff);
    height: var(--kuc-readonly-table-header-height, 40px);
    box-sizing: border-box;
    text-align: left;
    overflow: auto;
    white-space: nowrap;
    word-wrap: break-word;
    padding: 4px 8px;
    font-weight: 400;
    font-size: var(--kuc-readonly-table-header-font-size, 12px);
  }
  .kuc-readonly-table__table__header__cell--html {
    white-space: normal;
    overflow: unset;
  }
  .kuc-readonly-table__table__header__cell[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__header__cell__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .kuc-readonly-table__table__header__cell__wrapper__title {
    flex: 1;
    min-width: 0;
  }
  .kuc-readonly-table__table__header__cell__wrapper__title--html {
    white-space: normal;
  }
  .kuc-readonly-table__table__header__cell__wrapper__sort-icon {
    flex-shrink: 0;
    margin-left: 4px;
    display: flex;
    align-items: center;
    align-self: center;
  }
  .kuc-readonly-table__table__body {
    vertical-align: top;
  }
  .kuc-readonly-table__table__body>.kuc-readonly-table__table__body__row:first-child>.kuc-readonly-table__table__body__row__cell-data {
    border-top-width: 0px;
  }
  .kuc-readonly-table__table__body__row__cell-data {
    box-sizing: border-box;
    padding: 4px 8px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    border-color: #e3e7e8;
    border-style: solid;
    border-width: 1px;
  }
  .kuc-readonly-table__table__body__row__cell-data[hidden] {
    display: none;
  }
  .kuc-readonly-table__table__header__cell,
  .kuc-readonly-table__table__body__row__cell-data {
    scrollbar-width: none; /* Firefox */
  }
  .kuc-readonly-table__table__header__cell::-webkit-scrollbar,
  .kuc-readonly-table__table__body__row__cell-data::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
    display: none
  }
  .kuc-readonly-table__table__body__row__cell-data--html {
    white-space: normal;
  }
  .kuc-readonly-table__table__header__cell--sort {
    cursor: pointer;
    user-select: none;
  }
  .kuc-readonly-table__table__header__cell--sort:hover {
    background-color: var(--kuc-readonly-table-header-background-color-hover, #1d6fa5);
  }
  .kuc-readonly-table__table__header__cell--sort:focus-visible {
    outline: none;
    background-color: var(--kuc-readonly-table-header-background-color-focus, #1d6fa5);
  }
  .kuc-readonly-table__table__header__cell--sorted-asc,
  .kuc-readonly-table__table__header__cell--sorted-desc {
    background-color: var(--kuc-readonly-table-header-background-color-sorted, #1d6fa5);
  }
`})),O,k,A=e((()=>{r(),i(),f(),h(),u(),S(),C(),D(),c(),(()=>{if(O=window.customElements.get(`kuc-readonly-table`),O)return;class e extends l{constructor(e){if(super(),this.className=``,this.id=``,this.label=``,this.columns=[],this.data=[],this.pagination=!0,this.rowsPerPage=5,this.visible=!0,this._pagePosition=1,this._columnOrder=[],this._sortField=null,this._sortDirection=null,!e)return;let t=_(e);Object.assign(this,t)}shouldUpdate(e){return e.has(`columns`)&&!v(this.columns)?(this.throwErrorAfterUpdateComplete(p.COLUMNS.IS_NOT_ARRAY),!1):e.has(`data`)&&!v(this.data)?(this.throwErrorAfterUpdateComplete(p.DATA.IS_NOT_ARRAY),!1):e.has(`rowsPerPage`)&&!b(this.rowsPerPage)?(this.throwErrorAfterUpdateComplete(p.ROWS_PER_PAGE.INVALID),!1):!0}willUpdate(e){e.has(`columns`)&&(this._columnOrder=[],this.columns.map(e=>this._columnOrder.push(e.field?e.field:``))),e.has(`rowsPerPage`)&&(this.rowsPerPage=Math.round(this.rowsPerPage))}render(){let e=this._createDisplayData();return!this.columns||this.columns.length<1?n`
            <table class="kuc-readonly-table__table">
              <caption
                class="kuc-readonly-table__table__label kuc-readonly-table__table__label--no-column"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
            </table>
          `:n`
            <table class="kuc-readonly-table__table">
              <caption
                class="kuc-readonly-table__table__label"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
              <thead class="kuc-readonly-table__table__header">
                <tr>
                  ${this.columns.map((e,t)=>this._getColumnsTemplate(e,t))}
                </tr>
              </thead>
              <tbody class="kuc-readonly-table__table__body">
                ${e.map((e,t)=>this._getDataTemplate(e,t))}
              </tbody>
            </table>
            <kuc-base-pagination
              .pagePosition="${this._pagePosition}"
              .rowsPerPage="${this.rowsPerPage}"
              .total="${this.data.length}"
              .visible="${this.pagination}"
              .isPrev="${this._toggleDisplayPreviousButton()}"
              .isNext="${this._toggleDisplayNextButton()}"
              @kuc:pagination-click-prev=${this._handleClickPreviousButton}
              @kuc:pagination-click-next=${this._handleClickNextButton}
            ></kuc-base-pagination>
          `}_createDisplayData(){let e=[...this.data];if(this._sortField&&this._sortDirection&&(e=this._sortData(e,this._sortField,this._sortDirection)),!this.pagination)return e;let t=(this._pagePosition-1)*this.rowsPerPage+1,n=this._pagePosition*this.rowsPerPage;return e.filter((e,r)=>r>=t-1&&r<=n-1)}_sortData(e,t,n){return[...e].sort((e,r)=>{let i=e[t],a=r[t],o=y(i),s=y(a);if(o&&s)return 0;if(o)return 1;if(s)return-1;if(i==null&&a==null)return 0;if(i==null)return 1;if(a==null)return-1;if(typeof i==`number`&&typeof a==`number`)return n===`asc`?i-a:a-i;if(typeof i==`string`&&typeof a==`string`&&x(i)&&x(a)){let e=new Date(i),t=new Date(a);if(!isNaN(e.getTime())&&!isNaN(t.getTime()))return n===`asc`?e.getTime()-t.getTime():t.getTime()-e.getTime()}let c=String(i),l=String(a),u=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});return n===`asc`?u.compare(c,l):u.compare(l,c)})}_handleClickHeader(e){this._sortFields(e)}_handleKeyDownHeader(e,t){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._sortFields(t))}_sortFields(e){let t=this._columnOrder.indexOf(e);t<0||this.columns[t].sort&&(this._sortField===e?this._sortDirection=this._sortDirection===`asc`?`desc`:`asc`:(this._sortField=e,this._sortDirection=`asc`),this._pagePosition=1)}_customWidthVariables(e){return`var(--kuc-readonly-table-header-${e}-width, var(--kuc-readonly-table-header-width, auto))`}_getColumnsTemplate(e,t){let r=this._customWidthVariables(t),i=e.title?y(e.title):!1,a=e.field||``,o=e.sort===!0,s=this._sortField===a,c=this.columns.map((e,t)=>e.visible===!1?-1:t).filter(e=>e!==-1),l=t===c[0],u=t===c[c.length-1],d=s?` kuc-readonly-table__table__header__cell--sorted-${this._sortDirection}`:``;return n`
        <th
          class="kuc-readonly-table__table__header__cell${i?` kuc-readonly-table__table__header__cell--html`:``}${o?` kuc-readonly-table__table__header__cell--sort`:``}${d}${l?` kuc-readonly-table__table__header__cell--first-visible`:``}${u?` kuc-readonly-table__table__header__cell--last-visible`:``}"
          ?hidden="${e.visible===!1}"
          style="width: ${r}; min-width: ${r}; max-width: ${r};"
          @click="${o?()=>this._handleClickHeader(a):null}"
          tabindex="${o?0:-1}"
          aria-sort="${s?this._getSortDescription(this._sortDirection):`none`}"
          @keydown="${o?e=>this._handleKeyDownHeader(e,a):null}"
        >
          <div class="kuc-readonly-table__table__header__cell__wrapper">
            <div
              class="kuc-readonly-table__table__header__cell__wrapper__title${i?` kuc-readonly-table__table__header__cell__wrapper__title--html`:``}"
            >
              ${i?m(e.title):e.title??``}
            </div>
            ${o&&s?n`<div
                  class="kuc-readonly-table__table__header__cell__wrapper__sort-icon"
                >
                  ${this._getSortSvgIcon(this._sortDirection)}
                </div>`:``}
          </div>
        </th>
      `}_getSortDescription(e){return e===`desc`?`descending`:e===`asc`?`ascending`:`none`}_getSortSvgIcon(e){return e===`desc`?t`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 0H5.99996V10.6011L1.4528 5.78021L0.725342 6.46637L6.57169 12.6647L12.1902 6.45887L11.4489 5.78771L6.99996 10.7017V0Z" fill="white"/>
        </svg>
        `:e===`asc`?t`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99996 13H5.99996V2.3989L1.4528 7.21979L0.725342 6.53363L6.57169 0.3353L12.1902 6.54113L11.4489 7.21229L6.99996 2.2983V13Z" fill="white"/>
      </svg>`:``}_getDataTemplate(e,t){return n`
        <tr
          class="kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-${t}"
        >
          ${this._columnOrder.map((t,r)=>{let i=this.columns[r].visible??!0,a=e[t];y(a)&&(a=n`<div
                class="kuc-readonly-table__table__body__row__cell-data--html"
              >
                ${m(a)}
              </div>`);let o=this._customWidthVariables(r);return n`<td class="kuc-readonly-table__table__body__row__cell-data" ?hidden="${!i}" style="width: ${o}; min-width: ${o}; max-width: ${o}">${a}</td>`})}
        </tr>
      `}_toggleDisplayPreviousButton(){return this._pagePosition>1}_toggleDisplayNextButton(){return this._pagePosition<this.data.length/this.rowsPerPage}_handleClickPreviousButton(e){if(!(this._pagePosition<2)){if(!b(this.rowsPerPage)){this.throwErrorAfterUpdateComplete(p.ROWS_PER_PAGE.INVALID);return}--this._pagePosition}}_handleClickNextButton(e){if(!b(this.rowsPerPage)){this.throwErrorAfterUpdateComplete(p.ROWS_PER_PAGE.INVALID);return}this._toggleDisplayNextButton()!==!1&&(this._pagePosition+=1)}}d([o({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),d([o({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),d([o({type:String})],e.prototype,`label`,void 0),d([o({type:Array})],e.prototype,`columns`,void 0),d([o({type:Array})],e.prototype,`data`,void 0),d([o({type:Boolean})],e.prototype,`pagination`,void 0),d([o({type:Number})],e.prototype,`rowsPerPage`,void 0),d([o({type:Boolean,attribute:`hidden`,reflect:!0,converter:g})],e.prototype,`visible`,void 0),d([a()],e.prototype,`_pagePosition`,void 0),d([a()],e.prototype,`_columnOrder`,void 0),d([a()],e.prototype,`_sortField`,void 0),d([a()],e.prototype,`_sortDirection`,void 0),window.customElements.define(`kuc-readonly-table`,e),s(E),O=e})(),k=O})),j,M,N,P,F,I,L;e((()=>{w(),A(),j={title:`desktop/readonly-table`,argTypes:{className:{name:`className`},id:{name:`id`},label:{name:`label`},data:{name:`data`},pagination:{name:`pagination`},rowsPerPage:{name:`rowsPerPage`},columns:{name:`columns`},visible:{name:`visible`}},parameters:{actions:{handles:[`kuc:pagination-click-prev`,`kuc:pagination-click-next`]}}},M=e=>new k({...e}),N=M.bind({}),P=()=>{let e=document.createElement(`div`);return e.appendChild(new T({container:`City Name (Move mouse to me!)`,title:`The name of the city`})),e},N.args={id:`sample-id`,className:`sample-class`,label:`My ReadOnly Table`,visible:!0,rowsPerPage:3,pagination:!0,columns:[{title:`Number`,field:`index`,sort:!0},{title:P(),field:`name`,sort:!0},{title:`Country`,field:`country`,sort:!0},{title:`Population`,field:`population`},{title:`Link`,field:`link`,sort:!1}],data:[{index:`1`,name:`Ho Chi Minh`,country:`Vietnam`,population:`8,993,000`,link:`<a href="https://en.wikipedia.org/wiki/Ho_Chi_Minh_City" target="_blank">Vietnam: Ho Chi Minh City</a>`},{index:`2`,name:`Can Tho`,country:`Vietnam`,population:`1,282,000`,link:`<a href="https://en.wikipedia.org/wiki/C%E1%BA%A7n_Th%C6%A1" target="_blank">Vietnam: Cần Thơ</a>`},{index:`3`,name:`Vinh Long`,country:`Vietnam`,population:`200,000`,link:`<a href="https://en.wikipedia.org/wiki/V%C4%A9nh_Long" target="_blank">Vietnam: Vĩnh Long</a>`},{index:`4`,name:`Rach Gia`,country:`Vietnam`,population:`400,000`,link:`<a href="https://en.wikipedia.org/wiki/R%E1%BA%A1ch_Gi%C3%A1" target="_blank">Vietnam: Rạch Giá</a>`},{index:`5`,name:`Edmonton`,country:`Canada`,population:`981,000`,link:`<a href="https://en.wikipedia.org/wiki/Edmonton" target="_blank">Canada: Edmonton</a>`},{index:`6`,name:`Calgary`,country:`Canada`,population:`1,336,000`,link:`<a href="https://en.wikipedia.org/wiki/Calgary" target="_blank">Canada: Calgary</a>`},{index:`7`,name:`Vancouver`,country:`Canada`,population:`675,000`,link:`<a href="https://en.wikipedia.org/wiki/Vancouver" target="_blank">Canada: Vancouver</a>`}]},F=M.bind({}),F.args={id:`sample-id`,className:`sample-class`,label:`My ReadOnly Table`,visible:!0,pagination:!0,rowsPerPage:3,columns:[{title:`Number`,field:`index`},{title:`City`,field:`name`},{title:`Country`,field:`country`},{title:`Population`,field:`population`}],data:[{index:`1`,name:`Ho Chi Minh`,country:`Vietnam`,population:`8,993,000`},{index:`2`,name:`Can Tho`,country:`Vietnam`,population:`1,282,000`},{index:`3`,name:`An imaginary long long long
city name as an example for long content in a cell`,country:`Vietnam`,population:`200,000`},{index:`4`,name:`Rach Gia`,country:`Vietnam`,population:`400,000`},{index:`5`,name:`Edmonton`,country:`Canada`,population:`981,000`},{index:`6`,name:`Calgary`,country:`Canada`,population:`1,336,000`},{index:`7`,name:`Vancouver`,country:`Canada`,population:`675,000`}]},I=M.bind({}),I.args={id:`sample-id`,className:`sample-class`,label:`My ReadOnly Table`,visible:!0,pagination:!0,rowsPerPage:3,columns:[{title:`Number`,field:`index`},{title:`A very very long header name as an example of long content in header`,field:`name`},{title:`Country`,field:`country`},{title:`Population`,field:`population`}],data:[{index:`1`,name:`Ho Chi Minh`,country:`Vietnam`,population:`8,993,000`},{index:`2`,name:`Can Tho`,country:`Vietnam`,population:`1,282,000`},{index:`3`,name:`Vinh Long`,country:`Vietnam`,population:`200,000`},{index:`4`,name:`Rach Gia`,country:`Vietnam`,population:`400,000`},{index:`5`,name:`Edmonton`,country:`Canada`,population:`981,000`},{index:`6`,name:`Calgary`,country:`Canada`,population:`1,336,000`},{index:`7`,name:`Vancouver`,country:`Canada`,population:`675,000`}]},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
  const readOnlyTable = new ReadOnlyTable({
    ...args
  });
  return readOnlyTable;
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  const readOnlyTable = new ReadOnlyTable({
    ...args
  });
  return readOnlyTable;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  const readOnlyTable = new ReadOnlyTable({
    ...args
  });
  return readOnlyTable;
}`,...I.parameters?.docs?.source}}},L=[`Base`,`Base2`,`Base3`]}))();export{N as Base,F as Base2,I as Base3,L as __namedExportsOrder,j as default};