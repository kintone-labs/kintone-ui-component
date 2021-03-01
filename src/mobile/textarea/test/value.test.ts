import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("confirm value default prop is null", () => {
  const container = new MobileTextArea();

  it("confirm value default prop is null", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textareaEl.value).to.be.equal("");
  });
});

describe("value constructor set successfully", () => {
  const container = new MobileTextArea({ value: "Apple" });

  it("value constructor set successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textareaEl.value).to.be.equal("Apple");
  });
});

describe("value prop replace successfully", () => {
  const container = new MobileTextArea({ value: "Orange" });
  container.value = "Apple";

  it("value prop replace successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textareaEl.value).to.be.equal("Apple");
  });
});

describe("value default prop set to null successfully", () => {
  // @ts-expect-error
  const container = new MobileTextArea({ value: null });

  it("value default prop set successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textareaEl.value).to.be.equal("");
  });
});

describe("value prop set to null successfully", () => {
  const container = new MobileTextArea();
  // @ts-expect-error
  container.value = null;

  it("value prop set to null successfully'", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textareaEl.value).to.be.equal("");
  });
});
