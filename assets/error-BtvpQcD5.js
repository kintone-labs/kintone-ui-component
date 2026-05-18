import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{c as r,f as i,i as a,n as o,r as s,s as c,t as l}from"./decorate-33sGx9Ox.js";var u,d=e((()=>{u=`
  kuc-base-error,
  kuc-base-error *,
  kuc-base-error:lang(en),
  kuc-base-error:lang(en) * {
    font-family: sans-serif;
  }
  kuc-base-error:lang(es),
  kuc-base-error:lang(es) * {
    font-family: sans-serif;
  }
  kuc-base-error:lang(ja),
  kuc-base-error:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-base-error:lang(zh),
  kuc-base-error:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-base-error:lang(zh-TW),
  kuc-base-error:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-base-error {
    width: 100%;
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
  }
  kuc-base-error[hidden] {
    display: none;
  }
  .kuc-base-error__error {
    line-height: 1.5;
    padding: 4px 18px;
    box-sizing: border-box;
    background-color: #e74c3c;
    color: #ffffff;
    margin: 8px 0px;
    word-break: break-all;
    white-space: normal;
  }
  .kuc-base-error__error[hidden] {
    display: none;
  }
`})),f,p=e((()=>{n(),r(),c(),d(),o(),f=class extends s{constructor(...e){super(...e),this.ariaLive=``,this.guid=``,this.text=``}render(){return t`
      ${this.ariaLive&&this.ariaLive!==``?t`
            <div
              class="kuc-base-error__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:t`
            <div
              class="kuc-base-error__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}},l([i({type:String})],f.prototype,`ariaLive`,void 0),l([i({type:String})],f.prototype,`guid`,void 0),l([i({type:String})],f.prototype,`text`,void 0),window.customElements.get(`kuc-base-error`)||(a(u),window.customElements.define(`kuc-base-error`,f))}));export{p as t};