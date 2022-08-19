import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BasePagination", () => {
  describe("isNext", () => {
    it("should be visible when not assigned ", async () => {
      const container = document.createElement("kuc-base-pagination");
      await fixture(container);
      const nextEl = document.querySelector(
        "button.kuc-base-pagination__group__pagination-next"
      ) as HTMLElement;
      expect(nextEl.hasAttribute("hidden")).to.equal(false);
    });

    it("should be hidden when assigned", async () => {
      const container = document.createElement("kuc-base-pagination");
      await fixture(container);
      const nextEl = document.querySelector(
        "button.kuc-base-pagination__group__pagination-next"
      ) as HTMLElement;
      nextEl.setAttribute("hidden", "");
      expect(nextEl.hasAttribute("hidden")).to.equal(true);
    });
  });
});
