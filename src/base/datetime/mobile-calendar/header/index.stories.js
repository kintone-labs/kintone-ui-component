import { html } from "lit-html";

import "./index.ts";

export default {
  title: "base/datetime/mobile-calendar/header",
  argTypes: {
    language: {
      name: "language",
      options: ["en", "ja", "zh"],
      control: { type: "select" },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
    actions: {
      handles: ["kuc:mobile-calendar-header-change"],
    },
  },
};

const Template = ({ language, month, year }) =>
  html`
    <kuc-base-mobile-datetime-calendar-header
      .language="${language}"
      .month="${month}"
      .year="${year}"
    ></kuc-base-mobile-datetime-calendar-header>
  `;

export const Base = Template.bind({});
Base.args = {
  language: "en",
  month: 9,
  year: 2021,
};
