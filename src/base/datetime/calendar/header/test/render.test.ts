import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarHeader } from "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("render", () => {
    it('should have "KUC-BASE-DATETIME-CALENDAR-HEADER" tag name when not assigning any prop in constructor', async () => {
      const container = new BaseDateTimeCalendarHeader();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BASE-DATETIME-CALENDAR-HEADER");
    });
  });
});
