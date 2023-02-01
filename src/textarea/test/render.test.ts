import { expect, fixture } from "@open-wc/testing";

import { TextArea } from "../index";

describe("TextArea", () => {
  describe("render", () => {
    it('should have "KUC-TEXTAREA" tag name when not assigning any prop in constructor', async () => {
      const container = new TextArea({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-TEXTAREA");
    });
  });
});
