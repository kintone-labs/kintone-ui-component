import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";

describe("ReadOnlyTable", () => {
  describe("render", () => {
    const container = new ReadOnlyTable({});
    it('should have "KUC-READONLY-TABLE" tag name', async () => {
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-READONLY-TABLE");
    });
  });
});
