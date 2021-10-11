import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("month", () => {
    it("should be 1 when not assigning", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);
      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-header__month__toggle__label"
      ) as HTMLSpanElement;

      const optionMonthEl = el.querySelector(
        ".kuc-base-datetime-header__month__listbox"
      ) as HTMLUListElement;

      expect(monthSelectEl.innerText).to.equal("JANUARY");
      expect(optionMonthEl.children[1].children.length).to.equal(12);
    });

    it("should be 5 when assigning 5 by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "5");
      const el = await fixture(container);

      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-header__month__toggle__label"
      ) as HTMLSpanElement;

      expect(monthSelectEl.innerText).to.equal("MAY");
    });

    it("should be JANUARY when assigning invalid value by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2021");
      container.setAttribute("month", "14.5");
      const el = await fixture(container);

      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-header__month__toggle__label"
      ) as HTMLSpanElement;

      expect(monthSelectEl.innerText).to.equal("JANUARY");
    });

    it("should open/close dropdown month when click button month toggle", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header__month__toggle"
      ) as HTMLSpanElement;
      const datetimeListboxEl = el.querySelector(
        ".kuc-base-datetime-header__month__listbox"
      ) as HTMLSpanElement;

      btnYearToggleEl.click();
      await elementUpdated(container);
      expect(datetimeListboxEl.getAttribute("aria-hidden")).to.equal("false");

      btnYearToggleEl.click();
      await elementUpdated(container);
      expect(datetimeListboxEl.getAttribute("aria-hidden")).to.equal("true");
    });
  });
});
