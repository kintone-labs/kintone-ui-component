import { BaseDateTimeCalendarHeader } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("base/datetime/calendar/header", module)
  .add("Base EN", () => {
    const root = document.createElement("div");

    const calendarHeaderEN = new BaseDateTimeCalendarHeader({ language: "en" });
    calendarHeaderEN.addEventListener(
      "kuc:calendar-header-click-previous-month",
      event => {
        console.log([event.type, event]);
      }
    );
    calendarHeaderEN.addEventListener(
      "kuc:calendar-header-click-next-month",
      event => {
        console.log([event.type, event]);
      }
    );
    root.appendChild(calendarHeaderEN);
    return root;
  })
  .add("Base ZH", () => {
    const root = document.createElement("div");

    const calendarHeaderZH = new BaseDateTimeCalendarHeader({
      language: "zh",
      month: 10
    });
    calendarHeaderZH.addEventListener(
      "kuc:calendar-header-click-previous-month",
      event => {
        console.log([event.type, event]);
      }
    );
    calendarHeaderZH.addEventListener(
      "kuc:calendar-header-click-next-month",
      event => {
        console.log([event.type, event]);
      }
    );
    root.appendChild(calendarHeaderZH);
    return root;
  })
  .add("Base JA", () => {
    const root = document.createElement("div");

    const calendarHeaderJA = new BaseDateTimeCalendarHeader({
      language: "ja",
      month: 9,
      year: 2022
    });
    calendarHeaderJA.addEventListener(
      "kuc:calendar-header-click-previous-month",
      event => {
        console.log([event.type, event]);
      }
    );
    calendarHeaderJA.addEventListener(
      "kuc:calendar-header-click-next-month",
      event => {
        console.log([event.type, event]);
      }
    );
    root.appendChild(calendarHeaderJA);
    return root;
  });
