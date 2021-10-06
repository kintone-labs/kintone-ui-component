import { html } from "lit-html";

import "./index.ts";

export default {
  title: "base/datetime/calendar/header/dropdown/month",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["kuc:month-dropdown-change"],
    },
  },
};

const Template = ({ month, language }) =>
  html`
    <kuc-base-datetime-month-dropdown
      .month="${month}"
      .year="${language}"
    ></kuc-base-datetime-month-dropdown>
  `;

export const Base = Template.bind({});
Base.args = {
  month: 1,
  language: "en",
};
