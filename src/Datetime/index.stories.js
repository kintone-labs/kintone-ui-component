import "./components/menu.ts";
import "./components/calendar/header.ts";
import "./components/calendar/body.ts";
import "./components/calendar/footer.ts";
import { Calendar } from "./components/calendar/calendar.ts";
import { Datetime, Date as KucDate, Time as KucTime } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("Datetime", module)
  .add("components/menu", () => {
    const menu = document.createElement("kuc-menu");
    return menu;
  })
  .add("components/calendar/header", () => {
    const calendarheader = document.createElement(
      "kuc-calendar-presentation-header"
    );
    calendarheader.addEventListener("change", event => {
      console.log(event.detail.value);
    });
    return calendarheader;
  })
  .add("components/calendar/body", () => {
    const calendarbody = document.createElement(
      "kuc-calendar-presentation-body"
    );
    return calendarbody;
  })
  .add("components/calendar/footer", () => {
    const calendarFooter = document.createElement(
      "kuc-calendar-presentation-footer"
    );
    return calendarFooter;
  })
  .add("components/calendar", () => {
    const root = document.createElement("div");
    const calendar = new Calendar();
    root.appendChild(calendar);
    return root;
  })
  .add("date", () => {
    const root = document.createElement("div");
    const date = new KucDate();
    root.appendChild(date);
    return root;
  })
  .add("time", () => {
    const root = document.createElement("div");
    const time = new KucTime();
    root.appendChild(time);
    return root;
  })
  .add("datetime", () => {
    const root = document.createElement("div");
    const datetime = new Datetime();
    root.appendChild(datetime);
    return root;
  });
