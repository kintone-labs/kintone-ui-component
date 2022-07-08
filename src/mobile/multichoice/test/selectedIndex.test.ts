import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("selectedIndex", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ];

    it("should be empty when initializing without props option", async () => {
      const container = new MobileMultiChoice({});
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(0);
      expect(container.value).to.be.an("array");
      expect(container.value.length).to.be.equal(0);
    });

    it("exists on element when initializing with props option", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
        selectedIndex: [1],
      });
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
      expect(container.selectedIndex)
        .to.be.an("array")
        .to.have.lengthOf(1)
        .that.include(1);
    });

    it("is not selected when initializing with props option is empty array", async () => {
      const container = new MobileMultiChoice({
        label: "Orange",
        requiredIcon: false,
        items: initItems,
        selectedIndex: [],
      });
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
      expect(itemsEl[0].getAttribute("selected")).to.be.equal(null);
      expect(itemsEl[1].getAttribute("selected")).to.be.equal(null);
      expect(itemsEl[2].getAttribute("selected")).to.be.equal(null);
    });

    it("should be equal selectedIndex array string when initializing props option", async () => {
      const container = new MobileMultiChoice({});
      await fixture(container);
      container.selectedIndex = [2];
      const getval = container.selectedIndex;
      expect(getval).to.be.an("array").to.have.lengthOf(1).that.include(2);
    });
  });
});
