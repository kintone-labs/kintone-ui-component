import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("label default prop is null", () => {
  const container = new Dropdown({});

  it("label default prop is null", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-dropdown__label__text"
    ) as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(labelEl).to.be.visible;
  });
});

describe("label prop set successfully", () => {
  const container = new Dropdown({ label: "options-label" });

  it("label prop set successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-dropdown__label__text"
    ) as HTMLSpanElement;
    expect(labelEl.innerText).to.have.equal("options-label");
  });
});

describe("label prop replace successfully", () => {
  const container = new Dropdown({
    label: "options-label"
  });
  container.label = "replace-label";

  it("label prop replace successfully", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(
      ".kuc-dropdown__label__text"
    ) as HTMLSpanElement;
    expect(labelEl.textContent).to.have.equal("replace-label");
  });
});

describe("label default prop set to null", () => {
  const container = new Dropdown({
    // @ts-ignore
    label: null
  });

  it("label default prop set to null", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(".kuc-dropdown__label") as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(labelEl).to.be.visible;
  });
});

describe("label prop set to null", () => {
  const container = new Dropdown({
    label: "options-label"
  });
  // @ts-ignore
  container.label = null;

  it("label prop set to null", async () => {
    const el = await fixture(container);
    const labelEl = el.querySelector(".kuc-dropdown__label") as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(labelEl).to.be.visible;
  });
});
