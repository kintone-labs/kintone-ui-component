import { expect, fixture } from "@open-wc/testing";
import { MobileCheckbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

describe("MobileCheckbox", () => {
  describe("changeEvent", () => {
    it("should triggered when changed the input element", async () => {
      let triggered = false;
      const container = new MobileCheckbox({
        items: initItems,
        value: [initItems[1].value]
      });
      container.addEventListener("change", (event: any) => {
        expect(event.detail.oldValue).to.deep.equal([initItems[1].value]);
        expect(event.detail.value).to.deep.equal([
          initItems[1].value,
          initItems[2].value
        ]);
        triggered = true;
      });

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );
      inputsEl[2].dispatchEvent(new Event("change"));
      expect(triggered).to.equal(true);
    });
  });
});
