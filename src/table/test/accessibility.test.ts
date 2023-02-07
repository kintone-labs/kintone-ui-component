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

describe("Table", () => {
  describe("accessibility", () => {
    it("should be hidden remove button and focus add button when the data length is 1", async () => {
      let triggeredEvent: any = null;
      const container = new Table({ columns: [...columns], data: [...data] });
      const el = await fixture(container);
      const removeRowButtons = el.querySelectorAll(
        ".kuc-table__table__body__row__action-remove"
      );
      const firstBtnAddRow = el.querySelector(
        ".kuc-table__table__body__row__action-add"
      ) as HTMLButtonElement;
      firstBtnAddRow.addEventListener("focus", (e) => {
        triggeredEvent = e;
      });
      (removeRowButtons[1] as HTMLButtonElement).click();
      const firstRemoveRowButton = el.querySelector(
        ".kuc-table__table__body__row__action-remove"
      ) as HTMLButtonElement;
      expect(triggeredEvent.type).to.equal("focus");
      expect(firstRemoveRowButton.style.display).to.equal("none");
      expect(container.data.length).to.equal(1);
    });
  });
});
