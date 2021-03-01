import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("confirm disabled default prop is false", () => {
  const container = new MobileTextArea();

  it("confirm disabled default prop is false", async () => {
    const el = await fixture(container);
    const textareaEl = (await el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    )) as HTMLTextAreaElement;
    await expect(textareaEl.hasAttribute("disabled")).to.have.equal(false);
  });
});

describe("disabled constructor set successfully", () => {
  const container = new MobileTextArea({ disabled: true });

  it("disabled constructor set successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = (await el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    )) as HTMLTextAreaElement;
    await expect(textareaEl.hasAttribute("disabled")).to.have.equal(true);
  });
});

describe("disabled prop set to true successfully", () => {
  const container = new MobileTextArea({ disabled: false });
  container.disabled = true;

  it("disabled prop set to true successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = (await el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    )) as HTMLTextAreaElement;
    await expect(textareaEl.hasAttribute("disabled")).to.have.equal(true);
  });
});

describe("disabled prop set to false successfully", () => {
  const container = new MobileTextArea({ disabled: true });
  container.disabled = false;

  it("disabled prop set to false successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = (await el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    )) as HTMLTextAreaElement;
    await expect(textareaEl.hasAttribute("disabled")).to.have.equal(false);
  });
});

describe("disabled default prop set to null successfully", () => {
  // @ts-expect-error
  const container = new MobileTextArea({ disabled: null });

  it("disabled default prop set to null successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = (await el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    )) as HTMLTextAreaElement;
    await expect(textareaEl.hasAttribute("disabled")).to.have.equal(false);
  });
});

describe("disabled prop set to null successfully", () => {
  const container = new MobileTextArea();
  // @ts-expect-error
  container.disabled = null;

  it("disabled prop set to null successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = (await el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    )) as HTMLTextAreaElement;
    await expect(textareaEl.hasAttribute("disabled")).to.have.equal(false);
  });
});
