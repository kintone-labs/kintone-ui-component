import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/listbox",
  argTypes: {
    value: {
      name: "value",
      control: {
        type: "select",
        options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      },
    },
    items: {
      name: "items",
      control: {
        type: "object",
        options: [],
      },
    },
  },
  parameters: {
    actions: {
      handles: ["kuc:listbox-click"],
    },
  },
};

const Template = ({ value, items }) => {
  const _handleClickBtn = () => {
    const _listBoxEl = document.querySelector("kuc-base-datetime-listbox");
    _listBoxEl.hidden = !_listBoxEl.hidden;
  };

  const _handleKeydownBtn = (event) => {
    event.preventDefault();
    const _listBoxEl = document.querySelector("kuc-base-datetime-listbox");
    switch (event.key) {
      case "ArrowUp": {
        _listBoxEl._highlightPrevItem();
        break;
      }
      case "ArrowDown": {
        _listBoxEl._highlightNextItem();
        break;
      }
      case "Home": {
        _listBoxEl._highlightFirstItem();
        break;
      }
      case "End": {
        _listBoxEl._highlightLastItem();
        break;
      }
      case "Enter": {
        _changeValue(_listBoxEl.getHighlightItemEl().value);
        break;
      }
      default:
        break;
    }
  };

  const _handleClickCalendarListBox = (event) => {
    _changeValue(event.detail.value);
  };

  const _changeValue = (newValue) => {
    const _listBoxEl = document.querySelector("kuc-base-datetime-listbox");
    _listBoxEl.setAttribute("value", newValue);

    const _btn = document.querySelector("button");
    _btn.textContent = newValue;
  };

  return html`
    <button @click="${_handleClickBtn}" @keydown="${_handleKeydownBtn}">
      ${value}
    </button>
    <kuc-base-datetime-listbox
      .items="${items}"
      .value="${value}"
      @kuc:listbox-click="${_handleClickCalendarListBox}"
    >
    </kuc-base-datetime-listbox>
  `;
};

export const base = Template.bind({});
base.args = {
  value: "9",
  items: [
    { value: "0", label: "JANUARY" },
    { value: "1", label: "FEBRUARY" },
    { value: "2", label: "MARCH" },
    { value: "3", label: "APRIL" },
    { value: "4", label: "MAY" },
    { value: "5", label: "JUNE" },
    { value: "6", label: "JULY" },
    { value: "7", label: "AUGUST" },
    { value: "8", label: "SEPTEMBER" },
    { value: "9", label: "OCTOBER" },
    { value: "10", label: "NOVEMBER" },
    { value: "11", label: "DECEMBER" },
  ],
};
