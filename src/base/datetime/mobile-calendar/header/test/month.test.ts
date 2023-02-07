import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDateTimeCalendarHeader", () => {
  describe("year", () => {
    it("should be 1 when not assigning", async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-header"
      );
      const el = await fixture(container);
      const monthToggle = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center__month__select"
      ) as HTMLSelectElement;
      monthToggle.click();
      await elementUpdated(container);

      expect(monthToggle.value).to.equal("1");
      expect(monthToggle.options.length).to.equal(12);
    });

    it("should be 3 when assigning 2022 by setter", async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-header"
      );
      container.setAttribute("month", "3");
      const el = await fixture(container);
      const monthToggle = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center__month__select"
      ) as HTMLSelectElement;

      expect(monthToggle.value).to.equal("3");
    });
  });
});
