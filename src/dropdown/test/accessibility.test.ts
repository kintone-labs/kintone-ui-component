import { fixture, expect, elementUpdated } from "@open-wc/testing";
import { Dropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Dropdown", () => {
  describe("accessibility", () => {
    it("should show/hide menu element when clicking toggle button", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      let menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl).not.has.attribute("hidden");

      toggle.click();
      await elementUpdated(container);
      menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl).has.attribute("hidden");
    });

    it("should hide menu element when clicking document", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      let menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl).not.has.attribute("hidden");

      setTimeout(async () => {
        document.body.click();
        await elementUpdated(container);
        menuEl = el.querySelector(
          ".kuc-dropdown__group__select-menu"
        ) as HTMLDivElement;
        expect(menuEl).has.attribute("hidden");
      }, 10);
    });

    it("should be highlight/not highlight when mouseover/mouseleave the item", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.click();
      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );

      itemsEl[2].dispatchEvent(new Event("mouseover"));
      expect(
        itemsEl[2].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(true);

      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLDivElement;
      menuEl.dispatchEvent(new Event("mouseleave"));
      expect(
        itemsEl[0].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(false);
      expect(
        itemsEl[1].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(false);
      expect(
        itemsEl[2].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(false);
    });

    it("should do nothing when mouseup/mousedown toggle", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLDivElement;

      toggleEl.dispatchEvent(new MouseEvent("mouseup"));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);

      toggleEl.dispatchEvent(new MouseEvent("mousedown"));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);
    });

    it("should open menu when pressing Enter key", async () => {
      const container = new Dropdown({ items: initItems });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);

      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLUListElement;

      expect(menuEl.hidden).to.equal(false);
    });

    it("should open menu when pressing ArrowUp key", async () => {
      const container = new Dropdown({ items: initItems });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
      await elementUpdated(el);

      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLUListElement;

      expect(menuEl.hidden).to.equal(false);
    });

    it("should open menu when pressing ArrowDown key", async () => {
      const container = new Dropdown({ items: initItems });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);

      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLUListElement;

      expect(menuEl.hidden).to.equal(false);
    });

    it("should hide menu when pressing Escape key", async () => {
      const container = new Dropdown({ items: initItems });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLUListElement;

      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(false);

      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);
    });

    it('should be highlight prev item when triggered "ArrowUp" keyboard event', async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.click();
      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));

      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );
      expect(
        itemsEl[2].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight prev item when triggered "Up" keyboard event for IE', async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.click();
      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Up" }));

      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );
      expect(
        itemsEl[2].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight next item when triggered "ArrowDown" keyboard event', async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.click();
      toggleEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );

      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );
      expect(
        itemsEl[1].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight next item when triggered "Down" keyboard event for IE', async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.click();
      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));

      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );
      expect(
        itemsEl[1].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should highlight first item when pressing "Home" key', async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[2].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);

      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Home" }));
      await elementUpdated(el);

      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should highlight last item when pressing "End" key', async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);

      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "End" }));
      await elementUpdated(el);

      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );
      expect(
        itemsEl[2].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it("should do nothing when pressing not handled key", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);

      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
      await elementUpdated(el);

      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLUListElement;

      expect(menuEl.hidden).to.equal(false);
    });

    it('should changed value when pressing "Enter" key', async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);

      toggleEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);

      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);

      expect(container.value).to.equal(initItems[1].value);
    });

    it('should hide menu when pressing "Tab" key', async () => {
      const container = new Dropdown({ items: initItems });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLUListElement;

      toggleEl.click();
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(false);

      toggleEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);
    });
  });
});
