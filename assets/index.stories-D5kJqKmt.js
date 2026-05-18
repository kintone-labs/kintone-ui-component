import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{t as r}from"./header-Dc7kvE2Y.js";var i,a,o,s;e((()=>{n(),r(),i={title:`base/datetime/calendar/header`,argTypes:{language:{name:`language`,options:[`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}}},parameters:{actions:{handles:[`kuc:calendar-header-change`]}}},a=({language:e,month:n,year:r})=>t`
  <kuc-base-datetime-calendar-header
    .language="${e}"
    .month="${n}"
    .year="${r}"
  ></kuc-base-datetime-calendar-header>
`,o=a.bind({}),o.args={language:`en`,month:9,year:2021},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  language,
  month,
  year
}) => html\`
  <kuc-base-datetime-calendar-header
    .language="\${language}"
    .month="\${month}"
    .year="\${year}"
  ></kuc-base-datetime-calendar-header>
\``,...o.parameters?.docs?.source}}},s=[`Base`]}))();export{o as Base,s as __namedExportsOrder,i as default};