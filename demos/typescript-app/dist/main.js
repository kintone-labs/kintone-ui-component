/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class o{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=n.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(i,e))}return e}toString(){return this.cssText}}const a=(i,n)=>{if(t)i.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of n){const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:r,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:c,getPrototypeOf:h}=Object,_=globalThis,p=_.trustedTypes,b=p?p.emptyScript:"",g=_.reactiveElementPolyfillSupport,m=(e,t)=>e,f={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>!r(e,t),k={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:o}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const a=n?.call(this);o.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const e=this.properties,t=[...u(e),...c(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=n,this[n]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??v)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[m("elementProperties")]=new Map,y[m("finalized")]=new Map,g?.({ReactiveElement:y}),(_.reactiveElementVersions??=[]).push("2.0.4");const x=globalThis,w=x.trustedTypes,$=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+I,S=`<${E}>`,T=document,A=()=>T.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,V="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,B=/>/g,O=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,U=/"/g,P=/^(?:script|style|textarea|title)$/i,R=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),z=(R(1),R(2),R(3),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),G=new WeakMap,F=T.createTreeWalker(T,129);function W(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(t):t}const q=(e,t)=>{const i=e.length-1,n=[];let o,a=2===t?"<svg>":3===t?"<math>":"",s=H;for(let t=0;t<i;t++){const i=e[t];let r,l,d=-1,u=0;for(;u<i.length&&(s.lastIndex=u,l=s.exec(i),null!==l);)u=s.lastIndex,s===H?"!--"===l[1]?s=M:void 0!==l[1]?s=B:void 0!==l[2]?(P.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=O):void 0!==l[3]&&(s=O):s===O?">"===l[0]?(s=o??H,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?O:'"'===l[3]?U:N):s===U||s===N?s=O:s===M||s===B?s=H:(s=O,o=void 0);const c=s===O&&e[t+1].startsWith("/>")?" ":"";a+=s===H?i+S:d>=0?(n.push(r),i.slice(0,d)+C+i.slice(d)+I+c):i+I+(-2===d?t:c)}return[W(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class K{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,a=0;const s=e.length-1,r=this.parts,[l,d]=q(e,t);if(this.el=K.createElement(l,i),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=F.nextNode())&&r.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(C)){const t=d[a++],i=n.getAttribute(e).split(I),s=/([.?@])?(.*)/.exec(t);r.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?Q:"?"===s[1]?ee:"@"===s[1]?te:X}),n.removeAttribute(e)}else e.startsWith(I)&&(r.push({type:6,index:o}),n.removeAttribute(e));if(P.test(n.tagName)){const e=n.textContent.split(I),t=e.length-1;if(t>0){n.textContent=w?w.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],A()),F.nextNode(),r.push({type:2,index:++o});n.append(e[t],A())}}}else if(8===n.nodeType)if(n.data===E)r.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(I,e+1));)r.push({type:7,index:o}),e+=I.length-1}o++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,n){if(t===z)return t;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const a=D(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(e),o._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(t=Y(e,o._$AS(e,t.values),o,n)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??T).importNode(t,!0);F.currentNode=n;let o=F.nextNode(),a=0,s=0,r=i[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new Z(o,o.nextSibling,this,e):1===r.type?t=new r.ctor(o,r.name,r.strings,this,e):6===r.type&&(t=new ie(o,this,e)),this._$AV.push(t),r=i[++s]}a!==r?.index&&(o=F.nextNode(),a++)}return F.currentNode=T,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),D(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new J(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new K(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of e)n===t.length?t.push(i=new Z(this.O(A()),this.O(A()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(e,t=this,i,n){const o=this.strings;let a=!1;if(void 0===o)e=Y(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==z,a&&(this._$AH=e);else{const n=e;let s,r;for(e=o[0],s=0;s<o.length-1;s++)r=Y(this,n[i+s],t,s),r===z&&(r=this._$AH[s]),a||=!D(r)||r!==this._$AH[s],r===j?e=j:e!==j&&(e+=(r??"")+o[s+1]),this._$AH[s]=r}a&&!n&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Q extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class ee extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class te extends X{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??j)===z)return;const i=this._$AH,n=e===j&&i!==j||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==j&&(i===j||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const ne=x.litHtmlPolyfillSupport;ne?.(K,Z),(x.litHtmlVersions??=[]).push("3.2.1");const oe=globalThis,ae=oe.trustedTypes,se=ae?ae.createPolicy("lit-html",{createHTML:e=>e}):void 0,re="$lit$",le=`lit$${Math.random().toFixed(9).slice(2)}$`,de="?"+le,ue=`<${de}>`,ce=document,he=()=>ce.createComment(""),_e=e=>null===e||"object"!=typeof e&&"function"!=typeof e,pe=Array.isArray,be="[ \t\n\f\r]",ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,fe=/>/g,ve=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ke=/'/g,ye=/"/g,xe=/^(?:script|style|textarea|title)$/i,we=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),$e=we(1),Ce=we(2),Ie=(we(3),Symbol.for("lit-noChange")),Ee=Symbol.for("lit-nothing"),Se=new WeakMap,Te=ce.createTreeWalker(ce,129);function Ae(e,t){if(!pe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==se?se.createHTML(t):t}class De{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,a=0;const s=e.length-1,r=this.parts,[l,d]=((e,t)=>{const i=e.length-1,n=[];let o,a=2===t?"<svg>":3===t?"<math>":"",s=ge;for(let t=0;t<i;t++){const i=e[t];let r,l,d=-1,u=0;for(;u<i.length&&(s.lastIndex=u,l=s.exec(i),null!==l);)u=s.lastIndex,s===ge?"!--"===l[1]?s=me:void 0!==l[1]?s=fe:void 0!==l[2]?(xe.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=ve):void 0!==l[3]&&(s=ve):s===ve?">"===l[0]?(s=o??ge,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?ve:'"'===l[3]?ye:ke):s===ye||s===ke?s=ve:s===me||s===fe?s=ge:(s=ve,o=void 0);const c=s===ve&&e[t+1].startsWith("/>")?" ":"";a+=s===ge?i+ue:d>=0?(n.push(r),i.slice(0,d)+re+i.slice(d)+le+c):i+le+(-2===d?t:c)}return[Ae(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]})(e,t);if(this.el=De.createElement(l,i),Te.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Te.nextNode())&&r.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(re)){const t=d[a++],i=n.getAttribute(e).split(le),s=/([.?@])?(.*)/.exec(t);r.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?Be:"?"===s[1]?Oe:"@"===s[1]?Ne:Me}),n.removeAttribute(e)}else e.startsWith(le)&&(r.push({type:6,index:o}),n.removeAttribute(e));if(xe.test(n.tagName)){const e=n.textContent.split(le),t=e.length-1;if(t>0){n.textContent=ae?ae.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],he()),Te.nextNode(),r.push({type:2,index:++o});n.append(e[t],he())}}}else if(8===n.nodeType)if(n.data===de)r.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(le,e+1));)r.push({type:7,index:o}),e+=le.length-1}o++}}static createElement(e,t){const i=ce.createElement("template");return i.innerHTML=e,i}}function Le(e,t,i=e,n){if(t===Ie)return t;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const a=_e(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(e),o._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(t=Le(e,o._$AS(e,t.values),o,n)),t}class Ve{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??ce).importNode(t,!0);Te.currentNode=n;let o=Te.nextNode(),a=0,s=0,r=i[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new He(o,o.nextSibling,this,e):1===r.type?t=new r.ctor(o,r.name,r.strings,this,e):6===r.type&&(t=new Ue(o,this,e)),this._$AV.push(t),r=i[++s]}a!==r?.index&&(o=Te.nextNode(),a++)}return Te.currentNode=ce,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class He{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Le(this,e,t),_e(e)?e===Ee||null==e||""===e?(this._$AH!==Ee&&this._$AR(),this._$AH=Ee):e!==this._$AH&&e!==Ie&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>pe(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ee&&_e(this._$AH)?this._$AA.nextSibling.data=e:this.T(ce.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=De.createElement(Ae(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new Ve(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return void 0===t&&Se.set(e.strings,t=new De(e)),t}k(e){pe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of e)n===t.length?t.push(i=new He(this.O(he()),this.O(he()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Me{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=Ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ee}_$AI(e,t=this,i,n){const o=this.strings;let a=!1;if(void 0===o)e=Le(this,e,t,0),a=!_e(e)||e!==this._$AH&&e!==Ie,a&&(this._$AH=e);else{const n=e;let s,r;for(e=o[0],s=0;s<o.length-1;s++)r=Le(this,n[i+s],t,s),r===Ie&&(r=this._$AH[s]),a||=!_e(r)||r!==this._$AH[s],r===Ee?e=Ee:e!==Ee&&(e+=(r??"")+o[s+1]),this._$AH[s]=r}a&&!n&&this.j(e)}j(e){e===Ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Be extends Me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ee?void 0:e}}class Oe extends Me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ee)}}class Ne extends Me{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){if((e=Le(this,e,t,0)??Ee)===Ie)return;const i=this._$AH,n=e===Ee&&i!==Ee||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Ee&&(i===Ee||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ue{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Le(this,e)}}const Pe=oe.litHtmlPolyfillSupport;Pe?.(De,He),(oe.litHtmlVersions??=[]).push("3.2.1");class Re extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let o=n._$litPart$;if(void 0===o){const e=i?.renderBefore??null;n._$litPart$=o=new He(t.insertBefore(he(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ie}}Re._$litElement$=!0,Re.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Re});const ze=globalThis.litElementPolyfillSupport;ze?.({LitElement:Re}),(globalThis.litElementVersions??=[]).push("4.1.1");const je={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v},Ge=(e=je,t,i)=>{const{kind:n,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,o,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];t.call(this,i),this.requestUpdate(n,o,e)}}throw Error("Unsupported decorator location: "+n)};function Fe(e){return(t,i)=>"object"==typeof i?Ge(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function We(e){return Fe({...e,state:!0,attribute:!1})}const qe=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function Ke(e,t){return(i,n,o)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof n?i:o??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return qe(i,n,{get(){let i=e.call(this);return void 0===i&&(i=a(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return qe(i,n,{get(){return a(this)}})}}let Ye;function Je(e){return(t,i)=>qe(t,i,{get(){return(this.renderRoot??(Ye??=document.createDocumentFragment())).querySelectorAll(e)}})}const Ze=1048576,Xe=1073741824,Qe={ATTACHMENT_BROWSE:"Browse",ATTACHMENT_DRAG_DROP_ZONE:"Drop files here."},et={ATTACHMENT_BROWSE:"参照",ATTACHMENT_DRAG_DROP_ZONE:"ここにファイルをドロップします。"},tt={ATTACHMENT_BROWSE:"选择文件",ATTACHMENT_DRAG_DROP_ZONE:"拖动文件到此。"},it={ATTACHMENT_BROWSE:"選擇檔案",ATTACHMENT_DRAG_DROP_ZONE:"拖曳檔案到此。"},nt={ATTACHMENT_BROWSE:"Examinar",ATTACHMENT_DRAG_DROP_ZONE:"Suelte los archivos aquí."},ot="'items' property is not array.",at="'value' property is not unique in items.",st="'value' property is not specified in items.",rt="'files' property is not array.",lt="'value' property is not array.",dt="'value' property is not string.",ut="'selectedIndex' property is not array.",ct="'selectedIndex' property is not number.",ht="'columns' property is not array.",_t="'field' property is not specified in columns.",pt="'field' property is not unique in columns.",bt="'rowsPerPage' property is not positive integer.",gt="'data' property is not array.",mt="'container' property is not HTMLElement.";class ft{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class vt extends ft{constructor(e){if(super(e),this.it=j,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||null==e)return this._t=void 0,this.it=e;if(e===z)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}vt.directiveName="unsafeHTML",vt.resultType=1;const kt=(e=>(...t)=>({_$litDirective$:e,values:t}))(vt),yt=24,xt=12,wt="AM",$t="PM",Ct='"max" must be greater than or equal to "min".',It="Time is out of valid range.",Et="'timeStep' property is not number.",St="00:00",Tt="23:59",At="'value' property format is not valid.",Dt="'max' property format is not valid.",Lt="'min' property format is not valid.",Vt="'timeStep' property format is not valid.",Ht={MONTH_SELECT:["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],YEAR_SELECT_POSTFIX:"",WEEK_DAYS:[{text:"SUN",abbr:"Sunday"},{text:"MON",abbr:"Monday"},{text:"TUE",abbr:"Tuesday"},{text:"WED",abbr:"Wednesday"},{text:"THU",abbr:"Thursday"},{text:"FRI",abbr:"Friday"},{text:"SAT",abbr:"Saturday"}],INVALID_FORMAT:"Format is not valid.",INVALID_TIME_FORMAT:"Format is not valid.",CALENDAR_FOOTER_TEXT:{none:"None",today:"Today",close:"Close"},TIME_IS_OUT_OF_VALID_RANGE:"Time is out of valid range."},Mt={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"日",abbr:"日"},{text:"月",abbr:"月"},{text:"火",abbr:"火"},{text:"水",abbr:"水"},{text:"木",abbr:"木"},{text:"金",abbr:"金"},{text:"土",abbr:"土"}],INVALID_FORMAT:"日付の形式が不正です。",INVALID_TIME_FORMAT:"時刻の形式が不正です。",CALENDAR_FOOTER_TEXT:{none:"選択を解除",today:"今日",close:"閉じる"},TIME_IS_OUT_OF_VALID_RANGE:"時刻が有効な範囲外です。"},Bt={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"周日",abbr:"周日"},{text:"周一",abbr:"周一"},{text:"周二",abbr:"周二"},{text:"周三",abbr:"周三"},{text:"周四",abbr:"周四"},{text:"周五",abbr:"周五"},{text:"周六",abbr:"周六"}],INVALID_FORMAT:"日期格式不正确。",INVALID_TIME_FORMAT:"时间格式不正确。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"关闭"},TIME_IS_OUT_OF_VALID_RANGE:"时间超出有效范围。"},Ot={MONTH_SELECT:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],YEAR_SELECT_POSTFIX:"年",WEEK_DAYS:[{text:"週日",abbr:"週日"},{text:"週一",abbr:"週一"},{text:"週二",abbr:"週二"},{text:"週三",abbr:"週三"},{text:"週四",abbr:"週四"},{text:"週五",abbr:"週五"},{text:"週六",abbr:"週六"}],INVALID_FORMAT:"日期格式錯誤。",INVALID_TIME_FORMAT:"時間格式錯誤。",CALENDAR_FOOTER_TEXT:{none:"清空",today:"今天",close:"關閉"},TIME_IS_OUT_OF_VALID_RANGE:"時間超出有效範圍。"},Nt={MONTH_SELECT:["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"],YEAR_SELECT_POSTFIX:"",WEEK_DAYS:[{text:"Do.",abbr:"Domingo"},{text:"Lu.",abbr:"Lunes"},{text:"Ma.",abbr:"Martes"},{text:"Mi.",abbr:"Miércoles"},{text:"Ju.",abbr:"Jueves"},{text:"Vi.",abbr:"Viernes"},{text:"Sá.",abbr:"Sábado"}],INVALID_FORMAT:"Formato no válido.",INVALID_TIME_FORMAT:"Formato no válido.",CALENDAR_FOOTER_TEXT:{none:"Ninguno",today:"Hoy",close:"Cerrar"},TIME_IS_OUT_OF_VALID_RANGE:"La hora está fuera del rango válido."},Ut=(e,t)=>{const i=ei(e,t);let n=new Date(i.start),o=[];const a=[];for(;n<=i.end;)o.push(qt(n)),7===o.length&&(a.push(o),o=[]),n.setDate(n.getDate()+1),n=new Date(n);return a},Pt=(e,t)=>{let i,n;i=Math.floor(e/60),n=e%60;const o=i%yt<xt?wt:$t;return i=t?i%xt:i%yt,0===i&&t&&(i=xt),i<10&&(i="0"+i),n<10&&(n="0"+n),{label:i+":"+n+(t?" "+o:""),value:i+":"+n+(t?" "+o:"")}},Rt=e=>{const t=e.split(":");let i=parseInt(t[0],10),n=parseInt(t[1],10);return isNaN(i)||isNaN(n)?0:(i<0?i=0:i>=yt&&(i=23),n<0?n=0:n>=60&&(n=59),60*i+n)},zt=(e,t)=>{const i=Rt(e),n=Rt(t);return i>n?1:i===n?0:-1},jt=e=>{let t=e%xt;return t=0===t?xt:t,t},Gt=e=>e>=xt?$t:wt,Ft=e=>{const[t,i]=e.split(" "),[n,o]=t.split(":");return i?`${Wt(n,i)}:${o}`:e},Wt=(e,t)=>{const i=parseInt(e,10);return Qt(t===$t?i===xt?12:i+12:i===xt?0:i)},qt=e=>{const t=new Date(e),i=t.getFullYear(),n=Qt(t.getMonth()+1),o=Qt(t.getDate());return{text:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`,attr:`${i}-${n}-${o}`}},Kt=(e,t)=>{if(t&&!Jt(t)){const i=t.split("-");if(3!==i.length)return t;const n=i[0],o=i[1],a=i[2];return"en"===e?`${o}/${a}/${n}`:`${n}-${o}-${a}`}return t},Yt=(e,t)=>{if(Jt(t))return t;const i="en"===e,n=i?"/":"-",o=t.split(n);return`${i?o[2]:o[0]}-${i?o[0]:o[1]}-${i?o[1]:o[2]}`},Jt=e=>null==e||0===e.length||!/[^(^\s*)|(\s*$)]/.test(e),Zt=(e="ja")=>{const t=new Date,i=t.getFullYear(),n=Qt(t.getMonth()+1),o=Qt(t.getDate());return"ja"===e||"zh"===e?i+"-"+n+"-"+o:n+"/"+o+"/"+i},Xt=(e,t)=>{if(t&&!Jt(t)){const i="en"===e,n=i?"/":"-";if(new Date(`${t}${i?"":"T00:00:00"}`).getDate()!==parseInt(t.split(n)[i?1:2],10))return!1;const o=/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;if("en"===e)return null!==t.match(o);const a=/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;return null!==t.match(a)}return!1},Qt=(e,t=2)=>{const i=`0000000000${e}`;return i.substr(i.length-t)},ei=(e,t)=>{const i=new Date(e,t);i.setDate(1);const n=new Date(i);n.setDate(n.getDate()-n.getDay());const o=new Date(e,t);o.setMonth(o.getMonth()+1,0);const a=new Date(o);a.setDate(a.getDate()+(6-a.getDay()));const s=(a.getTime()-n.getTime())/864e5;return a.setDate(a.getDate()+(42-s)),{start:n,end:a}},ti=e=>{switch(e){case"en":default:return Ht;case"zh":return Bt;case"ja":return Mt;case"zh-TW":return Ot;case"es":return Nt}},ii=e=>{const t=[];t.push({value:`${e} 12`,label:`${e} 12`});for(let i=1;i<=11;i++)t.push({value:`${e} ${Qt(i)}`,label:`${e} ${Qt(i)}`});return t},ni=()=>Ce`
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5V1.2764L6 7.5L12 1.2764V0.5L6 6.5L0 0.5Z" fill="#888888"/>
    </svg>
    `;function oi(e,t){const i=e.querySelector(".kuc-base-datetime-listbox-1-18-0__listbox"),n=ai(e);if(!e.parentElement||!i||!n)return;const{inputToBottom:o,inputToTop:a}=n,s="kuc-base-datetime-header-month-1-18-0"===e.tagName.toLowerCase()?360:300,r=e.parentElement.getBoundingClientRect().height;return i.style.maxHeight=s+"px",e.parentElement.style.position="relative",o>=s?(i.style.height=s+"px","bottom"===t?void(i.style.top=r+"px"):void(i.style.bottom=r+"px")):"bottom"===t?(i.style.top=r+"px",void(i.style.height=o-18+"px")):(i.style.height=a-18+"px",i.style.top="auto",void(i.style.bottom=e.parentElement.getBoundingClientRect().height+"px"))}const ai=e=>{var t,i;if(!e.parentElement)return{inputToBottom:0,inputToTop:0,inputToRight:0,inputToLeft:0};const n=null!==(t=e.closest("kuc-base-date-1-18-0"))&&void 0!==t?t:e.closest("kuc-mobile-base-date-1-18-0"),o=(null!==(i=n.getElementsByClassName("kuc-base-date-1-18-0__input")[0])&&void 0!==i?i:n.getElementsByClassName("kuc-mobile-base-date-1-18-0__group")[0]).getBoundingClientRect().width;return{inputToBottom:window.innerHeight-e.parentElement.getBoundingClientRect().bottom,inputToTop:e.parentElement.getBoundingClientRect().top,inputToRight:window.innerWidth-e.parentElement.getBoundingClientRect().left,inputToLeft:e.parentElement.getBoundingClientRect().left+o}},si={fromAttribute:e=>null===e,toAttribute:e=>e?null:""},ri={fromAttribute:e=>!e||-1===["en","ja","zh","zh-TW","es"].indexOf(e),toAttribute:e=>{const t=["en","ja","zh","zh-TW","es"];return-1!==t.indexOf(e)?e:-1!==t.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}},li=e=>e instanceof HTMLElement?e:kt(e),di=e=>{if(void 0===e||""===e)return"";let t=[];return e.indexOf("-")>0&&(t=e.split("-")),t.length<2?`${e}-01-01`:2===t.length?`${Qt(t[0],4)}-${Qt(t[1])}-01`:t.length>2?`${Qt(t[0],4)}-${Qt(t[1])}-${Qt(t[2])}`:""},ui=e=>{if(5===e.length||""===e)return e;const t=e.indexOf(":"),i=e.substr(0,t),n=e.substr(t+1,5);return`${Qt(i)}:${Qt(n)}`},ci={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let hi;const _i=new Uint8Array(16);function pi(){if(!hi){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");hi=crypto.getRandomValues.bind(crypto)}return hi(_i)}const bi=[];for(let e=0;e<256;++e)bi.push((e+256).toString(16).slice(1));const gi=function(e,t,i){if(ci.randomUUID&&!t&&!e)return ci.randomUUID();const n=(e=e||{}).random||(e.rng||pi)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){i=i||0;for(let e=0;e<16;++e)t[i+e]=n[e];return t}return function(e,t=0){return(bi[e[t+0]]+bi[e[t+1]]+bi[e[t+2]]+bi[e[t+3]]+"-"+bi[e[t+4]]+bi[e[t+5]]+"-"+bi[e[t+6]]+bi[e[t+7]]+"-"+bi[e[t+8]]+bi[e[t+9]]+"-"+bi[e[t+10]]+bi[e[t+11]]+bi[e[t+12]]+bi[e[t+13]]+bi[e[t+14]]+bi[e[t+15]]).toLowerCase()}(n)};class mi extends Re{createRenderRoot(){return this}async throwErrorAfterUpdateComplete(e){throw await this.updateComplete,new Error(e)}}const fi=(e,t,i)=>{const n=new CustomEvent(t,{detail:i,bubbles:!0,composed:!0});return e.dispatchEvent(n)},vi=e=>{const t="kuc-style-1-18-0";let i=document.getElementById(t);i||(i=document.createElement("style"),i.id=t,document.head.appendChild(i)),i.appendChild(document.createTextNode(e))},ki=()=>gi();var yi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class xi extends mi{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return $e`
      ${this.ariaLive&&""!==this.ariaLive?$e`
            <div
              class="kuc-base-error-1-18-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:$e`
            <div
              class="kuc-base-error-1-18-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}yi([Fe({type:String})],xi.prototype,"ariaLive",void 0),yi([Fe({type:String})],xi.prototype,"guid",void 0),yi([Fe({type:String})],xi.prototype,"text",void 0),window.customElements.get("kuc-base-error-1-18-0")||(vi('\n  kuc-base-error-1-18-0,\n  kuc-base-error-1-18-0 *,\n  kuc-base-error-1-18-0:lang(en),\n  kuc-base-error-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-base-error-1-18-0:lang(es),\n  kuc-base-error-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-base-error-1-18-0:lang(ja),\n  kuc-base-error-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-base-error-1-18-0:lang(zh),\n  kuc-base-error-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-base-error-1-18-0:lang(zh-TW),\n  kuc-base-error-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-base-error-1-18-0 {\n    width: 100%;\n    font-size: 14px;\n    display: inline-table;\n    vertical-align: top;\n  }\n  kuc-base-error-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-base-error-1-18-0__error {\n    line-height: 1.5;\n    padding: 4px 18px;\n    box-sizing: border-box;\n    background-color: #e74c3c;\n    color: #ffffff;\n    margin: 8px 0px;\n    word-break: break-all;\n    white-space: normal;\n  }\n  .kuc-base-error-1-18-0__error[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-error-1-18-0",xi));var wi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class $i extends mi{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return $e`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-label-1-18-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&""!==this.guid?$e`
          <span class="kuc-base-label-1-18-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:$e` <span class="kuc-base-label-1-18-0__text">${this.text}</span> `}}function Ci(e){if(!e||"object"!=typeof e)return{};const t={...e};for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&void 0===t[e]&&delete t[e];return t}function Ii(e){return!(""!==e&&void 0!==e&&!/(^(\d{1,4})-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$)|(^(\d{1,4})$)|(^(\d{1,4})-(0?[1-9]|1[0-2])$)/g.test(e))}function Ei(e){return!(""!==e&&!/^(2[0-3]|[01]?[0-9]):([0-9]|[0-5][0-9])$/.test(e))}function Si(e,t,i){const n=Math.round(e),o=Rt(t),a=Rt(i);return!isNaN(n)&&n>0&&n<=o-a}function Ti(e){const[t,i,n]=e.split("-"),o=new Date(`${e}T00:00:00`),a=o.getFullYear(),s=o.getMonth(),r=o.getDate();return a===Number(t)&&s===Number(i)-1&&r===Number(n)}function Ai(e){return"string"==typeof e}function Di(e,t){return!(!/(^(\d{4})-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))$)|(^(\d{4})$)|(^(\d{4})-(0[0-9]|1[0-2])$)/g.test(e)||!/(^([01][0-9]|2[0-3])$)|(^([01][0-9]|2[0-3]):([0-5][0-9]))$|(^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9])$/.test(t))}function Li(e){return e.length<2||!e.some((t=>e.indexOf(t)!==e.lastIndexOf(t)))}function Vi(e){return!(e<.5||!Hi(e))}function Hi(e){return"number"==typeof e&&!Number.isNaN(e)}function Mi(e){return Array.isArray(e)}wi([Fe({type:Boolean})],$i.prototype,"requiredIcon",void 0),wi([Fe({type:String})],$i.prototype,"guid",void 0),wi([Fe({type:String})],$i.prototype,"text",void 0),window.customElements.get("kuc-base-label-1-18-0")||(vi('\n  kuc-base-label-1-18-0,\n  kuc-base-label-1-18-0 *,\n  kuc-base-label-1-18-0:lang(en),\n  kuc-base-label-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-base-label-1-18-0:lang(es),\n  kuc-base-label-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-base-label-1-18-0:lang(ja),\n  kuc-base-label-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n  }\n  kuc-base-label-1-18-0:lang(zh),\n  kuc-base-label-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n  }\n  kuc-base-label-1-18-0:lang(zh-TW),\n  kuc-base-label-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-base-label-1-18-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    vertical-align: top;\n  }\n  kuc-base-label-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-base-label-1-18-0__required-icon {\n    font-size: 20px;\n    vertical-align: -3px;\n    color: #e74c3c;\n    margin-left: 4px;\n    line-height: 1;\n  }\n  .kuc-base-label-1-18-0__required-icon[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-label-1-18-0",$i));var Bi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Oi;(()=>{if(Oi=window.customElements.get("kuc-attachment-1-18-0"),!Oi){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.message="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.files=[],this._isDraging=!1,this._dragEnterCounter=0,this._locale=this._getLocale(),this._isFileOrDirectoryDrag=e=>{if(!e.dataTransfer)return!1;if(void 0!==e.dataTransfer.items)for(let t=0;t<e.dataTransfer.items.length;t++)if("file"===e.dataTransfer.items[t].kind.toLowerCase())return!0;if(void 0!==e.dataTransfer.types)for(let t=0;t<e.dataTransfer.types.length;t++)if("files"===e.dataTransfer.types[t].toLowerCase())return!0;return!1},this._GUID=ki();const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){return!(e.has("files")&&!Mi(this.files)&&(this.throwErrorAfterUpdateComplete(rt),1))}willUpdate(e){return e.has("language")&&(this._locale=this._getLocale()),!0}render(){return $e`
      <div class="kuc-attachment-1-18-0__group">
        <label
          class="kuc-attachment-1-18-0__group__label"
          ?hidden="${!this.label}"
          for="${this._GUID}-input"
          @click="${this._handleClickLabel}"
        >
          <kuc-base-label-1-18-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-label-1-18-0>
        </label>
        <div
          class="kuc-attachment-1-18-0__group__files ${this.disabled?" kuc-attachment-1-18-0__group__files--disabled":""}"
          @dragenter="${this._handleDragEnter}"
          @dragover="${this._handleDragOver}"
          @dragleave="${this._handleDragLeave}"
          @drop="${this._handleDragDrop}"
        >
          <div
            class="kuc-attachment-1-18-0__group__files__droppable"
            ?hidden="${!this._isDraging}"
          >
          <div class="kuc-attachment-1-18-0__group__files__droppable__text">${this._locale.ATTACHMENT_DRAG_DROP_ZONE}</div>
          </div>
          <ul
            class="kuc-attachment-1-18-0__group__files__display-area${this._isDraging?" kuc-attachment-1-18-0__group__files__not-droppable--dragenter":""}"
          >
          ${this.files.map(((e,t)=>this._getAttachmentItemTemplate(e,t)))}
          </ul>
          <div class="kuc-attachment-1-18-0__group__files__browse-button${this._isDraging?" kuc-attachment-1-18-0__group__files__not-droppable--dragenter":""}"
          ?hidden="${this.disabled}">
            <span class="kuc-attachment-1-18-0__group__files__browse-button__text">${this._locale.ATTACHMENT_BROWSE}</span>
            <div class="kuc-attachment-1-18-0__group__files__browse-button__input-container">
              <input class="kuc-attachment-1-18-0__group__files__browse-button__input-container__input" type="file" multiple 
              .id="${this._GUID}-input"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error}"
              aria-describedby="${this._GUID}-error"
              @change="${this._handleChangeFiles}"></input>
            </div>
          </div>
          <p class="kuc-attachment-1-18-0__group__files__browse-message${this.disabled?" kuc-attachment-1-18-0__group__files__browse-message--disabled":""}"
            ?hidden="${!this.message}"
          >
            ${this.message}
          </p>
        </div>
        <kuc-base-error-1-18-0
          class="kuc-attachment-1-18-0__error"
          ?hidden="${!this.error}"
          .text="${this.error}"
          .guid="${this._GUID}"
        ></kuc-base-error-1-18-0>
      </div>
    `}_getAttachmentItemTemplate(e,t){return $e`
        <li class="kuc-attachment-1-18-0__group__files__display-area__item">
          <div
            title="${e.name||""}"
            class="kuc-attachment-1-18-0__group__files__display-area__item__name"
          >
            ${e.name||""}
          </div>
          <div
            class="kuc-attachment-1-18-0__group__files__display-area__item__remove-button__container"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-attachment-1-18-0__group__files__display-area__item__remove-button__container__button"
              aria-label="Cancel File"
              data-file-index="${t}"
              @click="${this._handleClickFileRemove}"
              tabindex="0"
            >
              ${this._getRemoveButtonIcon()}
            </button>
          </div>
          <span class="kuc-attachment-1-18-0__group__files__display-area__item__size">
            ${this._getFileSize(e.size)}
          </span>
        </li>
      `}async updated(e){await this.updateComplete,this._updateFileNameMaxWidth()}_updateFileNameMaxWidth(){const e=this._labelEl.getBoundingClientRect().width;this._fileItemsEl.forEach((t=>{t.style.maxWidth=`calc(var(--kuc-attachment-width, ${e<191?191:e}px) - 14px)`}))}_getRemoveButtonIcon(){return Ce`<svg
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
      </svg>`}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_getLocale(){switch(this._getLanguage()){case"en":default:return Qe;case"zh":return tt;case"zh-TW":return it;case"ja":return et;case"es":return nt}}_handleClickFileRemove(e){const t=e.currentTarget,i=parseInt(t.getAttribute("data-file-index"),10);if(this.files){i===this.files.length-1&&this._inputEl.focus();const e=[...this.files];this.files.splice(i,1);const t={oldFiles:e,files:this.files,type:"remove-file",fileIndex:[i]};fi(this,"change",t),this.requestUpdate(),i<=this.files.length-1&&this._fileRemoveButtons[i].focus()}}_handleClickLabel(e){e.preventDefault()}_handleDragEnter(e){if(!this.disabled&&(this._dragEnterCounter++,1===this._dragEnterCounter&&this._isFileOrDirectoryDrag(e))){e.preventDefault();const t=2,i=1;this._groupFilesEl.style.height=this._groupFilesEl.getBoundingClientRect().height+"px",this._dragTextEl.style.width=this._groupFilesEl.getBoundingClientRect().width-2*i+"px",this._dragTextEl.style.height=this._groupFilesEl.getBoundingClientRect().height-2*(i+t)+"px",this._isDraging=!0}}_handleDragOver(e){this.disabled||(e.stopPropagation(),this._isFileOrDirectoryDrag(e)&&e.preventDefault())}_handleDragDrop(e){!this.disabled&&this._isDraging&&(e.preventDefault(),this._handleDragLeave(),this._isFileDrop(e)&&this._addFiles(e))}_isFileDrop(e){var t;if(e.dataTransfer&&e.dataTransfer.items)for(let i=0;i<e.dataTransfer.items.length;i++)if("function"==typeof e.dataTransfer.items[i].webkitGetAsEntry&&(null===(t=e.dataTransfer.items[i].webkitGetAsEntry())||void 0===t?void 0:t.isDirectory))return!1;return!0}_handleDragLeave(){this.disabled||(this._dragEnterCounter--,0===this._dragEnterCounter&&(this._groupFilesEl.style.height="var(--kuc-attachment-height, auto)",this._isDraging=!1))}_handleChangeFiles(e){e.preventDefault(),e.stopPropagation(),this._addFiles(e)}_addFiles(e){if(this.files){let t=e.dataTransfer?e.dataTransfer.files:e.target.files;t=Object.keys(t).map((e=>t[e]));const i=[...this.files],n=t.map(((e,t)=>i.length+t));t.forEach((e=>this.files.push(e)));const o={oldFiles:i,files:this.files,type:"add-file",fileIndex:n};fi(this,"change",o),this.requestUpdate()}this._inputEl.value=""}_getFileSize(e){return"number"==typeof e?this._formatFileSize(e):/^[1-9]\d*$/.test(e)?this._formatFileSize(parseInt(e,10)):"NaN size"}_formatFileSize(e){return e>=Xe?Math.round(e/Xe)+" GB":e>=Ze?Math.round(e/Ze)+" MB":e>=1024?Math.round(e/1024)+" KB":Math.round(e)+" bytes"}}Bi([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Bi([Fe({type:String})],e.prototype,"error",void 0),Bi([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Bi([Fe({type:String})],e.prototype,"label",void 0),Bi([Fe({type:String,attribute:"lang",reflect:!0,converter:ri})],e.prototype,"language",void 0),Bi([Fe({type:String})],e.prototype,"message",void 0),Bi([Fe({type:Boolean})],e.prototype,"disabled",void 0),Bi([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),Bi([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),Bi([Fe({type:Array})],e.prototype,"files",void 0),Bi([We()],e.prototype,"_isDraging",void 0),Bi([Ke(".kuc-attachment-1-18-0__group__files")],e.prototype,"_groupFilesEl",void 0),Bi([Ke(".kuc-attachment-1-18-0__group__files__droppable__text")],e.prototype,"_dragTextEl",void 0),Bi([Ke(".kuc-attachment-1-18-0__group__files__browse-button__input-container__input")],e.prototype,"_inputEl",void 0),Bi([Ke(".kuc-attachment-1-18-0__group__label")],e.prototype,"_labelEl",void 0),Bi([Je(".kuc-attachment-1-18-0__group__files__display-area__item__name")],e.prototype,"_fileItemsEl",void 0),Bi([Je(".kuc-attachment-1-18-0__group__files__display-area__item__remove-button__container__button")],e.prototype,"_fileRemoveButtons",void 0),window.customElements.define("kuc-attachment-1-18-0",e),vi('\n  kuc-attachment-1-18-0,\n  kuc-attachment-1-18-0 *,\n  kuc-attachment-1-18-0:lang(en),\n  kuc-attachment-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-attachment-1-18-0:lang(ja),\n  kuc-attachment-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n        sans-serif;\n  }\n  kuc-attachment-1-18-0:lang(zh),\n  kuc-attachment-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n        Hei, "Heiti SC", sans-serif;\n  }\n  kuc-attachment-1-18-0:lang(zh-TW),\n  kuc-attachment-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n        Hei,"Heiti SC",sans-serif;\n  }\n  kuc-attachment-1-18-0:lang(es),\n  kuc-attachment-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-attachment-1-18-0 {\n    font-size: 14px;\n    display: inline-table;\n    vertical-align: top;\n    width: var(--kuc-attachment-width, 191px);\n    min-width: var(--kuc-attachment-width, 191px);\n  }\n  kuc-attachment-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-attachment-1-18-0__group {\n    width: 100%;\n    height: auto;\n    box-sizing: border-box;\n    position: relative;\n    display: block;\n  }\n  .kuc-attachment-1-18-0__group__label {\n    display: inline-block;\n    padding: 4px 0 8px 0;\n    color: #333333;\n    white-space: nowrap;\n  }\n  .kuc-attachment-1-18-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-attachment-1-18-0__group__files {\n    border: solid 1px #e3e7e8;\n    background-color: #eeeeee;\n    padding: 16px 4px;\n    display: block;\n    font-size: 14px;\n    overflow: hidden;\n    position: relative;\n    box-sizing: border-box;\n    width: var(--kuc-attachment-width, auto);\n    height: var(--kuc-attachment-height, auto);\n  }\n  .kuc-attachment-1-18-0__group__files--disabled {\n    cursor: not-allowed;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-button {\n    border: 1px solid transparent;\n    position: relative;\n    display: inline-block;\n    margin-right: 16px;\n    padding: 8px;\n    text-decoration: none;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-button[hidden]{\n    display: none;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-button:focus-within {\n    border: 1px solid #3498db;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-button:hover\n  .kuc-attachment-1-18-0__group__files__browse-button__text {\n    color: #217dbb;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-button__text {\n    color: #3498db;\n    font-size: 14px;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-button__input-container {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    display: inline-block;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-button__input-container__input {\n    cursor: pointer;\n    font-size: 999px;\n    vertical-align: middle;\n    height: 100%;\n    width: 100%;\n    line-height: 1.5;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area {\n    padding-inline-start: 0px;\n    list-style-type: disc;\n    margin-block-start: 0em;\n    margin-block-end: 0em;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area__item {\n    position: relative;\n    margin-bottom: 8px;\n    height: auto;\n    min-height: 24px;\n    border: 2px solid #f1f4f5;\n    background-color: #f1f4f5;\n    list-style: none;\n    display: flex;\n    align-items: center;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area__item__name {\n    display: inline-block;\n    padding: 3px calc(4.6em + 4px) 3px 26px;\n    width: 100%;\n    max-width: 177px;\n    box-sizing: border-box;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    word-wrap: normal;\n    font-size: var(--kuc-attachment-item-font-size, 14px);\n    line-height: 1.2;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area__item__remove-button__container {\n    display: inline-block;\n    position: absolute;\n    top: calc(50% - 12px);\n    left: 0;\n    width: 24px;\n    height: 24px;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area__item__remove-button__container[hidden] {\n    display: none;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area__item__remove-button__container__button {\n    background-color: #f2f4f6;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid transparent;\n    padding: 0px;\n    width:100%;\n    height:100%;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area__item__remove-button__container__button:hover {\n    background: #d8e1e6;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area__item__remove-button__container__button:focus-within {\n    border: 1px solid #3498db;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area__item__remove-button__container__button:focus {\n    outline: none;\n  }\n  .kuc-attachment-1-18-0__group__files__display-area__item__size {\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    color: #888888;\n    padding: 0 3px 0 0;\n    max-width: 4.6em;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    word-wrap: normal;\n    font-size: var(--kuc-attachment-item-font-size, 14px);\n    line-height: 1.2;\n  }\n  .kuc-attachment-1-18-0__group__files__droppable {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin: auto 0;\n  }\n  .kuc-attachment-1-18-0__group__files__droppable[hidden] {\n    display: none;\n  }\n  .kuc-attachment-1-18-0__group__files__droppable__text {\n    background-color: #e2f2fe;\n    border: dashed 2px #3498db;\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    color: #3498db;\n    font-size: 14px;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-message {\n    display: inline-block;\n    color: var(--kuc-attachment-message-color, #888888);\n    font-size: var(--kuc-attachment-message-font-size, 14px);\n    margin: 3px 0 0;\n    word-break: break-all;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-message--disabled {\n    color: #888888;\n  }\n  .kuc-attachment-1-18-0__group__files__browse-message[hidden] {\n    display: none;\n  }\n  .kuc-attachment-1-18-0__group__files__not-droppable--dragenter {\n    visibility: hidden;\n  }\n'),Oi=e}})();var Ni=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ui;(()=>{if(Ui=window.customElements.get("kuc-button-1-18-0"),!Ui){class e extends mi{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.content="",this.disabled=!1,this.visible=!0;const t=Ci(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),fi(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type||"alert"===this.type?this.type:"normal"}render(){return $e`
        <button
          type="button"
          class="kuc-button-1-18-0__button kuc-button-1-18-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.content?li(this.content):this.text}
        </button>
      `}}Ni([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Ni([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Ni([Fe({type:String})],e.prototype,"text",void 0),Ni([Fe({type:String})],e.prototype,"type",void 0),Ni([Fe()],e.prototype,"content",void 0),Ni([Fe({type:Boolean})],e.prototype,"disabled",void 0),Ni([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),window.customElements.define("kuc-button-1-18-0",e),vi('\n  kuc-button-1-18-0,\n  kuc-button-1-18-0 *,\n  kuc-button-1-18-0:lang(en),\n  kuc-button-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-button-1-18-0:lang(es),\n  kuc-button-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-button-1-18-0:lang(ja),\n  kuc-button-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;\n  }\n  kuc-button-1-18-0:lang(zh),\n  kuc-button-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,\n      "Heiti SC", sans-serif;\n  }\n  kuc-button-1-18-0:lang(zh-TW),\n  kuc-button-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-button-1-18-0 {\n    display: inline-block;\n    vertical-align: top;\n  }\n  kuc-button-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-button-1-18-0__button {\n    display: grid;\n    align-items: center;\n    align-content: center;\n    font-size: var(--kuc-button-font-size, 16px);\n    width: var(--kuc-button-width, "auto");\n    height: var(--kuc-button-height, 48px);\n    min-width: var(--kuc-button-width, 163px);\n    padding: 0px 16px;\n    user-select: none;\n    white-space: nowrap;\n  }\n  .kuc-button-1-18-0__button--normal {\n    background-color: var(--kuc-button-background-color, #f7f9fa);\n    color: var(--kuc-button-text-color, #3498db);\n    border: 1px solid #e3e7e8;\n  }\n  .kuc-button-1-18-0__button--normal:hover,\n  .kuc-button-1-18-0__button--normal:focus-visible,\n  .kuc-button-1-18-0__button--normal:active {\n    cursor: pointer;\n  }\n  .kuc-button-1-18-0__button--normal:hover {\n    background-color: var(--kuc-button-background-color-hover, #c8d6dd);\n  }\n  .kuc-button-1-18-0__button--normal:focus-visible {\n    background-color: var(--kuc-button-background-color-focus, #c8d6dd);\n  }\n  .kuc-button-1-18-0__button--normal:active {\n    background-color: var(--kuc-button-background-color-active, #c8d6dd);\n  }\n  .kuc-button-1-18-0__button--submit {\n    background-color: var(--kuc-button-background-color, #3498db);\n    color: var(--kuc-button-text-color, #ffffff);\n    border: 1px solid #e3e7e8;\n  }\n  .kuc-button-1-18-0__button--submit:hover,\n  .kuc-button-1-18-0__button--submit:focus-visible,\n  .kuc-button-1-18-0__button--submit:active {\n    cursor: pointer;\n  }\n  .kuc-button-1-18-0__button--submit:hover {\n    background-color: var(--kuc-button-background-color-hover, #1d6fa5);\n  }\n  .kuc-button-1-18-0__button--submit:focus-visible {\n    background-color: var(--kuc-button-background-color-focus, #1d6fa5);\n  }\n  .kuc-button-1-18-0__button--submit:active {\n    background-color: var(--kuc-button-background-color-active, #1d6fa5);\n  }\n  .kuc-button-1-18-0__button--alert {\n    background-color: var(--kuc-button-background-color, #e74c3c);\n    color: var(--kuc-button-text-color, #ffffff);\n    border: 1px solid #e3e7e8;\n  }\n  .kuc-button-1-18-0__button--alert:hover,\n  .kuc-button-1-18-0__button--alert:focus-visible,\n  .kuc-button-1-18-0__button--alert:active {\n    cursor: pointer;\n  }\n  .kuc-button-1-18-0__button--alert:hover {\n    background-color: var(--kuc-button-background-color-hover, #bf2718);\n  }\n  .kuc-button-1-18-0__button--alert:focus-visible {\n    background-color: var(--kuc-button-background-color-focus, #bf2718);\n  }\n  .kuc-button-1-18-0__button--alert:active {\n    background-color: var(--kuc-button-background-color-active, #bf2718);\n  }\n  .kuc-button-1-18-0__button:disabled {\n    background-color: #d4d7d7;\n    border: 1px solid #e3e7e8;\n    color: #888888;\n    cursor: not-allowed;\n  }\n  .kuc-button-1-18-0__button--normal:focus-visible,\n  .kuc-button-1-18-0__button--submit:focus-visible,\n  .kuc-button-1-18-0__button--alert:focus-visible {\n    outline: 1px solid #3498db;\n  }\n'),Ui=e}})();var Pi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ri;(()=>{if(Ri=window.customElements.get("kuc-checkbox-1-18-0"),!Ri){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=ki();const t=Ci(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Mi(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}shouldUpdate(e){return e.has("items")&&!Mi(this.items)?(this.throwErrorAfterUpdateComplete(ot),!1):e.has("value")&&!Mi(this.value)?(this.throwErrorAfterUpdateComplete(lt),!1):!(e.has("selectedIndex")&&!Mi(this.selectedIndex)&&(this.throwErrorAfterUpdateComplete(ut),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",n=t.value,o=this.value?[...this.value]:this.value,a=this._getNewValueMapping(n,i),s=this.items.map((e=>e.value)),r=Object.values(a).filter((e=>s.indexOf(e)>-1));if(r===o)return;const l=Object.keys(a).map((e=>parseInt(e,10)));this.value=r,this.selectedIndex=l,fi(this,"change",{oldValue:o,value:r})}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getCheckboxIconSvgTemplate(e,t){return Ce`
    <svg
      class="kuc-checkbox-1-18-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="1"
        fill="white"
        stroke="${this._getSVGStrokeValue(e,t)}"
        stroke-width="2"/>
      ${t?Ce`<path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z"
            fill="${e?"#d8d8d8":"#3498db"}"/>`:""}
    </svg>
  `}_getSVGStrokeValue(e,t){return e?"#d8d8d8":t?"#3498db":"#d8d8d8"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t),n=e.disabled||this.disabled;return $e`
        <div
          class="kuc-checkbox-1-18-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="checkbox"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-18-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${void 0!==e.value?e.value:""}"
            ?disabled="${n}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            for="${this._GUID}-item-${t}"
            class="kuc-checkbox-1-18-0__group__select-menu__item__label"
            >${this._getCheckboxIconSvgTemplate(n,i)}${void 0===e.label?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return $e`
        <div
          class="kuc-checkbox-1-18-0__group"
          role="group"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-checkbox-1-18-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </div>
          <div
            class="kuc-checkbox-1-18-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-error-1-18-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-18-0>
        </div>
      `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}}Pi([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Pi([Fe({type:String})],e.prototype,"error",void 0),Pi([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Pi([Fe({type:String})],e.prototype,"itemLayout",void 0),Pi([Fe({type:String})],e.prototype,"label",void 0),Pi([Fe({type:Boolean})],e.prototype,"borderVisible",void 0),Pi([Fe({type:Boolean})],e.prototype,"disabled",void 0),Pi([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),Pi([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),Pi([Fe({type:Array})],e.prototype,"items",void 0),Pi([Fe({type:Array})],e.prototype,"selectedIndex",void 0),Pi([Fe({type:Array})],e.prototype,"value",void 0),Pi([Je(".kuc-checkbox-1-18-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),Pi([We()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-checkbox-1-18-0",e),vi('\n  kuc-checkbox-1-18-0,\n  kuc-checkbox-1-18-0 *,\n  kuc-checkbox-1-18-0:lang(en),\n  kuc-checkbox-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-checkbox-1-18-0:lang(es),\n  kuc-checkbox-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-checkbox-1-18-0:lang(ja),\n  kuc-checkbox-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-checkbox-1-18-0:lang(zh),\n  kuc-checkbox-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-checkbox-1-18-0:lang(zh-TW),\n  kuc-checkbox-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-checkbox-1-18-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    vertical-align: top;\n    width: var(--kuc-checkbox-menu-width, 239px);\n    min-width: var(--kuc-checkbox-menu-width, 239px);\n    line-height: 1.5;\n  }\n  kuc-checkbox-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-checkbox-1-18-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-checkbox-1-18-0__group__select-menu {\n    white-space: nowrap;\n    width: var(--kuc-checkbox-menu-width, auto);\n    height: var(--kuc-checkbox-menu-height, auto);\n    color: var(--kuc-checkbox-menu-color, #333333);\n    font-size: var(--kuc-checkbox-menu-font-size, 14px);\n    display: flex;\n    align-items: flex-start;\n  }\n  .kuc-checkbox-1-18-0__group__select-menu[itemLayout="vertical"] {\n    display: block;\n  }\n  .kuc-checkbox-1-18-0__group__label {\n    display: inline-block;\n    padding: 4px 0 8px 0;\n    white-space: nowrap;\n  }\n  .kuc-checkbox-1-18-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-checkbox-1-18-0__group__select-menu[borderVisible] {\n    border-color: #e3e7e8;\n    border-width: 1px;\n    border-style: solid;\n    padding: 4px 0 0 4px;\n  }\n  .kuc-checkbox-1-18-0__group__select-menu__item {\n    margin-bottom: 4px;\n    margin-right: 16px;\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    display: flex;\n    align-items: center;\n  }\n  .kuc-checkbox-1-18-0__group__select-menu__item[focused] {\n    border: 1px solid #3498db;\n  }\n  .kuc-checkbox-1-18-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .kuc-checkbox-1-18-0__group__select-menu__item__input:hover\n    + .kuc-checkbox-1-18-0__group__select-menu__item__label {\n    color: var(--kuc-checkbox-menu-color-hover, #666666);\n  }\n  .kuc-checkbox-1-18-0__group__select-menu__item__label__icon {\n    position: absolute;\n    left: -30px;\n    box-sizing: border-box;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n  }\n  .kuc-checkbox-1-18-0__group__select-menu__item__input[disabled]\n    + .kuc-checkbox-1-18-0__group__select-menu__item__label {\n    color: #888888;\n    cursor: not-allowed;\n  }\n  .kuc-checkbox-1-18-0__group__select-menu__item__label {\n    cursor: pointer;\n    position: relative;\n    margin-left: 32px;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n    white-space: nowrap;\n    min-height: 24px;\n    line-height: 1.2;\n  }\n  '),Ri=e}})();var zi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ji;(()=>{if(ji=window.customElements.get("kuc-combobox-1-18-0"),!ji){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._searchText="",this._DISABLED_CLASS="kuc-combobox-1-18-0__group__select-menu__item--disabled",this._query="",this._matchingItems=[],this._GUID=ki();const t=Ci(e);this._handleClickDocument=this._handleClickDocument.bind(this),Object.assign(this,t)}shouldUpdate(e){if(e.has("items")){if(!Mi(this.items))return this.throwErrorAfterUpdateComplete(ot),!1;if(!Li(this.items.map((e=>e.value))))return this.throwErrorAfterUpdateComplete(at),!1}return!(e.has("value")&&!Ai(this.value)&&(this.throwErrorAfterUpdateComplete(dt),1))}willUpdate(e){e.has("value")&&(this._searchText=this._getSelectedLabel()||"")}render(){return $e`
        <div class="kuc-combobox-1-18-0__group">
          <div
            class="kuc-combobox-1-18-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </div>
          <div class="kuc-combobox-1-18-0__group__toggle">
            <input
              class="kuc-combobox-1-18-0__group__toggle__input"
              role="combobox"
              type="text"
              .value="${this._searchText}"
              aria-haspopup="listbox"
              aria-autocomplete="list"
              aria-labelledby="${this._GUID}-label"
              aria-controls="${this._GUID}-listbox"
              aria-describedby="${this._GUID}-error"
              aria-expanded="${this._selectorVisible}"
              aria-required="${this.requiredIcon}"
              placeholder="${this.placeholder}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeComboboxInput}"
              @input="${this._handleInputComboboxInput}"
              @keydown="${this._handleKeyDownComboboxInput}"
              @click="${this._handleClickComboboxInput}"
              @blur="${this._handleBlurComboboxInput}"
            />
            <div class="kuc-combobox-1-18-0__group__toggle__icon">
              <button
                class="kuc-combobox-1-18-0__group__toggle__icon__button"
                tabindex="-1"
                type="button"
                aria-labelledby="${this._GUID}-label"
                aria-controls="${this._GUID}-listbox"
                aria-expanded="${this._selectorVisible}"
                ?disabled="${this.disabled}"
                @click="${this._handleClickToggleButton}"
              >
                ${this._getToggleIconSvgTemplate()}
              </button>
            </div>
          </div>
          <ul
            class="kuc-combobox-1-18-0__group__select-menu"
            role="listbox"
            id="${this._GUID}-listbox"
            aria-labelledby="${this._GUID}-label"
            aria-hidden="${!this._selectorVisible}"
            ?hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this._matchingItems.map(((e,t)=>this._getItemTemplate(e,t)))}
          </ul>
          <kuc-base-error-1-18-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-18-0>
        </div>
      `}firstUpdated(){window.addEventListener("resize",(()=>{this._actionResizeScrollWindow()})),window.addEventListener("scroll",(()=>{this._actionResizeScrollWindow()}))}async updated(e){super.updated(e),await this.updateComplete,this._selectorVisible?(this._setMenuPosition(),this._scrollToView(),null===this._selectedItemEl||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)?this._actionClearAllHighlightMenuItem():this._setHighlightAndActiveDescendantMenu(this._selectedItemEl),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument,!0)}),1)):setTimeout((()=>{document.removeEventListener("click",this._handleClickDocument,!0)}),1)}_getToggleIconSvgTemplate(){return Ce`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}_getItemTemplate(e,t){const i=this._isCheckedItem(e),n=e.disabled,o=void 0===e.label?e.value:e.label;let a=i?$e`<b>${o}</b>`:$e`${o}`;const s=this._query.trim().toLowerCase();if(s&&o){const e=o.toLowerCase().indexOf(s),t=e+s.length;a=$e`
          ${o.slice(0,e)}<b>${o.slice(e,t)}</b>${o.slice(t)}
        `}return $e`
        <li
          class="kuc-combobox-1-18-0__group__select-menu__item ${n?this._DISABLED_CLASS:""}"
          role="option"
          aria-selected="${i?"true":"false"}"
          value="${void 0!==e.value?e.value:""}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${n?null:this._handleMouseDownComboboxItem}"
          @mouseover="${n?null:this._handleMouseOverComboboxItem}"
        >
          ${this._getComboboxIconSvgTemplate(i,n)}
          ${a}
        </li>
      `}_getComboboxIconSvgTemplate(e,t){return Ce`
      ${e?Ce`<svg
          class="kuc-combobox-1-18-0__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${t?"#888888":"#3498db"}"/>
        </svg>`:""}`}_handleMouseDownComboboxItem(e){const t=this._getItemElementWhenMouseOverDown(e.target).getAttribute("value");this._actionUpdateValue(t)}_handleMouseOverComboboxItem(e){const t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleClickToggleButton(e){e.preventDefault(),this._inputEl.focus(),this._inputEl.select(),this._resetToggleInputValue(),this._actionToggleMenu()}_handleInputComboboxInput(e){e.stopPropagation(),this._searchText=this._inputEl.value,this._query=this._inputEl.value,this._setMatchingItems()}_handleClickComboboxInput(e){e.stopPropagation(),this._inputEl.select(),this._setMatchingItems()}_handleChangeComboboxInput(e){e.stopPropagation()}_handleBlurComboboxInput(e){this._resetToggleInputValue()}_handleClickDocument(e){(e.target===this._toggleEl||this._toggleEl.contains(e.target))&&(this._inputEl.focus(),e.stopPropagation()),Array.from(this._disabledItemsEl).some((t=>t===e.target||t.contains(e.target)))||this._actionHideMenu()}_handleKeyDownComboboxInput(e){switch(e.key){case"Up":case"ArrowUp":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case"Tab":this._selectorVisible&&this._actionHideMenu();break;case"Down":case"ArrowDown":if(e.preventDefault(),!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case"Enter":{e.preventDefault();const t=this._highlightItemEl;if(null===t)break;const i=t.getAttribute("value");this._actionUpdateValue(i),this._actionHideMenu();break}case"Escape":e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._resetToggleInputValue(),this._actionHideMenu();break;case"Home":this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case"End":this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_getSelectedLabel(){const e=this.items.filter(((e,t)=>this._isCheckedItem(e)));return 0===e.length?"":void 0===e[0].label?e[0].value:e[0].label}_actionShowMenu(){""===this._query.trim()&&(this._matchingItems=this.items),0!==this.items.length&&0!==this._matchingItems.length&&(this._inputEl.focus(),this._selectorVisible=!0)}_actionHideMenu(){this._selectorVisible=!1,this._actionRemoveActiveDescendant()}_actionToggleMenu(){this._selectorVisible?this._actionHideMenu():this._actionShowMenu()}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let i=0;i<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let i=0;i<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.previousElementSibling),null===e&&(e=this._lastItemEl);let t=!1;for(let i=0;i<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.previousElementSibling,null===e&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.nextElementSibling),null===e&&(e=this._firstItemEl);let t=!1;for(let i=0;i<this._matchingItems.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.nextElementSibling,null===e&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach((e=>{e.classList.remove("kuc-combobox-1-18-0__group__select-menu__highlight")})),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add("kuc-combobox-1-18-0__group__select-menu__highlight")}_actionUpdateValue(e){if(this.value===e)return void this._resetToggleInputValue();const t={oldValue:this.value,value:e};this.value=e,this._query="",fi(this,"change",t)}_actionSetActiveDescendant(e){void 0!==e&&null!==this._inputEl&&this._inputEl.setAttribute("aria-activedescendant",e)}_actionRemoveActiveDescendant(){this._inputEl.removeAttribute("aria-activedescendant")}_setMatchingItems(){const e=this.items.filter((e=>{const t=new RegExp(this._query.trim().replace(/[.*+?^=!:${}()|[\]/\\]/g,"\\$&"),"gi");return e.label?t.test(e.label):!!e.value&&t.test(e.value)}));0===e.length?(this._matchingItems=[],this._actionHideMenu()):(this._matchingItems=e,this._actionShowMenu())}_getScrollbarWidthHeight(){const e=document.createElement("div");e.style.cssText="overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{scrollbarWidth:t,scrollbarHeight:i}}_getDistanceToggleButton(){const{scrollbarWidth:e,scrollbarHeight:t}=this._getScrollbarWidthHeight(),i=document.body.scrollHeight>window.innerHeight,n=document.body.scrollWidth>window.innerWidth;return{toTop:this._toggleEl.getBoundingClientRect().top,toBottom:window.innerHeight-this._toggleEl.getBoundingClientRect().bottom-(n?t:0),toLeft:this._toggleEl.getBoundingClientRect().left,toRight:window.innerWidth-this._toggleEl.getBoundingClientRect().left-(i?e:0)}}_setMenuPositionAboveOrBelow(){this._menuEl.style.height="auto",this._menuEl.style.bottom="auto",this._menuEl.style.overflowY="";const e=this._menuEl.getBoundingClientRect().height,t=this._getDistanceToggleButton();if(!(t.toBottom>=e))if(t.toBottom<t.toTop){const i=this._errorEl.offsetHeight?this._errorEl.offsetHeight+16:0;if(this._menuEl.style.bottom=`${this._toggleEl.offsetHeight+i}px`,t.toTop>=e)return;this._menuEl.style.height=`${t.toTop}px`,this._menuEl.style.overflowY="scroll"}else this._menuEl.style.height=`${t.toBottom}px`,this._menuEl.style.overflowY="scroll"}_setMenuPositionLeftOrRight(){this._menuEl.style.right="auto";const e=this._menuEl.getBoundingClientRect().width,t=this._getDistanceToggleButton();if(t.toRight>=e||t.toLeft<e||t.toRight<0)return;const i=this._toggleEl.offsetWidth-t.toRight;this._menuEl.style.right=i>0?`${i}px`:"0px"}_setMenuPosition(){this._setMenuPositionAboveOrBelow(),this._setMenuPositionLeftOrRight()}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;const e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout((()=>{this._timeoutID=null,this._setMenuPosition()}),50))}_isCheckedItem(e){return e.value===this.value}_resetToggleInputValue(){const e=this._getSelectedLabel();this._searchText!==e&&(this._searchText=e||""),this._query=""}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(" ").includes("kuc-combobox-1-18-0__group__select-menu__item")?e:this._getItemElementWhenMouseOverDown(e.parentElement)}}zi([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),zi([Fe({type:String})],e.prototype,"error",void 0),zi([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),zi([Fe({type:String})],e.prototype,"label",void 0),zi([Fe({type:String})],e.prototype,"placeholder",void 0),zi([Fe({type:String})],e.prototype,"value",void 0),zi([Fe({type:Boolean})],e.prototype,"disabled",void 0),zi([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),zi([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),zi([Fe({type:Array})],e.prototype,"items",void 0),zi([We()],e.prototype,"_selectorVisible",void 0),zi([Ke(".kuc-combobox-1-18-0__group__toggle")],e.prototype,"_toggleEl",void 0),zi([Ke(".kuc-combobox-1-18-0__group__toggle__input")],e.prototype,"_inputEl",void 0),zi([Ke(".kuc-combobox-1-18-0__group__select-menu")],e.prototype,"_menuEl",void 0),zi([Je(".kuc-combobox-1-18-0__group__select-menu__item")],e.prototype,"_itemsEl",void 0),zi([Ke(".kuc-combobox-1-18-0__group__select-menu__item")],e.prototype,"_firstItemEl",void 0),zi([Ke(".kuc-combobox-1-18-0__group__select-menu__item:last-child")],e.prototype,"_lastItemEl",void 0),zi([Ke(".kuc-combobox-1-18-0__group__select-menu__item[aria-selected=true]")],e.prototype,"_selectedItemEl",void 0),zi([Ke(".kuc-combobox-1-18-0__group__select-menu__highlight")],e.prototype,"_highlightItemEl",void 0),zi([Ke(".kuc-base-error-1-18-0__error")],e.prototype,"_errorEl",void 0),zi([Je(".kuc-combobox-1-18-0__group__select-menu__item--disabled")],e.prototype,"_disabledItemsEl",void 0),zi([We()],e.prototype,"_searchText",void 0),window.customElements.define("kuc-combobox-1-18-0",e),vi('\n  kuc-combobox-1-18-0,\n  kuc-combobox-1-18-0 *,\n  kuc-combobox-1-18-0:lang(en),\n  kuc-combobox-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-combobox-1-18-0:lang(es),\n  kuc-combobox-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-combobox-1-18-0:lang(ja),\n  kuc-combobox-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-combobox-1-18-0:lang(zh),\n  kuc-combobox-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-combobox-1-18-0:lang(zh-TW),\n  kuc-combobox-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti, Hei, "Heiti SC", sans-serif;\n  }\n  kuc-combobox-1-18-0 {\n    position: relative;\n    display: inline-table;\n    font-size: 14px;\n    color: #333333;\n    width: var(--kuc-combobox-toggle-width, 180px);\n    vertical-align: top;\n    line-height: 1.5;\n  }\n  kuc-combobox-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-combobox-1-18-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    margin: 0px;\n    position: relative;\n  }\n  .kuc-combobox-1-18-0__group__label {\n    padding: 4px 0px 8px 0px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .kuc-combobox-1-18-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-combobox-1-18-0__group__toggle {\n    position: relative;\n    display: flex;\n    width: var(--kuc-combobox-toggle-width);\n  }\n  input[type=text].kuc-combobox-1-18-0__group__toggle__input {\n    width: 100%;\n    height: var(--kuc-combobox-toggle-height, 40px);\n    box-sizing: border-box;\n    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n    border: 1px solid #e3e7e8;\n    background-color: #ffffff;\n    color: var(--kuc-combobox-toggle-color, #000000);\n    font-size: var(--kuc-combobox-font-size, 14px);\n    line-height: 1.5;\n    padding: 0 40px 0 8px;\n    margin: 0;\n  }\n  input[type=text].kuc-combobox-1-18-0__group__toggle__input:focus {\n    outline: none;\n    border: 1px solid #3498db;\n    background-color: #e2f2fe;\n    box-shadow: none;\n  }\n  input[type=text].kuc-combobox-1-18-0__group__toggle__input:disabled,\n  .kuc-combobox-1-18-0__group__toggle__icon__button:disabled {\n    background-color: #d4d7d7;\n    box-shadow: none;\n    cursor: not-allowed;\n    color: #888888;\n  }\n  .kuc-combobox-1-18-0__group__toggle__icon {\n    position: absolute;\n    right: 0px;\n    top: 2px;\n    border-left: 1px solid #e3e7e8;\n  }\n  .kuc-combobox-1-18-0__group__toggle__icon__button {\n    width: 40px;\n    height: calc(var(--kuc-combobox-toggle-height, 40px) - 4px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    border-style: none;\n    background-color: transparent;\n    cursor: pointer;\n  }\n  .kuc-combobox-1-18-0__group__select-menu {\n    min-width: 280px;\n    color: var(--kuc-combobox-menu-color);\n    padding: 8px 0;\n    border: 1px solid #e3e7e8;\n    box-sizing: border-box;\n    background-color: #ffffff;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n    position: absolute;\n    z-index: 2000;\n    margin: 0;\n    list-style: none;\n  }\n  .kuc-combobox-1-18-0__group__select-menu[hidden] {\n    display: none;\n  }\n  .kuc-combobox-1-18-0__group__select-menu__item {\n    font-size: var(--kuc-combobox-font-size, 14px);\n    padding: 8px 16px 8px 24px;\n    line-height: 1;\n    position: relative;\n    cursor: pointer;\n    white-space: nowrap;\n  }\n  .kuc-combobox-1-18-0__group__select-menu__item:lang(en) b,\n  .kuc-combobox-1-18-0__group__select-menu__item:lang(ja) b,\n  .kuc-combobox-1-18-0__group__select-menu__item:lang(zh) b,\n  .kuc-combobox-1-18-0__group__select-menu__item:lang(zh-TW) b{\n    font-weight: 700;\n  }\n  .kuc-combobox-1-18-0__group__select-menu__item__icon {\n    position: absolute;\n    top: 50%;\n    left: 6px;\n    margin-top: -5px;\n  }\n  .kuc-combobox-1-18-0__group__select-menu__item[aria-selected="true"] {\n    color: var(--kuc-combobox-menu-color-selected, #3498db);\n  }\n  .kuc-combobox-1-18-0__group__select-menu__item--disabled,\n  .kuc-combobox-1-18-0__group__select-menu__item--disabled[aria-selected="true"] {\n    background-color: #d4d7d7;\n    cursor: not-allowed;\n    color: #888888;\n  }\n  .kuc-combobox-1-18-0__group__select-menu__highlight[role="option"] {\n    background-color: #e2f2fe;\n  }\n'),ji=e}})();var Gi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Fi extends mi{constructor(){super(),this.year=(new Date).getFullYear(),this.postfix="",this._listBoxVisible=!1,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){this._listBoxItems=this._getYearOptions().map((e=>({value:`${e}`,label:`${e}${this.postfix}`}))),super.update(e)}render(){return $e`
      <button
        class="kuc-base-datetime-header-year-1-18-0__toggle"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownYearToggle}"
        @keydown="${this._handleKeyDownYearToggle}"
      >
        <span class="kuc-base-datetime-header-year-1-18-0__toggle__label"
          >${this.year}${this.postfix}</span
        >
        <span class="kuc-base-datetime-header-year-1-18-0__toggle__icon"
          >${ni()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(e)}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleScrollDocument(){const e=ai(this);e.inputToBottom>=e.inputToTop?oi(this,"bottom"):oi(this,"top")}_getListBoxTemplate(){return this._listBoxVisible?$e`
          <kuc-base-datetime-listbox-1-18-0
            .items="${this._listBoxItems||[]}"
            .value="${this.year.toString()}"
            class="kuc-base-datetime-header-year-1-18-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-18-0>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleClickDropdownYearToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),fi(this,"kuc:year-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleKeyDownYearToggle(e){"Tab"!==e.key&&(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.year=Number(e.detail.value);const t={value:`${this.year}`};fi(this,"kuc:year-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getYearOptions(){const e=[];Number.isInteger(this.year)||(this.year=(new Date).getFullYear());let t=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(;t<=i;t++)e.push(t);return e}}Gi([Fe({type:Number})],Fi.prototype,"year",void 0),Gi([Fe({type:String})],Fi.prototype,"postfix",void 0),Gi([We()],Fi.prototype,"_listBoxVisible",void 0),Gi([Ke(".kuc-base-datetime-header-year-1-18-0__toggle")],Fi.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-year-1-18-0")||(vi("\n.kuc-base-datetime-header-year-1-18-0__toggle {\n  position: relative;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 24px 0 8px;\n  line-height: 30px;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.kuc-base-datetime-header-year-1-18-0__toggle__icon {\n  position: absolute;\n  flex: none;\n  width: 24px;\n  height: 32px;\n}\n.kuc-base-datetime-header-year-1-18-0__toggle__label {\n  font-size: 13px;\n  color: #333333;\n}\n.kuc-base-datetime-header-year-1-18-0__toggle:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n"),window.customElements.define("kuc-base-datetime-header-year-1-18-0",Fi));var Wi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class qi extends mi{constructor(){super(),this.language="auto",this.month=1,this._listBoxVisible=!1,this._locale=ti("en"),this._monthLabel="",this._maxHeight=1e3,this._handleScrollDocument=this._handleScrollDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("scroll",this._handleScrollDocument)}),1)}disconnectedCallback(){document.removeEventListener("scroll",this._handleScrollDocument),super.disconnectedCallback()}update(e){e.has("language")&&(this._locale=ti(this.language),this._listBoxItems=this._getListBoxItems()),e.has("month")&&(this._monthLabel=this._getMonthLabel()),super.update(e)}render(){return $e`
      <button
        class="kuc-base-datetime-header-month-1-18-0__toggle"
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        tabindex="${this._listBoxVisible?"-1":"0"}"
        @mouseup="${this._handleMouseUpDropdownToggle}"
        @mousedown="${this._handleMouseDownDropdownToggle}"
        @click="${this._handleClickDropdownMonthToggle}"
        @keydown="${this._handleKeyDownMonthToggle}"
      >
        <span class="kuc-base-datetime-header-month-1-18-0__toggle__label"
          >${this._monthLabel}</span
        >
        <span class="kuc-base-datetime-header-month-1-18-0__toggle__icon"
          >${ni()}
        </span>
      </button>
      ${this._getListBoxTemplate()}
    `}async updated(e){await this.updateComplete,e.has("_listBoxVisible")&&this._listBoxVisible&&this._handleScrollDocument(),super.update(e)}_handleScrollDocument(){const e=ai(this);e.inputToBottom>=e.inputToTop?oi(this,"bottom"):oi(this,"top")}closeListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_getListBoxTemplate(){return this._listBoxVisible?$e`
          <kuc-base-datetime-listbox-1-18-0
            .items="${this._listBoxItems||[]}"
            .value="${this.month.toString()}"
            .maxHeight="${this._maxHeight}"
            class="kuc-base-datetime-header-month-1-18-0__listbox"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleFocusOutListBox}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
            aria-hidden="${!this._listBoxVisible}"
          >
          </kuc-base-datetime-listbox-1-18-0>
        `:""}_handleFocusOutListBox(){this._listBoxVisible=!1,this._toggleEl.focus()}_handleListBoxEscape(){this._handleFocusOutListBox()}_handleClickDropdownMonthToggle(e){e.stopPropagation(),e.preventDefault(),this._listBoxVisible?this.closeListBox():this._openListBox(),fi(this,"kuc:month-dropdown-click",{value:this._listBoxVisible.toString(),oldValue:(!this._listBoxVisible).toString()})}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleKeyDownMonthToggle(e){this._handleTabKey(e.key)||(e.preventDefault(),this._openListBoxByKey(e.key))}_openListBoxByKey(e){[" ","Up","ArrowUp","Down","ArrowDown","Enter"].indexOf(e)>-1&&this._openListBox()}_handleTabKey(e){return"Tab"===e}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this.closeListBox(),!e.detail.value)return;this.month=Number(e.detail.value);const t={value:`${this.month}`};fi(this,"kuc:month-dropdown-change",t)}_openListBox(){this._listBoxVisible=!0}_getListBoxItems(){return this._locale.MONTH_SELECT.map(((e,t)=>({value:`${t+1}`,label:`${e}`})))}_getMonthLabel(){const e=this._locale.MONTH_SELECT.filter(((e,t)=>this.month===t+1));return e.length>0?e[0]:"JANUARY"}}Wi([Fe({type:String,attribute:"lang",reflect:!0})],qi.prototype,"language",void 0),Wi([Fe({type:Number})],qi.prototype,"month",void 0),Wi([We()],qi.prototype,"_listBoxVisible",void 0),Wi([Ke(".kuc-base-datetime-header-month-1-18-0__toggle")],qi.prototype,"_toggleEl",void 0),window.customElements.get("kuc-base-datetime-header-month-1-18-0")||(vi("\n.kuc-base-datetime-header-month-1-18-0__toggle {\n  position: relative;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 24px 0 8px;\n  line-height: 30px;\n  overflow: hidden;\n  background-color: white;\n  border: 1px solid transparent;\n  cursor: pointer;\n}\n.kuc-base-datetime-header-month-1-18-0__toggle__icon {\n  position: absolute;\n  flex: none;\n  width: 24px;\n  height: 32px;\n}\n.kuc-base-datetime-header-month-1-18-0__toggle__label {\n  font-size: 13px;\n  color: #333333;\n}\n.kuc-base-datetime-header-month-1-18-0__toggle:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n"),window.customElements.define("kuc-base-datetime-header-month-1-18-0",qi));var Ki=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Yi extends mi{constructor(){super(...arguments),this.language="en",this.month=1,this.year=(new Date).getFullYear(),this._locale=ti("en")}update(e){e.has("language")&&(this._locale=ti(this.language)),super.update(e)}render(){return $e`
      <div class="kuc-base-datetime-calendar-header-1-18-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-18-0__group__button kuc-base-datetime-calendar-header-1-18-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
          @keydown="${this._handleKeyDownCalendarPrevMonthBtn}"
        >
          ${Ce`
    <svg
      class="kuc-base-datetime-calendar-header-1-18-0__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.06077 7L8.53044 1.53033L7.46978 0.469666L0.939453 7L7.46978 13.5303L8.53044 12.4697L3.06077 7Z"
        fill="#888888"
      />
    </svg>`}
        </button>
        <div class="kuc-base-datetime-calendar-header-1-18-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-datetime-calendar-header-1-18-0__group__button kuc-base-datetime-calendar-header-1-18-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${Ce`
    <svg
      class="kuc-base-datetime-calendar-header-1-18-0__group__button-icon"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.93923 7L0.469557 1.53033L1.53022 0.469666L8.06055 7L1.53022 13.5303L0.469557 12.4697L5.93923 7Z"
        fill="#888888"
      />
    </svg>`}
        </button>
      </div>
    `}_getYearTemplate(){return $e`
      <kuc-base-datetime-header-year-1-18-0
        class="kuc-base-datetime-calendar-header-1-18-0__year"
        .postfix="${this._locale.YEAR_SELECT_POSTFIX}"
        .year="${this.year}"
        @kuc:year-dropdown-change="${this._handleYearDropdownChange}"
        @kuc:year-dropdown-click="${this._handleYearDropdownClick}"
      >
      </kuc-base-datetime-header-year-1-18-0>
    `}_getMonthTemplate(){return $e`
      <kuc-base-datetime-header-month-1-18-0
        class="kuc-base-datetime-calendar-header-1-18-0__month"
        .month="${this.month}"
        .language="${this.language}"
        @kuc:month-dropdown-change="${this._handleMonthDropdownChange}"
        @kuc:month-dropdown-click="${this._handleMonthDropdownClick}"
      >
      </kuc-base-datetime-header-month-1-18-0>
    `}_getYearMonthTemplate(){return"zh"===this.language||"ja"===this.language||"zh-TW"===this.language?$e` ${this._getYearTemplate()}${this._getMonthTemplate()} `:$e` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleMonthDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.month=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownChange(e){e.stopPropagation(),e.preventDefault(),this.year=parseInt(e.detail.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleYearDropdownClick(){this._listBoxMonthEl&&this._baseDateTimeHeaderMonthEl.closeListBox()}_handleMonthDropdownClick(){this._listBoxYearEl&&this._baseDateTimeHeaderYearEl.closeListBox()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),1===this.month?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleKeyDownCalendarPrevMonthBtn(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),fi(this,"kuc:calendar-header-previous-shifttab"))}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),12===this.month?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const e=this.year,t=this.month;fi(this,"kuc:calendar-header-change",{value:`${e}-${t}`})}}Ki([Fe({type:String,attribute:"lang",reflect:!0})],Yi.prototype,"language",void 0),Ki([Fe({type:Number,hasChanged(e){return(t=e)>0&&t<13;var t}})],Yi.prototype,"month",void 0),Ki([Fe({type:Number,hasChanged(e){return(t=e)>=0&&t<1e4;var t}})],Yi.prototype,"year",void 0),Ki([Ke(".kuc-base-datetime-calendar-header-1-18-0__month")],Yi.prototype,"_baseDateTimeHeaderMonthEl",void 0),Ki([Ke(".kuc-base-datetime-calendar-header-1-18-0__year")],Yi.prototype,"_baseDateTimeHeaderYearEl",void 0),Ki([Ke(".kuc-base-datetime-header-month-1-18-0__listbox")],Yi.prototype,"_listBoxMonthEl",void 0),Ki([Ke(".kuc-base-datetime-header-year-1-18-0__listbox")],Yi.prototype,"_listBoxYearEl",void 0),window.customElements.get("kuc-base-datetime-calendar-header-1-18-0")||(vi('\nkuc-base-datetime-calendar-header-1-18-0,\nkuc-base-datetime-calendar-header-1-18-0 *,\nkuc-base-datetime-calendar-header-1-18-0:lang(en),\nkuc-base-datetime-calendar-header-1-18-0:lang(en) * {\n  font-family: sans-serif;\n}\nkuc-base-datetime-calendar-header-1-18-0:lang(ja),\nkuc-base-datetime-calendar-header-1-18-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n  font-weight: 700;\n}\nkuc-base-datetime-calendar-header-1-18-0:lang(zh),\nkuc-base-datetime-calendar-header-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-calendar-header-1-18-0:lang(zh-TW),\nkuc-base-datetime-calendar-header-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\nkuc-base-datetime-calendar-header-1-18-0:lang(es),\nkuc-base-datetime-calendar-header-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\nkuc-base-datetime-calendar-header-1-18-0:lang(ja) kuc-base-datetime-listbox-1-18-0 * {\n  font-weight: 400;\n}\n.kuc-base-datetime-calendar-header-1-18-0__group {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e3e7e8;\n  padding: 0;\n  white-space: nowrap;\n  width: 266px;\n  height: 44px;\n}\n.kuc-base-datetime-calendar-header-1-18-0__group__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  width: 38px;\n  height: 32px;\n  margin: 0;\n  text-align: center;\n}\n.kuc-base-datetime-calendar-header-1-18-0__group__button:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n.kuc-base-datetime-calendar-header-1-18-0__group__button-icon {\n  vertical-align: middle;\n}\n.kuc-base-datetime-calendar-header-1-18-0__group__center {\n  width: 190px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.kuc-base-datetime-calendar-header-1-18-0__month {\n  margin: 0 4px 0 4px;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-header-1-18-0",Yi));var Ji=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Zi extends mi{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=ti("en"),this._handleClickDocument=this._handleClickDocument.bind(this),this._handleKeyDownDocument=this._handleKeyDownDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument),document.addEventListener("keydown",this._handleKeyDownDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),document.removeEventListener("keydown",this._handleKeyDownDocument),super.disconnectedCallback()}update(e){if(e.forEach(((e,t)=>{"language"===t&&(this._locale=ti(this.language))})),e.has("month")&&(this._month=this.month),e.has("year")&&(this._year=this.year),e.has("value")){const{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return $e`
      <table class="kuc-base-datetime-calendar-body-1-18-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}updated(e){e.has("value")&&this._focusDateEl(),super.update(e)}_handleClickDocument(){fi(this,"kuc:calendar-body-blur",{})}_handleKeyDownDocument(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),fi(this,"kuc:calendar-body-blur",{}))}_handleClickDate(e){e.preventDefault(),e.stopPropagation();const t=e.target;t.setAttribute("aria-selected","true");const i=t.getAttribute("data-date")||"";this._dispatchClickEvent(i)}_handleKeyDownDate(e){let t=!1;switch(e.key){case"Up":case"ArrowUp":t=!0,this._moveToDate(-7);break;case"Down":case"ArrowDown":t=!0,this._moveToDate(7);break;case"Left":case"ArrowLeft":t=!0,this._moveToDate(-1);break;case"Right":case"ArrowRight":t=!0,this._moveToDate(1);break;case" ":case"Enter":{t=!0;const e=this._getSelectedValue();this._dispatchClickEvent(e);break}}t&&(e.stopPropagation(),e.preventDefault())}_dispatchClickEvent(e){const t={oldValue:this.value,value:e};fi(this,"kuc:calendar-body-click-date",t),this.value=e}_isToday(e){const t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_moveToDate(e){let t=this.value;const i=this._getSelectedValue(),{day:n}=this._separateDateValue(i);t=`${this._year}-${Qt(this._month)}-${n}`;const o=new Date(`${t||this._getValueItemFocused()}T00:00:00`);if(isNaN(o.getTime()))return;o.setDate(o.getDate()+e);const a=this._getDateString(o),s=t;this.value=a,fi(this,"kuc:calendar-body-change-date",{oldValue:s,value:a})}_separateDateValue(e=this.value){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}_getSelectedValue(){return this._highlightItem?this._highlightItem.dataset.date||"":this._selectedItem&&this._selectedItem.getAttribute("data-date")||""}_getValueItemFocused(){return this._focusedItem&&this._focusedItem.getAttribute("data-date")||""}_getDateClass(e,t){return t?this._isToday(e)?" kuc-base-datetime-calendar-body-1-18-0__table__date--selected--today":"":this._isToday(e)?" kuc-base-datetime-calendar-body-1-18-0__table__date--selected--today":" kuc-base-datetime-calendar-body-1-18-0__table__date--other-month"}_getDateString(e=new Date){return`${e.getFullYear()}-${Qt(e.getMonth()+1)}-${Qt(e.getDate())}`}_isSameDayOfMoment(e){const t=parseInt(e[1],10),i=parseInt(e[2],10),n=parseInt(e[0],10);let o=(new Date).getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(o=new Date(`${this.value}T00:00:00`).getDate()),o===i&&t===this._month)return!0;const a=new Date(n,this._month,0).getDate();return o>a&&a===i&&t===this._month}_getHeaderItemsTemplate(){return $e`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((e=>$e`
              <th
                class="kuc-base-datetime-calendar-body-1-18-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `))}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){const e=Ut(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return $e`
      <tbody>
        ${e.map((e=>$e`
            <tr>
              ${e.map((e=>{const i=e.text.split("-"),n=this._isSameDayOfMoment(i),o=parseInt(i[1],10)===this._month,a=(this.value===e.attr||n)&&o;return $e`
                  <td
                    role="gridcell"
                    class="kuc-base-datetime-calendar-body-1-18-0__table__date${a?"--selected":""}${this._getDateClass(i,o)}"
                    aria-selected="${this.value===e.attr}"
                    tabindex="${a?"0":"-1"}"
                    aria-current="${!!this._isToday(i)&&"date"}"
                    aria-label="${i[2]} ${t}"
                    data-date="${e.attr}"
                    @click="${this._handleClickDate}"
                    @keydown="${this._handleKeyDownDate}"
                  >
                    ${i[2]||""}
                  </td>
                `}))}
            </tr>
          `))}
      </tbody>
    `}_focusDateEl(){this._focusedItem&&this._focusedItem.focus({preventScroll:!0})}}Ji([Fe({type:Number})],Zi.prototype,"month",void 0),Ji([Fe({type:Number})],Zi.prototype,"year",void 0),Ji([Fe({type:String,attribute:"lang",reflect:!0})],Zi.prototype,"language",void 0),Ji([Fe({type:String,reflect:!0})],Zi.prototype,"value",void 0),Ji([We()],Zi.prototype,"_month",void 0),Ji([We()],Zi.prototype,"_year",void 0),Ji([Ke('.kuc-base-datetime-calendar-body-1-18-0__table__date--selected[aria-selected="true"]')],Zi.prototype,"_selectedItem",void 0),Ji([Ke(".kuc-base-datetime-calendar-body-1-18-0__table__date--selected")],Zi.prototype,"_highlightItem",void 0),Ji([Ke('.kuc-base-datetime-calendar-body-1-18-0__table__date--selected[tabindex="0"]')],Zi.prototype,"_focusedItem",void 0),window.customElements.get("kuc-base-datetime-calendar-body-1-18-0")||(vi('\nkuc-base-datetime-calendar-body-1-18-0,\nkuc-base-datetime-calendar-body-1-18-0 *,\nkuc-base-datetime-calendar-body-1-18-0:lang(en),\nkuc-base-datetime-calendar-body-1-18-0:lang(en) * {\n  font-family: sans-serif;\n}\nkuc-base-datetime-calendar-body-1-18-0:lang(ja),\nkuc-base-datetime-calendar-body-1-18-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-calendar-body-1-18-0:lang(zh),\nkuc-base-datetime-calendar-body-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-calendar-body-1-18-0:lang(zh-TW),\nkuc-base-datetime-calendar-body-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\nkuc-base-datetime-calendar-body-1-18-0:lang(es),\nkuc-base-datetime-calendar-body-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table,\n.kuc-base-datetime-calendar-body-1-18-0__table tr {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__date,\n.kuc-base-datetime-calendar-body-1-18-0__table__date--selected {\n  border-spacing: 1px;\n  padding: 0px;\n  border: 1px solid #ffffff;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__header {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 400;\n  color: #333333;\n}\n:lang(ja) th.kuc-base-datetime-calendar-body-1-18-0__table__header {\n  font-weight: 700;\n}\n:lang(es) th.kuc-base-datetime-calendar-body-1-18-0__table__header {\n  text-transform: revert;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__date--selected,\n.kuc-base-datetime-calendar-body-1-18-0__table__date,\n.kuc-base-datetime-calendar-body-1-18-0__table__header {\n  box-sizing: border-box;\n  padding: 8px 0;\n  width: 36px;\n  height: 31px;\n  border: 1px solid #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 400;\n  color: #333333;\n  cursor: pointer;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__header:nth-child(1),\n.kuc-base-datetime-calendar-body-1-18-0__table__header:nth-child(7) {\n  color: #d4d7d7;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__date:focus,\n.kuc-base-datetime-calendar-body-1-18-0__table__date--selected:focus {\n  outline: none;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__date\n  .kuc-base-datetime-calendar-body-1-18-0__table__date__button:hover {\n  color: #000000;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__date--selected {\n  border-color: #3498db;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__date--selected--today,\n.kuc-base-datetime-calendar-body-1-18-0__table__date--today {\n  color: #ffffff;\n  background: #888888;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__date--today:hover {\n  color: #333333;\n}\n.kuc-base-datetime-calendar-body-1-18-0__table__date--other-month,\n.kuc-base-datetime-calendar-body-1-18-0__table__date--other-month:hover {\n  color: #d4d7d7;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-body-1-18-0",Zi));var Xi=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Qi extends mi{constructor(){super(...arguments),this.language="en",this._locale=ti("en")}update(e){e.has("language")&&(this._locale=ti(this.language)),super.update(e)}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),fi(this,"kuc:calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),fi(this,"kuc:calendar-footer-click-today")}_handleKeyDownCalendarFooterButtonNone(e){"Tab"===e.key&&(e.shiftKey||(e.preventDefault(),fi(this,"kuc:calendar-footer-tab-none")))}render(){return $e`
      <div class="kuc-base-datetime-calendar-footer-1-18-0__group">
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-18-0__group__button kuc-base-datetime-calendar-footer-1-18-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <span class="kuc-base-datetime-calendar-footer-1-18-0__group__center"></span>
        <button
          type="button"
          tabindex="0"
          class="kuc-base-datetime-calendar-footer-1-18-0__group__button kuc-base-datetime-calendar-footer-1-18-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
          @keydown="${this._handleKeyDownCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
      </div>
    `}}Xi([Fe({type:String,attribute:"lang",reflect:!0})],Qi.prototype,"language",void 0),Xi([We()],Qi.prototype,"_locale",void 0),window.customElements.get("kuc-base-datetime-calendar-footer-1-18-0")||(vi('\nkuc-base-datetime-calendar-footer-1-18-0,\nkuc-base-datetime-calendar-footer-1-18-0 *,\nkuc-base-datetime-calendar-footer-1-18-0:lang(en),\nkuc-base-datetime-calendar-footer-1-18-0:lang(en) * {\n  font-family: sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-18-0:lang(ja),\nkuc-base-datetime-calendar-footer-1-18-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-18-0:lang(zh),\nkuc-base-datetime-calendar-footer-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-18-0:lang(zh-TW),\nkuc-base-datetime-calendar-footer-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\nkuc-base-datetime-calendar-footer-1-18-0:lang(es),\nkuc-base-datetime-calendar-footer-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\n.kuc-base-datetime-calendar-footer-1-18-0__group {\n  display: flex;\n  align-items: flex-end;\n  box-sizing: border-box;\n  padding: 0;\n  height: 27px;\n  white-space: nowrap;\n  width: 272px;\n}\n.kuc-base-datetime-calendar-footer-1-18-0__group__button {\n  background: transparent;\n  border: 1px solid transparent;\n  color: #3498db;\n  cursor: pointer;\n  font-size: 13px;\n  outline: none;\n}\n.kuc-base-datetime-calendar-footer-1-18-0__group__button:hover {\n  color: #217dbb;\n}\n.kuc-base-datetime-calendar-footer-1-18-0__group__button:focus {\n  border: 1px solid #3498db;\n  outline: none;\n}\n.kuc-base-datetime-calendar-footer-1-18-0__group__center {\n  width: 100%;\n}\n'),window.customElements.define("kuc-base-datetime-calendar-footer-1-18-0",Qi));var en=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class tn extends mi{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=(new Date).getFullYear()}update(e){e.has("value")&&this._updateValue(),super.update(e)}render(){return $e`
      <div
        class="kuc-base-datetime-calendar-1-18-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
        @keydown="${this._handleKeyDownCalendarGroup}"
      >
        <kuc-base-datetime-calendar-header-1-18-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-datetime-calendar-header-1-18-0>
        <kuc-base-datetime-calendar-body-1-18-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
          @kuc:calendar-body-change-date="${this._handleCalendarBodyChangeDate}"
        ></kuc-base-datetime-calendar-body-1-18-0>
        <kuc-base-datetime-calendar-footer-1-18-0
          .language="${this.language}"
        ></kuc-base-datetime-calendar-footer-1-18-0>
      </div>
    `}async updated(e){await this.updateComplete,this._calculateBodyCalendarPosition(),super.updated(e)}_handleKeyDownCalendarGroup(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),fi(this,"kuc:calendar-escape",{}))}_handleClickCalendarGroup(e){e.stopPropagation(),this._listBoxMonthEl&&this._monthEl.closeListBox(),this._listBoxYearEl&&this._yearEl.closeListBox()}_calculateBodyCalendarPosition(){const{inputToBottom:e,inputToTop:t,inputToRight:i,inputToLeft:n}=ai(this);e>=this._baseCalendarGroupEl.getBoundingClientRect().height||t<0||e>t?this._calculateCalendarPosition(i,n,"bottom"):this._calculateCalendarPosition(i,n,"top")}_calculateCalendarPosition(e,t,i){if(!this.parentElement)return;const n=this.parentElement.getElementsByClassName("kuc-base-date-1-18-0__input")[0],o=n.getBoundingClientRect().height,a=n.getBoundingClientRect().width;if(e<336&&e<t){const e=this.parentElement.getBoundingClientRect().width,t="bottom"===i?o:"auto",n="bottom"===i?"auto":o,s=e>a?e-a:0;return void this._setCalendarPosition({top:t,bottom:n,right:s})}const s="bottom"===i?o:"auto",r="bottom"===i?"auto":o;this._setCalendarPosition({bottom:r,top:s,left:0})}_setCalendarPosition({top:e="auto",left:t="auto",right:i="auto",bottom:n="auto"}){const o=this._baseCalendarGroupEl.parentElement;this.parentElement&&o&&(this.parentElement.style.position="relative",o.style.bottom="auto"===n?n:n+"px",o.style.top="auto"===e?e:e+"px",o.style.left="auto"===t?t:t+"px",o.style.right="auto"===i?i:i+"px")}_handleCalendarHeaderChange(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_handleCalendarBodyChangeDate(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_updateValue(){""===this.value&&(this.value=Zt().slice(0,7)+"-01");const{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){const t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}}en([Fe({type:String,attribute:"lang",reflect:!0})],tn.prototype,"language",void 0),en([Fe({type:String,reflect:!0})],tn.prototype,"value",void 0),en([Ke(".kuc-base-datetime-calendar-1-18-0__group")],tn.prototype,"_baseCalendarGroupEl",void 0),en([Ke(".kuc-base-datetime-calendar-header-1-18-0__month")],tn.prototype,"_monthEl",void 0),en([Ke(".kuc-base-datetime-calendar-header-1-18-0__year")],tn.prototype,"_yearEl",void 0),en([Ke(".kuc-base-datetime-header-month-1-18-0__listbox")],tn.prototype,"_listBoxMonthEl",void 0),en([Ke(".kuc-base-datetime-header-year-1-18-0__listbox")],tn.prototype,"_listBoxYearEl",void 0),en([We()],tn.prototype,"_month",void 0),en([We()],tn.prototype,"_year",void 0),window.customElements.get("kuc-base-datetime-calendar-1-18-0")||(vi("\n.kuc-base-datetime-calendar-1-18-0__group {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 336px;\n  padding: 32px 32px 24px;\n  background: #ffffff;\n  box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);\n  text-align: center;\n  font-size: 13px;\n}\n"),window.customElements.define("kuc-base-datetime-calendar-1-18-0",tn));var nn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class on extends mi{constructor(){super(),this.value="",this.items=[],this.maxHeight=300,this.doFocus=!0,this._actionKeyboard=!1,this._firstHighlight=!0,this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}getHighlightItemEl(){return this._highlightItemEl}render(){return $e`
      <ul
        style="max-height: ${this.maxHeight}px;"
        class="kuc-base-datetime-listbox-1-18-0__listbox"
        role="listbox"
        @mousedown="${this._handleMouseDownListBox}"
        @click="${this._handleClickListBox}"
      >
        ${this.items.map((e=>this._getListBoxItemTemplate(e)))}
      </ul>
    `}async updated(e){await this.updateComplete,e.has("value")&&this._highlightSelectedItem(),this._setListBoxPosition(),this._scrollToView(),super.updated(e)}_handleClickDocument(){fi(this,"kuc:listbox-blur",{})}_handleClickListBox(e){e.stopPropagation()}_handleKeyDownListBox(e){switch(e.preventDefault(),e.stopPropagation(),e.key){case"Up":case"ArrowUp":this._actionKeyboard=!0,this._highlightPrevItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Down":case"ArrowDown":this._actionKeyboard=!0,this._highlightNextItemEl(),this._focusHighlightItemEl(),this._scrollToView();break;case"Home":this._actionKeyboard=!0,this._highlightFirstItem(),this._focusHighlightItemEl();break;case"End":this._actionKeyboard=!0,this._highlightLastItem(),this._focusHighlightItemEl();break;case"Tab":fi(this,"kuc:listbox-click",{});break;case"Escape":fi(this,"kuc:listbox-escape",{});break;case" ":case"Enter":{const e=this._highlightItemEl.getAttribute("value");fi(this,"kuc:listbox-click",{value:e||""});break}}}_handleMouseDownListBox(e){if(e.preventDefault(),e.stopPropagation(),e.target===e.currentTarget)return;const t=e.target.getAttribute("value")||"";fi(this,"kuc:listbox-click",{value:t})}_handleMouseOverItem(e){if(this._actionKeyboard)return void(this._actionKeyboard=!1);const t=e.target;this._setHighlightItemEl(t),this.doFocus&&this._focusHighlightItemEl(!1)}_setListBoxPosition(){const e=this._listBoxEl.getBoundingClientRect().height;if(!this._listBoxEl.parentElement||!this.parentElement)return;const t=window.innerHeight-this.parentElement.getBoundingClientRect().bottom,i=this.parentElement.offsetHeight;this._listBoxEl.style.bottom="auto",this._listBoxEl.style.left="auto",t>=e||(this.parentElement.style.position="relative",this._listBoxEl.style.bottom=i+"px",this._listBoxEl.style.left="0px")}_setHighlightItemEl(e){this._removeHighlight(),e.classList.add("kuc-base-datetime-listbox-1-18-0__listbox--highlight"),e.setAttribute("tabindex","0")}_highlightSelectedItem(){if(!this.doFocus)return;const e=Array.from(this._itemsEl).filter((e=>"true"===e.getAttribute("aria-selected")))[0];e&&(this._itemSelectedEl=e,this._setHighlightItemEl(e),this._focusHighlightItemEl())}_highlightFirstItem(){this._itemSelectedEl=this._firstItemEl,this._setHighlightItemEl(this._firstItemEl)}_highlightLastItem(){this._itemSelectedEl=this._lastItemEl,this._setHighlightItemEl(this._lastItemEl)}_highlightNextItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightFirstItem();const e=this._getNextItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightFirstItem()}_getNextItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.nextElementSibling;return this._itemSelectedEl?this._itemSelectedEl.nextElementSibling?(t=this._itemSelectedEl.nextElementSibling,t):this._firstItemEl:t}_highlightPrevItemEl(){if(null===this._highlightItemEl||null===this._iconChecked)return void this._highlightLastItem();const e=this._getPreviousItemEl();if(e)return this._setHighlightItemEl(e),this._firstHighlight=!1,void(this._itemSelectedEl=e);this._highlightLastItem()}_getPreviousItemEl(){const e=this._iconChecked.parentElement;!this._itemSelectedEl&&e&&this._firstHighlight&&(this._itemSelectedEl=e);let t=this._highlightItemEl.previousElementSibling;return this._itemSelectedEl?this._itemSelectedEl.previousElementSibling?(t=this._itemSelectedEl.previousElementSibling,t):this._lastItemEl:t}_removeHighlight(){this._highlightItemEl&&(this._highlightItemEl.setAttribute("tabindex","-1"),this._highlightItemEl.classList.remove("kuc-base-datetime-listbox-1-18-0__listbox--highlight"))}_focusHighlightItemEl(e){const t=this._highlightItemEl;t&&(t.focus({preventScroll:!0}),!1!==e&&this._dispatchListBoxFocusChange())}_dispatchListBoxFocusChange(){const e=this._highlightItemEl.getAttribute("value")||"";fi(this,"kuc:listbox-focus-change",{value:e})}_scrollToView(){const e=this._highlightItemEl||this._getHighlightItemByValue();if(!e||!this._listBoxEl)return;const t=e.offsetHeight,i=this._listBoxEl.clientHeight/t/2;let n=e.offsetTop-i*t;n<0&&(n=0),this._listBoxEl.scrollTop=n}_getHighlightItemByValue(){const e=Array.from(this._listBoxEl.children),t=new Date(Date.parse(`2021/01/01 ${this.value}`));let i=e.find((e=>new Date(Date.parse(`2021/01/01 ${e.title}`))>=t));return i||(i=e[e.length-1]),this.doFocus&&i?(this._setHighlightItemEl(i),this._focusHighlightItemEl(),i):i}_getListBoxItemTemplate(e){const t=this.value===e.value&&this.doFocus;return $e`
      <li
        class="kuc-base-datetime-listbox-1-18-0__listbox__item"
        role="option"
        tabindex="${t?"0":"-1"}"
        aria-selected="${t}"
        title="${e.label||""}"
        value="${void 0!==e.value?e.value:""}"
        @mouseover="${this._handleMouseOverItem}"
        @keydown="${this._handleKeyDownListBox}"
      >
        ${t?this._getCheckedIconSvgTemplate():""}
        ${void 0===e.label?e.value:e.label}
      </li>
    `}_getCheckedIconSvgTemplate(){return Ce`<svg
          class="kuc-base-datetime-listbox-1-18-0__listbox__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="#3498db"
          />
        </svg>`}}nn([Fe({type:String})],on.prototype,"value",void 0),nn([Fe({type:Array})],on.prototype,"items",void 0),nn([Fe({type:Number})],on.prototype,"maxHeight",void 0),nn([Fe({type:Boolean})],on.prototype,"doFocus",void 0),nn([Ke(".kuc-base-datetime-listbox-1-18-0__listbox")],on.prototype,"_listBoxEl",void 0),nn([Je(".kuc-base-datetime-listbox-1-18-0__listbox__item")],on.prototype,"_itemsEl",void 0),nn([Ke(".kuc-base-datetime-listbox-1-18-0__listbox__item")],on.prototype,"_firstItemEl",void 0),nn([Ke(".kuc-base-datetime-listbox-1-18-0__listbox__item:last-child")],on.prototype,"_lastItemEl",void 0),nn([Ke(".kuc-base-datetime-listbox-1-18-0__listbox--highlight")],on.prototype,"_highlightItemEl",void 0),nn([Ke(".kuc-base-datetime-listbox-1-18-0__listbox__item__icon")],on.prototype,"_iconChecked",void 0),nn([We()],on.prototype,"_actionKeyboard",void 0),nn([We()],on.prototype,"_firstHighlight",void 0),window.customElements.get("kuc-base-datetime-listbox-1-18-0")||(vi('\nkuc-base-datetime-listbox-1-18-0,\nkuc-base-datetime-listbox-1-18-0 *,\nkuc-base-datetime-listbox-1-18-0:lang(en),\nkuc-base-datetime-listbox-1-18-0:lang(en) * {\n  font-family: sans-serif;\n}\nkuc-base-datetime-listbox-1-18-0:lang(ja),\nkuc-base-datetime-listbox-1-18-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-base-datetime-listbox-1-18-0:lang(zh),\nkuc-base-datetime-listbox-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-base-datetime-listbox-1-18-0:lang(zh-TW),\nkuc-base-datetime-listbox-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-base-datetime-listbox-1-18-0:lang(es),\nkuc-base-datetime-listbox-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\n.kuc-base-datetime-listbox-1-18-0__listbox {\n  position: absolute;\n  z-index: 2000;\n  min-width: 280px;\n  margin: 0;\n  padding: 8px 0;\n  border: 1px solid #e3e7e8;\n  background-color: #ffffff;\n  list-style: none;\n  line-height: 1;\n  overflow-y: auto;\n  -webkit-tap-highlight-color: transparent;\n  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);\n}\n.kuc-base-datetime-listbox-1-18-0__listbox__item {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 8px 16px 8px 25px;\n  color: #333333;\n  cursor: pointer;\n  -webkit-tap-highlight-color: initial;\n  text-align: left;\n  font-size: 14px;\n  user-select: none;\n}\n.kuc-base-datetime-listbox-1-18-0__listbox__item[aria-selected="true"] {\n  color: #3498db;\n}\n.kuc-base-datetime-listbox-1-18-0__listbox--highlight {\n  background-color: #e2f2fe;\n  cursor: pointer;\n}\n.kuc-base-datetime-listbox-1-18-0__listbox__item__icon {\n  position: absolute;\n  left: 8px;\n  top: 10px;\n  background-color: transparent;\n}\n.kuc-base-datetime-listbox-1-18-0__listbox__item:focus {\n  outline: none;\n}\n'),window.customElements.define("kuc-base-datetime-listbox-1-18-0",on));var an=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class sn extends mi{constructor(){super(...arguments),this.inputAriaLabel="",this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._locale=ti("en"),this._calendarValue="",this._inputValue="",this._valueForReset=""}update(e){e.has("inputId")&&(this._GUID=this.inputId),e.has("language")&&(this._locale=ti(this.language),this._updateValueProp()),e.has("value")&&this._updateValueProp(),super.update(e)}render(){return $e`
      <input
        class="kuc-base-date-1-18-0__input"
        id="${this._GUID}-label"
        type="text"
        text-align="center"
        .value="${this._inputValue}"
        aria-describedby="${this._GUID}-error"
        aria-invalid="${this.inputAriaInvalid}"
        aria-required="${this.required}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @click="${this._handleClickInput}"
        @change="${this._handleChangeInput}"
        @keydown="${this._handleKeyDownInput}"
        @input="${this._handleInputValue}"
      />
      <button
        aria-haspopup="dialog"
        aria-expanded="${this._dateTimeCalendarVisible}"
        class="kuc-base-date-1-18-0__assistive-text"
        @click="${this._handleClickButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show date picker
      </button>
      ${this._dateTimeCalendarVisible?$e`
            <kuc-base-datetime-calendar-1-18-0
              class="kuc-base-date-1-18-0__calendar"
              .language="${this.language}"
              .value="${this._calendarValue}"
              ?hidden="${!this._dateTimeCalendarVisible}"
              @kuc:calendar-header-previous-shifttab="${this._handleShiftTabCalendarPrevMonth}"
              @kuc:calendar-body-change-date="${this._handleClickCalendarChangeDate}"
              @kuc:calendar-body-click-date="${this._handleClickCalendarClickDate}"
              @kuc:calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
              @kuc:calendar-footer-tab-none="${this._handleTabCalendarFooterButtonNone}"
              @kuc:calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
              @kuc:calendar-escape="${this._handleCalendarEscape}"
              @kuc:calendar-body-blur="${this._handleCalendarBlurBody}"
            >
            </kuc-base-datetime-calendar-1-18-0>
          `:""}
    `}updated(e){e.has("inputAriaLabel")&&this.inputAriaLabel&&this._dateInput.setAttribute("aria-label",this.inputAriaLabel),super.updated(e)}_handleInputValue(e){const t=e.target.value;this._inputValue=t||""}_handleClickInput(){if(!this._dateTimeCalendarVisible)return this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),void this._openCalendar();this._closeCalendar()}_updateValueProp(){if(this.value){const e=this._setCalendarValueWhenInvalidValue();return this._inputValue=Kt(this.language,this.value),void(this._calendarValue=e||this.value)}const e=Zt();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)}_setCalendarValueWhenInvalidValue(){if(this.value&&!Ti(this.value)){const e=Zt();return this._calendarValue||e.slice(0,7)}return""}_getNewCalendarValue(e){if(Xt(this.language,e))return Yt(this.language,e);if(!this._calendarValue)return"";let t=this._calendarValue.slice(0,7);return""===e&&(t=this._calendarValue.slice(0,7)+"-01"),t}_handleChangeInput(e){e.stopPropagation();const t=(null==e?void 0:e.target).value;if(this._calendarValue=this._getNewCalendarValue(t),this._calendarValue.length>7)return void this._dispathDateChangeCustomEvent(Yt(this.language,t));const i={value:void 0,oldValue:this.value,error:this._locale.INVALID_FORMAT};this._inputValue=t,fi(this,"kuc:base-date-change",i)}_handleKeyDownInput(e){"Escape"===e.key&&this._closeCalendar()}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleShiftTabCalendarPrevMonth(){this._footerNoneBtn.focus()}_handleClickCalendarChangeDate(e){e.detail.oldValue=this.value,this.value=e.detail.value,fi(this,"kuc:base-date-change",e.detail)}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,this._dateInput.focus(),e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,fi(this,"kuc:base-date-change",e.detail))}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._dateInput.focus(),this._inputValue="";const e=Zt();let t=this._setCalendarValueWhenInvalidValue();t||(t=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)+"-01"),this._calendarValue=t,this._dispathDateChangeCustomEvent(void 0)}_handleTabCalendarFooterButtonNone(){this._previousMonth.focus()}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const e=Zt();this._dateInput.focus(),this._dispathDateChangeCustomEvent(e)}_handleCalendarEscape(){const e=this._valueForReset;if(this._closeCalendar(),this._dateInput.focus(),e===this.value)return;const t={oldValue:this.value,value:e};this.value=e,fi(this,"kuc:base-date-change",t)}_handleCalendarBlurBody(e){e.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(e){const t={value:e,oldValue:this.value};this.value=void 0===e?"":e,fi(this,"kuc:base-date-change",t)}_handleClickButton(){if(!this._dateTimeCalendarVisible)return this._valueForReset=this.value,this._calendarValue=this._getNewCalendarValue(this._inputValue||""),void this._openCalendar();this._closeCalendar()}_handleBlurButton(){this._dateInput.classList.remove("kuc-base-date-1-18-0__input--focus")}_handleFocusButton(){this._dateInput.classList.add("kuc-base-date-1-18-0__input--focus")}}an([Fe({type:String})],sn.prototype,"inputAriaLabel",void 0),an([Fe({type:String})],sn.prototype,"inputId",void 0),an([Fe({type:String,attribute:"lang",reflect:!0})],sn.prototype,"language",void 0),an([Fe({type:String,reflect:!0})],sn.prototype,"value",void 0),an([Fe({type:Boolean})],sn.prototype,"disabled",void 0),an([Fe({type:Boolean})],sn.prototype,"inputAriaInvalid",void 0),an([Fe({type:Boolean})],sn.prototype,"required",void 0),an([Ke(".kuc-base-date-1-18-0__input")],sn.prototype,"_dateInput",void 0),an([Ke(".kuc-base-datetime-calendar-header-1-18-0__group__button--previous-month")],sn.prototype,"_previousMonth",void 0),an([Ke(".kuc-base-datetime-calendar-footer-1-18-0__group__button--none")],sn.prototype,"_footerNoneBtn",void 0),an([We()],sn.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-base-date-1-18-0")||(vi("\ninput.kuc-base-date-1-18-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  color: #333333;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\ninput.kuc-base-date-1-18-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\ninput.kuc-base-date-1-18-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-datetime-picker-1-18-0__group__inputs--date\n  input.kuc-base-date-1-18-0__input--focus {\n  border-color: #3498db;\n}\ninput.kuc-base-date-1-18-0__input:disabled {\n  color: #888888 !important;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.kuc-base-date-1-18-0__calendar {\n  position: absolute;\n  z-index: 2000;\n  background-color: #ffffff;\n  text-align: center;\n  box-sizing: border-box;\n}\n.kuc-base-date-1-18-0__assistive-text {\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n  position: absolute !important;\n  padding: 0px !important;\n  border: 0px !important;\n  height: 1px !important;\n  width: 1px !important;\n}\n"),window.customElements.define("kuc-base-date-1-18-0",sn));var rn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ln;(()=>{if(ln=window.customElements.get("kuc-date-picker-1-18-0"),!ln){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._errorFormat="",this._errorText="",this._inputValue="",this._invalidValue="",this._valueConverted="",this._GUID=ki();const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&("string"==typeof this.value&&Ii(this.value)?(this._valueConverted=di(this.value),this._valueConverted&&!Ti(this._valueConverted)&&(this.throwErrorAfterUpdateComplete(At),1)):(this.throwErrorAfterUpdateComplete(At),1)))}willUpdate(e){e.has("value")&&(void 0===this.value?this._inputValue=this._invalidValue:(this.value=""===this.value?this.value:this._valueConverted,this._inputValue=this.value,this._errorFormat="")),this._updateErrorText()}render(){return $e`
        <div class="kuc-date-picker-1-18-0__group">
          <label
            class="kuc-date-picker-1-18-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </label>
          <kuc-base-date-1-18-0
            .inputId="${this._GUID}"
            .inputAriaInvalid="${""!==this.error}"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:base-date-change="${this._handleDateChange}"
          >
          </kuc-base-date-1-18-0>
          <kuc-base-error-1-18-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
          ></kuc-base-error-1-18-0>
        </div>
      `}updated(){this._invalidValue=""}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const t={oldValue:this.value,value:""};e.detail.error?(this.value=void 0,this._invalidValue=this._dateInput.value,this._errorFormat=e.detail.error,this.error="",t.value=void 0):(this._errorFormat="",this.value=void 0===e.detail.value?"":e.detail.value,t.value=this.value),this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){fi(this,"change",e)}}rn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),rn([Fe({type:String})],e.prototype,"error",void 0),rn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),rn([Fe({type:String})],e.prototype,"label",void 0),rn([Fe({type:Boolean})],e.prototype,"disabled",void 0),rn([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),rn([Fe({type:String,attribute:"lang",reflect:!0,converter:ri})],e.prototype,"language",void 0),rn([Fe({type:String})],e.prototype,"value",void 0),rn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),rn([Ke(".kuc-base-date-1-18-0__input")],e.prototype,"_dateInput",void 0),window.customElements.define("kuc-date-picker-1-18-0",e),vi('\nkuc-date-picker-1-18-0,\nkuc-date-picker-1-18-0 *,\nkuc-date-picker-1-18-0:lang(en),\nkuc-date-picker-1-18-0:lang(en) * {\n  font-family: sans-serif;\n}\nkuc-date-picker-1-18-0:lang(ja),\nkuc-date-picker-1-18-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-date-picker-1-18-0:lang(zh),\nkuc-date-picker-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-date-picker-1-18-0:lang(zh-TW),\nkuc-date-picker-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-date-picker-1-18-0:lang(es),\nkuc-date-picker-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\nkuc-date-picker-1-18-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  max-width: var(--kuc-date-picker-input-width, 100px);\n  width: var(--kuc-date-picker-input-width, 100px);\n  line-height: 1.5;\n}\nkuc-date-picker-1-18-0[hidden] {\n  display: none;\n}\n.kuc-date-picker-1-18-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-date-picker-1-18-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-date-picker-1-18-0__group__label[hidden] {\n  display: none;\n}\n.kuc-date-picker-1-18-0__group input[type=text].kuc-base-date-1-18-0__input {\n  width: var(--kuc-date-picker-input-width, 100px);\n  height: var(--kuc-date-picker-input-height, 40px);\n  padding: 0px;\n  text-align: center;\n  color: var(--kuc-date-picker-input-color);\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  font-size: var(--kuc-date-picker-input-font-size, 14px);\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\n.kuc-date-picker-1-18-0__group kuc-base-date-1-18-0 {\n  display: inline-flex;\n}\n\n.kuc-date-picker-1-18-0__group input[type=text].kuc-base-date-1-18-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-date-picker-1-18-0__group input[type=text].kuc-base-date-1-18-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: var(--kuc-date-picker-input-color, #333333);\n}\n.kuc-date-picker-1-18-0__group input[type=text].kuc-base-date-1-18-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n'),ln=e}})();var dn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class un extends mi{constructor(){super(...arguments),this.language="en",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.timeStep=30,this._listBoxVisible=!1,this._valueLabel="",this._doFocusListBox=!1,this._hours="",this._minutes="",this._suffix="",this._valueForReset="",this._locale=ti("en")}update(e){(e.has("hour12")||e.has("timeStep")||e.has("max")||e.has("min"))&&(this._listBoxItems=((e,t,i,n)=>{const o=[],a=Math.round(t),s=Rt(n),r=Rt(i);if(a>0){const t=Math.floor((s-r)/a)+1;for(let i=0;i<t;i++){const t=Pt(r+i*a,e);o.push(t)}}return o})(this.hour12,this.timeStep,this.min,this.max),this._updateInputValue()),e.has("value")&&this._updateInputValue(),e.has("language")&&(this._locale=ti(this.language)),super.update(e)}render(){return $e`
      <div class="kuc-base-time-1-18-0__group" @click="${this._handleClickInputGroup}">
        <input
          type="text"
          class="kuc-base-time-1-18-0__group__hours"
          role="spinbutton"
          tabindex="${this._hours?"0":"-1"}"
          aria-label="Hour"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._hours}"
        />
        ${this._getColonTemplate()}
        <input
          type="text"
          class="kuc-base-time-1-18-0__group__minutes"
          role="spinbutton"
          tabindex="${this._minutes?"0":"-1"}"
          aria-label="Minute"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
          @keydown="${this._handleKeyDownInput}"
          @paste="${this._handlePasteInput}"
          ?disabled="${this.disabled}"
          value="${this._minutes}"
        />
        ${this._getSuffixTemplate()}
      </div>
      <button
        aria-haspopup="listbox"
        aria-expanded="${this._listBoxVisible}"
        class="kuc-base-time-1-18-0__assistive-text"
        @keydown="${this._handleKeyDownButton}"
        @focus="${this._handleFocusButton}"
        @blur="${this._handleBlurButton}"
        ?disabled="${this.disabled}"
      >
        show time picker
      </button>
      ${this._getListBoxTemplate()}
    `}updated(e){e.has("disabled")&&this._toggleDisabledGroup(),super.update(e)}_handleClickInputGroup(e){if(this.disabled)return;if(""===this.value)return this._toggleEl.focus(),void this._openListBox();const t=e.target;this._openListBox(),"INPUT"!==t.tagName.toUpperCase()?this._hoursEl.select():t.select()}_handleBlurListBox(e){e.preventDefault(),this._inputFocusEl||(this._listBoxVisible=!1)}_toggleDisabledGroup(){return this.disabled?this._inputGroupEl.classList.add("kuc-base-time-1-18-0__group--disabled"):this._inputGroupEl.classList.remove("kuc-base-time-1-18-0__group--disabled")}_updateInputValue(){var e;const t=((e,t)=>{const i=e.split(":"),n=parseInt(i[0],10),o=parseInt(i[1],10),a=n%yt;return isNaN(a)||isNaN(o)?{hours:"",minutes:"",suffix:""}:t?((e,t)=>{const i=Gt(e),n=jt(e);return{hours:Qt(n),minutes:Qt(t),suffix:i}})(n,o):{hours:Qt(a),minutes:Qt(o),suffix:""}})(this.value,this.hour12);this._hours=t.hours,this._minutes=t.minutes,this._suffix=t.suffix||"",this._valueLabel=this._getValueLabel(t),this._inputGroupEl&&(this._setValueToInput(t),null===(e=this._inputFocusEl)||void 0===e||e.select())}_getValueLabel(e){if(!e.hours||!e.minutes)return"";const t=`${e.hours}:${e.minutes}`;return e.suffix?t+` ${e.suffix}`:t}_setValueToInput(e){this._hoursEl.value=e.hours,this._minutesEl.value=e.minutes,this._suffixEl&&(this._suffixEl.value=e.suffix||"")}_handleKeyDownButton(e){switch(e.key){case"Tab":case"Escape":if("Escape"===e.key&&e.preventDefault(),!this._listBoxVisible)return;this._closeListBox();break;case"Enter":case" ":case"ArrowUp":case"ArrowDown":e.preventDefault(),e.stopPropagation(),this._openListBoxByKey();break;default:e.preventDefault(),e.stopPropagation(),this._handleDefaultKeyButton(e.key)}}_handleBlurButton(){this._inputGroupEl.classList.remove("kuc-base-time-1-18-0__group--focus")}_handleFocusButton(e){e.stopPropagation(),this._inputGroupEl.classList.add("kuc-base-time-1-18-0__group--focus")}_openListBoxByKey(){return!this._listBoxVisible&&(this._valueForReset=this.value,this._doFocusListBox=!0,this._listBoxVisible=!0,this._inputGroupEl.classList.remove("kuc-base-time-1-18-0__group--focus"),!0)}_handleListBoxEscape(){this._closeListBox(),this.value=this._valueForReset,this._actionUpdateInputValue(this.value),""!==this.value?this._hoursEl.select():this._toggleEl.focus()}_handleDefaultKeyButton(e){if(!/^[0-9]$/i.test(e)||""!==this.value)return;const t=this._computeNumberKeyValueHours(e);this._actionUpdateInputValue(t),this._hoursEl.select()}_handleChangeListBox(e){if(e.preventDefault(),e.stopPropagation(),this._closeListBox(),this._inputFocusEl=this._hoursEl,this._hoursEl.select(),!e.detail.value)return;const t=e.detail.value;this._actionUpdateInputValue(t)}_handleListBoxFocusChange(e){const t=e.detail.value,i=Ft(t);this._actionUpdateInputValue(i)}_handleFocusInput(e){this._inputFocusEl=e.target,this._inputFocusEl.select(),this._inputGroupEl.classList.add("kuc-base-time-1-18-0__group--focus")}_handleBlurInput(e){this._inputFocusEl=null;const t=e.relatedTarget;t&&t instanceof HTMLInputElement&&[this._hoursEl,this._minutesEl,this._suffixEl].indexOf(t)>-1||(this._closeListBox(),this._inputGroupEl.classList.remove("kuc-base-time-1-18-0__group--focus"))}_handleTabKey(e){return"Tab"===e.key}_handleKeyDownInput(e){this._closeListBox(),this._handleTabKey(e)||this._handleSupportedKey(e)}_handlePasteInput(e){e.preventDefault()}_handleSupportedKey(e){e.preventDefault();const t=e.key;let i;switch(t){case"Enter":case"ArrowRight":this._actionSelectNextRange();break;case"ArrowLeft":this._actionSelectPreviousRange();break;case"ArrowUp":i=this._computeArrowUpDownValue(1),this._actionUpdateInputValue(i);break;case"ArrowDown":i=this._computeArrowUpDownValue(-1),this._actionUpdateInputValue(i);break;case"Backspace":case"Delete":i=this._computeDeleteValue(),this._actionUpdateInputValue(i);break;default:i=this._computeDefaultKeyValue(t),this._actionUpdateInputValue(i)}}_actionUpdateInputValue(e){const t=""===this.value?this.value:this._formatKeyDownValue(),i=Ft(t),n=Ft(e);i!==n&&(this.value=n,this._dispatchEventTimeChange(n,i))}_computeDeleteValue(){return this._inputFocusEl===this._minutesEl?this._formatKeyDownValue({minutes:"00"}):this._inputFocusEl===this._hoursEl?this._formatKeyDownValue({hours:"00"}):this._formatKeyDownValue()}_computeArrowUpDownValue(e){return this._inputFocusEl===this._hoursEl?this._computeArrowUpDownHourValue(e):this._inputFocusEl===this._minutesEl?this._computeArrowUpDownMinuteValue(e):this._computeKeyDownSuffixValue()}_computeKeyDownSuffixValue(e){if(!e){const e=this._suffix===wt?$t:wt;return this._formatKeyDownValue({suffix:e})}if(-1===["a","A","p","P"].indexOf(e))return this._formatKeyDownValue();const t="a"===e||"A"===e?wt:$t;return""===this.value&&this._hoursEl.select(),this._formatKeyDownValue({suffix:t})}_computeArrowUpDownHourValue(e){let t=parseInt(this._hours,10)+e;return this.hour12?(t%=xt,t=t<=0?xt:t):(t%=yt,t=t<0?23:t),this._formatKeyDownValue({hours:t.toString()})}_computeArrowUpDownMinuteValue(e){let t=parseInt(this._minutes,10)+e;return t%=60,t=t<0?59:t,this._formatKeyDownValue({minutes:t.toString()})}_computeDefaultKeyValue(e){return/^[0-9]$/i.test(e)?this._computeNumberKeyValue(e):this._inputFocusEl===this._suffixEl?this._computeKeyDownSuffixValue(e):this._formatKeyDownValue()}_computeNumberKeyValue(e){return this._inputFocusEl===this._minutesEl?this._computeNumberKeyValueMinutes(e):this._inputFocusEl===this._hoursEl?this._computeNumberKeyValueHours(e):this._formatKeyDownValue()}_computeNumberKeyValueMinutes(e){const t=this._getPreviousMinutes(this._minutes),i=Qt(t+e);return""===this.value?(this._hoursEl.select(),this._computeNumberKeyValueHours(e)):this._formatKeyDownValue({minutes:i})}_computeNumberKeyValueHours(e){const t=this._getPreviousHours(this._hours,e),i=Qt(t+e);return""===this.value?this._formatKeyDownValue({hours:i,minutes:"00"}):this._formatKeyDownValue({hours:i})}_getPreviousMinutes(e){let t;return t=parseInt(e,10)>10?(""+e)[1]:""+e,t=parseInt(t,10)>5?"0":t,t}_getPreviousHours(e,t){let i;i=parseInt(e,10)>10?(""+e)[1]:""+e;const n=parseInt(i+t,10);return i=this.hour12&&n>xt||!this.hour12&&n>=yt?"0":i,i}_actionSelectNextRange(){this._inputFocusEl!==this._hoursEl?this.hour12&&this._inputFocusEl===this._minutesEl&&this._suffixEl.select():this._minutesEl.select()}_actionSelectPreviousRange(){this._inputFocusEl!==this._suffixEl?this._inputFocusEl===this._minutesEl&&this._hoursEl.select():this._minutesEl.select()}_dispatchEventTimeChange(e,t){const i={value:e,oldValue:t};(zt(e,this.min)<0||zt(this.max,e)<0)&&(i.error=this._locale.TIME_IS_OUT_OF_VALID_RANGE),fi(this,"kuc:base-time-change",i)}_formatKeyDownValue(e={hours:this._hours,minutes:this._minutes,suffix:this._suffix}){const t=e.hours||this._hours,i=e.minutes||this._minutes,n=e.suffix||this._suffix,o=`${Qt(t)}:${Qt(i)}`;return n?`${o} ${n}`:o}_openListBox(){this._listBoxVisible||(this._doFocusListBox=!1,this._listBoxVisible=!0)}_closeListBox(){this._doFocusListBox=!1,this._listBoxVisible=!1}_getColonTemplate(){return this._hours?$e` <span class="kuc-base-time-1-18-0__group__colon">:</span> `:""}_getSuffixTemplate(){return this.hour12?$e`
          <input
            class="kuc-base-time-1-18-0__group__suffix"
            role="spinbutton"
            tabindex="${this._suffix?"0":"-1"}"
            aria-label="${this._suffix||"suffix"}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
            @keydown="${this._handleKeyDownInput}"
            @paste="${this._handlePasteInput}"
            ?disabled="${this.disabled}"
            value="${this._suffix}"
          />
        `:""}_getListBoxTemplate(){return this._listBoxVisible?$e`
          <kuc-base-datetime-listbox-1-18-0
            maxHeight="165"
            aria-hidden="${!this._listBoxVisible}"
            class="kuc-base-time-1-18-0__group__listbox"
            .items="${this._listBoxItems||[]}"
            .value="${this._valueLabel}"
            .doFocus="${this._doFocusListBox}"
            @kuc:listbox-click="${this._handleChangeListBox}"
            @kuc:listbox-blur="${this._handleBlurListBox}"
            @kuc:listbox-focus-change="${this._handleListBoxFocusChange}"
            @kuc:listbox-escape="${this._handleListBoxEscape}"
          ></kuc-base-datetime-listbox-1-18-0>
        `:""}}dn([Fe({type:String,attribute:"lang",reflect:!0})],un.prototype,"language",void 0),dn([Fe({type:String})],un.prototype,"max",void 0),dn([Fe({type:String})],un.prototype,"min",void 0),dn([Fe({type:String})],un.prototype,"value",void 0),dn([Fe({type:Boolean})],un.prototype,"disabled",void 0),dn([Fe({type:Boolean})],un.prototype,"hour12",void 0),dn([Fe({type:Number})],un.prototype,"timeStep",void 0),dn([We()],un.prototype,"_listBoxVisible",void 0),dn([We()],un.prototype,"_valueLabel",void 0),dn([We()],un.prototype,"_doFocusListBox",void 0),dn([We()],un.prototype,"_hours",void 0),dn([We()],un.prototype,"_minutes",void 0),dn([We()],un.prototype,"_suffix",void 0),dn([We()],un.prototype,"_inputFocusEl",void 0),dn([Ke(".kuc-base-time-1-18-0__group__hours")],un.prototype,"_hoursEl",void 0),dn([Ke(".kuc-base-time-1-18-0__group__minutes")],un.prototype,"_minutesEl",void 0),dn([Ke(".kuc-base-time-1-18-0__group__suffix")],un.prototype,"_suffixEl",void 0),dn([Ke(".kuc-base-time-1-18-0__assistive-text")],un.prototype,"_toggleEl",void 0),dn([Ke(".kuc-base-time-1-18-0__group")],un.prototype,"_inputGroupEl",void 0),window.customElements.get("kuc-base-time-1-18-0")||(vi("\n:lang(ja) .kuc-base-time-1-18-0__group input.kuc-base-time-1-18-0__group__hours,\n:lang(ja) .kuc-base-time-1-18-0__group input.kuc-base-time-1-18-0__group__minutes {\n  width: 2ch;\n}\n.kuc-base-time-1-18-0__group {\n  display: inline-flex;\n  position: relative;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  max-width: 85px;\n  width: 85px;\n  height: 40px;\n  color: #333333;\n  border: solid 1px #e3e7e8;\n  box-sizing: border-box;\n  padding: 0px 8px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  background-color: #ffffff;\n  overflow: hidden;\n}\n.kuc-base-time-1-18-0__group input.kuc-base-time-1-18-0__group__hours {\n  border: 0px;\n  padding: 0px;\n  width: 2ch;\n  font-size: inherit;\n  outline: none;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-18-0__group input.kuc-base-time-1-18-0__group__minutes {\n  border: 0px;\n  padding: 0px;\n  width: 2ch;\n  font-size: inherit;\n  outline: none;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-18-0__group input.kuc-base-time-1-18-0__group__hours:focus {\n  border: 0px;\n}\n.kuc-base-time-1-18-0__group input.kuc-base-time-1-18-0__group__minutes:focus {\n  border: 0px;\n}\n.kuc-base-time-1-18-0__group__colon {\n  width: auto;\n  text-align: center;\n}\n.kuc-base-time-1-18-0__group input.kuc-base-time-1-18-0__group__suffix {\n  border: 0px;\n  width: 3ch;\n  text-align: right;\n  font-size: inherit;\n  outline: none;\n  appearance: none;\n  margin-left: 1px;\n  padding: 0px;\n  background-color: transparent;\n  color: #333333;\n  caret-color: transparent;\n  user-select: none;\n}\n.kuc-base-time-1-18-0__group--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-base-time-1-18-0__assistive-text {\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n  position: absolute !important;\n  padding: 0px !important;\n  border: 0px !important;\n  height: 1px !important;\n  width: 1px !important;\n}\n.kuc-base-time-1-18-0__group--disabled {\n  background-color: #d4d7d7;\n  box-shadow: none;\n  color: #888888;\n  cursor: not-allowed;\n}\n.kuc-base-time-1-18-0__group--disabled input:disabled,\n.kuc-base-time-1-18-0__group--disabled span {\n  cursor: not-allowed;\n  color: #888888;\n  -webkit-text-fill-color: #888888;\n}\n"),window.customElements.define("kuc-base-time-1-18-0",un));var cn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let hn;(()=>{if(hn=window.customElements.get("kuc-datetime-picker-1-18-0"),!hn){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorText="",this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._inputMax="",this._inputMin="",this._timeConverted="",this._errorInvalidTime="",this._inputTimeStep=30,this._GUID=ki();const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){return!((e.has("max")||e.has("min"))&&!this._checkAndUpdateMaxMinProperty())&&(!(e.has("timeStep")&&!this._checkAndUpdateTimeStepProperty())&&(void 0===this.value||""===this.value||("string"!=typeof this.value?(this.throwErrorAfterUpdateComplete(At),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=di(this._dateAndTime.date),Di(this._dateAndTime.date,this._dateAndTime.time)&&Ti(this._dateConverted)?(this._timeConverted=ui(this._dateAndTime.time.slice(0,5)),!e.has("value")||!(zt(this._timeConverted,this._inputMin)<0||zt(this._inputMax,this._timeConverted)<0)||(this.throwErrorAfterUpdateComplete(It),!1)):(this.throwErrorAfterUpdateComplete(At),!1)))))}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueChangeByUI():this._updateValueWhenSetter()}_checkAndUpdateMaxMinProperty(){let e=this._inputMin,t=this._inputMax;if(void 0===this.max||""===this.max)t=Tt;else{if(!Ei(this.max))return this.throwErrorAfterUpdateComplete(Dt),!1;t=this.max=ui(this.max)}if(void 0===this.min||""===this.min)e=St;else{if(!Ei(this.min))return this.throwErrorAfterUpdateComplete(Lt),!1;e=this.min=ui(this.min)}return zt(t,e)<0?(this.throwErrorAfterUpdateComplete(Ct),!1):(this._inputMin=e,this._inputMax=t,!0)}_checkAndUpdateTimeStepProperty(){return Hi(this.timeStep)?Si(this.timeStep,this._inputMax,this._inputMin)?(this._inputTimeStep=this.timeStep,!0):(this.throwErrorAfterUpdateComplete(Vt),!1):(this.throwErrorAfterUpdateComplete(Et),!1)}_updateValueChangeByUI(){const e=this._validateDateTimeFormat();this.value=e?this.value:void 0,!e||this._dateValue||this._timeValue||(this.value="");const t=!this._dateValue&&this._timeValue,i=this._dateValue&&!this._timeValue;this._errorText=t||i?this.error||this._errorFormat||this._errorInvalidTime:e?this.error:this._errorFormat||this._errorInvalidTime}_validateDateTimeFormat(){const e=Boolean(this._timeValue)&&!this._dateValue,t=Boolean(this._dateValue)&&!this._timeValue;return!(this._errorFormat||this._errorInvalidTime||e||t)}_updateValueWhenSetter(){if(this._errorText=this.error,""===this.value||void 0===this.value)return this._previousTimeValue="",this._errorFormat="",void(this._errorInvalidTime="");this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()}_setDateTimeValueSeparate(e,t){this._dateValue=t||this._dateInput.value,this._timeValue=this._dateValue&&Ti(t)?ui(e.time.slice(0,5)):this._previousTimeValue}update(e){e.has("value")&&(void 0===this.value&&this._setUndefinedValue(),""===this.value&&this._setEmptyValue()),(e.has("max")||e.has("min")||e.has("value"))&&void 0!==this.value&&(this._errorInvalidTime=""),super.update(e)}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat)return this._changeDateByUI?void(this._dateValue=this._dateInput.value):(this._dateValue="",void(this._timeValue=""));this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue="",this._errorFormat="",this._errorInvalidTime=""}render(){return $e`
        <fieldset
          class="kuc-datetime-picker-1-18-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-datetime-picker-1-18-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </legend>
          <div class="kuc-datetime-picker-1-18-0__group__inputs">
            <kuc-base-date-1-18-0
              class="kuc-datetime-picker-1-18-0__group__inputs--date"
              .value="${this._dateValue}"
              .language="${this._getLanguage()}"
              .disabled="${this.disabled}"
              inputAriaLabel="date"
              @kuc:base-date-change="${this._handleDateChange}"
            ></kuc-base-date-1-18-0
            ><kuc-base-time-1-18-0
              class="kuc-datetime-picker-1-18-0__group__inputs--time"
              .value="${this._timeValue}"
              .hour12="${this.hour12}"
              .disabled="${this.disabled}"
              .timeStep="${this._inputTimeStep}"
              .min="${this._inputMin}"
              .max="${this._inputMax}"
              .language="${this._getLanguage()}"
              @kuc:base-time-change="${this._handleTimeChange}"
            ></kuc-base-time-1-18-0>
          </div>
          <kuc-base-error-1-18-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-18-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_handleDateChange(e){e.stopPropagation(),e.preventDefault(),this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):(t=e.detail.value,this._errorFormat=""),this._updateDateTimeValue(t,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;const t=e.detail.value;e.detail.error?(this._errorInvalidTime=e.detail.error,this.error=""):this._errorInvalidTime="",this._updateDateTimeValue(t,"time")}_updateDateTimeValue(e,t){const i=this.value;"date"===t?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const n=this._errorFormat||this._errorInvalidTime?void 0:this._getDateTimeString(),o=this._errorFormat||this._errorInvalidTime?void 0:n;this.value=o,!this._validateDateTimeFormat()||this._dateValue||this._timeValue||(this.value="");const a={value:this.value,oldValue:i,changedPart:t};fi(this,"change",a)}_getDateTimeString(){if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return 3===e.length?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}_getDateTimeValue(e){if(""===e||void 0===e)return{date:"",time:""};const t=e.split("T"),i=t[0],n=t[1];if(e.indexOf("T")===e.length-1||t.length>2)return{date:i,time:""};if(!n)return{date:i,time:St};const[o,a,s]=n.split(":");if(""===o||""===a||""===s)return{date:i,time:n};const r=`${o}:${a||"00"}`;return s?{date:i,time:`${r}:${s}`}:{date:i,time:r}}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}cn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),cn([Fe({type:String})],e.prototype,"error",void 0),cn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),cn([Fe({type:String})],e.prototype,"label",void 0),cn([Fe({type:String,attribute:"lang",reflect:!0,converter:ri})],e.prototype,"language",void 0),cn([Fe({type:String})],e.prototype,"max",void 0),cn([Fe({type:String})],e.prototype,"min",void 0),cn([Fe({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),cn([Fe({type:Boolean})],e.prototype,"disabled",void 0),cn([Fe({type:Boolean})],e.prototype,"hour12",void 0),cn([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),cn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),cn([Fe({type:Number})],e.prototype,"timeStep",void 0),cn([Ke(".kuc-base-date-1-18-0__input")],e.prototype,"_dateInput",void 0),window.customElements.define("kuc-datetime-picker-1-18-0",e),vi('\nkuc-datetime-picker-1-18-0,\nkuc-datetime-picker-1-18-0 *,\nkuc-datetime-picker-1-18-0:lang(en),\nkuc-datetime-picker-1-18-0:lang(en) * {\n  font-family: sans-serif;\n}\nkuc-datetime-picker-1-18-0:lang(ja),\nkuc-datetime-picker-1-18-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-datetime-picker-1-18-0:lang(zh),\nkuc-datetime-picker-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-datetime-picker-1-18-0:lang(zh-TW),\nkuc-datetime-picker-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-datetime-picker-1-18-0:lang(es),\nkuc-datetime-picker-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\nkuc-datetime-picker-1-18-0 {\n  font-size: 14px;\n  display: inline-table;\n  vertical-align: top;\n  line-height: 1.5;\n  max-width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));\n  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));\n}\nkuc-datetime-picker-1-18-0[hidden] {\n  display: none;\n}\n.kuc-datetime-picker-1-18-0__group {\n  border: none;\n  padding: 0px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  margin: 0px;\n}\n.kuc-datetime-picker-1-18-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-datetime-picker-1-18-0__group__label[hidden] {\n  display: none;\n}\n.kuc-datetime-picker-1-18-0__group__inputs {\n  display: flex;\n  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));\n}\n.kuc-datetime-picker-1-18-0__group input[type=text].kuc-base-date-1-18-0__input {\n  width: var(--kuc-date-time-picker-date-input-width, 100px);\n  height: var(--kuc-date-time-picker-input-height, 40px);\n  color: var(--kuc-date-time-picker-input-color, #333333);\n  font-size: var(--kuc-date-time-picker-input-font-size, 14px);\n}\n.kuc-datetime-picker-1-18-0__group .kuc-base-time-1-18-0__group {\n  max-width: var(--kuc-date-time-picker-time-input-width, 85px);\n  width: var(--kuc-date-time-picker-time-input-width, 85px);\n  font-size: var(--kuc-date-time-picker-input-font-size, 14px);\n  height: var(--kuc-date-time-picker-input-height, 40px);\n  color: var(--kuc-date-time-picker-input-color, #333333);\n}\n.kuc-datetime-picker-1-18-0__group .kuc-base-time-1-18-0__group input[type=text].kuc-base-time-1-18-0__group__hours,\n.kuc-datetime-picker-1-18-0__group .kuc-base-time-1-18-0__group input[type=text].kuc-base-time-1-18-0__group__minutes,\n.kuc-datetime-picker-1-18-0__group .kuc-base-time-1-18-0__group input.kuc-base-time-1-18-0__group__suffix,\n.kuc-datetime-picker-1-18-0__group .kuc-base-time-1-18-0__group--focus  {\n  color: var(--kuc-date-time-picker-input-color, #333333);\n}\n'),hn=e}})();var _n=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let pn;(()=>{if(pn=window.customElements.get("kuc-dialog-1-18-0"),!pn){class e extends mi{constructor(e){super(),this.icon="",this.title="",this.content="",this.footer="",this.header="",this.container=document.body,this.footerVisible=!0,this._isOpened=!1,this._triggeredElement=null,this._content="",this._footer="",this._header="",this._GUID=ki();const t=Ci(e);Object.assign(this,t)}_handleFocusFirstDummy(){const e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_handleKeyDownDialog(e){"Escape"===e.key&&(e.preventDefault(),this.close())}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return Ce`
        <svg
          class="kuc-dialog-1-18-0__dialog__header__close-button-svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="#f7f9fa"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="#888888"
          />
        </svg>
      `}_getIconTemplate(){switch(this.icon){case"info":return Ce`
            <svg
              class="kuc-dialog-1-18-0__dialog__content__icon-info"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#448aca"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.71195 7.96235C8.81719 7.69023 8.67929 7.5524 8.5559 7.5524C7.98977 7.5524 7.24945 8.87059 6.97364 8.87059C6.86531 8.86323 6.77965 8.7783 6.77405 8.67269C6.77405 8.40057 7.44905 7.76444 7.64864 7.57007C8.25505 6.95498 9.08189 6.59163 9.95671 6.5558C10.6172 6.5558 11.3249 6.94808 10.7696 8.4147L9.66276 11.3656C9.53205 11.6338 9.44394 11.9198 9.40147 12.2138C9.3955 12.2661 9.41197 12.3186 9.44701 12.3587C9.48204 12.3988 9.53253 12.4231 9.58655 12.4258C10.0474 12.4258 10.893 11.1394 11.1107 11.1394C11.221 11.1597 11.2987 11.2565 11.2922 11.3656C11.2922 11.8038 9.49582 13.6804 7.9426 13.6804C7.38735 13.6804 7.00268 13.4224 7.00268 12.8499C7.00268 12.1219 7.52889 10.8815 7.63413 10.6235L8.71195 7.96235ZM9.53937 4.97962C9.55317 4.3095 10.114 3.77277 10.8023 3.77099C11.0868 3.75724 11.364 3.86105 11.5658 4.05686C11.7675 4.25267 11.8751 4.52229 11.862 4.79939C11.8604 5.12532 11.7247 5.43704 11.4853 5.66484C11.2459 5.89264 10.9228 6.01752 10.5882 6.01156C10.3033 6.02775 10.0251 5.92385 9.82434 5.72636C9.62362 5.52886 9.51981 5.25684 9.53937 4.97962Z"
                fill="white"
              />
            </svg>
          `;case"success":return Ce`
            <svg
              class="kuc-dialog-1-18-0__dialog__content__icon-success"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#2ecc71"
              />
              <path 
                d="M7.45159 10.3666L4.64513 7.44514L2.9032 9.32996L7.45159 13.9478L15.0967 6.59697L13.258 4.8064L7.45159 10.3666Z"
                fill="white"
              />
            </svg>
          `;case"error":return Ce`
            <svg
              class="kuc-dialog-1-18-0__dialog__content__icon-error"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                fill="#e74c3c"
              />
              <path
                d="M10.1497 8.99989L12.7572 6.39244L12.9339 6.21567L12.7572 6.03889L11.9617 5.24339L11.7849 5.06661L11.6081 5.24339L9.00063 7.85084L6.39317 5.24339L6.2164 5.06661L6.03962 5.24339L5.24412 6.03889L5.06734 6.21567L5.24412 6.39244L7.85159 8.99989L5.24412 11.6074L5.06734 11.7842L5.24412 11.9609L6.03962 12.7564L6.2164 12.9332L6.39317 12.7564L9.00063 10.1489L11.6081 12.7564L11.7849 12.9332L11.9617 12.7564L12.7572 11.9609L12.9339 11.7842L12.7572 11.6074L10.1497 8.99989Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          `;case"warning":return Ce`
            <svg
              class="kuc-dialog-1-18-0__dialog__content__icon-warning"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.09673 17.7173C13.9604 17.7173 17.9032 13.7933 17.9032 8.95287C17.9032 4.11243 13.9604 0.188477 9.09673 0.188477C4.23306 0.188477 0.290283 4.11243 0.290283 8.95287C0.290283 13.7933 4.23306 17.7173 9.09673 17.7173Z"
                fill="#ffcc00"
              />
              <path
                d="M7.74182 3.76978H10.645L9.91924 9.42423H8.46763L7.74182 3.76978Z"
                fill="#333333"
              />
              <rect
                x="7.74182"
                y="11.3088"
                width="2.90323"
                height="2.82722"
                rx="1"
                fill="#333333"
              />
            </svg>
          `;case"question":return Ce`
            <svg
              class="kuc-dialog-1-18-0__dialog__content__icon-question"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.87676C10.383 9.34006 10.1707 9.73991 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90432C7.89783 9.11869 8.32111 8.42752 9.1947 7.79043C9.2632 7.7432 9.91722 7.31559 9.91722 6.72573C9.91722 6.23647 9.54947 5.89467 9.022 5.89467C8.27063 5.89467 7.85168 6.27144 7.81166 6.99037C7.80589 7.08736 7.72549 7.16344 7.62815 7.16344H7.53044H5.64914C5.59902 7.16344 5.54999 7.14252 5.51574 7.10611C5.48149 7.07005 5.46274 7.02066 5.46562 6.97054C5.56802 4.97527 6.86452 3.83053 9.02416 3.83053C10.6614 3.83053 12.4248 4.71892 12.4248 6.66984C12.4248 7.97683 12.1266 8.22381 11.0933 8.87676ZM8.99982 0C4.02976 0 0 4.02948 0 9C0 13.9709 4.02976 18 8.99982 18C13.9702 18 18 13.9709 18 9C18 4.02948 13.9702 0 8.99982 0ZM10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1038 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1038 10.503 12.3061V14.5101Z"
                fill="#666666"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0933 8.8768C10.383 9.3401 10.1707 9.73995 10.1469 10.6575C10.1447 10.7581 10.0632 10.8371 9.96337 10.8371H8.08135C8.03123 10.8371 7.89783 10.7033 7.89783 10.6532V9.90436C7.89783 9.11872 8.32111 8.42755 9.1947 7.79047C9.2632 7.74323 9.91722 7.31562 9.91722 6.72577C9.91722 6.2365 9.54947 5.8947 9.022 5.8947C8.27063 5.8947 7.85168 6.27148 7.81166 6.99041C7.80589 7.0874 7.72549 7.16347 7.62815 7.16347H7.53044H5.64914C5.59902 7.16347 5.54999 7.14256 5.51574 7.10615C5.48149 7.07009 5.46274 7.0207 5.46562 6.97058C5.56802 4.97531 6.86452 3.83057 9.02416 3.83057C10.6614 3.83057 12.4248 4.71896 12.4248 6.66988C12.4248 7.97687 12.1266 8.22384 11.0933 8.8768V8.8768Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.503 14.5101C10.503 14.7124 10.3383 14.8775 10.136 14.8775H7.89742C7.69516 14.8775 7.53003 14.7124 7.53003 14.5101V12.3061C7.53003 12.1039 7.69516 11.9387 7.89742 11.9387H10.136C10.3383 11.9387 10.503 12.1039 10.503 12.3061V14.5101Z"
                fill="white"
              />
            </svg>
          `;default:return""}}shouldUpdate(e){if(e.has("container")){if(null===this.container||void 0===this.container)return this._isOpened&&this._close(),!1;const e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(mt),!1}return!0}update(e){e.has("content")&&(this._content=li(this.content)),e.has("footer")&&(this._footer=li(this.footer)),(e.has("header")||e.has("title"))&&(this._header=this.header?li(this.header):this.title),super.update(e)}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){if(!this._isValidContainerElement())return document.body.appendChild(this),requestAnimationFrame((()=>{document.body.removeChild(this)})),void this.performUpdate();this.container.appendChild(this),this.container.classList.add("kuc--has-dialog"),this.performUpdate(),this.setAttribute("opened",""),this._isOpened=!0,this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()}close(){this._close(),fi(this,"close")}_close(){this._isOpened=!1,document.getElementsByTagName("body")[0].classList.remove("kuc--has-dialog"),this.removeAttribute("opened"),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus()}render(){return $e`
        <span
          class="kuc-dialog-1-18-0__first-dummy"
          tabIndex="0"
          @focus="${this._handleFocusFirstDummy}"
        ></span>
        <div
          class="kuc-dialog-1-18-0__dialog"
          role="dialog"
          tabindex="-1"
          aria-labelledby="${this._GUID}-title"
          aria-modal="true"
          @keydown="${this._handleKeyDownDialog}"
        >
          <div class="kuc-dialog-1-18-0__dialog__header">
            <h2
              class="kuc-dialog-1-18-0__dialog__header__title"
              id="${this._GUID}-title"
            >
              ${this._header}
            </h2>
            <button
              class="kuc-dialog-1-18-0__dialog__header__close-button"
              type="button"
              aria-label="close"
              @click="${this._handleClickCloseButton}"
            >
              ${this._getCloseButtonSvgTemplate()}
            </button>
          </div>
          <div class="kuc-dialog-1-18-0__dialog__content">
            <div class="kuc-dialog-1-18-0__dialog__content__icon">
              ${this._getIconTemplate()}
            </div>
            <div class="kuc-dialog-1-18-0__dialog__content__content">
              ${this._content}
            </div>
          </div>
          <div
            class="kuc-dialog-1-18-0__dialog__footer"
            ?hidden="${!this.footerVisible}"
          >
            ${this._footer}
          </div>
        </div>
        <span
          class="kuc-dialog-1-18-0__last-dummy"
          tabIndex="0"
          @focus="${this._handleFocusLastDummy}"
        ></span>
        <div class="kuc-dialog-1-18-0__mask"></div>
      `}}_n([Fe({type:String})],e.prototype,"icon",void 0),_n([Fe({type:String})],e.prototype,"title",void 0),_n([Fe()],e.prototype,"content",void 0),_n([Fe()],e.prototype,"footer",void 0),_n([Fe()],e.prototype,"header",void 0),_n([Fe()],e.prototype,"container",void 0),_n([Fe({type:Boolean})],e.prototype,"footerVisible",void 0),_n([We()],e.prototype,"_isOpened",void 0),_n([Ke(".kuc-dialog-1-18-0__dialog")],e.prototype,"_dialogEl",void 0),_n([Je("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']")],e.prototype,"_focusableElements",void 0),window.customElements.define("kuc-dialog-1-18-0",e),vi('\n  kuc-dialog-1-18-0,\n  kuc-dialog-1-18-0 *,\n  kuc-dialog-1-18-0:lang(en),\n  kuc-dialog-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-dialog-1-18-0:lang(es),\n  kuc-dialog-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-dialog-1-18-0:lang(ja),\n  kuc-dialog-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-dialog-1-18-0:lang(zh),\n  kuc-dialog-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-dialog-1-18-0:lang(zh-TW),\n  kuc-dialog-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n\n  kuc-dialog-1-18-0 {\n    display: none;\n  }\n\n  kuc-dialog-1-18-0[opened] {\n    display: block;\n  }\n\n  .kuc-dialog-1-18-0__dialog {\n    min-width: 400px;\n    max-width: var(--kuc-dialog-max-width, 600px);\n    width: max-content;\n    font-size: 20px;\n    background-color: #ffffff;\n    position: fixed;\n    line-height: normal;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10000;\n  }\n  \n  .kuc-dialog-1-18-0__dialog:focus-visible {\n    outline: 1px solid #3498db;\n  }\n\n  .kuc-dialog-1-18-0__dialog__header {\n    min-height: 64px;\n    border-bottom: 1px solid #e3e7e8;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .kuc-dialog-1-18-0__dialog__header__title {\n    font-size: var(--kuc-dialog-header-font-size, 24px);\n    color: var(--kuc-dialog-header-color);\n    padding: 0 24px;\n    align-self: center;\n    overflow-wrap: anywhere;\n    word-break: normal;\n    font-weight: 400;\n  }\n\n  .kuc-dialog-1-18-0__dialog__header__close-button {\n    width: 48px;\n    height: 48px;\n    border: none;\n    background-color: #ffffff;\n    margin-right: 12px;\n    margin-top: 11px;\n    cursor: pointer;\n  }\n\n  .kuc-dialog-1-18-0__dialog__header__close-button:focus-visible {\n    outline: 1px solid #3498db;\n  }\n\n  .kuc-dialog-1-18-0__dialog__header__close-button-svg {\n    vertical-align: middle;\n  }\n\n  .kuc-dialog-1-18-0__dialog__content {\n    border-bottom: #e3e7e8 solid 1px;\n    background-color: #f7f9fa;\n    padding: 24px;\n    display: flex;\n    overflow: auto;\n  }\n\n  .kuc-dialog-1-18-0__dialog__content__content {\n    line-height: 1.2;\n    overflow-wrap: anywhere;\n    word-break: normal;\n  }\n\n  .kuc-dialog-1-18-0__dialog__content__icon-info,\n  .kuc-dialog-1-18-0__dialog__content__icon-success,\n  .kuc-dialog-1-18-0__dialog__content__icon-error,\n  .kuc-dialog-1-18-0__dialog__content__icon-warning,\n  .kuc-dialog-1-18-0__dialog__content__icon-question {\n    margin-right: 16px;\n    width: 24px;\n    height: 24px;\n  }\n\n  .kuc-dialog-1-18-0__dialog__footer {\n    padding: 24px;\n    overflow-wrap: anywhere;\n    word-break: normal;\n  }\n\n  .kuc-dialog-1-18-0__dialog__footer[hidden] {\n    display: none;\n  }\n\n  .kuc-dialog-1-18-0__mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #000000;\n    opacity: 0.6;\n    z-index: 9999;\n  }\n\n  .kuc--has-dialog {\n    overflow: hidden;\n  }\n\n  .kuc--has-dialog .kuc-dialog-1-18-0__dialog {\n    overflow-x: hidden;\n    overflow-y: auto;\n    max-height: 80vh;\n  }\n'),pn=e}})();var bn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let gn;(()=>{if(gn=window.customElements.get("kuc-dropdown-1-18-0"),!gn){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._DISABLED_CLASS="kuc-dropdown-1-18-0__group__select-menu__item--disabled",this._hasValueInItems=!1,this._GUID=ki();const t=Ci(e);this._handleClickDocument=this._handleClickDocument.bind(this),this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_getSelectedLabel(){const e=this.items.filter(((e,t)=>this._isCheckedItem(e,t)));return 0===e.length?"":void 0===e[0].label?e[0].value:e[0].label}_getToggleIconSvgTemplate(){return Ce`
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z"
          fill="#3498db"/>
      </svg>
    `}shouldUpdate(e){return e.has("items")&&!Mi(this.items)?(this.throwErrorAfterUpdateComplete(ot),!1):e.has("value")&&!Ai(this.value)?(this.throwErrorAfterUpdateComplete(dt),!1):!(e.has("selectedIndex")&&!Hi(this.selectedIndex)&&(this.throwErrorAfterUpdateComplete(ct),1))}willUpdate(e){if((e.has("items")||e.has("value"))&&(this._hasValueInItems=this.items.some((e=>e.value===this.value))),e.has("value")){if(""!==this.value||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}render(){return $e`
        <div class="kuc-dropdown-1-18-0__group">
          <div
            class="kuc-dropdown-1-18-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </div>
          <button
            class="kuc-dropdown-1-18-0__group__toggle"
            id="${this._GUID}-toggle"
            type="button"
            aria-haspopup="true"
            aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled}"
            @mouseup="${this._handleMouseUpDropdownToggle}"
            @mousedown="${this._handleMouseDownDropdownToggle}"
            @click="${this._handleClickDropdownToggle}"
            @keydown="${this._handleKeyDownDropdownToggle}"
          >
            <span class="kuc-dropdown-1-18-0__group__toggle__selected-item-label"
              >${this._getSelectedLabel()}</span
            >
            <span class="kuc-dropdown-1-18-0__group__toggle__icon">
              ${this._getToggleIconSvgTemplate()}
            </span>
          </button>
          <ul
            class="kuc-dropdown-1-18-0__group__select-menu"
            role="listbox"
            aria-hidden="${!this._selectorVisible}"
            ?hidden="${!this._selectorVisible}"
            @mouseleave="${this._handleMouseLeaveMenu}"
            @mousedown="${this._handleMouseDownMenu}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </ul>
          <kuc-base-error-1-18-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-18-0>
        </div>
      `}firstUpdated(){window.addEventListener("resize",(()=>{this._actionResizeScrollWindow()})),window.addEventListener("scroll",(()=>{this._actionResizeScrollWindow()}))}async updated(){await this.updateComplete,this._selectorVisible?(this._setMenuPosition(),this._scrollToView(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument,!0)}),1)):setTimeout((()=>{document.removeEventListener("click",this._handleClickDocument,!0)}),1)}_handleMouseDownDropdownItem(e){const t=this._getItemElementWhenMouseOverDown(e.target),i=t.getAttribute("value"),n=t.dataset.index||"0";this._actionUpdateValue(i,n)}_handleMouseOverDropdownItem(e){const t=this._getItemElementWhenMouseOverDown(e.target);this._actionHighlightMenuItem(t)}_handleMouseLeaveMenu(){this._actionClearAllHighlightMenuItem()}_handleMouseDownMenu(e){e.preventDefault()}_handleMouseDownDropdownToggle(e){e.preventDefault()}_handleMouseUpDropdownToggle(e){e.preventDefault()}_handleClickDropdownToggle(e){e.stopPropagation(),this._actionToggleMenu()}_handleClickDocument(e){(e.target===this._buttonEl||this._buttonEl.contains(e.target))&&e.stopPropagation(),Array.from(this._disabledItemsEl).some((t=>t===e.target||t.contains(e.target)))||this._actionHideMenu()}_handleKeyDownDropdownToggle(e){switch(e.key){case"Up":case"ArrowUp":if(e.preventDefault(),0===this.items.length)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightPrevMenuItem();break;case"Tab":this._selectorVisible&&this._actionHideMenu();break;case"Down":case"ArrowDown":if(e.preventDefault(),0===this.items.length)break;if(!this._selectorVisible){this._actionShowMenu();break}this._actionHighlightNextMenuItem();break;case"Enter":{if(e.preventDefault(),0===this.items.length)break;if(!this._selectorVisible){this._actionShowMenu();break}const{value:t,selectedIndex:i}=this._getInfoHighlightItem();if(null===t)break;this._actionUpdateValue(t,i),this._actionHideMenu();break}case"Escape":e.preventDefault(),this._selectorVisible&&e.stopPropagation(),this._actionHideMenu();break;case"Home":this._selectorVisible&&(e.preventDefault(),this._actionHighlightFirstMenuItem());break;case"End":this._selectorVisible&&(e.preventDefault(),this._actionHighlightLastMenuItem())}}_getInfoHighlightItem(){const e=this._highlightItemEl;return null===e?{value:null,selectedIndex:"-1"}:{value:e.getAttribute("value"),selectedIndex:e.dataset.index||"0"}}_actionShowMenu(){this._buttonEl.focus(),0!==this.items.length&&(this._selectorVisible=!0,null===this._selectedItemEl||this._selectedItemEl.classList.contains(this._DISABLED_CLASS)||this._setHighlightAndActiveDescendantMenu(this._selectedItemEl))}_actionHideMenu(){this._selectorVisible=!1,this._actionRemoveActiveDescendant()}_actionToggleMenu(){0!==this.items.length&&(this._selectorVisible?this._actionHideMenu():this._actionShowMenu())}_actionHighlightFirstMenuItem(){let e=this._firstItemEl,t=!1;for(let i=0;i<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.nextElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightLastMenuItem(){let e=this._lastItemEl,t=!1;for(let i=0;i<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.previousElementSibling;!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightPrevMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.previousElementSibling),null===e&&(e=this._lastItemEl);let t=!1;for(let i=0;i<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.previousElementSibling,null===e&&(e=this._lastItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionHighlightNextMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.nextElementSibling),null===e&&(e=this._firstItemEl);let t=!1;for(let i=0;i<this.items.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.nextElementSibling,null===e&&(e=this._firstItemEl);!t&&this._setHighlightAndActiveDescendantMenu(e)}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach((e=>{e.classList.remove("kuc-dropdown-1-18-0__group__select-menu__highlight")})),this._actionRemoveActiveDescendant()}_setHighlightAndActiveDescendantMenu(e){this._actionHighlightMenuItem(e),this._actionSetActiveDescendant(e.id),this._scrollToView()}_actionHighlightMenuItem(e){this._actionClearAllHighlightMenuItem(),e.classList.add("kuc-dropdown-1-18-0__group__select-menu__highlight")}_actionUpdateValue(e,t){const i=parseInt(t,10);if(this.value===e&&this.selectedIndex===i)return;const n={oldValue:this.value,value:e};this.value=e,this.selectedIndex=i,fi(this,"change",n)}_actionSetActiveDescendant(e){void 0!==e&&null!==this._buttonEl&&this._buttonEl.setAttribute("aria-activedescendant",e)}_actionRemoveActiveDescendant(){this._buttonEl.removeAttribute("aria-activedescendant")}_getScrollbarWidthHeight(){const e=document.createElement("div");e.style.cssText="overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth,i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{scrollbarWidth:t,scrollbarHeight:i}}_getDistanceToggleButton(){const{scrollbarWidth:e,scrollbarHeight:t}=this._getScrollbarWidthHeight(),i=document.body.scrollHeight>window.innerHeight,n=document.body.scrollWidth>window.innerWidth;return{toTop:this._buttonEl.getBoundingClientRect().top,toBottom:window.innerHeight-this._buttonEl.getBoundingClientRect().bottom-(n?t:0),toLeft:this._buttonEl.getBoundingClientRect().left,toRight:window.innerWidth-this._buttonEl.getBoundingClientRect().left-(i?e:0)}}_setMenuPositionAboveOrBelow(){this._menuEl.style.height="auto",this._menuEl.style.bottom="auto",this._menuEl.style.overflowY="";const e=this._menuEl.getBoundingClientRect().height,t=this._getDistanceToggleButton();if(!(t.toBottom>=e))if(t.toBottom<t.toTop){const i=this._errorEl.offsetHeight?this._errorEl.offsetHeight+16:0;if(this._menuEl.style.bottom=`${this._buttonEl.offsetHeight+i}px`,t.toTop>=e)return;this._menuEl.style.height=`${t.toTop}px`,this._menuEl.style.overflowY="scroll"}else this._menuEl.style.height=`${t.toBottom}px`,this._menuEl.style.overflowY="scroll"}_setMenuPositionLeftOrRight(){this._menuEl.style.right="auto";const e=this._menuEl.getBoundingClientRect().width,t=this._getDistanceToggleButton();if(t.toRight>=e||t.toLeft<e||t.toRight<0)return;const i=this._buttonEl.offsetWidth-t.toRight;this._menuEl.style.right=i>0?`${i}px`:"0px"}_setMenuPosition(){this._setMenuPositionAboveOrBelow(),this._setMenuPositionLeftOrRight()}_scrollToView(){if(!this._highlightItemEl||!this._menuEl)return;const e=this._menuEl.getBoundingClientRect(),t=this._highlightItemEl.getBoundingClientRect();t.top<e.top&&(this._menuEl.scrollTop-=e.top-t.top),e.bottom<t.bottom&&(this._menuEl.scrollTop+=t.bottom-e.bottom)}_actionResizeScrollWindow(){!this._timeoutID&&this._selectorVisible&&(this._timeoutID=window.setTimeout((()=>{this._timeoutID=null,this._setMenuPosition()}),50))}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return $e`
        <li
          class="kuc-dropdown-1-18-0__group__select-menu__item ${e.disabled?this._DISABLED_CLASS:""}"
          role="option"
          tabindex="${!e.disabled&&i?"0":"-1"}"
          aria-selected="${i?"true":"false"}"
          data-index="${t}"
          value="${void 0!==e.value?e.value:""}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${e.disabled?null:this._handleMouseDownDropdownItem}"
          @mouseover="${e.disabled?null:this._handleMouseOverDropdownItem}"
        >
          ${this._getDropdownIconSvgTemplate(i,!!e.disabled)}
          ${void 0===e.label?e.value:e.label}
        </li>
      `}_getDropdownIconSvgTemplate(e,t){return Ce`
      ${e?Ce`<svg
          class="kuc-dropdown-1-18-0__group__select-menu__item__icon"
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
            fill="${t?"#888888":"#3498db"}"/>
        </svg>`:""}`}_getItemElementWhenMouseOverDown(e){return e.classList.value.split(" ").includes("kuc-dropdown-1-18-0__group__select-menu__item")?e:this._getItemElementWhenMouseOverDown(e.parentElement)}}bn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),bn([Fe({type:String})],e.prototype,"error",void 0),bn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),bn([Fe({type:String})],e.prototype,"label",void 0),bn([Fe({type:String})],e.prototype,"value",void 0),bn([Fe({type:Number})],e.prototype,"selectedIndex",void 0),bn([Fe({type:Boolean})],e.prototype,"disabled",void 0),bn([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),bn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),bn([Fe({type:Array})],e.prototype,"items",void 0),bn([We()],e.prototype,"_selectorVisible",void 0),bn([Ke(".kuc-dropdown-1-18-0__group__select-menu")],e.prototype,"_menuEl",void 0),bn([Je(".kuc-dropdown-1-18-0__group__select-menu__item")],e.prototype,"_itemsEl",void 0),bn([Ke("button.kuc-dropdown-1-18-0__group__toggle")],e.prototype,"_buttonEl",void 0),bn([Ke(".kuc-dropdown-1-18-0__group__select-menu__item")],e.prototype,"_firstItemEl",void 0),bn([Ke(".kuc-dropdown-1-18-0__group__select-menu__item:last-child")],e.prototype,"_lastItemEl",void 0),bn([Ke(".kuc-dropdown-1-18-0__group__select-menu__item[aria-selected=true]")],e.prototype,"_selectedItemEl",void 0),bn([Ke(".kuc-dropdown-1-18-0__group__select-menu__highlight")],e.prototype,"_highlightItemEl",void 0),bn([Je(".kuc-dropdown-1-18-0__group__select-menu__item--disabled")],e.prototype,"_disabledItemsEl",void 0),bn([Ke(".kuc-base-error-1-18-0__error")],e.prototype,"_errorEl",void 0),window.customElements.define("kuc-dropdown-1-18-0",e),vi('\n  kuc-dropdown-1-18-0,\n  kuc-dropdown-1-18-0 *,\n  kuc-dropdown-1-18-0:lang(en),\n  kuc-dropdown-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-dropdown-1-18-0:lang(es),\n  kuc-dropdown-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-dropdown-1-18-0:lang(ja),\n  kuc-dropdown-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-dropdown-1-18-0:lang(zh),\n  kuc-dropdown-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-dropdown-1-18-0:lang(zh-TW),\n  kuc-dropdown-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-dropdown-1-18-0 {\n    display: inline-table;\n    font-size: 14px;\n    color: #333333;\n    vertical-align: top;\n    width: var(--kuc-dropdown-toggle-width, 180px);\n    min-width: var(--kuc-dropdown-toggle-width, 180px);\n    line-height: 1.5;\n  }\n  kuc-dropdown-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-18-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    margin: 0px;\n    position: relative;\n  }\n  .kuc-dropdown-1-18-0__group__label {\n    padding: 4px 0px 8px 0px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .kuc-dropdown-1-18-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-18-0__group__toggle {\n    height: var(--kuc-dropdown-toggle-height, 40px);\n    box-sizing: border-box;\n    box-shadow: 1px 1px 1px #ffffff inset;\n    border: 1px solid #e3e7e8;\n    color: var(--kuc-dropdown-toggle-color, #3498db);\n    background-color: #f7f9fa;\n    padding: 0 0 0 24px;\n    display: grid;\n    grid: auto / auto-flow;\n    align-items: center;\n    align-content: center;\n    justify-content: space-between;\n    width: var(--kuc-dropdown-toggle-width, 100%);\n    cursor: pointer;\n  }\n  .kuc-dropdown-1-18-0__group__toggle:focus {\n    outline: none;\n    border: 1px solid #3498db;\n  }\n  .kuc-dropdown-1-18-0__group__toggle:disabled {\n    background-color: #d4d7d7;\n    box-shadow: none;\n    cursor: not-allowed;\n    color: #888888;\n  }\n  .kuc-dropdown-1-18-0__group__toggle__selected-item-label {\n    font-size: var(--kuc-dropdown-font-size, 14px);\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .kuc-dropdown-1-18-0__group__toggle__icon {\n    flex: none;\n    width: 38px;\n    height: 38px;\n  }\n  .kuc-dropdown-1-18-0__group__select-menu {\n    position: absolute;\n    min-width: 280px;\n    margin: 0;\n    padding: 8px 0;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n    background-color: #ffffff;\n    z-index: 2000;\n    list-style: none;\n    box-sizing: border-box;\n  }\n  .kuc-dropdown-1-18-0__group__select-menu[hidden] {\n    display: none;\n  }\n  .kuc-dropdown-1-18-0__group__select-menu__item {\n    padding: 8px 16px 8px 24px;\n    line-height: 1;\n    position: relative;\n    cursor: pointer;\n    white-space: nowrap;\n    color: var(--kuc-dropdown-menu-color, #333333);\n    font-size: var(--kuc-dropdown-font-size, 14px);\n  }\n  .kuc-dropdown-1-18-0__group__select-menu__item__icon {\n    position: absolute;\n    top: 50%;\n    left: 6px;\n    margin-top: -5px;\n  }\n  .kuc-dropdown-1-18-0__group__select-menu__item[aria-selected="true"] {\n    color: var(--kuc-dropdown-menu-color-selected, #3498db);\n  }\n  .kuc-dropdown-1-18-0__group__select-menu__highlight[role="option"] {\n    background-color: #e2f2fe;\n  }\n  .kuc-dropdown-1-18-0__group__select-menu__item--disabled,\n  .kuc-dropdown-1-18-0__group__select-menu__item--disabled[aria-selected="true"] {\n    background-color: #d4d7d7;\n    cursor: not-allowed;\n    color: #888888;\n  }\n'),gn=e}})();const mn=gn;var fn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};const vn=517;let kn;(()=>{if(kn=window.customElements.get("kuc-field-group-1-18-0"),!kn){class e extends mi{constructor(e){super(),this.className="",this.content="",this.id="",this.label="",this.disabled=!1,this.expanded=!1,this.visible=!0,this._content="",this._GUID=ki();const t=Ci(e);Object.assign(this,t)}update(e){e.has("content")&&(this._content=li(this.content)),super.update(e)}render(){return $e`
        <div
          class="kuc-field-group-1-18-0__group"
          role="group"
          aria-labelledby="${this._GUID}-control"
        >
          <button
            type="button"
            id="${this._GUID}-control"
            class="kuc-field-group-1-18-0__group__toggle"
            aria-controls="${this._GUID}-body"
            aria-expanded="${this.expanded&&!this.disabled}"
            ?disabled="${this.disabled}"
            @click="${this._handleClickButton}"
            @keydown="${this._handleKeyDownButton}"
          >
            ${this._getSvgTemplate()}
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${!1}"
            ></kuc-base-label-1-18-0>
          </button>
          <div
            id="${this._GUID}-body"
            class="kuc-field-group-1-18-0__group__body"
            ?hidden="${!this.expanded||this.disabled}"
            @change="${this._handleChangeBody}"
          >
            ${this._content}
          </div>
        </div>
      `}updated(e){e.has("content")&&(this._groupEl.style.minWidth=vn+"px",requestAnimationFrame((()=>{this._updateContainerWidth()})))}_updateContainerWidth(){if(!this._bodyEl)return;const e=this._bodyEl.hasAttribute("hidden");e&&this._bodyEl.removeAttribute("hidden");const t=this._bodyEl.offsetWidth;e&&this._bodyEl.setAttribute("hidden",""),t<=vn||(this._groupEl.style.minWidth=t+"px")}_getSvgTemplate(){return this.expanded?$e`<svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7122 0.5L12.5 1.03608L7.23318 7.11548L5.76682 7.11548L0.5 1.03608L1.2878 0.5L6.26504 6.19318L6.73496 6.19318L11.7122 0.5Z"
              fill="#939393"
            />
          </svg>`:$e`<svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 1.2878L1.03608 0.5L7.11548 5.76682V7.23318L1.03608 12.5L0.5 11.7122L6.19318 6.73496V6.26504L0.5 1.2878Z"
              fill="#939393"
            />
          </svg> `}_handleChangeBody(e){e.stopPropagation()}_handleKeyDownButton(e){"Tab"!==e.key&&(e.preventDefault(),"Enter"!==e.key&&" "!==e.key||this._handleClickButton(e))}_handleClickButton(e){if(e.target!==document.activeElement&&this._toggle.focus(),this.expanded){const e=this._bodyEl.getBoundingClientRect().width;e>vn&&(this._groupEl.style.minWidth=e+"px")}else this._groupEl.style.minWidth=vn+"px";this.expanded=!this.expanded;const t={expanded:this.expanded};fi(this,"change",t)}}fn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),fn([Fe()],e.prototype,"content",void 0),fn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),fn([Fe({type:String})],e.prototype,"label",void 0),fn([Fe({type:Boolean})],e.prototype,"disabled",void 0),fn([Fe({type:Boolean})],e.prototype,"expanded",void 0),fn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),fn([Ke(".kuc-field-group-1-18-0__group")],e.prototype,"_groupEl",void 0),fn([Ke(".kuc-field-group-1-18-0__group__body")],e.prototype,"_bodyEl",void 0),fn([Ke(".kuc-field-group-1-18-0__group__toggle")],e.prototype,"_toggle",void 0),window.customElements.define("kuc-field-group-1-18-0",e),vi('\n  kuc-field-group-1-18-0 .kuc-field-group-1-18-0__group__toggle .kuc-base-label-1-18-0__text,\n  kuc-field-group-1-18-0:lang(en) .kuc-field-group-1-18-0__group__toggle .kuc-base-label-1-18-0__text {\n    font-family: sans-serif;\n  }\n  kuc-field-group-1-18-0:lang(es) .kuc-field-group-1-18-0__group__toggle .kuc-base-label-1-18-0__text {\n    font-family: sans-serif;\n  }\n  kuc-field-group-1-18-0:lang(ja) .kuc-field-group-1-18-0__group__toggle .kuc-base-label-1-18-0__text {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-field-group-1-18-0:lang(zh) .kuc-field-group-1-18-0__group__toggle .kuc-base-label-1-18-0__text {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-field-group-1-18-0:lang(zh-TW) .kuc-field-group-1-18-0__group__toggle .kuc-base-label-1-18-0__text {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-field-group-1-18-0 {\n    display: inline-table;\n  }\n  kuc-field-group-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-field-group-1-18-0__group {\n    min-width: 517px;\n    padding: 0px 8px;\n    border: 1px solid #e3e7e8;\n    background-color: #f5f5f5;\n  }\n  .kuc-field-group-1-18-0__group h3 {\n    margin: 0px;\n    padding: 0px;\n  }\n  .kuc-field-group-1-18-0__group__toggle {\n    display: flex;\n    align-items: center;\n    border-style: none;\n    position: relative;\n    outline: none;\n    margin: 12px 0px 12px 8px;\n    min-height: 34px;\n    padding: 4px 8px 4px 24px;\n    color: #333333;\n    font-size: 16px;\n    cursor: pointer;\n    border: 1px solid transparent;\n    background-color: inherit;\n    line-height: 1.5;\n  }\n  .kuc-field-group-1-18-0__group__toggle:disabled {\n    color: rgba(0, 0, 0, 0.25);\n    cursor: not-allowed;\n  }\n  .kuc-field-group-1-18-0__group__toggle:disabled .kuc-base-label-1-18-0__text {\n    color: rgba(0, 0, 0, 0.25);\n    cursor: not-allowed;\n  }\n  .kuc-field-group-1-18-0__group__toggle .kuc-base-label-1-18-0__text {\n    font-size: 16px;\n  }\n  .kuc-field-group-1-18-0__group__toggle:disabled:focus {\n    outline: 0;\n    border: 1px solid transparent;\n  }\n  .kuc-field-group-1-18-0__group__toggle:focus {\n    outline: 0;\n    border: 1px solid #3498db;\n  }\n  .kuc-field-group-1-18-0__group__toggle svg {\n    position: absolute;\n    left: 8px;\n  }\n  .kuc-field-group-1-18-0__group__body {\n    padding: 0px 8px;\n    margin-left: 0px;\n    white-space: nowrap;\n    word-wrap: normal;\n    margin-bottom: 12px;\n  }\n'),kn=e}})();var yn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let xn;(()=>{if(xn=window.customElements.get("kuc-multi-choice-1-18-0"),!xn){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._DISABLED_CLASS="kuc-multi-choice-1-18-0__group__menu__item--disabled",this._GUID=ki();const t=Ci(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Mi(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}shouldUpdate(e){return e.has("items")&&!Mi(this.items)?(this.throwErrorAfterUpdateComplete(ot),!1):e.has("value")&&!Mi(this.value)?(this.throwErrorAfterUpdateComplete(lt),!1):!(e.has("selectedIndex")&&!Mi(this.selectedIndex)&&(this.throwErrorAfterUpdateComplete(ut),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return $e`
        <div class="kuc-multi-choice-1-18-0__group">
          <div
            class="kuc-multi-choice-1-18-0__group__label"
            id="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </div>
          <div
            class="kuc-multi-choice-1-18-0__group__menu"
            role="listbox"
            aria-multiselectable="true"
            aria-describedby="${this._GUID}-error"
            aria-labelledby="${this._GUID}-label"
            ?disabled="${this.disabled}"
            tabindex="${this.disabled?"-1":"0"}"
            @keydown="${this._handleKeyDownMultiChoice}"
          >
            ${this.items.map(((e,t)=>this._getMenuItemTemplate(e,t)))}
          </div>
          <kuc-base-error-1-18-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-18-0>
        </div>
      `}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_handleMouseDownMultiChoiceItem(e){if(this.disabled)return;const t=e.target,i=t.getAttribute("value"),n=t.dataset.index||"0";this._handleChangeValue(i,n)}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach((e=>{e.classList.contains("kuc-multi-choice-1-18-0__group__menu__highlight")&&e.classList.remove("kuc-multi-choice-1-18-0__group__menu__highlight")}));const t=e.currentTarget;t.classList.add("kuc-multi-choice-1-18-0__group__menu__highlight"),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){this.disabled||(e.currentTarget.classList.remove("kuc-multi-choice-1-18-0__group__menu__highlight"),this._setActiveDescendant())}_handleKeyDownMultiChoice(e){if(!this.disabled)switch(e.key){case"Up":case"ArrowUp":if(e.preventDefault(),0===this.items.length)break;this._actionHighlightPrevMenuItem();break;case"Down":case"ArrowDown":if(e.preventDefault(),0===this.items.length)break;this._actionHighlightNextMenuItem();break;case"Spacebar":case" ":e.preventDefault(),this._actionUpdateValue()}}_actionHighlightPrevMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.previousElementSibling),null===e&&(e=this._lastItemEl,null===this._highlightItemEl&&(e=this._firstItemEl));let t=!1;this._actionClearAllHighlightMenuItem();for(let i=0;i<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.previousElementSibling,null===e&&(e=this._lastItemEl);t||(e.classList.add("kuc-multi-choice-1-18-0__group__menu__highlight"),this._setActiveDescendant(e.id))}_actionHighlightNextMenuItem(){let e=null;null!==this._highlightItemEl&&(e=this._highlightItemEl.nextElementSibling),null===e&&(e=this._firstItemEl);let t=!1;this._actionClearAllHighlightMenuItem();for(let i=0;i<this._itemsEl.length&&(t=e.classList.contains(this._DISABLED_CLASS),t);i++)e=e.nextElementSibling,null===e&&(e=this._firstItemEl);t||(e.classList.add("kuc-multi-choice-1-18-0__group__menu__highlight"),this._setActiveDescendant(e.id))}_actionClearAllHighlightMenuItem(){this._itemsEl.forEach((e=>{e.classList.remove("kuc-multi-choice-1-18-0__group__menu__highlight")}))}_actionUpdateValue(){this._itemsEl.forEach((e=>{if(e.classList.contains("kuc-multi-choice-1-18-0__group__menu__highlight")){const t=e.getAttribute("value"),i=e.dataset.index||"0";this._handleChangeValue(t,i)}}))}_getMultiChoiceCheckedIconSvgTemplate(e,t){return Ce`
        ${t?Ce`<svg
            class="kuc-multi-choice-1-18-0__group__menu__item__icon"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z"
              fill="${e?"#888888":"#3498db"}"
            />
          </svg>`:""}`}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getMenuItemTemplate(e,t){const i=this._isCheckedItem(e,t),n=e.disabled||this.disabled;return $e`
        <div
          class="kuc-multi-choice-1-18-0__group__menu__item ${n?this._DISABLED_CLASS:""}"
          role="option"
          aria-selected="${i}"
          aria-required="${this.requiredIcon}"
          data-index="${t}"
          value="${void 0!==e.value?e.value:""}"
          id="${this._GUID}-menuitem-${t}"
          @mousedown="${n?null:this._handleMouseDownMultiChoiceItem}"
          @mouseover="${n?null:this._handleMouseOverMultiChoiceItem}"
          @mouseleave="${n?null:this._handleMouseLeaveMultiChoiceItem}"
        >
          ${this._getMultiChoiceCheckedIconSvgTemplate(n,i)}
          ${void 0===e.label?e.value:e.label}
        </div>
      `}_setActiveDescendant(e){void 0!==e&&null!==this._menuEl?this._menuEl.setAttribute("aria-activedescendant",e):this._menuEl.removeAttribute("aria-activedescendant")}_handleChangeValue(e,t){const i=this.value?[...this.value]:this.value,n=this._getNewValueMapping(e,t),o=this.items.map((e=>e.value)),a=Object.values(n).filter((e=>o.indexOf(e)>-1));if(a===i)return;const s=Object.keys(n).map((e=>parseInt(e,10)));this.value=a,this.selectedIndex=s,fi(this,"change",{oldValue:i,value:a})}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}}yn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),yn([Fe({type:String})],e.prototype,"error",void 0),yn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),yn([Fe({type:String})],e.prototype,"label",void 0),yn([Fe({type:Boolean})],e.prototype,"disabled",void 0),yn([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),yn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),yn([Fe({type:Array})],e.prototype,"items",void 0),yn([Fe({type:Array})],e.prototype,"selectedIndex",void 0),yn([Fe({type:Array})],e.prototype,"value",void 0),yn([Ke(".kuc-multi-choice-1-18-0__group__menu")],e.prototype,"_menuEl",void 0),yn([Je(".kuc-multi-choice-1-18-0__group__menu__item")],e.prototype,"_itemsEl",void 0),yn([Ke(".kuc-multi-choice-1-18-0__group__menu__item")],e.prototype,"_firstItemEl",void 0),yn([Ke(".kuc-multi-choice-1-18-0__group__menu__item:last-child")],e.prototype,"_lastItemEl",void 0),yn([Ke(".kuc-multi-choice-1-18-0__group__menu__highlight")],e.prototype,"_highlightItemEl",void 0),yn([We()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-multi-choice-1-18-0",e),vi('\n  kuc-multi-choice-1-18-0,\n  kuc-multi-choice-1-18-0 *,\n  kuc-multi-choice-1-18-0:lang(en),\n  kuc-multi-choice-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-multi-choice-1-18-0:lang(es),\n  kuc-multi-choice-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-multi-choice-1-18-0:lang(ja),\n  kuc-multi-choice-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-multi-choice-1-18-0:lang(zh),\n  kuc-multi-choice-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-multi-choice-1-18-0:lang(zh-TW),\n  kuc-multi-choice-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-multi-choice-1-18-0 {\n    display: inline-table;\n    font-size: 14px;\n    color: var(--kuc-multi-choice-menu-color, #333333);\n    width: var(--kuc-multi-choice-menu-width, 180px);\n    min-width: var(--kuc-multi-choice-menu-width, 180px);\n    line-height: 1.5;\n  }\n  kuc-multi-choice-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-multi-choice-1-18-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    margin: 0px;\n  }\n  .kuc-multi-choice-1-18-0__group__label {\n    padding: 4px 0px 8px 0px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .kuc-multi-choice-1-18-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-multi-choice-1-18-0__group__menu {\n    position: relative;\n    background: #ffffff;\n    border: 1px solid #e3e7e8;\n    box-sizing: border-box;\n    box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;\n    padding: 6px 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: var(--kuc-multi-choice-menu-height, auto);\n    max-height: var(--kuc-multi-choice-menu-height, 134px);\n    width: var(--kuc-multi-choice-menu-width, auto);\n    font-size: var(--kuc-multi-choice-menu-font-size, 14px);\n  }\n  .kuc-multi-choice-1-18-0__group__menu:not([disabled]):focus {\n    outline: none;\n    border: 1px solid #3498db;\n  }\n  .kuc-multi-choice-1-18-0__group__menu[disabled] {\n    background-color: #dbdcdd;\n    box-shadow: none;\n    cursor: not-allowed;\n    color: #888888;\n    outline: none;\n  }\n  .kuc-multi-choice-1-18-0__group__menu__item {\n    padding: 4px 16px;\n    margin-bottom: 2px;\n    line-height: 1;\n    position: relative;\n    white-space: nowrap;\n  }\n  .kuc-multi-choice-1-18-0__group__menu__item__icon {\n    position: absolute;\n    top: 50%;\n    left: 16px;\n    margin-top: -6px;\n    pointer-events: none;\n  }\n  .kuc-multi-choice-1-18-0__group__menu__item--disabled {\n    background-color: #d4d7d7;\n    cursor: not-allowed;\n    color: #888888;\n  }\n  .kuc-multi-choice-1-18-0__group__menu__item[aria-selected="true"] {\n    color: var(--kuc-multi-choice-menu-color-selected, #3498db);\n    padding-left: 32px;\n  }\n  .kuc-multi-choice-1-18-0__group__menu__item--disabled[aria-selected="true"] {\n    color: #888888;\n    padding-left: 32px;\n  }\n  .kuc-multi-choice-1-18-0__group__menu[disabled]\n    .kuc-multi-choice-1-18-0__group__menu__item[aria-selected="true"] {\n    color: #888888;\n  }\n  .kuc-multi-choice-1-18-0__group__menu__highlight[role="option"] {\n    background-color: var(--kuc-multi-choice-menu-background-color-hover, #e2f2fe);\n    cursor: pointer;\n  }\n'),xn=e}})();var wn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let $n;(()=>{if($n=window.customElements.get("kuc-notification-1-18-0"),!$n){class e extends mi{constructor(e){super(),this.className="",this.text="",this.type="danger",this.duration=-1,this.container=document.body,this._isOpened=!1;const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){if(e.has("container")){if(null===this.container||void 0===this.container)return this._isOpened&&this._close(),!1;const e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(mt),!1}return!0}_isValidContainerElement(){return this.container instanceof HTMLElement}_handleClickCloseButton(e){this.close()}_getCloseButtonColorType(){switch(this.type){case"info":case"success":return this.type;default:return"danger"}}_getCloseButtonSvgTemplate(){return Ce`
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close button</title>
          <path
            class="kuc-notification-1-18-0__notification__close-button__icon-background--${this._getCloseButtonColorType()}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
            fill="white"
          />
        </svg>
      `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement())return document.body.appendChild(this),requestAnimationFrame((()=>{document.body.removeChild(this)})),void this.performUpdate();this.container.appendChild(this),this.performUpdate(),this.classList.remove("kuc-notification-fadeout-1-18-0"),this.classList.add("kuc-notification-fadein-1-18-0"),this._isOpened=!0,this._setAutoCloseTimer()}_close(){this._isOpened=!1,this.classList.remove("kuc-notification-fadein-1-18-0"),this.classList.add("kuc-notification-fadeout-1-18-0"),this._clearAutoCloseTimer()}close(){this._close(),fi(this,"close")}render(){return $e`
        <div
          class="kuc-notification-1-18-0__notification kuc-notification-1-18-0__notification--${this.type}"
        >
          <pre
            class="kuc-notification-1-18-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?"alert":""}"
          ><!--
          -->${this.text}</pre>
          <button
            class="kuc-notification-1-18-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}wn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),wn([Fe({type:String})],e.prototype,"text",void 0),wn([Fe({type:String})],e.prototype,"type",void 0),wn([Fe({type:Number})],e.prototype,"duration",void 0),wn([Fe()],e.prototype,"container",void 0),wn([We()],e.prototype,"_isOpened",void 0),window.customElements.define("kuc-notification-1-18-0",e),vi('\n  kuc-notification-1-18-0,\n  kuc-notification-1-18-0 *,\n  kuc-notification-1-18-0:lang(en),\n  kuc-notification-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-notification-1-18-0:lang(es),\n  kuc-notification-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-notification-1-18-0:lang(ja),\n  kuc-notification-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-notification-1-18-0:lang(zh),\n  kuc-notification-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-notification-1-18-0:lang(zh-TW),\n  kuc-notification-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-notification-1-18-0 {\n    color: #ffffff;\n    font-weight: 700;\n    text-align: center;\n    text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);\n  }\n  kuc-notification-1-18-0 {\n    position: fixed;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    width: 100%;\n    line-height: 1.5;\n    z-index: 10000;\n    margin-top: 16px;\n    pointer-events: none;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n  }\n  .kuc-notification-fadein-1-18-0 {\n    animation-name: kuc-notification-fade-in-1-18-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n  }\n  .kuc-notification-fadeout-1-18-0 {\n    animation-name: kuc-notification-fade-out-1-18-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n  }\n  .kuc-notification-1-18-0__notification {\n    position: relative;\n    display: inline-block;\n    text-align: left;\n    padding: 16px 56px 16px 24px;\n    background-color: var(--kuc-notification-background-color, #e74c3c);\n  }\n  .kuc-notification-1-18-0__notification--info {\n    background-color: var(--kuc-notification-background-color, #3498db);\n  }\n  .kuc-notification-1-18-0__notification--success {\n    background-color: var(--kuc-notification-background-color, #91c36c);\n  }\n  .kuc-notification-1-18-0__notification--danger {\n    background-color: var(--kuc-notification-background-color, #e74c3c);\n  }\n  .kuc-notification-1-18-0__notification__title {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    font-size: var(--kuc-notification-font-size, 16px);\n    color: var(--kuc-notification-color, #ffffff);\n    max-width: 500px;\n    min-height: 24px;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n  .kuc-notification-1-18-0__notification__close-button {\n    position: absolute;\n    top: 4px;\n    right: 0;\n    width: 48px;\n    height: 48px;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    pointer-events: auto;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n  }\n  .kuc-notification-1-18-0__notification__close-button__icon-background--danger {\n    fill: var(--kuc-notification-close-button-background-color, #c65040);\n  }\n  .kuc-notification-1-18-0__notification__close-button__icon-background--info {\n    fill: var(--kuc-notification-close-button-background-color, #448aca);\n  }\n  .kuc-notification-1-18-0__notification__close-button__icon-background--success {\n    fill: var(--kuc-notification-close-button-background-color, #9bbc65);\n  }\n  @keyframes kuc-notification-fade-in-1-18-0 {\n    0% {\n      visibility: visible;\n      top: -56px;\n    }\n    100% {\n      visibility: visible;\n      top: 0;\n    }\n  }\n  @keyframes kuc-notification-fade-out-1-18-0 {\n    0% {\n      visibility: visible;\n      top: 0;\n    }\n    10% {\n      visibility: visible;\n      top: 14px;\n    }\n    100% {\n      top: -56px;\n    }\n  }\n'),$n=e}})();var Cn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let In;(()=>{if(In=window.customElements.get("kuc-radio-button-1-18-0"),!In){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.itemLayout="horizontal",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=ki();const t=Ci(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}shouldUpdate(e){return e.has("items")&&!Mi(this.items)?(this.throwErrorAfterUpdateComplete(ot),!1):e.has("value")&&!Ai(this.value)?(this.throwErrorAfterUpdateComplete(dt),!1):!(e.has("selectedIndex")&&!Hi(this.selectedIndex)&&(this.throwErrorAfterUpdateComplete(ct),1))}_findItemToFocus(){let e=-1;for(let t=0;t<this.items.length;t++){const i=this.items[t];i.disabled||(this.selectedIndex!==t||i.value!==this.value?-1===e&&(e=t):e=t)}return e}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,n=t.dataset.index||"0",o=parseInt(n,10);if(this.value===i&&this.selectedIndex===o)return;const a={oldValue:this.value,value:i};this.value=i,this.selectedIndex=o,fi(this,"change",a)}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_getRadioIconSvgTemplate(e,t){return Ce`
    <svg
      class="kuc-radio-button-1-18-0__group__select-menu__item__label__icon"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        fill="white"
        stroke="#e3e7e8" stroke-width="1"/>
      ${t?Ce`<circle cx="10.5" cy="10.5" r="6.5" fill="${e?"#e3e7e8":"#3498db"}"/>`:""}
    </svg>
  `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t),n=e.disabled||this.disabled,o=void 0!==e.value?e.value:"",a=t===this._findItemToFocus()?"0":"-1";return $e`
        <div
          class="kuc-radio-button-1-18-0__group__select-menu__item"
          itemLayout="${this.itemLayout}"
        >
          <input
            type="radio"
            aria-checked="${i?"true":"false"}"
            aria-describedby="${this._GUID}-error"
            data-index="${t}"
            id="${this._GUID}-item-${t}"
            class="kuc-radio-button-1-18-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${o}"
            tabindex="${a}"
            aria-required="${this.requiredIcon}"
            ?disabled="${n}"
            @change="${this._handleChangeInput}"
            @focus="${this._handleFocusInput}"
            @blur="${this._handleBlurInput}"
          />
          <label
            class="kuc-radio-button-1-18-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(n,i)}${void 0===e.label?e.value:e.label}
          </label>
        </div>
      `}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return $e`
        <div
          class="kuc-radio-button-1-18-0__group"
          role="radiogroup"
          aria-labelledby="${this._GUID}-group"
        >
          <div class="kuc-radio-button-1-18-0__group__label" ?hidden="${!this.label}">
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .guid="${this._GUID}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </div>
          <div
            class="kuc-radio-button-1-18-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            itemLayout="${this.itemLayout}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-error-1-18-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
            ariaLive="assertive"
          ></kuc-base-error-1-18-0>
        </div>
      `}updated(){this._inputEls.forEach(((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex}))}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}}Cn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Cn([Fe({type:String})],e.prototype,"error",void 0),Cn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Cn([Fe({type:String})],e.prototype,"itemLayout",void 0),Cn([Fe({type:String})],e.prototype,"label",void 0),Cn([Fe({type:String})],e.prototype,"value",void 0),Cn([Fe({type:Number})],e.prototype,"selectedIndex",void 0),Cn([Fe({type:Boolean})],e.prototype,"borderVisible",void 0),Cn([Fe({type:Boolean})],e.prototype,"disabled",void 0),Cn([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),Cn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),Cn([Fe({type:Array})],e.prototype,"items",void 0),Cn([Je(".kuc-radio-button-1-18-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),window.customElements.define("kuc-radio-button-1-18-0",e),vi('\n  kuc-radio-button-1-18-0,\n  kuc-radio-button-1-18-0 *,\n  kuc-radio-button-1-18-0:lang(en),\n  kuc-radio-button-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-radio-button-1-18-0:lang(es),\n  kuc-radio-button-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-radio-button-1-18-0:lang(ja),\n  kuc-radio-button-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-radio-button-1-18-0:lang(zh),\n  kuc-radio-button-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-radio-button-1-18-0:lang(zh-TW),\n  kuc-radio-button-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-radio-button-1-18-0 {\n    font-size: 14px;\n    color: #333333;\n    display: inline-table;\n    width: var(--kuc-radio-button-menu-width, 239px);\n    min-width: var(--kuc-radio-button-menu-width, 239px);\n    vertical-align: top;\n    line-height: 1.5;\n  }\n\n  kuc-radio-button-1-18-0[hidden] {\n    display: none;\n  }\n\n  .kuc-radio-button-1-18-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    margin: 0px;\n    width: 100%;\n  }\n\n  .kuc-radio-button-1-18-0__group__label {\n    display: inline-block;\n    padding: 4px 0 8px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-radio-button-1-18-0__group__label[hidden] {\n    display: none;\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu {\n    display: flex;\n    align-items: flex-start;\n    width: var(--kuc-radio-button-menu-width, 100%);\n    height: var(--kuc-radio-button-menu-height);\n    color: var(--kuc-radio-button-menu-color, #333333);\n    font-size: var(--kuc-radio-button-menu-font-size, 14px);\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu[itemlayout="vertical"] {\n    display: block;\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu[bordervisible] {\n    border-color: #e3e7e8;\n    border-width: 1px;\n    border-style: solid;\n    padding-top: 4px;\n    box-sizing: border-box;\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu__item {\n    margin-left: 4px;\n    margin-bottom: 4px;\n    margin-right: 16px;\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    display: flex;\n    align-items: center;\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu__item[focused] {\n    border: 1px solid #3498db;\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu__item__input:hover\n    + .kuc-radio-button-1-18-0__group__select-menu__item__label {\n    color: var(--kuc-radio-button-menu-color-hover, #666666);\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu__item__label__icon {\n    position: absolute;\n    left: -30px;\n    box-sizing: border-box;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n    border-radius: 9px;\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu__item__input[disabled]\n    + .kuc-radio-button-1-18-0__group__select-menu__item__label {\n    color: #888888;\n    cursor: not-allowed;\n  }\n\n  .kuc-radio-button-1-18-0__group__select-menu__item__label {\n    cursor: pointer;\n    position: relative;\n    margin-left: 32px;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n    white-space: nowrap;\n    line-height: 1.2;\n    min-height: 24px;\n  }\n'),In=e}})();var En=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Sn;(()=>{if(Sn=window.customElements.get("kuc-base-pagination-1-18-0"),!Sn){class e extends mi{constructor(){super(...arguments),this.pagePosition=1,this.rowsPerPage=5,this.total=1,this.isNext=!0,this.isPrev=!0,this.visible=!0}render(){return $e`
        <div class="kuc-base-pagination-1-18-0__group" ?hidden="${!this.visible}">
          <button
            title="previous"
            class="kuc-base-pagination-1-18-0__group__pager-prev${this.isPrev?"":" kuc-base-pagination-1-18-0__group__pager-disable"}"
            type="button"
            @click="${this._handleClickPrevButton}"
            @focus="${this._handleFocusPrevButton}"
            @blur="${this._handleBlurPrevButton}"
            @mouseover="${this._handleMouseOverPrevButton}"
            @mouseleave="${this._handleMouseLeavePrevButton}"
          >
            ${this._getPrevButtonSvgTemplate()}</button
          >${this._getCurrentPageNumberTemplate()}<button
            title="next"
            class="kuc-base-pagination-1-18-0__group__pager-next${this.isNext?"":" kuc-base-pagination-1-18-0__group__pager-disable"}"
            type="button"
            @click="${this._handleClickNextButton}"
            @focus="${this._handleFocusNextButton}"
            @blur="${this._handleBlurNextButton}"
            @mouseover="${this._handleMouseOverNextButton}"
            @mouseleave="${this._handleMouseLeaveNextButton}"
          >
            ${this._getNextButtonSvgTemplate()}
          </button>
        </div>
      `}_handleClickPrevButton(e){e.stopPropagation(),fi(this,"kuc:pagination-click-prev")}_handleFocusPrevButton(){this._prevButtonEl.classList.add("kuc-base-pagination-1-18-0__group__pager--focus")}_handleBlurPrevButton(){this._prevButtonEl.classList.remove("kuc-base-pagination-1-18-0__group__pager--focus")}_handleMouseOverPrevButton(){this._prevButtonEl.classList.add("kuc-base-pagination-1-18-0__group__pager--horver")}_handleMouseLeavePrevButton(){this._prevButtonEl.classList.remove("kuc-base-pagination-1-18-0__group__pager--horver")}_handleClickNextButton(e){e.stopPropagation(),fi(this,"kuc:pagination-click-next")}_handleFocusNextButton(){this._nextButtonEl.classList.add("kuc-base-pagination-1-18-0__group__pager--focus")}_handleBlurNextButton(){this._nextButtonEl.classList.remove("kuc-base-pagination-1-18-0__group__pager--focus")}_handleMouseOverNextButton(){this._nextButtonEl.classList.add("kuc-base-pagination-1-18-0__group__pager--horver")}_handleMouseLeaveNextButton(){this._nextButtonEl.classList.remove("kuc-base-pagination-1-18-0__group__pager--horver")}_getPrevButtonSvgTemplate(){return Ce`
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.99061 7.5L9 0.0604158L7.06632 0L0 7.5L7.06632 15L9 14.9396L1.99061 7.5Z"
            fill="#888888"
          />
        </svg>
      `}_getNextButtonSvgTemplate(){return Ce`
      <svg
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00939 7.5L0 0.0604158L1.93368 0L9 7.5L1.93368 15L0 14.9396L7.00939 7.5Z"
          fill="#888888"
        />
      </svg>
      `}_getCurrentPageNumberTemplate(){const e=this._createCurrentPageInfo(),t=`${e.firstNum} - ${e.lastNum} / ${this.total}`;return $e`<span class="kuc-base-pagination-1-18-0__group__pager-current"
        >${t}</span
      >`}_createCurrentPageInfo(){const e=(this.pagePosition-1)*this.rowsPerPage+1;let t=this.pagePosition*this.rowsPerPage;return t=t>this.total?this.total:t,{firstNum:e,lastNum:t}}}En([Fe({type:Number})],e.prototype,"pagePosition",void 0),En([Fe({type:Number})],e.prototype,"rowsPerPage",void 0),En([Fe({type:Number})],e.prototype,"total",void 0),En([Fe({type:Boolean})],e.prototype,"isNext",void 0),En([Fe({type:Boolean})],e.prototype,"isPrev",void 0),En([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),En([Ke(".kuc-base-pagination-1-18-0__group__pager-prev")],e.prototype,"_prevButtonEl",void 0),En([Ke(".kuc-base-pagination-1-18-0__group__pager-next")],e.prototype,"_nextButtonEl",void 0),window.customElements.define("kuc-base-pagination-1-18-0",e),vi("\n  .kuc-base-pagination-1-18-0__group {\n    margin-top: 10px;\n  }\n  .kuc-base-pagination-1-18-0__group button {\n    cursor: pointer;\n  }\n  .kuc-base-pagination-1-18-0__group__pager-prev {\n    border: none;\n    background-color: transparent;\n    visibility: visible;\n    height: 23px;\n    vertical-align: middle;\n  }\n  .kuc-base-pagination-1-18-0__group__pager-next {\n    border: none;\n    background-color: transparent;\n    visibility: visible;\n    height: 23px;\n    vertical-align: middle;\n  }\n  .kuc-base-pagination-1-18-0__group__pager-next:hover svg path,\n  .kuc-base-pagination-1-18-0__group__pager-prev:hover svg path,\n  .kuc-base-pagination-1-18-0__group__pager-next:focus-visible svg path,\n  .kuc-base-pagination-1-18-0__group__pager-prev:focus-visible svg path\n  {\n    fill: #3498db;\n  }\n  .kuc-base-pagination-1-18-0__group__pager--focus,\n  .kuc-base-pagination-1-18-0__group__pager-next:focus-visible,\n  .kuc-base-pagination-1-18-0__group__pager-prev:focus-visible {\n    outline: 1px solid #3498db;\n  }\n  .kuc-base-pagination-1-18-0__group__pager--horver svg path {\n    fill: #3498db;\n  }\n  .kuc-base-pagination-1-18-0__group__pager-next svg,\n  .kuc-base-pagination-1-18-0__group__pager-prev svg {\n    margin-top: 3px;\n  }\n  .kuc-base-pagination-1-18-0__group__pager-disable {\n    visibility: hidden;\n  }\n  .kuc-base-pagination-1-18-0__group__pager-current {\n    display: inline-block;\n    height: 23px;\n    line-height: 23px;\n    vertical-align: middle;\n    font-size: 14px;\n    color: #333333;\n  }\n"),Sn=e}})();var Tn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let An;(()=>{if(An=window.customElements.get("kuc-readonly-table-1-18-0"),!An){class e extends mi{constructor(e){if(super(),this.className="",this.id="",this.label="",this.columns=[],this.data=[],this.pagination=!0,this.rowsPerPage=5,this.visible=!0,this._pagePosition=1,this._columnOrder=[],!e)return;const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){return e.has("columns")&&!Mi(this.columns)?(this.throwErrorAfterUpdateComplete(ht),!1):e.has("data")&&!Mi(this.data)?(this.throwErrorAfterUpdateComplete(gt),!1):!(e.has("rowsPerPage")&&!Vi(this.rowsPerPage)&&(this.throwErrorAfterUpdateComplete(bt),1))}willUpdate(e){e.has("columns")&&(this._columnOrder=[],this.columns.map((e=>this._columnOrder.push(e.field?e.field:"")))),e.has("rowsPerPage")&&(this.rowsPerPage=Math.round(this.rowsPerPage))}render(){const e=this._createDisplayData();return!this.columns||this.columns.length<1?$e`
            <table class="kuc-readonly-table-1-18-0__table">
              <caption
                class="kuc-readonly-table-1-18-0__table__label kuc-readonly-table-1-18-0__table__label--no-column"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
            </table>
          `:$e`
            <table class="kuc-readonly-table-1-18-0__table">
              <caption
                class="kuc-readonly-table-1-18-0__table__label"
                ?hidden="${!this.label}"
              >
                ${this.label}
              </caption>
              <thead class="kuc-readonly-table-1-18-0__table__header">
                <tr>
                  ${this.columns.map(((e,t)=>this._getColumnsTemplate(e,t)))}
                </tr>
              </thead>
              <tbody class="kuc-readonly-table-1-18-0__table__body">
                ${e.map(((e,t)=>this._getDataTemplate(e,t)))}
              </tbody>
            </table>
            <kuc-base-pagination-1-18-0
              .pagePosition="${this._pagePosition}"
              .rowsPerPage="${this.rowsPerPage}"
              .total="${this.data.length}"
              .visible="${this.pagination}"
              .isPrev="${this._toggleDisplayPreviousButton()}"
              .isNext="${this._toggleDisplayNextButton()}"
              @kuc:pagination-click-prev=${this._handleClickPreviousButton}
              @kuc:pagination-click-next=${this._handleClickNextButton}
            ></kuc-base-pagination-1-18-0>
          `}_createDisplayData(){if(!this.pagination)return this.data;const e=(this._pagePosition-1)*this.rowsPerPage+1,t=this._pagePosition*this.rowsPerPage;return this.data.filter(((i,n)=>n>=e-1&&n<=t-1))}_customWidthVariables(e){return`var(--kuc-readonly-table-header-${e}-width, var(--kuc-readonly-table-header-width, auto))`}_getColumnsTemplate(e,t){const i=this._customWidthVariables(t);return $e`
        <th
          class="kuc-readonly-table-1-18-0__table__header__cell"
          ?hidden="${!1===e.visible}"
          style="width: ${i}; min-width: ${i}; max-width: ${i}"
        >
          ${e.title||""}
        </th>
      `}_getDataTemplate(e,t){return $e`
        <tr
          class="kuc-readonly-table-1-18-0__table__body__row kuc-readonly-table-1-18-0__table__body__row-${t}"
        >
          ${this._columnOrder.map(((t,i)=>{var n;const o=null===(n=this.columns[i].visible)||void 0===n||n;let a=e[t];this._isHTML(a)&&(a=$e`<div
                class="kuc-readonly-table-1-18-0__table__body__row__cell-data--html"
              >
                ${li(a)}
              </div>`);const s=this._customWidthVariables(i);return $e`<td class="kuc-readonly-table-1-18-0__table__body__row__cell-data" ?hidden="${!o}" style="width: ${s}; min-width: ${s}; max-width: ${s}">${a}</td>`}))}
        </tr>
      `}_toggleDisplayPreviousButton(){return this._pagePosition>1}_toggleDisplayNextButton(){return this._pagePosition<this.data.length/this.rowsPerPage}_handleClickPreviousButton(e){this._pagePosition<2||(Vi(this.rowsPerPage)?this._pagePosition-=1:this.throwErrorAfterUpdateComplete(bt))}_handleClickNextButton(e){Vi(this.rowsPerPage)?!1!==this._toggleDisplayNextButton()&&(this._pagePosition+=1):this.throwErrorAfterUpdateComplete(bt)}_isHTML(e){if(e instanceof HTMLElement)return!0;const t=document.createElement("div");return t.innerHTML=e,t.childElementCount>0}}Tn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Tn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Tn([Fe({type:String})],e.prototype,"label",void 0),Tn([Fe({type:Array})],e.prototype,"columns",void 0),Tn([Fe({type:Array})],e.prototype,"data",void 0),Tn([Fe({type:Boolean})],e.prototype,"pagination",void 0),Tn([Fe({type:Number})],e.prototype,"rowsPerPage",void 0),Tn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),Tn([We()],e.prototype,"_pagePosition",void 0),Tn([We()],e.prototype,"_columnOrder",void 0),window.customElements.define("kuc-readonly-table-1-18-0",e),vi('\n  kuc-readonly-table-1-18-0 ,\n  kuc-readonly-table-1-18-0  *,\n  kuc-readonly-table-1-18-0:lang(en),\n  kuc-readonly-table-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-readonly-table-1-18-0:lang(es),\n  kuc-readonly-table-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-readonly-table-1-18-0:lang(ja),\n  kuc-readonly-table-1-18-0:lang(ja) * {\n      font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-readonly-table-1-18-0:lang(zh),\n  kuc-readonly-table-1-18-0:lang(zh) * {\n      font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-readonly-table-1-18-0:lang(zh-TW),\n  kuc-readonly-table-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-readonly-table-1-18-0 {\n    font-size: 14px;\n    color: #333333;\n    display: block;\n  }\n  kuc-readonly-table-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-readonly-table-1-18-0__table {\n    border-collapse: collapse;\n    table-layout: fixed;\n    width: 100%;\n    display: inline-block;\n  }\n  .kuc-readonly-table-1-18-0__table__header {\n    border-width: 0px 1px;\n    border-color: var(--kuc-readonly-table-header-background-color, #3498db);\n    border-style: solid;\n  }\n  .kuc-readonly-table-1-18-0__table__label {\n    text-align: left;\n    white-space: normal;\n    overflow-wrap: anywhere;\n    padding: 4px 0px;\n  }\n  .kuc-readonly-table-1-18-0__table__label[hidden] {\n    display: none;\n  }\n  .kuc-readonly-table-1-18-0__table__label--no-column {\n    overflow-wrap: break-word;\n  }\n  .kuc-readonly-table-1-18-0__table__header__cell {\n    background-color: var(--kuc-readonly-table-header-background-color, #3498db);\n    color: var(--kuc-readonly-table-header-color, #ffffff);\n    height: var(--kuc-readonly-table-header-height, 40px);\n    box-sizing: border-box;\n    text-align: left;\n    overflow: auto;\n    white-space: nowrap;\n    word-wrap: break-word;\n    padding: 4px 8px;\n    font-weight: 400;\n    font-size: var(--kuc-readonly-table-header-font-size, 12px);\n  }\n  .kuc-readonly-table-1-18-0__table__header__cell[hidden] {\n    display: none;\n  }\n  .kuc-readonly-table-1-18-0__table__body {\n    vertical-align: top;\n  }\n  .kuc-readonly-table-1-18-0__table__body__row__cell-data {\n    box-sizing: border-box;\n    padding: 4px 8px;\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n    border-color: #e3e7e8;\n    border-style: solid;\n    border-width: 1px;\n  }\n  .kuc-readonly-table-1-18-0__table__body__row__cell-data[hidden] {\n    display: none;\n  }\n  .kuc-readonly-table-1-18-0__table__header__cell,\n  .kuc-readonly-table-1-18-0__table__body__row__cell-data {\n    scrollbar-width: none; /* Firefox */\n  }\n  .kuc-readonly-table-1-18-0__table__header__cell::-webkit-scrollbar,\n  .kuc-readonly-table-1-18-0__table__body__row__cell-data::-webkit-scrollbar {\n    width: 0; /* Safari and Chrome */\n    display: none\n  }\n  .kuc-readonly-table-1-18-0__table__body__row__cell-data--html {\n    white-space: normal;\n  }\n'),An=e}})();var Dn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ln;(()=>{if(Ln=window.customElements.get("kuc-spinner-1-18-0"),!Ln){class e extends mi{constructor(e){super(),this.text="",this.container=document.body,this._isOpened=!1;const t=Ci(e);Object.assign(this,t)}_getSpinnerSvgTemplate(){return Ce`
        <svg
          class="kuc-spinner-1-18-0__spinner__loader"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <circle r="4" cx="30.43" cy="4.72" opacity="0.3" />
          <circle r="4" cx="39.85" cy="10.15" opacity="0.3" />
          <circle r="4" cx="45.28" cy="19.56" opacity="0.3" />
          <circle r="4" cx="45.28" cy="30.43" opacity="0.3" />
          <circle r="4" cx="39.85" cy="39.85" opacity="0.3" />
          <circle r="4" cx="30.44" cy="45.28" opacity="0.4" />
          <circle r="4" cx="19.56" cy="45.28" opacity="0.5" />
          <circle r="4" cx="10.15" cy="39.85" opacity="0.6" />
          <circle r="4" cx="4.7" cy="30.44" opacity="0.7" />
          <circle r="4" cx="4.7" cy="19.56" opacity="0.8" />
          <circle r="4" cx="10.15" cy="10.15" opacity="0.9" />
          <circle r="4" cx="19.56" cy="4.72" opacity="1" />
        </svg>
      `}_isValidContainerElement(){return this.container instanceof HTMLElement}open(){if(!this._isValidContainerElement())return document.body.appendChild(this),requestAnimationFrame((()=>{document.body.removeChild(this)})),void this.performUpdate();this.parentElement&&this.parentElement.classList.remove("kuc--has-spinner"),this.container.appendChild(this),this.performUpdate(),this.container.classList.contains("kuc--has-spinner")||this.container.classList.add("kuc--has-spinner"),this._isOpened=!0}close(){this.parentElement&&this.parentElement.classList.remove("kuc--has-spinner"),this._isOpened=!1,this.parentNode&&this.parentNode.removeChild(this)}shouldUpdate(e){if(e.has("container")){if(null===this.container||void 0===this.container)return this._isOpened&&this.close(),!1;const e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this.close(),!e)return this.throwErrorAfterUpdateComplete(mt),!1}return!0}render(){return $e`
        <div class="kuc-spinner-1-18-0__spinner" aria-live="assertive" role="alert">
          ${this._getSpinnerSvgTemplate()}
          <div
            class="kuc-spinner-1-18-0__spinner__text${this.text?"":" visually-hidden"}"
          >
            ${this.text?this.text:"now loading…"}
          </div>
        </div>
        <div class="kuc-spinner-1-18-0__mask"></div>
      `}}Dn([Fe({type:String})],e.prototype,"text",void 0),Dn([Fe()],e.prototype,"container",void 0),window.customElements.define("kuc-spinner-1-18-0",e),vi('\n  kuc-spinner-1-18-0,\n  kuc-spinner-1-18-0 *,\n  kuc-spinner-1-18-0:lang(en),\n  kuc-spinner-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-spinner-1-18-0:lang(es),\n  kuc-spinner-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-spinner-1-18-0:lang(ja),\n  kuc-spinner-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-spinner-1-18-0:lang(zh),\n  kuc-spinner-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-spinner-1-18-0:lang(zh-TW),\n  kuc-spinner-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-spinner-1-18-0 {\n    font-size: 14px;\n    color: #333333;\n  }\n  .kuc-spinner-1-18-0__spinner {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10000;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .kuc-spinner-1-18-0__spinner__loader {\n    width: var(--kuc-spinner-loader-width, 50px);\n    height: var(--kuc-spinner-loader-height, 50px);\n    animation: rotate-loading 1s steps(12) infinite;\n    fill: var(--kuc-spinner-loader-color, #99ccff);\n  }\n  .kuc-spinner-1-18-0__spinner__text {\n    margin: 10px 0;\n    font-size: var(--kuc-spinner-text-font-size, 14px);\n    color: var(--kuc-spinner-text-color, #333333);\n  }\n  .visually-hidden {\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    border: 0;\n    padding: 0;\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    margin: -1px;\n  }\n  .kuc-spinner-1-18-0__mask {\n    position: fixed;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #666666;\n    opacity: 0.6;\n    z-index: 9999;\n  }\n  .kuc--has-spinner {\n    overflow: hidden;\n  }\n  @keyframes rotate-loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n'),Ln=e}})();var Vn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};const Hn="kuc-table-1-18-0__table__body__row__action-add",Mn="kuc-table-1-18-0__table__body__row__action-remove",Bn=e=>`var(--kuc-table-header-${e}-width, var(--kuc-table-header-width, auto))`;let On;(()=>{if(On=window.customElements.get("kuc-table-1-18-0"),!On){class e extends mi{constructor(e){if(super(),this.className="",this.id="",this.label="",this.columns=[],this.data=[],this.actionButton=!0,this.headerVisible=!0,this.visible=!0,!e)return;const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){if(e.has("data")||e.has("columns")){const e=this._getErrorValidateColumnsAndData();if(e)return this.throwErrorAfterUpdateComplete(e),!1}return!0}willUpdate(e){this._tBody&&(this._tBody.innerHTML="")}_getErrorMessageWhenValidateColumns(){return Mi(this.columns)?(e=>{for(let t=0;t<e.length;t++)if(!Object.prototype.hasOwnProperty.call(e[t],"field"))return!1;return!0})(this.columns)?(()=>{const e=this.columns.map((e=>e.field));return e.some((function(t,i){return e.indexOf(t)!==i}))})()?pt:"":_t:ht}render(){return!this.columns||this.columns.length<1?$e`<table class="kuc-table-1-18-0__table">
            <caption
              class="kuc-table-1-18-0__table__label kuc-table-1-18-0__table__label--no-column"
              ?hidden="${!this.label}"
            >
              ${this.label}
            </caption>
          </table>`:$e`
            <table class="kuc-table-1-18-0__table">
              <caption class="kuc-table-1-18-0__table__label" ?hidden="${!this.label}">
                ${this.label}
              </caption>
              <thead
                class="kuc-table-1-18-0__table__header"
                ?hidden="${!this.headerVisible}"
              >
                ${this._getTableHeaderTemplate()}
              </thead>
              <tbody class="kuc-table-1-18-0__table__body"></tbody>
            </table>
          `}updated(e){if(0!==this.columns.length)for(let e=0;e<this.data.length;e++)this._addRowToTable(e,this.data[e])}_getTableHeaderTemplate(){return $e`
        <tr>
          ${this.columns.map(((e,t)=>this._getColumnHeaderTemplate(e,t)))}
        </tr>
      `}_getColumnHeaderTemplate(e,t){const i=Bn(t);return $e`
        <th
          class="kuc-table-1-18-0__table__header__cell"
          ?hidden="${!1===e.visible}"
          style="width: ${i}; min-width: ${i}; max-width: ${i}"
        >
          <div class="kuc-table-1-18-0__table__header__cell-title">
            ${e.title?li(e.title):""}<!--
        --><span
              class="kuc-base-label-1-18-0__required-icon"
              ?hidden="${!e.requiredIcon}"
              >*</span
            >
          </div>
        </th>
      `}_getActionsCellWhenRemoveRow(e){let t=null,i=e;for(;this.data.length>1;){const e=this._table.rows[i];if(e){t=e.cells[this.columns.length];break}i--}return t}_getDefaultDataRow(e){const t={};for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(Array.isArray(e[i])){t[i]=[];continue}if("object"==typeof e[i]&&null!==e[i]){t[i]={};continue}t[i]=""}return t}_addRowToTable(e,t){var i;const n=this._tBody.insertRow(e);n.classList.add("kuc-table-1-18-0__table__body__row");for(let o=0;o<this.columns.length;o++){const a=Bn(o),s=n.insertCell(o),r=this.columns[o];s.classList.add("kuc-table-1-18-0__table__body__row__cell-data"),s.style.width=a,s.style.maxWidth=a,s.style.minWidth=a,s.addEventListener("change",(e=>{this._handleChangeCell(e,r.field)})),s.hidden=!(null===(i=r.visible)||void 0===i||i);const l=r.render?r.render(t[r.field],t,e):t[r.field];l&&l.nodeType?s.appendChild(l):s.innerText=l||""}this.actionButton&&this._addActionsCellToNewRow(n)}_handleChangeCell(e,t){e.stopPropagation();const i=this._deepCloneObject(this.data),n=e.currentTarget.parentElement.rowIndex-1,o=this.data[n];if(t in o){let i=e.target.value;"detail"in e&&(i=e.detail.value),o[t]=i}const a={type:"change-cell",rowIndex:n,data:this._deepCloneObject(this.data),oldData:i,field:t};this._dispatchChangeEvent(a)}_handleAddRow(e){const t=this._deepCloneObject(this.data),i=this._getDefaultDataRow(this.data[0]);this._addRowToTable(e,i),this.data.splice(e,0,i);const n={type:"add-row",rowIndex:e,data:this._deepCloneObject(this.data),oldData:t};this._dispatchChangeEvent(n),this._toggleRemoveRowButton()}_handleRemoveRow(e){if(1===this.data.length)return;const t=e-1,i=this._deepCloneObject(this.data);this._table.deleteRow(e),this.data.splice(t,1);const n={type:"remove-row",rowIndex:t,data:this._deepCloneObject(this.data),oldData:i};this._dispatchChangeEvent(n),this._toggleRemoveRowButton(),this._focusActionsButtonWhenRemoveRow(e)}_focusActionsButtonWhenRemoveRow(e){const t=this._getActionsCellWhenRemoveRow(e);t?this._focusRemoveRowButton(t):this._focusFirstAddRowButton()}_focusRemoveRowButton(e){e.querySelector(`.${Mn}`).focus()}_focusFirstAddRowButton(){const e=this._table.rows[1].cells[this.columns.length].querySelector(`.${Hn}`);null==e||e.focus()}_toggleRemoveRowButton(){var e;const t=this._tBody.rows[0].lastChild.lastChild;if(1!==this.data.length){if(2===this.data.length){const i=null===(e=this._tBody.rows[1].lastChild)||void 0===e?void 0:e.lastChild;t.style.display=i.style.display="block"}}else t.style.display="none"}_getSvgDOM(e,t){const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("fill","none"),i.setAttribute("width","18"),i.setAttribute("height","18"),i.setAttribute("viewBox","0 0 16 16"),i.setAttribute("aria-hidden","true");const n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",t),n.setAttribute("fill-rule","evenodd"),n.setAttribute("clip-rule","evenodd"),n.setAttribute("fill",e),i.appendChild(n),i}_addActionsCellToNewRow(e){const t={add:!0,remove:!0};if("object"==typeof this.actionButton&&(t.add=!Object.prototype.hasOwnProperty.call(this.actionButton,"add")||this.actionButton.add,t.remove=!Object.prototype.hasOwnProperty.call(this.actionButton,"remove")||this.actionButton.remove),!t.add&&!t.remove)return;const i=e.insertCell(this.columns.length);if(i.classList.add("kuc-table-1-18-0__table__body__row__action"),t.add){const t=this._getActionButtonDOM("add",e);i.appendChild(t)}if(t.remove){const t=this._getActionButtonDOM("remove",e);i.appendChild(t),1===this.data.length&&(t.style.display="none")}}_getActionButtonDOM(e,t){let i=Mn,n="Delete this row";const o="add"===e;o&&(i=Hn,n="Add row");const a=o?"#3498db":"#b5b5b5",s=o?"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.0355 8.49997V7.49997H8.50008V3.96454H7.50008V7.49997H3.96443V8.49997H7.50008V12.0356H8.50008V8.49997H12.0355Z":"M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.0355 7.49997V8.49997L3.96443 8.49997V7.49997H12.0355Z",r=this._getSvgDOM(a,s),l=document.createElement("button");return l.classList.add(i),l.setAttribute("title",n),l.appendChild(r),l.addEventListener("click",(()=>{const e=this._getErrorValidateColumnsAndData();e?this.throwErrorAfterUpdateComplete(e):o?this._handleAddRow(t.rowIndex):this._handleRemoveRow(t.rowIndex)})),l}_getErrorValidateColumnsAndData(){return this._getErrorMessageWhenValidateColumns()||(Mi(this.data)?"":gt)}_deepCloneObject(e){return JSON.parse(JSON.stringify(e))}_dispatchChangeEvent(e){fi(this,"change",e)}}Vn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Vn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Vn([Fe({type:String})],e.prototype,"label",void 0),Vn([Fe({type:Array})],e.prototype,"columns",void 0),Vn([Fe({type:Array})],e.prototype,"data",void 0),Vn([Fe()],e.prototype,"actionButton",void 0),Vn([Fe({type:Boolean})],e.prototype,"headerVisible",void 0),Vn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),Vn([Ke(".kuc-table-1-18-0__table")],e.prototype,"_table",void 0),Vn([Ke(".kuc-table-1-18-0__table__body")],e.prototype,"_tBody",void 0),window.customElements.define("kuc-table-1-18-0",e),vi('\n  kuc-table-1-18-0,\n  kuc-table-1-18-0 *,\n  kuc-table-1-18-0:lang(en),\n  kuc-table-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-table-1-18-0:lang(es),\n  kuc-table-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-table-1-18-0:lang(ja),\n  kuc-table-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-table-1-18-0:lang(zh),\n  kuc-table-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-table-1-18-0:lang(zh-TW),\n  kuc-table-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-table-1-18-0 {\n    font-size: 14px;\n    color: #333333;\n    display: block;\n  }\n  kuc-table-1-18-0[hidden] {\n    display: none;\n  }\n  kuc-table-1-18-0 kuc-* {\n    line-height: 1;\n  }\n  .kuc-table-1-18-0__table {\n    border-collapse: collapse;\n  }\n  .kuc-table-1-18-0__table__header {\n    border-width: 0px 1px;\n    border-color: var(--kuc-table-header-background-color, #3498db);\n    border-style: solid;\n    border-right: 0;\n  }\n  .kuc-table-1-18-0__table__header[hidden] {\n    display: none;\n  }\n  .kuc-table-1-18-0__table__header__cell {\n    box-sizing: border-box;\n    font-size: var(--kuc-table-header-font-size, 12px);\n    font-weight: 400;\n    background-color: var(--kuc-table-header-background-color, #3498db);\n    color: var(--kuc-table-header-color, #ffffff);\n    height: var(--kuc-table-header-height, 40px);\n    padding: 4px 8px;\n    text-align: left;\n    white-space: normal;\n  }\n  .kuc-table-1-18-0__table__header__cell-title {\n    overflow-wrap: break-word;\n    display: flex;\n    align-items: center;\n  }\n  .kuc-table-1-18-0__table__header__cell[hidden] {\n    display: none;\n  }\n  .kuc-table-1-18-0__table__header__cell .kuc-base-label-1-18-0__required-icon {\n    font-size: var(--kuc-table-header-font-size, 20px);\n    align-self: flex-start;\n  }\n  .kuc-table-1-18-0__table__body__row__cell-data {\n    box-sizing: border-box;\n    overflow-wrap: break-word;\n    white-space: normal;\n    border-color: #e3e7e8;\n    border-style: solid;\n    border-width: 1px;\n    padding: 8px 8px;\n    vertical-align: top;\n  }\n  .kuc-table-1-18-0__table__body__row__cell-data[hidden] {\n    display: none;\n  }\n  .kuc-table-1-18-0__table__body__row__action {\n    display: flex;\n    vertical-align: top;\n  }\n  .kuc-table-1-18-0__table__body__row__action button {\n    display: flex;\n    align-items: center;\n    width: 24px;\n    height: 24px;\n    background: transparent;\n    border: 1px solid transparent;\n    padding: 2px;\n    cursor: pointer;\n  }\n  .kuc-table-1-18-0__table__body__row__action button[hidden] {\n    display: none;\n  }\n  .kuc-table-1-18-0__table__body__row__action-add {\n    margin-left: 12px;\n  }\n  .kuc-table-1-18-0__table__body__row__action-remove {\n    margin-left: 4px;\n  }\n  .kuc-table-1-18-0__table__body__row__action-add:focus,\n  .kuc-table-1-18-0__table__body__row__action-remove:focus {\n    border: 1px solid #3498db;\n    outline: none;\n  }\n  .kuc-table-1-18-0__table__body__row__action-remove:hover path {\n    fill: #e74c3c;\n  }\n  .kuc-table-1-18-0__table__body__row__action[hidden] {\n    display: none;\n  }\n  .kuc-table-1-18-0__table caption {\n    text-align: left;\n    margin-bottom: 6px;\n    overflow-wrap: anywhere;\n    white-space: normal;\n  }\n  .kuc-table-1-18-0__table .kuc-table-1-18-0__table__label--no-column {\n    overflow-wrap: break-word;\n  }\n'),On=e}})();var Nn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Un;(()=>{if(Un=window.customElements.get("kuc-tabs-1-18-0"),!Un){class e extends mi{constructor(e){super(),this.className="",this.id="",this.value="",this.borderVisible=!0,this.visible=!0,this.items=[],this._selectedValue="",this._isClick=!1,this._GUID=ki();const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){if(e.has("items")){if(!Mi(this.items))return this.throwErrorAfterUpdateComplete(ot),!1;for(let e=0;e<this.items.length;e++)if(void 0===this.items[e].value)return this.throwErrorAfterUpdateComplete(st),!1;if(!Li(this.items.map((e=>e.value))))return this.throwErrorAfterUpdateComplete(at),!1}return!(e.has("value")&&!Ai(this.value)&&(this.throwErrorAfterUpdateComplete(dt),1))}willUpdate(e){let t=this._getMatchedTabIndex();-1===t&&(t=this._getFirstVisibleTabIndex()),t>-1&&(this._selectedValue=this.items[t].value)}render(){return $e`
        <div class="kuc-tabs-1-18-0__group">
          <ul
            class="kuc-tabs-1-18-0__group__tab-list"
            role="tablist"
            @blur="${this._handleBlur}"
          >
            ${this.items.map(((e,t)=>this._getTabTemplate(e,t)))}
          </ul>
          <div
            class="kuc-tabs-1-18-0__group__tab-panel"
            ?border-visible="${this.borderVisible}"
          >
            ${this.items.map(((e,t)=>this._getTabContentTemplate(e,t)))}
          </div>
        </div>
      `}_getTabTemplate(e,t){const i=e.value===this._selectedValue;return $e`<li
        role="presentation"
        class="kuc-tabs-1-18-0__group__tab-list__tab"
      >
        <button
          role="tab"
          ?hidden="${!1===e.visible}"
          aria-selected="${i}"
          tabindex="${i&&!e.disabled?"0":"-1"}"
          class="kuc-tabs-1-18-0__group__tab-list__tab__button ${this._isClick?"kuc-tabs-1-18-0__group__tab-list__tab__button--click":""}"
          id="${this._GUID}-button-${t}"
          aria-controls="${this._GUID}-tabpanel-${t}"
          value="${e.value}"
          @click="${this._handleClickTab}"
          @mousedown="${this._handleMouseDown}"
          @keydown="${this._handleKeyDownTab}"
          ?disabled="${e.disabled}"
        >
          ${e.label?e.label:""}
        </button>
      </li>`}_getTabContentTemplate(e,t){const i=e.value===this._selectedValue;return $e`<div
        class="kuc-tabs-1-18-0__group__tab-panel__content"
        role="tabpanel"
        id="${this._GUID}-tabpanel-${t}"
        aria-labelledby="${this._GUID}-button-${t}"
        ?hidden="${!i||!1===e.visible}"
        @change="${this._handleChangeEvent}"
      >
        ${e.content?li(e.content):""}
      </div>`}_handleMouseDown(e){this._isClick=!0}_handleClickTab(e){const t=e.target;t.blur();const i=this._getCurrentTabIndex(t.getAttribute("value"));if(this._tabButtons[i].focus(),this.value===t.value)return;const n=this._generateEventDetail(t.value);fi(this,"change",n)}_handleChangeEvent(e){e.stopPropagation()}_handleBlur(e){this._isClick=!1}_handleKeyDownTab(e){this._isClick=!1;let t=!1;switch(e.key){case"Left":case"ArrowLeft":t=!0,this._moveToAdjacentTab(e.target,"prev");break;case"Right":case"ArrowRight":t=!0,this._moveToAdjacentTab(e.target,"next");break;case"Home":t=!0,this._moveToLastFirstTab(e.target,"first");break;case"End":t=!0,this._moveToLastFirstTab(e.target,"last")}t&&(e.stopPropagation(),e.preventDefault())}_getCurrentTabIndex(e){let t=-1;for(let i=0;i<this.items.length;i++)if(this.items[i].value===e){t=i;break}return-1===t&&(t=this._getFirstVisibleTabIndex()),t}_getFirstVisibleTabIndex(){return this.items.findIndex((e=>!1!==e.visible))}_getMatchedTabIndex(){return this.items.findIndex((e=>!1!==e.visible&&e.value===this.value))}_moveToLastFirstTab(e,t){const i=this._getCurrentTabIndex(e.getAttribute("value")),n="last"===t?-1:1;let o="last"===t?this.items.length-1:0;for(;o!==i;){if(!1!==this.items[o].visible&&!0!==this.items[o].disabled){e.blur(),fi(this,"change",this._generateEventDetail(this._tabButtons[o].getAttribute("value"))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus();break}o+=n}}_moveToAdjacentTab(e,t){const i=this._getCurrentTabIndex(e.getAttribute("value")),n="next"===t?1:-1;let o=i+n;for(;o!==i&&(o===this.items.length?o=0:-1===o&&(o=this.items.length-1),o!==i);){if(!1!==this.items[o].visible&&!0!==this.items[o].disabled){e.blur(),fi(this,"change",this._generateEventDetail(this._tabButtons[o].getAttribute("value"))),this._tabButtons[this._getCurrentTabIndex(this.value)].focus();break}o+=n}}_generateEventDetail(e){const t=this.value;return this.value=e,{oldValue:t,value:e}}}Nn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Nn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Nn([Fe({type:String})],e.prototype,"value",void 0),Nn([Fe({type:Boolean})],e.prototype,"borderVisible",void 0),Nn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),Nn([Fe({type:Array})],e.prototype,"items",void 0),Nn([Je(".kuc-tabs-1-18-0__group__tab-list__tab__button")],e.prototype,"_tabButtons",void 0),Nn([We()],e.prototype,"_isClick",void 0),window.customElements.define("kuc-tabs-1-18-0",e),vi('\n  kuc-tabs-1-18-0,\n  kuc-tabs-1-18-0 *,\n  kuc-tabs-1-18-0:lang(en),\n  kuc-tabs-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-tabs-1-18-0:lang(es),\n  kuc-tabs-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-tabs-1-18-0:lang(ja),\n  kuc-tabs-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-tabs-1-18-0:lang(zh),\n  kuc-tabs-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-tabs-1-18-0:lang(zh-TW),\n  kuc-tabs-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-tabs-1-18-0 {\n    display: inline-block;\n  }\n  kuc-tabs-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-tabs-1-18-0__group__tab-list {\n    display: flex;\n    flex: 1;\n    padding: 16px 16px 0 16px;\n    margin: 0;\n    list-style: none;\n  }\n  .kuc-tabs-1-18-0__group__tab-list__tab {\n    min-height: var(--kuc-tabs-tab-height, 48px);\n    height: var(--kuc-tabs-tab-height, 48px);\n    white-space: normal;\n  }\n  .kuc-tabs-1-18-0__group__tab-list__tab__button:disabled {\n    color: GrayText;\n    background-color: #d4d7d7;\n    cursor: not-allowed;\n  }\n  .kuc-tabs-1-18-0__group__tab-list__tab__button {\n    height: 100%;\n    margin: 0;\n    padding: 0 24px;\n    display: grid;\n    align-items: center;\n    align-content: center;\n    font-size: var(--kuc-tabs-tab-font-size, 14px);\n    background-color: var(--kuc-tabs-tab-background-color, #d4d7d7);\n    color: var(--kuc-tabs-tab-color, #333333);\n    border-style: none;\n    border-top: 1px solid #c7cbcb;\n    border-left: 1px solid #c7cbcb;\n    box-shadow: 1px 0 3px #c7cbcb inset;\n    box-sizing: border-box;\n    cursor: pointer;\n    line-height: 1.5;\n    width: var(--kuc-tabs-tab-width, auto);\n    min-width: var(--kuc-tabs-tab-width, 200px);\n    word-wrap: break-word;\n  }\n  .kuc-tabs-1-18-0__group__tab-list__tab__button[hidden] {\n    display: none;\n  }\n  .kuc-tabs-1-18-0__group__tab-list__tab__button:last-of-type {\n    border-right: 1px solid #c7cbcb;\n  }\n\n  .kuc-tabs-1-18-0__group__tab-list__tab__button:focus {\n    outline: none;\n    border: 1px solid #3498db;\n  }\n  .kuc-tabs-1-18-0__group__tab-list__tab__button--click:focus{\n    border: none;\n    border-top: 1px solid #c7cbcb;\n    border-left: 1px solid #c7cbcb;\n    border-right: 1px solid #c7cbcb;\n  }\n  .kuc-tabs-1-18-0__group__tab-list__tab__button[aria-selected="true"] {\n    background-color: var(--kuc-tabs-tab-background-color-selected, #ffffff);\n    color: var(--kuc-tabs-tab-color-selected, #333333);\n    box-shadow: none;\n  }\n  .kuc-tabs-1-18-0__group__tab-panel {\n    display:block;\n    padding: 0;\n    border-top: 0;\n  }\n  .kuc-tabs-1-18-0__group__tab-panel[border-visible] {\n    box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);\n  }\n  .kuc-tabs-1-18-0__group__tab-panel__content[hidden]{\n    display:none;\n  }\n'),Un=e}})();var Pn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Rn;(()=>{if(Rn=window.customElements.get("kuc-text-1-18-0"),!Rn){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=ki();const t=Ci(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};fi(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,fi(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};fi(this,"input",t)}render(){return $e`
        <div class="kuc-text-1-18-0__group">
          <label
            class="kuc-text-1-18-0__group__label"
            for="${this._GUID}-label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </label>
          <div class="kuc-text-1-18-0__group__input-form">
            <div class="kuc-text-1-18-0__group__input-form__prefix-outer">
              <span
                class="kuc-text-1-18-0__group__input-form__prefix-outer__prefix"
                ?hidden="${!this.prefix}"
                >${this.prefix}</span
              >
            </div>
            <div class="kuc-text-1-18-0__group__input-form__input-outer">
              <input
                class="kuc-text-1-18-0__group__input-form__input-outer__input"
                id="${this._GUID}-label"
                placeholder="${this.placeholder}"
                textAlign="${this.textAlign}"
                type="text"
                .value="${this.value}"
                aria-required="${this.requiredIcon}"
                aria-invalid="${""!==this.error}"
                aria-describedby="${this._GUID}-error"
                @focus="${this._handleFocusInput}"
                @change="${this._handleChangeInput}"
                @input="${this._handleInputText}"
                ?disabled="${this.disabled}"
              />
            </div>
            <div class="kuc-text-1-18-0__group__input-form__suffix-outer">
              <span
                class="kuc-text-1-18-0__group__input-form__suffix-outer__suffix"
                ?hidden="${!this.suffix}"
                >${this.suffix}</span
              >
            </div>
          </div>
          <kuc-base-error-1-18-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-18-0>
        </div>
      `}}Pn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Pn([Fe({type:String})],e.prototype,"error",void 0),Pn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Pn([Fe({type:String})],e.prototype,"label",void 0),Pn([Fe({type:String})],e.prototype,"placeholder",void 0),Pn([Fe({type:String})],e.prototype,"prefix",void 0),Pn([Fe({type:String})],e.prototype,"suffix",void 0),Pn([Fe({type:String})],e.prototype,"textAlign",void 0),Pn([Fe({type:String})],e.prototype,"value",void 0),Pn([Fe({type:Boolean})],e.prototype,"disabled",void 0),Pn([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),Pn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),window.customElements.define("kuc-text-1-18-0",e),vi('\nkuc-text-1-18-0,\nkuc-text-1-18-0 *,\nkuc-text-1-18-0:lang(en),\nkuc-text-1-18-0:lang(en) * {\n  font-family: sans-serif;\n}\nkuc-text-1-18-0:lang(es),\nkuc-text-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\nkuc-text-1-18-0:lang(ja),\nkuc-text-1-18-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-text-1-18-0:lang(zh),\nkuc-text-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-text-1-18-0:lang(zh-TW),\nkuc-text-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC",sans-serif;\n}\nkuc-text-1-18-0 {\n  font-size: 14px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  min-width: var(--kuc-text-input-width, 177px);\n  width: var(--kuc-text-input-width, 177px);\n  line-height: 1.5;\n}\nkuc-text-1-18-0[hidden] {\n  display: none;\n}\n.kuc-text-1-18-0__group {\n  border: none;\n  padding: 0px;\n  height: auto;\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  margin: 0px;\n}\n.kuc-text-1-18-0__group__label {\n  display: inline-block;\n  padding: 4px 0px 8px 0px;\n  white-space: nowrap;\n}\n.kuc-text-1-18-0__group__label[hidden] {\n  display: none;\n}\n.kuc-text-1-18-0__group__input-form {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.kuc-text-1-18-0__group__input-form__prefix-outer__prefix {\n  padding-right: 4px;\n  white-space: nowrap;\n}\n.kuc-text-1-18-0__group__input-form__input-outer {\n  display: flex;\n  min-width: var(--kuc-text-input-width, 26px);\n  width: var(--kuc-text-input-width, 100%);\n}\ninput[type="text"].kuc-text-1-18-0__group__input-form__input-outer__input {\n  width: var(--kuc-text-input-width, 100%);\n  height: var(--kuc-text-input-height, 40px);\n  font-size: var(--kuc-text-input-font-size, 14px);\n  color: var(--kuc-text-input-color, #000000);\n  padding: 0 8px;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n.kuc-text-1-18-0__group__input-form__input-outer__input[textAlign="left"] {\n  text-align: left;\n}\n.kuc-text-1-18-0__group__input-form__input-outer__input[textAlign="right"] {\n  text-align: right;\n}\ninput[type=text].kuc-text-1-18-0__group__input-form__input-outer__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\ninput[type=text].kuc-text-1-18-0__group__input-form__input-outer__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.kuc-text-1-18-0__group__input-form__suffix-outer__suffix {\n  padding-left: 4px;\n  white-space: nowrap;\n}\n'),Rn=e}})();var zn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let jn;(()=>{if(jn=window.customElements.get("kuc-textarea-1-18-0"),jn)return;class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._onResize=!1,this._GUID=ki();const t=Ci(e);Object.assign(this,t)}_handleFocusTextarea(e){const t={value:this.value};fi(this,"focus",t)}_handleChangeTextarea(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,fi(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};fi(this,"input",t)}_handleMouseDownResize(){this._onResize=!0}_handleMouseUpDocument(){this._onResize=!1}_handleMouseMoveDocument(e){if(!this._onResize)return;const t=this._textarea.getBoundingClientRect();let i=e.clientX-t.left,n=e.clientY-t.top;i<16&&(i=16),n<16&&(n=16),this._container.style.width=i+"px",this._textarea.style.height=n+"px"}_getResizerButtonSvgTemplate(){return Ce`
      <svg height="16" width="16">
        <g fill="none" stroke="#b6b6b6" stroke-width="2">
          <line x1="14" x2="16" y1="15" y2="15" />
          <line x1="14" x2="16" y1="11" y2="11" />
          <line x1="14" x2="16" y1="7" y2="7" />
          <line x1="10" x2="12" y1="15" y2="15" />
          <line x1="6" x2="8" y1="15" y2="15" />
          <line x1="10" x2="12" y1="11" y2="11" />
        </g>
      </svg>
      `}firstUpdated(){document.addEventListener("mousemove",(e=>this._handleMouseMoveDocument(e))),document.addEventListener("mouseup",(e=>this._handleMouseUpDocument()))}render(){return $e`
        <div class="kuc-textarea-1-18-0__group">
          <label
            class="kuc-textarea-1-18-0__group__label"
            ?hidden="${!this.label}"
            for="${this._GUID}-label"
          >
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </label>
          <div class="kuc-textarea-1-18-0__group__container">
            <textarea
              id="${this._GUID}-label"
              class="kuc-textarea-1-18-0__group__textarea"
              placeholder="${this.placeholder}"
              .value="${this.value}"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${""!==this.error}"
              @change="${this._handleChangeTextarea}"
              @focus="${this._handleFocusTextarea}"
              @input="${this._handleInputTextArea}"
              ?disabled="${this.disabled}"
            >
            </textarea>
            <div
              class="kuc-textarea-1-18-0__group__resizer"
              @mousedown="${this._handleMouseDownResize}"
              ?hidden="${this.disabled}"
            >
              ${this._getResizerButtonSvgTemplate()}
            </div>
          </div>
          <kuc-base-error-1-18-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ?hidden="${!this.error}"
          ></kuc-base-error-1-18-0>
        </div>
      `}}zn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),zn([Fe({type:String})],e.prototype,"error",void 0),zn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),zn([Fe({type:String})],e.prototype,"label",void 0),zn([Fe({type:String})],e.prototype,"placeholder",void 0),zn([Fe({type:String})],e.prototype,"value",void 0),zn([Fe({type:Boolean})],e.prototype,"disabled",void 0),zn([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),zn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),zn([Ke(".kuc-textarea-1-18-0__group__container")],e.prototype,"_container",void 0),zn([Ke(".kuc-textarea-1-18-0__group__textarea")],e.prototype,"_textarea",void 0),window.customElements.define("kuc-textarea-1-18-0",e),vi('\n  kuc-textarea-1-18-0,\n  kuc-textarea-1-18-0 *,\n  kuc-textarea-1-18-0:lang(en),\n  kuc-textarea-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-textarea-1-18-0:lang(es),\n  kuc-textarea-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-textarea-1-18-0:lang(ja),\n  kuc-textarea-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-textarea-1-18-0:lang(zh),\n  kuc-textarea-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-textarea-1-18-0:lang(zh-TW),\n  kuc-textarea-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  kuc-textarea-1-18-0 {\n    font-size: 14px;\n    color: var(--kuc-textarea-input-color, #333333);\n    display: inline-table;\n    vertical-align: top;\n    width: var(--kuc-textarea-input-width, 299px);\n    height: var(--kuc-textarea-input-height, 125px);\n    line-height: 1.5;\n  }\n  kuc-textarea-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-textarea-1-18-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    vertical-align: top;\n    width: 100%;\n    margin: 0px;\n    white-space: normal;\n  }\n  .kuc-textarea-1-18-0__group__label {\n    white-space: nowrap;\n    display: inline-block;\n    padding: 4px 0px 8px 0px;\n  }\n  .kuc-textarea-1-18-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-textarea-1-18-0__group__container {\n    position: relative;\n    display: inline-table;\n    width: var(--kuc-textarea-input-width, 100%);\n    min-width: var(--kuc-textarea-input-width, 100%);\n  }\n  textarea.kuc-textarea-1-18-0__group__textarea {\n    display: block;\n    border: 1px solid #e3e7e8;\n    box-sizing: border-box;\n    font-size: var(--kuc-textarea-input-font-size, 14px);\n    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n    min-width: var(--kuc-textarea-input-width, 299px);\n    min-height: var(--kuc-textarea-input-height, 125px);\n    width: var(--kuc-textarea-input-width, 299px);\n    height: var(--kuc-textarea-input-height, 125px);\n    padding: 8px;\n    resize: none;\n    width: 100%;\n    background-color: #ffffff;\n    color: var(--kuc-textarea-input-color, #333333);\n  }\n  .kuc-textarea-1-18-0__group__textarea:focus {\n    outline: none;\n    border-color: #3498db;\n    box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n    border: 1px solid #3498db;\n    background-color: #ffffff;\n    color: var(--kuc-textarea-input-color, #333333);\n  }\n  .kuc-textarea-1-18-0__group__textarea:disabled {\n    color: #888888;\n    background-color: #d4d7d7;\n    box-shadow: none;\n    cursor: not-allowed;\n    resize: none;\n  }\n  .kuc-textarea-1-18-0__group__resizer {\n    position: absolute;\n    width: 16px;\n    height: 16px;\n    cursor: se-resize;\n    float: right;\n    margin: -16px 0px;\n    right: 0px;\n  }\n'),jn=e})();var Gn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Fn;(()=>{if(Fn=window.customElements.get("kuc-time-picker-1-18-0"),!Fn){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.max="",this.min="",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this.timeStep=30,this._errorText="",this._inputValue="",this._errorInvalid="",this._inputMax="",this._inputMin="",this._inputTimeStep=30,this._valueConverted="",this._GUID=ki();const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){if(e.has("max")||e.has("min")){let e=this._inputMin,t=this._inputMax;if(void 0===this.max||""===this.max)t=Tt;else{if(!Ei(this.max))return this.throwErrorAfterUpdateComplete(Dt),!1;t=this.max=ui(this.max)}if(void 0===this.min||""===this.min)e=St;else{if(!Ei(this.min))return this.throwErrorAfterUpdateComplete(Lt),!1;e=this.min=ui(this.min)}if(zt(t,e)<0)return this.throwErrorAfterUpdateComplete(Ct),!1;this._inputMin=e,this._inputMax=t}if(e.has("timeStep")){if(!Hi(this.timeStep))return this.throwErrorAfterUpdateComplete(Et),!1;if(!Si(this.timeStep,this._inputMax,this._inputMin))return this.throwErrorAfterUpdateComplete(Vt),!1;this._inputTimeStep=this.timeStep}return!(void 0!==this.value&&""!==this.value&&(Ei(this.value)?(this._valueConverted=ui(this.value),e.has("value")&&(zt(this._valueConverted,this._inputMin)<0||zt(this._inputMax,this._valueConverted)<0)&&(this.throwErrorAfterUpdateComplete(It),1)):(this.throwErrorAfterUpdateComplete(At),1)))}update(e){e.has("value")&&(void 0===this.value?""===this._errorInvalid&&(this._inputValue=""):(this.value=""===this.value?this.value:this._valueConverted,this._inputValue=this.value)),(e.has("max")||e.has("min")||e.has("value"))&&void 0!==this.value&&(this._errorInvalid=""),this._errorText=this._errorInvalid||this.error,super.update(e)}render(){return $e`
        <fieldset
          class="kuc-time-picker-1-18-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-time-picker-1-18-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-label-1-18-0>
          </legend>
          <kuc-base-time-1-18-0
            class="kuc-time-picker-1-18-0__group__input"
            .value="${this._inputValue}"
            .hour12="${this.hour12}"
            .disabled="${this.disabled}"
            .timeStep="${this._inputTimeStep}"
            .min="${this._inputMin}"
            .max="${this._inputMax}"
            .language="${this._getLanguage()}"
            @kuc:base-time-change="${this._handleTimeChange}"
          >
          </kuc-base-time-1-18-0>
          <kuc-base-error-1-18-0
            .text="${this._errorText}"
            .guid="${this._GUID}"
            ?hidden="${!this._errorText}"
          ></kuc-base-error-1-18-0>
        </fieldset>
      `}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const t={value:e.detail.value,oldValue:this.value};e.detail.error?(t.value=void 0,this.value=void 0,this._errorInvalid=e.detail.error,this.error=""):(this.value=e.detail.value,this._errorInvalid=""),this._inputValue=e.detail.value,fi(this,"change",t)}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}Gn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Gn([Fe({type:String})],e.prototype,"error",void 0),Gn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Gn([Fe({type:String})],e.prototype,"label",void 0),Gn([Fe({type:String,attribute:"lang",reflect:!0,converter:ri})],e.prototype,"language",void 0),Gn([Fe({type:String})],e.prototype,"max",void 0),Gn([Fe({type:String})],e.prototype,"min",void 0),Gn([Fe({type:String})],e.prototype,"value",void 0),Gn([Fe({type:Boolean})],e.prototype,"disabled",void 0),Gn([Fe({type:Boolean})],e.prototype,"hour12",void 0),Gn([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),Gn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),Gn([Fe({type:Number})],e.prototype,"timeStep",void 0),window.customElements.define("kuc-time-picker-1-18-0",e),vi('\nkuc-time-picker-1-18-0,\nkuc-time-picker-1-18-0 *,\nkuc-time-picker-1-18-0:lang(en),\nkuc-time-picker-1-18-0:lang(en) * {\n  font-family: sans-serif;\n}\nkuc-time-picker-1-18-0:lang(ja),\nkuc-time-picker-1-18-0:lang(ja) * {\n  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n    sans-serif;\n}\nkuc-time-picker-1-18-0:lang(zh),\nkuc-time-picker-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", sans-serif;\n}\nkuc-time-picker-1-18-0:lang(zh-TW),\nkuc-time-picker-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC"\n}\nkuc-time-picker-1-18-0:lang(es),\nkuc-time-picker-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\nkuc-time-picker-1-18-0 {\n  font-size: 14px;\n  color: var(--kuc-time-picker-input-color, #333333);\n  display: inline-table;\n  max-width: var(--kuc-time-picker-input-width, 85px);\n  width: var(--kuc-time-picker-input-width, 85px);\n  vertical-align: top;\n  line-height: 1.5;\n}\n.kuc-time-picker-1-18-0__group__input {\n  position: relative;\n}\nkuc-time-picker-1-18-0[hidden] {\n  display: none;\n}\n.kuc-time-picker-1-18-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n\n.kuc-time-picker-1-18-0__group kuc-base-time-1-18-0 {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.kuc-time-picker-1-18-0__group .kuc-base-time-1-18-0__group {\n  max-width: var(--kuc-time-picker-input-width, 85px);\n  width: var(--kuc-time-picker-input-width, 85px);\n  font-size: var(--kuc-time-picker-input-font-size, 14px);\n  height: var(--kuc-time-picker-input-height, 40px);\n  color: var(--kuc-time-picker-input-color, #333333);\n}\n.kuc-time-picker-1-18-0__group .kuc-base-time-1-18-0__group input[type=text].kuc-base-time-1-18-0__group__hours,\n.kuc-time-picker-1-18-0__group .kuc-base-time-1-18-0__group input[type=text].kuc-base-time-1-18-0__group__minutes,\n.kuc-time-picker-1-18-0__group .kuc-base-time-1-18-0__group input.kuc-base-time-1-18-0__group__suffix,\n.kuc-time-picker-1-18-0__group .kuc-base-time-1-18-0__group--focus {\n  color: var(--kuc-time-picker-input-color, #333333);\n}\n.kuc-time-picker-1-18-0__group__label {\n  padding: 4px 0px 8px 0px;\n  display: inline-block;\n  white-space: nowrap;\n}\n.kuc-time-picker-1-18-0__group__label[hidden] {\n  display: none;\n}\n'),Fn=e}})();var Wn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let qn;(()=>{if(qn=window.customElements.get("kuc-tooltip-1-18-0"),!qn){class e extends mi{constructor(e){super(),this.className="",this.id="",this.placement="top",this.title="",this.container="",this.describeChild=!1,this._container="",this._GUID=ki();const t=Ci(e);Object.assign(this,t),this._globalEscapeBound=this._globalEscape.bind(this)}update(e){e.has("container")&&(this._container=li(this.container)),super.update(e)}render(){return $e`
        <div
          class="kuc-tooltip-1-18-0__group kuc-tooltip-1-18-0__group--${this._getPlacement()}"
        >
          <div
            class="kuc-tooltip-1-18-0__group__container"
            @focusin="${this._handleFocusinContainer}"
            @focusout="${this._handleFocusoutContainer}"
            @mouseenter="${this._handleMouseEnterContainer}"
            @mouseleave="${this._handleMouseLeaveContainer}"
            @touchstart="${this._handleTouchStartContainer}"
          >
            ${this._container}
          </div>
          ${this._getTitleTemplate()}
        </div>
      `}updated(){this._initializeFirstChildElement(),this.describeChild?this._setChildTitleAttribute():this._setChildAriaLabelAttribute()}_handleMouseEnterContainer(){this._openTooltip()}_handleTouchStartContainer(){this._openTooltip()}_handleMouseLeaveContainer(e){const t=e.relatedTarget;this._titleWrapper&&this._titleWrapper.contains(t)||this._closeTooltip()}_initializeFirstChildElement(){if("string"!=typeof this._container){const e=this._groupContainerEL.firstElementChild;e&&!e.getAttribute("aria-describedby")&&(this._firstChildEl=e)}}_setChildTitleAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute("title",this.title),this._firstChildEl.removeAttribute("aria-label"))}_setChildAriaLabelAttribute(){this._firstChildEl&&(this._firstChildEl.setAttribute("aria-label",this.title),this._firstChildEl.removeAttribute("title"))}_getTitleTemplate(){return this.title?$e`
        <div
          id="${this._GUID}-title"
          class="kuc-tooltip-1-18-0__group__title kuc-tooltip-1-18-0__group__title--hidden"
          role="tooltip"
          @mouseleave="${this._handleMouseLeaveTitle}"
        >
          <div class="kuc-tooltip-1-18-0__group__title__wrapper">
            <div class="kuc-tooltip-1-18-0__group__title__wrapper__arrow"></div>
            <div class="kuc-tooltip-1-18-0__group__title__wrapper__text">
              ${this.title}
            </div>
          </div>
        </div>
      `:$e``}_handleMouseLeaveTitle(e){const t=e.relatedTarget;this._groupContainerEL.contains(t)||this._closeTooltip()}_handleFocusinContainer(){this._openTooltip()}_handleFocusoutContainer(){this._closeTooltip()}_openTooltip(){this._updateChildElementAttributes(!0),this._showTooltip(),this._attachGlobalListener()}_closeTooltip(){this._updateChildElementAttributes(!1),this._hideTooltip(),this._removeGlobalListener()}_updateChildElementAttributes(e){if(this._firstChildEl&&this.describeChild){if(e)return this._firstChildEl.removeAttribute("title"),void this._firstChildEl.setAttribute("aria-describedby",`${this._GUID}-title`);this._firstChildEl.removeAttribute("aria-describedby"),this._firstChildEl.setAttribute("title",this.title)}}_showTooltip(){0!==this._tooltips.length&&this._tooltips.forEach((e=>{e.id===`${this._GUID}-title`&&e.classList.remove("kuc-tooltip-1-18-0__group__title--hidden")}))}_hideTooltip(){0!==this._tooltips.length&&this._tooltips.forEach((e=>{e.id===`${this._GUID}-title`&&e.classList.add("kuc-tooltip-1-18-0__group__title--hidden")}))}_attachGlobalListener(){document.addEventListener("keydown",this._globalEscapeBound)}_removeGlobalListener(){document.removeEventListener("keydown",this._globalEscapeBound)}_globalEscape(e){"Escape"!==e.key&&"Esc"!==e.key||this._closeTooltip()}_getPlacement(){return["top","bottom","left","right"].includes(this.placement)?this.placement:"top"}}Wn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Wn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Wn([Fe({type:String})],e.prototype,"placement",void 0),Wn([Fe({type:String})],e.prototype,"title",void 0),Wn([Fe()],e.prototype,"container",void 0),Wn([Fe({type:Boolean})],e.prototype,"describeChild",void 0),Wn([Ke(".kuc-tooltip-1-18-0__group__container")],e.prototype,"_groupContainerEL",void 0),Wn([Ke(".kuc-tooltip-1-18-0__group__title__wrapper")],e.prototype,"_titleWrapper",void 0),Wn([Je(".kuc-tooltip-1-18-0__group__title")],e.prototype,"_tooltips",void 0),window.customElements.define("kuc-tooltip-1-18-0",e),vi('\n  kuc-tooltip-1-18-0,\n  kuc-tooltip-1-18-0 *,\n  kuc-tooltip-1-18-0:lang(en),\n  kuc-tooltip-1-18-0:lang(en) * {\n    font-family: sans-serif;\n  }\n  kuc-tooltip-1-18-0:lang(es),\n  kuc-tooltip-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-tooltip-1-18-0:lang(ja),\n  kuc-tooltip-1-18-0:lang(ja) * {\n    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,\n      sans-serif;\n  }\n  kuc-tooltip-1-18-0:lang(zh),\n  kuc-tooltip-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", sans-serif;\n  }\n  kuc-tooltip-1-18-0:lang(zh-TW),\n  kuc-tooltip-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC",sans-serif;\n  }\n  .kuc-tooltip-1-18-0__group__title--hidden {\n    display: none;\n  }\n  .kuc-tooltip-1-18-0__group {\n    position: relative;\n    display: inline-block;\n  }\n  .kuc-tooltip-1-18-0__group::after {\n    position: absolute;\n    right: -20%;\n    top: 100%;\n    left: -20%;\n    display: block;\n    height: calc(0.5em * 2);\n  }\n  .kuc-tooltip-1-18-0__group__title .kuc-tooltip-1-18-0__group__title__wrapper__text {\n    max-width: var(--kuc-tooltip-width, 250px);\n    width: var(--kuc-tooltip-width, auto);\n    min-height: var(--kuc-tooltip-height, 32px);;\n    height: var(--kuc-tooltip-height, auto);\n    padding: 6px 8px;\n    color: var(--kuc-tooltip-color, #ffffff);\n    text-align: start;\n    text-decoration: none;\n    word-wrap: break-word;\n    overflow: auto;\n    white-space: normal;\n    background-color: var(--kuc-tooltip-background-color, #000000);\n    font-size: var(--kuc-tooltip-font-size);\n    border-radius: 6px;\n    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);\n    box-sizing: border-box;\n  }\n  .kuc-tooltip-1-18-0__group__title {\n    position: absolute;\n    top: calc(100% + calc(0.5em * 2));\n    left: 50%;\n    transform: translateX(-50%);\n    margin: 0;\n    border-radius: 0.25em;\n    color: var(--kuc-tooltip-color, #ffffff);\n    width: max-content;\n    z-index: 1000;\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--top > .kuc-tooltip-1-18-0__group__title {\n    top: unset;\n    bottom: 100%;\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--bottom > .kuc-tooltip-1-18-0__group__title {\n    width: max-content;\n    top: auto;\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--left > .kuc-tooltip-1-18-0__group__title {\n    width: max-content;\n    height: fit-content;\n    margin: auto 0;\n    right: 100%;\n    left: auto;\n    top: 0;\n    bottom: 0;\n    transform: translateX(0);\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--right > .kuc-tooltip-1-18-0__group__title {\n    width: max-content;\n    height: fit-content;\n    margin: auto 0;\n    left: 100%;\n    top: 0;\n    bottom: 0;\n    transform: translateX(0);\n  }\n  .kuc-tooltip-1-18-0__group .kuc-tooltip-1-18-0__group__title__wrapper__arrow {\n    border: 0.5em solid transparent;\n    border-bottom-color: var(--kuc-tooltip-background-color, #000000);\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--top > .kuc-tooltip-1-18-0__group__title .kuc-tooltip-1-18-0__group__title__wrapper__arrow {\n    border-top-color: var(--kuc-tooltip-background-color, #000000);\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    margin: auto 0;\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--left > .kuc-tooltip-1-18-0__group__title .kuc-tooltip-1-18-0__group__title__wrapper__arrow {\n    border-left-color: var(--kuc-tooltip-background-color, #000000);\n    border-bottom-color: transparent;\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--right > .kuc-tooltip-1-18-0__group__title .kuc-tooltip-1-18-0__group__title__wrapper__arrow {\n    border-right-color: var(--kuc-tooltip-background-color, #000000);\n    border-bottom-color: transparent;\n    width: fit-content;\n    height: fit-content;\n    margin: auto 0;\n    top: 0;\n    bottom: 0;\n    right: 100%;\n    left: auto;\n  }\n  .kuc-tooltip-1-18-0__group .kuc-tooltip-1-18-0__group__title__wrapper {\n    display: flex;\n    align-items: center;\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--top > .kuc-tooltip-1-18-0__group__title .kuc-tooltip-1-18-0__group__title__wrapper {\n    flex-direction: column-reverse;\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--bottom > .kuc-tooltip-1-18-0__group__title .kuc-tooltip-1-18-0__group__title__wrapper {\n    flex-direction: column;\n  }\n  .kuc-tooltip-1-18-0__group.kuc-tooltip-1-18-0__group--left > .kuc-tooltip-1-18-0__group__title .kuc-tooltip-1-18-0__group__title__wrapper {\n    flex-direction: row-reverse;\n  }\n'),qn=e}})();var Kn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Yn;(()=>{if(Yn=window.customElements.get("kuc-mobile-button-1-18-0"),!Yn){class e extends mi{constructor(e){super(),this.className="",this.id="",this.text="",this.type="normal",this.content="",this.disabled=!1,this.visible=!0;const t=Ci(e);Object.assign(this,t)}_handleClickButton(e){e.stopPropagation(),fi(this,"click")}_getButtonColorType(){return"normal"===this.type||"submit"===this.type?this.type:"normal"}render(){return $e`
        <button
          type="button"
          class="kuc-mobile-button-1-18-0__button kuc-mobile-button-1-18-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.content?li(this.content):this.text}
        </button>
      `}}Kn([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Kn([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Kn([Fe({type:String})],e.prototype,"text",void 0),Kn([Fe({type:String})],e.prototype,"type",void 0),Kn([Fe()],e.prototype,"content",void 0),Kn([Fe({type:Boolean})],e.prototype,"disabled",void 0),Kn([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-button-1-18-0",e),vi('\n  kuc-mobile-button-1-18-0,\n  kuc-mobile-button-1-18-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-button-1-18-0:lang(es),\n  kuc-mobile-button-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-mobile-button-1-18-0:lang(zh),\n  kuc-mobile-button-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-button-1-18-0:lang(zh-TW),\n  kuc-mobile-button-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-button-1-18-0 {\n    display: inline-block;\n    vertical-align: top;\n  }\n  kuc-mobile-button-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-button-1-18-0__button {\n    min-width: var(--kuc-mobile-button-width, 100px);\n    width: var(--kuc-mobile-button-width, auto);\n    height: var(--kuc-mobile-button-height, 42px);\n    padding: 0 12px;\n    user-select: none;\n    font-weight: 700;\n    font-size: var(--kuc-mobile-button-font-size, 14px);\n    line-height: 1;\n    display: grid;\n    align-items: center;\n    align-content: center;\n  }\n  .kuc-mobile-button-1-18-0__button:focus {\n    outline: none;\n  }\n  .kuc-mobile-button-1-18-0__button--submit {\n    border: 2px solid;\n    border-color: var(--kuc-mobile-button-background-color, #206694);\n    background-color: var(--kuc-mobile-button-background-color, #206694);\n    color: var(--kuc-mobile-button-text-color, #ffffff);\n    border-radius: 6px;\n  }\n  .kuc-mobile-button-1-18-0__button--submit:focus {\n    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));\n    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));\n  }\n  .kuc-mobile-button-1-18-0__button--submit:active {\n    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));\n    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));\n  }\n  .kuc-mobile-button-1-18-0__button--submit:disabled {\n    color: #ffffff;\n    border-color: #a5a5a5;\n    background: #a5a5a5;\n  }\n  .kuc-mobile-button-1-18-0__button--normal {\n    border: 2px solid;\n    border-color: var(--kuc-mobile-button-background-color, #206694);\n    background-color: var(--kuc-mobile-button-background-color, #ffffff);\n    color: var(--kuc-mobile-button-text-color, #206694);\n    border-radius: 6px;\n  }\n  .kuc-mobile-button-1-18-0__button--normal:focus {\n    border-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #206694));\n    background-color: var(--kuc-mobile-button-background-color-focus, var(--kuc-mobile-button-background-color, #ffffff));\n  }\n  .kuc-mobile-button-1-18-0__button--normal:active {\n    border-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #206694));\n    background-color: var(--kuc-mobile-button-background-color-active, var(--kuc-mobile-button-background-color, #ffffff));\n  }\n  .kuc-mobile-button-1-18-0__button--normal:disabled {\n    color: #a5a5a5;\n    border-color: #a5a5a5;\n    background-color: #ffffff;\n    cursor: default;\n  }\n'),Yn=e}})();var Jn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Zn extends mi{constructor(){super(...arguments),this.ariaLive="",this.guid="",this.text=""}render(){return $e`
      ${this.ariaLive&&""!==this.ariaLive?$e`
            <div
              class="kuc-base-mobile-error-1-18-0__error"
              .id="${this.guid}-error"
              role="alert"
              aria-live="${this.ariaLive}"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `:$e`
            <div
              class="kuc-base-mobile-error-1-18-0__error"
              .id="${this.guid}-error"
              role="alert"
              ?hidden="${!this.text}"
            >
              ${this.text}
            </div>
          `}
    `}}Jn([Fe({type:String})],Zn.prototype,"ariaLive",void 0),Jn([Fe({type:String})],Zn.prototype,"guid",void 0),Jn([Fe({type:String})],Zn.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-error-1-18-0")||(vi('\n  kuc-base-mobile-error-1-18-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-base-mobile-error-1-18-0:lang(es),\n  kuc-base-mobile-error-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-base-mobile-error-1-18-0:lang(zh),\n  kuc-base-mobile-error-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-base-mobile-error-1-18-0:lang(zh-TW),\n  kuc-base-mobile-error-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-base-mobile-error-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-base-mobile-error-1-18-0__error {\n    line-height: 1.5;\n    color: #000000;\n    background-color: #fdffc9;\n    border: 1px solid #e5db68;\n    border-radius: 0.4em;\n    padding: 0.4em 1em;\n    margin-top: 0.3em;\n    margin-left: 0.5em;\n  }\n  .kuc-base-mobile-error-1-18-0__error[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-mobile-error-1-18-0",Zn));var Xn=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class Qn extends mi{constructor(){super(...arguments),this.requiredIcon=!1,this.guid="",this.text=""}render(){return $e`
      ${this._getTextTemplate()}
      <span
        class="kuc-base-mobile-label-1-18-0__required-icon"
        ?hidden="${!this.requiredIcon}"
        >*</span
      >
    `}_getTextTemplate(){return this.guid&&""!==this.guid?$e`
          <span class="kuc-base-mobile-label-1-18-0__text" .id="${this.guid}-group"
            >${this.text}</span
          >
        `:$e` <span class="kuc-base-mobile-label-1-18-0__text">${this.text}</span> `}}Xn([Fe({type:Boolean})],Qn.prototype,"requiredIcon",void 0),Xn([Fe({type:String})],Qn.prototype,"guid",void 0),Xn([Fe({type:String})],Qn.prototype,"text",void 0),window.customElements.get("kuc-base-mobile-label-1-18-0")||(vi('\n  kuc-base-mobile-label-1-18-0 {\n    display: inline-table;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-base-mobile-label-1-18-0:lang(es) ,\n  kuc-base-mobile-label-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-base-mobile-label-1-18-0:lang(zh) ,\n  kuc-base-mobile-label-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-base-mobile-label-1-18-0:lang(zh-TW),\n  kuc-base-mobile-label-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-base-mobile-label-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-base-mobile-label-1-18-0__text {\n    text-shadow: 0 1px 0 #ffffff;\n    color: #888888;\n    white-space: normal;\n    font-size: 86%;\n  }\n  .kuc-base-mobile-label-1-18-0__required-icon {\n    font-size: 86%;\n    position: relative;\n    left: 3px;\n    color: #d01212;\n  }\n  .kuc-base-mobile-label-1-18-0__required-icon[hidden] {\n    display: none;\n  }\n'),window.customElements.define("kuc-base-mobile-label-1-18-0",Qn));var eo=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let to;(()=>{if(to=window.customElements.get("kuc-mobile-checkbox-1-18-0"),!to){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=ki();const t=Ci(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Mi(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}_getNewValueMapping(e,t){const i=parseInt(t,10),n=Object.keys(this._valueMapping),o={...this._valueMapping};return n.indexOf(t)>-1?(delete o[i],o):(o[i]=e,o)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.dataset.index||"0",n=t.value,o=this.value?[...this.value]:this.value,a=this._getNewValueMapping(n,i),s=this.items.map((e=>e.value)),r=Object.values(a).filter((e=>s.indexOf(e)>-1));if(r===o)return;const l=Object.keys(a).map((e=>parseInt(e,10)));this.value=r,this.selectedIndex=l,fi(this,"change",{oldValue:o,value:r})}_getCheckboxIconSvgTemplate(e){return Ce`
       <svg
         class="kuc-mobile-checkbox-1-18-0__group__select-menu__item__label__icon"
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
       `}_getSVGStrokeValue(e){return e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFITUNIbrXAAADHklEQVRIx63US2sTURQH8P9kmsykQtoMSbStreZRkRBxY3BR7EJwEyuo WQiCmy4EBXHhyi8g4qYfQCjYpRgQBK0GEoUmohYUsURjKz4WrTTNNDYzmUcz42Lymkfz0nN298z9 zeXcM0OgJeLoJxLkhTn14+P5uJJoWR3oy9Kx5xcCl6s4RybuQ2muk60PhXtmWc/xh8GL+0GBnvGu 599D/S9wwetOH51yg4UEt4H+B7jgZVKTkX0oQYUKEcNwttB9wwUvkwpFHOCg1lLEMOgZX43uE9ZY OwTdqgh3g7b12NYGG4yQ4KEYkoUD9nsnfX2NW8HLpAIRG3iLGge2/G32AweiZ1hjCUuWB8vlr6+8 gWRqBetRFljPXmiC4CaZlD+iWjRBAQeWy19bSaMACWiFCW5yKB24MpQueK3ZWHRwORRRLFke23VW hAoQTTYWpZMBFwkRPz4VT3s2zSydDLkEwyTUm8Dp2CZMxKJ0MuiqoAInSPw00Inaa/+gasEK2FnL Xi3km2wdJmJROul3lWrbnLDr6IShrg8R5bXXs5t5sJCa/wpbnT3sYiE3rkHEeIRJab1OmOqtKWjs Z2zFxSYLDGjsIVdRdxoOCsYjxGrlzNPl2AlzvR4yeI1l47K+QsJxbGnMV8Ru45vXUoKKEap8KVCi H0y4tkx1FSpkVHRsTgdTeEdOgSEstvHwU9TZUWrDkt2FaDitHkaBK2ZHThEMTFsV7MCHX5ZsFZKp CXpYhcRzxczoNMFYbWdRtWBVyBa9NZwY1TptY1R0k4CQeXtj84vxyowwoGj02LSNUTqyBCrPn93k vmPbOAlmuAeaRGVx8RbWUYrvGofPCm7QB6dtTHVPdgCCxv6JW4y1NdwFbYfYht0bRlzJSTzHLh04 Yp8wj5gDUlu2DRxGWMlJXPnrK3+ACulbSHdk28JAWMlJkFYz/qAjJDdOS0PuyHaAa7S8mg0EHSEJ KkjQEB69uN2J7QgDYTUnazQVUkCBvftyDuvYac92AbfSzhB7JzOPDZQ7sV3BDXrJkV1+gt/g4kon Vg8TbZ8kMQg7BAjogtXHX2EwhA6/OKOlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTA3VDA1 OjMzOjUzKzAwOjAwOdR5sgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0wN1QwNTozMzo1Mysw MDowMEiJwQ4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAiCAQAAACOh/P6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkCQcFIRBGJW6QAAACvklEQVRIx6XWQZKbRhSA4Z8GBhACenwC5wZUypXKMlRlmUVcXrtKHMEn meQEUmWfmnHZe65ATpDcIA3MMGKEhBdgGRAaWZqnjarp94H6PTWtNWg0tPEX54fARNzwT72qed8b Ny6weqFzhbO0Fg1rHlf9Ky+CdSw5X3q/O+x4WAro0S+ADSw5T4LQw6LBRFt+5rc9LV7CeokMA1xs bOYE+MvPixfCBpb0ExkGzDDR0bFG9EVwywahzwwDAWiIPf1pcSHcZ/U90NIuHrObv+UF8DTb0hoG utKjd+qgKzSA/R9mirWlN8lCw5Yn9RT9kh4shc6VtJdXUp9ENQzs18fZmkrdR2/Sr4/QC+e1dWuG m3AdVaqeYJ3QS3zp4xxhi+jHdD//215xF84TV17xRJEWI7pl/SSQ8wl2x5a1uu+xvaW4C/3kWl4T IJGhn1jSGLCz0E+k9HC6Bhuyj2nxg0r7o92cj13aDBsXn6BHt6yXSOlhY3QFHrJ59L/KOIA/9tJ0 dGYdbUsD0WOtSbZMs0ipnMcxfDtKE+jMCJBh8K8b2rgn2DzKVM6aYbkNcG496Q7SBOAAQhpJ/cG8 8eT8BFsx7iIBRmSmBmKQJtBx8HklXy2vL2BBwK//raNNumM3umBg4xFwrGTPsV3xflZ5VKbbEa2h Y2Jhoh+w9Ql2324/HaEFYrRIsGNDedd2wjEWxNctZ5o+jB0bylX2VqniGXawCX0PvWPDwyqLFcVB gx2FITtBt2weKwoqts/+sgGcd3Q9SX9j70+yI7giR6ksKu82B/SQPVWJEVxTUaBU9rZcDelz2YNX U03TfuIGd2F29z2fnTgJbaloaCAGd2Gitewf+YfsDHbyiLWlar/EMFvobCjjfJXxcAZ75Oy26+gm 3mIuqrhYZTyexR49FLZ0wyY2/qzSkpKns1jQmrOmf398ARuVc7WA4gOtAAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIwLTA5LTA3VDA1OjMzOjE2KzAwOjAw76ZY7wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MC0wOS0wN1QwNTozMzoxNiswMDowMJ774FMAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVh ZHlxyWU8AAAAAElFTkSuQmCC"}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return $e`
        <label
          for="${this._GUID}-item-${t}"
          class="kuc-mobile-checkbox-1-18-0__group__select-menu__item${e.disabled?" kuc-mobile-checkbox-1-18-0__group__select-menu__item--disabled":""}"
          ?borderVisible="${this.borderVisible}"
        >
          <input
            type="checkbox"
            id="${this._GUID}-item-${t}"
            class="kuc-mobile-checkbox-1-18-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            data-index="${t}"
            value="${void 0!==e.value?e.value:""}"
            aria-describedby="${this._GUID}-error}"
            aria-required="${this.requiredIcon}"
            aria-invalid="${""!==this.error}"
            ?disabled="${e.disabled||this.disabled}"
            @change="${this._handleChangeInput}"
          />
          <div class="kuc-mobile-checkbox-1-18-0__group__select-menu__item__label">
            ${this._getCheckboxIconSvgTemplate(i)}${void 0===e.label?e.value:e.label}
          </div>
        </label>
      `}shouldUpdate(e){return e.has("items")&&!Mi(this.items)?(this.throwErrorAfterUpdateComplete(ot),!1):e.has("value")&&!Mi(this.value)?(this.throwErrorAfterUpdateComplete(lt),!1):!(e.has("selectedIndex")&&!Mi(this.selectedIndex)&&(this.throwErrorAfterUpdateComplete(ut),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}render(){return $e`
        <fieldset class="kuc-mobile-checkbox-1-18-0__group">
          <legend
            class="kuc-mobile-checkbox-1-18-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-18-0>
          </legend>
          <div
            class="kuc-mobile-checkbox-1-18-0__group__select-menu ${this.requiredIcon?"kuc-mobile-checkbox-1-18-0__group__select-menu--required":""}"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-mobile-error-1-18-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-18-0>
        </fieldset>
      `}updated(){this._inputEls.forEach((e=>{e.checked=this.value.indexOf(e.value)>-1}))}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}}eo([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),eo([Fe({type:String})],e.prototype,"error",void 0),eo([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),eo([Fe({type:String})],e.prototype,"label",void 0),eo([Fe({type:Boolean})],e.prototype,"borderVisible",void 0),eo([Fe({type:Boolean})],e.prototype,"disabled",void 0),eo([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),eo([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),eo([Fe({type:Array})],e.prototype,"items",void 0),eo([Fe({type:Array})],e.prototype,"selectedIndex",void 0),eo([Fe({type:Array})],e.prototype,"value",void 0),eo([Je(".kuc-mobile-checkbox-1-18-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),eo([We()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-checkbox-1-18-0",e),vi('\n  kuc-mobile-checkbox-1-18-0,\n  kuc-mobile-checkbox-1-18-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-checkbox-1-18-0:lang(es),\n  kuc-mobile-checkbox-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-mobile-checkbox-1-18-0:lang(zh),\n  kuc-mobile-checkbox-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-checkbox-1-18-0:lang(zh-TW),\n  kuc-mobile-checkbox-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-checkbox-1-18-0 {\n    width: 100%;\n    display: inline-block;\n  }\n  kuc-mobile-checkbox-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-18-0__group {\n    border: none;\n    padding: 0px;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    box-sizing: border-box;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__label[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__label__text {\n    text-shadow: 0 1px 0 #ffffff;\n    color: #888888;\n    white-space: normal;\n    font-size: inherit;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__label__required-icon {\n    position: relative;\n    left: 3px;\n    color: #d01212;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__label__required-icon[hidden] {\n    display: none;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu[bordervisible] {\n    border-color: #b3b3b3;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 8px;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu[disabled],\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item--disabled {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu--required[bordervisible] {\n    border-color: #cf4a38;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 8px;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item[bordervisible] {\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 30px;\n    display: block;\n    border-bottom: 1px solid #b3b3b3;\n    padding: 8px;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item {\n    padding: 4px;\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 30px;\n    display: block;\n    padding: 8px;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item:last-child {\n    border-bottom: 0px;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu[bordervisible]\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item:first-child {\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu[bordervisible]\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item:last-child {\n    border-bottom-left-radius: 7px;\n    border-bottom-right-radius: 7px;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item__input[disabled]\n    + .kuc-mobile-checkbox-1-18-0__group__select-menu__item__label {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item__label {\n    position: relative;\n    margin: -7px 0px 0px 34px;\n    display: inline-block;\n    vertical-align: middle;\n    white-space: nowrap;\n    padding: 11px 13px 13px 0px;\n    font-size: 14.04px;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    left: -30px;\n    margin-top: -13px;\n    box-sizing: border-box;\n    width: 22px;\n    height: 22px;\n    background-size: 22px 17px;\n    content: "";\n  }\n  .kuc-mobile-checkbox-1-18-0__group__error {\n    line-height: 1.5;\n    border: 1px solid #e5db68;\n    background-color: #fdffc9;\n    margin-top: 0.3em;\n    margin-left: 0.5em;\n    padding: 0.4em 1em;\n    border-radius: 0.4em;\n    color: #000000;\n  }\n  .kuc-mobile-checkbox-1-18-0__group__error[hidden] {\n    display: none;\n  }\n'),to=e}})();var io=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let no;(()=>{if(no=window.customElements.get("kuc-mobile-dropdown-1-18-0"),!no){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._hasValueInItems=!1,this._GUID=ki();const t=Ci(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value;if(this.value===i&&this.selectedIndex===t.selectedIndex)return;const n={oldValue:this.value,value:i};this.value=i,this.selectedIndex=t.selectedIndex,fi(this,"change",n)}shouldUpdate(e){return e.has("items")&&!Mi(this.items)?(this.throwErrorAfterUpdateComplete(ot),!1):e.has("value")&&!Ai(this.value)?(this.throwErrorAfterUpdateComplete(dt),!1):!(e.has("selectedIndex")&&!Hi(this.selectedIndex)&&(this.throwErrorAfterUpdateComplete(ct),1))}willUpdate(e){if((e.has("items")||e.has("value"))&&(this._hasValueInItems=this.items.some((e=>e.value===this.value))),e.has("value")){if(""!==this.value||this._hasValueInItems)return;this.selectedIndex=-1}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}_getSelectedIndex(){if(!this.value&&!this._hasValueInItems)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return $e`
        <option
          value="${e.value||""}"
          ?selected="${i}"
          ?disabled="${e.disabled}"
        >
          ${void 0===e.label?e.value:e.label}
        </option>
      `}render(){return $e`
        <label
          class="kuc-mobile-dropdown-1-18-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-18-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-18-0>
        </label>
        <div class="kuc-mobile-dropdown-1-18-0__input-form">
          <div
            class="kuc-mobile-dropdown-1-18-0__input-form__select
            ${this.requiredIcon?"kuc--required":""}"
          >
            <select
              class="kuc-mobile-dropdown-1-18-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${""!==this.error}"
              ?disabled="${this.disabled}"
              @change="${this._handleChangeInput}"
            >
              ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-18-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-18-0>
      `}updated(e){e.has("selectedIndex")&&(this._selectEl.selectedIndex=this.selectedIndex),super.update(e)}}io([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),io([Fe({type:String})],e.prototype,"error",void 0),io([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),io([Fe({type:String})],e.prototype,"label",void 0),io([Fe({type:String})],e.prototype,"value",void 0),io([Fe({type:Number})],e.prototype,"selectedIndex",void 0),io([Fe({type:Boolean})],e.prototype,"disabled",void 0),io([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),io([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),io([Fe({type:Array})],e.prototype,"items",void 0),io([Ke(".kuc-mobile-dropdown-1-18-0__input-form__select__input")],e.prototype,"_selectEl",void 0),window.customElements.define("kuc-mobile-dropdown-1-18-0",e),vi('\n  kuc-mobile-dropdown-1-18-0,\n  kuc-mobile-dropdown-1-18-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-dropdown-1-18-0:lang(es),\n  kuc-mobile-dropdown-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-mobile-dropdown-1-18-0:lang(zh),\n  kuc-mobile-dropdown-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-dropdown-1-18-0:lang(zh-TW),\n  kuc-mobile-dropdown-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-dropdown-1-18-0 {\n    display: inline-block;\n    width: 100%;\n  }\n\n  kuc-mobile-dropdown-1-18-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-dropdown-1-18-0__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-dropdown-1-18-0__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-dropdown-1-18-0__input-form {\n    word-wrap: break-word;\n    min-height: 1em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n\n  .kuc-mobile-dropdown-1-18-0__input-form__select {\n    display: inline-block;\n    border-radius: 0.4em;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-dropdown-1-18-0__input-form__select.kuc--required {\n    border: 1px solid #cf4a38;\n  }\n\n  .kuc-mobile-dropdown-1-18-0__input-form__select__input {\n    min-width: 100px;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-dropdown-1-18-0__input-form__select__input:disabled {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),no=e}})();var oo=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ao;(()=>{if(ao=window.customElements.get("kuc-mobile-multi-choice-1-18-0"),!ao){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.selectedIndex=[],this.value=[],this._valueMapping={},this._GUID=ki();const t=Ci(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){const t="value"in e,i="selectedIndex"in e,n=e.selectedIndex||[];if(!t&&i){if(!Mi(n))return;const t=this._getValueMapping(e);this.value=this._getValidValue(t,n)}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=this.value?[...this.value]:this.value,n=Array.from(t.selectedOptions,(e=>e.value)),o=Array.from(t.selectedOptions,(e=>e.dataset.index)),a={value:n,oldValue:i};this.value=n,this.selectedIndex=o.map((e=>e?parseInt(e,10):0)),fi(this,"change",a)}shouldUpdate(e){return e.has("items")&&!Mi(this.items)?(this.throwErrorAfterUpdateComplete(ot),!1):e.has("value")&&!Mi(this.value)?(this.throwErrorAfterUpdateComplete(lt),!1):!(e.has("selectedIndex")&&!Mi(this.selectedIndex)&&(this.throwErrorAfterUpdateComplete(ut),1))}willUpdate(e){if(e.has("value")){if(this.value.length>0)return;this.selectedIndex=[]}}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this._valueMapping=this._getValueMapping({items:this.items,value:this.value,selectedIndex:this.selectedIndex}),this._setValueAndSelectedIndex()),super.update(e)}_getValueMapping(e){const t=e.items||[],i=e.value||[],n=e.selectedIndex||[],o=t.map((e=>e.value||"")),a=Object.assign({},o),s={};if(0===i.length){const e=this._getValidValue(a,n);return n.forEach(((t,i)=>s[t]=e[i])),s}return this._getValidSelectedIndex(a).forEach(((e,t)=>s[e]=i[t])),s}_getValidValue(e,t){return t.filter((t=>e[t])).map((t=>e[t]))}_getValidSelectedIndex(e){const t=[];for(let i=0;i<this.value.length;i++){const n=this.selectedIndex[i];if(e[n]===this.value[i]){t.push(n);continue}const o=this.items.findIndex((e=>e.value===this.value[i]));t.push(o)}return t}_setValueAndSelectedIndex(){this.value=Object.values(this._valueMapping),this.selectedIndex=Object.keys(this._valueMapping).map((e=>parseInt(e,10)))}_isCheckedItem(e,t){const i=Object.values(this._valueMapping),n=Object.keys(this._valueMapping);return i.filter(((i,o)=>i===e.value&&t===parseInt(n[o],10))).length>0}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return $e`
        <option
          value="${e.value||""}"
          data-index="${t}"
          ?selected="${void 0!==e.value&&i}"
          ?disabled="${e.disabled}"
        >
          ${void 0===e.label?e.value:e.label}
        </option>
      `}render(){return $e`
        <label
          class="kuc-mobile-multi-choice-1-18-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-18-0
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-mobile-label-1-18-0>
        </label>
        <div class="kuc-mobile-multi-choice-1-18-0__input-form">
          <div
            class="kuc-mobile-multi-choice-1-18-0__input-form__select
            ${this.requiredIcon?"kuc--required":""}"
          >
            <select
              class="kuc-mobile-multi-choice-1-18-0__input-form__select__input"
              id="${this._GUID}-label"
              aria-describedby="${this._GUID}-error"
              aria-required="${this.requiredIcon}"
              aria-invalid="${""!==this.error}"
              ?disabled="${this.disabled}"
              multiple
              @change="${this._handleChangeInput}"
            >
              ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
            </select>
          </div>
        </div>
        <kuc-base-mobile-error-1-18-0
          .text="${this.error}"
          .guid="${this._GUID}"
          ariaLive="assertive"
        >
        </kuc-base-mobile-error-1-18-0>
      `}}oo([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),oo([Fe({type:String})],e.prototype,"error",void 0),oo([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),oo([Fe({type:String})],e.prototype,"label",void 0),oo([Fe({type:Boolean})],e.prototype,"disabled",void 0),oo([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),oo([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),oo([Fe({type:Array})],e.prototype,"items",void 0),oo([Fe({type:Array})],e.prototype,"selectedIndex",void 0),oo([Fe({type:Array})],e.prototype,"value",void 0),oo([We()],e.prototype,"_valueMapping",void 0),window.customElements.define("kuc-mobile-multi-choice-1-18-0",e),vi('\n  kuc-mobile-multi-choice-1-18-0,\n  kuc-mobile-multi-choice-1-18-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-multi-choice-1-18-0:lang(es),\n  kuc-mobile-multi-choice-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-mobile-multi-choice-1-18-0:lang(zh),\n  kuc-mobile-multi-choice-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-multi-choice-1-18-0:lang(zh-TW),\n  kuc-mobile-multi-choice-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-multi-choice-1-18-0 {\n    display: inline-block;\n    width: 100%;\n  }\n\n  kuc-mobile-multi-choice-1-18-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__input-form {\n    word-wrap: break-word;\n    min-height: 1em;\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__input-form__select {\n    display: inline-block;\n    border-radius: 0.4em;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__input-form__select.kuc--required {\n    border: 1px solid #cf4a38;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__input-form__select__input {\n    min-width: 100px;\n    max-width: 100%;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__input-form__select__input:disabled {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__input-form__select__input option:disabled {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__input-form__select__input option:disabled[selected] {\n    background-color: #cecece; /* Chrome */\n    background-color: -moz-cellhighlight; /* Firefox */\n    opacity: 1;\n  }\n\n  .kuc-mobile-multi-choice-1-18-0__input-form__select__input:disabled option {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n  }\n'),ao=e}})();var so=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ro;(()=>{if(ro=window.customElements.get("kuc-mobile-radio-button-1-18-0"),!ro){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.value="",this.selectedIndex=-1,this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=ki();const t=Ci(e);this._setInitialValue(t),Object.assign(this,t)}_setInitialValue(e){!("value"in e)&&"selectedIndex"in e&&(this.value=this._getValue(e)||"")}willUpdate(e){if(e.has("value")){if(""!==this.value)return;this.selectedIndex=-1}}_handleChangeInput(e){e.stopPropagation();const t=e.target,i=t.value,n=t.dataset.index||"0",o=parseInt(n,10);if(this.value===i&&this.selectedIndex===o)return;const a={oldValue:this.value,value:i};this.value=i,this.selectedIndex=o,fi(this,"change",a)}_getRadioIconSvgTemplate(e,t){return Ce`
      <svg
        class="kuc-mobile-radio-button-1-18-0__group__select-menu__item__label__icon"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs>
        <radialGradient id="${this._GUID}-shadow">
          <stop offset="0%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="30%" style="stop-color:#5b5b5b;stop-opacity:0" />
          <stop offset="80%" style="stop-color:#5b5b5b;stop-opacity:0.1" />
          <stop offset="90%" style="stop-color:#5b5b5b;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#5b5b5b;stop-opacity:0.2" />
        </radialGradient>
      </defs>
        <circle
          fill="url(#shadow)"
          cx="10.5"
          cy="10.5"
          r="10.15"
          stroke="#bbbbbb" stroke-width="1"/>
        ${t?Ce`<circle cx="10.5" cy="10.5" r="6.5" fill="${"#5b5b5b"}"/>`:""}
      </svg>
    `}_isCheckedItem(e,t){return this.value?e.value===this.value&&this.selectedIndex===t:this.selectedIndex===t}_getItemTemplate(e,t){const i=this._isCheckedItem(e,t);return $e`
        <div
          class="kuc-mobile-radio-button-1-18-0__group__select-menu__item${e.disabled?" kuc-mobile-radio-button-1-18-0__group__select-menu__item--disabled":""}"
        >
          <input
            type="radio"
            aria-describedby="${this._GUID}-error"
            id="${this._GUID}-item-${t}"
            data-index="${t}"
            class="kuc-mobile-radio-button-1-18-0__group__select-menu__item__input"
            name="${this._GUID}-group"
            value="${void 0!==e.value?e.value:""}"
            aria-invalid="${""!==this.error}"
            aria-required="${this.requiredIcon}"
            ?disabled="${this.disabled||e.disabled}"
            @change="${this._handleChangeInput}"
          />
          <label
            class="kuc-mobile-radio-button-1-18-0__group__select-menu__item__label"
            for="${this._GUID}-item-${t}"
            >${this._getRadioIconSvgTemplate(this.disabled,i)}
            <div
              class="kuc-mobile-radio-button-1-18-0__group__select-menu__item__label__value"
            >
              ${void 0===e.label?e.value:e.label}
            </div>
          </label>
        </div>
      `}shouldUpdate(e){return e.has("items")&&!Mi(this.items)?(this.throwErrorAfterUpdateComplete(ot),!1):e.has("value")&&!Ai(this.value)?(this.throwErrorAfterUpdateComplete(dt),!1):!(e.has("selectedIndex")&&!Hi(this.selectedIndex)&&(this.throwErrorAfterUpdateComplete(ct),1))}update(e){(e.has("items")||e.has("value")||e.has("selectedIndex"))&&(this.selectedIndex=this._getSelectedIndex(),this.value=this._getValue({items:this.items,selectedIndex:this.selectedIndex})||""),super.update(e)}render(){return $e`
        <div class="kuc-mobile-radio-button-1-18-0__group">
          <div
            class="kuc-mobile-radio-button-1-18-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-18-0
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-18-0>
          </div>
          <div
            class="kuc-mobile-radio-button-1-18-0__group__select-menu"
            ?borderVisible="${this.borderVisible}"
            ?disabled="${this.disabled}"
          >
            ${this.items.map(((e,t)=>this._getItemTemplate(e,t)))}
          </div>
          <kuc-base-mobile-error-1-18-0
            .text="${this.error}"
            .guid="${this._GUID}"
            ariaLive="assertive"
          >
          </kuc-base-mobile-error-1-18-0>
        </div>
      `}updated(){this._inputEls.forEach(((e,t)=>{e.checked=this.value===e.value&&t===this.selectedIndex}))}_getSelectedIndex(){if(!this.value)return this.items[this.selectedIndex]?this.selectedIndex:-1;const e=this.items.findIndex((e=>e.value===this.value));if(-1===e)return-1;const t=this.items.findIndex(((e,t)=>e.value===this.value&&t===this.selectedIndex));return t>-1?t:e}_getValue(e){const t=(e.items||[])[0===e.selectedIndex||e.selectedIndex?e.selectedIndex:-1];return t?t.value:""}}so([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),so([Fe({type:String})],e.prototype,"error",void 0),so([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),so([Fe({type:String})],e.prototype,"label",void 0),so([Fe({type:String})],e.prototype,"value",void 0),so([Fe({type:Number})],e.prototype,"selectedIndex",void 0),so([Fe({type:Boolean})],e.prototype,"borderVisible",void 0),so([Fe({type:Boolean})],e.prototype,"disabled",void 0),so([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),so([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),so([Fe({type:Array})],e.prototype,"items",void 0),so([Je(".kuc-mobile-radio-button-1-18-0__group__select-menu__item__input")],e.prototype,"_inputEls",void 0),window.customElements.define("kuc-mobile-radio-button-1-18-0",e),vi('\n  kuc-mobile-radio-button-1-18-0,\n  kuc-mobile-radio-button-1-18-0 * {\n    font-size: 13px;\n    color: #333333;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-radio-button-1-18-0:lang(es),\n  kuc-mobile-radio-button-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-mobile-radio-button-1-18-0:lang(zh) ,\n  kuc-mobile-radio-button-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-radio-button-1-18-0:lang(zh-TW),\n  kuc-mobile-radio-button-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-radio-button-1-18-0 {\n    width: 100%;\n    display: inline-block;\n  }\n\n  kuc-mobile-radio-button-1-18-0[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group {\n    border: none;\n    height: auto;\n    display: inline-block;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__label {\n    display: inline-block;\n    font-size: 86%;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0px;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__label[hidden] {\n    display: none;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu {\n    margin-right: 0.5em;\n    margin-left: 0.5em;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu[bordervisible] {\n    border-color: #b3b3b3;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 0.4em;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu__item {\n    border: 1px solid transparent;\n    position: relative;\n    white-space: normal;\n    word-wrap: normal;\n    height: 45px;\n    display: block;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu[bordervisible]\n    .kuc-mobile-radio-button-1-18-0__group__select-menu__item {\n    border-bottom: 1px solid #b3b3b3;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu[bordervisible]\n    .kuc-mobile-radio-button-1-18-0__group__select-menu__item:last-child {\n    border-bottom: 0px;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu__item__input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu__item__label__icon {\n    position: absolute;\n    top: 50%;\n    box-sizing: border-box;\n    margin-top: -11px;\n    width: 21px;\n    height: 21px;\n    box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;\n    content: "";\n    border-radius: 9px;\n    left: 8px;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu__item__label__value {\n    height: 45px;\n    line-height: 45px;\n    padding-left: 35px;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu[disabled], \n  .kuc-mobile-radio-button-1-18-0__group__select-menu__item--disabled {\n    background-color: #d5d7d9;\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n  .kuc-mobile-radio-button-1-18-0__group__select-menu[bordervisible]\n  .kuc-mobile-radio-button-1-18-0__group__select-menu__item--disabled:last-child {\n    border-bottom-left-radius: 0.3em;\n    border-bottom-right-radius: 0.3em;\n  }\n  .kuc-mobile-radio-button-1-18-0__group__select-menu[bordervisible]\n  .kuc-mobile-radio-button-1-18-0__group__select-menu__item--disabled:first-child {\n    border-top-left-radius: 0.3em;\n    border-top-right-radius: 0.3em;\n  }\n\n  .kuc-mobile-radio-button-1-18-0__group__select-menu__item__label {\n    position: absolute;\n    white-space: nowrap;\n    width: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 100%;\n    padding: 0px;\n  }\n'),ro=e}})();var lo=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let uo;(()=>{if(uo=window.customElements.get("kuc-mobile-text-1-18-0"),!uo){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=ki();const t=Ci(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};fi(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,fi(this,"change",i)}_handleInputText(e){e.stopPropagation();const t={value:e.target.value,data:e.data};fi(this,"input",t)}render(){return $e`
        <label
          class="kuc-mobile-text-1-18-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-18-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-18-0>
        </label>
        <div class="kuc-mobile-text-1-18-0__input-form">
          <span
            class="kuc-mobile-text-1-18-0__input-form__prefix"
            ?hidden="${!this.prefix}"
            >${this.prefix}</span
          >
          <input
            class="kuc-mobile-text-1-18-0__input-form__input"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            textAlign="${this.textAlign}"
            type="text"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            aria-invalid="${""!==this.error}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputText}"
          />
          <span
            class="kuc-mobile-text-1-18-0__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <kuc-base-mobile-error-1-18-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-18-0>
      `}}lo([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),lo([Fe({type:String})],e.prototype,"error",void 0),lo([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),lo([Fe({type:String})],e.prototype,"label",void 0),lo([Fe({type:String})],e.prototype,"placeholder",void 0),lo([Fe({type:String})],e.prototype,"prefix",void 0),lo([Fe({type:String})],e.prototype,"suffix",void 0),lo([Fe({type:String})],e.prototype,"textAlign",void 0),lo([Fe({type:String})],e.prototype,"value",void 0),lo([Fe({type:Boolean})],e.prototype,"disabled",void 0),lo([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),lo([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-text-1-18-0",e),vi('\n  kuc-mobile-text-1-18-0,\n  kuc-mobile-text-1-18-0 * {\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-text-1-18-0:lang(es),\n  kuc-mobile-text-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-mobile-text-1-18-0:lang(zh),\n  kuc-mobile-text-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-text-1-18-0:lang(zh-TW),\n  kuc-mobile-text-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-text-1-18-0 {\n    display: block;\n  }\n  kuc-mobile-text-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-text-1-18-0__label {\n    display: inline-block;\n    font-weight: bold;\n    line-height: 1.5;\n    padding: 0;\n    margin: 0 0 4px 0;\n    white-space: nowrap;\n  }\n  .kuc-mobile-text-1-18-0__label[hidden] {\n    display: none;\n  }\n  .kuc-mobile-text-1-18-0__input-form {\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n    display: flex;\n    align-items: center;\n  }\n  .kuc-mobile-text-1-18-0__input-form__prefix {\n    margin-right: 4px;\n    color: #888888;\n  }\n  .kuc-mobile-text-1-18-0__input-form__prefix[hidden] {\n    display: none;\n  }\n  .kuc-mobile-text-1-18-0__input-form__input {\n    width: 100%;\n    min-width: 20px;\n    padding: 0.4em;\n    border: 1px solid #b3b3b3;\n    outline: 0;\n    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;\n    border-radius: 0.4em;\n    box-sizing: border-box;\n    text-align: left;\n  }\n  .kuc-mobile-text-1-18-0__input-form__input[aria-required="true"] {\n    border: 1px solid #cf4a38;\n  }\n  .kuc-mobile-text-1-18-0__input-form__input[textAlign="right"] {\n    text-align: right;\n  }\n  .kuc-mobile-text-1-18-0__input-form__input:disabled {\n    color: #999999;\n    background-color: #d5d7d9;\n    -webkit-text-fill-color: #999999;\n    opacity: 1;\n    -webkit-opacity: 1;\n  }\n  .kuc-mobile-text-1-18-0__input-form__suffix {\n    margin-left: 4px;\n    color: #888888;\n  }\n  .kuc-mobile-text-1-18-0__input-form__suffix[hidden] {\n    display: none;\n  }\n'),uo=e}})();var co=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let ho;(()=>{if(ho=window.customElements.get("kuc-mobile-textarea-1-18-0"),!ho){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=ki();const t=Ci(e);Object.assign(this,t)}_handleFocusInput(e){const t={value:this.value};fi(this,"focus",t)}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,fi(this,"change",i)}_handleInputTextArea(e){e.stopPropagation();const t={value:e.target.value,data:e.data};fi(this,"input",t)}render(){return $e`
        <label
          class="kuc-mobile-textarea-1-18-0__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-mobile-label-1-18-0
            .requiredIcon="${this.requiredIcon}"
            .text="${this.label}"
          ></kuc-base-mobile-label-1-18-0>
        </label>
        <div class="kuc-mobile-textarea-1-18-0__form">
          <textarea
            class="kuc-mobile-textarea-1-18-0__form__textarea"
            id="${this._GUID}-label"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            .value="${this.value}"
            aria-invalid="${""!==this.error}"
            aria-describedby="${this._GUID}-error"
            aria-required="${this.requiredIcon}"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            @input="${this._handleInputTextArea}"
          /></textarea>
        </div>
        <kuc-base-mobile-error-1-18-0 .guid="${this._GUID}" .text="${this.error}">
        </kuc-base-mobile-error-1-18-0>
      `}}co([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),co([Fe({type:String})],e.prototype,"error",void 0),co([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),co([Fe({type:String})],e.prototype,"label",void 0),co([Fe({type:String})],e.prototype,"placeholder",void 0),co([Fe({type:String})],e.prototype,"value",void 0),co([Fe({type:Boolean})],e.prototype,"disabled",void 0),co([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),co([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),window.customElements.define("kuc-mobile-textarea-1-18-0",e),vi('\n  kuc-mobile-textarea-1-18-0,\n  kuc-mobile-textarea-1-18-0 * {\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n  }\n  kuc-mobile-textarea-1-18-0:lang(es),\n  kuc-mobile-textarea-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-mobile-textarea-1-18-0:lang(zh),\n  kuc-mobile-textarea-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-textarea-1-18-0:lang(zh-TW),\n  kuc-mobile-textarea-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  kuc-mobile-textarea-1-18-0 {\n    display: block;\n  }\n  kuc-mobile-textarea-1-18-0[hidden] {\n    display: none;\n  }\n  .kuc-mobile-textarea-1-18-0__label {\n    padding: 0;\n    margin: 0 0 4px 0;\n    display: inline-block;\n    font-weight: bold;\n    line-height: 1.5;\n    white-space: nowrap;\n  }\n  .kuc-mobile-textarea-1-18-0__label[hidden] {\n    display: none;\n  }\n  .kuc-mobile-textarea-1-18-0__form {\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n  }\n  .kuc-mobile-textarea-1-18-0__form__textarea {\n    width: 100%;\n    height: 120px;\n    padding: 0.4em;\n    border: 1px solid #b3b3b3;\n    outline: 0;\n    box-shadow: 0 1px 0 #ffffff, inset 0 2px 3px #dadada;\n    border-radius: 0.4em;\n    box-sizing: border-box;\n    vertical-align: top;\n  }\n  .kuc-mobile-textarea-1-18-0__form__textarea[aria-required="true"] {\n    border: 1px solid #cf4a38;\n  }\n  .kuc-mobile-textarea-1-18-0__form__textarea:disabled {\n    color: #999999;\n    background-color: #d5d7d9;\n    opacity: 1;\n  }\n'),ho=e}})();var _o=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let po;(()=>{if(po=window.customElements.get("kuc-mobile-notification-1-18-0"),!po){class e extends mi{constructor(e){super(),this.className="",this.text="",this.duration=-1,this.container=document.body,this._isOpened=!1;const t=Ci(e);Object.assign(this,t)}_handleClickCloseButton(e){this.close()}_getCloseButtonSvgTemplate(){return Ce`
      <svg
        height="12"
        width="12"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"/>
          </g>
        </svg>
      `}_setAutoCloseTimer(){!Number.isFinite(this.duration)||this.duration<0||(this._clearAutoCloseTimer(),this._timeoutID=window.setTimeout((()=>{this.close()}),this.duration))}_clearAutoCloseTimer(){this._timeoutID&&window.clearTimeout(this._timeoutID)}open(){if(!this._isValidContainerElement())return document.body.appendChild(this),requestAnimationFrame((()=>{document.body.removeChild(this)})),void this.performUpdate();this.container.appendChild(this),this.performUpdate(),this.classList.remove("kuc-mobile-notification-fadeout-1-18-0"),this.classList.add("kuc-mobile-notification-fadein-1-18-0"),this._isOpened=!0,this._setAutoCloseTimer()}close(){this._close(),fi(this,"close")}_close(){this._isOpened=!1,this.classList.remove("kuc-mobile-notification-fadein-1-18-0"),this.classList.add("kuc-mobile-notification-fadeout-1-18-0"),this._clearAutoCloseTimer()}shouldUpdate(e){if(e.has("container")){if(null===this.container||void 0===this.container)return this._isOpened&&this._close(),!1;const e=this._isValidContainerElement(),t=!e||!document.contains(this.container);if(this._isOpened&&t&&this._close(),!e)return this.throwErrorAfterUpdateComplete(mt),!1}return!0}_isValidContainerElement(){return this.container instanceof HTMLElement}render(){return $e`
        <div class="kuc-mobile-notification-1-18-0__notification">
          <pre
            class="kuc-mobile-notification-1-18-0__notification__title"
            aria-live="assertive"
            role="${this._isOpened?"alert":""}"
          ><!---->${this.text}</pre>
          <button
            class="kuc-mobile-notification-1-18-0__notification__close-button"
            type="button"
            aria-label="close"
            @click="${this._handleClickCloseButton}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
      `}}_o([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),_o([Fe({type:String})],e.prototype,"text",void 0),_o([Fe({type:Number})],e.prototype,"duration",void 0),_o([Fe()],e.prototype,"container",void 0),_o([We()],e.prototype,"_isOpened",void 0),window.customElements.define("kuc-mobile-notification-1-18-0",e),vi('\n  kuc-mobile-notification-1-18-0 {\n    display: block;\n    font-size: 13px;\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n      "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n      "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n    visibility: hidden;\n    animation-fill-mode: forwards;\n    position: relative;\n    top: -100px;\n    left: 0;\n  }\n  kuc-mobile-notification-1-18-0:lang(es),\n  kuc-mobile-notification-1-18-0:lang(es) * {\n    font-family: sans-serif;\n  }\n  kuc-mobile-notification-1-18-0:lang(zh),\n  kuc-mobile-notification-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n      Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n      Verdana, sans-serif;\n  }\n  kuc-mobile-notification-1-18-0:lang(zh-TW),\n  kuc-mobile-notification-1-18-0:lang(zh-TW) * {\n      font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n      Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n      Verdana,sans-serif\n  }\n  .kuc-mobile-notification-fadein-1-18-0 {\n    animation-name: kuc-mobile-notification-fade-in-1-18-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    width: 100%;\n    position: fixed;\n    visibility: visible;\n  }\n\n  .kuc-mobile-notification-fadeout-1-18-0 {\n    animation-name: kuc-mobile-notification-fade-out-1-18-0;\n    animation-duration: 250ms;\n    animation-timing-function: ease-out;\n    width: 100%;\n    position: fixed;\n  }\n\n  .kuc-mobile-notification-1-18-0__notification {\n    background-color: #ffffcf;\n    background: linear-gradient(#ffda4a, #ffc32c);\n    width: 100%;\n    min-height: 48px;\n    z-index: 20;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 14px;\n    text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;\n    color: #333333;\n    text-align: center;\n    vertical-align: top;\n  }\n\n  .kuc-mobile-notification-1-18-0__notification__title {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 17px 44px 11px 44px;\n    margin: 0 0 0 -20px;\n    text-align: left;\n    font-weight: inherit;\n    font-family: inherit;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n\n  .kuc-mobile-notification-1-18-0__notification__close-button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 44px;\n    height: 48px;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    vertical-align: middle;\n    pointer-events: auto;\n    outline: none;\n  }\n  @keyframes kuc-mobile-notification-fade-in-1-18-0 {\n    0% {\n      top: -100px;\n      left: 0;\n    }\n    50% {\n      top: -50px;\n      left: 0;\n    }\n    100% {\n      top: 0;\n      left: 0;\n    }\n  }\n  @keyframes kuc-mobile-notification-fade-out-1-18-0 {\n    0% {\n      visibility: visible;\n      top: 0;\n      left: 0;\n    }\n    50% {\n      visibility: visible;\n      top: -50px;\n      left: 0;\n    }\n    100% {\n      top: -100px;\n      left: 0;\n    }\n  }\n'),po=e}})();var bo=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class go extends mi{constructor(){super(...arguments),this.language="en",this.month=1,this.year=(new Date).getFullYear(),this._locale=ti("en")}update(e){e.has("language")&&(this._locale=ti(this.language)),this._monthOptions=this._generateMonthOptions(),this._yearOptions=this._generateYearOptions(),super.update(e)}render(){return $e`
      <div class="kuc-base-mobile-datetime-calendar-header-1-18-0__group">
        <button
          aria-label="previous month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-18-0__group__button kuc-base-mobile-datetime-calendar-header-1-18-0__group__button--previous-month"
          @click="${this._handleClickCalendarPrevMonthBtn}"
        >
          ${this._getLeftArrowIconSvgTemplate()}
        </button>
        <div class="kuc-base-mobile-datetime-calendar-header-1-18-0__group__center">
          ${this._getYearMonthTemplate()}
        </div>
        <button
          aria-label="next month"
          type="button"
          class="kuc-base-mobile-datetime-calendar-header-1-18-0__group__button kuc-base-mobile-datetime-calendar-header-1-18-0__group__button--next-month"
          @click="${this._handleClickCalendarNextMonthBtn}"
        >
          ${this._getRightArrowIconSvgTemplate()}
        </button>
      </div>
    `}updated(e){e.has("month")&&this._setSelectMonthWidth(this.month),e.has("year")&&this._setYearSelectedIndex(),super.update(e)}_setSelectMonthWidth(e){const t=this._monthOptions[e-1].label;if(!t)return;const i=document.createElement("span");i.innerText=t;const n=(e=>{const t=(e=>{const t=document.createElement("div");return t.style.cssText=`\n  height: 0px;\n  overflow: hidden;\n  display: inline-block;\n  font-size: 14px;\n  font-family: ${window.getComputedStyle(e).fontFamily};\n  `,t})(e),i=e.cloneNode(!0);if(i.hasAttribute("hidden"))return 0;t.appendChild(i),document.body.appendChild(t);const n=t.getBoundingClientRect().width;return document.body.removeChild(t),n})(i);this._selectMonthEl.selectedIndex=this.month-1,this._selectMonthEl.style.width=n+35+"px"}_setYearSelectedIndex(){this.year<100?this._selectYearEl.selectedIndex=this.year:this._selectYearEl.selectedIndex=100}_generateMonthOptions(){return this._locale.MONTH_SELECT.map(((e,t)=>({value:`${t+1}`,label:`${e}`})))}_generateYearOptions(){return this._getYearOptions().map((e=>({value:`${e}`,label:`${e}${this._locale.YEAR_SELECT_POSTFIX}`})))}_getYearOptions(){const e=[];Number.isInteger(this.year)||(this.year=(new Date).getFullYear());let t=this.year<100?0:this.year-100;const i=this.year>=9899?9999:this.year+100;for(t>=i&&(t=i-100);t<=i;t++)e.push(t);return e}_getYearMonthTemplate(){return"zh"===this.language||"ja"===this.language||"zh-TW"===this.language?$e` ${this._getYearTemplate()}${this._getMonthTemplate()} `:$e` ${this._getMonthTemplate()}${this._getYearTemplate()} `}_handleChangeMonthDropdown(e){e.stopPropagation(),e.preventDefault();const t=e.target;this.month=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleChangeYearDropdown(e){e.stopPropagation(),e.preventDefault();const t=e.target;this.year=parseInt(t.value,10),this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarPrevMonthBtn(e){e.stopPropagation(),1===this.month?(this.month=12,this.year--):this.month-=1,this._dispatchCalendarHeaderChangeEvent()}_handleClickCalendarNextMonthBtn(e){e.stopPropagation(),12===this.month?(this.month=1,this.year++):this.month+=1,this._dispatchCalendarHeaderChangeEvent()}_dispatchCalendarHeaderChangeEvent(){const e=this.year,t=this.month;fi(this,"kuc:mobile-calendar-header-change",{value:`${e}-${t}`})}_getOptionsMonthTemplate(){return this._monthOptions.map((e=>$e`
        <option
          ?selected="${parseInt(e.value,10)===this.month}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `))}_getOptionsYearTemplate(){return this._yearOptions.map((e=>$e`
        <option
          ?selected="${parseInt(e.value,10)===this.year}"
          value="${e.value}"
        >
          ${e.label}
        </option>
      `))}_getMonthTemplate(){return $e`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__month"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__month__select"
          @change="${this._handleChangeMonthDropdown}"
        >
          ${this._getOptionsMonthTemplate()}
        </select>
      </div>
    `}_getYearTemplate(){return $e`
      <div
        class="kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__year"
      >
        <select
          class="kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__year__select"
          @change="${this._handleChangeYearDropdown}"
        >
          ${this._getOptionsYearTemplate()}
        </select>
      </div>
    `}_getLeftArrowIconSvgTemplate(){return Ce`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.70788 11.9567C9.0984 12.3472 9.0984 12.9804 8.70788 13.3709C8.31735 13.7614 7.68419 13.7614 7.29366 13.3709L2.34392 8.42118L0.929703 7.00696L2.34392 5.59275L7.29366 0.643003C7.68419 0.25248 8.31735 0.25248 8.70788 0.643003C9.0984 1.03353 9.0984 1.66669 8.70788 2.05722L4.68709 6.07801L14.0718 6.07801C14.6241 6.07801 15.0718 6.52572 15.0718 7.07801C15.0718 7.63029 14.6241 8.07801 14.0718 8.07801L4.82917 8.07801L8.70788 11.9567Z"
        fill="#206694"
      />
    </svg>`}_getRightArrowIconSvgTemplate(){return Ce`
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29396 2.0572C6.90344 1.66668 6.90344 1.03351 7.29396 0.642991C7.68449 0.252466 8.31765 0.252467 8.70817 0.642991L13.6579 5.59274L15.0721 7.00695L13.6579 8.42117L8.70817 13.3709C8.31765 13.7614 7.68448 13.7614 7.29396 13.3709C6.90344 12.9804 6.90344 12.3472 7.29396 11.9567L11.3148 7.93591L1.93 7.93591C1.37772 7.93591 0.93 7.48819 0.93 6.93591C0.93 6.38362 1.37772 5.93591 1.93 5.93591L11.1727 5.93591L7.29396 2.0572Z"
        fill="#206694"
      />
    </svg>`}}bo([Fe({type:String,attribute:"lang",reflect:!0})],go.prototype,"language",void 0),bo([Fe({type:Number,hasChanged(e){return(t=e)>0&&t<13;var t}})],go.prototype,"month",void 0),bo([Fe({type:Number,hasChanged(e){return(t=e)>=0&&t<1e4;var t}})],go.prototype,"year",void 0),bo([We()],go.prototype,"_monthOptions",void 0),bo([We()],go.prototype,"_yearOptions",void 0),bo([Ke(".kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__month__select")],go.prototype,"_selectMonthEl",void 0),bo([Ke(".kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__year__select")],go.prototype,"_selectYearEl",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-header-1-18-0")||(vi('\nkuc-base-mobile-datetime-calendar-header-1-18-0,\nkuc-base-mobile-datetime-calendar-header-1-18-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-header-1-18-0:lang(zh),\nkuc-base-mobile-datetime-calendar-header-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-header-1-18-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-header-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-base-mobile-datetime-calendar-header-1-18-0:lang(es),\nkuc-base-mobile-datetime-calendar-header-1-18-0:lang(es) * {\n    font-family: sans-serif;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    border-bottom: 1px solid #e3e7e8;\n    padding: 0;\n    white-space: nowrap;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    min-width: 40px;\n    width: 40px;\n    height: 40px;\n    overflow: hidden;\n    text-indent: 100%;\n    white-space: nowrap;\n    word-wrap: normal;\n    cursor: pointer;\n    -webkit-appearance: button;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__button-icon {\n    vertical-align: middle;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__button:focus {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__center {\n    text-align: center;\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    min-width: 186px;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__center\n    > :first-child {\n    padding-left: 13px;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__month,\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__year {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__month__select,\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__year__select {\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0 22.4px 0 0;\n    line-height: 40px;\n    border: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: url("data:image/svg+xml,%3Csvg%0A%20%20%20%20width%3D%2211%22%0A%20%20%20%20height%3D%226%22%0A%20%20%20%20viewBox%3D%220%200%2011%206%22%0A%20%20%20%20fill%3D%22none%22%0A%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%0A%20%20%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20d%3D%22M5.5061%206L0%200L11%200L5.5061%206Z%22%0A%20%20%20%20%20%20fill%3D%22%234b4b4b%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E")\n    no-repeat center right 0.6em #ffffff;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__month__select:focus,\n.kuc-base-mobile-datetime-calendar-header-1-18-0__group__center__year__select:focus {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-header-1-18-0__month {\n    margin: 0 4px 0 4px;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-header-1-18-0",go));var mo=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class fo extends mi{constructor(){super(),this.month=1,this.year=2021,this.language="en",this.value="",this._month=1,this._year=2021,this._locale=ti("en"),this._handleClickDocument=this._handleClickDocument.bind(this)}connectedCallback(){super.connectedCallback(),setTimeout((()=>{document.addEventListener("click",this._handleClickDocument)}),1)}disconnectedCallback(){document.removeEventListener("click",this._handleClickDocument),super.disconnectedCallback()}update(e){if(e.forEach(((e,t)=>{"language"===t&&(this._locale=ti(this.language))})),e.has("month")&&(this._month=this.month),e.has("year")&&(this._year=this.year),e.has("value")){const{month:e,year:t}=this._separateDateValue();this._month=parseInt(e,10),this._year=parseInt(t,10)}super.update(e)}render(){return $e`
      <table class="kuc-base-mobile-datetime-calendar-body-1-18-0__table" role="grid">
        ${this._getHeaderItemsTemplate()}<!--
        -->${this._getDateItemsTemplate()}
      </table>
    `}_handleClickDocument(){fi(this,"kuc:mobile-calendar-body-blur",{})}_handleClickDate(e){e.preventDefault(),e.stopPropagation();const t=e.target;t.setAttribute("aria-selected","true");const i=t.getAttribute("data-date");this._dispatchClickEvent(i)}_dispatchClickEvent(e){const t={oldValue:this.value,value:e};fi(this,"kuc:mobile-calendar-body-click-date",t),this.value=e}_isToday(e){const t=new Date;return parseInt(e[0],10)===t.getFullYear()&&parseInt(e[1],10)===t.getMonth()+1&&parseInt(e[2],10)===t.getDate()}_separateDateValue(e=this.value){const t=e.split("-");return{day:t[2],month:t[1],year:t[0]}}_getDateClass(e,t){return t?this._isToday(e)?" kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--today":"":" kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--other-month"}_isSameDayOfMoment(e){const t=parseInt(e[1],10),i=parseInt(e[2],10),n=parseInt(e[0],10);let o=(new Date).getDate();if(!this.value.split("-")[2])return!1;if(this.value&&(o=new Date(`${this.value}T00:00:00`).getDate()),o===i&&t===this._month)return!0;const a=new Date(n,this._month,0).getDate();return o>a&&a===i&&t===this._month}_getHeaderItemsTemplate(){return $e`
      <thead>
        <tr>
          ${this._locale.WEEK_DAYS.map((e=>$e`
              <th
                class="kuc-base-mobile-datetime-calendar-body-1-18-0__table__header"
                role="columnheader"
                abbr="${e.abbr}"
              >
                ${e.text}
              </th>
            `))}
        </tr>
      </thead>
    `}_getDateItemsTemplate(){const e=Ut(this._year,this._month-1),t=this._locale.MONTH_SELECT[this._month-1];return $e`
      <tbody>
        ${e.map((e=>$e`
            <tr>
              ${e.map((e=>{const i=e.text.split("-"),n=this._isSameDayOfMoment(i),o=parseInt(i[1],10)===this._month,a=(this.value===e.attr||n)&&o;return $e`
                  <td
                    role="gridcell"
                    tabindex="${a?0:-1}"
                    aria-selected="${this.value===e.attr}"
                    aria-current="${!!this._isToday(i)&&"date"}"
                    class="kuc-base-mobile-datetime-calendar-body-1-18-0__table__date${a?"--selected":""}${this._getDateClass(i,o)}"
                    data-date="${e.attr}"
                    aria-label="${i[2]} ${t}"
                    @click="${this._handleClickDate}"
                  >
                    ${i[2]||""}
                  </td>
                `}))}
            </tr>
          `))}
      </tbody>
    `}}mo([Fe({type:Number})],fo.prototype,"month",void 0),mo([Fe({type:Number})],fo.prototype,"year",void 0),mo([Fe({type:String,attribute:"lang",reflect:!0})],fo.prototype,"language",void 0),mo([Fe({type:String,reflect:!0})],fo.prototype,"value",void 0),mo([We()],fo.prototype,"_month",void 0),mo([We()],fo.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-body-1-18-0")||(vi('\nkuc-base-mobile-datetime-calendar-body-1-18-0,\nkuc-base-mobile-datetime-calendar-body-1-18-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-body-1-18-0:lang(zh),\nkuc-base-mobile-datetime-calendar-body-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-body-1-18-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-body-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\n\nkuc-base-mobile-datetime-calendar-body-1-18-0:lang(es),\nkuc-base-mobile-datetime-calendar-body-1-18-0:lang(es) * {\n    font-family: sans-serif;\n}\n\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table,\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table tr {\n    border-collapse: separate;\n    border-spacing: 0;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--selected {\n    border-spacing: 1px;\n    padding: 0px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date {\n    max-width: 40px;\n    border-spacing: 1px;\n    cursor: pointer;\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #ffffff;\n    text-align: center;\n    vertical-align: middle;\n    user-select: none;\n    color: #333333;\n    font-size: 14px;\n    font-weight: 400;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-18-0__table__date__button {\n    border-spacing: 1px;\n    cursor: pointer;\n    box-sizing: border-box;\n    text-align: center;\n    vertical-align: middle;\n    color: #333333;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date,\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--selected,\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__header {\n    box-sizing: border-box;\n    height: 40px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-weight: 400;\n    font-size: 12px;\n    color: #333333;\n    padding: 0;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date {\n    font-size: 14px;\n}\nth.kuc-base-mobile-datetime-calendar-body-1-18-0__table__header {\n    font-weight: 700;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-18-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-18-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__header {\n    box-sizing: border-box;\n    border: 1px solid #ffffff;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-18-0__table__date__button,\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-18-0__table__date__button {\n    background: none;\n    cursor: pointer;\n    max-width: 40px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--selected {\n    border: 1px solid #206694;\n    box-sizing: border-box;\n    text-align: center;\n    font-size: 14px;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--selected\n    .kuc-base-mobile-datetime-calendar-body-1-18-0__table__date__button {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date\n    .kuc-base-mobile-datetime-calendar-body-1-18-0__table__date__button:focus-visible {\n    outline: none;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--today {\n    color: #333333;\n    background: #d8d8d8;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--other-month {\n    color: #a5a5a5;\n}\n.kuc-base-mobile-datetime-calendar-body-1-18-0__table__date--selected:focus {\n    outline: none;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-body-1-18-0",fo));var vo=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class ko extends mi{constructor(){super(...arguments),this.language="en",this._locale=ti("en")}update(e){e.has("language")&&(this._locale=ti(this.language)),super.update(e)}_handleClickCalendarFooterButtonClose(e){e.stopPropagation(),fi(this,"kuc:mobile-calendar-footer-click-close")}_handleClickCalendarFooterButtonNone(e){e.stopPropagation(),fi(this,"kuc:mobile-calendar-footer-click-none")}_handleClickCalendarFooterButtonToday(e){e.stopPropagation(),fi(this,"kuc:mobile-calendar-footer-click-today")}render(){return $e`
      <div class="kuc-base-mobile-datetime-calendar-footer-1-18-0__group">
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-18-0__group__button kuc-base-mobile-datetime-calendar-footer-1-18-0__group__button--today"
          @click="${this._handleClickCalendarFooterButtonToday}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.today}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-18-0__group__button kuc-base-mobile-datetime-calendar-footer-1-18-0__group__button--none"
          @click="${this._handleClickCalendarFooterButtonNone}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.none}
        </button>
        <button
          type="button"
          class="kuc-base-mobile-datetime-calendar-footer-1-18-0__group__button kuc-base-mobile-datetime-calendar-footer-1-18-0__group__button--close"
          @click="${this._handleClickCalendarFooterButtonClose}"
        >
          ${this._locale.CALENDAR_FOOTER_TEXT.close}
        </button>
      </div>
    `}}vo([Fe({type:String,attribute:"lang",reflect:!0})],ko.prototype,"language",void 0),vo([We()],ko.prototype,"_locale",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-footer-1-18-0")||(vi('\nkuc-base-mobile-datetime-calendar-footer-1-18-0,\nkuc-base-mobile-datetime-calendar-footer-1-18-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\n\nkuc-base-mobile-datetime-calendar-footer-1-18-0:lang(zh),\nkuc-base-mobile-datetime-calendar-footer-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-base-mobile-datetime-calendar-footer-1-18-0:lang(zh-TW),\nkuc-base-mobile-datetime-calendar-footer-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-base-mobile-datetime-calendar-footer-1-18-0:lang(es),\nkuc-base-mobile-datetime-calendar-footer-1-18-0:lang(es) * {\n    font-family: sans-serif;\n}\n.kuc-base-mobile-datetime-calendar-footer-1-18-0__group {\n    display: flex;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 0;\n    white-space: nowrap;\n}\n.kuc-base-mobile-datetime-calendar-footer-1-18-0__group__button {\n    background: transparent;\n    border: 1px solid transparent;\n    color: #206694;\n    height: 40px;\n    cursor: pointer;\n    font-size: 14px;\n    outline: none;\n    padding: 0;\n    margin: 0;\n    font-weight: 700;\n}\n.kuc-base-mobile-datetime-calendar-footer-1-18-0__group__center {\n    width: 100%;\n}\n'),window.customElements.define("kuc-base-mobile-datetime-calendar-footer-1-18-0",ko));var yo=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class xo extends mi{constructor(){super(...arguments),this.language="en",this.value="",this._month=1,this._year=(new Date).getFullYear()}update(e){e.has("value")&&this._updateValue(),super.update(e)}render(){return $e`
      <div
        class="kuc-base-mobile-datetime-calendar-1-18-0__group"
        role="dialog"
        aria-modal="true"
        aria-label="Calender"
        @click="${this._handleClickCalendarGroup}"
      >
        <kuc-base-mobile-datetime-calendar-header-1-18-0
          .year="${this._year}"
          .month="${this._month}"
          .language="${this.language}"
          @kuc:mobile-calendar-header-change="${this._handleCalendarHeaderChange}"
        ></kuc-base-mobile-datetime-calendar-header-1-18-0>
        <kuc-base-mobile-datetime-calendar-body-1-18-0
          .year="${this._year}"
          .month="${this._month}"
          .value="${this.value}"
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-body-1-18-0>
        <kuc-base-mobile-datetime-calendar-footer-1-18-0
          .language="${this.language}"
        ></kuc-base-mobile-datetime-calendar-footer-1-18-0>
      </div>
    `}updated(e){super.updated(e)}_handleClickCalendarGroup(e){e.stopPropagation()}_handleCalendarHeaderChange(e){const{year:t,month:i}=this._separateValue(e.detail.value);this._year=t,this._month=i}_updateValue(){""===this.value&&(this.value=Zt().slice(0,7)+"-01");const{year:e,month:t}=this._separateValue(this.value);this._year=e,this._month=t}_separateValue(e){const t=e.split("-");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}}yo([Fe({type:String,attribute:"lang",reflect:!0})],xo.prototype,"language",void 0),yo([Fe({type:String,reflect:!0})],xo.prototype,"value",void 0),yo([We()],xo.prototype,"_month",void 0),yo([We()],xo.prototype,"_year",void 0),window.customElements.get("kuc-base-mobile-datetime-calendar-1-18-0")||(vi("\n.kuc-base-mobile-datetime-calendar-1-18-0__group {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 290px;\n    padding: 0 10px;\n    background: #ffffff;\n    text-align: center;\n    font-size: 13px;\n    border: 1px solid #d8d8d8;\n}\n"),window.customElements.define("kuc-base-mobile-datetime-calendar-1-18-0",xo));var wo=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class $o extends mi{constructor(){super(...arguments),this.inputId="",this.language="en",this.value="",this.disabled=!1,this.inputAriaInvalid=!1,this.required=!1,this._dateTimeCalendarVisible=!1,this._calendarValue="",this._inputValue=""}update(e){e.has("inputId")&&(this._GUID=this.inputId),(e.has("value")||e.has("language"))&&this._updateValueProp(),super.update(e)}render(){return $e`
      <div class="kuc-mobile-base-date-1-18-0__group${this._getGroupClass()}">
        <input
          class="kuc-mobile-base-date-1-18-0__group__input"
          type="text"
          id="${this._GUID}-label"
          readonly="readonly"
          .value="${this._inputValue}"
          aria-label="Date"
          aria-describedby="${this._GUID}-error"
          aria-invalid="${this.inputAriaInvalid}"
          aria-required="${this.required}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickOpenCalendar}"
        />
        <button
          type="button"
          class="kuc-mobile-base-date-1-18-0__group__button"
          aria-label="calendar"
          @click="${this._handleClickOpenCalendar}"
          ?disabled="${this.disabled}"
        >
          ${this._getCalendarIconTemplate()}
        </button>
        ${this._getCalendarTemplate()}
      </div>
    `}updated(e){this._dateTimeCalendarVisible&&this._setCalendarPosition(),super.updated(e)}_setCalendarPosition(){const{inputToBottom:e,inputToTop:t}=ai(this),i=this._inputEl.getBoundingClientRect().height;e>=t||(this._calendarEl.style.bottom=i+2+"px",this._calendarEl.style.top="auto")}_getGroupClass(){let e="";return this.disabled&&(e+=" kuc-mobile-base-date-1-18-0__group--disabled"),this.required&&(e+=" kuc-mobile-base-date-1-18-0__group--required"),e}_handleClickOpenCalendar(e){if(this._dateTimeCalendarVisible)return e.preventDefault(),void e.stopPropagation();this._calendarValue=this._getNewCalendarValue(this._inputValue||""),this._openCalendar()}_updateValueProp(){if(this.value)return this._inputValue=Kt(this.language,this.value),void(this._calendarValue=this.value);const e=Zt();this._inputValue="",this._calendarValue=this._calendarValue?this._calendarValue.slice(0,7)+"-01":e.slice(0,7)}_getNewCalendarValue(e){if(Xt(this.language,e))return Yt(this.language,e);let t=this._calendarValue.slice(0,7);return""===e&&(t=this._calendarValue.slice(0,7)+"-01"),t}_closeCalendar(){this._dateTimeCalendarVisible=!1}_openCalendar(){this._dateTimeCalendarVisible=!0}_handleClickCalendarClickDate(e){this._closeCalendar(),e.detail.oldValue=this.value,e.detail.oldValue!==e.detail.value&&(this.value=e.detail.value,fi(this,"kuc:mobile-base-date-change",e.detail),this._btnToggleEl.focus())}_handleClickCalendarFooterButtonNone(){this._closeCalendar(),this._inputValue="";let e=this.value?this.value.slice(0,7)+"-01":"";e||(e=this._calendarValue.slice(0,7)+"-01"),this._calendarValue=e,this._dispathDateChangeCustomEvent("")}_handleClickCalendarFooterButtonToday(){this._closeCalendar();const e=Zt();this._dispathDateChangeCustomEvent(e)}_handleClickCalendarFooterButtonClose(){this._closeCalendar(),this._btnToggleEl.focus()}_handleCalendarBlurBody(e){e.preventDefault(),this._dateTimeCalendarVisible=!1}_dispathDateChangeCustomEvent(e){const t={value:e,oldValue:this.value};this.value=e,fi(this,"kuc:mobile-base-date-change",t),this._btnToggleEl.focus()}_getCalendarTemplate(){return this._dateTimeCalendarVisible?$e`
          <kuc-base-mobile-datetime-calendar-1-18-0
            class="kuc-base-mobile-date-1-18-0__calendar"
            .language="${this.language}"
            .value="${this._calendarValue}"
            ?hidden="${!this._dateTimeCalendarVisible}"
            @kuc:mobile-calendar-body-click-date="${this._handleClickCalendarClickDate}"
            @kuc:mobile-calendar-footer-click-none="${this._handleClickCalendarFooterButtonNone}"
            @kuc:mobile-calendar-footer-click-today="${this._handleClickCalendarFooterButtonToday}"
            @kuc:mobile-calendar-footer-click-close="${this._handleClickCalendarFooterButtonClose}"
            @kuc:mobile-calendar-body-blur="${this._handleCalendarBlurBody}"
          >
          </kuc-base-mobile-datetime-calendar-1-18-0>
        `:""}_getCalendarIconTemplate(){return $e`
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C9.44772 4 9 4.44772 9 5V6H6C4.89543 6 4 6.89543 4 8V21C4 22.1046 4.89543 23 6 23H22C23.1046 23 24 22.1046 24 21V8C24 6.89543 23.1046 6 22 6H19V5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5V6H11V5C11 4.44772 10.5523 4 10 4ZM9 8V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V8H17V9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9V8H22V11H6V8H9ZM6 13V21H22V13H6Z"
          fill="#4b4b4b"
        />
      </svg>
    `}}wo([Fe({type:String})],$o.prototype,"inputId",void 0),wo([Fe({type:String,attribute:"lang",reflect:!0})],$o.prototype,"language",void 0),wo([Fe({type:String,reflect:!0})],$o.prototype,"value",void 0),wo([Fe({type:Boolean})],$o.prototype,"disabled",void 0),wo([Fe({type:Boolean})],$o.prototype,"inputAriaInvalid",void 0),wo([Fe({type:Boolean})],$o.prototype,"required",void 0),wo([Ke(".kuc-mobile-base-date-1-18-0__group__button")],$o.prototype,"_btnToggleEl",void 0),wo([Ke(".kuc-mobile-base-date-1-18-0__group__input")],$o.prototype,"_inputEl",void 0),wo([Ke(".kuc-base-mobile-date-1-18-0__calendar")],$o.prototype,"_calendarEl",void 0),wo([We()],$o.prototype,"_dateTimeCalendarVisible",void 0),window.customElements.get("kuc-mobile-base-date-1-18-0")||(vi('\nkuc-mobile-base-date-1-18-0,\nkuc-mobile-base-date-1-18-0 * {\n    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-base-date-1-18-0:lang(zh),\nkuc-mobile-base-date-1-18-0:lang(zh) * {\n    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-base-date-1-18-0:lang(zh-TW),\nkuc-mobile-base-date-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-base-date-1-18-0:lang(es),\nkuc-mobile-base-date-1-18-0:lang(es) * {\n    font-family: sans-serif;\n}\n.kuc-mobile-base-date-1-18-0__group {\n    display: flex;\n    align-items: center;\n    position: relative;\n    border-radius: 5.148px;\n    background-color: #ffffff;\n}\n.kuc-mobile-base-date-1-18-0__group__input[aria-required="true"] {\n    border-color: #cf4a38;\n}\ninput.kuc-mobile-base-date-1-18-0__group__input {\n    color: #000000;\n    width: 100%;\n    height: 31.28px;\n    font-size: 99%;\n    -webkit-flex-grow: 1;\n    flex-grow: 1;\n    padding: 5.148px;\n    border-radius: 5.148px;\n    box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;\n    border: 1px solid #b3b3b3;\n    font-weight: 400;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: 0;\n    background: transparent;\n    box-sizing: border-box;\n}\n.kuc-mobile-base-date-1-18-0__group--disabled {\n    background-color: #d5d7d9;\n    opacity: 1;\n}\n.kuc-mobile-base-date-1-18-0__group--disabled input {\n    color: #999999;\n    -webkit-text-fill-color: #999999;\n}\n.kuc-base-mobile-date-1-18-0__calendar {\n    position: absolute;\n    left: 0;\n    top: 39px;\n    z-index: 1000;\n}\n.kuc-mobile-base-date-1-18-0__group__button {\n    position: absolute;\n    display: flex;\n    right: 10px;\n    background-color: transparent;\n    border: 0;\n    padding: 0;\n    height: 100%;\n    align-items: center;\n}\n'),window.customElements.define("kuc-mobile-base-date-1-18-0",$o));var Co=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Io;(()=>{if(Io=window.customElements.get("kuc-mobile-date-picker-1-18-0"),!Io){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.disabled=!1,this.requiredIcon=!1,this.language="auto",this.value="",this.visible=!0,this._dateConverted="",this._inputValue="",this._GUID=ki();const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){return!(void 0!==this.value&&""!==this.value&&(Ii(this.value)?(this._dateConverted=di(this.value),""!==this._dateConverted&&!Ti(this._dateConverted)&&(this.throwErrorAfterUpdateComplete(At),1)):(this.throwErrorAfterUpdateComplete(At),1)))}willUpdate(e){e.has("value")&&void 0!==this.value&&""!==this.value&&(this.value=this._dateConverted)}update(e){e.has("value")&&this._updateInputValue(),super.update(e)}render(){return $e`
        <div class="kuc-mobile-date-picker-1-18-0__group">
          <label
            class="kuc-mobile-date-picker-1-18-0__group__label"
            for="${this._GUID}-label"
            @click="${this._handleClickLabel}"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-18-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-18-0>
          </label>
          <kuc-mobile-base-date-1-18-0
            class="kuc-mobile-date-picker-1-18-0__group__base__date"
            .disabled="${this.disabled}"
            .value="${this._inputValue}"
            .inputId="${this._GUID}"
            .inputAriaInvalid="${""!==this.error}"
            .required="${this.requiredIcon}"
            .language="${this._getLanguage()}"
            @kuc:mobile-base-date-change="${this._handleDateChange}"
          >
          </kuc-mobile-base-date-1-18-0>
          <kuc-base-mobile-error-1-18-0 .guid="${this._GUID}" .text="${this.error}">
          </kuc-base-mobile-error-1-18-0>
        </div>
      `}_updateInputValue(){void 0!==this.value&&""!==this.value?this._inputValue=this.value:this._inputValue=""}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleClickLabel(e){e.preventDefault()}_handleDateChange(e){e.stopPropagation(),e.preventDefault();const t={oldValue:this.value,value:""};this.value=e.detail.value,t.value=this.value,this._dispatchChangeEvent(t)}_dispatchChangeEvent(e){fi(this,"change",e)}}Co([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Co([Fe({type:String})],e.prototype,"error",void 0),Co([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Co([Fe({type:String})],e.prototype,"label",void 0),Co([Fe({type:Boolean})],e.prototype,"disabled",void 0),Co([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),Co([Fe({type:String,attribute:"lang",reflect:!0,converter:ri})],e.prototype,"language",void 0),Co([Fe({type:String})],e.prototype,"value",void 0),Co([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),Co([We()],e.prototype,"_inputValue",void 0),window.customElements.define("kuc-mobile-date-picker-1-18-0",e),vi('\nkuc-mobile-date-picker-1-18-0,\nkuc-mobile-date-picker-1-18-0 * {\n  color: #333333;\n  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-date-picker-1-18-0:lang(zh),\nkuc-mobile-date-picker-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-date-picker-1-18-0:lang(zh-TW),\nkuc-mobile-date-picker-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-date-picker-1-18-0:lang(es),\nkuc-mobile-date-picker-1-18-0:lang(es) * {\n    font-family: sans-serif;\n}\nkuc-mobile-date-picker-1-18-0 {\n  font-size: 13px;\n  color: #333333;\n  display: inline-table;\n  vertical-align: top;\n  width: 100%;\n}\nkuc-mobile-date-picker-1-18-0[hidden] {\n  display: none;\n}\n.kuc-mobile-date-picker-1-18-0__group {\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0px;\n  height: auto;\n  margin: 0px;\n}\n.kuc-mobile-date-picker-1-18-0__group__label {\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 0px;\n  white-space: nowrap;\n  margin: 0 0 4px 0;\n}\n.kuc-mobile-date-picker-1-18-0__group__base__date {\n  width: 130px;\n  margin-right: 0.5em;\n  margin-left: 0.5em;\n}\n.kuc-mobile-date-picker-1-18-0__group__label[hidden] {\n  display: none;\n}\n.kuc-mobile-date-picker-1-18-0__group input.kuc-base-date-1-18-0__input {\n  width: 100px;\n  height: 40px;\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #e3e7e8;\n  box-sizing: border-box;\n  font-size: 14px;\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n}\n\n.kuc-mobile-date-picker-1-18-0__group input.kuc-base-date-1-18-0__input:focus {\n  outline: none;\n  border: 1px solid #3498db;\n}\n.kuc-mobile-date-picker-1-18-0__group input.kuc-base-date-1-18-0__input--focus {\n  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;\n  border: 1px solid #3498db;\n  background-color: #ffffff;\n  color: #333333;\n}\n.kuc-mobile-date-picker-1-18-0__group input.kuc-base-date-1-18-0__input:disabled {\n  color: #888888;\n  background-color: #d4d7d7;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n'),Io=e}})();var Eo=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class So extends mi{constructor(e){super(),this.guid="",this.language="en",this.value="",this.disabled=!1,this.hour12=!1,this.required=!1,this._timeStep=1,this._hours="",this._minutes="",this._suffix="",this._locale=ti("en");const t=Ci(e);Object.assign(this,t)}update(e){e.has("language")&&(this._locale=ti(this.language)),e.has("hour12")&&(this._hourOptions=((e=!1)=>e?ii("AM").concat(ii("PM")):(()=>{const e=[];e.push({value:"00",label:"00"});for(let t=1;t<=23;t++)e.push({value:Qt(t),label:`${Qt(t)}`});return e})())(this.hour12)),e.has("_timeStep")&&(this._minuteOptions=((e=1)=>{const t=[];for(let i=0;i<=59;i+=e)t.push({value:Qt(i),label:Qt(i)});return t})(this._timeStep)),super.update(e)}render(){return $e`
      <fieldset
        class="kuc-base-mobile-time-1-18-0__group${this.disabled?" kuc-base-mobile-time-1-18-0__group--disabled":""}${this.required?" kuc-base-mobile-time-1-18-0__group--required":""}"
        aria-label="label-text"
      >
        <select
          class="kuc-base-mobile-time-1-18-0__group__hours"
          aria-label="Hour"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeHours}"
        >
          <option value selected></option>
          ${this._getOptionsHourTemplate()}
        </select>
        <span class="kuc-base-mobile-time-1-18-0__group__colon">:</span>
        <select
          class="kuc-base-mobile-time-1-18-0__group__minutes"
          aria-label="Minute"
          aria-describedby="${this.guid}-error"
          ?disabled="${this.disabled}"
          @change="${this._handleChangeMinutes}"
        >
          <option value selected></option>
          ${this._getOptionsMinuteTemplate()}
        </select>
      </fieldset>
    `}updated(e){e.has("value")&&this._updateInputValue(),super.update(e)}_updateInputValue(){const e=((e,t)=>{const i={hours:"",minutes:"",suffix:""},n=e.split(":"),o=parseInt(n[0],10),a=parseInt(n[1],10),s=o%yt;return isNaN(s)||(i.hours=Qt(t?jt(s):s),i.suffix=t?Gt(s):""),isNaN(a)||(i.minutes=Qt(a)),i})(this.value,this.hour12);this._hours=e.hours,this._minutes=e.minutes,this._suffix=e.suffix||"",this._setValueToInput(e)}_setValueToInput(e){this._minutesEl.value=e.minutes,e.suffix?this._hoursEl.value=e.suffix+" "+e.hours:this._hoursEl.value=e.hours}_handleChangeMinutes(e){e.preventDefault(),e.stopPropagation();const t=this._getTimeValueString(),i=e.target.value;this._minutes=i;const n=this._getTimeValueString();this.value=n,this._dispatchEventTimeChange(n,t)}_handleChangeHours(e){e.preventDefault(),e.stopPropagation();const t=this._getTimeValueString(),i=e.target.value.split(" ");2===i.length?(this._hours=i[1],this._suffix=i[0]):(this._hours=i[0],this._suffix="");const n=this._getTimeValueString();this.value=n,this._dispatchEventTimeChange(n,t)}_getTimeValueString(){const e=`${this._hours}:${this._minutes}`;return this._suffix?Ft(`${e} ${this._suffix}`):Ft(e)}_dispatchEventTimeChange(e,t){const i=":"===e?"":e,n={value:i,oldValue:":"===t?"":t};n.error=Ei(i)?"":this._locale.INVALID_TIME_FORMAT,fi(this,"kuc:base-mobile-time-change",n)}_getOptionsMinuteTemplate(){return this._minuteOptions.map((e=>$e` <option value="${e.value}">${e.label}</option> `))}_getOptionsHourTemplate(){return this._hourOptions.map((e=>$e` <option value="${e.value}">${e.label}</option> `))}}Eo([Fe({type:String})],So.prototype,"guid",void 0),Eo([Fe({type:String,attribute:"lang",reflect:!0})],So.prototype,"language",void 0),Eo([Fe({type:String})],So.prototype,"value",void 0),Eo([Fe({type:Boolean})],So.prototype,"disabled",void 0),Eo([Fe({type:Boolean})],So.prototype,"hour12",void 0),Eo([Fe({type:Boolean})],So.prototype,"required",void 0),Eo([We()],So.prototype,"_timeStep",void 0),Eo([We()],So.prototype,"_hours",void 0),Eo([We()],So.prototype,"_minutes",void 0),Eo([We()],So.prototype,"_suffix",void 0),Eo([We()],So.prototype,"_hourOptions",void 0),Eo([We()],So.prototype,"_minuteOptions",void 0),Eo([Ke(".kuc-base-mobile-time-1-18-0__group__hours")],So.prototype,"_hoursEl",void 0),Eo([Ke(".kuc-base-mobile-time-1-18-0__group__minutes")],So.prototype,"_minutesEl",void 0),window.customElements.get("kuc-base-mobile-time-1-18-0")||(vi('\nkuc-base-mobile-time-1-18-0,\nkuc-base-mobile-time-1-18-0 * {\n  font-size: 13px;\n  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n  "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\n\nkuc-base-mobile-time-1-18-0:lang(zh),\nkuc-base-mobile-time-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n  Verdana, sans-serif;\n}\n\nkuc-base-mobile-time-1-18-0:lang(zh-TW),\nkuc-base-mobile-time-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,\n  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n  Verdana, sans-serif\n}\n\nkuc-base-mobile-time-1-18-0:lang(es),\nkuc-base-mobile-time-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\n\nkuc-base-mobile-time-1-18-0 {\n  width: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n\nkuc-base-mobile-time-1-18-0[hidden] {\n  display: none;\n}\n\n.kuc-base-mobile-time-1-18-0__group {\n  padding: 0;\n  margin: 0;\n  height: 31.28px;\n  border: 1px solid #b3b3b3;\n  border-radius: 5.2px;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;\n}\n\n.kuc-base-mobile-time-1-18-0__group--required {\n  border-color: #cf4a38;\n}\n\n.kuc-base-mobile-time-1-18-0__group__hours {\n  padding: 5.148px 7.722px;\n}\n\n.kuc-base-mobile-time-1-18-0__group__minutes {\n  padding: 5.148px 7.722px;\n  -webkit-flex-grow: 1;\n  flex-grow: 1;\n}\n\n.kuc-base-mobile-time-1-18-0__group__hours,\n.kuc-base-mobile-time-1-18-0__group__minutes {\n  font-size: 99%;\n  height: 100%;\n  color: #000000;\n  border: none;\n  border-radius: 5.148px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: transparent;\n}\n\n.kuc-base-mobile-time-1-18-0__group__colon {\n  color: #000000;\n}\n\n.kuc-base-mobile-time-1-18-0__group__hours:disabled\n+ .kuc-base-mobile-time-1-18-0__group__colon {\n  color: #999999;\n  -webkit-text-fill-color: #999999;\n  opacity: 1;\n}\n\n.kuc-base-mobile-time-1-18-0__group--disabled {\n  color: #999999;\n  -webkit-text-fill-color: #999999;\n  background-color: #d5d7d9;\n  opacity: 1;\n}\n\n.kuc-base-mobile-time-1-18-0__group__hours:disabled,\n.kuc-base-mobile-time-1-18-0__group__minutes:disabled {\n  color: #999999;\n  -webkit-text-fill-color: #999999;\n  opacity: 1;\n}\n\n.kuc-base-mobile-time-1-18-0__group__hours:focus {\n  outline: none;\n}\n\n.kuc-base-mobile-time-1-18-0__group__minutes:focus {\n  outline: none;\n}\n'),window.customElements.define("kuc-base-mobile-time-1-18-0",So));var To=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Ao;(()=>{if(Ao=window.customElements.get("kuc-mobile-time-picker-1-18-0"),!Ao){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._inputValue="",this._errorFormat="",this._isSelectError=!1,this._GUID=ki();const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){return void 0===this.value||""===this.value||!!Ei(this.value)||(this.throwErrorAfterUpdateComplete(At),!1)}willUpdate(){void 0!==this.value&&""!==this.value&&(this.value=ui(this.value))}update(e){e.has("value")&&!this._isSelectError&&(void 0===this.value?this._inputValue="":this._inputValue=this.value||"",this._errorFormat=""),super.update(e)}render(){return $e`
        <div class="kuc-mobile-time-picker-1-18-0__group">
          <label
            class="kuc-mobile-time-picker-1-18-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-18-0
              .guid="${this._GUID}"
              .text="${this.label}"
              .requiredIcon="${this.requiredIcon}"
            ></kuc-base-mobile-label-1-18-0>
          </label>
          <div class="kuc-base-mobile-time-1-18-0__group__wrapper">
            <kuc-base-mobile-time-1-18-0
              .value="${this._inputValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-18-0>
          </div>
          <kuc-base-mobile-error-1-18-0
            .guid="${this._GUID}"
            .text="${this._errorFormat||this.error}"
            ariaLive="assertive"
          ></kuc-base-mobile-error-1-18-0>
        </div>
      `}updated(){this._isSelectError=!1}_handleTimeChange(e){e.preventDefault(),e.stopPropagation();const t={value:e.detail.value,oldValue:this.value};if(this._inputValue=e.detail.value,e.detail.error)return this._isSelectError=!0,this._errorFormat=e.detail.error,this.value=void 0,t.value=void 0,this.error="",void fi(this,"change",t);this._isSelectError=!1,this._errorFormat="",this.value=e.detail.value,fi(this,"change",t)}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}}To([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),To([Fe({type:String})],e.prototype,"error",void 0),To([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),To([Fe({type:String})],e.prototype,"label",void 0),To([Fe({type:String,attribute:"lang",reflect:!0,converter:ri})],e.prototype,"language",void 0),To([Fe({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),To([Fe({type:Boolean})],e.prototype,"disabled",void 0),To([Fe({type:Boolean})],e.prototype,"hour12",void 0),To([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),To([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),To([We()],e.prototype,"_inputValue",void 0),To([We()],e.prototype,"_errorFormat",void 0),window.customElements.define("kuc-mobile-time-picker-1-18-0",e),vi('\nkuc-mobile-time-picker-1-18-0,\nkuc-mobile-time-picker-1-18-0 * {\n  font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n  "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n  "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-time-picker-1-18-0:lang(zh),\nkuc-mobile-time-picker-1-18-0:lang(zh) * {\n  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n  Verdana, sans-serif;\n}\nkuc-mobile-time-picker-1-18-0:lang(zh-TW),\nkuc-mobile-time-picker-1-18-0:lang(zh-TW) * {\n  font-family: "微軟正黒體", "Microsoft JhengHei", "新宋体", NSimSun, STHeiti,\n  Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n  Verdana, sans-serif\n}\nkuc-mobile-time-picker-1-18-0:lang(es),\nkuc-mobile-time-picker-1-18-0:lang(es) * {\n  font-family: sans-serif;\n}\nkuc-mobile-time-picker-1-18-0 {\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n}\nkuc-mobile-time-picker-1-18-0[hidden] {\n  display: none;\n}\n.kuc-mobile-time-picker-1-18-0__group__label {\n  display: inline-block;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 0px;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n}\n.kuc-mobile-time-picker-1-18-0__group__label[hidden] {\n  display: none;\n}\n.kuc-base-mobile-time-1-18-0__group__wrapper {\n  padding-left: 0.5em;\n  max-width: 10px;\n}\n'),Ao=e}})();var Do=function(e,t,i,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,i,s):o(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};let Lo;(()=>{if(Lo=window.customElements.get("kuc-mobile-datetime-picker-1-18-0"),!Lo){class e extends mi{constructor(e){super(),this.className="",this.error="",this.id="",this.label="",this.language="auto",this.value="",this.disabled=!1,this.hour12=!1,this.requiredIcon=!1,this.visible=!0,this._dateConverted="",this._changeDateByUI=!1,this._changeTimeByUI=!1,this._previousTimeValue="",this._previousDateValue="",this._dateValue="",this._timeValue="",this._errorFormat="",this._errorText="",this._GUID=ki();const t=Ci(e);Object.assign(this,t)}shouldUpdate(e){return void 0===this.value||""===this.value||("string"!=typeof this.value?(this.throwErrorAfterUpdateComplete(At),!1):(this._dateAndTime=this._getDateTimeValue(this.value),this._dateConverted=di(this._dateAndTime.date),!(!Di(this._dateAndTime.date,this._dateAndTime.time)||!Ti(this._dateConverted))||(this.throwErrorAfterUpdateComplete(At),!1)))}willUpdate(e){this._changeDateByUI||this._changeTimeByUI?this._updateValueAndErrorWhenUIChange():(this._errorFormat="",this._updateErrorText(),this._updateValueWhenSetter())}update(e){e.has("value")&&(void 0===this.value&&this._setUndefinedValue(),""===this.value&&this._setEmptyValue()),super.update(e)}_updateValueWhenSetter(){this._errorFormat="",""!==this.value&&void 0!==this.value?(this._setDateTimeValueSeparate(this._dateAndTime,this._dateConverted),this.value=this._getDateTimeString()):this._previousTimeValue=""}_setDateTimeValueSeparate(e,t){this._dateValue=t,this._timeValue=this._dateValue&&Ti(t)?ui(e.time.slice(0,5)):this._previousTimeValue}_updateValueAndErrorWhenUIChange(){const e=this._checkDateTimeFormat();this.value=e?this.value:void 0,this._updateErrorText()}_checkDateTimeFormat(){const e=Boolean(this._timeValue)&&!this._dateValue,t=Boolean(this._dateValue)&&!this._timeValue;return!this._errorFormat&&!e&&!t}_setUndefinedValue(){if(!this._changeTimeByUI){if(this._errorFormat){if(this._changeDateByUI)return;return this._dateValue="",void(this._timeValue="")}this._dateValue=this._previousDateValue,this._timeValue=this._previousTimeValue}}_setEmptyValue(){this._dateValue="",this._timeValue="",this._previousTimeValue="",this._previousDateValue=""}_getDateTimeValue(e){if(""===e||void 0===e)return{date:"",time:""};const t=e.split("T"),i=t[0],n=t[1];if(e.indexOf("T")===e.length-1||t.length>2)return{date:i,time:""};if(!n)return{date:i,time:"00:00"};const[o,a,s]=n.split(":"),r=`${o}:${a||"00"}`;return s?{date:i,time:`${r}:${s}`}:{date:i,time:r}}render(){return $e`
        <fieldset
          class="kuc-mobile-datetime-picker-1-18-0__group"
          aria-describedby="${this._GUID}-error"
        >
          <legend
            class="kuc-mobile-datetime-picker-1-18-0__group__label"
            ?hidden="${!this.label}"
          >
            <kuc-base-mobile-label-1-18-0
              .requiredIcon="${this.requiredIcon}"
              .text="${this.label}"
            ></kuc-base-mobile-label-1-18-0>
          </legend>
          <div class="kuc-mobile-datetime-picker-1-18-0__group__input">
            <kuc-mobile-base-date-1-18-0
              class="kuc-mobile-datetime-picker-1-18-0__group__input--date"
              .disabled="${this.disabled}"
              .value="${this._dateValue}"
              .inputId="${this._GUID}"
              .inputAriaInvalid="${""!==this.error}"
              .required="${this.requiredIcon}"
              .language="${this._getLanguage()}"
              @kuc:mobile-base-date-change="${this._handleDateChange}"
            >
            </kuc-mobile-base-date-1-18-0>
            <kuc-base-mobile-time-1-18-0
              class="kuc-mobile-datetime-picker-1-18-0__group__input--time"
              .value="${this._timeValue}"
              .disabled="${this.disabled}"
              .hour12="${this.hour12}"
              .guid="${this._GUID}"
              .language="${this._getLanguage()}"
              .required="${this.requiredIcon}"
              @kuc:base-mobile-time-change="${this._handleTimeChange}"
            ></kuc-base-mobile-time-1-18-0>
          </div>
          <kuc-base-mobile-error-1-18-0
            .guid="${this._GUID}"
            .text="${this._errorText}"
          >
          </kuc-base-mobile-error-1-18-0>
        </fieldset>
      `}updated(){this._resetState()}_resetState(){this._previousTimeValue="",this._previousDateValue="",this._changeDateByUI=!1,this._changeTimeByUI=!1}_updateErrorText(){this._errorText=this._errorFormat||this.error}_getLanguage(){const e=["en","ja","zh","zh-TW","es"];return-1!==e.indexOf(this.language)?this.language:-1!==e.indexOf(document.documentElement.lang)?document.documentElement.lang:"en"}_handleDateChange(e){if(e.stopPropagation(),e.preventDefault(),e.detail.value===this._dateValue)return;this._changeDateByUI=!0;let t=this._dateValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):t=e.detail.value,this._updateDateTimeValue(t,"date")}_handleTimeChange(e){e.preventDefault(),e.stopPropagation(),this._changeTimeByUI=!0;let t=this._timeValue;e.detail.error?(this._errorFormat=e.detail.error,this.error=""):this._errorFormat="",t=e.detail.value,this._updateDateTimeValue(t,"time")}_updateDateTimeValue(e,t){const i=this.value;"date"===t?this._dateValue=e||"":this._timeValue=e,this._previousTimeValue=this._timeValue,this._previousDateValue=this._dateValue;const n=this._errorFormat?void 0:this._getDateTimeString(),o=this._errorFormat?void 0:n;this.value=o;const a=this._errorFormat?void 0:n;this.value=a,fi(this,"change",{value:o,oldValue:i,changedPart:t})}_getDateTimeString(){if(""===this._dateValue&&""===this._timeValue)return"";if(!this._dateValue||!this._timeValue)return;if(!this.value)return`${this._dateValue}T${this._timeValue}:00`;const e=this.value.split(":");return 3===e.length?`${this._dateValue}T${this._timeValue}:${e[2]}`:`${this._dateValue}T${this._timeValue}:00`}}Do([Fe({type:String,reflect:!0,attribute:"class"})],e.prototype,"className",void 0),Do([Fe({type:String})],e.prototype,"error",void 0),Do([Fe({type:String,reflect:!0,attribute:"id"})],e.prototype,"id",void 0),Do([Fe({type:String})],e.prototype,"label",void 0),Do([Fe({type:String,attribute:"lang",reflect:!0,converter:ri})],e.prototype,"language",void 0),Do([Fe({type:String,hasChanged:(e,t)=>(""===e||void 0===e)&&e===t||e!==t})],e.prototype,"value",void 0),Do([Fe({type:Boolean})],e.prototype,"disabled",void 0),Do([Fe({type:Boolean})],e.prototype,"hour12",void 0),Do([Fe({type:Boolean})],e.prototype,"requiredIcon",void 0),Do([Fe({type:Boolean,attribute:"hidden",reflect:!0,converter:si})],e.prototype,"visible",void 0),Do([We()],e.prototype,"_dateValue",void 0),Do([We()],e.prototype,"_timeValue",void 0),Do([We()],e.prototype,"_errorFormat",void 0),Do([We()],e.prototype,"_errorText",void 0),window.customElements.define("kuc-mobile-datetime-picker-1-18-0",e),vi('\nkuc-mobile-datetime-picker-1-18-0,\nkuc-mobile-datetime-picker-1-18-0 * {\ncolor: #333333;\nfont-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",\n    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",\n    "Lucida Sans Unicode", Arial, Verdana, sans-serif;\n}\nkuc-mobile-datetime-picker-1-18-0:lang(zh),\nkuc-mobile-datetime-picker-1-18-0:lang(zh) * {\nfont-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,\n    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,\n    Verdana, sans-serif;\n}\nkuc-mobile-datetime-picker-1-18-0:lang(zh-TW),\nkuc-mobile-datetime-picker-1-18-0:lang(zh-TW) * {\n    font-family: "微軟正黒體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,\n    Hei,"Heiti SC","Lucida Grande","Lucida Sans Unicode",Arial,\n    Verdana,sans-serif\n}\nkuc-mobile-datetime-picker-1-18-0:lang(es),\nkuc-mobile-datetime-picker-1-18-0:lang(es) * {\n    font-family: sans-serif;\n}\nkuc-mobile-datetime-picker-1-18-0 {\nfont-size: 13px;\ncolor: #333333;\ndisplay: inline-table;\nvertical-align: top;\nwidth: 100%;\n}\nkuc-mobile-datetime-picker-1-18-0[hidden] {\ndisplay: none;\n}\n.kuc-mobile-datetime-picker-1-18-0__group {\nborder: 0;\npadding: 0;\n}\n.kuc-mobile-datetime-picker-1-18-0__group__label {\ndisplay: inline-block;\nfont-weight: bold;\nline-height: 1.5;\npadding: 0px;\nwhite-space: nowrap;\nmargin: 0 0 4px 0;\n}\n.kuc-mobile-datetime-picker-1-18-0__group__label[hidden] {\ndisplay: none;\n}\n.kuc-mobile-datetime-picker-1-18-0__group__input {\ndisplay: flex;\nalign-items: center;\nmargin-right: 0.5em;\nmargin-left: 0.5em;\n}\n.kuc-mobile-datetime-picker-1-18-0__group__input--date {\nwidth: 130px;\nmargin-right: 10px;\n}\n.kuc-mobile-datetime-picker-1-18-0__group__input--time {\nmax-width: 10px;\n}\n'),Lo=e}})();var Vo={d:(e,t)=>{for(var i in t)Vo.o(t,i)&&!Vo.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};Vo.d({},{r:()=>Ho});const Ho="1.18.0";var Mo={d:(e,t)=>{for(var i in t)Mo.o(t,i)&&!Mo.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};Mo.d({},{$:()=>Bo});const Bo=void 0,Oo=document.getElementById("root"),No=new mn({items:[{label:"-----",value:"-----"},{label:"Orange",value:"orange"},{label:"Apple",value:"apple"}],value:"-----",label:"Fruit",error:"Error occurred!"});No.addEventListener("change",(e=>{const t=e.detail;console.log(t)})),Oo.appendChild(No)})();