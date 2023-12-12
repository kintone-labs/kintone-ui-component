import { expect, fixture } from "@open-wc/testing";

import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("items", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ];
    const disabledItems = [
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple", disabled: true },
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
        expectedValues[0],
      );

      expect(itemsEl[1].textContent?.trim()).to.have.equal(expectedLabels[1]);
      expect(itemsEl[1].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[1],
      );

      expect(itemsEl[2].textContent?.trim()).to.have.equal(expectedLabels[2]);
      expect(itemsEl[2].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[2],
      );

      expect(container.items).to.be.equal(initItems);
    });

    it("exists on element and set item label the same as value when initializing with props option without label", async () => {
      const container = new MobileMultiChoice({ items: initItemsWithoutLabel });

      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
      expect(itemsEl[0].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[0],
      );
      expect(itemsEl[0].textContent?.trim()).to.have.equal(expectedValues[0]);
      expect(itemsEl[1].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[1],
      );
      expect(itemsEl[1].textContent?.trim()).to.have.equal(expectedValues[1]);
      expect(itemsEl[2].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[2],
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
        expectedValues[0],
      );

      expect(itemsEl[1].textContent?.trim()).to.have.equal(expectedLabels[1]);
      expect(itemsEl[1].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[1],
      );

      expect(itemsEl[2].textContent?.trim()).to.have.equal(expectedLabels[2]);
      expect(itemsEl[2].getAttribute("value")?.trim()).to.have.equal(
        expectedValues[2],
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
        itemsForReplace[0].value,
      );

      expect(itemsEl[1].textContent?.trim()).to.have.equal(expectedLabels[2]);
      expect(itemsEl[1].getAttribute("value")?.trim()).to.have.equal(
        itemsForReplace[1].value,
      );
      expect(container.items).to.be.equal(itemsForReplace);
    });

    it("show error when initializing with props is null", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'items' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      // @ts-ignore
      const container = new MobileMultiChoice({ items: "12,12" });
      fixture(container);
    });

    it("show error when when changing by setter to null", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'items' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      // @ts-ignore
      const container = new MobileMultiChoice();
      container.items = null;
      fixture(container);
    });

    it("option should have disabled attribute when the item is disabled", async () => {
      const container = new MobileMultiChoice({ items: disabledItems });
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");

      await expect(itemsEl.length).to.be.equal(2);

      expect(itemsEl[0]).to.not.have.attr("disabled");
      expect(itemsEl[1]).to.have.attr("disabled");
    });
  });
});
