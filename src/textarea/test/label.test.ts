import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("confirm label default prop is null", () => {
  const container = new TextArea();

  it("confirm label default prop is null", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-textarea__label"
    )) as HTMLLabelElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
  });
});

describe("label constructor set successfully", () => {
  const container = new TextArea({ label: "options-label" });

  it("label constructor set successfully'", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-textarea__label"
    )) as HTMLLabelElement;
    const labelTextEl = (await el.querySelector(
      ".kuc-textarea__label__text"
    )) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(labelTextEl.textContent).to.be.equal("options-label");
  });
});

describe("label prop set successfully", () => {
  const container = new TextArea();
  container.label = "options-label";

  it("label prop set successfully'", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-textarea__label"
    )) as HTMLLabelElement;
    const labelTextEl = (await el.querySelector(
      ".kuc-textarea__label__text"
    )) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(labelTextEl.textContent).to.be.equal("options-label");
  });
});

describe("label prop replace successfully", () => {
  const container = new TextArea({ label: "options-label" });
  container.label = "replace-label";

  it("label prop replace successfully", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-textarea__label"
    )) as HTMLLabelElement;
    const labelTextEl = (await el.querySelector(
      ".kuc-textarea__label__text"
    )) as HTMLSpanElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(labelTextEl.textContent).to.be.equal("replace-label");
  });
});

describe("label default prop set to null successfully", () => {
  // @ts-ignore
  const container = new TextArea({ label: null });

  it("label prop set to null successfully", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-textarea__label"
    )) as HTMLLabelElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
  });
});

describe("label prop set to null successfully", () => {
  const container = new TextArea({
    label: "options-label"
  });
  // @ts-ignore
  container.label = null;

  it("label prop set to null successfully", async () => {
    const el = await fixture(container);
    const labelEl = (await el.querySelector(
      ".kuc-textarea__label"
    )) as HTMLLabelElement;
    await expect(labelEl.hasAttribute("hidden")).to.be.equal(true);
  });
});
