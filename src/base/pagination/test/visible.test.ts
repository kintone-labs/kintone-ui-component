import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { BasePagination } from "../index";

describe("BasePagination", () => {
  describe("visible", () => {
    it("should be visible when not assigned ", async () => {
      const container = new BasePagination();
      const el = (await fixture(container)) as HTMLElement;
      expect(el.hidden).to.equal(false);
    });

    it("should be hidden when assigned", async () => {
      const container = new BasePagination();
      const el = (await fixture(container)) as HTMLElement;
      container.visible = false;
      await elementUpdated(el);

      expect(el.hidden).to.equal(true);
    });
  });
});
