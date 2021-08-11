import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Text", () => {
  describe("render", () => {
    const container = new Text({});
    it('should have "KUC-TEXT" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-TEXT");
    });
  });
});
