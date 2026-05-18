import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{t as r}from"./calendar-sOoZkLZZ.js";var i,a,o,s;e((()=>{r(),n(),i={title:`base/datetime/calendar`,argTypes:{language:{name:`language`,options:[`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}},value:{name:`value`,control:{type:`text`}}},parameters:{actions:{handles:[`kuc:calendar-body-change-date`,`kuc:calendar-body-click-date`,`kuc:calendar-footer-click-none`,`kuc:calendar-footer-click-today`]}}},a=({language:e,value:n})=>{let r=e=>{let t=document.querySelector(`input`);t.value=e},i=e=>{let t=document.querySelector(`kuc-base-datetime-calendar`);t.hidden=!1,t.value=document.querySelector(`input`).value},a=e=>{let t=document.querySelector(`kuc-base-datetime-calendar`);t.hidden=!0};return t`
    <style>
      #root-inner {
        position: relative;
      }
      kuc-base-datetime-calendar {
        position: absolute;
        top: 24px;
        left: 0px;
      }
    </style>
    <input type="text" value="${n}" @focus="${e=>{i()}}" />
    <kuc-base-datetime-calendar
      .language="${e}"
      .value="${n}"
      @kuc:calendar-body-change-date="${e=>{r(e.detail.value)}}"
      @kuc:calendar-body-click-date="${e=>{r(e.detail.value),a()}}"
      @kuc:calendar-footer-click-none="${e=>{r(``),a()}}"
      @kuc:calendar-footer-click-today="${e=>{let t=new Date;r(`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`),a()}}"
    ></kuc-base-datetime-calendar>
  `},o=a.bind({}),o.args={language:`en`,value:`2021-09-22`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  language,
  value
}) => {
  const _setValue = val => {
    const _inputEl = document.querySelector("input");
    _inputEl.value = val;
  };
  const _showCalendar = _ => {
    const _calendarEl = document.querySelector("kuc-base-datetime-calendar");
    _calendarEl.hidden = false;
    const _inputEl = document.querySelector("input");
    _calendarEl.value = _inputEl.value;
  };
  const _hideCalendar = _ => {
    const _calendarEl = document.querySelector("kuc-base-datetime-calendar");
    _calendarEl.hidden = true;
  };
  const _handleFocusInput = _ => {
    _showCalendar();
  };
  const _handleClickCalendarBodyChangeDate = event => {
    _setValue(event.detail.value);
  };
  const _handleClickCalendarBodyClickDate = event => {
    _setValue(event.detail.value);
    _hideCalendar();
  };
  const _handleClickCalendarFooterButtonNone = _ => {
    _setValue("");
    _hideCalendar();
  };
  const _handleClickCalendarFooterButtonToday = _ => {
    const date = new Date();
    _setValue(\`\${date.getFullYear()}-\${date.getMonth() + 1}-\${date.getDate()}\`);
    _hideCalendar();
  };
  return html\`
    <style>
      #root-inner {
        position: relative;
      }
      kuc-base-datetime-calendar {
        position: absolute;
        top: 24px;
        left: 0px;
      }
    </style>
    <input type="text" value="\${value}" @focus="\${_handleFocusInput}" />
    <kuc-base-datetime-calendar
      .language="\${language}"
      .value="\${value}"
      @kuc:calendar-body-change-date="\${_handleClickCalendarBodyChangeDate}"
      @kuc:calendar-body-click-date="\${_handleClickCalendarBodyClickDate}"
      @kuc:calendar-footer-click-none="\${_handleClickCalendarFooterButtonNone}"
      @kuc:calendar-footer-click-today="\${_handleClickCalendarFooterButtonToday}"
    ></kuc-base-datetime-calendar>
  \`;
}`,...o.parameters?.docs?.source}}},s=[`base`]}))();export{s as __namedExportsOrder,o as base,i as default};