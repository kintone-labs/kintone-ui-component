import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeMenu } from "../index";

describe("BaseDateTimeMenu", () => {
  describe("render", () => {
    it('should have "KUC-BASE-DATETIME-MENU" tag name when not assigning any prop in constructor', async () => {
      const container = new BaseDateTimeMenu();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BASE-DATETIME-MENU");
    });
  });
});
