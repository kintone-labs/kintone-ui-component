import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./decorate-33sGx9Ox.js";import{n as f,o as p}from"./converter-BYYAaneI.js";import{t as m}from"./label-D4AWTD2g.js";import{f as h,t as g}from"./validator-d05NeqaQ.js";var _,v=e((()=>{_=`
  kuc-switch,
  kuc-switch *,
  kuc-switch:lang(en),
  kuc-switch:lang(en) * {
    font-family: sans-serif;
  }
  kuc-switch:lang(es),
  kuc-switch:lang(es) * {
    font-family: sans-serif;
  }
  kuc-switch:lang(ja),
  kuc-switch:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-switch:lang(zh),
  kuc-switch:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }
  kuc-switch:lang(zh-TW),
  kuc-switch:lang(zh-TW) * {
    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;
  }

  kuc-switch {
    display: inline-table;
    font-size: 14px;
    color: #333333;
    vertical-align: top;
    line-height: 1.5;
  }

  kuc-switch[hidden] {
    display: none;
  }

  .kuc-switch__group {
    border: none;
    padding: 0px;
    height: auto;
    display: flex;
    margin: 0px;
    width: 100%;
    align-items: center;
    gap: 6px;
  }

  .kuc-switch__group--top {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch__group--bottom {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 4px;
  }

  .kuc-switch__group--left {
    flex-direction: row;
  }

  .kuc-switch__group--right {
    flex-direction: row-reverse;
  }

  .kuc-switch__group__label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
  }

  .kuc-switch__group__label[hidden] {
    display: none;
  }

  .kuc-switch__group__label--disabled {
    cursor: not-allowed;
  }

  .kuc-switch__group--top .kuc-switch__group__label,
  .kuc-switch__group--bottom .kuc-switch__group__label {
    padding-left: 3px;
  }

  .kuc-switch__group__label .kuc-base-label__text {
    font-size: 14px;
  }

  .kuc-switch__group__switch {
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .kuc-switch__group__switch__input {
    opacity: 0;
    width: 0px;
    height: 0px;
    position: absolute;
  }

  .kuc-switch__group__switch__handle {
    position: absolute;
    width: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    height: calc(var(--kuc-switch-track-height, 28px) - 2 * 4px);
    left: 4px;
    background-color: #ffffff;
    transition: left 0.2s ease-in-out;
    border-radius: 50%;
    cursor: pointer;
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__handle {
    left: calc(100% - var(--kuc-switch-track-height, 28px) + 4px);
  }

  .kuc-switch__group__switch__track {
    position: relative;
    transition: background-color 0.2s ease-in-out, padding-left 0.2s ease-in-out, padding-right 0.2s ease-in-out;
    border-radius: calc(var(--kuc-switch-track-height, 28px) / 2);
    display: block;
    cursor: pointer;
    border: none;
    overflow: hidden;
    background-color: #b5b5b5;
    padding-left: var(--kuc-switch-track-height, 28px);
    padding-right: 10px;
    box-sizing: border-box;
    min-width: 54px;
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__track {
    background-color: #3498db;
    padding-left: 10px;
    padding-right: var(--kuc-switch-track-height, 28px);
  }

  .kuc-switch__group__switch__input:focus-visible ~ .kuc-switch__group__switch__track {
    outline: 1px solid #3498db;
    outline-offset: 1px;
  }

  .kuc-switch__group__switch__input:disabled ~ .kuc-switch__group__switch__track,
  .kuc-switch__group__switch__input:disabled ~ .kuc-switch__group__switch__handle {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kuc-switch__group__switch__track__text {
    font-size: 14px;
    color: #ffffff;
    transition: margin-left 0.2s ease-in-out, margin-right 0.2s ease-in-out;
    pointer-events: none;
    white-space: nowrap;
    text-align: center;
    display: block;
    height: var(--kuc-switch-track-height, 28px);
    line-height: var(--kuc-switch-track-height, 28px);
  }

  .kuc-switch__group__switch__track__text--unchecked {
    margin-top: calc(-1 * var(--kuc-switch-track-height, 28px));
    margin-left: 0;
    margin-right: 0;
  }

  .kuc-switch__group__switch__track__text--checked {
    margin-left: calc(-100% - var(--kuc-switch-track-height, 28px));
    margin-right: calc(100% + var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__track .kuc-switch__group__switch__track__text--unchecked {
    margin-left: calc(100% + var(--kuc-switch-track-height, 28px));
    margin-right: calc(-100% - var(--kuc-switch-track-height, 28px));
  }

  .kuc-switch__group__switch__input:checked ~ .kuc-switch__group__switch__track .kuc-switch__group__switch__track__text--checked {
    margin-left: 0;
    margin-right: 0;
  }
`})),y,b=e((()=>{n(),i(),f(),u(),m(),g(),v(),s(),(()=>{if(y=window.customElements.get(`kuc-switch`),y)return;class e extends l{constructor(e){super(),this.checkedText=``,this.className=``,this.id=``,this.label=``,this.labelPlacement=`left`,this.unCheckedText=``,this.checked=!1,this.disabled=!1,this.visible=!0,this._validLabelPlacement=[`top`,`bottom`,`left`,`right`],this._GUID=c();let t=h(e);Object.assign(this,t)}render(){return t`
        <div
          class="kuc-switch__group kuc-switch__group--${this._getLabelPlacement()}"
        >
          <label
            class="kuc-switch__group__label${this.disabled?` kuc-switch__group__label--disabled`:``}"
            ?hidden="${!this.label}"
            for="${this._GUID}-input"
          >
            <kuc-base-label
              .text="${this.label}"
              .guid="${this._GUID}"
            ></kuc-base-label>
          </label>
          <div class="kuc-switch__group__switch">
            <input
              class="kuc-switch__group__switch__input"
              id="${this._GUID}-input"
              type="checkbox"
              role="switch"
              aria-labelledby="${this._GUID}-group"
              aria-describedby="${this._GUID}-text-${this.checked?`checked`:`unchecked`}"
              .checked="${this.checked}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            />
            <label
              class="kuc-switch__group__switch__track"
              for="${this._GUID}-input"
            >
              <span
                id="${this._GUID}-text-checked"
                class="kuc-switch__group__switch__track__text kuc-switch__group__switch__track__text--checked"
                >${this.checkedText}</span
              >
              <span
                id="${this._GUID}-text-unchecked"
                class="kuc-switch__group__switch__track__text kuc-switch__group__switch__track__text--unchecked"
                >${this.unCheckedText}</span
              >
            </label>
            <label
              class="kuc-switch__group__switch__handle"
              for="${this._GUID}-input"
            ></label>
          </div>
        </div>
      `}_handleChangeInput(e){e.stopPropagation(),this.checked=e.target.checked;let t={checked:this.checked};r(this,`change`,t)}_getLabelPlacement(){return this._validLabelPlacement.includes(this.labelPlacement)?this.labelPlacement:`left`}}d([a({type:String})],e.prototype,`checkedText`,void 0),d([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),d([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),d([a({type:String})],e.prototype,`label`,void 0),d([a({type:String})],e.prototype,`labelPlacement`,void 0),d([a({type:String})],e.prototype,`unCheckedText`,void 0),d([a({type:Boolean})],e.prototype,`checked`,void 0),d([a({type:Boolean})],e.prototype,`disabled`,void 0),d([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:p})],e.prototype,`visible`,void 0),window.customElements.define(`kuc-switch`,e),o(_),y=e})()})),x,S,C,w,T;e((()=>{n(),b(),x={title:`desktop/switch`,argTypes:{className:{name:`className`},id:{name:`id`},label:{name:`label`},labelPlacement:{name:`labelPlacement`,options:[`top`,`bottom`,`left`,`right`],control:{type:`select`}},checkedText:{name:`checkedText`},unCheckedText:{name:`unCheckedText`},checked:{name:`checked`},disabled:{name:`disabled`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}}},S=e=>t`
    <kuc-switch
      .className="${e.className}"
      .id="${e.id}"
      .label="${e.label}"
      .labelPlacement="${e.labelPlacement}"
      .checkedText="${e.checkedText}"
      .unCheckedText="${e.unCheckedText}"
      .checked="${e.checked}"
      .disabled="${e.disabled}"
      .visible="${e.visible}"
      @change="${e=>{console.log(e)}}"
    ></kuc-switch>
  `,C=S.bind({}),C.args={label:`Switch`,labelPlacement:`left`,checkedText:`ON`,unCheckedText:`OFF`,checked:!1,className:`options-class`,id:`options-id`,disabled:!1,visible:!0},w=S.bind({}),w.args={label:``,labelPlacement:`left`,checkedText:``,unCheckedText:``,checked:!1,className:``,id:``,disabled:!1,visible:!0},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const handleChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-switch
      .className="\${args.className}"
      .id="\${args.id}"
      .label="\${args.label}"
      .labelPlacement="\${args.labelPlacement}"
      .checkedText="\${args.checkedText}"
      .unCheckedText="\${args.unCheckedText}"
      .checked="\${args.checked}"
      .disabled="\${args.disabled}"
      .visible="\${args.visible}"
      @change="\${handleChange}"
    ></kuc-switch>
  \`;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const handleChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-switch
      .className="\${args.className}"
      .id="\${args.id}"
      .label="\${args.label}"
      .labelPlacement="\${args.labelPlacement}"
      .checkedText="\${args.checkedText}"
      .unCheckedText="\${args.unCheckedText}"
      .checked="\${args.checked}"
      .disabled="\${args.disabled}"
      .visible="\${args.visible}"
      @change="\${handleChange}"
    ></kuc-switch>
  \`;
}`,...w.parameters?.docs?.source}}},T=[`Base`,`DefaultValue`]}))();export{C as Base,w as DefaultValue,T as __namedExportsOrder,x as default};