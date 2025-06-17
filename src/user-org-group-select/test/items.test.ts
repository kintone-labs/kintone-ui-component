import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { UserOrgGroupSelect } from "../index";

const initItems = [
  { label: "User 1", value: "user1", type: "user" },
  { label: "User 2", value: "user2", type: "user" },
  { label: "User 3", value: "user3", type: "user" },
  { label: "Group 1", value: "group1", type: "group" },
  { label: "Group 2", value: "group2", type: "group" },
  { label: "Group 3", value: "group3", type: "group" },
  { label: "Organization 1", value: "org1", type: "organization" },
  { label: "Organization 2", value: "org2", type: "organization" },
];

const initItemsWithoutLabel = [
  { value: "user1", type: "user" },
  { value: "user2", type: "user" },
  { value: "user3", type: "user" },
  { value: "group1", type: "group" },
  { value: "group2", type: "group" },
  { value: "group3", type: "group" },
  { value: "org1", type: "organization" },
  { value: "org2", type: "organization" },
];

const replacedItems = [{ label: "User 1", value: "user1", type: "user" }];

describe("UserOrgGroupSelect", () => {
  describe("items", () => {
    it("should not have item when not assigned on constructor", async () => {
      const container = new UserOrgGroupSelect();
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(itemsEl.length).to.equal(0);
    });

    it("should set label the same as value when not assigned items label on constructor", async () => {
      const container = new UserOrgGroupSelect({
        items: initItemsWithoutLabel,
        value: [initItemsWithoutLabel[0].value],
      });
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(itemsEl.length).to.equal(initItemsWithoutLabel.length);
      const selectedItemEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item",
      );
      expect(selectedItemEl.length).to.equal(1);
      const selectedItemLabel = selectedItemEl[0].querySelector(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item__content__text",
      ) as HTMLElement;
      expect(selectedItemLabel.innerText).to.equal(
        initItemsWithoutLabel[0].value,
      );
    });

    it("should set label the same as value when not assigned items label by setter", async () => {
      const container = new UserOrgGroupSelect();
      container.items = initItemsWithoutLabel;
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(itemsEl.length).to.equal(initItemsWithoutLabel.length);
      itemsEl.forEach((itemEl, index) => {
        const itemLabel = itemEl.querySelector(
          ".kuc-user-org-group-select__group__container__select-area__select-menu__item__text",
        ) as HTMLElement;
        expect(itemLabel.innerText).to.equal(
          initItemsWithoutLabel[index].value,
        );
      });
      const selectedItemEl = el.querySelectorAll(
        ".uc-user-org-group-select__group__container__select-area__selected-list__item",
      );
      expect(selectedItemEl.length).to.equal(0);
    });

    it("should set items when assigned items on constructor", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(itemsEl.length).to.equal(initItems.length);
      itemsEl.forEach((itemEl, index) => {
        const itemLabel = itemEl.querySelector(
          ".kuc-user-org-group-select__group__container__select-area__select-menu__item__text",
        ) as HTMLElement;
        expect(itemLabel.innerText).to.equal(initItems[index].label);
      });
      const selectedItemEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item",
      );
      expect(selectedItemEl.length).to.equal(1);
      const selectedItemLabel = selectedItemEl[0].querySelector(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item__content__text",
      ) as HTMLElement;
      expect(selectedItemLabel.innerText).to.equal(initItems[0].label);
    });

    it("should be changed when updated items by setter", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      container.items = replacedItems;
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(itemsEl.length).to.equal(replacedItems.length);
      itemsEl.forEach((itemEl, index) => {
        const itemLabel = itemEl.querySelector(
          ".kuc-user-org-group-select__group__container__select-area__select-menu__item__text",
        ) as HTMLElement;
        expect(itemLabel.innerText).to.equal(initItems[index].label);
      });
    });
    it("should be throw error when assigned null on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'items' property is not array.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);
      const container = new UserOrgGroupSelect({
        items: null,
      });
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
      const container = new UserOrgGroupSelect();
      container.items = null;
      fixture(container);
    });
    it("should be throw error when assigned duplicated values on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'value' property is not unique in items.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);
      const container = new UserOrgGroupSelect({
        items: [...initItems, ...initItems],
      });
      fixture(container);
    });
    it("should be throw error when assigned duplicated values by setter", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'value' property is not unique in items.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);
      const container = new UserOrgGroupSelect();
      container.items = [...initItems, ...initItems];
      fixture(container);
    });
  });
});
