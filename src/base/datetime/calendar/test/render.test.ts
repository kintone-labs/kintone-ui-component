import { expect, fixture } from "@open-wc/testing";

import { BaseDateTimeCalendar } from "../index";

describe("BaseDateTimeCalendar", () => {
  describe("render", () => {
    it('should have "KUC-BASE-DATETIME-CALENDAR" tag name when not assigning any prop in constructor', async () => {
      const container = new BaseDateTimeCalendar();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BASE-DATETIME-CALENDAR");
    });
  });
});
