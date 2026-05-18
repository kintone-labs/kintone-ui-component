import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{a as r,c as i,f as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./decorate-33sGx9Ox.js";import{i as f,n as p,o as m,r as h}from"./converter-BYYAaneI.js";import{C as g,D as _,E as v,O as y,T as b,j as x,k as S,v as C,w}from"./utils-BITFIerI.js";import{t as T}from"./error-BtvpQcD5.js";import{t as E}from"./label-D4AWTD2g.js";import{f as D,h as O,m as k,t as A,u as j}from"./validator-d05NeqaQ.js";import{t as M}from"./time-DxVz01-Q.js";var N,P=e((()=>{N=`
kuc-time-picker,
kuc-time-picker *,
kuc-time-picker:lang(en),
kuc-time-picker:lang(en) * {
  font-family: sans-serif;
}
kuc-time-picker:lang(ja),
kuc-time-picker:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-time-picker:lang(zh),
kuc-time-picker:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-time-picker:lang(zh-TW),
kuc-time-picker:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-time-picker:lang(es),
kuc-time-picker:lang(es) * {
  font-family: sans-serif;
}
kuc-time-picker {
  font-size: 14px;
  color: var(--kuc-time-picker-input-color, #333333);
  display: inline-table;
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  vertical-align: top;
  line-height: 1.5;
}
.kuc-time-picker__group__input {
  position: relative;
}
kuc-time-picker[hidden] {
  display: none;
}
.kuc-time-picker__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}

.kuc-time-picker__group kuc-base-time {
  display: inline-flex;
  flex-direction: column;
}

.kuc-time-picker__group .kuc-base-time__group {
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  font-size: var(--kuc-time-picker-input-font-size, 14px);
  height: var(--kuc-time-picker-input-height, 40px);
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker__group .kuc-base-time__group input[type=text].kuc-base-time__group__hours,
.kuc-time-picker__group .kuc-base-time__group input[type=text].kuc-base-time__group__minutes,
.kuc-time-picker__group .kuc-base-time__group input.kuc-base-time__group__suffix,
.kuc-time-picker__group .kuc-base-time__group--focus {
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker__group__label {
  padding: 4px 0px 8px 0px;
  display: inline-block;
  white-space: nowrap;
}
.kuc-time-picker__group__label[hidden] {
  display: none;
}
`})),F,I,L=e((()=>{n(),i(),p(),x(),M(),C(),T(),u(),E(),A(),P(),s(),(()=>{if(F=window.customElements.get(`kuc-time-picker`),F)return;class e extends l{constructor(e){super(),this.className=``,this.error=``,this.id=``,this.label=``,this.language=`auto`,this.max=``,this.min=``,this.value=``,this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText=``,this._inputValue=``,this._errorInvalid=``,this._inputMax=``,this._inputMin=``,this._inputTimeStep=30,this._valueConverted=``,this._GUID=c();let t=D(e);Object.assign(this,t)}shouldUpdate(e){if(e.has(`max`)||e.has(`min`)){let e=this._inputMin,t=this._inputMax;if(this.max===void 0||this.max===``)t=v;else{if(!O(this.max))return this.throwErrorAfterUpdateComplete(w.MAX),!1;t=this.max=f(this.max)}if(this.min===void 0||this.min===``)e=_;else{if(!O(this.min))return this.throwErrorAfterUpdateComplete(w.MIN),!1;e=this.min=f(this.min)}if(g(t,e)<0)return this.throwErrorAfterUpdateComplete(b),!1;this._inputMin=e,this._inputMax=t}if(e.has(`timeStep`)){if(!j(this.timeStep))return this.throwErrorAfterUpdateComplete(y),!1;if(!k(this.timeStep,this._inputMax,this._inputMin))return this.throwErrorAfterUpdateComplete(w.TIME_STEP),!1;this._inputTimeStep=this.timeStep}return this.value===void 0||this.value===``?!0:O(this.value)?(this._valueConverted=f(this.value),e.has(`value`)&&(g(this._valueConverted,this._inputMin)<0||g(this._inputMax,this._valueConverted)<0)?(this.throwErrorAfterUpdateComplete(S),!1):!0):(this.throwErrorAfterUpdateComplete(w.VALUE),!1)}update(e){e.has(`value`)&&(this.value===void 0?this._errorInvalid===``&&(this._inputValue=``):(this.value=this.value===``?this.value:this._valueConverted,this._inputValue=this.value)),(e.has(`max`)||e.has(`min`)||e.has(`value`))&&this.value!==void 0&&(this._errorInvalid=``),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return t`
        <fieldset
          class="kuc-time-picker__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-time-picker__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label>
          </legend>
          <kuc-base-time
            class="kuc-time-picker__group__input"
            .value="${this._inputValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            .timeStep="${this._inputTimeStep}"
            .min="${this._inputMin}"
            .max="${this._inputMax}"
            .language="${this._getLanguage()}"
            @kuc:base-time-change="${this._handleTimeChange}"
          >
          </kuc-base-time>
          <kuc-base-error
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error>
        </fieldset>
      `}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();let t={value:e.detail.value,oldValue:this.value};e.detail.error?(t.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=``):(this.value=e.detail.value,this._errorInvalid=``),this._inputValue=e.detail.value,r(this,`change`,t)}_getLanguage(){let e=[`en`,`ja`,`zh`,`zh-TW`,`es`];return e.indexOf(this.language)===-1?e.indexOf(document.documentElement.lang)===-1?`en`:document.documentElement.lang:this.language}}d([a({type:String,reflect:!0,attribute:`class`})],e.prototype,`className`,void 0),d([a({type:String})],e.prototype,`error`,void 0),d([a({type:String,reflect:!0,attribute:`id`})],e.prototype,`id`,void 0),d([a({type:String})],e.prototype,`label`,void 0),d([a({type:String,attribute:`lang`,reflect:!0,converter:h})],e.prototype,`language`,void 0),d([a({type:String})],e.prototype,`max`,void 0),d([a({type:String})],e.prototype,`min`,void 0),d([a({type:String})],e.prototype,`value`,void 0),d([a({type:Boolean})],e.prototype,`disabled`,void 0),d([a({type:Boolean})],e.prototype,`hour12`,void 0),d([a({type:Boolean})],e.prototype,`requiredIcon`,void 0),d([a({type:Boolean,attribute:`hidden`,reflect:!0,converter:m})],e.prototype,`visible`,void 0),d([a({type:Number})],e.prototype,`timeStep`,void 0),window.customElements.define(`kuc-time-picker`,e),o(N),F=e})(),I=F}));export{L as n,I as t};