import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Dropdown } from "../../dropdown";
import { Text } from "../../text";
import { Table } from "../index";

const renderAge = (cellData: any) => {
  const text = new Text({ value: cellData });
  return text;
};

const renderName = (cellData: any) => {
  const dropdown = new Dropdown({
    items: [
      {
        label: "David",
        value: "David",
      },
      {
        label: "Thomas",
        value: "Thomas",
      },
    ],
    value: cellData,
  });
  return dropdown;
};

const columns = [
  { field: "name", title: "Name" },
  { field: "age", title: "Age" },
];
const data = [
  { name: "David", age: 20 },
  { name: "Thomas", age: 30 },
];

const replacedColumns = [
  { field: "city", title: "City" },
  { field: "country", title: "Country" },
];
const columnsWithoutField = [{ title: "Name" }, { title: "Age" }];
const columnsWithoutTitle = [{ field: "name" }, { field: "age" }];
const columnsDuplicationField = [{ field: "name" }, { field: "name" }];
const columnsWithRender = [
  { field: "name", title: "Name", render: renderName },
  { field: "age", title: "Age", render: renderAge },
];

describe("Table", () => {
  describe("columns", () => {
    it("should be empty header when not assigned on constructor", async () => {
      const container = new Table();
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(".kuc-table__table__header th");
      expect(columnsEl.length).to.equal(0);
    });

    it("should be set header when assigned columns without title prop on constructor", async () => {
      const container = new Table({ data: data, columns: columnsWithoutTitle });
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-table__table__header__cell .kuc-table__table__header__cell-title",
      );

      expect(columnsEl.length).to.equal(2);
      expect((columnsEl[0] as HTMLDivElement).innerText).to.equal("");
      expect((columnsEl[1] as HTMLDivElement).innerText).to.equal("");
    });

    it("should be set header when assigned columns without title prop by setter", async () => {
      const container = new Table();
      container.columns = columnsWithoutTitle;
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-table__table__header th .kuc-table__table__header__cell-title",
      );

      expect(columnsEl.length).to.equal(2);
      expect((columnsEl[0] as HTMLDivElement).innerText).to.equal("");
      expect((columnsEl[1] as HTMLDivElement).innerText).to.equal("");
    });

    it("should be set header when assigned columns without render props on constructor", async () => {
      const container = new Table({ columns: columns });
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-table__table__header th .kuc-table__table__header__cell-title",
      );

      expect(columnsEl.length).to.equal(2);
      expect((columnsEl[0] as HTMLDivElement).innerText).to.equal("Name");
      expect((columnsEl[1] as HTMLDivElement).innerText).to.equal("Age");
    });

    it("should be set header when assigned columns with render function on constructor", async () => {
      const container = new Table();
      container.columns = columnsWithRender;
      container.data = data;
      const el = await fixture(container);
      const tBodyEl = el.querySelector(".kuc-table__table__body");
      const tableEl = el.querySelector(".kuc-table__table") as HTMLTableElement;
      const firstRow = tableEl.rows[1] as HTMLTableRowElement;
      const secondRow = tableEl.rows[2] as HTMLTableRowElement;

      const firstDropdown = firstRow?.cells[0].querySelector(
        "kuc-dropdown",
      ) as any;
      const secondDropdown = secondRow?.cells[0].querySelector(
        "kuc-dropdown",
      ) as any;
      const firstText = firstRow?.cells[1].querySelector("kuc-text") as any;
      const secondText = secondRow?.cells[1].querySelector("kuc-text") as any;

      expect(tBodyEl?.children.length).to.equal(data.length);
      expect(firstDropdown.value).to.equal("David");
      expect(firstText.value).to.equal(20);
      expect(secondDropdown.value).to.equal("Thomas");
      expect(secondText.value).to.equal(30);
    });

    it("should be updated header when changed columns by setter", async () => {
      const div = document.createElement("div");
      const table = new Table({
        columns: columns,
      });
      const btnChangeColumns = document.createElement("button");
      btnChangeColumns.addEventListener("click", () => {
        table.columns = replacedColumns;
      });

      div.appendChild(table);
      div.appendChild(btnChangeColumns);

      const el = await fixture(div);
      const columnsEl = el.querySelectorAll(
        ".kuc-table__table__header th .kuc-table__table__header__cell-title",
      );
      btnChangeColumns.click();

      await elementUpdated(el);

      expect(columnsEl.length).to.equal(2);
      expect((columnsEl[0] as HTMLDivElement).innerText).to.equal("City");
      expect((columnsEl[1] as HTMLDivElement).innerText).to.equal("Country");
    });

    it("should be throw error when assigned null to columns", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'columns' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Table({ columns: null });
      fixture(container);
    });

    it("should be throw error when assigned string to columns", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'columns' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Table({ columns: "columns" });
      fixture(container);
    });

    it("should be throw error when assigned column without field prop on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal(
          "'field' property is not specified in columns.",
        );
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Table({ columns: columnsWithoutField });
      fixture(container);
    });

    it("should be throw error when assigned column with duplication field prop on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'field' property is not unique in columns.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Table({ columns: columnsDuplicationField });
      fixture(container);
    });

    it("should be set header when assigned columns with HTML title prop", async () => {
      const container = new Table({
        columns: [
          { field: "name", title: "<button id='name_button'>Name</button>" },
        ],
      });
      const el = await fixture(container);
      const columnsEl = el.querySelectorAll(
        ".kuc-table__table__header th .kuc-table__table__header__cell-title",
      );

      expect(columnsEl.length).to.equal(1);
      expect((columnsEl[0] as HTMLDivElement).children[0].id).to.equal(
        "name_button",
      );
    });
  });
});
