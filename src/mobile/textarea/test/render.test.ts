import { expect, fixture } from "@open-wc/testing";

import { MobileTextArea } from "../index";

describe("MobileTextArea", () => {
  describe("render", () => {
    it('should have "KUC-MOBILE-TEXTAREA" tag name when not assigning any prop in constructor', async () => {
      const container = new MobileTextArea({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-TEXTAREA");
    });
  });
});
