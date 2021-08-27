import { CalendarPresentationHeader } from "./components/presentation/header.ts";
import { CalendarPresentationBody } from "./components/presentation/body.ts";
import { CalendarPresentationFooter } from "./components/presentation/footer.ts";
import { Calendar } from "./calendar.ts";
import { Datetime } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("Datetime", module)
  .add("calendar header", () => {
    const root = document.createElement("div");
    const calendarheader = new CalendarPresentationHeader();
    root.appendChild(calendarheader);
    return root;
  })
  .add("calendar body", () => {
    const root = document.createElement("div");
    const calendarbody = new CalendarPresentationBody();
    root.appendChild(calendarbody);
    return root;
  })
  .add("calendar footer", () => {
    const root = document.createElement("div");
    const calendarFooter = new CalendarPresentationFooter();
    root.appendChild(calendarFooter);
    return root;
  })
  .add("calendar", () => {
    const root = document.createElement("div");
    const calendar = new Calendar();
    root.appendChild(calendar);
    return root;
  })
  .add("datetime", () => {
    const root = document.createElement("div");
    const datetime = new Datetime();
    root.appendChild(datetime);
    return root;
  });
