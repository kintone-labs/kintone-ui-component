import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendar } from "../index";

describe("BaseDateTimeCalendar", () => {
  describe("kuc:calendar-header-change event", () => {
    it("should be triggered kuc:calendar-header-change event", async () => {
      let triggeredEvent: any = null;
      const container = new BaseDateTimeCalendar();
      container.value = "2021-08-22";
      container.addEventListener("kuc:calendar-header-change", (event) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        "kuc-base-datetime-calendar-header .kuc-base-datetime-calendar-header__group__button--next-month"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);
      expect(triggeredEvent.type).to.equal("kuc:calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2021-9");
    });

    it("should be triggered kuc:calendar-body-change-date event", async () => {
      let triggeredEvent: any = null;
      const container = new BaseDateTimeCalendar();
      container.value = "2021-08-22";
      container.addEventListener("kuc:calendar-body-change-date", (event) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        'kuc-base-datetime-calendar-body .kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;

      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      expect(triggeredEvent.type).to.equal("kuc:calendar-body-change-date");
      expect(triggeredEvent.detail.value).to.equal("2021-08-23");
    });
  });
});
