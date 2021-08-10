import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("MobileText", () => {
  describe("render", () => {
    const container = new MobileText({});
    it('should have "KUC-MOBILE-TEXT" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-TEXT");
    });
  });
});
