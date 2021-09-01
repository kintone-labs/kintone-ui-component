import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

const initItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" }
];

describe("MultiChoice", () => {
  describe("changeEvent", () => {
    it("should be triggered when input element triggered change event", async () => {
      let triggeredEvent: any = null;
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[1].value]
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      itemsEl[2].dispatchEvent(new Event("mousedown"));

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldValue).to.deep.equal([
        initItems[1].value
      ]);
      expect(triggeredEvent.detail.value).to.deep.equal([
        initItems[1].value,
        initItems[2].value
      ]);
    });
  });
});
