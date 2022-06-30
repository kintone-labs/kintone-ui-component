import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("MobileDropdown", () => {
  describe("selectedIndex", () => {
    it("should be -1 when nitializing without props option", async () => {
      const container = new MobileRadioButton({ items: initItems });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item"
      );

      expect(container.selectedIndex).to.equal(-1);
      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.checked).to.equal(false);
      const circlesEl0 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl0.length).to.equal(1);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.checked).to.equal(false);
      const circlesEl1 = itemsEl[1].querySelectorAll("circle");
      expect(circlesEl1.length).to.equal(1);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.checked).to.equal(false);
      const circlesEl2 = itemsEl[2].querySelectorAll("circle");
      expect(circlesEl2.length).to.equal(1);
    });

    it("should be selected item when assigned on constructor", async () => {
      const container = new MobileRadioButton({
        items: initItems,
        selectedIndex: 1,
      });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item"
      );

      expect(container.selectedIndex).to.equal(1);
      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.checked).to.equal(false);
      const circlesEl0 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl0.length).to.equal(1);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.checked).to.equal(true);
      const circlesEl1 = itemsEl[1].querySelectorAll("circle");
      expect(circlesEl1.length).to.equal(2);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.checked).to.equal(false);
      const circlesEl2 = itemsEl[2].querySelectorAll("circle");
      expect(circlesEl2.length).to.equal(1);
    });
  });
});
