import { expect, fixture } from "@open-wc/testing";

import { Text } from "../index";

describe("Text", () => {
  describe("render", () => {
    it('should have "KUC-TEXT" tag name when not assigning any prop in constructor', async () => {
      const container = new Text({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-TEXT");
    });
  });
});
