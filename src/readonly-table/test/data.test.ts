import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";

const data = [
  {
    index: "1",
    name: "Tokyo",
    country: "Japan",
    population: "14,000,000",
  },
  {
    index: "2",
    name: "Ho Chi Minh",
    country: "Vietnam",
    population: "9,000,000",
  },
];

const replacedData = [
  {
    index: "6",
    name: "Calgary",
    country: "Canada",
    population: "1,336,000",
  },
  {
    index: "7",
    name: "Vancouver",
    country: "Canada",
    population: "675,000",
  },
];

const columns = [
  {
    headerName: "Number",
    field: "index",
  },
  {
    headerName: "City",
    field: "name",
  },
];

describe("ReadOnlyTable", () => {
  describe("data", () => {
    it("should be empty body when not assigned on constructor", async () => {
      const container = new ReadOnlyTable();
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row"
      );
      expect(rowsEl.length).to.equal(0);
    });

    it("should add rows when assigned on constructor", async () => {
      const container = new ReadOnlyTable({ columns: columns, data: data });
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row"
      );

      expect(rowsEl.length).to.equal(2);
      expect(rowsEl[0].children[0].textContent?.trim()).to.equal(data[0].index);
      expect(rowsEl[0].children[1].textContent?.trim()).to.equal(data[0].name);
      expect(rowsEl[1].children[0].textContent?.trim()).to.equal(data[1].index);
      expect(rowsEl[1].children[1].textContent?.trim()).to.equal(data[1].name);
    });

    it("should add rows when assigned by setter", async () => {
      const container = new ReadOnlyTable({ columns: columns, data: data });
      container.data = data;
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row"
      );

      expect(rowsEl.length).to.equal(2);
      expect(rowsEl[0].children[0].textContent?.trim()).to.equal(data[0].index);
      expect(rowsEl[0].children[1].textContent?.trim()).to.equal(data[0].name);
      expect(rowsEl[1].children[0].textContent?.trim()).to.equal(data[1].index);
      expect(rowsEl[1].children[1].textContent?.trim()).to.equal(data[1].name);
    });

    it("should be updated rows when replaced by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
        data: replacedData,
      });
      const el = await fixture(container);
      container.data = replacedData;
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row"
      );

      expect(rowsEl.length).to.equal(2);
      expect(rowsEl[0].children[0].textContent?.trim()).to.equal(
        replacedData[0].index
      );
      expect(rowsEl[0].children[1].textContent?.trim()).to.equal(
        replacedData[0].name
      );
      expect(rowsEl[1].children[0].textContent?.trim()).to.equal(
        replacedData[1].index
      );
      expect(rowsEl[1].children[1].textContent?.trim()).to.equal(
        replacedData[1].name
      );
    });

    it("should throw error when set wrong type on constructor", async () => {
      const container = new ReadOnlyTable({ columns: columns, data: null });
      try {
        await fixture(container);
      } catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.be.equal("'data' property is not an array.");
      }
    });

    it("should throw error when set null array on constructor", async () => {
      const container = new ReadOnlyTable({ columns: columns, data: [null] });
      try {
        await fixture(container);
      } catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.be.equal("'data' property is not an array.");
      }
    });

    it("should be throw error when assigned null by setter", async () => {
      const container = new ReadOnlyTable();
      try {
        await fixture(container);
        container.data = [null];
      } catch (error) {
        let errorMessage = "'data' property is not an array.";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'data' property is not an array.");
      }

      // TODO:
      // Implement checking if source code does not throw error in _validateData function
    });
  });
});
