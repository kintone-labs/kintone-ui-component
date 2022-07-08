import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { getTodayStringByLocale } from "../../utils";
import "../index";

describe("BaseMobileDate", () => {
  describe("kuc:mobile-base-date-change", () => {
    it("should be triggered when pressing date on calendar", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      container.addEventListener("kuc:mobile-base-date-change", (event) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      inputEl.click();
      await elementUpdated(container);
      const dateSelected = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__date--selected"
      );
      const dateNext = dateSelected?.nextElementSibling as HTMLElement;
      dateNext.click();
      await elementUpdated(container);

      expect(inputEl.value).to.equal("02/15/2022");
      expect(triggeredEvent.type).to.equal("kuc:mobile-base-date-change");
    });

    it("should not triggered when pressing the same date on calendar", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      container.addEventListener("kuc:mobile-base-date-change", (event) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      inputEl.click();
      await elementUpdated(container);
      const dateSelected = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__date--selected"
      ) as HTMLElement;
      dateSelected.click();
      await elementUpdated(container);

      expect(inputEl.value).to.equal("02/14/2022");
      expect(triggeredEvent).to.equal(null);
    });

    it("should triggered when pressing none button on calendar", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-mobile-base-date");
      container.addEventListener("kuc:mobile-base-date-change", (event) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      inputEl.click();
      await elementUpdated(container);
      const noneButton = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none"
      ) as HTMLElement;
      noneButton.click();
      await elementUpdated(container);

      expect(inputEl.value).to.equal("");
      expect(triggeredEvent.type).to.equal("kuc:mobile-base-date-change");
      expect(triggeredEvent.detail.value).to.equal("");
    });

    it("should triggered when pressing none button on calendar", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      inputEl.click();
      await elementUpdated(container);
      const noneButton = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none"
      ) as HTMLElement;
      noneButton.click();
      await elementUpdated(container);

      expect(inputEl.value).to.equal("");
    });

    it("should triggered when pressing today button on calendar", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-mobile-base-date");
      container.addEventListener("kuc:mobile-base-date-change", (event) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      inputEl.click();
      await elementUpdated(container);
      const todayButton = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today"
      ) as HTMLElement;
      todayButton.click();
      await elementUpdated(container);
      const todayString = getTodayStringByLocale("en");

      expect(inputEl.value).to.equal(todayString);
      expect(triggeredEvent.type).to.equal("kuc:mobile-base-date-change");
    });

    it("should close calendar when pressing close button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      container.addEventListener("kuc:mobile-base-date-change", (event) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const iconCalendar = el.querySelector(
        ".kuc-mobile-base-date__group__button"
      ) as HTMLButtonElement;

      inputEl.click();
      await elementUpdated(container);
      const closeButton = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--close"
      ) as HTMLElement;
      iconCalendar.click();
      await elementUpdated(container);
      closeButton.click();
      await elementUpdated(container);

      const calendar = el.querySelector(
        ".kuc-base-mobile-date__calendar"
      ) as HTMLElement;

      expect(inputEl.value).to.equal("02/14/2022");
      expect(triggeredEvent).to.equal(null);
      expect(calendar).to.equal(null);
    });
  });
});
