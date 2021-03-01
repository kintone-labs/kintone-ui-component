import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("value default prop is not set", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
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

  it("value default prop is not set", async () => {
    const el = await fixture(container);
    const itemsEl = container.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedLabels[i]);
    }
    expect(container.value).to.be.equal("");
  });
});

describe("value prop set successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
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
    value: expectedValues[1]
  });

  it("value prop set successfully", async () => {
    const el = await fixture(container);
    const itemsEl = container.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!container.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedLabels[i]);
    }
    expect(container.value).to.be.equal(expectedValues[1]);
  });
});

describe("value prop replace successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
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
    value: expectedValues[0]
  });
  container.value = expectedValues[1];

  it("value prop replace successfully", async () => {
    const el = await fixture(container);
    const itemsEl = container.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedLabels[i]);
    }
    expect(container.value).to.be.equal(expectedValues[1]);
  });
});

describe("value default prop set to null", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
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
    // @ts-ignore
    value: null
  });

  it("value default prop set to null", async () => {
    const el = await fixture(container);
    const selectedTextEl = el.querySelector(
      ".kuc-dropdown__toggle__selected-item-label"
    ) as HTMLSpanElement;
    expect(selectedTextEl.textContent).to.be.equal("");
    const itemsEl = container.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedLabels[i]);
      expect(itemEl.getAttribute("aria-checked")).to.be.equal("false");
    }
    expect(container.value).to.be.equal(null);
  });
});

describe("set to null value", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
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
    value: expectedValues[0]
  });
  // @ts-ignore
  container.value = null;

  it("set to null value", async () => {
    const el = await fixture(container);
    const selectedTextEl = el.querySelector(
      ".kuc-dropdown__toggle__selected-item-label"
    ) as HTMLSpanElement;
    expect(selectedTextEl.textContent).to.be.equal("");
    const itemsEl = container.querySelector(".kuc-dropdown__select-menu")!
      .children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const label = itemEl.textContent?.trim();
      expect(label).to.have.equal(expectedLabels[i]);
      expect(itemEl.getAttribute("aria-checked")).to.be.equal("false");
    }
    expect(container.value).to.be.equal(null);
  });
});

describe("set nonexistent value", () => {
  const expectedValues = ["-----", "orange", "Apple"];
  const container = new Dropdown({});
  container.value = expectedValues[2];
  const getval = container.value;

  it("set nonexistent value", async () => {
    expect(getval).to.be.equal(expectedValues[2]);
  });
});

describe("set number value", () => {
  const container = new Dropdown({});
  // @ts-ignore
  container.value = 1;
  const getval = container.value;

  it("set number value", async () => {
    expect(getval).to.be.equal(1);
  });
});
