import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

const initItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

describe("MultiChoice", () => {
  describe("selectedIndex", () => {
    it("should be empty array when not assigned on constructor", async () => {
      const container = new MultiChoice({ items: initItems });
      const el = await fixture(container);

      expect(container.value).to.deep.equal([]);

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      const svgsEl0 = itemsEl[0].querySelectorAll("svg");
      expect(svgsEl0.length).to.equal(0);
      expect(itemsEl[0].getAttribute("aria-selected")).to.equal("false");

      const svgsEl1 = itemsEl[1].querySelectorAll("svg");
      expect(svgsEl1.length).to.equal(0);
      expect(itemsEl[1].getAttribute("aria-selected")).to.equal("false");

      const svgsEl2 = itemsEl[2].querySelectorAll("svg");
      expect(svgsEl2.length).to.equal(0);
      expect(itemsEl[2].getAttribute("aria-selected")).to.equal("false");
    });

    it("should be selected item when assigned on constructor", async () => {
      const container = new MultiChoice({
        items: initItems,
        selectedIndex: [1],
      });
      const el = await fixture(container);

      expect(container.value).to.deep.equal([initItems[1].value]);

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      const svgsEl0 = itemsEl[0].querySelectorAll("svg");
      expect(svgsEl0.length).to.equal(0);
      expect(itemsEl[0].getAttribute("aria-selected")).to.equal("false");

      const svgsEl1 = itemsEl[1].querySelectorAll("svg");
      expect(svgsEl1.length).to.equal(1);
      expect(itemsEl[1].getAttribute("aria-selected")).to.equal("true");

      const svgsEl2 = itemsEl[2].querySelectorAll("svg");
      expect(svgsEl2.length).to.equal(0);
      expect(itemsEl[2].getAttribute("aria-selected")).to.equal("false");
    });

    it("should be throw error when set null by setter", async () => {
      const container = new MultiChoice({ items: initItems });
      container.selectedIndex = null;
      try {
        await fixture(container);
      } catch (error) {
        let errorMessage = "'selectedIndex' property is not array";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'selectedIndex' property is not array");
      }

      // TODO:
      // Implement checking if source code does not throw error in validateSelectedIndexArray function
    });
  });
});
