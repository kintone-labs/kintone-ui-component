import "./components/menu.ts";
import "./components/presentation/header.ts";
import "./components/presentation/body.ts";
import "./components/presentation/footer.ts";
import { Calendar } from "./calendar.ts";
import { Datetime, Date as KucDate, Time as KucTime } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("Datetime", module)
  .add("menu", () => {
    const menu = document.createElement("kuc-menu");
    return menu;
  })
  .add("calendar header", () => {
    const calendarheader = document.createElement(
      "kuc-calendar-presentation-header"
    );
    return calendarheader;
  })
  .add("calendar body", () => {
    const calendarbody = document.createElement(
      "kuc-calendar-presentation-body"
    );
    return calendarbody;
  })
  .add("calendar footer", () => {
    const calendarFooter = document.createElement(
      "kuc-calendar-presentation-body"
    );
    return calendarFooter;
  })
  .add("calendar", () => {
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
