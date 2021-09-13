import { BaseDateTimeCalendarFooter } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("base/datetime/calendar/footer", module).add("Base", () => {
  const root = document.createElement("div");
  const calendarFooter = new BaseDateTimeCalendarFooter();
  // calendarFooter.todayButtonText = "今日";
  // calendarFooter.noneButtonText = "選択を解除";
  calendarFooter.addEventListener("clickToday", event => {
    console.log([event.type, event]);
  });
  calendarFooter.addEventListener("clickNone", event => {
    console.log([event.type, event]);
  });
  root.appendChild(calendarFooter);
  return root;
});
