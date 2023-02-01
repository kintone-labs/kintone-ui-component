import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { BasePagination } from "../index";

describe("BasePagination", () => {
  describe("isPrev", () => {
    it("should be visible when not assigned ", async () => {
      const container = new BasePagination();
      const el = await fixture(container);

      const prevEl = el.querySelector(
        "button.kuc-base-pagination__group__pager-prev"
      ) as HTMLElement;

      expect(
        prevEl.classList.contains("kuc-base-pagination__group__pager-disable")
      ).to.equal(false);
    });

    it("should be hidden when assigned", async () => {
      const container = new BasePagination();
      const el = await fixture(container);
      container.isPrev = true;
      await elementUpdated(el);

      const prevEl = document.querySelector(
        "button.kuc-base-pagination__group__pager-prev"
      ) as HTMLElement;

      expect(
        prevEl.classList.contains("kuc-base-pagination__group__pager-disable")
      ).to.equal(false);
    });

    it("should be hidden when assigned", async () => {
      const container = new BasePagination();
      const el = await fixture(container);
      container.isPrev = false;
      await elementUpdated(el);

      const prevEl = document.querySelector(
        "button.kuc-base-pagination__group__pager-prev"
      ) as HTMLElement;

      expect(
        prevEl.classList.contains("kuc-base-pagination__group__pager-disable")
      ).to.equal(true);
    });
  });
});
