import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("error default prop is null", () => {
  const container = new MultiChoice({});

  it("error default prop is null", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-multi-choice__error"
    )) as HTMLSpanElement;
    await expect(errorEl).to.be.visible;
  });
});

describe("error default prop set successfully", () => {
  const container = new MultiChoice({ error: "error-message" });

  it("error default prop set successfully", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-multi-choice__error"
    )) as HTMLSpanElement;
    await expect(errorEl.innerText).to.have.equals("error-message");
  });
});

describe("error prop replace successfully", () => {
  const container = new MultiChoice({
    error: "error-message"
  });
  container.error = "replace-error";

  it("error prop replace successfully", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-multi-choice__error"
    )) as HTMLSpanElement;
    await expect(errorEl.innerText).to.have.equals("replace-error");
  });
});

describe("error default prop set to null", () => {
  const container = new MultiChoice({
    // @ts-ignore
    error: null
  });

  it("error default prop set to null", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-multi-choice__error"
    )) as HTMLSpanElement;
    await expect(errorEl).to.be.visible;
  });
});

describe("error prop set to null", () => {
  const container = new MultiChoice({
    error: "error-message"
  });
  // @ts-ignore
  container.error = null;

  it("error prop set to null", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-multi-choice__error"
    )) as HTMLSpanElement;
    await expect(errorEl).to.be.visible;
  });
});
