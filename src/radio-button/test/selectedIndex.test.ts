import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("RadioButton", () => {
  describe("selectedIndex", () => {
    it("should be none selected item when not assigned on constructor", async () => {
      const container = new RadioButton({ items: initItems });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-radio-button__group__select-menu__item"
      );

      expect(container.value).to.equal("");
      expect(itemsEl.length).to.equal(3);

      const circlesEl0 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl0.length).to.equal(1);

      const circlesEl1 = itemsEl[1].querySelectorAll("circle");
      expect(circlesEl1.length).to.equal(1);

      const circlesEl2 = itemsEl[2].querySelectorAll("circle");
      expect(circlesEl2.length).to.equal(1);
    });

    it("should be selected item when assigned on constructor", async () => {
      const container = new RadioButton({
        items: initItems,
        selectedIndex: 1,
      });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-radio-button__group__select-menu__item"
      );

      expect(container.value).to.equal(initItems[1].value);
      expect(itemsEl.length).to.equal(3);

      const circlesEl0 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl0.length).to.equal(1);

      const circlesEl1 = itemsEl[1].querySelectorAll("circle");
      expect(circlesEl1.length).to.equal(2);

      const circlesEl2 = itemsEl[2].querySelectorAll("circle");
      expect(circlesEl2.length).to.equal(1);
    });
  });
});
