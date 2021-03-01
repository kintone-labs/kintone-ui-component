import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("value default prop is not setted", () => {
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  const container = new MultiChoice({
    items: [
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
    ]
  });

  it("value default prop is not setted", async () => {
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
    expect(container.value).to.deep.equal([]);
  });
});

describe("value prop set successfully", () => {
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  const container = new MultiChoice({
    items: [
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
    ],
    value: [expectedValues[1]]
  });

  it("value prop set successfully", async () => {
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
    expect(container.value).to.deep.equal([expectedValues[1]]);
  });
});

describe("value prop set successfully", () => {
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  const container = new MultiChoice({
    label: "Fruit",
    requiredIcon: false,
    items: [
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
    ],
    value: [expectedValues[0]]
  });
  container.value = [expectedValues[1]];

  it("value prop set successfully", async () => {
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
    expect(container.value).to.deep.equal([expectedValues[1]]);
  });
});

describe("throw error when set by constructor", () => {
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  it("have value which is not array", async () => {
    const container = new MultiChoice({
      items: [
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
      ],
      // @ts-ignore
      value: null
    });
    try {
      await fixture(container);
    } catch (error) {
      expect(error.message).to.equal("'value' property is not array");
    }
  });

  it("have duplicated value", async () => {
    const container = new MultiChoice({
      items: [
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
      ],
      value: [expectedValues[0], expectedValues[0]]
    });
    try {
      await fixture(container);
    } catch (error) {
      expect(error.message).to.equal("'value[1]' property is duplicated");
    }
  });
});

describe("throw error when set by prop", () => {
  const expectedLabels = ["Item 1", "Item 2", "Item 3"];
  const expectedValues = ["item-1", "item-2", "item-3"];

  it("have value which is not array", async () => {
    const container = new MultiChoice({
      items: [
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
      ]
    });
    // @ts-ignore
    container.value = null;
    try {
      await fixture(container);
    } catch (error) {
      expect(error.message).to.equal("'value' property is not array");
    }
  });

  it("have duplicated value", async () => {
    const container = new MultiChoice({
      items: [
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
      ]
    });
    container.value = [expectedValues[0], expectedValues[0]];

    try {
      await fixture(container);
    } catch (error) {
      expect(error.message).to.equal("'value[1]' property is duplicated");
    }
  });
});
