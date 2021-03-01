import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

describe("confirm value default value is not set", () => {
  const container = new MobileRadioButton();

  it("confirm value default value is not set", async () => {
    const el = await fixture(container);
    const itemsEl = el.querySelector(
      ".kuc-mobile-radio-button__group__select-menu"
    )!.children as HTMLSelectElement;
    if (!itemsEl.children || itemsEl.length !== 3) {
      await expect(true);
    }
  });
});

describe("value constructor set successfully", () => {
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
    ],
    value: expectedValues[1]
  });

  it("value constructor set successfully", async () => {
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
      if (i === 1) {
        await expect(isChecked).to.be.equal(true);
      } else {
        await expect(isChecked).to.be.equal(false);
      }
    }
  });
});

describe("value prop replace successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];

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
    ],
    value: expectedValues[1]
  });

  const newValue = expectedValues[2];
  container.value = newValue;

  it("value prop replace successfully", async () => {
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
      if (i === 2) {
        await expect(isChecked).to.be.equal(true);
      } else {
        await expect(isChecked).to.be.equal(false);
      }
    }
    expect(container.value).to.be.equal(newValue);
  });
});

describe("value constructor set to null successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];

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
    ],
    // @ts-expect-error
    value: null
  });

  it("value constructor set to null successfully", async () => {
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

describe("value prop set to null successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "apple"];

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
    ],
    value: expectedValues[1]
  });
  // @ts-expect-error
  container.value = null;

  it("value prop set to null successfully", async () => {
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
