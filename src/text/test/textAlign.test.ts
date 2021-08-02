import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Text", () => {
  describe("textAlign", () => {
    it("confirm textAlign default prop is left", async () => {
      const container = new Text();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      expect(inputEl.getAttribute("textalign")).to.equal("left");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("left");
    });
    it("textAlign constructor set successfully'", async () => {
      const container = new Text({ textAlign: "right" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });
    it("textAlign prop set successfully'", async () => {
      const container = new Text();
      container.textAlign = "right";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });
    it("textAlign prop replace successfully'", async () => {
      const container = new Text({ textAlign: "left" });
      container.textAlign = "right";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      expect(inputEl.getAttribute("textalign")).to.equal("right");
      expect(window.getComputedStyle(inputEl).textAlign).to.equal("right");
    });
  });
});
