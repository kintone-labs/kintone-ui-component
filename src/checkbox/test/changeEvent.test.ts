import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { Checkbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Checkbox", () => {
  describe("changeEvent", () => {
    it("should be triggered when input element triggered change event", async () => {
      let triggeredEvent: any = null;
      const container = new Checkbox({
        items: initItems,
        value: [initItems[1].value],
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-checkbox__group__select-menu__item__input"
      );
      expect(inputsEl.length).equal(3);
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
      inputsEl[2].dispatchEvent(new Event("change"));
      expect(triggeredEvent.detail.oldValue).to.deep.equal([
        initItems[1].value,
        initItems[2].value,
      ]);
      expect(triggeredEvent.detail.value).to.deep.equal([initItems[1].value]);
    });
  });
});
