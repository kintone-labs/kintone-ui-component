import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../../../listbox";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("month", () => {
    it("should be 1 when not assigning", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);
      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle__label"
      ) as HTMLSpanElement;
      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;

      btnMonthToggleEl.click();
      await elementUpdated(container);

      const optionMonthEl = el.querySelector(
        ".kuc-base-datetime-header-month__listbox"
      ) as HTMLUListElement;

      expect(monthSelectEl.innerText).to.equal("JANUARY");
      expect(optionMonthEl.children[0].children.length).to.equal(12);
    });

    it("should be 5 when assigning 5 by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "5");
      const el = await fixture(container);

      const monthSelectEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle__label"
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
        ".kuc-base-datetime-header-month__toggle__label"
      ) as HTMLSpanElement;

      expect(monthSelectEl.innerText).to.equal("JANUARY");
    });

    it("should open/close dropdown month when click button month toggle", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLSpanElement;

      btnMonthToggleEl.click();
      await elementUpdated(container);
      const listBoxElShow = el.querySelector(
        ".kuc-base-datetime-header-month__listbox"
      ) as HTMLSpanElement;

      expect(listBoxElShow.getAttribute("aria-hidden")).to.equal("false");

      btnMonthToggleEl.click();
      await elementUpdated(container);
      const listBoxElHide = el.querySelector(
        ".kuc-base-datetime-header-month__listbox"
      ) as HTMLSpanElement;
      expect(listBoxElHide).to.equal(null);
    });

    it("should close dropdown month when click outside listbox", async () => {
      // TODO: Implement when click outside listbox ( note setTimeout event click in listbox)
    });

    it("should close month dropdown when press key Escape on month dropdown", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);

      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLSpanElement;

      btnMonthToggleEl.click();
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
        ".kuc-base-datetime-header-month__listbox"
      ) as HTMLSpanElement;
      expect(listBoxElHide).to.equal(null);
    });
  });
});
