import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { DatePicker } from "../index";

describe("DatePicker", () => {
  describe("accessibility", () => {
    it("should be focused the previous month button when press tab key on None button", async () => {
      let triggeredEvent: any = null;
      const container = new DatePicker({ value: "2021-12-22" });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const noneBtnEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      const prevMonthBtn = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button--previous-month"
      ) as HTMLButtonElement;

      prevMonthBtn.addEventListener("focus", (event: Event) => {
        triggeredEvent = event;
      });

      noneBtnEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
      await elementUpdated(el);
      expect(triggeredEvent.type).to.equal("focus");
    });

    it("should be focused the none button when press shifttab key on previous month button", async () => {
      let triggeredEvent: any = null;
      const container = new DatePicker({ value: "2021-12-22" });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const noneBtnEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      const prevMonthBtn = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button--previous-month"
      ) as HTMLButtonElement;

      prevMonthBtn.addEventListener("focus", (event: Event) => {
        triggeredEvent = event;
      });

      noneBtnEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
      await elementUpdated(el);
      expect(triggeredEvent.type).to.equal("focus");
    });

    it("should be revert value when press Escape key on calendar", async () => {
      const container = new DatePicker({ value: "2021-12-22" });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const calendarEl = el.querySelector(
        ".kuc-base-datetime-calendar__group"
      ) as HTMLDivElement;
      const selectedElRight = el.querySelector(
        'kuc-base-datetime-calendar-body .kuc-base-datetime-calendar-body__table__date--selected[aria-selected="true"]'
      ) as HTMLTableCellElement;

      selectedElRight.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      await elementUpdated(el);

      expect(inputDateEl.value).to.equal("12/23/2021");

      calendarEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      await elementUpdated(el);
      expect(inputDateEl.value).to.equal("12/22/2021");
    });

    it("should be open calendar when click hidden button", async () => {
      const container = new DatePicker({ value: "2021-12-22" });
      const el = await fixture(container);
      const hiddenBtn = el.querySelector(
        ".kuc-base-date__assistive-text"
      ) as HTMLButtonElement;
      hiddenBtn.dispatchEvent(new Event("click"));
      await elementUpdated(el);

      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar"
      ) as HTMLElement;
      expect(calendarEl.tagName).to.equal("KUC-BASE-DATETIME-CALENDAR");
    });

    it("should be close the list box month when click to calendar group", async () => {
      const container = new DatePicker();
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;
      btnMonthToggleEl.click();
      await elementUpdated(container);
      expect(btnMonthToggleEl.getAttribute("aria-expanded")).to.equal("true");

      const calendarEl = el.querySelector(
        ".kuc-base-datetime-calendar__group"
      ) as HTMLDivElement;
      calendarEl.click();
      await elementUpdated(container);
      expect(btnMonthToggleEl.getAttribute("aria-expanded")).to.equal("false");
    });

    it("should be close the list box year when click to calendar group", async () => {
      const container = new DatePicker();
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;
      btnYearToggleEl.click();
      await elementUpdated(container);
      expect(btnYearToggleEl.getAttribute("aria-expanded")).to.equal("true");

      const calendarEl = el.querySelector(
        ".kuc-base-datetime-calendar__group"
      ) as HTMLDivElement;
      calendarEl.click();
      await elementUpdated(container);
      expect(btnYearToggleEl.getAttribute("aria-expanded")).to.equal("false");
    });

    it("should be nothing to change when press any key exclude Escape key on calendar", async () => {
      const container = new DatePicker();
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const calendarEl = el.querySelector(
        ".kuc-base-datetime-calendar__group"
      ) as HTMLDivElement;

      calendarEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);
      expect(inputDateEl.value).to.equal("");
    });
    it("should be focused last day of month when click on previous month button", async () => {
      const container = new DatePicker({ value: "2021-03-31" });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const prevMonthBtn = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button--previous-month"
      ) as HTMLButtonElement;

      prevMonthBtn.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const dateSelected = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__date--selected"
      ) as HTMLTableCellElement;
      expect(dateSelected.getAttribute("data-date")).to.equal("2021-02-28");
    });
  });
});
