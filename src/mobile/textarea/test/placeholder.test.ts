import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("confirm placeholder default prop is null", () => {
  const container = new MobileTextArea();

  it("confirm placeholder default prop is null", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textareaEl.placeholder).to.be.equal("");
  });
});

describe("placeholder constructor set successfully", () => {
  const container = new MobileTextArea({ placeholder: "Apple" });

  it("placeholder constructor set successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    await expect(textareaEl.placeholder).to.be.equal("Apple");
  });
});

describe("placeholder prop replace successfully", () => {
  const container = new MobileTextArea({ placeholder: "Orange" });
  container.placeholder = "Apple";

  it("placeholder prop replace successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textareaEl.placeholder).to.be.equal("Apple");
  });
});

describe("placeholder default prop set to null successfully", () => {
  // @ts-expect-error
  const container = new MobileTextArea({ placeholder: null });

  it("placeholder default prop set to null successfully'", async () => {
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.be.equal("null");
  });
});

describe("placeholder prop set to null successfully", () => {
  const container = new MobileTextArea();
  // @ts-expect-error
  container.placeholder = null;

  it("placeholder prop set to null successfully'", async () => {
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.be.equal("null");
  });
});
