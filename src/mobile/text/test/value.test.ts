import { expect, fixture } from "@open-wc/testing";

import { MobileText } from "../index";

describe("MobileText", () => {
  describe("value", () => {
    it("should be empty string when not assigned on constructor", async () => {
      const container = new MobileText();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("");
    });

    it('should be "Apple" when  assigned "Apple" on constructor', async () => {
      const container = new MobileText({ value: "Apple" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("Apple");
    });

    it('should be "Apple" when  set "Apple" by setter', async () => {
      const container = new MobileText();
      container.value = "Apple";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("Apple");
    });

    it('should be changed to "Orange" when  set "Orange" by setter', async () => {
      const container = new MobileText({ value: "Apple" });
      container.value = "Orange";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("Orange");
    });
  });
});
