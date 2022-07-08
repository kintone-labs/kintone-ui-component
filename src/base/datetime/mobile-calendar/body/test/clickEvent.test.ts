import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDateTimeCalendarBody", () => {
  describe("kuc:mobile-calendar-body-click-date event", () => {
    it("should be triggered kuc:mobile-calendar-body-click-date event", async () => {
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

      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      container.setAttribute("month", InitValue.month.toString());
      container.setAttribute("year", InitValue.year.toString());
      container.setAttribute("value", InitValue.value);

      container.addEventListener(
        "kuc:mobile-calendar-body-click-date",
        (event) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-mobile-datetime-calendar-body__table__date"
      );
      (itemsEl[ItemForTest.index] as HTMLDivElement).click();
      expect(triggeredEvent.type).to.equal(
        "kuc:mobile-calendar-body-click-date"
      );
      expect(triggeredEvent.detail.value).to.equal(ItemForTest.value);
    });
  });
});
