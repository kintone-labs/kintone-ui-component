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
  describe("rowsPerPage", () => {
    it("should have 5 rows by default when not assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      const el = await fixture(container);

      const paginationButtons = el.querySelectorAll(
        ".kuc-base-pagination__group__pager-disable",
      ) as NodeList;
      expect(paginationButtons.length).to.equal(1);

      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row ",
      ) as NodeList;
      expect(rowsEl.length).to.equal(5);
    });

    it("should have 4 rows when assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: 4,
      });
      const el = await fixture(container);

      const paginationButtons = el.querySelectorAll(
        ".kuc-base-pagination__group__pager-disable",
      ) as NodeList;
      expect(paginationButtons.length).to.equal(1);

      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row ",
      ) as NodeList;
      expect(rowsEl.length).to.equal(4);
    });

    it("should disable pagination buttons if rowsPerPage larger than the data's length when assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: data.length + 1,
      });
      const el = await fixture(container);

      const paginationButtons = el.querySelectorAll(
        ".kuc-base-pagination__group__pager-disable",
      ) as NodeList;
      expect(paginationButtons.length).to.equal(2);
    });

    it("should disable pagination buttons if rowsPerPage larger than the data's length by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      container.rowsPerPage = data.length + 1;
      const el = await fixture(container);

      const paginationButtons = el.querySelectorAll(
        ".kuc-base-pagination__group__pager-disable",
      ) as NodeList;
      expect(paginationButtons.length).to.equal(2);
    });

    it("should round rowsPerPage to 6 when assigned 5.7 on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: 5.7,
      });
      const el = await fixture(container);

      const paginationButtons = el.querySelectorAll(
        ".kuc-base-pagination__group__pager-disable",
      ) as NodeList;
      expect(paginationButtons.length).to.equal(1);

      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row ",
      ) as NodeList;
      expect(rowsEl.length).to.equal(6);
    });

    it("should round rowsPerPage to 4 when assigned 4.3 on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: 4.3,
      });
      const el = await fixture(container);

      const paginationButtons = el.querySelectorAll(
        ".kuc-base-pagination__group__pager-disable",
      ) as NodeList;
      expect(paginationButtons.length).to.equal(1);

      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row ",
      ) as NodeList;
      expect(rowsEl.length).to.equal(4);
    });

    it("should round rowsPerPage to 6 when set 5.7 by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      container.rowsPerPage = 5.7;
      const el = await fixture(container);

      const paginationButtons = el.querySelectorAll(
        ".kuc-base-pagination__group__pager-disable",
      ) as NodeList;
      expect(paginationButtons.length).to.equal(1);

      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row ",
      ) as NodeList;
      expect(rowsEl.length).to.equal(6);
    });

    it("should round rowsPerPage to 4 when set 4.3 by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      container.rowsPerPage = 4.3;
      const el = await fixture(container);

      const paginationButtons = el.querySelectorAll(
        ".kuc-base-pagination__group__pager-disable",
      ) as NodeList;
      expect(paginationButtons.length).to.equal(1);

      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row ",
      ) as NodeList;
      expect(rowsEl.length).to.equal(4);
    });

    it("should throw error when assigned wrong type by constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal(
          "'rowsPerPage' property is not positive integer.",
        );
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new ReadOnlyTable({ rowsPerPage: "5" });
      fixture(container);
    });

    it("should throw error when assigned wrong type by setter", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal(
          "'rowsPerPage' property is not positive integer.",
        );
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new ReadOnlyTable();
      container.rowsPerPage = "5";
      fixture(container);
    });

    it("should display 1 - 5 / 7 in Pagination on first page when not assigned", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      const el = await fixture(container);

      const currentPageNumberEl = el.querySelector(
        ".kuc-base-pagination__group__pager-current",
      ) as HTMLElement;
      await expect(currentPageNumberEl.textContent).to.equal(`1 - 5 / 7`);
    });

    it("should display 7 - 7 / 7 in Pagination on last page when set 3 ", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: 3,
      });
      const el = await fixture(container);

      const nextEl = el.querySelector(
        "kuc-base-pagination button.kuc-base-pagination__group__pager-next",
      ) as HTMLButtonElement;
      nextEl.click();
      nextEl.click();
      await elementUpdated(el);

      const currentPageNumberEl = el.querySelector(
        ".kuc-base-pagination__group__pager-current",
      ) as HTMLElement;
      await expect(currentPageNumberEl.textContent).to.equal(`7 - 7 / 7`);
    });
  });
});
