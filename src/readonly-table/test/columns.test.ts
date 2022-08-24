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

const replaceColumns = [
  {
    headerName: "New col 1",
    field: "index",
    visible: true,
  },
  {
    headerName: "New col 2",
    field: "name",
    visible: true,
  },
];

const columnsWithoutHeader = [
  { visible: true },
  { visible: true },
  { visible: false },
];

const columnsWithoutVisible = [
  {
    headerName: "Number",
    field: "index",
  },
  {
    headerName: "City",
    field: "name",
  },
  {
    headerName: "Country",
    field: "country",
  },
];

describe("ReadOnlyTable", () => {
  describe("Columns", () => {
    it("should be empty when not assigned on constructor", async () => {
      const container = new ReadOnlyTable();
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header tr th "
      );
      expect(columnsEl.length).to.equal(0);
    });

    it("should be visible when assign columns with only visible props on constructor", async () => {
      const container = new ReadOnlyTable({ columns: columnsWithoutHeader });
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header tr th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(true);
      expect(columnsEl[2].textContent?.trim()).to.equal("");
    });

    it("should be visible when assign columns without visible props on constructor", async () => {
      const container = new ReadOnlyTable({ columns: columnsWithoutVisible });
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header tr th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("Number");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("City");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[2].textContent?.trim()).to.equal("Country");
    });

    it("should be visible when assign columns with only visible props by setter", async () => {
      const container = new ReadOnlyTable({});
      container.columns = columnsWithoutHeader;
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header tr th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(true);
      expect(columnsEl[2].textContent?.trim()).to.equal("");
    });

    it("should be visible when assign columns without visible props by setter", async () => {
      const container = new ReadOnlyTable();
      container.columns = columnsWithoutVisible;
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header tr th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("Number");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("City");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[2].textContent?.trim()).to.equal("Country");
    });

    it("should be fully working when assign columns with all props by constructor", async () => {
      const container = new ReadOnlyTable({ columns: columns });
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header tr th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("Number");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("City");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(true);
      expect(columnsEl[2].textContent?.trim()).to.equal("Country");
    });

    it("should be fully working when assign columns with all props by setter", async () => {
      const container = new ReadOnlyTable();
      container.columns = columns;
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header tr th"
      );

      expect(columnsEl.length).to.equal(3);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("Number");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("City");
      expect(columnsEl[2].hasAttribute("hidden")).to.equal(true);
      expect(columnsEl[2].textContent?.trim()).to.equal("Country");
    });

    it("should update header when change columns by setter", async () => {
      const container = new ReadOnlyTable({
        columns: columns,
      });

      container.columns = replaceColumns;

      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-readonly-table__table__header tr th"
      );

      expect(columnsEl.length).to.equal(2);
      expect(columnsEl[0].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[0].textContent?.trim()).to.equal("New col 1");
      expect(columnsEl[1].hasAttribute("hidden")).to.equal(false);
      expect(columnsEl[1].textContent?.trim()).to.equal("New col 2");
    });
  });

  it("should throw error when assigned wrong type on constructor", (done) => {
    const handleError = (event: any) => {
      const errorMsg = event.reason.message;
      expect(errorMsg).to.equal("'columns' property is not an array.");
      window.removeEventListener("unhandledrejection", handleError);
      done();
    };
    window.addEventListener("unhandledrejection", handleError);

    const container = new ReadOnlyTable({ columns: null });
    fixture(container);
  });

  it("should throw error when assign wrong type by setter", (done) => {
    const handleError = (event: any) => {
      const errorMsg = event.reason.message;
      expect(errorMsg).to.equal("'columns' property is not an array.");
      window.removeEventListener("unhandledrejection", handleError);
      done();
    };
    window.addEventListener("unhandledrejection", handleError);

    const container = new ReadOnlyTable({});
    container.columns = null;
    fixture(container);
  });
});
