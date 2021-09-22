import { html } from "lit";
import { BaseDateTimeCalendarFooter } from "./index.ts";

export default {
  title: "base/datetime/calendar/footer",
  argTypes: {
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

const Template = ({ todayButtonText, noneButtonText }) =>
  html`
    <kuc-base-datetime-calendar-footer
      .todayButtonText=${todayButtonText}
      .noneButtonText=${noneButtonText}
    ></kuc-base-datetime-calendar-footer>
  `;

export const base = Template.bind({});
base.args = {
  todayButtonText: "Today",
  noneButtonText: "None"
};
