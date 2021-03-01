import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("confirm disabled default prop is false", () => {
  const container = new TextArea();

  it("confirm disabled default prop is false", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-textarea__textarea"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
  });
});

describe("disabled constructor set successfully", () => {
  const container = new TextArea({ disabled: true });

  it("disabled constructor set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-textarea__textarea"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(true);
  });
});

describe("disabled prop set to true successfully", () => {
  const container = new TextArea({ disabled: false });
  container.disabled = true;

  it("disabled prop set to true successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-textarea__textarea"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(true);
  });
});

describe("disabled prop set to false successfully", () => {
  const container = new TextArea({ disabled: true });
  container.disabled = false;

  it("disabled prop set to false successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-textarea__textarea"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
  });
});

describe("disabled default prop set to null successfully", () => {
  // @ts-ignore
  const container = new TextArea({ disabled: null });

  it("disabled default prop set to null successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-textarea__textarea"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
  });
});

describe("disabled prop set to null successfully", () => {
  const container = new TextArea();
  // @ts-ignore
  container.disabled = null;

  it("disabled prop set to null successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-textarea__textarea"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
  });
});
