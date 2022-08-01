import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

const initItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

describe("RadioButton", () => {
  describe("changeEvent", () => {
    it("should triggered when changed the input element", async () => {
      let triggeredEvent: any = null;
      const container = new RadioButton({
        items: initItems,
        value: initItems[1].value,
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-radio-button__group__select-menu__item__input"
      );
      inputsEl[2].dispatchEvent(new Event("change"));

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldValue).to.equal(initItems[1].value);
      expect(triggeredEvent.detail.value).to.equal(initItems[2].value);
    });
  });
});
