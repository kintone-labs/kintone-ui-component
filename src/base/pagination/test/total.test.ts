import { expect, fixture } from "@open-wc/testing";

import { BasePagination } from "../index";

describe("BasePagination", () => {
  describe("total", () => {
    it("should display 1 - 1 / 1 when not assigned", async () => {
      const container = new BasePagination();
      const el = await fixture(container);

      const currentPageNumberEl = el.querySelector(
        ".kuc-base-pagination__group__pager-current",
      ) as HTMLElement;

      await expect(currentPageNumberEl.textContent).to.equal(`1 - 1 / 1`);
    });

    it("should display 3 in total area when assigned 3", async () => {
      const container = new BasePagination();
      container.total = 3;
      const el = await fixture(container);

      const currentPageNumberEl = el.querySelector(
        ".kuc-base-pagination__group__pager-current",
      ) as HTMLElement;

      await expect(currentPageNumberEl.textContent).to.equal(`1 - 3 / 3`);
    });
  });
});
