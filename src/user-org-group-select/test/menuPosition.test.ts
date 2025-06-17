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

describe("UserOrgGroupSelect", () => {
  describe("menuPosition", () => {
    it("Show menu below default", async () => {
      const container = new UserOrgGroupSelect({ items: initItems });
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      expect(menuEl.style.bottom).to.equal("auto");
      expect(menuEl.style.height).to.equal("auto");
    });
    it("Show scroll bar when menu display is incomplete below", async () => {
      await fixture('<div style="height: 200px" />');
      const container = new UserOrgGroupSelect({
        items: [
          ...initItems,
          ...initItems.map((item) => {
            return { label: item.label, value: item.value + "_0" };
          }),
          ...initItems.map((item) => {
            return { label: item.label, value: item.value + "_1" };
          }),
        ],
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      expect(menuEl.style.bottom).to.equal("auto");
      expect(menuEl.style.overflowY).to.equal("scroll");
    });
    it("Show menu above when it cannot be completely displayed below", async () => {
      await fixture('<div style="height: 500px" />');
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
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      const toggle = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle",
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal(`${toggle.offsetHeight}px`);
      expect(menuEl.style.height).to.equal("auto");
    });
    it("Show scroll bar when menu display is incomplete above", async () => {
      await fixture('<div style="height: 300px" />');
      const container = new UserOrgGroupSelect({
        items: [
          ...initItems,
          ...initItems.map((item) => {
            return { label: item.label, value: item.value + "_0" };
          }),
          ...initItems.map((item) => {
            return { label: item.label, value: item.value + "_1" };
          }),
        ],
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      const toggle = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle",
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal(`${toggle.offsetHeight}px`);
      expect(menuEl.style.overflowY).to.equal("scroll");
    });
  });
});
