import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarBody } from "../index";

describe("BaseDateTimeCalendarBody", () => {
  describe("month", () => {
    it("The day is not selected when assigning month prop is invalid", async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = -1;
      container.year = 2021;
      container.value = "2021-08-22";
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      ) as HTMLButtonElement;
      expect(selectedEl).to.equal(null);
    });

    it("The day is selected when assigning month prop is valid", async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = 7;
      container.year = 2021;
      container.value = "2021-08-22";
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      ) as HTMLButtonElement;
      expect(selectedEl.getAttribute("data-date")).to.equal("2021-08-22");
    });
  });
});
