import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";
describe("MobileTextarea", () => {
  describe("placeholder", () => {
    it("confirm placeholder default prop is null", async () => {
      const container = new MobileTextArea();
      const el = await fixture(container);
      const textareaEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;
      expect(textareaEl.placeholder).to.equal("");
    });
  });
  it("placeholder constructor set successfully'", async () => {
    const container = new MobileTextArea({ placeholder: "Apple" });
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textareaEl.placeholder).to.equal("Apple");
  });
  it("placeholder prop replace successfully'", async () => {
    const container = new MobileTextArea({ placeholder: "Orange" });
    container.placeholder = "Apple";
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textareaEl.placeholder).to.equal("Apple");
  });
  it("placeholder default prop set to null successfully'", async () => {
    const container = new MobileTextArea({ placeholder: null as any });
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.equal("null");
  });
  it("placeholder prop set to null successfully'", async () => {
    const container = new MobileTextArea();
    (container.placeholder as any) = null;
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.equal("null");
  });
});
