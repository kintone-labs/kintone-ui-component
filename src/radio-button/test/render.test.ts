import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

describe("RadioButton", () => {
  describe("render", () => {
    const container = new RadioButton({});
    it('should have "KUC-RADIO-BUTTON" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-RADIO-BUTTON");
    });
  });
});
