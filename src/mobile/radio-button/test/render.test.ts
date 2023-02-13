import { expect, fixture } from "@open-wc/testing";

import { MobileRadioButton } from "../index";

describe("MobileRadioButton", () => {
  describe("render", () => {
    it('should have "KUC-MOBILE-RADIO-BUTTON" tag name when not assigning any prop in constructor', async () => {
      const container = new MobileRadioButton({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MOBILE-RADIO-BUTTON");
    });
  });
});
