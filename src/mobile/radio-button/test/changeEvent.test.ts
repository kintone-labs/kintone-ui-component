import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

const initItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

describe("MobileRadioButton", () => {
  describe("changeEvent", () => {
    it("should triggered when changed the input element", async () => {
      let triggeredEvent: any = null;
      const container = new MobileRadioButton({
        items: initItems,
        value: initItems[1].value,
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item__input"
      );
      inputsEl[2].dispatchEvent(new Event("change", { bubbles: true }));

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldValue).to.equal(initItems[1].value);
      expect(triggeredEvent.detail.value).to.equal(initItems[2].value);
    });

    it("should dont triggered when changed the same current input element", async () => {
      let triggeredEvent: any = null;
      const container = new MobileRadioButton({
        items: initItems,
        value: initItems[1].value,
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item__input"
      );
      inputsEl[1].dispatchEvent(new Event("change", { bubbles: true }));

      expect(triggeredEvent).to.equal(null);
    });
  });
});
