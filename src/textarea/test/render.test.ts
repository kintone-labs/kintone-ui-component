import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("TextArea", () => {
  describe("render", () => {
    const container = new TextArea({});
    it('should have "KUC-TEXTAREA" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-TEXTAREA");
    });
  });
});
