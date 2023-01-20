import { expect, fixture } from "@open-wc/testing";

import { Text } from "../index";

describe("Text", () => {
  describe("value", () => {
    it("should be empty string when not assigned on constructor", async () => {
      const container = new Text();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("");
    });

    it('should be "Apple" when  assigned "Apple" on constructor', async () => {
      const container = new Text({ value: "Apple" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("Apple");
    });

    it('should be "Apple" when  set "Apple" by setter', async () => {
      const container = new Text();
      container.value = "Apple";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("Apple");
    });

    it('should be changed to "Orange" when  set "Orange" by setter', async () => {
      const container = new Text({ value: "Apple" });
      container.value = "Orange";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("Orange");
    });
  });
});
