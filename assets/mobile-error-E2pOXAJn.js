import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{c as r,f as i,i as a,n as o,r as s,s as c,t as l}from"./decorate-33sGx9Ox.js";var u,d=e((()=>{u=`
  kuc-base-mobile-error {
    display: block;
    font-size: 13px;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-base-mobile-error:lang(es),
  kuc-base-mobile-error:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-mobile-error:lang(zh),
  kuc-base-mobile-error:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-base-mobile-error:lang(zh-TW),
  kuc-base-mobile-error:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-base-mobile-error[hidden] {
    display: none;
  }
  .kuc-base-mobile-error__error {
    line-height: 1.5;
    color: #000000;
    background-color: #fdffc9;
    border: 1px solid #e5db68;
    border-radius: 0.4em;
    padding: 0.4em 1em;
    margin-top: 0.3em;
    margin-left: 0.5em;
  }
  .kuc-base-mobile-error__error[hidden] {
    display: none;
  }
`})),f,p=e((()=>{n(),r(),c(),d(),o(),f=class extends s{constructor(...e){super(...e),this.ariaLive=``,this.guid=``,this.text=``}render(){return t`
      ${this.ariaLive&&this.ariaLive!==``?t`
            <div
              class="kuc-base-mobile-error__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:t`
            <div
              class="kuc-base-mobile-error__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}},l([i({type:String})],f.prototype,`ariaLive`,void 0),l([i({type:String})],f.prototype,`guid`,void 0),l([i({type:String})],f.prototype,`text`,void 0),window.customElements.get(`kuc-base-mobile-error`)||(a(u),window.customElements.define(`kuc-base-mobile-error`,f))}));export{p as t};