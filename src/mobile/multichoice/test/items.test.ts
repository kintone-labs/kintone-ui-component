import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("items", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ];
    const duplicateItems = [
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "orange" },
    ];
    const itemsForReplace = [
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ];
    const initItemsWithoutLabel = [
      { value: "-----" },
      { value: "orange" },
      { value: "apple" },
    ];
    const initItemsWithoutValue = [{ label: "-----" }];
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "apple"];

    it("does not exists on element when initializing without props option", async () => {
      const container = new MobileMultiChoice();
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(0);
    });

    it("exists on element when initializing with props option", async () => {
      const container = new MobileMultiChoice({ items: initItems });
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");

      expect(itemsEl.length).to.be.equal(3);
      expect(itemsEl[0].textContent?.trim()).to.have.equal(expectedLabels[0]);
      expect(itemsEl[0].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[0]
      );

      expect(itemsEl[1].textContent?.trim()).to.have.equal(expectedLabels[1]);
      expect(itemsEl[1].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[1]
      );

      expect(itemsEl[2].textContent?.trim()).to.have.equal(expectedLabels[2]);
      expect(itemsEl[2].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[2]
      );

      expect(container.items).to.be.equal(initItems);
    });

    it("exists on element and set item label the same as value when initializing with props option without label", async () => {
      const container = new MobileMultiChoice({ items: initItemsWithoutLabel });

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
      expect(itemsEl[0].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[0]
      );
      expect(itemsEl[0].textContent?.trim()).to.have.equal(expectedValues[0]);
      expect(itemsEl[1].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[1]
      );
      expect(itemsEl[1].textContent?.trim()).to.have.equal(expectedValues[1]);
      expect(itemsEl[2].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[2]
      );
      expect(itemsEl[2].textContent?.trim()).to.have.equal(expectedValues[2]);
    });
    it('exists on element and set item value "" when initializing with props option without value', async () => {
      const container = new MobileMultiChoice({ items: initItemsWithoutValue });

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(1);
      expect(itemsEl[0].getAttribute("value")?.trim()).to.have.equal("");
    });
    it("exists on element when changing by setter", async () => {
      const container = new MobileMultiChoice();
      container.items = initItems;
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");

      expect(itemsEl.length).to.be.equal(3);
      expect(itemsEl[0].textContent?.trim()).to.have.equal(expectedLabels[0]);
      expect(itemsEl[0].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[0]
      );

      expect(itemsEl[1].textContent?.trim()).to.have.equal(expectedLabels[1]);
      expect(itemsEl[1].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[1]
      );

      expect(itemsEl[2].textContent?.trim()).to.have.equal(expectedLabels[2]);
      expect(itemsEl[2].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[2]
      );
      expect(container.items).to.be.equal(initItems);
    });

    it("items prop replace successfully", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
      });
      container.items = itemsForReplace;

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");

      expect(itemsEl.length).to.be.equal(2);

      expect(itemsEl[0].textContent?.trim()).to.have.equal(expectedLabels[1]);
      expect(itemsEl[0].getAttribute("value")?.trim()).to.have.equal(
        itemsForReplace[0].value
      );

      expect(itemsEl[1].textContent?.trim()).to.have.equal(expectedLabels[2]);
      expect(itemsEl[1].getAttribute("value")?.trim()).to.have.equal(
        itemsForReplace[1].value
      );
      expect(container.items).to.be.equal(itemsForReplace);
    });

    it("show error when initializing with props is null", async () => {
      const container = new MobileMultiChoice({
        items: null,
      });
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
      const container = new MobileMultiChoice({
        items: duplicateItems,
        value: [duplicateItems[1].value],
      });
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
      const container = new MobileMultiChoice({});
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

    it("show error when initializing value duplicated value", async () => {
      const container = new MobileMultiChoice({});
      container.items = duplicateItems;
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
