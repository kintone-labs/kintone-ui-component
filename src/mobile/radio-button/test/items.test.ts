import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

describe("confirm items default value is not set", () => {
  const container = new MobileRadioButton();

  it("confirm items default value is not set", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-radio-button__group__select-menu"
    )!.children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      await expect(true);
    }
  });
});

describe("items constructor set successfully without label prop", () => {
  const expectedValues = ["-----", "orange", "apple"];
  const container = new MobileRadioButton({
    items: [
      {
        value: expectedValues[0]
      },
      {
        value: expectedValues[1]
      },
      {
        value: expectedValues[2]
      }
    ]
  });

  it("items constructor set successfully without label prop", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-radio-button__group__select-menu"
    )!.children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      await expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const labelEl = itemEl.children[1] as HTMLLabelElement;
      const svgEl = labelEl.children[0] as SVGElement;
      const isChecked = svgEl.children.length === 3;
      await expect(labelEl.innerText).to.be.equal(expectedValues[i]);
      await expect(isChecked).to.be.equal(false);
    }
  });
});

describe("items prop set successfully without label prop", () => {
  const expectedValues = ["-----", "orange", "apple"];
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

  const container = new MobileRadioButton();
  container.items = newitems;

  it("items prop set successfully without label props", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-radio-button__group__select-menu"
    )!.children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      await expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const labelEl = itemEl.children[1] as HTMLLabelElement;
      const svgEl = labelEl.children[0] as SVGElement;
      const isChecked = svgEl.children.length === 3;
      await expect(labelEl.innerText).to.be.equal(expectedValues[i]);
      await expect(isChecked).to.be.equal(false);
    }
  });
});

describe("items constructor set successfully with full optional props", () => {
  const expectedValues = ["-----", "orange", "apple"];
  const expectedLabels = ["-----", "Orange", "Apple"];
  const container = new MobileRadioButton({
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

  it("items constructor set successfully with full optional props", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-radio-button__group__select-menu"
    )!.children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      await expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const labelEl = itemEl.children[1] as HTMLLabelElement;
      const svgEl = labelEl.children[0] as SVGElement;
      const isChecked = svgEl.children.length === 3;
      await expect(labelEl.innerText).to.be.equal(expectedLabels[i]);
      await expect(isChecked).to.be.equal(false);
    }
  });
});

describe("items prop set successfully with full optional props", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];
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

  const container = new MobileRadioButton();
  container.items = newitems;

  it("items prop set successfully with full optional props", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-radio-button__group__select-menu"
    )!.children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      await expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const labelEl = itemEl.children[1] as HTMLLabelElement;
      const svgEl = labelEl.children[0] as SVGElement;
      const isChecked = svgEl.children.length === 3;
      await expect(labelEl.innerText).to.be.equal(expectedLabels[i]);
      await expect(isChecked).to.be.equal(false);
    }
  });
  expect(container.items).to.be.equal(newitems);
});

describe("items prop replace successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];

  const container = new MobileRadioButton({
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
    const itemsEl = el.querySelector(
      ".kuc-mobile-radio-button__group__select-menu"
    )!.children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      await expect(false);
    }
    for (let i = 0; i < itemsEl.length; i++) {
      const itemEl = itemsEl[i] as HTMLElement;
      const labelEl = itemEl.children[1] as HTMLLabelElement;
      const svgEl = labelEl.children[0] as SVGElement;
      const isChecked = svgEl.children.length === 3;
      await expect(labelEl.innerText).to.be.equal(expectedLabels[i]);
      await expect(isChecked).to.be.equal(false);
    }
  });
  expect(container.items).to.be.equal(newitems);
});

describe("throw error when set by constructor", () => {
  const expectedValues = ["-----", "orange", "apple"];

  it("have items which is not array", async () => {
    expect(() => {
      // @ts-expect-error
      const container = new MobileRadioButton({ items: null });
    }).to.throw(Error, "'items' property is not array");
  });

  it("have duplicated value", async () => {
    expect(() => {
      const container = new MobileRadioButton({
        items: [
          {
            value: expectedValues[0]
          },
          {
            value: expectedValues[0]
          }
        ]
      });
    }).to.throw(
      Error,
      "'items[1].value' is duplicated! You can specify unique one."
    );
  });
});

describe("throw error when set by prop", () => {
  const expectedValues = ["-----", "orange", "apple"];

  it("have items which is not array", async () => {
    expect(() => {
      const container = new MobileRadioButton();
      // @ts-expect-error
      container.items = null;
    }).to.throw(Error, "'items' property is not array");
  });

  it("have duplicated value", async () => {
    expect(() => {
      const container = new MobileRadioButton();
      container.items = [
        {
          value: expectedValues[0]
        },
        {
          value: expectedValues[0]
        }
      ];
    }).to.throw(
      Error,
      "'items[1].value' is duplicated! You can specify unique one."
    );
  });
});
