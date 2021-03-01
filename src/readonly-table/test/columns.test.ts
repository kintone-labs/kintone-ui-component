import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";

describe("confirm columns default value is not set", () => {
  const container = new ReadOnlyTable();

  it("confirm columns default value is not set", async () => {
    const el = await fixture(container);
    const columnsEl = el.querySelector(".kuc-readonly-table__table__header")!
      .children as HTMLCollection;
    await expect(columnsEl[0].children.length).to.be.equal(0);
  });
});

describe("columns constructor set successfully without header prop", () => {
  const container = new ReadOnlyTable({
    columns: [
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: false
      }
    ]
  });

  it("columns constructor set successfully without header prop", async () => {
    const el = await fixture(container);
    const columnsEl = el.querySelector(".kuc-readonly-table__table__header")!
      .children as HTMLCollection;
    for (let i = 0; i < columnsEl[0].children.length; i++) {
      const columnEl = columnsEl[0].children[i] as HTMLTableHeaderCellElement;
      if (i === 2) {
        await expect(columnEl.hasAttribute("hidden")).to.have.equal(true);
      } else {
        await expect(columnEl.hasAttribute("hidden")).to.have.equal(false);
      }
      const value = columnEl.textContent?.trim();
      await expect(value).to.have.equal("");
    }
  });
});

describe("columns constructor set successfully without visible prop", () => {
  const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
  const container = new ReadOnlyTable({
    columns: [
      {
        header: {
          text: expectedHeaderTexts[0]
        }
      },
      {
        header: {
          text: expectedHeaderTexts[1]
        }
      },
      {
        header: {
          text: expectedHeaderTexts[2]
        }
      }
    ]
  });

  it("columns constructor set successfully without visible prop", async () => {
    const el = await fixture(container);
    const columnsEl = el.querySelector(".kuc-readonly-table__table__header")!
      .children as HTMLCollection;
    for (let i = 0; i < columnsEl[0].children.length; i++) {
      const columnEl = columnsEl[0].children[i] as HTMLTableHeaderCellElement;
      const value = columnEl.textContent?.trim();
      await expect(value).to.have.equal(expectedHeaderTexts[i]);
    }
  });
});

describe("columns prop set successfully without header prop", () => {
  const newColums = [
    {
      visible: true
    },
    {
      visible: true
    },
    {
      visible: false
    }
  ];
  const container = new ReadOnlyTable({});
  container.columns = newColums;

  it("columns prop set successfully without header prop", async () => {
    const el = await fixture(container);
    const columnsEl = el.querySelector(".kuc-readonly-table__table__header")!
      .children as HTMLCollection;
    for (let i = 0; i < columnsEl[0].children.length; i++) {
      const columnEl = columnsEl[0].children[i] as HTMLTableHeaderCellElement;
      if (i === 2) {
        await expect(columnEl.hasAttribute("hidden")).to.have.equal(true);
      } else {
        await expect(columnEl.hasAttribute("hidden")).to.have.equal(false);
      }
      const value = columnEl.textContent?.trim();
      await expect(value).to.have.equal("");
    }
  });
});

describe("columns prop set successfully without visible prop", () => {
  const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
  const newColums = [
    {
      header: {
        text: expectedHeaderTexts[0]
      }
    },
    {
      header: {
        text: expectedHeaderTexts[1]
      }
    },
    {
      header: {
        text: expectedHeaderTexts[2]
      }
    }
  ];
  const container = new ReadOnlyTable({});
  container.columns = newColums;

  it("columns prop set successfully without visible prop", async () => {
    const el = await fixture(container);
    const columnsEl = el.querySelector(".kuc-readonly-table__table__header")!
      .children as HTMLCollection;
    for (let i = 0; i < columnsEl[0].children.length; i++) {
      const columnEl = columnsEl[0].children[i] as HTMLTableHeaderCellElement;
      const value = columnEl.textContent?.trim();
      await expect(value).to.have.equal(expectedHeaderTexts[i]);
    }
  });
});

