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
        'kuc-base-datetime-calendar-body .kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;

      selectedElRight.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      await elementUpdated(el);

      expect(inputDateEl.value).to.equal("12/23/2021");

      calendarEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      await elementUpdated(el);
      expect(inputDateEl.value).to.equal("12/22/2021");
    });

    it("should be open calendar when focused hidden button and press enter key", async () => {
      const container = new DatePicker({ value: "2021-12-22" });
      const el = await fixture(container);
      const hiddenBtn = el.querySelector(
        ".kuc-base-date__assistive-text"
      ) as HTMLButtonElement;
      hiddenBtn.focus();
      hiddenBtn.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(container);
      await elementUpdated(el);

      const calendarEl = el.querySelector(
        ".kuc-base-date__calendar"
      ) as HTMLElement;

      expect(calendarEl.tagName).to.equal("KUC-BASE-DATETIME-CALENDAR");
    });
  });
});
