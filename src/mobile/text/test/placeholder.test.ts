import { expect, fixture } from "@open-wc/testing";

import { MobileText } from "../index";

describe("MobileText", () => {
  describe("placeholder", () => {
    it("should be empty when not setting placeholder in constructor", async () => {
      const container = new MobileText();

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;

      expect(inputEl.placeholder).to.equal("");
    });

    it("should be not empty when setting placeholder in constructor", async () => {
      const container = new MobileText({ placeholder: "Apple" });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;

      expect(inputEl.placeholder).to.equal("Apple");
    });

    it("should be changed when updating placeholder", async () => {
      const container = new MobileText();
      container.placeholder = "Apple";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;

      expect(inputEl.placeholder).to.equal("Apple");
    });

    it("should be changed when replacing placeholder", async () => {
      const container = new MobileText({ placeholder: "Orange" });
      container.placeholder = "Apple";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;

      expect(inputEl.placeholder).to.equal("Apple");
    });
  });
});
