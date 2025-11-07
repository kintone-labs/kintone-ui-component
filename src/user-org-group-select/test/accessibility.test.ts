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
  describe("accessibility", () => {
    it("should show and keep menu visible when clicking toggle button twice", async () => {
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
      expect(menuEl).not.has.attribute("hidden");
      toggleIconButtonEl.click();
      await elementUpdated(container);
      expect(menuEl).not.has.attribute("hidden");
    });

    it("should hide menu element when clicking document", async () => {
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
      expect(menuEl).not.has.attribute("hidden");
      await aTimeout(10);
      document.body.click();
      await elementUpdated(container);
      expect(menuEl).has.attribute("hidden");
    });

    it("should not hide menu element when clicking the disabled item", async () => {
      const container = new UserOrgGroupSelect({
        items: [
          ...initItems,
          {
            label: "Disabled User",
            value: "disabledUser",
            type: "user",
            disabled: true,
          },
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
      expect(menuEl).not.has.attribute("hidden");
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      (itemsEl[itemsEl.length - 1] as HTMLLIElement).click();
      await elementUpdated(container);
      expect(menuEl).not.has.attribute("hidden");
    });

    it("should be highlight/not highlight when mouseover/mouseleave the item", async () => {
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
      expect(menuEl).not.has.attribute("hidden");
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      itemsEl[0].dispatchEvent(new MouseEvent("mouseover"));
      await elementUpdated(container);
      expect(
        itemsEl[0].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
      menuEl.dispatchEvent(new MouseEvent("mouseleave"));
      await elementUpdated(container);
      expect(
        itemsEl[0].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(false);
      expect(
        itemsEl[1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item--disabled",
        ),
      ).to.equal(false);
    });

    it("should not highlight when mouseover the disabled item", async () => {
      const container = new UserOrgGroupSelect({
        items: [
          ...initItems,
          {
            label: "Disabled User",
            value: "disabledUser",
            type: "user",
            disabled: true,
          },
        ],
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
      itemsEl[8].dispatchEvent(new MouseEvent("mouseover"));
      await elementUpdated(container);
      expect(
        itemsEl[8].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(false);
    });

    it("should do nothing when mouseup/mousedown toggle", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button",
      ) as HTMLButtonElement;
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;

      toggleIconButtonEl.dispatchEvent(new MouseEvent("mouseup"));
      await elementUpdated(container);
      expect(menuEl.hidden).to.equal(true);

      toggleIconButtonEl.dispatchEvent(new MouseEvent("mousedown"));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.dispatchEvent(new MouseEvent("mouseup"));
      await elementUpdated(container);
      expect(menuEl.hidden).to.equal(true);

      toggleInputEl.dispatchEvent(new MouseEvent("mousedown"));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);
    });

    it("should open menu when pressing ArrowUp key", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp" }),
      );
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      expect(menuEl.hidden).to.equal(false);
    });

    it("should open menu when pressing ArrowDown key", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" }),
      );
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      expect(menuEl.hidden).to.equal(false);
    });

    it("should hide menu when pressing Escape key", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" }),
      );
      await elementUpdated(container);
      expect(menuEl.hidden).to.equal(false);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape" }),
      );
      await elementUpdated(container);
      expect(menuEl.hidden).to.equal(true);
    });

    it('should be highlight prev item when triggered "ArrowUp" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp" }),
      );
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[itemsEl.length - 1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
    });

    it('should npt be highlight disabled prev item when triggered "Up" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: [
          ...initItems,
          {
            label: "Disabled User",
            value: "disabledUser",
            type: "user",
            disabled: true,
          },
        ],
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Up" }));
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[itemsEl.length - 1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(false);
      expect(
        itemsEl[itemsEl.length - 2].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
    });
    it('should be highlight next item when triggered "ArrowDown" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" }),
      );
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
    });
    it('should not be highlight disabled next item when triggered "Down" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: [
          {
            label: "Disabled User",
            value: "disabledUser",
            type: "user",
            disabled: true,
          },
          ...initItems,
        ],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Down" }),
      );
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(false);
      expect(
        itemsEl[1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
    });
    it('should be highlight next item when triggered "Down" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: [
          {
            label: "Disabled User",
            value: "disabledUser",
            type: "user",
            disabled: true,
          },
          { label: "User 1", value: "user1", type: "user" },
          { label: "User 2", value: "user2", type: "user" },
        ],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Down" }),
      );
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Down" }),
      );
      await elementUpdated(container);
      expect(
        itemsEl[2].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Down" }),
      );
      await elementUpdated(container);
      expect(
        itemsEl[1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
      expect(
        itemsEl[0].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(false);
    });
    it('should be highlight first item when triggered "Home" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Home" }),
      );
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
    });
    it('should be highlight last item when triggered "End" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "End" }));
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[itemsEl.length - 1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
    });
    it('should not be highlight first disabled item when triggered "Home" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: [
          {
            label: "Disabled User",
            value: "disabledUser",
            type: "user",
            disabled: true,
          },
          ...initItems,
        ],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Home" }),
      );
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(false);
      expect(
        itemsEl[1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
    });
    it('should be highlight last disabled item when triggered "End" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: [...initItems],
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "End" }));
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[itemsEl.length - 1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
    });
    it('should not be highlight last disabled item when triggered "End" keyboard event', async () => {
      const container = new UserOrgGroupSelect({
        items: [
          ...initItems,
          {
            label: "Disabled User",
            value: "disabledUser",
            type: "user",
            disabled: true,
          },
        ],
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "End" }));
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-user-org-group-select__group__container__select-area__select-menu__item",
      );
      expect(
        itemsEl[itemsEl.length - 1].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(false);
      expect(
        itemsEl[itemsEl.length - 2].classList.contains(
          "kuc-user-org-group-select__group__container__select-area__select-menu__item__highlight",
        ),
      ).to.equal(true);
    });
    it("should open menu when it can get filter result", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.dispatchEvent(new InputEvent("input", { data: "1" }));
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      expect(menuEl.hidden).to.equal(false);
    });
    it('should changed value when pressing "Enter" key', async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp" }),
      );
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" }),
      );
      await elementUpdated(container);
      toggleInputEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter" }),
      );
      await elementUpdated(container);
      expect(container.value).to.deep.equal([initItems[0].value]);
    });
    it('should hide menu when pressing "Tab" key', async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const toggleInputEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__input",
      ) as HTMLInputElement;
      toggleInputEl.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__select-menu",
      ) as HTMLElement;
      expect(menuEl.hidden).to.equal(false);
      toggleInputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
      await elementUpdated(container);
      expect(menuEl.hidden).to.equal(true);
    });
  });
});
