import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarBody } from "../index";

describe("BaseDateTimeCalendarBody", () => {
  describe("kuc:calendar-body-click-date event", () => {
    it("should be triggered kuc:calendar-body-click-date event", async () => {
      let triggeredEvent: any = null;
      const InitValue = {
        month: 8,
        year: 2021,
        value: "2021-08-22",
      };
      const ItemForTest = {
        index: 17,
        value: "2021-08-18",
      };

      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      container.addEventListener("kuc:calendar-body-click-date", (event) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-calendar-body__table__date__button"
      );
      (itemsEl[ItemForTest.index] as HTMLDivElement).click();
      expect(triggeredEvent.type).to.equal("kuc:calendar-body-click-date");
      expect(triggeredEvent.detail.value).to.equal(ItemForTest.value);
    });
  });
});
