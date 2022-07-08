import { html } from "lit-html";

import "./index.ts";

export default {
  title: "base/datetime/calendar/header/dropdown/month",
  argTypes: {
    language: {
      name: "language",
      options: ["en", "ja", "zh"],
      control: { type: "select" },
    },
  },
  parameters: {
    actions: {
      handles: ["kuc:month-dropdown-change"],
    },
  },
};

const Template = ({ month, language }) =>
  html`
    <kuc-base-datetime-header-month
      .month="${month}"
      .language="${language}"
    ></kuc-base-datetime-header-month>
  `;

export const Base = Template.bind({});
Base.args = {
  month: 1,
  language: "en",
};
