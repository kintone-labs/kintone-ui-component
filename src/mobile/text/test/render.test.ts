import { expect, fixture } from "@open-wc/testing";

import { MobileText } from "../index";

describe("MobileText", () => {
  describe("render", () => {
    it('should have "KUC-MOBILE-TEXT" tag name when not assigning any prop in constructor', async () => {
      const container = new MobileText({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-TEXT");
    });
  });
});
