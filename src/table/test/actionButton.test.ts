import { expect, fixture } from "@open-wc/testing";
import { Table } from "../index";

const columns = [
  { field: "name", title: "Name" },
  { field: "age", title: "Age" },
];
const data = [
  { name: "sample1", age: 1 },
  { name: "sample2", age: 2 },
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
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action"
      ) as HTMLTableCellElement;
      expect(actionButtonGroup.hasAttribute("hidden")).to.equal(true);
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
      expect(actionButtonGroup.hasAttribute("hidden")).to.equal(true);
    });
  });
});
