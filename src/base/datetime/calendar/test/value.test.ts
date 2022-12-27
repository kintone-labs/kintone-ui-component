import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { BaseDateTimeCalendar } from "../index";

describe("BaseDateTimeCalendar", () => {
  describe("value", () => {
    it("should be selected when updating value prop", async () => {
      const container = new BaseDateTimeCalendar();
      container.value = "2021-08-22";
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date--selected[aria-selected="true"]'
      ) as HTMLButtonElement;
      expect(selectedEl.getAttribute("data-date")).to.equal("2021-08-22");
    });

    it("should be first day when updating value prop with empty string", async () => {
      const container = new BaseDateTimeCalendar();
      container.value = "";
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date--selected[aria-selected="true"]'
      ) as HTMLButtonElement;
      expect(selectedEl.dataset.date?.slice(8)).to.equal("01");
    });
  });
});
