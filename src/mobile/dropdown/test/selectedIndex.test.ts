import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

describe("MobileDropdown", () => {
  describe("selectedIndex", () => {
    it("should be -1 when nitializing without props option", async () => {
      const container = new MobileDropdown({});
      const el = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      ) as HTMLSelectElement;
      expect(itemsEl.selectedIndex).to.be.equal(-1);
    });

    it("should be 1 when assigned 1 on constructor", async () => {
      const container = new MobileDropdown({
        items: initItems,
        selectedIndex: 1
      });
      const el = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      ) as HTMLSelectElement;
      expect(itemsEl.selectedIndex).to.be.equal(1);
    });

    it("should be 1 when assigning value and not assigning selectedIndex on constructor", async () => {
      const container = new MobileDropdown({
        items: initItems,
        value: initItems[1].value
      });
      const el = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      ) as HTMLSelectElement;
      expect(itemsEl.selectedIndex).to.be.equal(1);
    });

    it("should be 2 when changing by setter to 2", async () => {
      const container = new MobileDropdown({
        items: initItems,
        selectedIndex: 1
      });
      container.selectedIndex = 2;
      const el = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      ) as HTMLSelectElement;
      expect(itemsEl.selectedIndex).to.be.equal(2);
    });
  });
});
