import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

function generateInitItems() {
  return [
    { label: "-----", value: "-----" },
    { label: "Orange", value: "orange" },
    { label: "Apple", value: "apple" }
  ];
}

function generateReplacedItems() {
  return [
    { label: "Orange", value: "orange" },
    { label: "Apple", value: "apple" }
  ];
}

function generateDupplicatedItems() {
  return [
    { label: "Orange", value: "orange" },
    { label: "Apple", value: "orange" }
  ];
}

const expectedLabels = ["-----", "Orange", "Apple"];
const expectedValues = ["-----", "orange", "apple"];

describe("MobileDropdown", () => {
  describe("items", () => {
    it("does not exists on element when initializing without props option", async () => {
      const container = new MobileDropdown();
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(0);
    });

    it("exists on element when initializing with props option", async () => {
      const initItems = generateInitItems();
      const container = new MobileDropdown({ items: initItems });
      expect(container.items).to.be.equal(initItems);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);

      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
      }
    });

    it("exists on element when changing by setter", async () => {
      const container = new MobileDropdown();
      const initItems = generateInitItems();

      container.items = initItems;
      expect(container.items).to.be.equal(initItems);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);

      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
      }
    });

    it("should be replaced successfully", async () => {
      const container = new MobileDropdown({ items: generateInitItems() });
      const newItems = generateReplacedItems();
      container.items = newItems;
      expect(container.items).to.be.equal(newItems);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(2);

      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i + 1]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i + 1]);
      }
    });

    it("show error when initializing with props is null", async () => {
      // @ts-expect-error
      const container = new MobileDropdown({ items: null });
      try {
        await fixture(container);
      } catch (error) {
        expect(error.message).to.equal("'items' property is not array");
      }

      // TODO:
      // Implement checking if source code does not throw error in _validateItems function
    });

    it("show error when initializing value is duplicated", async () => {
      const dupplicatedItems = generateDupplicatedItems();
      const container = new MobileDropdown({ items: dupplicatedItems });
      try {
        await fixture(container);
      } catch (error) {
        expect(error.message).to.equal(
          "'items[1].value' property is duplicated"
        );
      }

      // TODO:
      // Implement checking if source code does not throw error in _validateItems function
    });

    it("show error when when changing by setter to null", async () => {
      const container = new MobileDropdown({});
      // @ts-expect-error
      container.items = null;

      try {
        await fixture(container);
      } catch (error) {
        expect(error.message).to.equal("'items' property is not array");
      }

      // TODO:
      // Implement checking if source code does not throw error in _validateItems function
    });

    it("show error when changing by setter to duplicated items vaule", async () => {
      const container = new MobileDropdown({});

      const dupplicatedItems = generateDupplicatedItems();
      container.items = dupplicatedItems;
      try {
        await fixture(container);
      } catch (error) {
        expect(error.message).to.equal(
          "'items[1].value' property is duplicated"
        );
      }

      // TODO:
      // Implement checking if source code does not throw error in _validateItems function
    });
  });
});
