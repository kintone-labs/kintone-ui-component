import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("MobileText", () => {
  describe("placeholder", () => {
    it("confirm placeholder default prop is null", async () => {
      const container = new MobileText();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.placeholder).to.equal("");
    });
    it("placeholder constructor set successfully'", async () => {
      const container = new MobileText({ placeholder: "Apple" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.placeholder).to.equal("Apple");
    });
    it("placeholder prop set successfully'", async () => {
      const container = new MobileText();
      container.placeholder = "Apple";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.placeholder).to.equal("Apple");
    });
    it("placeholder prop replace successfully'", async () => {
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
