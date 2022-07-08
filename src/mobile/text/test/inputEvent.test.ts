import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("MobileText", () => {
  describe("inputEvent", () => {
    it("should triggered when inputting", async () => {
      let triggeredEvent: any = null;
      const container = new MobileText({ value: "Orange" });
      container.addEventListener("input", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-text__input-form__input"
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
