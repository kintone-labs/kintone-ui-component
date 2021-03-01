!function(e){var t={};function i(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,i=Object.isFrozen,o=Object.keys,r=Object.freeze,n=Object.seal,s="undefined"!=typeof Reflect&&Reflect,a=s.apply,l=s.construct;a||(a=function(e,t,i){return e.apply(t,i)}),r||(r=function(e){return e}),n||(n=function(e){return e}),l||(l=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}(t))))});var c=w(Array.prototype.forEach),d=w(Array.prototype.indexOf),u=w(Array.prototype.join),h=w(Array.prototype.pop),p=w(Array.prototype.push),_=w(Array.prototype.slice),f=w(String.prototype.toLowerCase),m=w(String.prototype.match),g=w(String.prototype.replace),b=w(String.prototype.indexOf),v=w(String.prototype.trim),y=w(RegExp.prototype.test),x=S(RegExp),k=S(TypeError);function w(e){return function(t){for(var i=arguments.length,o=Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];return a(e,t,o)}}function S(e){return function(){for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];return l(e,i)}}function E(e,o){t&&t(e,null);for(var r=o.length;r--;){var n=o[r];if("string"==typeof n){var s=f(n);s!==n&&(i(o)||(o[r]=s),n=s)}e[n]=!0}return e}function A(t){var i={},o=void 0;for(o in t)a(e,t,[o])&&(i[o]=t[o]);return i}var T=r(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=r(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),C=r(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),N=r(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),$=r(["#text"]),D=r(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),I=r(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=r(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),P=r(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),O=n(/\{\{[\s\S]*|[\s\S]*\}\}/gm),R=n(/<%[\s\S]*|[\s\S]*%>/gm),H=n(/^data-[\-\w.\u00B7-\uFFFF]/),U=n(/^aria-[\-\w]+$/),q=n(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),z=n(/^(?:\w+script|data):/i),V=n(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function B(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var G=function(){return"undefined"==typeof window?null:window},F=function(e,t){if("object"!==(void 0===e?"undefined":j(e))||"function"!=typeof e.createPolicy)return null;var i=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(i=t.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(i?"#"+i:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G(),i=function(t){return e(t)};if(i.version="2.0.12",i.removed=[],!t||!t.document||9!==t.document.nodeType)return i.isSupported=!1,i;var n=t.document,s=!1,a=t.document,l=t.DocumentFragment,w=t.HTMLTemplateElement,S=t.Node,W=t.NodeFilter,K=t.NamedNodeMap,Y=void 0===K?t.NamedNodeMap||t.MozNamedAttrMap:K,Z=t.Text,J=t.Comment,X=t.DOMParser,Q=t.trustedTypes;if("function"==typeof w){var ee=a.createElement("template");ee.content&&ee.content.ownerDocument&&(a=ee.content.ownerDocument)}var te=F(Q,n),ie=te&&Me?te.createHTML(""):"",oe=a,re=oe.implementation,ne=oe.createNodeIterator,se=oe.getElementsByTagName,ae=oe.createDocumentFragment,le=n.importNode,ce={};i.isSupported=re&&void 0!==re.createHTMLDocument&&9!==a.documentMode;var de=O,ue=R,he=H,pe=U,_e=z,fe=V,me=q,ge=null,be=E({},[].concat(B(T),B(L),B(C),B(N),B($))),ve=null,ye=E({},[].concat(B(D),B(I),B(M),B(P))),xe=null,ke=null,we=!0,Se=!0,Ee=!1,Ae=!1,Te=!1,Le=!1,Ce=!1,Ne=!1,$e=!1,De=!1,Ie=!1,Me=!1,Pe=!0,Oe=!0,Re=!1,He={},Ue=E({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),qe=null,ze=E({},["audio","video","img","source","image","track"]),Ve=null,je=E({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Be=null,Ge=a.createElement("form"),Fe=function(e){Be&&Be===e||(e&&"object"===(void 0===e?"undefined":j(e))||(e={}),ge="ALLOWED_TAGS"in e?E({},e.ALLOWED_TAGS):be,ve="ALLOWED_ATTR"in e?E({},e.ALLOWED_ATTR):ye,Ve="ADD_URI_SAFE_ATTR"in e?E(A(je),e.ADD_URI_SAFE_ATTR):je,qe="ADD_DATA_URI_TAGS"in e?E(A(ze),e.ADD_DATA_URI_TAGS):ze,xe="FORBID_TAGS"in e?E({},e.FORBID_TAGS):{},ke="FORBID_ATTR"in e?E({},e.FORBID_ATTR):{},He="USE_PROFILES"in e&&e.USE_PROFILES,we=!1!==e.ALLOW_ARIA_ATTR,Se=!1!==e.ALLOW_DATA_ATTR,Ee=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ae=e.SAFE_FOR_JQUERY||!1,Te=e.SAFE_FOR_TEMPLATES||!1,Le=e.WHOLE_DOCUMENT||!1,$e=e.RETURN_DOM||!1,De=e.RETURN_DOM_FRAGMENT||!1,Ie=e.RETURN_DOM_IMPORT||!1,Me=e.RETURN_TRUSTED_TYPE||!1,Ne=e.FORCE_BODY||!1,Pe=!1!==e.SANITIZE_DOM,Oe=!1!==e.KEEP_CONTENT,Re=e.IN_PLACE||!1,me=e.ALLOWED_URI_REGEXP||me,Te&&(Se=!1),De&&($e=!0),He&&(ge=E({},[].concat(B($))),ve=[],!0===He.html&&(E(ge,T),E(ve,D)),!0===He.svg&&(E(ge,L),E(ve,I),E(ve,P)),!0===He.svgFilters&&(E(ge,C),E(ve,I),E(ve,P)),!0===He.mathMl&&(E(ge,N),E(ve,M),E(ve,P))),e.ADD_TAGS&&(ge===be&&(ge=A(ge)),E(ge,e.ADD_TAGS)),e.ADD_ATTR&&(ve===ye&&(ve=A(ve)),E(ve,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&E(Ve,e.ADD_URI_SAFE_ATTR),Oe&&(ge["#text"]=!0),Le&&E(ge,["html","head","body"]),ge.table&&(E(ge,["tbody"]),delete xe.tbody),r&&r(e),Be=e)},We=function(e){p(i.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=ie}},Ke=function(e,t){try{p(i.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){p(i.removed,{attribute:null,from:t})}t.removeAttribute(e)},Ye=function(e){var t=void 0,i=void 0;if(Ne)e="<remove></remove>"+e;else{var o=m(e,/^[\r\n\t ]+/);i=o&&o[0]}var r=te?te.createHTML(e):e;try{t=(new X).parseFromString(r,"text/html")}catch(e){}if(s&&E(xe,["title"]),!t||!t.documentElement){var n=(t=re.createHTMLDocument("")).body;n.parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=r}return e&&i&&t.body.insertBefore(a.createTextNode(i),t.body.childNodes[0]||null),se.call(t,Le?"html":"body")[0]};i.isSupported&&function(){try{var e=Ye("<x/><title>&lt;/title&gt;&lt;img&gt;");y(/<\/title/,e.querySelector("title").innerHTML)&&(s=!0)}catch(e){}}();var Ze=function(e){return ne.call(e.ownerDocument||e,e,W.SHOW_ELEMENT|W.SHOW_COMMENT|W.SHOW_TEXT,(function(){return W.FILTER_ACCEPT}),!1)},Je=function(e){return!(e instanceof Z||e instanceof J||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof Y&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Xe=function(e){return"object"===(void 0===S?"undefined":j(S))?e instanceof S:e&&"object"===(void 0===e?"undefined":j(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Qe=function(e,t,o){ce[e]&&c(ce[e],(function(e){e.call(i,t,o,Be)}))},et=function(e){var t=void 0;if(Qe("beforeSanitizeElements",e,null),Je(e))return We(e),!0;var o=f(e.nodeName);if(Qe("uponSanitizeElement",e,{tagName:o,allowedTags:ge}),("svg"===o||"math"===o)&&0!==e.querySelectorAll("p, br").length)return We(e),!0;if(!ge[o]||xe[o]){if(Oe&&!Ue[o]&&"function"==typeof e.insertAdjacentHTML)try{var r=e.innerHTML;e.insertAdjacentHTML("AfterEnd",te?te.createHTML(r):r)}catch(e){}return We(e),!0}return"noscript"===o&&y(/<\/noscript/i,e.innerHTML)||"noembed"===o&&y(/<\/noembed/i,e.innerHTML)?(We(e),!0):(!Ae||e.firstElementChild||e.content&&e.content.firstElementChild||!y(/</g,e.textContent)||(p(i.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=g(e.innerHTML,/</g,"&lt;"):e.innerHTML=g(e.textContent,/</g,"&lt;")),Te&&3===e.nodeType&&(t=e.textContent,t=g(t,de," "),t=g(t,ue," "),e.textContent!==t&&(p(i.removed,{element:e.cloneNode()}),e.textContent=t)),Qe("afterSanitizeElements",e,null),!1)},tt=function(e,t,i){if(Pe&&("id"===t||"name"===t)&&(i in a||i in Ge))return!1;if(Se&&y(he,t));else if(we&&y(pe,t));else{if(!ve[t]||ke[t])return!1;if(Ve[t]);else if(y(me,g(i,fe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==b(i,"data:")||!qe[e])if(Ee&&!y(_e,g(i,fe,"")));else if(i)return!1}return!0},it=function(e){var t=void 0,r=void 0,n=void 0,s=void 0,a=void 0;Qe("beforeSanitizeAttributes",e,null);var l=e.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ve};for(a=l.length;a--;){var p=t=l[a],m=p.name,b=p.namespaceURI;if(r=v(t.value),n=f(m),c.attrName=n,c.attrValue=r,c.keepAttr=!0,c.forceKeepAttr=void 0,Qe("uponSanitizeAttribute",e,c),r=c.attrValue,!c.forceKeepAttr){if("name"===n&&"IMG"===e.nodeName&&l.id)s=l.id,l=_(l,[]),Ke("id",e),Ke(m,e),d(l,s)>a&&e.setAttribute("id",s.value);else{if("INPUT"===e.nodeName&&"type"===n&&"file"===r&&c.keepAttr&&(ve[n]||!ke[n]))continue;"id"===m&&e.setAttribute(m,""),Ke(m,e)}if(c.keepAttr)if(Ae&&y(/\/>/i,r))Ke(m,e);else if(y(/svg|math/i,e.namespaceURI)&&y(x("</("+u(o(Ue),"|")+")","i"),r))Ke(m,e);else{Te&&(r=g(r,de," "),r=g(r,ue," "));var k=e.nodeName.toLowerCase();if(tt(k,n,r))try{b?e.setAttributeNS(b,m,r):e.setAttribute(m,r),h(i.removed)}catch(e){}}}}Qe("afterSanitizeAttributes",e,null)}},ot=function e(t){var i=void 0,o=Ze(t);for(Qe("beforeSanitizeShadowDOM",t,null);i=o.nextNode();)Qe("uponSanitizeShadowNode",i,null),et(i)||(i.content instanceof l&&e(i.content),it(i));Qe("afterSanitizeShadowDOM",t,null)};return i.sanitize=function(e,o){var r=void 0,s=void 0,a=void 0,c=void 0,d=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Xe(e)){if("function"!=typeof e.toString)throw k("toString is not a function");if("string"!=typeof(e=e.toString()))throw k("dirty is not a string, aborting")}if(!i.isSupported){if("object"===j(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Xe(e))return t.toStaticHTML(e.outerHTML)}return e}if(Ce||Fe(o),i.removed=[],"string"==typeof e&&(Re=!1),Re);else if(e instanceof S)1===(s=(r=Ye("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?r=s:r.appendChild(s);else{if(!$e&&!Te&&!Le&&-1===e.indexOf("<"))return te&&Me?te.createHTML(e):e;if(!(r=Ye(e)))return $e?null:ie}r&&Ne&&We(r.firstChild);for(var u=Ze(Re?e:r);a=u.nextNode();)3===a.nodeType&&a===c||et(a)||(a.content instanceof l&&ot(a.content),it(a),c=a);if(c=null,Re)return e;if($e){if(De)for(d=ae.call(r.ownerDocument);r.firstChild;)d.appendChild(r.firstChild);else d=r;return Ie&&(d=le.call(n,d,!0)),d}var h=Le?r.outerHTML:r.innerHTML;return Te&&(h=g(h,de," "),h=g(h,ue," ")),te&&Me?te.createHTML(h):h},i.setConfig=function(e){Fe(e),Ce=!0},i.clearConfig=function(){Be=null,Ce=!1},i.isValidAttribute=function(e,t,i){Be||Fe({});var o=f(e),r=f(t);return tt(o,r,i)},i.addHook=function(e,t){"function"==typeof t&&(ce[e]=ce[e]||[],p(ce[e],t))},i.removeHook=function(e){ce[e]&&h(ce[e])},i.removeHooks=function(e){ce[e]&&(ce[e]=[])},i.removeAllHooks=function(){ce={}},i}()}()},function(e,t,i){"use strict";i.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,a=new RegExp(`${n}|${s}`);class l{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],r=document.createTreeWalker(t.content,133,null,!1);let s=0,l=-1,d=0;const{strings:p,values:{length:_}}=e;for(;d<_;){const e=r.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let o=0;for(let e=0;e<i;e++)c(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=p[d],i=h.exec(t)[2],o=i.toLowerCase()+"$lit$",r=e.getAttribute(o);e.removeAttribute(o);const n=r.split(a);this.parts.push({type:"attribute",index:l,name:i,strings:n}),d+=n.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const o=e.parentNode,r=t.split(a),n=r.length-1;for(let t=0;t<n;t++){let i,n=r[t];if(""===n)i=u();else{const e=h.exec(n);null!==e&&c(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(n)}o.insertBefore(i,e),this.parts.push({type:"node",index:++l})}""===r[n]?(o.insertBefore(u(),e),i.push(e)):e.data=r[n],d+=n}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&l!==s||(l++,t.insertBefore(u(),e)),s=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(i.push(e),l--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),d++}}else r.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const c=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},d=e=>-1!==e.index,u=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:i},parts:o}=e,r=document.createTreeWalker(i,133,null,!1);let n=f(o),s=o[n],a=-1,l=0;const c=[];let d=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,n=f(o,n),s=o[n]}c.forEach(e=>e.parentNode.removeChild(e))}const _=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},f=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(d(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=e=>"function"==typeof e&&m.has(e),b={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let n,s=0,a=0,l=r.nextNode();for(;s<i.length;)if(n=i[s],d(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=` ${n} `;class k{constructor(e,t,i,o){this.strings=e,this.values=t,this.type=i,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const a=h.exec(e);t+=null===a?e+(i?x:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class w extends k{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,i=t.firstChild;return t.removeChild(i),((e,t,i=null,o=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,o),t=i}})(t,i.firstChild),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class A{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new T(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let o=0;o<t;o++){i+=e[o];const t=this.parts[o];if(void 0!==t){const e=t.value;if(S(e)||!E(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===b||S(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=b,e(this)}this.value!==b&&this.committer.commit()}}class L{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}const e=this.__pendingValue;e!==b&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof k?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const i=new y(t,e.processor,this.options),o=i._clone();i.update(e.values),this.__commitNode(o),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,o=0;for(const r of e)i=t[o],void 0===i&&(i=new L(this.options),t.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(t[o-1])),i.setValue(r),i.commit(),o++;o<t.length&&(t.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}if(this.__pendingValue===b)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=b}}class N extends A{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new $(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class $ extends T{}let D=!1;(()=>{try{const e={get capture(){return D=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class I{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}if(this.__pendingValue===b)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=M(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=b}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const M=e=>e&&(D?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function P(e){let t=O.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(n);return i=t.keyString.get(o),void 0===i&&(i=new l(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}const O=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,o){const r=t[0];if("."===r){return new N(e,t.slice(1),i).parts}if("@"===r)return[new I(e,t.slice(1),o.eventContext)];if("?"===r)return[new C(e,t.slice(1),i)];return new A(e,t,i).parts}handleTextExpression(e){return new L(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const U=(e,...t)=>new k(e,t,"html",H),q=(e,...t)=>new w(e,t,"svg",H)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,z=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const j=e=>t=>{const i=z(t.type,e);let o=O.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},O.set(i,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const s=t.strings.join(n);if(r=o.keyString.get(s),void 0===r){const i=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(i,e),r=new l(t,i),o.keyString.set(s,r)}return o.stringsArray.set(t.strings,r),r},B=["html","svg"],G=new Set,F=(e,t,i)=>{G.add(e);const o=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(o,e);const s=document.createElement("style");for(let e=0;e<n;e++){const t=r[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{B.forEach(t=>{const i=O.get(z(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),p(e,i)})})})(e);const a=o.content;i?function(e,t,i=null){const{element:{content:o},parts:r}=e;if(null==i)return void o.appendChild(t);const n=document.createTreeWalker(o,133,null,!1);let s=f(r),a=0,l=-1;for(;n.nextNode();){l++;for(n.currentNode===i&&(a=_(t),i.parentNode.insertBefore(t,i));-1!==s&&r[s].index===l;){if(a>0){for(;-1!==s;)r[s].index+=a,s=f(r,s);return}s=f(r,s)}}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),p(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},K=(e,t)=>t!==e&&(t==t||e==e),Y={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:K};class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const o=this._attributeNameForProperty(i,t);void 0!==o&&(this._attributeToPropertyMap.set(o,i),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Y){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this._requestUpdate(e,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Y}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=K){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,o=t.converter||W,r="function"==typeof o?o:o.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,o=t.converter;return(o&&o.toAttribute||W.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=Y){const o=this.constructor,r=o._attributeNameForProperty(e,i);if(void 0!==r){const e=o._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(e);if(void 0!==o){const e=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const o=this.constructor,r=o.getPropertyOptions(e);o._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Z.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function X(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):J(e,t)}function Q(e){return(t,i)=>{const o={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?te(o,t,i):ie(o,t)}}function ee(e){return(t,i)=>{const o={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==i?te(o,t,i):ie(o,t)}}const te=(e,t,i)=>{Object.defineProperty(t,i,e)},ie=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const oe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const re={};class ne extends Z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),o=[];i.forEach(e=>o.unshift(e)),this._styles=o}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?oe?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==re&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return re}}ne.finalized=!0,ne.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,n=R.has(t),s=V&&11===t.nodeType&&!!t.host,a=s&&!G.has(o),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let o=R.get(t);void 0===o&&(r(t,t.firstChild),R.set(t,o=new L(Object.assign({templateFactory:P},i))),o.appendInto(t)),o.setValue(e),o.commit()})(e,l,Object.assign({templateFactory:j(o)},i)),a){const e=R.get(l);R.delete(l);const i=e.value instanceof y?e.value.template:void 0;F(o,l,i),r(t,t.firstChild),t.appendChild(l),R.set(t,e)}!n&&s&&window.ShadyCSS.styleElement(t.host)};var se=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class ae extends ne{constructor(e){super(),this.text="",this.type="normal",this.disabled=!1,this.visible=!0,e&&(this.className=void 0!==e.className?e.className:this.className,this.id=void 0!==e.id?e.id:this.id,this.text=void 0!==e.text?e.text:this.text,this.type=void 0!==e.type?e.type:this.type,this.disabled=void 0!==e.disabled?e.disabled:this.disabled,this.visible=void 0!==e.visible?e.visible:this.visible)}_updateVisible(){this.visible?this.removeAttribute("hidden"):this.setAttribute("hidden","")}_handleClickButton(e){e.stopPropagation(),this._dispatchCustomEvent("click"),this.requestUpdate()}_dispatchCustomEvent(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});return this.dispatchEvent(t)}createRenderRoot(){return this}_getButtonColorType(){return"normal"===this.type||"submit"===this.type||"alert"===this.type?this.type:"normal"}render(){return this._updateVisible(),U`
      ${this._getStyleTagTemplate()}
      <button
        type="button"
        class="kuc-button__button kuc-button__button--${this._getButtonColorType()}"
        ?disabled="${this.disabled}"
        @click="${this._handleClickButton}"
      >
        ${this.text}
      </button>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-button,
        kuc-button *,
        :lang(en) kuc-button,
        :lang(en) kuc-button * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-button,
        :lang(ja) kuc-button * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-button,
        :lang(zh) kuc-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-button {
          display: inline-block;
          vertical-align: top;
        }
        kuc-button[hidden] {
          display: none;
        }
        .kuc-button__button {
          font-size: 16px;
          min-width: 160px;
          height: 48px;
          padding: 0px 16px;
          user-select: none;
        }
        .kuc-button__button--normal {
          border: 1px solid #e3e7e8;
          background-color: #f7f9fa;
          box-shadow: 1px 1px 1px #ffffff inset;
          color: #3498db;
        }
        .kuc-button__button--normal:hover,
        .kuc-button__button--normal:focus,
        .kuc-button__button--normal:active {
          background-color: #c8d6dd;
          box-shadow: none;
          cursor: pointer;
        }
        .kuc-button__button--submit {
          border: 1px solid #e3e7e8;
          background-color: #3498db;
          color: #ffffff;
        }
        .kuc-button__button--submit:hover,
        .kuc-button__button--submit:focus,
        .kuc-button__button--submit:active {
          background-color: #1d6fa5;
          cursor: pointer;
        }
        .kuc-button__button--alert {
          border: 0 none;
          background-color: #e74c3c;
          box-shadow: 1px 1px 1px #ffffff inset;
          color: #ffffff;
        }
        .kuc-button__button--alert:hover,
        .kuc-button__button--alert:focus,
        .kuc-button__button--alert:active {
          background-color: #bf2718;
          box-shadow: none;
          cursor: pointer;
        }
        .kuc-button__button:disabled {
          border: 1px solid #e3e7e8;
          background-color: #d4d7d7;
          box-shadow: none;
          color: #888888;
          cursor: default;
        }
      </style>
    `}}se([X({type:String})],ae.prototype,"text",void 0),se([X({type:String})],ae.prototype,"type",void 0),se([X({type:Boolean})],ae.prototype,"disabled",void 0),se([X({type:Boolean})],ae.prototype,"visible",void 0),window.customElements.get("kuc-button")||window.customElements.define("kuc-button",ae);var le=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class ce extends ne{constructor(e){if(super(),this.error="",this.itemLayout="horizontal",this.label="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this.value=[],this._GUID=this._generateGUID(),!e)return;if(this.className=void 0!==e.className?e.className:this.className,this.error=void 0!==e.error?e.error:this.error,this.id=void 0!==e.id?e.id:this.id,this.itemLayout=void 0!==e.itemLayout?e.itemLayout:this.itemLayout,this.label=void 0!==e.label?e.label:this.label,this.borderVisible=void 0!==e.borderVisible?e.borderVisible:this.borderVisible,this.disabled=void 0!==e.disabled?e.disabled:this.disabled,this.requiredIcon=void 0!==e.requiredIcon?e.requiredIcon:this.requiredIcon,this.visible=void 0!==e.visible?e.visible:this.visible,!Array.isArray(e.items))throw new Error("'items' property is not array");const t=[];if(e.items.forEach((e,i)=>{if(t.indexOf(void 0===e.value?"":e.value)>-1)throw new Error(`'items[${i}].value' is duplicated! You can specify unique one.`);t.push(void 0===e.value?"":e.value)}),this.items=void 0!==e.items?e.items:this.items,!Array.isArray(e.value))throw new Error("'value' property is not array");const i=[];e.value.forEach((e,t)=>{if(i.indexOf(void 0===e?"":e)>-1)throw new Error(`'value[${t}]' is duplicated! You can specify unique one.`);i.push(void 0===e?"":e)}),this.value=void 0!==e.value?e.value:this.value,this._onChange=e.onChange}set onChange(e){this._onChange=e,this.requestUpdate()}get onChange(){return this._onChange}_generateGUID(){return(new Date).getTime().toString(16)+Math.floor(4096*Math.random()).toString(16)}_updateVisible(){this.visible?this.removeAttribute("hidden"):this.setAttribute("hidden","")}_updateValue(e){const t=e.currentTarget.firstElementChild.value,i=this.value.indexOf(t);i>-1?this.value.splice(i,1):this.value.push(t),"function"==typeof this._onChange&&this._onChange(e),this.requestUpdate()}_handleClickItem(e){this.disabled||(e.preventDefault(),this._updateValue(e))}_handleKeyUpItem(e){this.disabled||32!==e.keyCode||this._updateValue(e)}createRenderRoot(){return this}_getItemTemplate(e,t){return U`
      <div
        class="kuc-checkbox__group__select-menu__item"
        itemLayout="${this.itemLayout}"
        tabindex="${this.disabled?-1:0}"
        @click="${this._handleClickItem}"
        @keyup="${this._handleKeyUpItem}"
      >
        <input
          type="checkbox"
          aria-describedby="${this._GUID}-error"
          aria-required=${this.requiredIcon}
          id="${this._GUID}-item-${t}"
          class="kuc-checkbox__group__select-menu__item__input"
          name=${void 0!==this.label?this.label:""}
          value=${void 0!==e.value?e.value:""}
          ?disabled="${this.disabled}"
          ?checked=${void 0!==e.value&&this.value.indexOf(e.value)>-1}
        />
        <label
          for="${this._GUID}-item-${t}"
          class="kuc-checkbox__group__select-menu__item__label"
          >${void 0===e.label?e.value:e.label}</label
        >
      </div>
    `}render(){return this._updateVisible(),U`
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-checkbox__group">
        <legend
          class="kuc-checkbox__group__label"
          ?hidden="${""===this.label}"
        >
          <span class="kuc-checkbox__group__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-checkbox__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <div
          class="kuc-checkbox__group__select-menu"
          ?borderVisible=${this.borderVisible}
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
        </div>
        <div
          class="kuc-checkbox__error"
          role="alert"
          aria-invalid="true"
          id="${this._GUID}-error"
          ?hidden="${""===this.error}"
        >
          ${this.error}
        </div>
      </fieldset>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-checkbox,
        kuc-checkbox *,
        :lang(en) kuc-checkbox,
        :lang(en) kuc-checkbox * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-checkbox,
        :lang(ja) kuc-checkbox * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-checkbox,
        :lang(zh) kuc-checkbox * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-checkbox {
          font-size: 14px;
          color: #333333;
          display: inline-block;
          vertical-align: top;
        }
        kuc-checkbox[hidden] {
          display: none;
        }
        .kuc-checkbox__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
        }
        .kuc-checkbox__group__label {
          display: inline-block;
          padding: 4px 0 8px 0;
          white-space: nowrap;
        }
        .kuc-checkbox__group__label[hidden] {
          display: none;
        }
        .kuc-checkbox__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-checkbox__group__label__required-icon[hidden] {
          display: none;
        }
        .kuc-checkbox__group__select-menu[itemLayout="vertical"] {
          min-width: 233px;
        }
        .kuc-checkbox__group__select-menu[borderVisible] {
          border-color: #e3e7e8;
          border-width: 1px;
          border-style: solid;
          padding: 4px 0 0 4px;
        }
        .kuc-checkbox__group__select-menu__item {
          margin-bottom: 4px;
          margin-right: 16px;
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          display: inline-block;
          height: 24px;
        }
        .kuc-checkbox__group__select-menu__item[itemLayout="vertical"] {
          display: block;
        }
        .kuc-checkbox__group__select-menu__item:focus {
          border: 1px solid #3498db;
        }
        .kuc-checkbox__group__select-menu__item[tabIndex="-1"]:focus {
          border: 1px solid transparent;
        }
        .kuc-checkbox__group__select-menu__item__input {
          display: none;
          cursor: pointer;
        }
        .kuc-checkbox__group__select-menu__item__input:hover
          + .kuc-checkbox__group__select-menu__item__label {
          color: #666666;
        }
        .kuc-checkbox__group__select-menu__item__input
          + .kuc-checkbox__group__select-menu__item__label::before {
          position: absolute;
          top: 50%;
          left: -30px;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
        }
        .kuc-checkbox__group__select-menu__item__input:not(:checked)
          + .kuc-checkbox__group__select-menu__item__label::before {
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='19' height='19' rx='1' fill='white' stroke='%23D8D8D8' stroke-width='2'/%3E%3C/svg%3E")
            no-repeat center center #ffffff;
        }
        .kuc-checkbox__group__select-menu__item__input:checked
          + .kuc-checkbox__group__select-menu__item__label::before {
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='19' height='19' rx='1' fill='white' stroke='%233498DB' stroke-width='2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z' fill='%233498DB'/%3E%3C/svg%3E")
            no-repeat center center #ffffff;
        }
        .kuc-checkbox__group__select-menu__item__input:checked
          + .kuc-checkbox__group__select-menu__item__label::after {
          position: absolute;
          top: 50%;
          left: -30px;
          margin-top: -11px;
          box-sizing: border-box;
          width: 21px;
          height: 21px;
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='19' height='19' rx='1' fill='white' stroke='%233498DB' stroke-width='2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z' fill='%233498DB'/%3E%3C/svg%3E")
            no-repeat center center #ffffff;
          content: "";
        }
        .kuc-checkbox__group__select-menu__item__input[disabled]
          + .kuc-checkbox__group__select-menu__item__label {
          color: #888888;
          cursor: not-allowed;
        }
        .kuc-checkbox__group__select-menu__item__input[disabled]:checked
          + .kuc-checkbox__group__select-menu__item__label::before {
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='19' height='19' rx='1' fill='white' stroke='%23D8D8D8' stroke-width='2'/%3E%3C/svg%3E")
            no-repeat center center #ffffff;
        }
        .kuc-checkbox__group__select-menu__item__input[disabled]:checked
          + .kuc-checkbox__group__select-menu__item__label::after {
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='19' height='19' rx='1' fill='white' stroke='%23D8D8D8' stroke-width='2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 11L6.5 9L9.5 11.5L14.5 6L16 7.5L9.5 14.5L5 11Z' fill='%23D8D8D8'/%3E%3C/svg%3E")
            no-repeat center center#ffffff;
        }
        .kuc-checkbox__group__select-menu__item__label {
          cursor: pointer;
          position: relative;
          margin-left: 32px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
        }
        .kuc-checkbox__error {
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0;
        }
        .kuc-checkbox__error[hidden] {
          display: none;
        }
      </style>
    `}}le([X({type:String})],ce.prototype,"error",void 0),le([X({type:String})],ce.prototype,"itemLayout",void 0),le([X({type:String})],ce.prototype,"label",void 0),le([X({type:Boolean})],ce.prototype,"borderVisible",void 0),le([X({type:Boolean})],ce.prototype,"disabled",void 0),le([X({type:Boolean})],ce.prototype,"requiredIcon",void 0),le([X({type:Boolean})],ce.prototype,"visible",void 0),le([X({type:Array,hasChanged(e,t){if(!Array.isArray(e))throw new Error("'items' property is not array");const i=[];return e.forEach((e,t)=>{if(i.indexOf(void 0===e.value?"":e.value)>-1)throw new Error(`'items[${t}].value' is duplicated! You can specify unique one.`);i.push(void 0===e.value?"":e.value)}),!0}})],ce.prototype,"items",void 0),le([X({type:Array,hasChanged(e,t){if(!Array.isArray(e))throw new Error("'value' property is not array");const i=[];return e.forEach((e,t)=>{if(i.indexOf(void 0===e?"":e)>-1)throw new Error(`'value[${t}]' is duplicated! You can specify unique one.`);i.push(void 0===e?"":e)}),!0}})],ce.prototype,"value",void 0),window.customElements.get("kuc-checkbox")||window.customElements.define("kuc-checkbox",ce);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const de=new WeakMap,ue=(he=e=>t=>{if(!(t instanceof L))throw new Error("unsafeHTML can only be used in text bindings");const i=de.get(t);if(void 0!==i&&S(e)&&e===i.value&&t.value===i.fragment)return;const o=document.createElement("template");o.innerHTML=e;const r=document.importNode(o.content,!0);t.setValue(r),de.set(t,{value:e,fragment:r})},(...e)=>{const t=he(...e);return m.set(t,!0),t});var he,pe=i(0),_e=i.n(pe),fe=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class me extends ne{constructor(e){if(super(),this.title="",this.content="",this.footer="",this._triggeredElement=null,this._GUID=this._generateGUID(),this.id=this._GUID,!document.getElementById(this._GUID)){document.getElementsByTagName("body")[0].appendChild(this)}e&&(this.title=void 0!==e.title?e.title:this.title,this.content=void 0!==e.content?e.content:this.content,this.footer=void 0!==e.footer?e.footer:this.footer)}open(){this.setAttribute("opened",""),this._triggeredElement=document.activeElement,this._dialogEl&&this._dialogEl.focus()}close(){this.removeAttribute("opened"),this._triggeredElement instanceof HTMLElement&&this._triggeredElement.focus()}createRenderRoot(){return this}render(){const e=_e.a.sanitize(this.content),t=_e.a.sanitize(this.footer);return U`
      ${this._getStyleTagTemplate()}
      <span
        class="kuc-dialog__first-dummy"
        tabIndex="0"
        @focus="${this._handleFocusFirstDummy}"
      ></span>
      <div class="kuc-dialog__dialog" role="dialog" tabindex="0">
        <div class="kuc-dialog__dialog__header">
          <span class="kuc-dialog__dialog__header__title">${this.title}</span>
          <button
            class="kuc-dialog__dialog__header__close-button"
            type="button"
            aria-label="close"
            @click="${this.close}"
          >
            ${this._getCloseButtonSvgTemplate()}
          </button>
        </div>
        <div class="kuc-dialog__dialog__content">
          ${ue(e)}
        </div>
        <div class="kuc-dialog__dialog__footer">
          ${ue(t)}
        </div>
      </div>
      <span
        class="kuc-dialog__last-dummy"
        tabIndex="0"
        @focus="${this._handleFocusLastDummy}"
      ></span>
      <div class="kuc-dialog__mask"></div>
    `}_generateGUID(){return(new Date).getTime().toString(16)+Math.floor(4096*Math.random()).toString(16)}_handleFocusFirstDummy(){const e=this._focusableElements[this._focusableElements.length-2];e&&e.focus()}_handleFocusLastDummy(){this._dialogEl.focus()}_getCloseButtonSvgTemplate(){return q`
      <svg
        class="kuc-dialog__dialog__header__close-button-svg"
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
          fill="#F7F9FA"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
          fill="#888888"
        />
      </svg>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-dialog,
        kuc-dialog *,
        :lang(en) kuc-dialog,
        :lang(en) kuc-dialog * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-dialog,
        :lang(ja) kuc-dialog * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-dialog,
        :lang(zh) kuc-dialog * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }

        kuc-dialog {
          display: none;
        }

        kuc-dialog[opened] {
          display: block;
        }

        .kuc-dialog__dialog {
          min-width: 600px;
          font-size: 20px;
          background-color: #fff;

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10000;
        }

        .kuc-dialog__dialog__header {
          min-height: 64px;
          border-bottom: 1px solid #e3e7e8;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .kuc-dialog__dialog__header__title {
          font-size: 24px;
          padding: 0 24px;
        }

        .kuc-dialog__dialog__header__close-button {
          width: 48px;
          height: 48px;
          border: none;
          background-color: #fff;
          margin-right: 12px;
        }

        .kuc-dialog__dialog__header__close-button-svg {
          vertical-align: middle;
        }

        .kuc-dialog__dialog__content {
          min-height: 48px;
          border-bottom: #e3e7e8 solid 1px;
          background-color: #f7f9fa;
        }

        .kuc-dialog__dialog__footer {
          min-height: 48px;
        }

        .kuc-dialog__mask {
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: 0.6;
          z-index: 9999;
        }
      </style>
    `}}fe([X({type:String})],me.prototype,"title",void 0),fe([X()],me.prototype,"content",void 0),fe([X()],me.prototype,"footer",void 0),fe([Q(".kuc-dialog__dialog")],me.prototype,"_dialogEl",void 0),fe([ee("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]),[tabindex='0']")],me.prototype,"_focusableElements",void 0),window.customElements.get("kuc-dialog")||window.customElements.define("kuc-dialog",me);var ge=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class be extends ne{constructor(e){if(super(),this.error="",this.label="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._selectorVisible=!1,this._GUID=this._generateGUID(),e){if(this.className=void 0!==e.className?e.className:this.className,this.error=void 0!==e.error?e.error:this.error,this.id=void 0!==e.id?e.id:this.id,this.label=void 0!==e.label?e.label:this.label,this.value=void 0!==e.value?e.value:this.value,this.disabled=void 0!==e.disabled?e.disabled:this.disabled,this.requiredIcon=void 0!==e.requiredIcon?e.requiredIcon:this.requiredIcon,this.visible=void 0!==e.visible?e.visible:this.visible,void 0!==e.items){if(!Array.isArray(e.items))throw new Error("'items' property is not array");e.items.map(e=>e.value).forEach((e,t,i)=>{if(void 0!==e&&i.indexOf(e)!==t)throw new Error(`'items[${t}].value' property is duplicated`)}),this.items=e.items}this.value=void 0!==e.value?e.value:this.value}}_generateGUID(){return(new Date).getTime().toString(16)+Math.floor(4096*Math.random()).toString(16)}_getSelectedLabel(){let e="";return this.items.forEach(t=>{t.value===this.value&&(e=void 0===t.label?t.value:t.label)}),e}_updateVisible(){this.visible?this.removeAttribute("hidden"):this.setAttribute("hidden","")}_dispatchCustomEvent(e,t){const i=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});return this.dispatchEvent(i)}_handleClickDropdownToggle(e){this._selectorVisible||this._itemsEl.forEach(e=>{e.classList.contains("kuc-dropdown__select-menu__highlight")&&e.classList.remove("kuc-dropdown__select-menu__highlight"),"true"===e.getAttribute("aria-checked")&&e.classList.add("kuc-dropdown__select-menu__highlight")}),this._selectorVisible=!this._selectorVisible,this.requestUpdate(),this._removeActiveDescendant()}_handleBlurDropdownToggle(e){this._selectorVisible=!1,this.requestUpdate(),this._removeActiveDescendant()}_handleMousedownDropdownItem(e){const t=e.target,i={oldValue:this.value,value:""};if(this._selectorVisible=!1,null!==t.getAttribute("value")){const e=t.getAttribute("value");if(this.value!==e)return this.value=e,i.value=this.value,void this._dispatchCustomEvent("change",i)}this.requestUpdate()}_handleMouseOverDropdownItem(e){this._itemsEl.forEach(e=>{e.classList.contains("kuc-dropdown__select-menu__highlight")&&e.classList.remove("kuc-dropdown__select-menu__highlight")});const t=e.currentTarget;t.classList.add("kuc-dropdown__select-menu__highlight"),this._setActiveDescendant(t.id)}_handleMouseLeaveDropdownItem(e){e.currentTarget.classList.remove("kuc-dropdown__select-menu__highlight"),this._removeActiveDescendant()}_handleKeyDownDropdownToggle(e){if(this._selectorVisible){let t=0;switch(e.keyCode){case 38:this._itemsEl.forEach((e,i)=>{e.classList.contains("kuc-dropdown__select-menu__highlight")&&(e.classList.remove("kuc-dropdown__select-menu__highlight"),t=i-1)}),t=t<=-1?this._itemsEl.length-1:t,this._itemsEl[t].classList.add("kuc-dropdown__select-menu__highlight"),this._setActiveDescendant(this._itemsEl[t].id);break;case 40:this._itemsEl.forEach((e,i)=>{e.classList.contains("kuc-dropdown__select-menu__highlight")&&(e.classList.remove("kuc-dropdown__select-menu__highlight"),t=i+1)}),t=t>=this._itemsEl.length?0:t,this._itemsEl[t].classList.add("kuc-dropdown__select-menu__highlight"),this._setActiveDescendant(this._itemsEl[t].id);break;case 13:this._itemsEl.forEach(e=>{if(e.classList.contains("kuc-dropdown__select-menu__highlight")){const t=e.getAttribute("value"),i={oldValue:this.value,value:""};this.value=t,i.value=this.value,this._dispatchCustomEvent("change",i)}}),this.requestUpdate()}}else this._itemsEl.forEach(e=>{e.classList.contains("kuc-dropdown__select-menu__highlight")&&e.classList.remove("kuc-dropdown__select-menu__highlight"),"true"===e.getAttribute("aria-checked")&&e.classList.add("kuc-dropdown__select-menu__highlight")})}_getItemTemplate(e,t){return U`
      <li
        class="kuc-dropdown__select-menu__item"
        role="menuitem"
        tabindex=${e.value===this.value?"0":"-1"}
        aria-checked=${e.value===this.value?"true":"false"}
        value=${void 0!==e.value?e.value:""}
        id="${this._GUID}-menuitem-${t}"
        @mousedown="${this._handleMousedownDropdownItem}"
        @mouseover="${this._handleMouseOverDropdownItem}"
        @mouseleave="${this._handleMouseLeaveDropdownItem}"
      >
        ${void 0===e.label?e.value:e.label}
      </li>
    `}createRenderRoot(){return this}render(){return this._updateVisible(),U`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-dropdown__label"
        id="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-dropdown__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-dropdown__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </div>
      <button
        class="kuc-dropdown__toggle"
        id="${this._GUID}-toggle"
        aria-haspopup="true"
        aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
        aria-describedby="${this._GUID}-error"
        aria-required=${this.requiredIcon}
        ?disabled="${this.disabled}"
        @click="${this._handleClickDropdownToggle}"
        @blur="${this._handleBlurDropdownToggle}"
        @keydown="${this._handleKeyDownDropdownToggle}"
      >
        <span class="kuc-dropdown__toggle__selected-item-label"
          >${this._getSelectedLabel()}</span
        >
        <span class="kuc-dropdown__toggle__icon"></span>
      </button>
      <ul
        class="kuc-dropdown__select-menu"
        role="menu"
        aria-hidden="${!this._selectorVisible}"
        ?hidden="${!this._selectorVisible}"
      >
        ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
      </ul>
      <div
        class="kuc-dropdown__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-dropdown,
        kuc-dropdown *,
        :lang(en) kuc-dropdown,
        :lang(en) kuc-dropdown * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-dropdown,
        :lang(ja) kuc-dropdown * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-dropdown,
        :lang(zh) kuc-dropdown * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-dropdown {
          display: inline-block;
          font-size: 14px;
          color: #333333;
          vertical-align: top;
        }
        kuc-dropdown[hidden] {
          display: none;
        }
        .kuc-dropdown__label {
          margin-top: 4px;
          margin-bottom: 8px;
        }
        .kuc-dropdown__label[hidden] {
          display: none;
        }
        .kuc-dropdown__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-dropdown__label__required-icon[hidden] {
          display: none;
        }
        .kuc-dropdown__toggle {
          width: 180px;
          height: 40px;
          box-sizing: border-box;
          box-shadow: 1px 1px 1px #ffffff inset;
          border: 1px solid #e3e7e8;
          color: #3498db;
          background-color: #f7f9fa;
          padding: 0 0 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .kuc-dropdown__toggle:focus {
          border: 1px solid #3498db;
        }
        .kuc-dropdown__toggle:disabled {
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
          color: #888888;
        }
        .kuc-dropdown__toggle__selected-item-label {
          font-size: 14px;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .kuc-dropdown__toggle__icon {
          flex: none;
          width: 38px;
          height: 38px;
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M24.2122 15.6665L25 16.1392L19.7332 21.4998H18.2668L13 16.1392L13.7878 15.6665L18.765 20.6866H19.235L24.2122 15.6665Z' fill='%233498DB'/%3E%3C/svg%3E")
            no-repeat center center transparent;
        }
        .kuc-dropdown__error {
          display: inline-block;
          width: 180px;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin-top: 8px;
        }
        .kuc-dropdown__error[hidden] {
          display: none;
        }
        .kuc-dropdown__select-menu {
          position: absolute;
          min-width: 280px;
          margin: 0;
          padding: 8px 0;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          z-index: 2000;
          list-style: none;
        }
        .kuc-dropdown__select-menu[hidden] {
          display: none;
        }
        .kuc-dropdown__select-menu__item {
          padding: 8px 16px 8px 24px;
          line-height: 1;
        }
        .kuc-dropdown__select-menu__item[aria-checked="true"] {
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='11' height='9' viewBox='0 0 11 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z' fill='%233498DB'/%3E%3C/svg%3E")
            no-repeat 6px 10px;
          color: #3498db;
        }
        .kuc-dropdown__select-menu__highlight[role="menuitem"] {
          background-color: #e2f2fe;
        }
      </style>
    `}_setActiveDescendant(e){void 0!==e&&null!==this._buttonEl&&this._buttonEl.setAttribute("aria-activedescendant",e)}_removeActiveDescendant(){this._buttonEl.removeAttribute("aria-activedescendant")}}ge([X({type:String})],be.prototype,"error",void 0),ge([X({type:String})],be.prototype,"label",void 0),ge([X({type:String})],be.prototype,"value",void 0),ge([X({type:Boolean})],be.prototype,"disabled",void 0),ge([X({type:Boolean})],be.prototype,"requiredIcon",void 0),ge([X({type:Boolean})],be.prototype,"visible",void 0),ge([X({type:Array,hasChanged(e){if(!Array.isArray(e))throw new Error("'items' property is not array");return e.map(e=>e.value).forEach((e,t,i)=>{if(void 0!==e&&i.indexOf(e)!==t)throw new Error(`'items[${t}].value' property is duplicated`)}),!0}})],be.prototype,"items",void 0),ge([ee(".kuc-dropdown__select-menu__item")],be.prototype,"_itemsEl",void 0),ge([Q("button.kuc-dropdown__toggle")],be.prototype,"_buttonEl",void 0),window.customElements.get("kuc-dropdown")||window.customElements.define("kuc-dropdown",be);var ve=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class ye extends ne{constructor(e){super(),this.error="",this.label="",this.value=[],this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=this._generateGUID(),e&&this._initProps(e)}render(){return this._updateVisible(),U`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-multi-choice__label"
        id="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-multi-choice__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-multi-choice__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </div>
      <div
        class="kuc-multi-choice__menu"
        role="menu"
        aria-describedby="${this._GUID}-error"
        aria-labelledby="${this._GUID}-label"
        ?disabled="${this.disabled}"
        tabindex="${this.disabled?"-1":"0"}"
        @keydown=${this._handleKeyDownMultiChoice}
      >
        ${this.items.map((e,t)=>this._getMenuItemTemplate(e,t))}
      </div>
      <div
        class="kuc-multi-choice__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `}createRenderRoot(){return this}_initProps(e){if(this.className=void 0!==e.className?e.className:this.className,this.error=void 0!==e.error?e.error:this.error,this.id=void 0!==e.id?e.id:this.id,this.label=void 0!==e.label?e.label:this.label,void 0!==e.value){if(!Array.isArray(e.value))throw new Error("'value' property is not array");e.value.forEach((e,t,i)=>{if(void 0!==e&&i.indexOf(e)!==t)throw new Error(`'value[${t}]' property is duplicated`)}),this.value=e.value}if(this.disabled=void 0!==e.disabled?e.disabled:this.disabled,this.requiredIcon=void 0!==e.requiredIcon?e.requiredIcon:this.requiredIcon,this.visible=void 0!==e.visible?e.visible:this.visible,void 0!==e.items){if(!Array.isArray(e.items))throw new Error("'items' property is not array");e.items.map(e=>e.value).forEach((e,t,i)=>{if(void 0!==e&&i.indexOf(e)!==t)throw new Error(`'items[${t}].value' property is duplicated`)}),this.items=e.items}this.value=void 0!==e.value?e.value:this.value}_generateGUID(){return(new Date).getTime().toString(16)+Math.floor(4096*Math.random()).toString(16)}_updateVisible(){this.visible?this.removeAttribute("hidden"):this.setAttribute("hidden","")}_handleMousedownMultiChoiceItem(e){if(this.disabled)return;const t=e.target;if(null!==t.getAttribute("value")){const e=t.getAttribute("value");this._handleChangeValue(e)}this.requestUpdate()}_handleMouseOverMultiChoiceItem(e){if(this.disabled)return;this._itemsEl.forEach(e=>{e.classList.contains("kuc-multi-choice__menu__highlight")&&e.classList.remove("kuc-multi-choice__menu__highlight")});const t=e.currentTarget;t.classList.add("kuc-multi-choice__menu__highlight"),this._setActiveDescendant(t.id)}_handleMouseLeaveMultiChoiceItem(e){if(this.disabled)return;e.currentTarget.classList.remove("kuc-multi-choice__menu__highlight"),this._setActiveDescendant()}_handleKeyDownMultiChoice(e){if(this.disabled)return;let t=0;switch(e.code){case"ArrowUp":{this._itemsEl.forEach((e,i)=>{e.classList.contains("kuc-multi-choice__menu__highlight")&&(e.classList.remove("kuc-multi-choice__menu__highlight"),t=i-1)}),t=t<=-1?this._itemsEl.length-1:t;const e=this._itemsEl[t];e.classList.add("kuc-multi-choice__menu__highlight"),this._setActiveDescendant(e.id);break}case"ArrowDown":{this._itemsEl.forEach((e,i)=>{e.classList.contains("kuc-multi-choice__menu__highlight")&&(e.classList.remove("kuc-multi-choice__menu__highlight"),t=i+1)}),t=t>=this._itemsEl.length?0:t;const e=this._itemsEl[t];e.classList.add("kuc-multi-choice__menu__highlight"),this._setActiveDescendant(e.id);break}case"Space":this._itemsEl.forEach(e=>{if(e.classList.contains("kuc-multi-choice__menu__highlight")){const t=e.getAttribute("value");this._handleChangeValue(t)}}),this.requestUpdate()}}_getMenuItemTemplate(e,t){return U`
      <div
        class="kuc-multi-choice__menu__item"
        role="menuitem"
        aria-checked=${this.value.some(t=>t===e.value)}
        aria-required=${this.requiredIcon}
        value=${void 0!==e.value?e.value:""}
        id="${this._GUID}-menuitem-${t}"
        @mousedown=${this._handleMousedownMultiChoiceItem}
        @mouseover=${this._handleMouseOverMultiChoiceItem}
        @mouseleave=${this._handleMouseLeaveMultiChoiceItem}
      >
        ${void 0===e.label?e.value:e.label}
      </div>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-multi-choice,
        kuc-multi-choice *,
        :lang(en) kuc-multi-choice,
        :lang(en) kuc-multi-choice * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-multi-choice,
        :lang(ja) kuc-multi-choice * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-multi-choice,
        :lang(zh) kuc-multi-choice * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-multi-choice {
          display: inline-block;
          font-size: 14px;
          color: #333;
        }
        kuc-multi-choice[hidden] {
          display: none;
        }
        .kuc-multi-choice__label {
          margin-top: 4px;
          margin-bottom: 8px;
        }
        .kuc-multi-choice__label[hidden] {
          display: none;
        }
        .kuc-multi-choice__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-multi-choice__label__required-icon[hidden] {
          display: none;
        }
        .kuc-multi-choice__error {
          display: inline-block;
          width: 180px;
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin-top: 8px;
        }
        .kuc-multi-choice__error[hidden] {
          display: none;
        }
        .kuc-multi-choice__menu {
          position: relative;
          width: 180px;
          background: #ffffff;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          box-shadow: 1px 1px 12px #f5f5f5 inset, -1px -1px 12px #f5f5f5 inset;
          padding: 6px 0;
          overflow-y: auto;
          overflow-x: hidden;
          max-height: 134px;
        }
        .kuc-multi-choice__menu:not([disabled]):focus {
          outline: none;
          border: 1px solid #3498db;
        }
        .kuc-multi-choice__menu[disabled] {
          background-color: #dbdcdd;
          box-shadow: none;
          cursor: not-allowed;
          color: #888;
          outline: none;
        }
        .kuc-multi-choice__menu__item {
          padding: 4px 16px;
          margin-bottom: 2px;
          line-height: 1;
        }
        .kuc-multi-choice__menu__item[aria-checked="true"] {
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='11' height='9' viewBox='0 0 11 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z' fill='%233498DB'/%3E%3C/svg%3E")
            no-repeat 16px 5px;
          color: #3498db;
          padding-left: 32px;
        }
        .kuc-multi-choice__menu[disabled]
          .kuc-multi-choice__menu__item[aria-checked="true"] {
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='11' height='9' viewBox='0 0 11 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 5L1.5 3L4.5 5.5L9.5 0L11 1.5L4.5 8.5L0 5Z' fill='%23D8D8D8'/%3E%3C/svg%3E")
            no-repeat 16px 5px;
          color: #888;
        }
        .kuc-multi-choice__menu__highlight[role="menuitem"] {
          background-color: #e2f2fe;
          cursor: pointer;
        }
      </style>
    `}_setActiveDescendant(e){void 0!==e&&null!==this._menuEl?this._menuEl.setAttribute("aria-activedescendant",e):this._menuEl.removeAttribute("aria-activedescendant")}_handleChangeValue(e){const t=this.value,i=this._getNewValue(e);i!==t&&(this.value=i,this._dispatchCustomEvent("change",{oldValue:t,value:i}))}_getNewValue(e){return this.value.every(t=>t!==e)?[...this.value,e]:this.value.filter(t=>t!==e)}_dispatchCustomEvent(e,t){const i=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(i)}}ve([X({type:String})],ye.prototype,"error",void 0),ve([X({type:String})],ye.prototype,"label",void 0),ve([X({type:Array,hasChanged(e){if(!Array.isArray(e))throw new Error("'value' property is not array");return e.forEach((e,t,i)=>{if(void 0!==e&&i.indexOf(e)!==t)throw new Error(`'value[${t}]' property is duplicated`)}),!0}})],ye.prototype,"value",void 0),ve([X({type:Boolean})],ye.prototype,"disabled",void 0),ve([X({type:Boolean})],ye.prototype,"requiredIcon",void 0),ve([X({type:Boolean})],ye.prototype,"visible",void 0),ve([X({type:Array,hasChanged(e){if(!Array.isArray(e))throw new Error("'items' property is not array");return e.map(e=>e.value).forEach((e,t,i)=>{if(void 0!==e&&i.indexOf(e)!==t)throw new Error(`'items[${t}].value' property is duplicated`)}),!0}})],ye.prototype,"items",void 0),ve([Q(".kuc-multi-choice__menu")],ye.prototype,"_menuEl",void 0),ve([ee(".kuc-multi-choice__menu__item")],ye.prototype,"_itemsEl",void 0),window.customElements.get("kuc-multi-choice")||window.customElements.define("kuc-multi-choice",ye);var xe=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class ke extends ne{constructor(e){super(),this.text="",this.type="danger",this._GUID=this._generateGUID(),this.id=this._GUID,e&&(this.className=void 0!==e.className?e.className:this.className,this.text=void 0!==e.text?e.text:this.text,this.type=void 0!==e.type?e.type:this.type)}_generateGUID(){return(new Date).getTime().toString(16)+Math.floor(4096*Math.random()).toString(16)}_animationFinished(){this.updateComplete.then(()=>{this.classList.contains("kuc-notification-fadein")&&this.classList.remove("kuc-notification-fadein"),this.classList.contains("kuc-notification-fadeout")&&(this.classList.remove("kuc-notification-fadeout"),this.parentNode&&this.parentNode.removeChild(this))})}_handleClickCloseButton(e){this.close()}_getCloseButtonColor(){switch(this.type){case"info":return"#448aca";case"success":return"#9bbc65";default:return"#c65040"}}_getCloseButtonSvgTemplate(){return q`
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>close button</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          fill="${this._getCloseButtonColor()}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.4765 15.7071L20.1229 12.0607L20.4765 11.7071L19.7694 11L19.4158 11.3536L15.7694 15L12.1229 11.3536L11.7694 11L11.0623 11.7071L11.4158 12.0607L15.0623 15.7071L11.3536 19.4158L11 19.7694L11.7071 20.4765L12.0607 20.1229L15.7694 16.4142L19.4781 20.1229L19.8316 20.4765L20.5387 19.7694L20.1852 19.4158L16.4765 15.7071Z"
          fill="white"
        />
      </svg>
    `}createRenderRoot(){return this}open(){if(!document.getElementById(this._GUID)){this.classList.add("kuc-notification-fadein");document.getElementsByTagName("body")[0].appendChild(this)}}close(){document.getElementById(this._GUID)&&this.classList.add("kuc-notification-fadeout")}firstUpdated(){this.addEventListener("animationend",this._animationFinished)}render(){return U`
      ${this._getStyleTagTemplate()}
      <div
        class="kuc-notification__notification kuc-notification__notification--${this.type}"
      >
        <p
          class="kuc-notification__notification__title"
          role="alert"
          aria-live="assertive"
        >
          ${this.text}
        </p>
        <button
          class="kuc-notification__notification__closeButton"
          type="button"
          aria-label="close"
          @click="${this._handleClickCloseButton}"
        >
          ${this._getCloseButtonSvgTemplate()}
        </button>
      </div>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-notification,
        kuc-notification *,
        :lang(en) kuc-notification,
        :lang(en) kuc-notification * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-notification,
        :lang(ja) kuc-notification * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-notification,
        :lang(zh) kuc-notification * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-notification {
          color: #ffffff;
          font-weight: 700;
          text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.5);
          font-size: 0;
          line-height: normal;
          display: inline-block;
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 10000;
          pointer-events: none;
          margin-top: 16px;
          text-align: center;
        }
        .kuc-notification-fadein {
          animation-name: kuc-notification-fade-in;
          animation-duration: 0.4s;
        }
        .kuc-notification-fadeout {
          animation-name: kuc-notification-fade-out;
          animation-duration: 0.6s;
        }
        .kuc-notification__notification {
          display: inline-block;
          background-color: #e74c3c;
        }
        .kuc-notification__notification--info {
          background-color: #3498db;
        }
        .kuc-notification__notification--success {
          background-color: #91c36c;
        }
        .kuc-notification__notification--danger {
          background-color: #e74c3c;
        }
        .kuc-notification__notification__title {
          display: inline-block;
          vertical-align: middle;
          word-break: break-word;
          font-size: 16px;
          margin: 16px 8px 16px 24px;
          max-width: 500px;
        }
        .kuc-notification__notification__closeButton {
          width: 48px;
          height: 48px;
          padding: 0;
          background-color: transparent;
          border: none;
          vertical-align: middle;
          pointer-events: auto;
        }
        @keyframes kuc-notification-fade-in {
          0% {
            top: -15%;
          }
          100% {
            top: 0;
          }
        }
        @keyframes kuc-notification-fade-out {
          0% {
            top: 0;
          }
          10% {
            top: 5%;
          }
          100% {
            top: -15%;
          }
        }
      </style>
    `}}xe([X({type:String})],ke.prototype,"text",void 0),xe([X({type:String})],ke.prototype,"type",void 0),window.customElements.get("kuc-notification")||window.customElements.define("kuc-notification",ke);var we=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class Se extends ne{constructor(e){if(super(),this.error="",this.itemLayout="horizontal",this.label="",this.value="",this.borderVisible=!0,this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this.items=[],this._GUID=this._generateGUID(),e&&(this.className=void 0!==e.className?e.className:this.className,this.error=void 0!==e.error?e.error:this.error,this.id=void 0!==e.id?e.id:this.id,this.itemLayout=void 0!==e.itemLayout?e.itemLayout:this.itemLayout,this.label=void 0!==e.label?e.label:this.label,this.value=void 0!==e.value?e.value:this.value,this.borderVisible=void 0!==e.borderVisible?e.borderVisible:this.borderVisible,this.disabled=void 0!==e.disabled?e.disabled:this.disabled,this.requiredIcon=void 0!==e.requiredIcon?e.requiredIcon:this.requiredIcon,this.visible=void 0!==e.visible?e.visible:this.visible,void 0!==e.items)){if(!Array.isArray(e.items))throw new Error("'items' property is not array");const t=[];e.items.forEach((e,i)=>{const o=void 0===e.value?"":e.value;if(t.indexOf(o)>-1)throw new Error(`'items[${i}].value' is duplicated! You can specify unique one.`);t.push(o)}),this.items=e.items}}_generateGUID(){return(new Date).getTime().toString(16)+Math.floor(4096*Math.random()).toString(16)}_updateVisible(){this.visible?this.removeAttribute("hidden"):this.setAttribute("hidden","")}_handleChangeInput(e){e.stopPropagation();const t=e.target.value,i={value:t,oldValue:this.value};this.value=t,this._dispatchCustomEvent("change",i)}_handleFocusInput(e){e.target.parentNode.setAttribute("focused","")}_handleBlurInput(e){e.target.parentNode.removeAttribute("focused")}_dispatchCustomEvent(e,t){const i=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});return this.dispatchEvent(i)}createRenderRoot(){return this}_getRadioIconSvgTemplate(e,t){return q`
    <svg
      class="kuc-radio-button__group__select-menu__item__label__icon"
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='10.5'
        cy='10.5'
        r='10'
        fill='white'
        stroke='#e3e7e8' stroke-width='1'/>
      ${t?q`<circle cx='10.5' cy='10.5' r='6.5' fill='${e?"#e3e7e8":"#3498db"}'/>`:""}
    </svg>
  `}_getItemTemplate(e,t){return U`
      <div
        class="kuc-radio-button__group__select-menu__item"
        itemLayout="${this.itemLayout}"
      >
        <input
          type="radio"
          aria-describedby="${this._GUID}-error"
          id="${this._GUID}-item-${t}"
          class="kuc-radio-button__group__select-menu__item__input"
          name="${this._GUID}-group"
          value="${void 0!==e.value?e.value:""}"
          aria-required=${this.requiredIcon}
          ?disabled="${this.disabled}"
          @change="${this._handleChangeInput}"
          @focus="${this._handleFocusInput}"
          @blur="${this._handleBlurInput}"
        />
        <label
          class="kuc-radio-button__group__select-menu__item__label"
          for="${this._GUID}-item-${t}"
          >${this._getRadioIconSvgTemplate(this.disabled,void 0!==e.value&&this.value===e.value)}${void 0===e.label?e.value:e.label}
        </label>
      </div>
    `}render(){return this._updateVisible(),U`
      ${this._getStyleTagTemplate()}
      <fieldset class="kuc-radio-button__group">
        <legend class="kuc-radio-button__group__label" ?hidden="${!this.label}">
          <span class="kuc-radio-button__group__label__text">${this.label}</span
          ><!--
            --><span
            class="kuc-radio-button__group__label__required-icon"
            ?hidden="${!this.requiredIcon}"
            >*</span
          >
        </legend>
        <div
          class="kuc-radio-button__group__select-menu"
          ?borderVisible=${this.borderVisible}
          itemLayout="${this.itemLayout}"
        >
          ${this.items.map((e,t)=>this._getItemTemplate(e,t))}
        </div>
        <div
          class="kuc-radio-button__error"
          role="alert"
          id="${this._GUID}-error"
          ?hidden="${!this.error}"
        >
          ${this.error}
        </div>
      </fieldset>
    `}updated(){this._inputEls.forEach((e,t)=>{e.checked=this.value===e.value})}_getStyleTagTemplate(){return U`
      <style>
        kuc-radio-button,
        kuc-radio-button *,
        :lang(en) kuc-radio-button,
        :lang(en) kuc-radio-button * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-radio-button,
        :lang(ja) kuc-radio-button * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-radio-button,
        :lang(zh) kuc-radio-button * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-radio-button {
          font-size: 14px;
          color: #333333;
          display: inline-block;
        }

        kuc-radio-button[hidden] {
          display: none;
        }

        .kuc-radio-button__group {
          border: none;
          padding: 0px;
          height: auto;
          display: inline-block;
        }

        .kuc-radio-button__group__label {
          display: inline-block;
          padding: 4px 0 8px 0;
          white-space: nowrap;
        }

        .kuc-radio-button__group__label[hidden] {
          display: none;
        }

        .kuc-radio-button__group__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }

        .kuc-radio-button__group__label__required-icon[hidden] {
          display: none;
        }

        .kuc-radio-button__group__select-menu[itemlayout="vertical"] {
          min-width: 233px;
        }

        .kuc-radio-button__group__select-menu[bordervisible] {
          border-color: #e3e7e8;
          border-width: 1px;
          border-style: solid;
          padding: 4px 0 0 4px;
        }

        .kuc-radio-button__group__select-menu__item {
          margin-bottom: 4px;
          margin-right: 16px;
          padding: 4px;
          border: 1px solid transparent;
          position: relative;
          white-space: normal;
          word-wrap: normal;
          display: inline-block;
          height: 24px;
        }

        .kuc-radio-button__group__select-menu__item[itemlayout="vertical"] {
          display: block;
        }

        .kuc-radio-button__group__select-menu__item[focused] {
          border: 1px solid #3498db;
        }

        .kuc-radio-button__group__select-menu__item__input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .kuc-radio-button__group__select-menu__item__input:hover
          + .kuc-radio-button__group__select-menu__item__label {
          color: #666666;
        }

        .kuc-radio-button__group__select-menu__item__label__icon {
          position: absolute;
          top: 50%;
          left: -30px;
          box-sizing: border-box;
          margin-top: -11px;
          width: 21px;
          height: 21px;
          box-shadow: 1px 1px 3px #f5f5f5 inset, -1px -1px 3px #f5f5f5 inset;
          content: "";
          border-radius: 9px;
        }

        .kuc-radio-button__group__select-menu__item__input[disabled]
          + .kuc-radio-button__group__select-menu__item__label {
          color: #888888;
          cursor: not-allowed;
        }

        .kuc-radio-button__group__select-menu__item__label {
          cursor: pointer;
          position: relative;
          margin-left: 32px;
          display: inline-block;
          vertical-align: middle;
          white-space: nowrap;
        }

        .kuc-radio-button__error {
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin: 8px 0;
        }

        .kuc-radio-button__error[hidden] {
          display: none;
        }
      </style>
    `}}we([X({type:String})],Se.prototype,"error",void 0),we([X({type:String})],Se.prototype,"itemLayout",void 0),we([X({type:String})],Se.prototype,"label",void 0),we([X({type:String})],Se.prototype,"value",void 0),we([X({type:Boolean})],Se.prototype,"borderVisible",void 0),we([X({type:Boolean})],Se.prototype,"disabled",void 0),we([X({type:Boolean})],Se.prototype,"requiredIcon",void 0),we([X({type:Boolean})],Se.prototype,"visible",void 0),we([X({type:Array,hasChanged(e,t){if(!Array.isArray(e))throw new Error("'items' property is not array");const i=[];return e.forEach((e,t)=>{const o=void 0===e.value?"":e.value;if(i.indexOf(o)>-1)throw new Error(`'items[${t}].value' is duplicated! You can specify unique one.`);i.push(o)}),!0}})],Se.prototype,"items",void 0),we([ee(".kuc-radio-button__group__select-menu__item__input")],Se.prototype,"_inputEls",void 0),window.customElements.get("kuc-radio-button")||window.customElements.define("kuc-radio-button",Se);var Ee=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class Ae extends ne{constructor(e){if(super(),this.label="",this.visible=!0,this.columns=[],this.data=[],e){if(this.className=void 0!==e.className?e.className:this.className,this.id=void 0!==e.id?e.id:this.id,this.label=void 0!==e.label?e.label:this.label,this.visible=void 0!==e.visible?e.visible:this.visible,!Array.isArray(e.columns)&&void 0!==e.columns)throw new Error("'columns' property is invalid");if(this.columns=void 0!==e.columns?e.columns:this.columns,!Array.isArray(e.data)&&void 0!==e.data)throw new Error("'data' property is invalid");e.data&&e.data.forEach(e=>{if(!Array.isArray(e))throw new Error("'data' property is invalid")}),this.data=void 0!==e.data?e.data:this.data}}_updateVisible(){this.visible?this.removeAttribute("hidden"):this.setAttribute("hidden","")}createRenderRoot(){return this}_getColumnsTemplate(e){return U`
      <th
        class="kuc-readonly-table__table__header__cell"
        ?hidden="${!1===e.visible}"
      >
        <span class="kuc-readonly-table__table__header__cell__label">
          ${e.header&&e.header.text}</span
        >
      </th>
    `}_getDataTemplate(e,t){return U`
      <tr
        class="kuc-readonly-table__table__body__row kuc-readonly-table__table__body__row-${t}"
      >
        ${e.map((e,t)=>{let i=!1;return this.columns[t]&&!1===this.columns[t].visible&&(i=!0),U`
            <td
              class="kuc-readonly-table__table__body__row__cell-data"
              ?hidden="${i}"
            >
              ${e}
            </td>
          `})}
      </tr>
    `}render(){return this._updateVisible(),U`
      ${this._getStyleTagTemplate()}
      <table class="kuc-readonly-table__table" aria-label="${this.label}">
        <caption class="kuc-readonly-table__label" ?hidden="${!this.label}">
          <span class="kuc-readonly-table__table__label__text"
            >${this.label}</span
          >
        </caption>
        <thead class="kuc-readonly-table__table__header">
          <tr>
            ${this.columns.map(e=>this._getColumnsTemplate(e))}
          </tr>
        </thead>
        <tbody class="kuc-readonly-table__table__body">
          ${this.data.map((e,t)=>this._getDataTemplate(e,t))}
        </tbody>
      </table>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-readonly-table,
        kuc-readonly-table *,
        :lang(en) kuc-readonly-table,
        :lang(en) kuc-readonly-table * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-readonly-table,
        :lang(ja) kuc-readonly-table * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-readonly-table,
        :lang(zh) kuc-readonly-table * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
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
        }
        .kuc-readonly-table__table__header {
          border-width: 0px 1px;
          border-color: #3498db;
          border-style: solid;
        }
        .kuc-readonly-table__label {
          text-align: left;
          margin-bottom: 4px;
        }
        .kuc-readonly-table__label[hideden] {
          display: none;
        }
        .kuc-readonly-table__table__header__cell {
          background-color: #3498db;
          color: #ffffff;
          height: 40px;
          box-sizing: border-box;
          text-align: left;
          min-width: 193px;
        }
        .kuc-readonly-table__table__header__cell[hidden] {
          display: none;
        }
        .kuc-readonly-table__table__header__cell__label {
          padding: 4px 8px;
          font-weight: 400;
          font-size: 12px;
        }
        .kuc-readonly-table__table__body__row-0
          > .kuc-readonly-table__table__body__row__cell-data {
          border-width: 0 1px 1px 1px;
        }
        .kuc-readonly-table__table__body__row__cell-data {
          border-color: #e3e7e8;
          border-style: solid;
          border-width: 1px;
          padding: 4px 8px;
        }
        .kuc-readonly-table__table__body__row__cell-data[hidden] {
          display: none;
        }
      </style>
    `}}Ee([X({type:String})],Ae.prototype,"label",void 0),Ee([X({type:Boolean})],Ae.prototype,"visible",void 0),Ee([X({type:Array,hasChanged(e){if(!Array.isArray(e))throw new Error("'columns' property is invalid");return!0}})],Ae.prototype,"columns",void 0),Ee([X({type:Array,hasChanged(e){if(!Array.isArray(e))throw new Error("'data' property is invalid");return e&&e.forEach(e=>{if(!Array.isArray(e))throw new Error("'data' property is invalid")}),!0}})],Ae.prototype,"data",void 0),window.customElements.get("kuc-readonly-table")||window.customElements.define("kuc-readonly-table",Ae);var Te=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class Le extends ne{constructor(e){super(),this.text="",e&&(this.text=void 0!==e.text?e.text:this.text)}_getSpinnerSvgTemplate(){return q`
      <svg
        class="kuc-spinner__spinner__loader"
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
    `}open(){document.getElementsByTagName("BODY")[0].appendChild(this)}close(){this.parentNode&&this.parentNode.removeChild(this)}createRenderRoot(){return this}render(){return U`
      ${this._getStyleTagTemplate()}
      <div class="kuc-spinner__spinner" aria-live="assertive" role="alert">
        ${this._getSpinnerSvgTemplate()}
        <div
          class="${this.text?"kuc-spinner__spinner__text":"kuc-spinner__spinner__text visually-hidden"}"
        >
          ${this.text?this.text:"now loading…"}
        </div>
      </div>
      <div class="kuc-spinner__mask"></div>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-spinner,
        kuc-spinner *,
        :lang(en) kuc-spinner,
        :lang(en) kuc-spinner * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-spinner,
        :lang(ja) kuc-spinner * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-spinner,
        :lang(zh) kuc-spinner * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-spinner {
          font-size: 14px;
          color: #333333;
        }
        .kuc-spinner__spinner {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10000;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .kuc-spinner__spinner__loader {
          width: 50px;
          height: 50px;
          animation: rotate-loading 1s steps(12) infinite;
          fill: #99ccff;
        }
        .kuc-spinner__spinner__text {
          margin: 10px 0;
        }
        .visually-hidden {
          position: absolute;
          white-space: nowrap;
          width: 1px;
          height: 1px;
          overflow: hidden;
          border: 0;
          padding: 0;
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          margin: -1px;
        }
        .kuc-spinner__mask {
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          width: 100%;
          height: 100%;
          background-color: #666666;
          opacity: 0.6;
          z-index: 9999;
        }
        @keyframes rotate-loading {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      </style>
    `}}Te([X({type:String})],Le.prototype,"text",void 0),window.customElements.get("kuc-spinner")||window.customElements.define("kuc-spinner",Le);var Ce=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class Ne extends ne{constructor(e){super(),this.error="",this.label="",this.placeholder="",this.prefix="",this.suffix="",this.textAlign="left",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=this._generateGUID(),e&&(this.className=void 0!==e.className?e.className:this.className,this.error=void 0!==e.error?e.error:this.error,this.id=void 0!==e.id?e.id:this.id,this.label=void 0!==e.label?e.label:this.label,this.placeholder=void 0!==e.placeholder?e.placeholder:this.placeholder,this.prefix=void 0!==e.prefix?e.prefix:this.prefix,this.suffix=void 0!==e.suffix?e.suffix:this.suffix,this.textAlign=void 0!==e.textAlign?e.textAlign:this.textAlign,this.value=void 0!==e.value?e.value:this.value,this.disabled=void 0!==e.disabled?e.disabled:this.disabled,this.requiredIcon=void 0!==e.requiredIcon?e.requiredIcon:this.requiredIcon,this.visible=void 0!==e.visible?e.visible:this.visible)}_generateGUID(){return(new Date).getTime().toString(16)+Math.floor(4096*Math.random()).toString(16)}_updateVisible(){this.visible?this.removeAttribute("hidden"):this.setAttribute("hidden","")}_handleFocusInput(e){const t={value:this.value};this._dispatchCustomEvent("focus",t),this.requestUpdate()}_handleChangeInput(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,this._dispatchCustomEvent("change",i),this.requestUpdate()}_dispatchCustomEvent(e,t){const i=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});return this.dispatchEvent(i)}createRenderRoot(){return this}render(){return this._updateVisible(),U`
      ${this._getStyleTagTemplate()}
      <div class="kuc-text__text">
        <label
          class="kuc-text__text__label"
          for="${this._GUID}-label"
          ?hidden=${!this.label}
        >
          <span class="kuc-text__text__label__text">${this.label}</span
          ><!--
          --><span
            class="kuc-text__text__label__required-icon"
            ?hidden=${!this.requiredIcon}
            >*</span
          >
        </label>
        <div class="kuc-text__text__input-form">
          <span
            class="kuc-text__text__input-form__prefix"
            ?hidden="${!this.prefix}"
            >${this.prefix}</span
          ><!--
          --><input
            class="kuc-text__text__input-form__input"
            id="${this._GUID}-label"
            placeholder=${this.placeholder}
            textAlign=${this.textAlign}
            type="text"
            .value=${this.value}
            aria-required=${this.requiredIcon}
            aria-invalid="${""!==this.error}"
            aria-describedBy="${this._GUID}-error"
            @focus="${this._handleFocusInput}"
            @change="${this._handleChangeInput}"
            ?disabled="${this.disabled}"
          /><!--
          --><span
            class="kuc-text__text__input-form__suffix"
            ?hidden="${!this.suffix}"
            >${this.suffix}</span
          >
        </div>
        <div
          class="kuc-text__text__error"
          id="${this._GUID}-error"
          role="alert"
          ?hidden=${!this.error}
        >
          ${this.error}
        </div>
      </div>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-text,
        kuc-text *,
        :lang(en) kuc-text,
        :lang(en) kuc-text * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-text,
        :lang(ja) kuc-text * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-text,
        :lang(zh) kuc-text * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-text {
          font-size: 14px;
          color: #333333;
          display: inline-block;
          vertical-align: top;
        }
        kuc-text[hidden] {
          display: none;
        }
        .kuc-text__text {
          display: inline-block;
        }
        .kuc-text__text__label {
          display: inline-block;
          margin-top: 4px;
          margin-bottom: 8px;
        }
        .kuc-text__text__label[hidden] {
          display: none;
        }
        .kuc-text__text__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-text__text__label__required-icon[hidden] {
          display: none;
        }
        .kuc-text__text__input-form__prefix {
          padding-right: 4px;
        }
        .kuc-text__text__input-form__input {
          width: 180px;
          height: 40px;
          padding: 0 8px;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
        }
        .kuc-text__text__input-form__input[textAlign="left"] {
          text-align: left;
        }
        .kuc-text__text__input-form__input[textAlign="right"] {
          text-align: right;
        }
        .kuc-text__text__input-form__input:focus {
          border: 1px solid #3498db;
        }
        .kuc-text__text__input-form__input:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
        }
        .kuc-text__text__input-form__suffix {
          padding-left: 4px;
        }
        .kuc-text__text__error {
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin-top: 8px;
        }
        .kuc-text__text__error[hidden] {
          display: none;
        }
      </style>
    `}}Ce([X({type:String})],Ne.prototype,"error",void 0),Ce([X({type:String})],Ne.prototype,"label",void 0),Ce([X({type:String})],Ne.prototype,"placeholder",void 0),Ce([X({type:String})],Ne.prototype,"prefix",void 0),Ce([X({type:String})],Ne.prototype,"suffix",void 0),Ce([X({type:String})],Ne.prototype,"textAlign",void 0),Ce([X({type:String})],Ne.prototype,"value",void 0),Ce([X({type:Boolean})],Ne.prototype,"disabled",void 0),Ce([X({type:Boolean})],Ne.prototype,"requiredIcon",void 0),Ce([X({type:Boolean})],Ne.prototype,"visible",void 0),window.customElements.get("kuc-text")||window.customElements.define("kuc-text",Ne);var $e=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};let De=class extends ne{constructor(e){super(),this.error="",this.label="",this.placeholder="",this.value="",this.disabled=!1,this.requiredIcon=!1,this.visible=!0,this._GUID=this._generateGUID(),e&&(this.className=void 0!==e.className?e.className:this.className,this.error=void 0!==e.error?e.error:this.error,this.id=void 0!==e.id?e.id:this.id,this.label=void 0!==e.label?e.label:this.label,this.placeholder=void 0!==e.placeholder?e.placeholder:this.placeholder,this.value=void 0!==e.value?e.value:this.value,this.disabled=void 0!==e.disabled?e.disabled:this.disabled,this.requiredIcon=void 0!==e.requiredIcon?e.requiredIcon:this.requiredIcon,this.visible=void 0!==e.visible?e.visible:this.visible)}_generateGUID(){return(new Date).getTime().toString(16)+Math.floor(4096*Math.random()).toString(16)}_updateVisible(){this.visible?this.removeAttribute("hidden"):this.setAttribute("hidden","")}_handleFocusTextarea(e){const t={value:this.value};this._dispatchCustomEvent("focus",t),this.requestUpdate()}_handleChangeTextarea(e){e.stopPropagation();const t=e.target,i={value:"",oldValue:this.value};this.value=t.value,i.value=this.value,this._dispatchCustomEvent("change",i),this.requestUpdate()}_dispatchCustomEvent(e,t){const i=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});return this.dispatchEvent(i)}createRenderRoot(){return this}render(){return this._updateVisible(),U`
      ${this._getStyleTagTemplate()}
      <label
        class="kuc-textarea__label"
        for="${this._GUID}-label"
        ?hidden="${!this.label}"
      >
        <span class="kuc-textarea__label__text">${this.label}</span
        ><!--
        --><span
          class="kuc-textarea__label__required-icon"
          ?hidden="${!this.requiredIcon}"
          >*</span
        >
      </label>
      <textarea
        id="${this._GUID}-label"
        class="kuc-textarea__textarea"
        placeholder="${this.placeholder}"
        .value=${this.value}
        aria-describedBy="${this._GUID}-error"
        aria-required=${this.requiredIcon}
        aria-invalid="${!this.error}"
        @change="${this._handleChangeTextarea}"
        @focus="${this._handleFocusTextarea}"
        ?disabled="${this.disabled}"
      ></textarea>
      <div
        class="kuc-textarea__error"
        id="${this._GUID}-error"
        role="alert"
        ?hidden="${!this.error}"
      >
        ${this.error}
      </div>
    `}_getStyleTagTemplate(){return U`
      <style>
        kuc-textarea,
        kuc-textarea *,
        :lang(en) kuc-textarea,
        :lang(en) kuc-textarea * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-textarea,
        :lang(ja) kuc-textarea * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-textarea,
        :lang(zh) kuc-textarea * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        kuc-textarea {
          font-size: 14px;
          color: #333333;
          display: inline-block;
          vertical-align: top;
        }
        kuc-textarea[hidden] {
          display: none;
        }
        .kuc-textarea__label {
          display: inline-block;
          margin-top: 4px;
          margin-bottom: 8px;
        }
        .kuc-textarea__label[hidden] {
          display: none;
        }
        .kuc-textarea__label__required-icon {
          font-size: 20px;
          vertical-align: -3px;
          color: #e74c3c;
          margin-left: 4px;
          line-height: 1;
        }
        .kuc-textarea__label__required-icon[hidden] {
          display: none;
        }
        .kuc-textarea__textarea {
          display: block;
          border: 1px solid #e3e7e8;
          box-sizing: border-box;
          font-size: 14px;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          min-width: 299px;
          min-height: 125px;
          padding: 8px;
          resize: both;
        }
        .kuc-textarea__textarea:focus {
          border-color: #3498db;
          box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
          border: 1px solid #3498db;
          background-color: #ffffff;
          color: #333333;
        }
        .kuc-textarea__textarea:disabled {
          color: #888888;
          background-color: #d4d7d7;
          box-shadow: none;
          cursor: not-allowed;
          resize: none;
        }
        .kuc-textarea__error {
          padding: 4px 18px;
          box-sizing: border-box;
          background-color: #e74c3c;
          color: #ffffff;
          margin-top: 8px;
        }
        .kuc-textarea__error[hidden] {
          display: none;
        }
      </style>
    `}};var Ie;$e([X({type:String})],De.prototype,"error",void 0),$e([X({type:String})],De.prototype,"label",void 0),$e([X({type:String})],De.prototype,"placeholder",void 0),$e([X({type:String})],De.prototype,"value",void 0),$e([X({type:Boolean})],De.prototype,"disabled",void 0),$e([X({type:Boolean})],De.prototype,"requiredIcon",void 0),$e([X({type:Boolean})],De.prototype,"visible",void 0),De=$e([(Ie="kuc-textarea",e=>"function"==typeof e?((e,t)=>(window.customElements.define(e,t),t))(Ie,e):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){window.customElements.define(e,t)}}})(Ie,e))],De),window.customElements.get("kuc-textarea")||window.customElements.define("kuc-textarea",De);const Me=document.getElementById("app"),Pe=new Ne({textAlign:"left"});Me.appendChild(Pe)}]);