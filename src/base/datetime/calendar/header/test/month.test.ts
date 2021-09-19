import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarHeader } from "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("month", () => {
    it("should be 1 when not assigning on constructor", async () => {
      const container = new BaseDateTimeCalendarHeader();
      const el = await fixture(container);
      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__month"
      ) as HTMLSelectElement;

      expect(monthSelectEl.selectedIndex).to.equal(0);
      expect(monthSelectEl.options.length).to.equal(12);
    });

    it("should be 3 when assigning 3 on constructor", async () => {
      const month = 3;
      const container = new BaseDateTimeCalendarHeader({ month });
      const el = await fixture(container);
      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__month"
      ) as HTMLSelectElement;

      expect(monthSelectEl.selectedIndex).to.equal(month - 1);
    });

    it("should be 5 when assigning 5 by setter", async () => {
      const month = 5;
      const container = new BaseDateTimeCalendarHeader({
        month: 3
      });
      container.month = month;
      const el = await fixture(container);
      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__month"
      ) as HTMLSelectElement;

      expect(monthSelectEl.selectedIndex).to.equal(month - 1);
    });
  });
});
