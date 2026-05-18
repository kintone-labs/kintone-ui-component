import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{t as r}from"./time-DxVz01-Q.js";var i,a,o,s;e((()=>{n(),r(),i={title:`base/datetime/time`,argTypes:{language:{name:`language`,options:[`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}}},parameters:{actions:{handles:[`kuc:base-time-change`]}}},a=({disabled:e,hour12:n,value:r,timeStep:i,min:a,max:o,language:s})=>t`
  <kuc-base-time
    .disabled="${e}"
    .hour12="${n}"
    .value="${r}"
    .timeStep="${i}"
    .min="${a}"
    .max="${o}"
    .language="${s}"
  ></kuc-base-time>
`,o=a.bind({}),o.args={disabled:!1,hour12:!0,value:`08:15`,timeStep:30,min:`00:00`,max:`23:59`,language:`en`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  disabled,
  hour12,
  value,
  timeStep,
  min,
  max,
  language
}) => html\`
  <kuc-base-time
    .disabled="\${disabled}"
    .hour12="\${hour12}"
    .value="\${value}"
    .timeStep="\${timeStep}"
    .min="\${min}"
    .max="\${max}"
    .language="\${language}"
  ></kuc-base-time>
\``,...o.parameters?.docs?.source}}},s=[`Base`]}))();export{o as Base,s as __namedExportsOrder,i as default};