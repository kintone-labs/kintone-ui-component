import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{n as r}from"./button-BMDb08Tn.js";var i,a,o,s,c,l;e((()=>{n(),r(),i={title:`desktop/button`,argTypes:{className:{name:`className`},content:{name:`content`},disabled:{name:`disabled`},id:{name:`id`},type:{name:`type`,options:[`normal`,`alert`,`submit`],control:{type:`select`}},text:{name:`text`},visible:{name:`visible`}},parameters:{actions:{handles:[`click`]}}},a=e=>t`
    <kuc-button
      .className="${e.className}"
      .content="${e.content}"
      .disabled="${e.disabled}"
      .id="${e.id}"
      .type="${e.type}"
      .text="${e.text}"
      .visible="${e.visible}"
      @click="${e=>{console.log(e)}}"
    ></kuc-button>
  `,o=a.bind({}),o.args={className:`sample-class`,content:`Button`,disabled:!1,id:`sample-id`,type:`normal`,text:`Button`,visible:!0},s=()=>{let e=document.createElement(`span`),t=document.createElement(`span`);t.innerText=`Search`,t.style.display=`inline-block`,e.innerHTML=`<svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>`,e.style.display=`inline-block`,e.style.verticalAlign=`middle`;let n=document.createElement(`div`);return n.appendChild(e),n.appendChild(t),n},c=a.bind({}),c.args={className:`sample-class`,content:s(),disabled:!1,id:`sample-id`,type:`normal`,text:`Button`,visible:!0},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const handleClick = event => {
    console.log(event);
  };
  return html\`
    <kuc-button
      .className="\${args.className}"
      .content="\${args.content}"
      .disabled="\${args.disabled}"
      .id="\${args.id}"
      .type="\${args.type}"
      .text="\${args.text}"
      .visible="\${args.visible}"
      @click="\${handleClick}"
    ></kuc-button>
  \`;
}`,...o.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const handleClick = event => {
    console.log(event);
  };
  return html\`
    <kuc-button
      .className="\${args.className}"
      .content="\${args.content}"
      .disabled="\${args.disabled}"
      .id="\${args.id}"
      .type="\${args.type}"
      .text="\${args.text}"
      .visible="\${args.visible}"
      @click="\${handleClick}"
    ></kuc-button>
  \`;
}`,...c.parameters?.docs?.source}}},l=[`Base`,`Base1`]}))();export{o as Base,c as Base1,l as __namedExportsOrder,i as default};