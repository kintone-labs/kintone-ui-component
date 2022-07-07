import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/datetime/calendar/footer",
  argTypes: {
    language: {
      name: "language",
      options: ["en", "ja", "zh"],
      control: { type: "select" },
    },
  },
  parameters: {
    actions: {
      handles: [
        "kuc:calendar-footer-click-today",
        "kuc:calendar-footer-click-none",
      ],
    },
  },
};

const Template = ({ language }) => {
  return html`
    <kuc-base-datetime-calendar-footer
      .language="${language}"
    ></kuc-base-datetime-calendar-footer>
  `;
};

export const base = Template.bind({});
base.args = {
  language: "en",
};
