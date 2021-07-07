import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("items", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" }
    ];

    it("does not exists on element when initializing without props option", async () => {
      const container = new MobileDropdown();
      const el = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      )!.children as HTMLSelectElement;
      if (!itemsEl.children || itemsEl.length !== 3) {
        await expect(true);
      }
    });

    it("exists on element when initializing with props option", async () => {
      const expectedValues = ["-----", "orange", "apple"];
      const container = new MobileDropdown({ items: initItems });
      const el = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      )!.children as HTMLSelectElement;
      if (!itemsEl.children || itemsEl.length !== 3) {
        await expect(false);
      }
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        await expect(value).to.have.equal(expectedValues[i]);
      }
      await expect(container.items).to.be.equal(initItems);
    });

    it("exists on element when changing by setter", async () => {
      const expectedValues = ["-----", "orange", "apple"];
      const container = new MobileDropdown();
      container.items = initItems;
      const el = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      )!.children as HTMLSelectElement;
      if (!itemsEl.children || itemsEl.length !== 3) {
        await expect(false);
      }
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        await expect(value).to.have.equal(expectedValues[i]);
      }
    });

    it("items prop replace successfully", async () => {
      const container = new MobileDropdown({
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
      const itemsEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      )!.children as HTMLSelectElement;
      if (!itemsEl.children || itemsEl.length !== 2) {
        expect(false);
      }
      for (let i = 0; i < itemsEl.length; i++) {
        const itemEl = itemsEl[i] as HTMLElement;
        const value = itemEl.getAttribute("value")?.trim();
        expect(value).to.have.equal(newitems[i].value);
      }
      expect(container.items).to.be.equal(newitems);
    });

    it("show error when initializing with props is null", async () => {
      const container = new MobileDropdown({
        // @ts-expect-error
        items: null,
        value: initItems[1].value
      });
      try {
        await fixture(container);
      } catch (error) {
        expect(error.message).to.equal("'items' property is not array");
      }
    });

    it("show error when initializing value is duplicated", async () => {
      const container = new MobileDropdown({
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
        value: initItems[1].value
      });
      try {
        await fixture(container);
      } catch (error) {
        expect(error.message).to.equal(
          "'items[1].value' property is duplicated"
        );
      }
    });

    it("show error when when changing by setter to null", async () => {
      const container = new MobileDropdown({});
      // @ts-expect-error
      container.items = null;
      try {
        await fixture(container);
      } catch (error) {
        expect(error.message).to.equal("'items' property is not array");
      }
    });

    it("show error when initializing value duplicated value", async () => {
      const expectedValues = ["-----", "orange", "Apple"];
      const container = new MobileDropdown({});
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
    });
  });
});
