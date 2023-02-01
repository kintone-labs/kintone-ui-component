import { expect, fixture } from "@open-wc/testing";

import { MobileTextArea } from "../index";
describe("MobileTextarea", () => {
  describe("placeholder", () => {
    it("should be empty when not setting placeholder in constructor", async () => {
      const container = new MobileTextArea();

      const el = await fixture(container);
      const textareaEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;

      expect(textareaEl.placeholder).to.equal("");
    });
  });

  it("should be not empty when setting placeholder in constructor", async () => {
    const container = new MobileTextArea({ placeholder: "Apple" });

    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;

    expect(textareaEl.placeholder).to.equal("Apple");
  });

  it("should be changed when updating placeholder", async () => {
    const container = new MobileTextArea({ placeholder: "Orange" });
    container.placeholder = "Apple";

    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;

    expect(textareaEl.placeholder).to.equal("Apple");
  });
});
