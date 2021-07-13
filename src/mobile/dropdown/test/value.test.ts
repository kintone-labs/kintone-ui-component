import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

function generateInitItems() {
  return [
    { label: "-----", value: "-----" },
    { label: "Orange", value: "orange" },
    { label: "Apple", value: "apple" }
  ];
}

describe("MobileDropdown", () => {
  describe("value", () => {
    it("should be empty when initializing without props option", async () => {
      const container = new MobileDropdown({});
      const el = await fixture(container);
      const itemsEl = el.getElementsByTagName("option");
      expect(itemsEl.length).to.be.equal(0);
      expect(container.value).to.be.equal("");
    });

    it("exists on element when initializing with props option", async () => {
      const initItems = generateInitItems();
      const container = new MobileDropdown({
        items: generateInitItems(),
        value: initItems[1].value
      });
      const el = await fixture(container);
      const selectEl = el.querySelector("select") as HTMLSelectElement;
      expect(selectEl.value).to.be.equal("orange");
      expect(container.value).to.be.equal("orange");
    });

    it("exists on element when changing by setter", async () => {
      const initItems = generateInitItems();
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        value: initItems[1].value
      });
      container.value = initItems[2].value;
      const el = await fixture(container);
      const selectEl = el.querySelector("select") as HTMLSelectElement;
      expect(selectEl.value).to.be.equal("apple");
      expect(container.value).to.be.equal("apple");
    });

    it("is not selected when initializing with props option is empty string", async () => {
      const initItems = generateInitItems();
      const container = new MobileDropdown({
        label: "Orange",
        requiredIcon: false,
        items: initItems,
        value: ""
      });
      const el = await fixture(container);
      const selectEl = el.querySelector("select") as HTMLSelectElement;
      expect(selectEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be equal value string when initializing props option", async () => {
      const container = new MobileDropdown({});
      container.value = "value";
      const el = await fixture(container);
      const selectEl = el.querySelector("select") as HTMLSelectElement;
      expect(selectEl.value).to.be.equal("value");
      expect(container.value).to.be.equal("value");
    });
  });
});
