import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { MobileCheckbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("MobileCheckbox", () => {
  describe("changeEvent", () => {
    it("should triggered when changed the input element", async () => {
      let triggeredEvent: any = null;
      const container = new MobileCheckbox({
        items: initItems,
        value: [initItems[1].value],
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );
      inputsEl[2].dispatchEvent(new Event("change"));
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldValue).to.deep.equal([
        initItems[1].value,
      ]);
      expect(triggeredEvent.detail.value).to.deep.equal([
        initItems[1].value,
        initItems[2].value,
      ]);
      inputsEl[1].dispatchEvent(new Event("change"));
      await elementUpdated(el);
      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.oldValue).to.deep.equal([
        initItems[1].value,
        initItems[2].value,
      ]);
      expect(triggeredEvent.detail.value).to.deep.equal([initItems[2].value]);
    });
  });
});
