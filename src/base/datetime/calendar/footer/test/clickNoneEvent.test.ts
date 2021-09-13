import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarFooter } from "../index";

describe("BaseDateTimeCalendarFooter", () => {
  describe("clickNoneEvent", () => {
    it("should be triggered clickNone event", async () => {
      const container = new BaseDateTimeCalendarFooter();
      container.addEventListener("clickNone", event => {
        container.noneButtonText = event.type;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(buttonEl.innerText).to.equal("clickNone");
    });
  });
});
