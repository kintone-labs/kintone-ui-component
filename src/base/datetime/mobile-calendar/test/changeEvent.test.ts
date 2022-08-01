import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { BaseMobileDateTimeCalendar } from "../index";

describe("BaseMobileDateTimeCalendar", () => {
  describe("change event", () => {
    it("should be triggered kuc:calendar-header-change event", async () => {
      let triggeredEvent: any = null;
      const container = new BaseMobileDateTimeCalendar();
      container.value = "2021-01-30";
      container.addEventListener(
        "kuc:mobile-calendar-header-change",
        (event) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        "kuc-base-mobile-datetime-calendar-header .kuc-base-mobile-datetime-calendar-header__group__button--next-month"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);
      expect(triggeredEvent.type).to.equal("kuc:mobile-calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2021-2");
    });
  });
});
