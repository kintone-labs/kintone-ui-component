import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Text", () => {
  describe("placeholder", () => {
    it("placeholder default prop is empty", async () => {
      const container = new Text();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      expect(inputEl.placeholder).to.equal("");
    });
  });
  it("placeholder constructor set successfully'", async () => {
    const container = new Text({ placeholder: "Apple" });
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__group__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.placeholder).to.equal("Apple");
  });
  it("placeholder prop set successfully'", async () => {
    const container = new Text();
    container.placeholder = "Apple";
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__group__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.placeholder).to.equal("Apple");
  });
  it("placeholder prop replace successfully'", async () => {
    const container = new Text({ placeholder: "Orange" });
    container.placeholder = "Apple";
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__group__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.placeholder).to.equal("Apple");
  });
});
