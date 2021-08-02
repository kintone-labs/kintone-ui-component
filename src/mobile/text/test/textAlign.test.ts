import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("MobileText", () => {
  describe("textAlign", () => {
    it("confirm textAlign default prop is left", async () => {
      const container = new MobileText();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.getAttribute("textalign")).to.equal("left");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("left");
    });
    it("textAlign constructor set successfully'", async () => {
      const container = new MobileText({ textAlign: "right" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });
    it("textAlign prop set successfully'", async () => {
      const container = new MobileText();
      container.textAlign = "right";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });
    it("textAlign prop replace successfully'", async () => {
      const container = new MobileText({ textAlign: "left" });
      container.textAlign = "right";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });
  });
});
