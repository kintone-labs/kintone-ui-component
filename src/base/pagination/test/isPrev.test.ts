import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BasePagination", () => {
  describe("isPrev", () => {
    it("should be visible when not assigned ", async () => {
      const container = document.createElement("kuc-base-pagination");
      await fixture(container);
      const prevEl = document.querySelector(
        "button.kuc-base-pagination__group__pagination-prev"
      ) as HTMLElement;
      expect(prevEl.hasAttribute("hidden")).to.equal(false);
    });

    it("should be hidden when assigned", async () => {
      const container = document.createElement("kuc-base-pagination");
      await fixture(container);
      const prevEl = document.querySelector(
        "button.kuc-base-pagination__group__pagination-prev"
      ) as HTMLElement;
      prevEl.setAttribute("hidden", "");
      expect(prevEl.hasAttribute("hidden")).to.equal(true);
    });
  });
});
