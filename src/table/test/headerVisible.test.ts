import { expect, fixture } from "@open-wc/testing";

import { Dropdown } from "../../dropdown";
import { Table } from "../index";

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
    name: "David",
    age: 1,
    gender: "male",
    address: { city: "hcm", country: "vn" },
    hobby: ["game", "flower"],
  },
  {
    name: "Mary",
    age: 2,
    gender: "female",
    address: { city: "tokyo", country: "ja" },
    hobby: ["music"],
  },
  {
    name: "Linda",
    age: 3,
    gender: "female",
    address: { city: "tokyo", country: "ja" },
    hobby: ["flower"],
  },
];
describe("Table", () => {
  describe("headerVisible", () => {
    it("should be displayed when not assigned in constructor", async () => {
      const container = new Table({ columns: [...columns], data: [...data] });
      const el = await fixture(container);
      const tableHeader = el.querySelector(
        ".kuc-table__table__header",
      ) as HTMLDivElement;
      expect(tableHeader.hasAttribute("hidden")).to.equal(false);
    });
    it("should be displayed none when assigned false in constructor", async () => {
      const container = new Table({
        columns: [...columns],
        data: [...data],
        headerVisible: false,
      });
      const el = await fixture(container);
      const tableHeader = el.querySelector(
        ".kuc-table__table__header",
      ) as HTMLDivElement;
      expect(tableHeader.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(tableHeader);
      expect(computedStyle.display).to.equal("none");
    });
    it("should be displayed when changed to true by setter", async () => {
      const container = new Table({
        columns: [...columns],
        data: [...data],
        headerVisible: false,
      });
      container.headerVisible = true;
      const el = await fixture(container);
      const tableHeader = el.querySelector(
        ".kuc-table__table__header",
      ) as HTMLDivElement;
      expect(tableHeader.hasAttribute("hidden")).to.equal(false);
    });
    it("should be displayed none when changed to false by setter", async () => {
      const container = new Table({
        columns: [...columns],
        data: [...data],
        headerVisible: true,
      });
      container.headerVisible = false;
      const el = await fixture(container);
      const tableHeader = el.querySelector(
        ".kuc-table__table__header",
      ) as HTMLDivElement;
      expect(tableHeader.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(tableHeader);
      expect(computedStyle.display).to.equal("none");
    });
  });
});
