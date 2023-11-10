import { expect, fixture } from "@open-wc/testing";

import { MobileCheckbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

const initItemsWithoutLabel = [
  { value: "-----" },
  { value: "orange" },
  { value: "apple" },
];

const initItemsWithoutValue = [{ label: "-----" }];
const replacedItems = [
  { label: "-----", value: "-----" },
  { label: "Apple", value: "apple" },
];

const disabledItems = [
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple", disabled: true },
];

describe("MobileCheckbox", () => {
  describe("items", () => {
    it("should not have item when not assigned on constructor", async () => {
      const container = new MobileCheckbox();
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item",
      );

      expect(itemsEl.length).to.equal(0);
    });

    it("should set label the same as value when not assigned items label on constructor", async () => {
      const container = new MobileCheckbox({ items: initItemsWithoutLabel });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item",
      );

      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.hasAttribute("checked")).to.equal(false);
      expect(inputEl0.value).to.equal(initItemsWithoutLabel[0].value);
      const labelEl0 = itemsEl[0].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl0.innerText).to.equal(initItemsWithoutLabel[0].value);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.hasAttribute("checked")).to.equal(false);
      expect(inputEl1.value).to.equal(initItemsWithoutLabel[1].value);
      const labelEl1 = itemsEl[1].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl1.innerText).to.equal(initItemsWithoutLabel[1].value);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.hasAttribute("checked")).to.equal(false);
      expect(inputEl2.value).to.equal(initItemsWithoutLabel[2].value);
      const labelEl2 = itemsEl[2].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl2.innerText).to.equal(initItemsWithoutLabel[2].value);
    });

    it("should set label the same as value when not assigned items label by setter", async () => {
      const container = new MobileCheckbox();
      container.items = initItemsWithoutLabel;
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item",
      );

      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.hasAttribute("checked")).to.equal(false);
      expect(inputEl0.value).to.equal(initItemsWithoutLabel[0].value);
      const labelEl0 = itemsEl[0].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl0.innerText).to.equal(initItemsWithoutLabel[0].value);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.hasAttribute("checked")).to.equal(false);
      expect(inputEl1.value).to.equal(initItemsWithoutLabel[1].value);
      const labelEl1 = itemsEl[1].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl1.innerText).to.equal(initItemsWithoutLabel[1].value);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.hasAttribute("checked")).to.equal(false);
      expect(inputEl2.value).to.equal(initItemsWithoutLabel[2].value);
      const labelEl2 = itemsEl[2].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl2.innerText).to.equal(initItemsWithoutLabel[2].value);
    });

    it("should set items when assigned items on constructor", async () => {
      const container = new MobileCheckbox({ items: initItems });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item",
      );

      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.hasAttribute("checked")).to.equal(false);
      expect(inputEl0.value).to.equal(initItems[0].value);
      const labelEl0 = itemsEl[0].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl0.innerText).to.equal(initItems[0].label);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.hasAttribute("checked")).to.equal(false);
      expect(inputEl1.value).to.equal(initItems[1].value);
      const labelEl1 = itemsEl[1].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl1.innerText).to.equal(initItems[1].label);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.hasAttribute("checked")).to.equal(false);
      expect(inputEl2.value).to.equal(initItems[2].value);
      const labelEl2 = itemsEl[2].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl2.innerText).to.equal(initItems[2].label);
    });

    it("should set items when assigned items by setter", async () => {
      const container = new MobileCheckbox({ items: initItems });
      container.items = initItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item",
      );

      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.hasAttribute("checked")).to.equal(false);
      expect(inputEl0.value).to.equal(initItems[0].value);
      const labelEl0 = itemsEl[0].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl0.innerText).to.equal(initItems[0].label);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.hasAttribute("checked")).to.equal(false);
      expect(inputEl1.value).to.equal(initItems[1].value);
      const labelEl1 = itemsEl[1].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl1.innerText).to.equal(initItems[1].label);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.hasAttribute("checked")).to.equal(false);
      expect(inputEl2.value).to.equal(initItems[2].value);
      const labelEl2 = itemsEl[2].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl2.innerText).to.equal(initItems[2].label);
    });

    it("should be changed when updated items by setter", async () => {
      const container = new MobileCheckbox({ items: initItems });
      container.items = replacedItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item",
      );

      expect(container.items).to.be.equal(replacedItems);
      expect(itemsEl.length).to.equal(2);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.hasAttribute("checked")).to.equal(false);
      expect(inputEl0.value).to.equal(replacedItems[0].value);
      const labelEl0 = itemsEl[0].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl0.innerText).to.equal(replacedItems[0].label);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.hasAttribute("checked")).to.equal(false);
      expect(inputEl1.value).to.equal(replacedItems[1].value);
      const labelEl1 = itemsEl[1].querySelector(
        ".kuc-mobile-checkbox__group__select-menu__item__label",
      ) as HTMLDivElement;
      expect(labelEl1.innerText).to.equal(replacedItems[1].label);
    });

    it("should be throw error when assigned null on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'items' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MobileCheckbox({ items: null });
      fixture(container);
    });

    it("should be throw error when assigned null by setter", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'items' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MobileCheckbox();
      container.items = null;
      fixture(container);
    });

    it('should set item value "" when assigned item value undefined on constructor', async () => {
      const container = new MobileCheckbox({
        items: initItemsWithoutValue,
      });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item",
      );
      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.value).to.equal("");
    });

    it("should set items when assigned disabled items on constructor", async () => {
      const container = new MobileCheckbox({ items: disabledItems });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item",
      );

      await expect(
        itemsEl[0].classList.contains(
          "kuc-mobile-checkbox__group__select-menu__item--disabled",
        ),
      ).to.equal(false);
      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.hasAttribute("disabled")).to.equal(false);

      await expect(
        itemsEl[1].classList.contains(
          "kuc-mobile-checkbox__group__select-menu__item--disabled",
        ),
      ).to.equal(true);
      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.hasAttribute("disabled")).to.equal(true);
    });
  });
});
