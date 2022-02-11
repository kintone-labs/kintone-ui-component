import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDateTimeCalendarBody", () => {
  describe("render", () => {
    it('should have "KUC-BASE-DATETIME-CALENDAR-BODY" tag name when not assigning any prop in constructor', async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BASE-MOBILE-DATETIME-CALENDAR-BODY");
    });
  });
});
