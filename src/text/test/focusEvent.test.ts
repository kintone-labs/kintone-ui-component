import { expect, fixture } from "@open-wc/testing";

import { Text } from "../index";

describe("Text", () => {
  describe("focusEvent", () => {
    it("should be triggered when focusing to the input", async () => {
      const container = new Text({ value: "Orange" });
      container.addEventListener("focus", (event: any) => {
        expect(event.detail.value).to.equal("Orange");
        container.value = "Apple";
      });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      inputEl.focus();

      expect(container.value).to.equal("Apple");
    });
  });
});
