import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";

const data = [
  ["Orange", "Ehime"],
  ["Apple", "Aomori"],
];

const replacedData = [
  ["Orange", "Ehime"],
  ["Banana", "Tokyo"],
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
      const container = new ReadOnlyTable({ data });
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row"
      );

      expect(rowsEl.length).to.equal(2);
      expect(rowsEl[0].children[0].textContent?.trim()).to.equal(data[0][0]);
      expect(rowsEl[0].children[1].textContent?.trim()).to.equal(data[0][1]);
      expect(rowsEl[1].children[0].textContent?.trim()).to.equal(data[1][0]);
      expect(rowsEl[1].children[1].textContent?.trim()).to.equal(data[1][1]);
    });

    it("should add rows when assigned by setter", async () => {
      const container = new ReadOnlyTable();
      container.data = data;
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row"
      );

      expect(rowsEl.length).to.equal(2);
      expect(rowsEl[0].children[0].textContent?.trim()).to.equal(data[0][0]);
      expect(rowsEl[0].children[1].textContent?.trim()).to.equal(data[0][1]);
      expect(rowsEl[1].children[0].textContent?.trim()).to.equal(data[1][0]);
      expect(rowsEl[1].children[1].textContent?.trim()).to.equal(data[1][1]);
    });

    it("should be updated rows when replaced by setter", async () => {
      const container = new ReadOnlyTable({ data });
      container.data = replacedData;
      const el = await fixture(container);
      const rowsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__body__row"
      );

      expect(rowsEl.length).to.equal(2);
      expect(rowsEl[0].children[0].textContent?.trim()).to.equal(
        replacedData[0][0]
      );
      expect(rowsEl[0].children[1].textContent?.trim()).to.equal(
        replacedData[0][1]
      );
      expect(rowsEl[1].children[0].textContent?.trim()).to.equal(
        replacedData[1][0]
      );
      expect(rowsEl[1].children[1].textContent?.trim()).to.equal(
        replacedData[1][1]
      );
    });

    it("should throw error when set wrong type on constructor", () => {
      expect(() => {
        // @ts-expect-error
        const container = new ReadOnlyTable({ data: null });
      }).to.throw(Error, "'data' property is invalid");
    });

    it("should throw error when set null array on constructor", () => {
      expect(() => {
        // @ts-expect-error
        const container = new ReadOnlyTable({ data: [null] });
      }).to.throw(Error, "'data' property is invalid");
    });

    it("should be throw error when assigned null by setter", async () => {
      const container = new ReadOnlyTable();
      try {
        // @ts-expect-error
        container.items = null;
        await fixture(container);
      } catch (error) {
        let errorMessage = "'data' property is invalid";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'data' property is invalid");
      }

      // TODO:
      // Implement checking if source code does not throw error in _validateData function
    });
  });
});
