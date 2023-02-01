import { expect, fixture } from "@open-wc/testing";

import { BaseDateTimeCalendarFooter } from "../index";

describe("BaseDateTimeCalendarFooter", () => {
  describe("render", () => {
    it('should have "KUC-BASE-DATETIME-CALENDAR-FOOTER" tag name when not assigning any prop in constructor', async () => {
      const container = new BaseDateTimeCalendarFooter();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BASE-DATETIME-CALENDAR-FOOTER");
    });
  });
});
