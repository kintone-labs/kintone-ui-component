import { expect, fixture } from "@open-wc/testing";
import { Checkbox } from "../index";

describe("Checkbox", () => {
  describe("render", () => {
    const container = new Checkbox({});
    it('should have "KUC-CHECKBOX" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-CHECKBOX");
    });
  });
});
