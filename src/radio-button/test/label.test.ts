import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

describe("confirm label default value is null", () => {
  const container = new RadioButton();

  it("confirm label default value is null", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-radio-button__group__label"
    ) as HTMLLegendElement;
    const labelRadioButtonEl = el.querySelector(
      ".kuc-radio-button__group__label__text"
    ) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(labelRadioButtonEl.textContent).to.be.equal("");
  });
});

describe("label constructor set successfully", () => {
  const container = new RadioButton({ label: "options-label" });

  it("label constructor set successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-radio-button__group__label"
    ) as HTMLLegendElement;
    const labelRadioButtonEl = el.querySelector(
      ".kuc-radio-button__group__label__text"
    ) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(labelRadioButtonEl.textContent).to.be.equal("options-label");
  });
});

describe("label prop set successfully", () => {
  const container = new RadioButton();
  container.label = "options-label";

  it("label prop set successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-radio-button__group__label"
    ) as HTMLLegendElement;
    const labelRadioButtonEl = el.querySelector(
      ".kuc-radio-button__group__label__text"
    ) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(labelRadioButtonEl.textContent).to.be.equal("options-label");
  });
});

describe("label prop replace successfully", () => {
  const container = new RadioButton({ label: "options-label" });
  container.label = "replace-label";

  it("label prop replace successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-radio-button__group__label"
    ) as HTMLLegendElement;
    const labelRadioButtonEl = el.querySelector(
      ".kuc-radio-button__group__label__text"
    ) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(labelRadioButtonEl.textContent).to.be.equal("replace-label");
  });
});

describe("label constructor set to null successfully", () => {
  const container = new RadioButton({
    // @ts-ignore
    label: null
  });

  it("label constructor set to null successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-radio-button__group__label"
    ) as HTMLLegendElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
  });
});

describe("label prop set to null successfully", () => {
  const container = new RadioButton({
    label: "options-label"
  });
  // @ts-ignore
  container.label = null;

  it("label prop set to null successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-radio-button__group__label"
    ) as HTMLLegendElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
  });
});
