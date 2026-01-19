import { aTimeout, elementUpdated, expect, fixture } from "@open-wc/testing";

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
      const toggleEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle",
      ) as HTMLDivElement;

      expect(menuEl.style.position).to.equal("fixed");
      expect(menuEl.style.right).to.equal("auto");
      const toggleRect = toggleEl.getBoundingClientRect();
      expect(parseInt(menuEl.style.top, 10)).to.equal(toggleRect.bottom);
    });

    it("Show scroll bar when menu display is incomplete below", async () => {
      const container = new UserOrgGroupSelect({
        items: [
          ...initItems,
          ...initItems.map((item) => {
            return {
              label: item.label,
              value: item.value + "_0",
              type: item.type,
            };
          }),
          ...initItems.map((item) => {
            return {
              label: item.label,
              value: item.value + "_1",
              type: item.type,
            };
          }),
        ],
        value: [initItems[0].value],
      });
      const el = await fixture(container);

      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.bottom = "50px";
      document.body.appendChild(el);

      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;

      toggleIconButtonEl.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;

      expect(menuEl.style.position).to.equal("fixed");
      expect(menuEl.style.right).to.equal("auto");
      expect(menuEl.style.overflowY).to.equal("auto");

      document.body.removeChild(el);
    });

    it("Show menu above when it cannot be completely displayed below", async () => {
      const manyItems = Array.from({ length: 20 }, (_, i) => ({
        label: `User ${i + 1}`,
        value: `user${i + 1}`,
        type: "user",
      }));

      const container = new UserOrgGroupSelect({
        items: manyItems,
        value: [manyItems[0].value],
      });
      const el = await fixture(container);

      window.resizeTo(800, 600);
      document.body.style.height = "2000px";
      document.body.appendChild(el);
      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.bottom = "10px";

      window.scrollTo(0, window.innerHeight - 100);

      document.body.appendChild(el);

      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      const toggleEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle",
      ) as HTMLDivElement;

      toggleIconButtonEl.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      await aTimeout(10);
      expect(menuEl.style.position).to.equal("fixed");
      expect(menuEl.style.right).to.equal("auto");
      const toggleRect = toggleEl.getBoundingClientRect();
      const menuRect = menuEl.getBoundingClientRect();

      expect(menuRect.bottom).to.be.at.most(toggleRect.top);
      expect(menuRect.top).to.be.lessThan(toggleRect.top);

      document.body.removeChild(el);
    });

    it("Show scroll bar when menu display is incomplete above", async () => {
      const manyItems = Array.from({ length: 25 }, (_, i) => ({
        label: `User ${i + 1}`,
        value: `user${i + 1}`,
        type: "user",
      }));

      const container = new UserOrgGroupSelect({
        items: manyItems,
        value: [manyItems[0].value],
      });
      const el = await fixture(container);

      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.top = "60%";
      document.body.appendChild(el);

      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;

      toggleIconButtonEl.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;

      expect(menuEl.style.position).to.equal("fixed");
      expect(menuEl.style.right).to.equal("auto");
      expect(menuEl.style.overflowY).to.equal("auto");

      const height = parseInt(menuEl.style.height, 10);
      expect(height).to.be.greaterThan(0);

      // maxHeight should preserve CSS variable for custom styling
      expect(menuEl.style.maxHeight).to.equal(
        "var(--kuc-user-org-group-select-menu-max-height, none)",
      );

      document.body.removeChild(el);
    });

    it("Show menu aligned to viewport edge when toggle is partially outside viewport", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);

      // Position so toggle extends beyond viewport width
      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.left = `${window.innerWidth - 50}px`;
      document.body.appendChild(el);

      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      const toggleEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle",
      ) as HTMLDivElement;

      toggleIconButtonEl.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;

      const toggleRect = toggleEl.getBoundingClientRect();
      const menuRect = menuEl.getBoundingClientRect();
      const viewportWidth =
        window.innerWidth > document.documentElement.clientWidth
          ? document.documentElement.clientWidth
          : window.innerWidth;

      // Menu should always use left positioning (right is always auto)
      expect(menuEl.style.right).to.equal("auto");

      if (viewportWidth < toggleRect.right && viewportWidth > toggleRect.left) {
        // Toggle is partially outside, menu's right edge should align with viewport edge
        expect(menuRect.right).to.be.closeTo(viewportWidth, 1);
      } else {
        // Toggle is fully inside, menu should align with toggle left edge
        expect(menuRect.left).to.be.closeTo(toggleRect.left, 1);
      }

      document.body.removeChild(el);
    });
  });
});
