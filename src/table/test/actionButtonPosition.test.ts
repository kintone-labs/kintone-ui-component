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
  describe("actionButtonPosition", () => {
    it("should be right when not assigning on constructor", async () => {
      const container = new Table({ columns: columns, data: data });
      const el = await fixture(container);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action",
      ) as HTMLTableCellElement;
      await expect(
        actionButtonGroup.classList.contains(
          "kuc-table__table__body__row__action--right",
        ),
      ).to.equal(true);
    });

    it("should be left when assigning on constructor", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButtonPosition: "left",
      });
      const el = await fixture(container);
      const actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action",
      ) as HTMLTableCellElement;
      await expect(
        actionButtonGroup.classList.contains(
          "kuc-table__table__body__row__action--left",
        ),
      ).to.equal(true);
    });

    it("should be replaced by 'left' when changed by setter", async () => {
      const container = new Table({
        columns: columns,
        data: data,
        actionButtonPosition: "right",
      });
      const el = await fixture(container);
      let actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action",
      ) as HTMLTableCellElement;
      await expect(
        actionButtonGroup.classList.contains(
          "kuc-table__table__body__row__action--right",
        ),
      ).to.equal(true);

      container.actionButtonPosition = "left";
      await elementUpdated(el);
      actionButtonGroup = el.querySelector(
        ".kuc-table__table__body__row__action",
      ) as HTMLTableCellElement;
      await expect(
        actionButtonGroup.classList.contains(
          "kuc-table__table__body__row__action--left",
        ),
      ).to.equal(true);
    });
  });
});
