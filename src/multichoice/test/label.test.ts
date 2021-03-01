import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("label default prop is null", () => {
  const container = new MultiChoice({});

  it("label default prop is null", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-multi-choice__label__text"
    )) as HTMLSpanElement;
    await expect(labelEl).to.be.visible;
  });
});

describe("label prop set successfully", () => {
  const container = new MultiChoice({ label: "options-label" });

  it("label prop set successfully", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-multi-choice__label__text"
    )) as HTMLSpanElement;
    await expect(labelEl.innerText).to.have.equals("options-label");
  });
});

describe("label prop replace successfully", () => {
  const container = new MultiChoice({
    label: "options-label"
  });
  container.label = "replace-label";

  it("label prop replace successfully", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-multi-choice__label__text"
    )) as HTMLSpanElement;
    await expect(labelEl.textContent).to.have.equals("replace-label");
  });
});

describe("label default prop set to null", () => {
  const container = new MultiChoice({
    // @ts-ignore
    label: null
  });

  it("label default prop set to null", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-multi-choice__label"
    )) as HTMLSpanElement;
    await expect(labelEl).to.be.visible;
  });
});

describe("label prop set to null", () => {
  const container = new MultiChoice({
    label: "options-label"
  });
  // @ts-ignore
  container.label = null;

  it("label prop set to null", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-multi-choice__label"
    )) as HTMLSpanElement;
    await expect(labelEl).to.be.visible;
  });
});
