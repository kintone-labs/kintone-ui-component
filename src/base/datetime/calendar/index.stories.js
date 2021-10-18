import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/calendar",
  argsTypes: {
    language: {
      name: "language",
      options: ["en", "ja", "zh"],
      control: { type: "select" }
    },
    value: {
      name: "value",
      control: { type: "text" }
    }
  },
  parameters: {
    actions: {
      handles: [
        "kuc:calendar-footer-click-today",
        "kuc:calendar-footer-click-none"
      ]
    }
  }
};

const Template = ({ language, value }) => {
  return html`
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
    <input type="text" value="${value}" />
    <kuc-base-datetime-calendar
      .language="${language}"
      .value="${value}"
    ></kuc-base-datetime-calendar>
  `;
};

export const base = Template.bind({});
base.args = {
  language: "en",
  value: "2021-08-22"
};
