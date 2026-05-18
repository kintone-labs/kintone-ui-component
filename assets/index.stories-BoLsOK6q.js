import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{t as r}from"./date-qgwo-BNl.js";var i,a,o,s;e((()=>{r(),n(),i={title:`base/datetime/date`,argTypes:{disabled:{name:`disabled`,options:[!0,!1],control:{type:`select`}},language:{name:`language`,options:[`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}},value:{name:`value`,control:{type:`text`}},inputId:{name:`inputId`,control:{type:`text`}}},parameters:{actions:{handles:[`kuc:base-date-change`]}}},a=({disabled:e,language:n,value:r,inputId:i})=>t`
    <kuc-base-date
      .disabled="${e}"
      .language="${n}"
      .value="${r}"
      .inputId="${i}"
      @kuc:base-date-change="${e=>{console.log(e)}}"
    ></kuc-base-date>
  `,o=a.bind({}),o.args={disabled:!1,language:`en`,value:`2021-10-20`,inputId:`e7ef328d-2841-42e5-aca6`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  disabled,
  language,
  value,
  inputId
}) => {
  const handleDateChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-base-date
      .disabled="\${disabled}"
      .language="\${language}"
      .value="\${value}"
      .inputId="\${inputId}"
      @kuc:base-date-change="\${handleDateChange}"
    ></kuc-base-date>
  \`;
}`,...o.parameters?.docs?.source}}},s=[`base`]}))();export{s as __namedExportsOrder,o as base,i as default};