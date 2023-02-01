import { expect, fixture } from "@open-wc/testing";

import { Button } from "../index";

describe("Button", () => {
  describe("render", () => {
    it('should have "KUC-BUTTON" tag name when not assigning any prop in constructor', async () => {
      const container = new Button({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-BUTTON");
    });
  });
});
