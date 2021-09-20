import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarFooter } from "../index";

describe("BaseDateTimeCalendarFooter", () => {
  describe("todayButtonText", () => {
    it("should be 'Today' when not assigning nothing", async () => {
      const container = new BaseDateTimeCalendarFooter();
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("Today");
    });

    it("should be 'text' when assigning by setter", async () => {
      const container = new BaseDateTimeCalendarFooter();
      container.todayButtonText = "text";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("text");
    });
  });
});
