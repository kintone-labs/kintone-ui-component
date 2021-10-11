import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("year", () => {
    it("should be 2021 when not assigning", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-dropdown-year__toggle__label"
      ) as HTMLSpanElement;
      const optionMonthEl = el.querySelector(
        ".kuc-base-datetime-header-dropdown-year__listbox"
      ) as HTMLUListElement;

      expect(yearSelectEl.innerText).to.equal("2021");
      expect(optionMonthEl.children[1].children.length).to.equal(201);
    });

    it("should be 2022 when assigning 2022 by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2022");
      const el = await fixture(container);

      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-dropdown-year__toggle__label"
      ) as HTMLSpanElement;

      expect(yearSelectEl.innerText).to.equal("2022");
    });

    it("should be 2021 when assigning invalid value by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "123.33");
      const el = await fixture(container);

      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-dropdown-year__toggle__label"
      ) as HTMLSpanElement;

      expect(yearSelectEl.innerText).to.equal("2021");
    });

    it("should open/close dropdown year when click button year toggle", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-dropdown-year__toggle"
      ) as HTMLSpanElement;
      const datetimeListboxEl = el.querySelector(
        ".kuc-base-datetime-header-dropdown-year__listbox"
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
