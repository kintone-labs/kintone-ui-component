import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";

describe("confirm data default value is not set", () => {
  const container = new ReadOnlyTable();

  it("confirm data default value is not set", async () => {
    const el = await fixture(container);
    const dataEl = el.querySelector(".kuc-readonly-table__table__body")!
      .children as HTMLCollection;
    await expect(dataEl.length).to.be.equal(0);
  });
});

describe("data constructor set successfully", () => {
  const expectedData = [
    ["Orange", "Ehime"],
    ["Apple", "Aomori"]
  ];

  const container = new ReadOnlyTable({ data: expectedData });

  it("data constructor set successfully", async () => {
    const el = await fixture(container);
    const dataEl = el.querySelector(".kuc-readonly-table__table__body")!
      .children as HTMLCollection;
    for (let i = 0; i < dataEl.length; i++) {
      for (let j = 0; j < dataEl[i].children.length; j++) {
        const datumEl = dataEl[i].children[j] as HTMLTableDataCellElement;
        const value = datumEl.textContent?.trim();
        await expect(value).to.have.equal(expectedData[i][j]);
      }
    }
  });
});

describe("data prop set successfully", () => {
  const expectedData = [
    ["Orange", "Ehime"],
    ["Apple", "Aomori"]
  ];

  const container = new ReadOnlyTable({});
  container.data = expectedData;

  it("data prop set successfully", async () => {
    const el = await fixture(container);
    const dataEl = el.querySelector(".kuc-readonly-table__table__body")!
      .children as HTMLCollection;
    for (let i = 0; i < dataEl.length; i++) {
      for (let j = 0; j < dataEl[i].children.length; j++) {
        const datumEl = dataEl[i].children[j] as HTMLTableDataCellElement;
        const value = datumEl.textContent?.trim();
        await expect(value).to.have.equal(expectedData[i][j]);
      }
    }
  });
});

describe("data prop replace successfully", () => {
  const expectedData = [
    ["Orange", "Ehime"],
    ["Apple", "Aomori"]
  ];

  const container = new ReadOnlyTable({ data: expectedData });
  const newData = [
    ["Orange", "Ehime"],
    ["Banana", "Tokyo"]
  ];
  container.data = newData;

  it("data prop replace successfully", async () => {
    const el = await fixture(container);
    const dataEl = el.querySelector(".kuc-readonly-table__table__body")!
      .children as HTMLCollection;
    for (let i = 0; i < dataEl.length; i++) {
      for (let j = 0; j < dataEl[i].children.length; j++) {
        const datumEl = dataEl[i].children[j] as HTMLTableDataCellElement;
        const value = datumEl.textContent?.trim();
        await expect(value).to.have.equal(newData[i][j]);
      }
    }
  });
});

describe("throw error when set by constructor", () => {
  it("have data which is not array", async () => {
    await expect(() => {
      const container = new ReadOnlyTable({
        // @ts-ignore
        data: null
      });
    }).to.throw(Error, "'data' property is invalid");
  });
});

describe("throw error when set by prop", () => {
  it("have data which is not array", async () => {
    await expect(() => {
      const container = new ReadOnlyTable({});
      // @ts-ignore
      container.data = null;
    }).to.throw(Error, "'data' property is invalid");
  });
});
