import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTimeCalendar } from "../index";

// const year = 2020;
// const month = 1;

describe("BaseDateTimeCalendar", () => {
  describe("value", () => {
    it("should be selected when updating value prop", async () => {
      const container = new BaseDateTimeCalendar();
      container.value = "2021-08-22";
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__date__button[aria-selected=true]"
      ) as HTMLButtonElement;
      expect(selectedEl.getAttribute("data-date")).to.equal("2021-08-22");
    });

    it("should be null when updating value prop with empty string", async () => {
      const container = new BaseDateTimeCalendar();
      container.value = "";
      const el = await fixture(container);
      const selectedEl = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__date__button[aria-selected=true]"
      ) as HTMLButtonElement;
      expect(selectedEl).to.equal(null);
    });
  });
});
