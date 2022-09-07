import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../../../listbox";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("year", () => {
    it("should be 2021 when not assigning", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);
      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLSpanElement;

      btnYearToggleEl.click();
      await elementUpdated(container);

      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle__label"
      ) as HTMLSpanElement;
      const optionMonthEl = el.querySelector(
        ".kuc-base-datetime-header-year__listbox"
      ) as HTMLUListElement;

      expect(yearSelectEl.innerText).to.equal("2021");
      expect(optionMonthEl.children[0].children.length).to.equal(201);
    });

    it("should be 2022 when assigning 2022 by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "2022");
      const el = await fixture(container);

      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle__label"
      ) as HTMLSpanElement;

      expect(yearSelectEl.innerText).to.equal("2022");
    });

    it("should be 99 when assigning 99 by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "99");
      const el = await fixture(container);

      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle__label"
      ) as HTMLSpanElement;

      expect(yearSelectEl.innerText).to.equal("99");
    });

    it("should be 99999 when assigning 99999 by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "99999");
      const el = await fixture(container);

      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle__label"
      ) as HTMLSpanElement;

      expect(yearSelectEl.innerText).to.equal("99999");
    });

    it("should be 2021 when assigning invalid value by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("year", "123.33");
      const el = await fixture(container);

      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle__label"
      ) as HTMLSpanElement;

      expect(yearSelectEl.innerText).to.equal("2021");
    });

    it("should open/close dropdown year when click button year toggle", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLSpanElement;

      btnYearToggleEl.click();
      await elementUpdated(container);
      const listBoxElShow = el.querySelector(
        ".kuc-base-datetime-header-year__listbox"
      ) as HTMLSpanElement;
      expect(listBoxElShow.getAttribute("aria-hidden")).to.equal("false");

      btnYearToggleEl.click();
      await elementUpdated(container);
      const listBoxElHide = el.querySelector(
        ".kuc-base-datetime-header-year__listbox"
      ) as HTMLSpanElement;
      expect(listBoxElHide).to.equal(null);
    });

    it("should close dropdown year when click outside listbox", async () => {
      // TODO: Implement when click outside listbox ( note setTimeout event click in listbox)
    });

    it("should close year dropdown when press key Escape on year dropdown", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLSpanElement;

      btnYearToggleEl.click();
      await elementUpdated(container);

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox"
      )[0];
      const liEl = itemsEl.children[0] as HTMLLIElement;

      liEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
      );
      await elementUpdated(container);

      const listBoxElHide = el.querySelector(
        ".kuc-base-datetime-header-year__listbox"
      ) as HTMLSpanElement;
      expect(listBoxElHide).to.equal(null);
    });
  });
});
