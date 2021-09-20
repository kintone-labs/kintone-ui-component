import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("render", () => {
    it('should have "KUC-BASE-DATETIME-CALENDAR-HEADER" tag name when not assigning', async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BASE-DATETIME-CALENDAR-HEADER");
    });
  });
});
