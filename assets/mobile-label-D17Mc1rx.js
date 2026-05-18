import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{c as r,f as i,i as a,n as o,r as s,s as c,t as l}from"./decorate-33sGx9Ox.js";var u,d=e((()=>{u=`
  kuc-base-mobile-label {
    display: inline-table;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-label:lang(es) ,
  kuc-base-mobile-label:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-label:lang(zh) ,
  kuc-base-mobile-label:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-label:lang(zh-TW),
  kuc-base-mobile-label:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-label[hidden] {
    display: none;
  }
  .kuc-base-mobile-label__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: 86%;
  }
  .kuc-base-mobile-label__required-icon {
    font-size: 86%;
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-base-mobile-label__required-icon[hidden] {
    display: none;
  }
`})),f,p=e((()=>{n(),r(),c(),d(),o(),f=class extends s{constructor(...e){super(...e),this.requiredIcon=!1,this.guid=``,this.text=``}render(){return t`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&this.guid!==``?t`
          <span class="kuc-base-mobile-label__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:t` <span class="kuc-base-mobile-label__text">${this.text}</span> `}},l([i({type:Boolean})],f.prototype,`requiredIcon`,void 0),l([i({type:String})],f.prototype,`guid`,void 0),l([i({type:String})],f.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-label`)||(a(u),window.customElements.define(`kuc-base-mobile-label`,f))}));export{p as t};