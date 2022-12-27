import { expect, fixture } from "@open-wc/testing";

import { BaseDateTimeCalendarBody } from "../index";

describe("BaseDateTimeCalendarBody", () => {
  describe("month", () => {
    it("The day 22 is selected when assigning month prop is invalid but value is valid", async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = -1;
      container.year = 2021;
      container.value = "2021-08-22";
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date--selected[aria-selected="true"]'
      ) as HTMLButtonElement;
      expect(selectedEl.innerText).to.equal("22");
    });

    it("The day is selected when assigning month prop is valid", async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = 8;
      container.year = 2021;
      container.value = "2021-08-22";
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date--selected[aria-selected="true"]'
      ) as HTMLButtonElement;
      expect(selectedEl.getAttribute("data-date")).to.equal("2021-08-22");
    });
  });
});
