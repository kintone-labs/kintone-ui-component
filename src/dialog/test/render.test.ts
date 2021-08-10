import { expect, fixture } from "@open-wc/testing";
import { Dialog } from "../index";

describe("Dialog", () => {
  describe("render", () => {
    const container = new Dialog({});
    it('should have "KUC-DIALOG" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-DIALOG");
    });
  });
});
