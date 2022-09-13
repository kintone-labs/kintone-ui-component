import { expect, fixture } from "@open-wc/testing";
import { Table } from "../index";
import { Dropdown } from "../../dropdown";

const renderGender = (cellData: any) => {
  const dropdown = new Dropdown({
    id: "dropdown-gender",
    items: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ],
    value: cellData,
  });
  return dropdown;
};
const columns = [
  { field: "name", title: "Name" },
  { field: "age", title: "Age" },
  { field: "gender", title: "Gender", render: renderGender },
];
const data = [
  {
    name: "sample1",
    age: 1,
    gender: "male",
    address: { city: "hcm", country: "vn" },
  },
  {
    name: "sample2",
    age: 2,
    gender: "female",
    address: { city: "tokyo", country: "ja" },
  },
];

describe("Table", () => {
  describe("changeEvent", () => {
    it("should dispatch change event when click remove row button", async () => {
      let triggeredEvent: any = null;
      const container = new Table({ columns: [...columns], data: [...data] });
      container.addEventListener("change", (event: Event) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const addRowButton = el.querySelectorAll(
        ".kuc-table__table__body__row__action-add"
      );
      const tableEl = el.querySelector(".kuc-table__table") as HTMLTableElement;
      expect(tableEl.rows.length).to.equal(3);
      expect(container.data.length).to.equal(2);

      (addRowButton[0] as HTMLButtonElement).click();
      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldData.length).to.equal(2);
      expect(triggeredEvent.detail.data.length).to.equal(3);
      expect(triggeredEvent.detail.rowIndex).to.equal(1);
      expect(triggeredEvent.detail.type).to.equal("add-row");
      expect(tableEl.rows.length).to.equal(4);
      expect(container.data.length).to.equal(3);
    });

    it("should dispatch change event when click remove row button", async () => {
      let triggeredEvent: any = null;
      const container = new Table({ columns: [...columns], data: [...data] });
      container.addEventListener("change", (event: Event) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const removeRowButton = el.querySelectorAll(
        ".kuc-table__table__body__row__action-remove"
      );
      const tableEl = el.querySelector(".kuc-table__table") as HTMLTableElement;
      expect(tableEl.rows.length).to.equal(3);
      expect(container.data.length).to.equal(2);

      (removeRowButton[0] as HTMLButtonElement).click();
      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldData.length).to.equal(2);
      expect(triggeredEvent.detail.data.length).to.equal(1);
      expect(triggeredEvent.detail.rowIndex).to.equal(1);
      expect(triggeredEvent.detail.type).to.equal("remove-row");
      expect(tableEl.rows.length).to.equal(2);
      expect(container.data.length).to.equal(1);
    });

    it("should dispatch change event when change component inside cell", async () => {
      let triggeredEvent: any = null;
      const container = new Table({ columns: [...columns], data: [...data] });
      container.addEventListener("change", (event: Event) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const removeRowButton = el.querySelectorAll(
        ".kuc-table__table__body__row__action-remove"
      );
      const tableEl = el.querySelector(".kuc-table__table") as HTMLTableElement;
      const dropDownGender = el.querySelector("#dropdown-gender") as any;
      expect(tableEl.rows.length).to.equal(3);
      expect(container.data.length).to.equal(2);

      dropDownGender.dispatchEvent(
        new CustomEvent("change", {
          detail: { value: "female", oldValue: "male" },
          bubbles: true,
          cancelable: true,
        })
      );

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldData.length).to.equal(2);
      expect(triggeredEvent.detail.data.length).to.equal(2);
      expect(triggeredEvent.detail.rowIndex).to.equal(0);
      expect(triggeredEvent.detail.field).to.equal("gender");
      expect(triggeredEvent.detail.type).to.equal("change-cell");
      expect(tableEl.rows.length).to.equal(3);
      expect(container.data.length).to.equal(2);
    });
  });
});
