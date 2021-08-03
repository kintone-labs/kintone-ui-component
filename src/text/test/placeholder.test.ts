import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Text", () => {
  describe("placeholder", () => {
    it("placeholder will be not displayed when not setting placeholder in constructor", async () => {
      const container = new Text();

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;

      expect(inputEl.placeholder).to.equal("");
    });
  });

  it("placeholder will be displayed when setting placeholder in constructor", async () => {
    const container = new Text({ placeholder: "Apple" });

    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__group__input-form__input-outer__input"
    ) as HTMLInputElement;

    expect(inputEl.placeholder).to.equal("Apple");
  });

  it("placeholder will be changed when updating placeholder", async () => {
    const container = new Text();
    container.placeholder = "Apple";

    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__group__input-form__input-outer__input"
    ) as HTMLInputElement;

    expect(inputEl.placeholder).to.equal("Apple");
  });

  it("placeholder will be changed when replacing placehoder", async () => {
    const container = new Text({ placeholder: "Orange" });
    container.placeholder = "Apple";

    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__group__input-form__input-outer__input"
    ) as HTMLInputElement;

    expect(inputEl.placeholder).to.equal("Apple");
  });
});
