import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{t as r}from"./mobile-calendar-BjS2lKR3.js";var i,a,o,s;e((()=>{r(),n(),i={title:`base/datetime/mobile-calendar`,argTypes:{language:{name:`language`,options:[`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}},value:{name:`value`,control:{type:`text`}}},parameters:{actions:{handles:[`kuc:mobile-calendar-body-click-date`,`kuc:mobile-calendar-footer-click-none`,`kuc:mobile-calendar-footer-click-today`,`kuc:mobile-calendar-footer-click-close`]}},globals:{viewport:{value:`iPhone11Pro`,isRotated:!1}}},a=({language:e,value:n})=>{let r=e=>{let t=document.querySelector(`input`);t.value=e},i=e=>{let t=document.querySelector(`kuc-base-mobile-datetime-calendar`);t.hidden=!1,t.value=document.querySelector(`input`).value},a=e=>{let t=document.querySelector(`kuc-base-mobile-datetime-calendar`);t.hidden=!0};return t`
    <style>
      #root-inner {
        position: relative;
      }
      kuc-base-mobile-datetime-calendar {
        position: absolute;
        top: 24px;
        left: 0px;
      }
      input:focus {
        outline: none;
      }
    </style>
    <input
      type="text"
      value="${n}"
      readonly
      @focus="${e=>{i()}}"
    />
    <kuc-base-mobile-datetime-calendar
      .language="${e}"
      .value="${n}"
      @kuc:mobile-calendar-body-click-date="${e=>{r(e.detail.value),a()}}"
      @kuc:mobile-calendar-footer-click-none="${e=>{r(``),a()}}"
      @kuc:mobile-calendar-footer-click-today="${e=>{let t=new Date;r(`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`),a()}}"
      @kuc:mobile-calendar-footer-click-close="${e=>{a()}}"
    ></kuc-base-mobile-datetime-calendar>
  `},o=a.bind({}),o.args={language:`en`,value:`2021-09-22`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  language,
  value
}) => {
  const _setValue = val => {
    const _inputEl = document.querySelector("input");
    _inputEl.value = val;
  };
  const _showCalendar = _ => {
    const _calendarEl = document.querySelector("kuc-base-mobile-datetime-calendar");
    _calendarEl.hidden = false;
    const _inputEl = document.querySelector("input");
    _calendarEl.value = _inputEl.value;
  };
  const _hideCalendar = _ => {
    const _calendarEl = document.querySelector("kuc-base-mobile-datetime-calendar");
    _calendarEl.hidden = true;
  };
  const _handleFocusInput = _ => {
    _showCalendar();
  };
  const _handleClickMobileCalendarBodyClickDate = event => {
    _setValue(event.detail.value);
    _hideCalendar();
  };
  const _handleClickMobileCalendarFooterButtonNone = _ => {
    _setValue("");
    _hideCalendar();
  };
  const _handleClickMobileCalendarFooterButtonToday = _ => {
    const date = new Date();
    _setValue(\`\${date.getFullYear()}-\${date.getMonth() + 1}-\${date.getDate()}\`);
    _hideCalendar();
  };
  const _handleClickMobileCalendarFooterButtonClose = _ => {
    _hideCalendar();
  };
  return html\`
    <style>
      #root-inner {
        position: relative;
      }
      kuc-base-mobile-datetime-calendar {
        position: absolute;
        top: 24px;
        left: 0px;
      }
      input:focus {
        outline: none;
      }
    </style>
    <input
      type="text"
      value="\${value}"
      readonly
      @focus="\${_handleFocusInput}"
    />
    <kuc-base-mobile-datetime-calendar
      .language="\${language}"
      .value="\${value}"
      @kuc:mobile-calendar-body-click-date="\${_handleClickMobileCalendarBodyClickDate}"
      @kuc:mobile-calendar-footer-click-none="\${_handleClickMobileCalendarFooterButtonNone}"
      @kuc:mobile-calendar-footer-click-today="\${_handleClickMobileCalendarFooterButtonToday}"
      @kuc:mobile-calendar-footer-click-close="\${_handleClickMobileCalendarFooterButtonClose}"
    ></kuc-base-mobile-datetime-calendar>
  \`;
}`,...o.parameters?.docs?.source}}},s=[`base`]}))();export{s as __namedExportsOrder,o as base,i as default};