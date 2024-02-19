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

const titleDeleteRow = "Delete this row";
const titleAddRow = "Add row";

describe("Table", () => {
  describe("actionButton", () => {
    it("should be displayed when not assigned in constructor", async () => {
      const container = new Table({ columns: columns, data: data });
      const el = await fixture(container);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action",
      ) as HTMLTableCellElement;
      await expect(actionButtonGroup.hasAttribute("hidden")).to.equal(false);
    });

    it("should not be displayed when assigned false in constructor", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButton: false,
      });
      const el = await fixture(container);
      await elementUpdated(el);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action",
      ) as HTMLTableCellElement;
      await expect(actionButtonGroup).to.equal(null);
    });

    it("should be displayed when changed to true by setter", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButton: false,
      });
      container.actionButton = true;
      const el = await fixture(container);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action",
      ) as HTMLTableCellElement;
      await expect(actionButtonGroup.hasAttribute("hidden")).to.equal(false);
    });

    it("should not be displayed when changed to false by setter", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButton: true,
      });
      container.actionButton = false;
      const el = await fixture(container);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action",
      ) as HTMLTableCellElement;
      await expect(actionButtonGroup).to.equal(null);
    });

    it("should not be displayed when assigned 'add: false, remove: false' in constructor", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButton: { add: false, remove: false },
      });
      const el = await fixture(container);
      await elementUpdated(el);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action",
      ) as HTMLTableCellElement;
      await expect(actionButtonGroup).to.equal(null);
    });

    it("should not display 'add' button when assigned 'add: false' in constructor", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButton: { add: false },
      });
      const el = await fixture(container);
      await elementUpdated(el);
      const addButton = el.querySelector(
        ".kuc-table__table__body__row__action-add",
      ) as HTMLButtonElement;
      await expect(addButton).to.equal(null);
      const removeButton = el.querySelector(
        ".kuc-table__table__body__row__action-remove",
      ) as HTMLButtonElement;
      await expect(removeButton.getAttribute("title")).to.equal(titleDeleteRow);
    });

    it("should not display 'add' button when changed to 'add: false' by setter", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButton: { add: true },
      });
      const el = await fixture(container);
      await elementUpdated(el);
      let addButton = el.querySelector(
        ".kuc-table__table__body__row__action-add",
      ) as HTMLButtonElement;
      await expect(addButton.getAttribute("title")).to.equal(titleAddRow);
      let removeButton = el.querySelector(
        ".kuc-table__table__body__row__action-remove",
      ) as HTMLButtonElement;
      await expect(removeButton.getAttribute("title")).to.equal(titleDeleteRow);

      container.actionButton = { add: false };
      await elementUpdated(el);
      addButton = el.querySelector(
        ".kuc-table__table__body__row__action-add",
      ) as HTMLButtonElement;
      await expect(addButton).to.equal(null);
      removeButton = el.querySelector(
        ".kuc-table__table__body__row__action-remove",
      ) as HTMLButtonElement;
      await expect(removeButton.getAttribute("title")).to.equal(titleDeleteRow);
    });
  });
});
