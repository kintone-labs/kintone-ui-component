import { expect, fixture } from "@open-wc/testing";

import { MobileText } from "../index";

describe("MobileText", () => {
  describe("focusEvent", () => {
    it("should be triggered when focusing to the input", async () => {
      const container = new MobileText({ value: "Orange" });
      container.addEventListener("focus", (event: any) => {
        expect(event.detail.value).to.equal("Orange");
        container.value = "Apple";
      });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
      ) as HTMLInputElement;
      inputEl.focus();

      expect(container.value).to.equal("Apple");
    });
  });
});
