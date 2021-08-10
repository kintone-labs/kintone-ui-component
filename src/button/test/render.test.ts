import { expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("Button", () => {
  describe("render", () => {
    const container = new Button({});
    it('should have "KUC-BUTTON" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BUTTON");
    });
  });
});
