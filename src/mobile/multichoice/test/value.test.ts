import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("value", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ];
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "apple"];

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
        value: [initItems[1].value],
      });
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
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
        value: [initItems[0].value],
      });
      container.value = [initItems[1].value];
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
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
        value: [],
      });
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(3);
      expect(itemsEl[0].getAttribute("selected")).to.be.equal(null);
      expect(itemsEl[1].getAttribute("selected")).to.be.equal(null);
      expect(itemsEl[2].getAttribute("selected")).to.be.equal(null);
    });

    it("should be emtpy array when set [] by setter", async () => {
      const container = new MobileMultiChoice({
        label: "Orange",
        requiredIcon: false,
        items: initItems,
        value: [initItems[1].value],
      });
      const el = await fixture(container);
      container.value = [];
      await elementUpdated(el);
      expect(container.value).to.deep.equal([]);

      const itemsEl = el.getElementsByTagName("option");

      expect(itemsEl.length).to.be.equal(3);
      expect(itemsEl[0].getAttribute("selected")).to.be.equal(null);
      expect(itemsEl[1].getAttribute("selected")).to.be.equal(null);
      expect(itemsEl[2].getAttribute("selected")).to.be.equal(null);
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
