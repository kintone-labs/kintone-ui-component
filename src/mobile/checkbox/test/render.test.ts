import { expect, fixture } from "@open-wc/testing";

import { MobileCheckbox } from "../index";

describe("MobileCheckbox", () => {
  describe("render", () => {
    it('should have "KUC-MOBILE-CHECKBOX" tag name when not assigning any prop in constructor', async () => {
      const container = new MobileCheckbox({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-CHECKBOX");
    });
  });
});
