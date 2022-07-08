import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";

const columns = [
  { header: { text: "Fruit" }, visible: true },
  { header: { text: "Producing Area" }, visible: true },
  { header: { text: "Price" }, visible: false },
];

const columnsWithoutHeader = [
  { visible: true },
  { visible: true },
  { visible: false },
];

const columnsWithoutVisible = [
  { header: { text: "Fruit" } },
  { header: { text: "Producing Area" } },
  { header: { text: "Price" } },
];

describe("ReadOnlyTable", () => {
  describe("data", () => {
    it("should be empty header when not assigned on constructor", async () => {
      const container = new ReadOnlyTable();
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header th"
      );
      expect(columnsEl.length).to.equal(0);
    });

    it("should be set header when assigned columns without header prop on constructor", async () => {
      const container = new ReadOnlyTable({ columns: columnsWithoutHeader });
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(true);
      expect(columnsEl[2].textContent?.trim()).to.equal("");
    });

    it("should be set header when assigned columns without visible prop on constructor", async () => {
      const container = new ReadOnlyTable({ columns: columnsWithoutVisible });
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("Fruit");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("Producing Area");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[2].textContent?.trim()).to.equal("Price");
    });

    it("should be set header when assigned columns without header prop by setter", async () => {
      const container = new ReadOnlyTable();
      container.columns = columnsWithoutHeader;
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(true);
      expect(columnsEl[2].textContent?.trim()).to.equal("");
    });

    it("should be set header when assigned columns without visible prop by setter", async () => {
      const container = new ReadOnlyTable();
      container.columns = columnsWithoutVisible;
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("Fruit");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("Producing Area");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[2].textContent?.trim()).to.equal("Price");
    });

    it("should be set header when assigned columns with full optional props on constructor", async () => {
      const container = new ReadOnlyTable({ columns });
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("Fruit");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("Producing Area");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(true);
      expect(columnsEl[2].textContent?.trim()).to.equal("Price");
    });

    it("should be set header when assigned columns with full optional props by setter", async () => {
      const container = new ReadOnlyTable();
      container.columns = columns;
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("Fruit");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("Producing Area");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(true);
      expect(columnsEl[2].textContent?.trim()).to.equal("Price");
    });

    it("should be updated header when changed columns by setter", async () => {
      const container = new ReadOnlyTable({
        columns: [{ header: { text: "Price" }, visible: false }],
      });

      const newColumns = [
        { header: { text: "Fruit" }, visible: true },
        { header: { text: "Producing Area" }, visible: true },
      ];
      container.columns = newColumns;

      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header th"
      );

      expect(columnsEl.length).to.equal(2);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("Fruit");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("Producing Area");
    });
  });

  it("should throw error when assigned wrong type on constrcutor", () => {
    expect(() => {
      // @ts-expect-error
      const container = new ReadOnlyTable({ columns: null });
    }).to.throw(Error, "'columns' property is invalid");
  });

  it("should be throw error when assigned null by setter", async () => {
    const container = new ReadOnlyTable();
    try {
      // @ts-expect-error
      container.items = null;
      await fixture(container);
    } catch (error) {
      let errorMessage = "'columns' property is invalid";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      expect(errorMessage).to.equal("'columns' property is invalid");
    }

    // TODO:
    // Implement checking if source code does not throw error in _validateColumns function
  });
});
