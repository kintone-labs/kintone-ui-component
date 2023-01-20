import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { ReadOnlyTable } from "../index";

const columns = [
  {
    headerName: "Number",
    field: "index",
    visible: true,
  },
  {
    headerName: "City",
    field: "name",
    visible: true,
  },
  {
    headerName: "Country",
    field: "country",
    visible: false,
  },
];

const data = [
  {
    index: "1",
    name: "Ho Chi Minh",
    country: "Vietnam",
  },
  {
    index: "2",
    name: "Can Tho",
    country: "Vietnam",
  },
  {
    index: "3",
    name: "Vinh Long",
    country: "Vietnam",
  },
  {
    index: "4",
    name: "Rach Gia",
    country: "Vietnam",
  },
  {
    index: "5",
    name: "Edmonton",
    country: "Canada",
  },
  {
    index: "6",
    name: "Calgary",
    country: "Canada",
  },
  {
    index: "7",
    name: "Vancouver",
    country: "Canada",
  },
];

describe("ReadOnlyTable", () => {
  describe("Pagination", () => {
    it("should be visible when not assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      const el = await fixture(container);
      const paginationEl = el.querySelector(
        "kuc-base-pagination"
      ) as HTMLElement;
      expect(paginationEl.hidden).to.equal(false);
    });

    it("should be visible when assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        pagination: true,
      });
      const el = await fixture(container);
      const paginationEl = el.querySelector(
        "kuc-base-pagination"
      ) as HTMLElement;
      expect(paginationEl.hidden).to.equal(false);
    });

    it("should be visible when set by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      container.pagination = true;
      const el = await fixture(container);
      const paginationEl = el.querySelector(
        "kuc-base-pagination"
      ) as HTMLElement;
      expect(paginationEl.hidden).to.equal(false);
    });

    it("should be hidden and display all rows when assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        pagination: false,
      });
      const el = await fixture(container);
      const paginationEl = el.querySelector(
        "kuc-base-pagination"
      ) as HTMLElement;
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      ) as NodeList;
      expect(paginationEl.hidden).to.equal(true);
      expect(rowsEl.length).to.equal(data.length);
    });

    it("should be hidden and display all rows when set by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      container.pagination = false;
      const el = await fixture(container);
      const paginationEl = el.querySelector(
        "kuc-base-pagination"
      ) as HTMLElement;
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      ) as NodeList;
      expect(paginationEl.hidden).to.equal(true);
      expect(rowsEl.length).to.equal(data.length);
    });

    it("should hide Prev button on first page ", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      container.pagination = false;
      const el = await fixture(container);

      const prevEl = el.querySelector(
        "kuc-base-pagination button.kuc-base-pagination__group__pager-prev"
      ) as HTMLButtonElement;

      expect(
        prevEl.classList.value.includes(
          "kuc-base-pagination__group__pager-disable"
        )
      ).to.equal(true);
    });

    it("should hide Next button on last page", async () => {
      const rowsPerPage = 3;
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: rowsPerPage,
      });
      container.pagination = false;
      const el = await fixture(container);

      const nextEl = el.querySelector(
        "kuc-base-pagination button.kuc-base-pagination__group__pager-next"
      ) as HTMLButtonElement;
      nextEl.click();
      nextEl.click();
      await elementUpdated(nextEl);
      expect(
        nextEl.classList.value.includes(
          "kuc-base-pagination__group__pager-disable"
        )
      ).to.equal(true);
    });
  });
});
