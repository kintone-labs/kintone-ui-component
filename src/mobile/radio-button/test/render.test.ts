import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

describe("MobileRadioButton", () => {
  describe("render", () => {
    const container = new MobileRadioButton({});
    it('should have "KUC-MOBILE-RADIO-BUTTON" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-RADIO-BUTTON");
    });
  });
});
