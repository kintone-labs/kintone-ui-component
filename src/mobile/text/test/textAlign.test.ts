import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("MobileText", () => {
  describe("textAlign", () => {
    it("shoul be used default textAlign when not set textAlign in constructor", async () => {
      const container = new MobileText();

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("textalign")).to.equal("left");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("left");
    });

    it("should be displayed based on textAlign set in constructor", async () => {
      const container = new MobileText({ textAlign: "right" });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });

    it("should be updated based on textAlign updated", async () => {
      const container = new MobileText();
      container.textAlign = "right";

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;

      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });

    it("should be updated when replacing textAlign from left to right", async () => {
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
