import "./index.ts";
import { storiesOf } from "@storybook/web-components";

function generateSelectEl(items) {
  const selectEl = document.createElement("select");
  items.forEach(item => {
    const optionEl = document.createElement("option");
    optionEl.value = item.value;
    optionEl.textContent = item.label;
    selectEl.appendChild(optionEl);
  });

  selectEl.value = items[0].value;

  return selectEl;
}

function createMonthSelectEl() {
  return generateSelectEl([
    { value: "0", label: "JANUARY" },
    { value: "1", label: "FEBRUARY" },
    { value: "2", label: "MARCH" },
    { value: "3", label: "APRIL" },
    { value: "4", label: "MAY" },
    { value: "5", label: "JUNE" },
    { value: "6", label: "JULY" },
    { value: "7", label: "AUGUST" },
    { value: "8", label: "SEPTEMBER" },
    { value: "9", label: "OCTOBER" },
    { value: "10", label: "NOVEMBER" },
    { value: "11", label: "DECEMBER}" }
  ]);
}

function createYearSelectEl() {
  return generateSelectEl([
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" }
  ]);
}

storiesOf("base/datetime/calendar/body", module).add("Base", () => {
  const rootEl = document.createElement("div");
  const actionWrapEl = document.createElement("div");
  rootEl.appendChild(actionWrapEl);

  const monthSelectEl = createMonthSelectEl();
  actionWrapEl.appendChild(monthSelectEl);

  const yearSelectEl = createYearSelectEl();
  actionWrapEl.appendChild(yearSelectEl);

  const bodyWrapEl = document.createElement("div");
  rootEl.appendChild(bodyWrapEl);

  const calendarBodyEl = document.createElement(
    "kuc-base-datetime-calendar-body"
  );
  bodyWrapEl.appendChild(calendarBodyEl);

  return rootEl;
});
