import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];
const initItemsWithoutLabel = [
  { value: "-----" },
  { value: "orange" },
  { value: "apple" },
];
const initItemsWithoutValue = [{ label: "-----" }];
const replacedItems = [
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];
const dupplicatedItems = [
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "orange" },
];

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
      const container = new MobileDropdown({ items: initItems });
      expect(container.items).to.be.equal(initItems);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
      }
    });

    it("exists on element when changing by setter", async () => {
      const container = new MobileDropdown();

      container.items = initItems;
      expect(container.items).to.be.equal(initItems);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
      }
    });

    it("exists on element and set label as the same as value when initializing with props option without label", async () => {
      const container = new MobileDropdown({ items: initItemsWithoutLabel });
      expect(container.items).to.be.equal(initItemsWithoutLabel);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedValues[i]);
      }
    });
    it('exists on element and set value "" when initializing with props option without value', async () => {
      const container = new MobileDropdown({ items: initItemsWithoutValue });
      expect(container.items).to.be.equal(initItemsWithoutValue);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(1);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal("");
      }
    });
    it("should be replaced successfully", async () => {
      const container = new MobileDropdown({ items: initItems });
      container.items = replacedItems;
      expect(container.items).to.be.equal(replacedItems);

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(2);

      for (let i = 1; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(expectedValues[i + 1]);

        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i + 1]);
      }
    });

    it("show error when initializing with props is null", async () => {
      const container = new MobileDropdown({ items: null });
      try {
        await fixture(container);
      } catch (error) {
        let errorMessage = "'items' property is not array";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'items' property is not array");
      }

      // TODO:
      // Implement checking if source code does not throw error in validateItems function
    });

    it("show error when initializing value is duplicated", async () => {
      const container = new MobileDropdown({ items: dupplicatedItems });
      try {
        await fixture(container);
      } catch (error) {
        let errorMessage = "'items[1].value' property is duplicated";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal(
          "'items[1].value' property is duplicated"
        );
      }

      // TODO:
      // Implement checking if source code does not throw error in validateItems function
    });

    it("show error when when changing by setter to null", async () => {
      const container = new MobileDropdown({});
      container.items = null;

      try {
        await fixture(container);
      } catch (error) {
        let errorMessage = "'items' property is not array";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'items' property is not array");
      }

      // TODO:
      // Implement checking if source code does not throw error in validateItems function
    });

    it("show error when changing by setter to duplicated items vaule", async () => {
      const container = new MobileDropdown({});

      container.items = dupplicatedItems;
      try {
        await fixture(container);
      } catch (error) {
        let errorMessage = "'items[1].value' property is duplicated";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal(
          "'items[1].value' property is duplicated"
        );
      }

      // TODO:
      // Implement checking if source code does not throw error in validateItems function
    });
  });
});
