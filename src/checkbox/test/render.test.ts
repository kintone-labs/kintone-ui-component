import { expect, fixture } from "@open-wc/testing";

import { Checkbox } from "../index";

describe("Checkbox", () => {
  describe("render", () => {
    it('should have "KUC-CHECKBOX" tag name when not assigning any prop in constructor', async () => {
      const container = new Checkbox({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-CHECKBOX");
    });
  });
});
