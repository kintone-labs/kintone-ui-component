import{n as e}from"./chunk-BneVvdWh.js";import{a as t,s as n,t as r}from"./iframe-HX9z8Taj.js";import{a as i,c as a,d as o,f as s,i as c,l,n as u,o as d,r as f,s as p,t as m}from"./decorate-33sGx9Ox.js";import{n as h,t as g}from"./constant-BNAIZv_2.js";import{n as _,o as v}from"./converter-BYYAaneI.js";import{f as y,i as b,t as x}from"./validator-d05NeqaQ.js";import{t as S}from"./mobile-error-E2pOXAJn.js";import{t as C}from"./mobile-label-D17Mc1rx.js";var w,T=e((()=>{w=`
  kuc-mobile-checkbox,
  kuc-mobile-checkbox * {
    font-size: 13px;
    color: #333333;
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
      "Lucida Sans Unicode", Arial, Verdana, sans-serif;
  }
  kuc-mobile-checkbox:lang(es),
  kuc-mobile-checkbox:lang(es) * {
    font-family: sans-serif;
  }
  kuc-mobile-checkbox:lang(zh),
  kuc-mobile-checkbox:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
      Verdana, sans-serif;
  }
  kuc-mobile-checkbox:lang(zh-TW),
  kuc-mobile-checkbox:lang(zh-TW) * {
      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,
      Verdana,sans-serif
  }
  kuc-mobile-checkbox {
    width: 100%;
    display: inline-block;
  }
  kuc-mobile-checkbox[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox__group {
    border: none;
    padding: 0px;
    height: auto;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .kuc-mobile-checkbox__group__label {
    display: inline-block;
    font-size: 86%;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
  }
  .kuc-mobile-checkbox__group__label[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox__group__label__text {
    text-shadow: 0 1px 0 #ffffff;
    color: #888888;
    white-space: normal;
    font-size: inherit;
  }
  .kuc-mobile-checkbox__group__label__required-icon {
    position: relative;
    left: 3px;
    color: #d01212;
  }
  .kuc-mobile-checkbox__group__label__required-icon[hidden] {
    display: none;
  }
  .kuc-mobile-checkbox__group__select-menu {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .kuc-mobile-checkbox__group__select-menu[bordervisible] {
    border-color: #b3b3b3;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox__group__select-menu[disabled],
  .kuc-mobile-checkbox__group__select-menu__item--disabled {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox__group__select-menu--required[bordervisible] {
    border-color: #cf4a38;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
  }
  .kuc-mobile-checkbox__group__select-menu__item[bordervisible] {
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 30px;
    display: block;
    border-bottom: 1px solid #b3b3b3;
    padding: 8px;
  }
  .kuc-mobile-checkbox__group__select-menu__item {
    padding: 4px;
    border: 1px solid transparent;
    position: relative;
    white-space: normal;
    word-wrap: normal;
    height: 30px;
    display: block;
    padding: 8px;
  }
  .kuc-mobile-checkbox__group__select-menu__item:last-child {
    border-bottom: 0px;
  }
  .kuc-mobile-checkbox__group__select-menu[bordervisible]
  .kuc-mobile-checkbox__group__select-menu__item:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .kuc-mobile-checkbox__group__select-menu[bordervisible]
  .kuc-mobile-checkbox__group__select-menu__item:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .kuc-mobile-checkbox__group__select-menu__item__input {
    position: absolute;
    opacity: 0;
  }
  .kuc-mobile-checkbox__group__select-menu__item__input[disabled]
    + .kuc-mobile-checkbox__group__select-menu__item__label {
    background-color: #d5d7d9;
    color: #999999;
    -webkit-text-fill-color: #999999;
    background-color: #d5d7d9;
    opacity: 1;
  }
  .kuc-mobile-checkbox__group__select-menu__item__label {
    position: relative;
    margin: -7px 0px 0px 34px;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    padding: 11px 13px 13px 0px;
    font-size: 14.04px;
  }
  .kuc-mobile-checkbox__group__select-menu__item__label__icon {
    position: absolute;
    top: 50%;
    left: -30px;
    margin-top: -13px;
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    background-size: 22px 17px;
    content: "";
  }
  .kuc-mobile-checkbox__group__error {
    line-height: 1.5;
    border: 1px solid #e5db68;
    background-color: #fdffc9;
    margin-top: 0.3em;
    margin-left: 0.5em;
    padding: 0.4em 1em;
    border-radius: 0.4em;
    color: #000000;
  }
  .kuc-mobile-checkbox__group__error[hidden] {
    display: none;
  }
`})),E,D=e((()=>{r(),a(),h(),_(),p(),S(),C(),x(),T(),u(),(()=>{if(E=window.customElements.get(`kuc-mobile-checkbox`),E)return;class e extends f{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=d();let t=y(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){let t=`value`in e,n=`selectedIndex`in e,r=e.selectedIndex||[];if(!t&&n){if(!b(r))return;let t=this._getValueMapping(e);this.value=this._getValidValue(t,r)}}_getNewValueMapping(e,t){let n=parseInt(t,10),r=Object.keys(this._valueMapping),i={...this._valueMapping};return r.indexOf(t)>-1?(delete i[n],i):(i[n]=e,i)}_handleChangeInput(e){e.stopPropagation();let t=e.target,n=t.dataset.index||`0`,r=t.value,a=this.value?[...this.value]:this.value,o=this._getNewValueMapping(r,n),s=this.items.map(e=>e.value),c=Object.values(o).filter(e=>s.indexOf(e)>-1);if(c===a)return;let l=Object.keys(o).map(e=>parseInt(e,10));this.value=c,this.selectedIndex=l,i(this,`change`,{oldValue:a,value:c})}_getCheckboxIconSvgTemplate(e){return t`
       <svg
         class="kuc-mobile-checkbox__group__select-menu__item__label__icon"
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         width="44px"
         height="34px"
         viewBox="0 0 44 34"
         enable-background="new 0 0 44 34"
         xml:space="preserve">
         <image width="44" height="34" x="0" y="0" href="${this._getSVGStrokeValue(e)}"/>
      </svg>
       `}_getSVGStrokeValue(e){return e?`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC`:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC`}_isCheckedItem(e,t){let n=Object.values(this._valueMapping),r=Object.keys(this._valueMapping);return n.filter((n,i)=>n===e.value&&t===parseInt(r[i],10)).length>0}_getItemTemplate(e,t){let r=this._isCheckedItem(e,t);return n`
        <label
          for="${this._GUID}-item-${t}"
          class="kuc-mobile-checkbox__group__select-menu__item${e.disabled?` kuc-mobile-checkbox__group__select-menu__item--disabled`:``}"
          ?borderVisible="${this.borderVisible}"
        >
          <input
            type="checkbox"
            id="${this._GUID}-item-${t}"
            class="kuc-mobile-checkbox__group__select-menu__item__input"
            name="${this._GUID}-group"
            data-index="${t}"
            value="${e.value===void 0?``:e.value}"
            aria-describedby="${this._GUID}-error}"
            aria-required="${this.requiredIcon}"
            aria-invalid="${this.error!==``}"
            ?disabled="${e.disabled||this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <div class="kuc-mobile-checkbox__group__select-menu__item__label">
            ${this._getCheckboxIconSvgTemplate(r)}${e.label===void 0?e.value:e.label}
          </div>
        </label>
      `}shouldUpdate(e){return e.has(`items`)&&!b(this.items)?(this.throwErrorAfterUpdateComplete(g.ITEMS.IS_NOT_ARRAY),!1):e.has(`value`)&&!b(this.value)?(this.throwErrorAfterUpdateComplete(g.VALUE.IS_NOT_ARRAY),!1):e.has(`selectedIndex`)&&!b(this.selectedIndex)?(this.throwErrorAfterUpdateComplete(g.SELECTED_INDEX.IS_NOT_ARRAY),!1):!0}willUpdate(e){if(e.has(`value`)){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has(`items`)||e.has(`value`)||e.has(`selectedIndex`))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return n`
        <fieldset class="kuc-mobile-checkbox__group">
          <legend
            class="kuc-mobile-checkbox__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label>
          </legend>
          <div
            class="kuc-mobile-checkbox__group__select-menu ${this.requiredIcon?`kuc-mobile-checkbox__group__select-menu--required`:``}"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
          </div>
          <kuc-base-mobile-error
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error>
        </fieldset>
      `}updated(){this._inputEls.forEach(e=>{e.checked=this.value.indexOf(e.value)>-1})}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map(e=>parseInt(e,10))}_getValueMapping(e){let t=e.items||[],n=e.value||[],r=e.selectedIndex||[],i=t.map(e=>e.value||``),a=Object.assign({},i),o={};if(n.length===0){let e=this._getValidValue(a,r);return r.forEach((t,n)=>o[t]=e[n]),o}return this._getValidSelectedIndex(a).forEach((e,t)=>o[e]=n[t]),o}_getValidValue(e,t){return t.filter(t=>e[t]).map(t=>e[t])}_getValidSelectedIndex(e){let t=[];for(let n=0;n<this.value.length;n++){let r=this.selectedIndex[n];if(e[r]===this.value[n]){t.push(r);continue}let i=this.items.findIndex(e=>e.value===this.value[n]);t.push(i)}return t}}m([s({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),m([s({type:String})],e.prototype,`error`,void 0),m([s({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),m([s({type:String})],e.prototype,`label`,void 0),m([s({type:Boolean})],e.prototype,`borderVisible`,void 0),m([s({type:Boolean})],e.prototype,`disabled`,void 0),m([s({type:Boolean})],e.prototype,`requiredIcon`,void 0),m([s({type:Boolean,attribute:`hidden`,reflect:!0,converter:v})],e.prototype,`visible`,void 0),m([s({type:Array})],e.prototype,`items`,void 0),m([s({type:Array})],e.prototype,`selectedIndex`,void 0),m([s({type:Array})],e.prototype,`value`,void 0),m([l(`.kuc-mobile-checkbox__group__select-menu__item__input`)],e.prototype,`_inputEls`,void 0),m([o()],e.prototype,`_valueMapping`,void 0),window.customElements.define(`kuc-mobile-checkbox`,e),c(w),E=e})()})),O,k,A,j,M,N;e((()=>{r(),D(),O={title:`mobile/checkbox`,argTypes:{borderVisible:{name:`borderVisible`},className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},items:{name:`items`},label:{name:`label`},requiredIcon:{name:`requiredIcon`},selectedIndex:{name:`selectedIndex`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},k=e=>n`
    <kuc-mobile-checkbox
      .borderVisible="${e.borderVisible}"
      .className="${e.className}"
      .disabled="${e.disabled}"
      .error="${e.error}"
      .id="${e.id}"
      .items="${e.items}"
      .itemLayout="${e.itemLayout}"
      .label="${e.label}"
      .requiredIcon="${e.requiredIcon}"
      .selectedIndex="${e.selectedIndex}"
      .value="${e.value}"
      .visible="${e.visible}"
      @change="${e=>{console.log(e)}}"
    ></kuc-mobile-checkbox>
  `,A=k.bind({}),A.args={items:[{label:`sample1`,value:`sample1`},{label:`sample2`,value:`sample2`},{label:`sample3`,value:`sample3`,disabled:!0}],value:[`sample1`],selectedIndex:[0],className:`sample-class`,id:`sample-id`,visible:!0,disabled:!1,borderVisible:!0,label:`フルーツ`,requiredIcon:!0,error:`エラーです`},j=k.bind({}),j.args={items:[{label:`Orange`,value:`orange`},{label:`Apple`,value:`apple`}],value:[``,void 0],selectedIndex:[],className:`sample-class`,id:`sample-id`,visible:!0,disabled:!0,borderVisible:!0,label:`フルーツ`,requiredIcon:!1,error:``},M=k.bind({}),M.args={items:[{label:`sample1`,value:`sample1`},{label:`sample1`,value:`sample1`},{label:`sample2`,value:`sample2`}],value:[`sample1`],selectedIndex:[1],className:`sample-class`,id:`sample-id`,visible:!0,disabled:!1,borderVisible:!0,label:`Fruit`,requiredIcon:!0,error:`Error occurred!`},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  const handleMobileCheckBoxChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-checkbox
      .borderVisible="\${args.borderVisible}"
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .itemLayout="\${args.itemLayout}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleMobileCheckBoxChange}"
    ></kuc-mobile-checkbox>
  \`;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const handleMobileCheckBoxChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-checkbox
      .borderVisible="\${args.borderVisible}"
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .itemLayout="\${args.itemLayout}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleMobileCheckBoxChange}"
    ></kuc-mobile-checkbox>
  \`;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const handleMobileCheckBoxChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-mobile-checkbox
      .borderVisible="\${args.borderVisible}"
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .itemLayout="\${args.itemLayout}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleMobileCheckBoxChange}"
    ></kuc-mobile-checkbox>
  \`;
}`,...M.parameters?.docs?.source}}},N=[`Base`,`Base1`,`Base2`]}))();export{A as Base,j as Base1,M as Base2,N as __namedExportsOrder,O as default};