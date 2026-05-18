import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{c as r,f as i,i as a,n as o,r as s,s as c,t as l}from"./decorate-33sGx9Ox.js";var u,d=e((()=>{u=`
  kuc-base-label,
  kuc-base-label *,
  kuc-base-label:lang(en),
  kuc-base-label:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-label:lang(es),
  kuc-base-label:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-label:lang(ja),
  kuc-base-label:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
  }
  kuc-base-label:lang(zh),
  kuc-base-label:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
  }
  kuc-base-label:lang(zh-TW),
  kuc-base-label:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-label {
    font-size: 14px;
    color: #333333;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-label[hidden] {
    display: none;
  }
  .kuc-base-label__required-icon {
    font-size: 20px;
    vertical-align: -3px;
    color: #e74c3c;
    margin-left: 4px;
    line-height: 1;
  }
  .kuc-base-label__required-icon[hidden] {
    display: none;
  }
`})),f,p=e((()=>{n(),r(),c(),d(),o(),f=class extends s{constructor(...e){super(...e),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return t`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?t`
          <span class="kuc-base-label__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:t` <span class="kuc-base-label__text">${this.text}</span> `}},l([i({type:Boolean})],f.prototype,`requiredIcon`,void 0),l([i({type:String})],f.prototype,`guid`,void 0),l([i({type:String})],f.prototype,`text`,void 0),window.customElements.get(`kuc-base-label`)||(a(u),window.customElements.define(`kuc-base-label`,f))}));export{p as t};