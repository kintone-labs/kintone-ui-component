import { html } from "lit";
import "./index.ts";

export default {
  title: "base/datetime/mobile-calendar/footer",

  argTypes: {
    language: {
      name: "language",
      options: ["en", "ja", "zh", "zh-TW", "es"],
      control: { type: "select" },
    },
  },

  parameters: {
    actions: {
      handles: [
        "kuc:mobile-calendar-footer-click-today",
        "kuc:mobile-calendar-footer-click-none",
        "kuc:mobile-calendar-footer-click-close",
      ],
    }
  },

  globals: {
    viewport: {
      value: "iPhone11Pro",
      isRotated: false
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
  language: "en",
};
