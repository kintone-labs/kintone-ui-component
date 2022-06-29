import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDateTimeCalendarFooter", () => {
  describe("click event", () => {
    it("should be triggered kuc:calendar-footer-click-none event", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-footer"
      );
      container.addEventListener(
        "kuc:mobile-calendar-footer-click-none",
        (event) => {
          triggeredEvent = event.type;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(triggeredEvent).to.equal("kuc:mobile-calendar-footer-click-none");
    });

    it("should be triggered kuc:calendar-footer-click-today event", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-footer"
      );
      container.addEventListener(
        "kuc:mobile-calendar-footer-click-today",
        (event) => {
          triggeredEvent = event.type;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(triggeredEvent).to.equal("kuc:mobile-calendar-footer-click-today");
    });

    it("should be triggered kuc:calendar-footer-click-close event", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-footer"
      );
      container.addEventListener(
        "kuc:mobile-calendar-footer-click-close",
        (event) => {
          triggeredEvent = event.type;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--close"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(triggeredEvent).to.equal("kuc:mobile-calendar-footer-click-close");
    });
  });
});
