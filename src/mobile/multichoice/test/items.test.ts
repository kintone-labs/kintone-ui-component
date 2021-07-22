import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("items", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" }
    ];
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
        items: initItems
      });
      const newitems = [
        {
          label: initItems[1].label,
          value: initItems[1].value
        },
        {
          label: initItems[2].label,
          value: initItems[2].value
        }
      ];
      container.items = newitems;

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");

      expect(itemsEl.length).to.be.equal(2);

      expect(itemsEl[0].textContent?.trim()).to.have.equal(expectedLabels[1]);
      expect(itemsEl[0].getAttribute("value")?.trim()).to.have.equal(
        newitems[0].value
      );

      expect(itemsEl[1].textContent?.trim()).to.have.equal(expectedLabels[2]);
      expect(itemsEl[1].getAttribute("value")?.trim()).to.have.equal(
        newitems[1].value
      );
      expect(container.items).to.be.equal(newitems);
    });

    it("show error when initializing with props is null", async () => {
      const container = new MobileMultiChoice({
        // @ts-expect-error
        items: null,
        value: [initItems[1].value]
      });
      try {
        await fixture(container);
      } catch (error) {
        expect(error.message).to.equal("'items' property is not array");
      }
      // TODO:
      // Implement checking if source code does not throw error in _validateItems function
    });

    it("show error when initializing value is duplicated", async () => {
      const container = new MobileMultiChoice({
        items: [
          {
            label: initItems[0].label,
            value: initItems[0].value
          },
          {
            label: initItems[1].label,
            value: initItems[0].value
          }
        ],
        value: [initItems[1].value]
      });
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
      const container = new MobileMultiChoice({});
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

    it("show error when initializing value duplicated value", async () => {
      const container = new MobileMultiChoice({});
      container.items = [
        {
          value: initItems[0].value
        },
        {
          value: initItems[0].value
        }
      ];
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
