import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("MobileButton", () => {
  describe("render", () => {
    const container = new MobileButton({});
    it('should have "KUC-MOBILE-BUTTON" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-BUTTON");
    });
  });
});
