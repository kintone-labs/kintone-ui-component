import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/menu",
  argTypes: {
    selectedValue: {
      name: "selectedValue",
      control: {
        type: "select",
        options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
      }
    },
    items: {
      name: "items",
      control: {
        type: "object",
        options: []
      }
    }
  },
  parameters: {
    actions: {
      handles: ["kuc:calendar-menu-click"]
    }
  }
};

const Template = ({ selectedValue, items }) => {
  return html`
    <kuc-base-datetime-menu .items=${items} .selectedValue=${selectedValue}>
    </kuc-base-datetime-menu>
  `;
};

document.addEventListener("kuc:calendar-menu-click", event => {
  const root = document.getElementsByTagName("kuc-base-datetime-menu")[0];
  root.setAttribute("selectedValue", event.detail.value);
});

document.addEventListener("keydown", event => {
  const root = document.getElementsByTagName("kuc-base-datetime-menu")[0];
  switch (event.key) {
    case "Up":
    case "ArrowUp": {
      event.preventDefault();
      root.highlightPrevItem();
      break;
    }
    case "Down":
    case "ArrowDown": {
      event.preventDefault();
      root.highlightNextItem();
      break;
    }
    case "Enter": {
      event.preventDefault();
      root.setAttribute("selectedValue", root.getHighlightValue());
      break;
    }
    default:
      break;
  }
});

export const base = Template.bind({});
base.args = {
  selectedValue: "9",
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
    { value: "11", label: "DECEMBER" }
  ]
};
