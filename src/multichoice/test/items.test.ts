import { expect, fixture } from "@open-wc/testing";

import { MultiChoice } from "../index";

const initItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

const initItemsWithoutLabel = [
  { value: "item-1" },
  { value: "item-2" },
  { value: "item-3" },
];
const initItemsWithoutValue = [{ label: "-----" }];
const replacedItems = [
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

const dupplicatedItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-1" },
];

describe("MobileCheckbox", () => {
  describe("items", () => {
    it("should not have item when not asigned on constuctor", async () => {
      const container = new MultiChoice();
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      expect(itemsEl.length).to.equal(0);
    });

    it("should set label the same as value when not assigned items label on constructor", async () => {
      const container = new MultiChoice({ items: initItemsWithoutLabel });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      expect(itemsEl.length).to.equal(3);

      expect(itemsEl[0].getAttribute("value")).to.equal(
        initItemsWithoutLabel[0].value
      );
      expect(itemsEl[0].textContent?.trim()).to.equal(
        initItemsWithoutLabel[0].value
      );

      expect(itemsEl[1].getAttribute("value")).to.equal(
        initItemsWithoutLabel[1].value
      );
      expect(itemsEl[1].textContent?.trim()).to.equal(
        initItemsWithoutLabel[1].value
      );

      expect(itemsEl[2].getAttribute("value")).to.equal(
        initItemsWithoutLabel[2].value
      );
      expect(itemsEl[2].textContent?.trim()).to.equal(
        initItemsWithoutLabel[2].value
      );
    });

    it("should set label the same as value when not assigned items label by setter", async () => {
      const container = new MultiChoice();
      container.items = initItemsWithoutLabel;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );

      expect(itemsEl.length).to.equal(3);

      expect(itemsEl[0].getAttribute("value")).to.equal(
        initItemsWithoutLabel[0].value
      );
      expect(itemsEl[0].textContent?.trim()).to.equal(
        initItemsWithoutLabel[0].value
      );

      expect(itemsEl[1].getAttribute("value")).to.equal(
        initItemsWithoutLabel[1].value
      );
      expect(itemsEl[1].textContent?.trim()).to.equal(
        initItemsWithoutLabel[1].value
      );

      expect(itemsEl[2].getAttribute("value")).to.equal(
        initItemsWithoutLabel[2].value
      );
      expect(itemsEl[2].textContent?.trim()).to.equal(
        initItemsWithoutLabel[2].value
      );
    });
    it('should set item value "" when asigned item value undefined on constuctor', async () => {
      const container = new MultiChoice({
        items: initItemsWithoutValue,
      });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      expect(itemsEl.length).to.equal(1);
      expect(itemsEl[0].getAttribute("value")).to.equal("");
    });
    it("should set items when assigned items on constructor", async () => {
      const container = new MultiChoice({ items: initItems });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );

      expect(container.items).to.be.equal(initItems);
      expect(itemsEl.length).to.equal(3);

      expect(itemsEl[0].getAttribute("value")).to.equal(initItems[0].value);
      expect(itemsEl[0].textContent?.trim()).to.equal(initItems[0].label);

      expect(itemsEl[1].getAttribute("value")).to.equal(initItems[1].value);
      expect(itemsEl[1].textContent?.trim()).to.equal(initItems[1].label);

      expect(itemsEl[2].getAttribute("value")).to.equal(initItems[2].value);
      expect(itemsEl[2].textContent?.trim()).to.equal(initItems[2].label);
    });

    it("should set items when assigned items by setter", async () => {
      const container = new MultiChoice();
      container.items = initItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );

      expect(container.items).to.be.equal(initItems);
      expect(itemsEl.length).to.equal(3);

      expect(itemsEl[0].getAttribute("value")).to.equal(initItems[0].value);
      expect(itemsEl[0].textContent?.trim()).to.equal(initItems[0].label);

      expect(itemsEl[1].getAttribute("value")).to.equal(initItems[1].value);
      expect(itemsEl[1].textContent?.trim()).to.equal(initItems[1].label);

      expect(itemsEl[2].getAttribute("value")).to.equal(initItems[2].value);
      expect(itemsEl[2].textContent?.trim()).to.equal(initItems[2].label);
    });

    it("should be changed when updated items by setter", async () => {
      const container = new MultiChoice({ items: initItems });
      container.items = replacedItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );

      expect(container.items).to.be.equal(replacedItems);
      expect(itemsEl.length).to.equal(2);

      expect(itemsEl[0].getAttribute("value")).to.equal(replacedItems[0].value);
      expect(itemsEl[0].textContent?.trim()).to.equal(replacedItems[0].label);

      expect(itemsEl[1].getAttribute("value")).to.equal(replacedItems[1].value);
      expect(itemsEl[1].textContent?.trim()).to.equal(replacedItems[1].label);
    });

    it("should be throw error when assigned null on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'items' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MultiChoice({ items: null });
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

      const container = new MultiChoice();
      container.items = null;
      fixture(container);
    });
  });
});
