import { expect, fixture } from "@open-wc/testing";

import { MobileTextArea } from "../index";

describe("MobileTextArea", () => {
  describe("disabled", () => {
    it("should not be added into element when not assigned in constructor", async () => {
      const container = new MobileTextArea();
      const el = await fixture(container);
      const textareaEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;

      expect(textareaEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into element when assigned true in constructor", async () => {
      const container = new MobileTextArea({ disabled: true });
      const el = await fixture(container);
      const textareaEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;

      expect(textareaEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into element when changed to true by setter", async () => {
      const container = new MobileTextArea({ disabled: false });
      container.disabled = true;
      const el = await fixture(container);
      const textareaEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;

      expect(textareaEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should not be added into element when changed to false by setter", async () => {
      const container = new MobileTextArea({ disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const textareaEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;

      expect(textareaEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
