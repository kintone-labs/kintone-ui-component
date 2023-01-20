import { expect, fixture } from "@open-wc/testing";

import { BaseDateTimeCalendarBody } from "../index";

describe("BaseDateTimeCalendarBody", () => {
  describe("render", () => {
    it('should have "KUC-BASE-DATETIME-CALENDAR-BODY" tag name when not assigning any prop in constructor', async () => {
      const container = new BaseDateTimeCalendarBody();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BASE-DATETIME-CALENDAR-BODY");
    });
  });
});
