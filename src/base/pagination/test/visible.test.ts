import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BasePagination", () => {
  describe("visible", () => {
    it("should be visible when not assigned ", async () => {
      const container = document.createElement("kuc-base-pagination");
      await fixture(container);
      const paginationEl = document.querySelector(
        "kuc-base-pagination"
      ) as HTMLElement;
      expect(paginationEl.hidden).to.equal(false);
    });

    it("should be hidden when assigned", async () => {
      const container = document.createElement("kuc-base-pagination");
      container.setAttribute("hidden", "");
      await fixture(container);
      const paginationEl = document.querySelector(
        "kuc-base-pagination"
      ) as HTMLElement;
      expect(paginationEl.hidden).to.equal(true);
    });
  });
});
