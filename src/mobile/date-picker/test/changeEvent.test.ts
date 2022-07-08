import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { MobileDatePicker } from "../index";

describe("MobileDatePicker", () => {
  describe("change event", () => {
    it("should be triggered when mousedown on date in calendar", async () => {
      let triggeredEvent: any = null;
      const container = new MobileDatePicker({
        value: "2021-12-20",
        language: "en",
      });
      container.addEventListener("change", (event: Event) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);

      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const selectedElUp = el.querySelector(
        "kuc-base-mobile-datetime-calendar-body .kuc-base-mobile-datetime-calendar-body__table__date--selected"
      ) as HTMLButtonElement;

      const nextEl = selectedElUp?.nextElementSibling as HTMLTableCellElement;
      const buttonEl = nextEl as HTMLElement;
      buttonEl.click();
      await elementUpdated(container);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("2021-12-21");
    });

    it("should be triggered when click none button on calendar", async () => {
      let triggeredEvent: any = null;
      const container = new MobileDatePicker({
        value: "2021-12-20",
        language: "en",
      });
      container.addEventListener("change", (event: Event) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const noneBtnEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      noneBtnEl.click();
      await elementUpdated(container);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("");

      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const noneBtnElEmpty = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      noneBtnElEmpty.click();
      await elementUpdated(container);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("");
    });
  });
});
