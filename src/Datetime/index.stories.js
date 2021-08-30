import "./components/menu.ts";
import "./components/calendar/header.ts";
import "./components/calendar/body.ts";
import "./components/calendar/footer.ts";
import { Calendar } from "./components/calendar/calendar.ts";
import { Datetime, Date as KucDate, Time as KucTime } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("Datetime", module)
  .add("components/menu", () => {
    const container = document.createElement("div");

    const menu1 = document.createElement("kuc-menu");
    container.appendChild(menu1);

    const text = document.createElement("input");
    text.id = "text-input";
    const menu2 = document.createElement("kuc-menu");
    menu2.for = "text-input";
    menu2.items = ["00:00", "06:00", "12:00", "18:00", "24:00"];
    container.appendChild(text);
    container.appendChild(menu2);

    const button = document.createElement("input");
    button.type = "button";
    button.id = "button";
    button.value = "JANUARY";
    const menu3 = document.createElement("kuc-menu");
    menu3.for = "button";
    menu3.items = ["JANUARY", "FEBRUARY", "MARCH"];
    container.appendChild(button);
    container.appendChild(menu3);

    return container;
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
