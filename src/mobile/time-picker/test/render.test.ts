import { expect, fixture } from "@open-wc/testing";
import { MobileTimePicker } from "..";

describe("MobileTimePicker", () => {
  describe("render", () => {
    it('should have "KUC-MOBILE-TIME-PICKER" tag name when not assigning any prop in constructor', async () => {
      const container = new MobileTimePicker();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-TIME-PICKER");
    });
  });
});
