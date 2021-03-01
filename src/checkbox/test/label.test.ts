import { expect, fixture } from "@open-wc/testing";
import { Checkbox } from "../index";

describe("confirm label default value is null", () => {
  const container = new Checkbox();

  it("confirm label default value is null", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-checkbox__group__label"
    ) as HTMLLegendElement;
    const labelCheckboxEl = el.querySelector(
      ".kuc-checkbox__group__label__text"
    ) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(labelCheckboxEl.textContent).to.be.equal("");
  });
});

describe("label constructor set successfully", () => {
  const container = new Checkbox({ label: "options-label" });

  it("label constructor set successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-checkbox__group__label"
    ) as HTMLLegendElement;
    const labelCheckboxEl = el.querySelector(
      ".kuc-checkbox__group__label__text"
    ) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(labelCheckboxEl.textContent).to.be.equal("options-label");
  });
});

describe("label prop replace successfully", () => {
  const container = new Checkbox({ label: "options-label" });
  container.label = "replace-label";

  it("label prop replace successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-checkbox__group__label"
    ) as HTMLLegendElement;
    const labelCheckboxEl = el.querySelector(
      ".kuc-checkbox__group__label__text"
    ) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(labelCheckboxEl.textContent).to.be.equal("replace-label");
  });
});

describe("label constructor set to null successfully", () => {
  const container = new Checkbox({
    // @ts-ignore
    label: null
  });

  it("label constructor set to null successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-checkbox__group__label"
    ) as HTMLLegendElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
  });
});

describe("label prop set to null successfully", () => {
  const container = new Checkbox({
    label: "options-label"
  });
  // @ts-ignore
  container.label = null;

  it("label prop set to null successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-checkbox__group__label"
    ) as HTMLLegendElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
  });
});
