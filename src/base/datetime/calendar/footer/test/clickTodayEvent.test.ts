import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarFooter } from "../index";

describe("BaseDateTimeCalendarFooter", () => {
  describe("clickTodayEvent", () => {
    it("should be triggered clickToday event", async () => {
      const container = new BaseDateTimeCalendarFooter();
      container.addEventListener("clickToday", event => {
        container.todayButtonText = event.type;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(buttonEl.innerText).to.equal("clickToday");
    });
  });
});
