import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/datetime/calendar/footer",
  argTypes: {
    language: {
      name: "language",
      options: ["en", "ja", "zh"],
      control: { type: "select" }
    },
    todayButtonText: {
      name: "todayButtonText",
      controls: { type: "text" }
    },
    noneButtonText: {
      name: "noneButtonText",
      controls: { type: "text" }
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

const Template = ({ language, todayButtonText, noneButtonText }) => {
  return html`
    <kuc-base-datetime-calendar-footer
      .language="${language}"
      .todayButtonText="${todayButtonText}"
      .noneButtonText="${noneButtonText}"
    ></kuc-base-datetime-calendar-footer>
  `;
};

export const base = Template.bind({});
base.args = {
  language: "en",
  todayButtonText: "Today",
  noneButtonText: "None"
};
