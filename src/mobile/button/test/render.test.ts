import { expect, fixture } from "@open-wc/testing";

import { MobileButton } from "../index";

describe("MobileButton", () => {
  describe("render", () => {
    it('should have "KUC-MOBILE-BUTTON" tag name when not assigning any prop in constructor', async () => {
      const container = new MobileButton({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-BUTTON");
    });
  });
});