describe("columns constructor set successfully with full optional props", () => {
  const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
  const container = new ReadOnlyTable({
    columns: [
      {
        header: {
          text: expectedHeaderTexts[0]
        },
        visible: true
      },
      {
        header: {
          text: expectedHeaderTexts[1]
        },
        visible: true
      },
      {
        header: {
          text: expectedHeaderTexts[2]
        },
        visible: false
      }
    ]
  });

  it("columns constructor set successfully without header prop", async () => {
    const el = await fixture(container);
    const columnsEl = el.querySelector(".kuc-readonly-table__table__header")!
      .children as HTMLCollection;
    for (let i = 0; i < columnsEl[0].children.length; i++) {
      const columnEl = columnsEl[0].children[i] as HTMLTableHeaderCellElement;
      if (i === 2) {
        await expect(columnEl.hasAttribute("hidden")).to.have.equal(true);
      } else {
        await expect(columnEl.hasAttribute("hidden")).to.have.equal(false);
      }
      const value = columnEl.textContent?.trim();
      await expect(value).to.have.equal(expectedHeaderTexts[i]);
    }
  });
});

describe("columns prop set successfully with full optional props", () => {
  const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
  const newColums = [
    {
      header: {
        text: expectedHeaderTexts[0]
      },
      visible: true
    },
    {
      header: {
        text: expectedHeaderTexts[1]
      },
      visible: true
    },
    {
      header: {
        text: expectedHeaderTexts[2]
      },
      visible: false
    }
  ];
  const container = new ReadOnlyTable({});
  container.columns = newColums;

  it("columns prop set successfully with full optional props", async () => {
    const el = await fixture(container);
    const columnsEl = el.querySelector(".kuc-readonly-table__table__header")!
      .children as HTMLCollection;
    for (let i = 0; i < columnsEl[0].children.length; i++) {
      const columnEl = columnsEl[0].children[i] as HTMLTableHeaderCellElement;
      if (i === 2) {
        await expect(columnEl.hasAttribute("hidden")).to.have.equal(true);
      } else {
        await expect(columnEl.hasAttribute("hidden")).to.have.equal(false);
      }
      const value = columnEl.textContent?.trim();
      await expect(value).to.have.equal(expectedHeaderTexts[i]);
    }
    await expect(container.columns).to.be.equal(newColums);
  });
});

describe("columns prop replace successfully", () => {
  const expectedHeaderTexts = ["fruit", "Producing area", "Price"];
  const container = new ReadOnlyTable({
    columns: [
      {
        header: {
          text: expectedHeaderTexts[2]
        },
        visible: false
      }
    ]
  });

  const newColums = [
    {
      header: {
        text: expectedHeaderTexts[0]
      },
      visible: true
    },
    {
      header: {
        text: expectedHeaderTexts[1]
      },
      visible: true
    }
  ];
  container.columns = newColums;

  it("columns prop replace successfully", async () => {
    const el = await fixture(container);
    const columnsEl = el.querySelector(".kuc-readonly-table__table__header")!
      .children as HTMLCollection;
    for (let i = 0; i < columnsEl[0].children.length; i++) {
      const columnEl = columnsEl[0].children[i] as HTMLTableHeaderCellElement;
      const value = columnEl.textContent?.trim();
      await expect(value).to.have.equal(expectedHeaderTexts[i]);
    }
    await expect(container.columns).to.be.equal(newColums);
  });
});

describe("throw error when set by constructor", () => {
  it("have columns which is not array", async () => {
    await expect(() => {
      // @ts-ignore
      const container = new ReadOnlyTable({ columns: null });
    }).to.throw(Error, "'columns' property is invalid");
  });
});

describe("throw error when set by prop", () => {
  it("have columns which is not array", async () => {
    await expect(() => {
      const container = new ReadOnlyTable();
      // @ts-ignore
      container.columns = null;
    }).to.throw(Error, "'columns' property is invalid");
  });
});
