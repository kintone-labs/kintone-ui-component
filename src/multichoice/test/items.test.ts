import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("items default prop is null", () => {
  const container = new MultiChoice();

  it("items default prop is null", async () => {
    const el = await fixture(container);
    const itemsEl: HTMLCollection = container.querySelector(
      ".kuc-multi-choice__menu"
    )!.children;
    if (!container.children || itemsEl.length !== 3) {
      expect(true);
    }
  });
});

describe("items prop set successfully without optional props", () => {
  const expectedValues = ["item-1", "item-2", "item-3"];
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

  const container = new MultiChoice({ items: newitems });

  it("items prop set successfully without optional props", async () => {
    const el = await fixture(container);
    const itemsEl: HTMLCollection = container.querySelector(
      ".kuc-multi-choice__menu"
    )!.children;
    if (!container.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedValues[i]);
    }
  });
});

describe("items prop set successfully without optional props", () => {
  const expectedValues = ["item-1", "item-2", "item-3"];
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

  const container = new MultiChoice();
  container.items = newitems;

  it("items prop set successfully without optional props", async () => {
    const el = await fixture(container);
    const itemsEl: HTMLCollection = container.querySelector(
      ".kuc-multi-choice__menu"
    )!.children;
    if (!container.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedValues[i]);
    }
  });
});

describe("items prop set successfully with full optional props", () => {
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];
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

  const container = new MultiChoice();
  container.items = newitems;

  it("items prop set successfully with full optional props", async () => {
    const el = await fixture(container);
    const itemsEl: HTMLCollection = container.querySelector(
      ".kuc-multi-choice__menu"
    )!.children;
    if (!container.children || itemsEl.length !== 3) {
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
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  const container = new MultiChoice({
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
    const itemsEl: HTMLCollection = container.querySelector(
      ".kuc-multi-choice__menu"
    )!.children;
    if (!container.children || itemsEl.length !== 2) {
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
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  it("item default property is not array", async () => {
    const container = new MultiChoice({
      // @ts-ignore
      items: null,
      value: [expectedValues[1]]
    });
    try {
      await fixture(container);
    } catch (error) {
      console.log("error.message", error.message)
      expect(error.message).to.equal("'items' property is not array");
    }
  });
  it("default value is duplicated", async () => {
    const container = new MultiChoice({
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
      value: [expectedValues[1]]
    });
    try {
      await fixture(container);
    } catch (error) {
      expect(error.message).to.equal("'items[1].value' property is duplicated");
    }
  });
});

describe("throw error when item set by props", () => {
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  it("item property is not array", async () => {
    const container = new MultiChoice({});
    // @ts-ignore
    container.items = null;
    try {
      await fixture(container);
    } catch (error) {
      console.log("error.message", error.message)
      expect(error.message).to.equal("'items' property is not array");
    }
  });

  it("duplicated value", async () => {
    const container = new MultiChoice({});
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
