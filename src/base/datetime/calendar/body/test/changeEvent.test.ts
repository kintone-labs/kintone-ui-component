import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarBody } from "../index";

describe("BaseDateTimeCalendarBody", () => {
  describe("kuc:calendar-body-change-date event", () => {
    it("should be triggered kuc:calendar-body-change-date event", async () => {
      let triggeredEvent: any = null;
      const InitValue = {
        month: 8,
        year: 2021,
        value: "2021-08-22",
      };
      const ItemForTest = {
        index: 17,
        value: "2021-08-23",
      };

      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      container.addEventListener("kuc:calendar-body-change-date", (event) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;

      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      expect(triggeredEvent.type).to.equal("kuc:calendar-body-change-date");
      expect(triggeredEvent.detail.value).to.equal(ItemForTest.value);
    });
  });
});
