import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Table } from "../index";

const columns = [
  { field: "name", title: "Name" },
  { field: "age", title: "Age" },
];
const data = [
  { name: "David", age: 20 },
  { name: "Thomas", age: 30 },
];

describe("Table", () => {
  describe("actionButton", () => {
    it("should be display when not assigned in constructor", async () => {
      const container = new Table({ columns: columns, data: data });
      const el = await fixture(container);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action"
      ) as HTMLTableCellElement;
      expect(actionButtonGroup.hasAttribute("hidden")).to.equal(false);
    });

    it("should be display block when assigned false in constructor", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButton: false,
      });
      const el = await fixture(container);
      await elementUpdated(el);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action"
      ) as HTMLTableCellElement;
      expect(actionButtonGroup).to.equal(null);
    });

    it("should be display block when changed to true by setter", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButton: false,
      });
      container.actionButton = true;
      const el = await fixture(container);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action"
      ) as HTMLTableCellElement;
      expect(actionButtonGroup.hasAttribute("hidden")).to.equal(false);
    });

    it("should be display none when changed to false by setter", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButton: true,
      });
      container.actionButton = false;
      const el = await fixture(container);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action"
      ) as HTMLTableCellElement;
      expect(actionButtonGroup).to.equal(null);
    });
  });
});
