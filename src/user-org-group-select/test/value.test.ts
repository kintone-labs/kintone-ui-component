import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { UserOrgGroupSelect } from "../index";

const initItems = [
  { label: "User 1", value: "user1", type: "user" },
  { label: "User 2", value: "user2", type: "user" },
  { label: "User 3", value: "user3", type: "user" },
  { label: "Group 1", value: "group1", type: "group" },
  { label: "Group 2", value: "group2", type: "group" },
  { label: "Group 3", value: "group3", type: "group" },
  { label: "Organization 1", value: "org1", type: "org" },
  { label: "Organization 2", value: "org2", type: "org" },
];

describe("UserOrgGroupSelect", () => {
  describe("value", () => {
    it("should be empty selected item label when not assigned on constructor", async () => {
      const container = new UserOrgGroupSelect({ items: initItems });
      const el = await fixture(container);
      expect(container.value).to.deep.equal([]);

      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);

      const selectedItemEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item",
      );
      expect(selectedItemEl.length).to.equal(0);
    });
    it("should delete selected item when click remove button", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
        icon: "org",
      });
      const el = await fixture(container);
      const removeButtons = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item__remove-icon__button",
      );
      (removeButtons[0] as HTMLButtonElement).click();
      await elementUpdated(container);
      const selectedItemEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item",
      );
      expect(selectedItemEl.length).to.equal(0);
    });
    it("should be set to selected item label when assigned on constructor", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
      });
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const selectedItemEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item",
      );
      expect(selectedItemEl.length).to.equal(0);
    });
    it("should be set to selected item label when assigned on constructor", async () => {
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
      const selectedItemEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item",
      );
      expect(selectedItemEl.length).to.equal(1);
      const selectedItemLabel = selectedItemEl[0].querySelector(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item__content__text",
      ) as HTMLElement;
      expect(selectedItemLabel.innerText).to.equal(initItems[0].label);
    });
    it("should be set to selected item label when assigned on setter", async () => {
      const container = new UserOrgGroupSelect();
      container.items = initItems;
      container.value = [initItems[0].value];
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const selectedItemEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item",
      );
      expect(selectedItemEl.length).to.equal(1);
      const selectedItemLabel = selectedItemEl[0].querySelector(
        ".kuc-user-org-group-select__group__container__select-area__selected-list__item__content__text",
      ) as HTMLElement;
      expect(selectedItemLabel.innerText).to.equal(initItems[0].label);
    });
  });
});
