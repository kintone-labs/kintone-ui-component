import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/mobile-datetime/calendar/footer",
  argTypes: {
    language: {
      name: "language",
      options: ["en", "ja", "zh"],
      control: { type: "select" }
    }
  },
  parameters: {
    actions: {
      handles: [
        "kuc:mobile-calendar-footer-click-today",
        "kuc:mobile-calendar-footer-click-none",
        "kuc:mobile-calendar-footer-click-close"
      ]
    }
  }
};

const Template = ({ language }) => {
  return html`
    <kuc-base-mobile-datetime-calendar-footer
      .language="${language}"
    ></kuc-base-mobile-datetime-calendar-footer>
  `;
};

export const base = Template.bind({});
base.args = {
  language: "en"
};
