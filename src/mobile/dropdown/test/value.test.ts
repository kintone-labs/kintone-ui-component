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

    // it("value default prop is not set", async () => {
    //   const container = new MobileDropdown({
    //     items: initItems
    //   });
    //   await fixture(container);
    //   const itemsEl = container.querySelector(
    //     ".kuc-mobile-dropdown__input-form__select__input"
    //   )!.children as HTMLSelectElement;
    //   if (!itemsEl.children || itemsEl.length !== 3) {
    //     await expect(false);
    //   }
    //   for (let i = 0; i < itemsEl.length; i++) {
    //     const itemEl = itemsEl[i] as HTMLElement;
    //     const label = itemEl.textContent?.trim();
    //     await expect(label).to.have.equal(expectedLabels[i]);
    //   }
    //   await expect(container.value).to.be.equal("");
    // });

    // it("value prop set successfully", async () => {
    //   const container = new MobileDropdown({
    //     items: initItems,
    //     value: initItems[1].value
    //   });
    //   await fixture(container);
    //   const itemsEl = container.querySelector(
    //     ".kuc-mobile-dropdown__input-form__select__input"
    //   )!.children as HTMLSelectElement;
    //   if (!container.children || itemsEl.length !== 3) {
    //     await expect(false);
    //   }
    //   for (let i = 0; i < itemsEl.length; i++) {
    //     const itemEl = itemsEl[i] as HTMLElement;
    //     const label = itemEl.textContent?.trim();
    //     await expect(label).to.have.equal(expectedLabels[i]);
    //   }
    //   await expect(container.value).to.be.equal(expectedValues[1]);
    // });

    // it("value prop replace successfully", async () => {
    //   const container = new MobileDropdown({
    //     label: "Fruit",
    //     requiredIcon: false,
    //     items: initItems,
    //     value: initItems[0].value
    //   });
    //   container.value = initItems[1].value;
    //   await fixture(container);
    //   const itemsEl = container.querySelector(
    //     ".kuc-mobile-dropdown__input-form__select__input"
    //   )!.children as HTMLSelectElement;
    //   if (!itemsEl.children || itemsEl.length !== 3) {
    //     await expect(false);
    //   }
    //   for (let i = 0; i < itemsEl.length; i++) {
    //     const itemEl = itemsEl[i] as HTMLElement;
    //     const label = itemEl.textContent?.trim();
    //     await expect(label).to.have.equal(expectedLabels[i]);
    //   }
    //   await expect(container.value).to.be.equal(expectedValues[1]);
    // });

    it("value default prop set to null", async () => {
      const container = new MobileDropdown({
        label: "Orange",
        requiredIcon: false,
        items: initItems,
        // @ts-ignore
        value: null
      });
      const el = await fixture(container);
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

    it("set to null value", async () => {
      const container = new MobileDropdown({
        label: "Orange",
        requiredIcon: false,
        items: initItems,
        value: initItems[0].value
      });
      // @ts-ignore
      container.value = null;
      const el = await fixture(container);
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
      }
      await expect(container.value).to.be.equal(null);
    });

    it("set nonexistent value", async () => {
      const container = new MobileDropdown({});
      await fixture(container);
      container.value = expectedValues[2];
      const getval = container.value;
      await expect(getval).to.be.equal(expectedValues[2]);
    });

    it("set number value", async () => {
      const container = new MobileDropdown({});
      // @ts-ignore
      container.value = 1;
      const getval = container.value;
      await expect(getval).to.be.equal(1);
    });
  });
});
