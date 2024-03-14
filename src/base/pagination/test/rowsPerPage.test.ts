import { expect, fixture } from "@open-wc/testing";

import { BasePagination } from "../index";

const total = 5;

describe("BasePagination", () => {
  describe("rowsPerPage", () => {
    it("should display 1 - 5 / 5 when not assigned", async () => {
      const container = new BasePagination();
      container.total = total;
      const el = await fixture(container);

      const currentPageNumberEl = el.querySelector(
        ".kuc-base-pagination__group__pager-current",
      ) as HTMLElement;

      await expect(currentPageNumberEl.textContent).to.equal(`1 - 5 / 5`);
    });

    it("should display 1 - 3 / 5 when assigned 3", async () => {
      const container = new BasePagination();
      container.total = total;
      container.rowsPerPage = 3;
      const el = await fixture(container);

      const currentPageNumberEl = el.querySelector(
        ".kuc-base-pagination__group__pager-current",
      ) as HTMLElement;

      await expect(currentPageNumberEl.textContent).to.equal(`1 - 3 / 5`);
    });
  });
});
