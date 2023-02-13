import { expect, fixture } from "@open-wc/testing";

import { padStart } from "../../../utils";
import "../index";

describe("BaseMobileDateTimeCalendarBody", () => {
  describe("value", () => {
    it("The day is not selected when assigning value prop is invalid", async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      container.setAttribute("month", "8");
      container.setAttribute("year", "2022");
      container.setAttribute("value", "2022-33");

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__date--selected"
      ) as HTMLButtonElement;
      expect(selectedEl).to.equal(null);
    });

    it("The day is selected when assigning value prop is valid", async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      const currentMonth = new Date().getMonth() + 1;
      const currentDay = new Date().getDate();
      const currentYear = new Date().getFullYear();
      const todayString = `${currentYear}-${padStart(currentMonth)}-${padStart(
        currentDay
      )}`;
      container.setAttribute("month", currentMonth.toString());
      container.setAttribute("year", currentYear.toString());
      container.setAttribute("value", todayString);
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__date--selected"
      ) as HTMLButtonElement;
      expect(selectedEl.getAttribute("data-date")).to.equal(todayString);
    });
  });
});
