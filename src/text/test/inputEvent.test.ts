import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Text", () => {
  describe("inputEvent", () => {
    it("should triggered when inputting", async () => {
      let triggeredEvent: any = null;
      const container = new Text({ value: "Orange" });
      container.addEventListener("input", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;
      inputEl.value = "OrangeApple";
      inputEl.dispatchEvent(
        new InputEvent("input", {
          data: "Apple",
        })
      );

      expect(triggeredEvent.type).to.equal("input");
      expect(triggeredEvent.detail.value).to.equal("OrangeApple");
      expect(triggeredEvent.detail.data).to.equal("Apple");
    });
  });
});
