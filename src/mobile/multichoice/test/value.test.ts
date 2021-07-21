import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("value", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" }
    ];
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "apple"];

    it("should be empty when initializing without props option", async () => {
      const container = new MobileMultiChoice({});
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(0);
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
      }
      expect(container.value).to.be.an("array").that.is.empty;
    });

    it("exists on element when initializing with props option", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
        value: [initItems[1].value]
      });
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
      }
      expect(container.value)
        .to.be.an("array")
        .to.have.lengthOf(1)
        .that.include(expectedValues[1]);
    });

    it("exists on element when changing by setter", async () => {
      const container = new MobileMultiChoice({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        value: [initItems[0].value]
      });
      container.value = [initItems[1].value];
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const label = itemEl.textContent?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
      }
      expect(container.value)
        .to.be.an("array")
        .to.have.lengthOf(1)
        .that.include(expectedValues[1]);
    });

    it("is not selected when initializing with props option is empty array", async () => {
      const container = new MobileMultiChoice({
        label: "Orange",
        requiredIcon: false,
        items: initItems,
        value: []
      });
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLOptionElement;
        const label = itemEl.text?.trim();
        expect(label).to.have.equal(expectedLabels[i]);
        expect(itemEl.getAttribute("selected")).to.be.equal(null);
      }
    });

    it("should be equal value array string when initializing props option", async () => {
      const container = new MobileMultiChoice({});
      await fixture(container);
      container.value = [initItems[2].value];
      const getval = container.value;
      expect(getval)
        .to.be.an("array")
        .to.have.lengthOf(1)
        .that.include(expectedValues[2]);
    });
  });
});
