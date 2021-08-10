import { expect, fixture } from "@open-wc/testing";
import { MobileCheckbox } from "../index";

describe("MobileCheckbox", () => {
  describe("render", () => {
    const container = new MobileCheckbox({});
    it('should have "KUC-MOBILE-CHECKBOX" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-CHECKBOX");
    });
  });
});
