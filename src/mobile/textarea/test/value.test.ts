import { expect, fixture } from "@open-wc/testing";

import { MobileTextArea } from "../index";

describe("MobileTextArea", () => {
  describe("value", () => {
    it("should be empty string when not assigned on constructor", async () => {
      const container = new MobileTextArea();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("");
    });

    it('should be "Apple" when  assigned "Apple" on constructor', async () => {
      const container = new MobileTextArea({ value: "Apple" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("Apple");
    });

    it('should be "Apple" when  set "Apple" by setter', async () => {
      const container = new MobileTextArea();
      container.value = "Apple";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("Apple");
    });

    it('should be changed to "Orange" when  set "Orange" by setter', async () => {
      const container = new MobileTextArea({ value: "Apple" });
      container.value = "Orange";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("Orange");
    });

    it("should be empty string when assigned null on constructor", async () => {
      // @ts-ignore
      const container = new MobileTextArea({ value: null });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("");
    });

    it("should be empty string when set null by setter", async () => {
      const container = new MobileTextArea({ value: "Apple" });
      // @ts-ignore
      container.value = null;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-textarea__form__textarea"
      ) as HTMLTextAreaElement;
      expect(inputEl.value).to.be.equal("");
    });
  });
});
