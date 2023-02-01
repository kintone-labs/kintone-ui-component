import { expect, fixture } from "@open-wc/testing";

import { Dropdown } from "../index";

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

const replacedItems = [
  { label: "-----", value: "-----" },
  { label: "Apple", value: "apple" },
];
const initItemsWithoutValue = [{ label: "-----" }, { label: "orange" }];
const dupplicatedItems = [{ value: "apple" }, { value: "apple" }];

describe("Dropdown", () => {
  describe("items", () => {
    it("should not have item when not asigned on constuctor", async () => {
      const container = new Dropdown();
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );

      expect(itemsEl.length).to.equal(0);
    });

    it("should set label the same as value when not assigned items label on constructor", async () => {
      const container = new Dropdown({
        items: initItemsWithoutLabel,
        value: initItemsWithoutLabel[1].value,
      });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
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
      const container = new Dropdown();
      container.items = initItemsWithoutLabel;
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
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

    it("should set items when assigned items by setter", async () => {
      const container = new Dropdown({ items: initItems });
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );

      expect(itemsEl.length).to.equal(3);

      expect(itemsEl[0].getAttribute("value")).to.equal(initItems[0].value);
      expect(itemsEl[0].textContent?.trim()).to.equal(initItems[0].label);

      expect(itemsEl[1].getAttribute("value")).to.equal(initItems[1].value);
      expect(itemsEl[1].textContent?.trim()).to.equal(initItems[1].label);

      expect(itemsEl[2].getAttribute("value")).to.equal(initItems[2].value);
      expect(itemsEl[2].textContent?.trim()).to.equal(initItems[2].label);
    });

    it("should be changed when updated items by setter", async () => {
      const container = new Dropdown({ items: initItems });
      container.items = replacedItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
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

      const container = new Dropdown({ items: null });
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

      const container = new Dropdown();
      container.items = null;
      fixture(container);
    });
  });
});
