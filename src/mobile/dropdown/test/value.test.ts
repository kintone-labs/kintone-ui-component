import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("value", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" }
    ];
    const expectedLabels = ["-----", "Orange", "Apple"];
    const expectedValues = ["-----", "orange", "apple"];

    it("should be empty when initializing without props option", async () => {
      const container = new MobileDropdown({});
      await fixture(container);
      const itemsEl = container.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      )!.children as HTMLSelectElement;
      if (!itemsEl.children || itemsEl.length !== 3) {
        await expect(false);
      }
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const label = itemEl.textContent?.trim();
        await expect(label).to.have.equal(expectedLabels[i]);
      }
      await expect(container.value).to.be.equal("");
    });

    it("exists on element when initializing with props option", async () => {
      const container = new MobileDropdown({
        items: initItems,
        value: initItems[1].value
      });
      await fixture(container);
      const itemsEl = container.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      )!.children as HTMLSelectElement;
      if (!container.children || itemsEl.length !== 3) {
        await expect(false);
      }
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const label = itemEl.textContent?.trim();
        await expect(label).to.have.equal(expectedLabels[i]);
      }
      await expect(container.value).to.be.equal(expectedValues[1]);
    });

    it("exists on element when changing by setter", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        value: initItems[0].value
      });
      container.value = initItems[1].value;
      await fixture(container);
      const itemsEl = container.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      )!.children as HTMLSelectElement;
      if (!itemsEl.children || itemsEl.length !== 3) {
        await expect(false);
      }
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const label = itemEl.textContent?.trim();
        await expect(label).to.have.equal(expectedLabels[i]);
      }
      await expect(container.value).to.be.equal(expectedValues[1]);
    });

    it("is not selected when initializing with props option is empty string", async () => {
      const container = new MobileDropdown({
        label: "Orange",
        requiredIcon: false,
        items: initItems,
        value: ""
      });
      await fixture(container);
      const itemsEl = container.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      )!.children as HTMLSelectElement;
      if (!itemsEl.children || itemsEl.length !== 3) {
        await expect(false);
      }
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLOptionElement;
        const label = itemEl.text?.trim();
        await expect(label).to.have.equal(expectedLabels[i]);
        await expect(itemEl.getAttribute("selected")).to.be.equal(null);
      }
    });

    it("should be equal value string when initializing props option", async () => {
      const container = new MobileDropdown({});
      await fixture(container);
      container.value = initItems[2].value;
      const getval = container.value;
      await expect(getval).to.be.equal(initItems[2].value);
    });
  });
});
