import { BaseDateTimeCalendarFooter } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("base/datetime/calendar/footer", module).add("Base", () => {
  const root = document.createElement("div");
  const calendarFooter = new BaseDateTimeCalendarFooter();
  // calendarFooter.todayButtonText = "今日";
  // calendarFooter.noneButtonText = "選択を解除";
  calendarFooter.addEventListener("kuc:calendar-footer-click-today", event => {
    console.log([event.type, event]);
  });
  calendarFooter.addEventListener("kuc:calendar-footer-click-none", event => {
    console.log([event.type, event]);
  });
  root.appendChild(calendarFooter);
  return root;
});
