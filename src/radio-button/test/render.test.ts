import { expect, fixture } from "@open-wc/testing";

import { RadioButton } from "../index";

describe("RadioButton", () => {
  describe("render", () => {
    it('should have "KUC-RADIO-BUTTON" tag name when not assigning any prop in constructor', async () => {
      const container = new RadioButton({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-RADIO-BUTTON");
    });
  });
});
