import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{t as r}from"./mobile-date-B6ZVf6Hb.js";var i,a,o,s;e((()=>{r(),n(),i={title:`base/datetime/mobile-date`,argTypes:{language:{name:`language`,options:[`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}}},parameters:{actions:{handles:[`kuc:mobile-base-date-change`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},a=e=>t`
    <kuc-mobile-base-date
      .value="${e.value}"
      .language="${e.language}"
      .disabled="${e.disabled}"
      .required="${e.required}"
    ></kuc-mobile-base-date>
  `,o=a.bind({}),o.args={value:`2022-02-14`,disabled:!1,required:!1,language:`en`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return html\`
    <kuc-mobile-base-date
      .value="\${args.value}"
      .language="\${args.language}"
      .disabled="\${args.disabled}"
      .required="\${args.required}"
    ></kuc-mobile-base-date>
  \`;
}`,...o.parameters?.docs?.source}}},s=[`Base`]}))();export{o as Base,s as __namedExportsOrder,i as default};