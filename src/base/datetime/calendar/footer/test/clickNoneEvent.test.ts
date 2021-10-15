import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarFooter } from "../index";

describe("BaseDateTimeCalendarFooter", () => {
  describe("kuc:calendar-footer-click-none event", () => {
    it("should be triggered kuc:calendar-footer-click-none event", async () => {
      const container = new BaseDateTimeCalendarFooter();
      container.addEventListener("kuc:calendar-footer-click-none", event => {
        container.noneButtonText = event.type;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(buttonEl.innerText).to.equal("kuc:calendar-footer-click-none");
    });
  });
});
