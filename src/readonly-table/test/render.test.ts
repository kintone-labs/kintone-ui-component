import { expect, fixture } from "@open-wc/testing";

import { ReadOnlyTable } from "../index";

describe("ReadOnlyTable", () => {
  describe("render", () => {
    it('should have "KUC-READONLY-TABLE" tag name when not assigning any prop in constructor', async () => {
      const container = new ReadOnlyTable({});
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-READONLY-TABLE");
    });
  });
});
