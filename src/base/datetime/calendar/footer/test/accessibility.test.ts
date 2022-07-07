import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTimeCalendarFooter } from "../index";

describe("BaseDateTimeCalendarFooter", () => {
  describe("accessibility", () => {
    it("should do nothing when pressing not handled key", async () => {
      let triggeredEvent: any = null;
      const container = new BaseDateTimeCalendarFooter();
      container.addEventListener("kuc:calendar-footer-click-none", (event) => {
        triggeredEvent = event.type;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;

      buttonEl.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
      await elementUpdated(el);
      expect(triggeredEvent).to.equal(null);
    });

    it("should do nothing when pressing Shift key", async () => {
      let triggeredEvent: any = null;
      const container = new BaseDateTimeCalendarFooter();
      container.addEventListener("kuc:calendar-footer-click-none", (event) => {
        triggeredEvent = event.type;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;

      buttonEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab", shiftKey: true })
      );
      await elementUpdated(el);
      expect(triggeredEvent).to.equal(null);
    });
  });
});
