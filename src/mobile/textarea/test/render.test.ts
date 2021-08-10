import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("MobileTextArea", () => {
  describe("render", () => {
    const container = new MobileTextArea({});
    it('should have "KUC-MOBILE-TEXTAREA" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-TEXTAREA");
    });
  });
});
