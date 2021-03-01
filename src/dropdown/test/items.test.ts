import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("items default prop is null", () => {
  const container = new Dropdown();

  it("items default prop is null", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      expect(true);
    }
  });
});

describe("items prop set successfully without label props", () => {
  const expectedValues = ["-----", "orange", "Apple"];
  const newitems = [
    {
      value: expectedValues[0]
    },
    {
      value: expectedValues[1]
    },
    {
      value: expectedValues[2]
    }
  ];

  const container = new Dropdown({ items: newitems });

  it("items prop set successfully without label props", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedValues[i]);
    }
  });
});

describe("items prop set successfully without label props", () => {
  const expectedValues = ["-----", "orange", "Apple"];
  const newitems = [
    {
      value: expectedValues[0]
    },
    {
      value: expectedValues[1]
    },
    {
      value: expectedValues[2]
    }
  ];

  const container = new Dropdown();
  container.items = newitems;

  it("items prop set successfully without label props", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedValues[i]);
    }
  });
});

describe("items default set successfully with full optional props", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];
  const newitems = [
    {
      label: expectedLabels[0],
      value: expectedValues[0]
    },
    {
      label: expectedLabels[1],
      value: expectedValues[1]
    },
    {
      label: expectedLabels[2],
      value: expectedValues[2]
    }
  ];

  const container = new Dropdown({
    items: newitems
  });

  it("items default set successfully with full optional props", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedLabels[i]);
    }
  });
  expect(container.items).to.be.equal(newitems);
});

describe("items prop set successfully with full optional props", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];
  const newitems = [
    {
      label: expectedLabels[0],
      value: expectedValues[0]
    },
    {
      label: expectedLabels[1],
      value: expectedValues[1]
    },
    {
      label: expectedLabels[2],
      value: expectedValues[2]
    }
  ];

  const container = new Dropdown();
  container.items = newitems;

  it("items prop set successfully with full optional props", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedLabels[i]);
    }
  });
  expect(container.items).to.be.equal(newitems);
});

describe("items prop replace successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
    items: [
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ]
  });

  const newitems = [
    {
      label: expectedLabels[0],
      value: expectedValues[0]
    },
    {
      label: expectedLabels[1],
      value: expectedValues[1]
    }
  ];

  container.items = newitems;

  it("items prop replace successfully", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 2) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedLabels[i]);
    }
  });
  expect(container.items).to.be.equal(newitems);
});

describe("throw error when default props", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  it("items default property is not array", async () => {
    const container = new Dropdown({
      // @ts-ignore
      items: null,
      value: expectedValues[1]
    });
    try {
      await fixture(container);
    } catch (error) {
      expect(error.message).to.equal("'items' property is not array");
    }
  });
  it("default value is duplicated", async () => {
    const container = new Dropdown({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0]
        },
        {
          label: expectedLabels[1],
          value: expectedValues[0]
        }
      ],
      value: expectedValues[1]
    });
    try {
      await fixture(container);
    } catch (error) {
      expect(error.message).to.equal("'items[1].value' property is duplicated");
    }
  });
});

describe("throw error when item set by props", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  it("items property is not array", async () => {
    const container = new Dropdown({});
    // @ts-ignore
    container.items = null;
    try {
      await fixture(container);
    } catch (error) {
      expect(error.message).to.equal("'items' property is not array");
    }
  });

  it("duplicated value", async () => {
    const container = new Dropdown({});
    container.items = [
      {
        value: expectedValues[0]
      },
      {
        value: expectedValues[0]
      }
    ];
    try {
      await fixture(container);
    } catch (error) {
      expect(error.message).to.equal("'items[1].value' property is duplicated");
    }
  });
});
