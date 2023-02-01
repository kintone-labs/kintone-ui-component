import { expect, fixture } from "@open-wc/testing";

import { Text } from "../index";

describe("Text", () => {
  describe("changeEvent", () => {
    it("should triggered when changed the input element", async () => {
      let triggeredEvent: any = null;
      const container = new Text({ value: "Orange" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      inputEl.value = "Apple";
      inputEl.dispatchEvent(new CustomEvent("change"));

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("Apple");
      expect(triggeredEvent.detail.oldValue).to.equal("Orange");
    });
  });
});
