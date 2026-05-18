import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{S as r,v as i}from"./utils-BITFIerI.js";import{t as a}from"./listbox-BU_zLM_V.js";var o,s,c,l,u,d;e((()=>{a(),n(),i(),o={title:`base/datetime/listbox`,argTypes:{value:{name:`value`,options:[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`],control:{type:`select`}},items:{name:`items`,control:{type:`object`}}},parameters:{actions:{handles:[`kuc:listbox-click`]}}},s=!1,c=360,l=({value:e,items:n})=>{let i=()=>{let e=document.querySelector(`kuc-base-datetime-listbox`);s=!s,s?e.showPopover():e.hidePopover();let t=document.querySelector(`.trigger-button`),n=e?.querySelector(`.kuc-base-datetime-listbox__listbox`);r({anchorEl:t,popoverEl:n,popoverHeight:c})},a=e=>{e.preventDefault();let t=document.querySelector(`kuc-base-datetime-listbox`);switch(e.key){case`ArrowUp`:t._highlightPrevItem();break;case`ArrowDown`:t._highlightNextItem();break;case`Home`:t._highlightFirstItem();break;case`End`:t._highlightLastItem();break;case`Enter`:l(t.getHighlightItemEl().value);break;default:break}},o=e=>{l(e.detail.value)},l=e=>{document.querySelector(`kuc-base-datetime-listbox`).setAttribute(`value`,e);let t=document.querySelector(`button`);t.textContent=e};return t`
    <button
      @click="${i}"
      @keydown="${a}"
      class="trigger-button"
    >
      ${e}
    </button>
    <kuc-base-datetime-listbox
      .items="${n}"
      .value="${e}"
      @kuc:listbox-click="${o}"
    >
    </kuc-base-datetime-listbox>
  `},u=l.bind({}),u.args={value:`9`,items:[{value:`0`,label:`JANUARY`},{value:`1`,label:`FEBRUARY`},{value:`2`,label:`MARCH`},{value:`3`,label:`APRIL`},{value:`4`,label:`MAY`},{value:`5`,label:`JUNE`},{value:`6`,label:`JULY`},{value:`7`,label:`AUGUST`},{value:`8`,label:`SEPTEMBER`},{value:`9`,label:`OCTOBER`},{value:`10`,label:`NOVEMBER`},{value:`11`,label:`DECEMBER`}]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  value,
  items
}) => {
  const _handleClickBtn = () => {
    const _listBoxEl = document.querySelector("kuc-base-datetime-listbox");
    isOpen = !isOpen;
    isOpen ? _listBoxEl.showPopover() : _listBoxEl.hidePopover();
    const _btn = document.querySelector(".trigger-button");
    const _listBoxUl = _listBoxEl?.querySelector(".kuc-base-datetime-listbox__listbox");
    setListBoxPosition({
      anchorEl: _btn,
      popoverEl: _listBoxUl,
      popoverHeight: LISTBOX_MAX_HEIGHT
    });
  };
  const _handleKeydownBtn = event => {
    event.preventDefault();
    const _listBoxEl = document.querySelector("kuc-base-datetime-listbox");
    switch (event.key) {
      case "ArrowUp":
        {
          _listBoxEl._highlightPrevItem();
          break;
        }
      case "ArrowDown":
        {
          _listBoxEl._highlightNextItem();
          break;
        }
      case "Home":
        {
          _listBoxEl._highlightFirstItem();
          break;
        }
      case "End":
        {
          _listBoxEl._highlightLastItem();
          break;
        }
      case "Enter":
        {
          _changeValue(_listBoxEl.getHighlightItemEl().value);
          break;
        }
      default:
        break;
    }
  };
  const _handleClickCalendarListBox = event => {
    _changeValue(event.detail.value);
  };
  const _changeValue = newValue => {
    const _listBoxEl = document.querySelector("kuc-base-datetime-listbox");
    _listBoxEl.setAttribute("value", newValue);
    const _btn = document.querySelector("button");
    _btn.textContent = newValue;
  };
  return html\`
    <button
      @click="\${_handleClickBtn}"
      @keydown="\${_handleKeydownBtn}"
      class="trigger-button"
    >
      \${value}
    </button>
    <kuc-base-datetime-listbox
      .items="\${items}"
      .value="\${value}"
      @kuc:listbox-click="\${_handleClickCalendarListBox}"
    >
    </kuc-base-datetime-listbox>
  \`;
}`,...u.parameters?.docs?.source}}},d=[`base`]}))();export{d as __namedExportsOrder,u as base,o as default};