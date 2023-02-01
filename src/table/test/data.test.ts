import { expect, fixture } from "@open-wc/testing";

import { Table } from "../index";

const columns = [
  { field: "name", title: "Name" },
  { field: "age", title: "Age" },
];

const data = [
  { name: "David", age: 20 },
  { name: "Thomas", age: 30 },
];

const replacedData = [
  { name: "Robert", age: 40 },
  { name: "John", age: 50 },
];

describe("Table", () => {
  describe("data", () => {
    it("should be empty body when not assigned on constructor", async () => {
      const container = new Table({ columns: columns });
      const el = await fixture(container);
      const tBodyEl = el.querySelector(".kuc-table__table__body");
      expect(tBodyEl?.children.length).to.equal(0);
    });

    it("should be add data to table when assigned on constructor", async () => {
      const container = new Table({ columns: columns, data: data });
      const el = await fixture(container);
      const tBodyEl = el.querySelector(".kuc-table__table__body");
      const tableEl = el.querySelector(".kuc-table__table") as HTMLTableElement;
      const firstRow = tableEl.rows[1] as HTMLTableRowElement;
      const secondRow = tableEl.rows[2] as HTMLTableRowElement;

      expect(tBodyEl?.children.length).to.equal(data.length);
      expect(firstRow?.cells[0].innerText).to.equal(data[0].name);
      expect(firstRow?.cells[1].innerText).to.equal(data[0].age.toString());
      expect(secondRow?.cells[0].innerText).to.equal(data[1].name);
      expect(secondRow?.cells[1].innerText).to.equal(data[1].age.toString());
    });

    it("should set items when assigned items by setter", async () => {
      const container = new Table({ columns: columns });
      container.data = data;
      const el = await fixture(container);
      const tBodyEl = el.querySelector(".kuc-table__table__body");
      const tableEl = el.querySelector(".kuc-table__table") as HTMLTableElement;
      const firstRow = tableEl.rows[1] as HTMLTableRowElement;
      const secondRow = tableEl.rows[2] as HTMLTableRowElement;

      expect(tBodyEl?.children.length).to.equal(data.length);
      expect(firstRow?.cells[0].innerText).to.equal(data[0].name);
      expect(firstRow?.cells[1].innerText).to.equal(data[0].age.toString());
      expect(secondRow?.cells[0].innerText).to.equal(data[1].name);
      expect(secondRow?.cells[1].innerText).to.equal(data[1].age.toString());
    });

    it("should be changed when updated data by setter", async () => {
      const container = new Table({ columns: columns, data: data });
      container.data = replacedData;

      const el = await fixture(container);
      const tBodyEl = el.querySelector(".kuc-table__table__body");
      const tableEl = el.querySelector(".kuc-table__table") as HTMLTableElement;
      const firstRow = tableEl.rows[1] as HTMLTableRowElement;
      const secondRow = tableEl.rows[2] as HTMLTableRowElement;

      expect(tBodyEl?.children.length).to.equal(replacedData.length);
      expect(firstRow?.cells[0].innerText).to.equal(replacedData[0].name);
      expect(firstRow?.cells[1].innerText).to.equal(
        replacedData[0].age.toString()
      );
      expect(secondRow?.cells[0].innerText).to.equal(replacedData[1].name);
      expect(secondRow?.cells[1].innerText).to.equal(
        replacedData[1].age.toString()
      );
    });

    it("should be throw error when assigned null on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'data' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Table({ columns: columns, data: null });
      fixture(container);
    });

    it("should be throw error when assigned null by setter", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'data' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new Table({ columns: columns, data: data });
      container.data = null;
      fixture(container);
    });
  });
});
