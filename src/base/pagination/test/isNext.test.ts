import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { BasePagination } from "../index";

describe("BasePagination", () => {
  describe("isNext", () => {
    it("should be visible when not assigned ", async () => {
      const container = new BasePagination();
      const el = await fixture(container);

      const nextEl = el.querySelector(
        "button.kuc-base-pagination__group__pager-next"
      ) as HTMLElement;

      expect(
        nextEl.classList.contains("kuc-base-pagination__group__pager-disable")
      ).to.equal(false);
    });

    it("should be visible when assigned", async () => {
      const container = new BasePagination();
      const el = await fixture(container);
      container.isNext = true;
      await elementUpdated(el);

      const nextEl = el.querySelector(
        "button.kuc-base-pagination__group__pager-next"
      ) as HTMLElement;

      expect(
        nextEl.classList.contains("kuc-base-pagination__group__pager-disable")
      ).to.equal(false);
    });

    it("should be hidden when assigned", async () => {
      const container = new BasePagination();
      const el = await fixture(container);
      container.isNext = false;
      await elementUpdated(el);

      const nextEl = el.querySelector(
        "button.kuc-base-pagination__group__pager-next"
      ) as HTMLElement;

      expect(
        nextEl.classList.contains("kuc-base-pagination__group__pager-disable")
      ).to.equal(true);
    });
  });
});
