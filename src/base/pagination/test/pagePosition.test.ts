import { expect, fixture } from "@open-wc/testing";

import { BasePagination } from "../index";

const total = 5;
const rowsPerPage = 2;

describe("BasePagination", () => {
  describe("pagePosition", () => {
    it("should display the first page when not assigned", async () => {
      const container = new BasePagination();
      container.rowsPerPage = rowsPerPage;
      container.total = total;
      const el = await fixture(container);

      const currentPageNumberEl = el.querySelector(
        ".kuc-base-pagination__group__pager-current",
      ) as HTMLElement;

      await expect(currentPageNumberEl.textContent).to.equal(`1 - 2 / 5`);
    });

    it("should display the second page when assigned 2", async () => {
      const container = new BasePagination();
      container.rowsPerPage = rowsPerPage;
      container.total = total;
      container.pagePosition = 2;
      const el = await fixture(container);

      const currentPageNumberEl = el.querySelector(
        ".kuc-base-pagination__group__pager-current",
      ) as HTMLElement;

      await expect(currentPageNumberEl.textContent).to.equal(`3 - 4 / 5`);
    });

    it("should display the last page when total < rowsPerPage * pagePosition", async () => {
      const container = new BasePagination();
      container.rowsPerPage = rowsPerPage;
      container.total = total;
      container.pagePosition = 3;
      const el = await fixture(container);

      const currentPageNumberEl = el.querySelector(
        ".kuc-base-pagination__group__pager-current",
      ) as HTMLElement;

      await expect(currentPageNumberEl.textContent).to.equal(`5 - 5 / 5`);
    });
  });
});
