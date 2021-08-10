import { expect, fixture } from "@open-wc/testing";
import { Spinner } from "../index";

describe("Spinner", () => {
  describe("render", () => {
    const container = new Spinner({});
    it('should have "KUC-SPINNER" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-SPINNER");
    });
  });
});
