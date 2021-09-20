import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("month", () => {
    it("should be 1 when not assigning", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);
      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__month"
      ) as HTMLSelectElement;

      expect(monthSelectEl.selectedIndex).to.equal(0);
      expect(monthSelectEl.options.length).to.equal(12);
    });

    it("should be 5 when assigning 5 by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "5");
      const el = await fixture(container);
      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__month"
      ) as HTMLSelectElement;

      expect(monthSelectEl.selectedIndex).to.equal(4);
    });
  });
});
