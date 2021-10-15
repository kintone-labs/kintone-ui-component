import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarFooter } from "../index";

describe("BaseDateTimeCalendarFooter", () => {
  describe("noneButtonText", () => {
    it("should be 'None' when not assigning nothing", async () => {
      const container = new BaseDateTimeCalendarFooter();
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("None");
    });

    it("should be 'text' when assigning by setter", async () => {
      const container = new BaseDateTimeCalendarFooter();
      container.noneButtonText = "text";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("text");
    });
  });
});
