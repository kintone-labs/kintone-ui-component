import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

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

const dupplicatedItems = [{ value: "apple" }, { value: "apple" }];

describe("MobileRadioButton", () => {
  describe("items", () => {
    it("should not have item when not asigned on constuctor", async () => {
      const container = new MobileRadioButton();
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item"
      );
      expect(itemsEl.length).to.equal(0);
    });

    it("should set label the same as value when not assigned items label on constructor", async () => {
      const container = new MobileRadioButton({ items: initItemsWithoutLabel });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item"
      );
      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.value).to.equal(initItemsWithoutLabel[0].value);
      const labelEl0 = itemsEl[0].querySelector("label") as HTMLLabelElement;
      expect(labelEl0.innerText).to.equal(initItemsWithoutLabel[0].value);
      const circlesEl0 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl0.length).to.equal(1);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.value).to.equal(initItemsWithoutLabel[1].value);
      const labelEl1 = itemsEl[1].querySelector("label") as HTMLLabelElement;
      expect(labelEl1.innerText).to.equal(initItemsWithoutLabel[1].value);
      const circlesEl1 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl1.length).to.equal(1);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.value).to.equal(initItemsWithoutLabel[2].value);
      const labelEl2 = itemsEl[2].querySelector("label") as HTMLLabelElement;
      expect(labelEl2.innerText).to.equal(initItemsWithoutLabel[2].value);
      const circlesEl2 = itemsEl[2].querySelectorAll("circle");
      expect(circlesEl2.length).to.equal(1);
    });

    it("items prop set successfully without label props", async () => {
      const container = new MobileRadioButton();
      container.items = initItemsWithoutLabel;
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item"
      );
      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.value).to.equal(initItemsWithoutLabel[0].value);
      const labelEl0 = itemsEl[0].querySelector("label") as HTMLLabelElement;
      expect(labelEl0.innerText).to.equal(initItemsWithoutLabel[0].value);
      const circlesEl0 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl0.length).to.equal(1);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.value).to.equal(initItemsWithoutLabel[1].value);
      const labelEl1 = itemsEl[1].querySelector("label") as HTMLLabelElement;
      expect(labelEl1.innerText).to.equal(initItemsWithoutLabel[1].value);
      const circlesEl1 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl1.length).to.equal(1);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.value).to.equal(initItemsWithoutLabel[2].value);
      const labelEl2 = itemsEl[2].querySelector("label") as HTMLLabelElement;
      expect(labelEl2.innerText).to.equal(initItemsWithoutLabel[2].value);
      const circlesEl2 = itemsEl[2].querySelectorAll("circle");
      expect(circlesEl2.length).to.equal(1);
    });

    it("should set items when assigned items on constructor", async () => {
      const container = new MobileRadioButton({ items: initItems });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item"
      );

      expect(container.items).to.be.equal(initItems);
      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.value).to.equal(initItems[0].value);
      const labelEl0 = itemsEl[0].querySelector("label") as HTMLLabelElement;
      expect(labelEl0.innerText).to.equal(initItems[0].label);
      const circlesEl0 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl0.length).to.equal(1);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.value).to.equal(initItems[1].value);
      const labelEl1 = itemsEl[1].querySelector("label") as HTMLLabelElement;
      expect(labelEl1.innerText).to.equal(initItems[1].label);
      const circlesEl1 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl1.length).to.equal(1);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.value).to.equal(initItems[2].value);
      const labelEl2 = itemsEl[2].querySelector("label") as HTMLLabelElement;
      expect(labelEl2.innerText).to.equal(initItems[2].label);
      const circlesEl2 = itemsEl[2].querySelectorAll("circle");
      expect(circlesEl2.length).to.equal(1);
    });

    it('should set item value "" when asigned item value undefined on constuctor', async () => {
      const container = new MobileRadioButton({
        items: initItemsWithoutValue,
      });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item"
      );
      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.value).to.equal("");
    });
    it("should set items when assigned items by setter", async () => {
      const container = new MobileRadioButton();
      container.items = initItems;
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item"
      );

      expect(container.items).to.be.equal(initItems);
      expect(itemsEl.length).to.equal(3);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.value).to.equal(initItems[0].value);
      const labelEl0 = itemsEl[0].querySelector("label") as HTMLLabelElement;
      expect(labelEl0.innerText).to.equal(initItems[0].label);
      const circlesEl0 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl0.length).to.equal(1);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.value).to.equal(initItems[1].value);
      const labelEl1 = itemsEl[1].querySelector("label") as HTMLLabelElement;
      expect(labelEl1.innerText).to.equal(initItems[1].label);
      const circlesEl1 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl1.length).to.equal(1);

      const inputEl2 = itemsEl[2].querySelector("input") as HTMLInputElement;
      expect(inputEl2.value).to.equal(initItems[2].value);
      const labelEl2 = itemsEl[2].querySelector("label") as HTMLLabelElement;
      expect(labelEl2.innerText).to.equal(initItems[2].label);
      const circlesEl2 = itemsEl[2].querySelectorAll("circle");
      expect(circlesEl2.length).to.equal(1);
    });

    it("should be changed when updated items by setter", async () => {
      const container = new MobileRadioButton({ items: initItems });
      container.items = replacedItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-mobile-radio-button__group__select-menu__item"
      );

      expect(container.items).to.be.equal(replacedItems);
      expect(itemsEl.length).to.equal(2);

      const inputEl0 = itemsEl[0].querySelector("input") as HTMLInputElement;
      expect(inputEl0.value).to.equal(replacedItems[0].value);
      const labelEl0 = itemsEl[0].querySelector("label") as HTMLLabelElement;
      expect(labelEl0.innerText).to.equal(replacedItems[0].label);
      const circlesEl0 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl0.length).to.equal(1);

      const inputEl1 = itemsEl[1].querySelector("input") as HTMLInputElement;
      expect(inputEl1.value).to.equal(replacedItems[1].value);
      const labelEl1 = itemsEl[1].querySelector("label") as HTMLLabelElement;
      expect(labelEl1.innerText).to.equal(replacedItems[1].label);
      const circlesEl1 = itemsEl[0].querySelectorAll("circle");
      expect(circlesEl1.length).to.equal(1);
    });

    it("should be throw error when assigned null by setter", async () => {
      const container = new MobileRadioButton();
      try {
        container.items = null;
        await fixture(container);
      } catch (error) {
        let errorMessage = "'items' property is not array";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'items' property is not array");
      }

      // TODO:
      // Implement checking if source code does not throw error in validateItems function
    });
  });
});
