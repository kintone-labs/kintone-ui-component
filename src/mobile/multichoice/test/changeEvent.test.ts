import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("changeEvent", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ];

    const initValues = [initItems[0].value, initItems[1].value];
    const expectValues = [initItems[1].value, initItems[2].value];

    const container = new MobileMultiChoice({
      items: initItems,
      value: initValues,
    });

    container.addEventListener("onchange", (event: any) => {
      expect(event.detail.value).to.have.equals(expectValues);
      expect(event.detail.oldValue).to.have.equals(initValues);
    });

    it("Function change event run successfully", async () => {
      const el = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-mobile-multi-choice__input-form__select__input"
      ) as HTMLSelectElement;
      itemsEl.dispatchEvent(new Event("change"));

      expect(itemsEl.childElementCount).to.equal(3);
      const event = new CustomEvent("onchange", {
        detail: { oldValue: initValues, value: expectValues },
      });
      container.dispatchEvent(event);
    });
  });
});
