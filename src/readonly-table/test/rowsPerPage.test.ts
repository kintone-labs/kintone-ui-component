import { expect, fixture } from "@open-wc/testing";
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
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      );
      expect(rowsEl.length).to.equal(5);
    });

    it("should have 4 rows by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: 4,
      });
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      );
      expect(rowsEl.length).to.equal(4);
    });

    it("should disable pagination next and prev buttons if rowsPerPage larger than the data's length when assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: data.length + 1,
      });
      const el = await fixture(container);
      const paginationButtons = el.querySelectorAll(".pager-disable");
      expect(paginationButtons.length).to.equal(2);
    });

    it("should disable pagination buttons if rowsPerPage larger than the data's length by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: data.length + 1,
      });
      const el = await fixture(container);
      const paginationButtons = el.querySelectorAll(".pager-disable");
      expect(paginationButtons.length).to.equal(2);
    });

    it("should set rowsPerPage to 5 if rowsPerPage is not a number when assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: "not a number",
      });
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      );
      expect(rowsEl.length).to.equal(5);
    });

    it("should set rowsPerPage to 5 if rowsPerPage is 0 when assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: 0,
      });
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      );
      expect(rowsEl.length).to.equal(5);
    });

    it("should set rowsPerPage to 5 if rowsPerPage is negative when assigned on constructor", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
        rowsPerPage: -7,
      });
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      );
      expect(rowsEl.length).to.equal(5);
    });

    it("should set rowsPerPage to 5 if rowsPerPage is not a number when set by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      container.rowsPerPage = "hello";
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      );
      expect(rowsEl.length).to.equal(5);
    });

    it("should set rowsPerPage to 5 if rowsPerPage is 0 when set by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      container.rowsPerPage = 0;
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      );
      expect(rowsEl.length).to.equal(5);
    });

    it("should set rowsPerPage to 5 if rowsPerPage is negative when set by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: data,
      });
      container.rowsPerPage = -7;
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row "
      );
      expect(rowsEl.length).to.equal(5);
    });
  });
});
