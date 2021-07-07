import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("changeEvent", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" }
    ];

    const container = new MobileDropdown({
      items: initItems,
      value: initItems[0].value
    });

    container.addEventListener("change", (event: any) => {
      expect(event.detail.value).to.have.equals(initItems[2].value);
      expect(event.detail.oldValue).to.have.equals(initItems[0].value);
    });

    it("change event run successfully", async () => {
      const el = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      ) as HTMLSelectElement;
      if (itemsEl.length > 0) {
        container.dispatchEvent(
          new CustomEvent("change", {
            detail: { oldValue: initItems[0].value, value: initItems[2].value }
          })
        );
      }
    });
  });
});
