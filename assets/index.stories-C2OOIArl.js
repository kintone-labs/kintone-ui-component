import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{t as r}from"./body-DCvj0iMC.js";var i,a,o,s;e((()=>{r(),n(),i={title:`base/datetime/calendar/body`,argTypes:{month:{name:`month`,options:[1,2,3,4,5,6,7,8,9,10,11,12],control:{type:`select`}},year:{name:`year`,options:[2019,2020,2021,2022,2023],control:{type:`select`}},language:{name:`language`,options:[`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}},value:{name:`value`,control:{type:`text`}}},parameters:{actions:{handles:[`kuc:calendar-body-click-date`,`kuc:calendar-body-change-date`]}}},a=({month:e,year:n,language:r,value:i})=>t`
    <input typ="text" value="${i}" />
    <kuc-base-datetime-calendar-body
      .month="${e}"
      .year="${n}"
      .language="${r}"
      .value="${i}"
      @kuc:calendar-body-click-date="${e=>{let t=e.detail.value,n=document.querySelector(`input`);n.value=t}}"
      @kuc:calendar-body-change-date="${e=>{let t=e.detail.value,n=document.querySelector(`input`);n.value=t}}"
    >
    </kuc-base-datetime-calendar-body>
  `,o=a.bind({}),o.args={month:7,year:2021,language:`en`,value:`2021-08-22`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  month,
  year,
  language,
  value
}) => {
  const _handleChangeDate = event => {
    const newValue = event.detail.value;
    const _btn = document.querySelector("input");
    _btn.value = newValue;
  };
  const _handleClickDate = event => {
    const newValue = event.detail.value;
    const _btn = document.querySelector("input");
    _btn.value = newValue;
  };
  return html\`
    <input typ="text" value="\${value}" />
    <kuc-base-datetime-calendar-body
      .month="\${month}"
      .year="\${year}"
      .language="\${language}"
      .value="\${value}"
      @kuc:calendar-body-click-date="\${_handleClickDate}"
      @kuc:calendar-body-change-date="\${_handleChangeDate}"
    >
    </kuc-base-datetime-calendar-body>
  \`;
}`,...o.parameters?.docs?.source}}},s=[`base`]}))();export{s as __namedExportsOrder,o as base,i as default};