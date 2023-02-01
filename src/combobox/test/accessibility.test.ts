import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Combobox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Combobox", () => {
  describe("accessibility", () => {
    it("should show/hide menu element when clicking toggle button", async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      let menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl).not.has.attribute("hidden");

      toggleIconButton.click();
      await elementUpdated(container);
      menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl).has.attribute("hidden");
    });

    it("should hide menu element when clicking document", async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      let menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl).not.has.attribute("hidden");

      setTimeout(async () => {
        document.body.click();
        await elementUpdated(container);
        menuEl = el.querySelector(
          ".kuc-combobox__group__select-menu"
        ) as HTMLDivElement;
        expect(menuEl).has.attribute("hidden");
      }, 10);
    });

    it("should be highlight/not highlight when mouseover/mouseleave the item", async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;
      toggleIconButton.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-combobox__group__select-menu__item"
      );

      itemsEl[2].dispatchEvent(new Event("mouseover"));
      expect(
        itemsEl[2].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(true);

      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLDivElement;
      menuEl.dispatchEvent(new Event("mouseleave"));
      expect(
        itemsEl[0].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(false);
      expect(
        itemsEl[1].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(false);
      expect(
        itemsEl[2].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(false);
    });

    it("should do nothing when mouseup/mousedown toggle", async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLDivElement;

      toggleIconButton.dispatchEvent(new MouseEvent("mouseup"));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);

      toggleIconButton.dispatchEvent(new MouseEvent("mousedown"));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);

      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.dispatchEvent(new MouseEvent("mouseup"));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);

      toggleInput.dispatchEvent(new MouseEvent("mousedown"));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);
    });

    it("should open menu when pressing ArrowUp key", async () => {
      const container = new Combobox({ items: initItems });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp" })
      );
      await elementUpdated(el);

      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLUListElement;

      expect(menuEl.hidden).to.equal(false);
    });

    it("should open menu when pressing ArrowDown key", async () => {
      const container = new Combobox({ items: initItems });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);

      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLUListElement;

      expect(menuEl.hidden).to.equal(false);
    });

    it("should hide menu when pressing Escape key", async () => {
      const container = new Combobox({ items: initItems });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;

      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLUListElement;

      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(false);

      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape" })
      );
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);
    });

    it('should be highlight prev item when triggered "ArrowUp" keyboard event', async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.click();
      await elementUpdated(el);
      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp" })
      );
      await elementUpdated(el);

      const itemsEl = el.querySelectorAll(
        ".kuc-combobox__group__select-menu__item"
      );
      expect(
        itemsEl[2].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight prev item when triggered "Up" keyboard event', async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.click();
      await elementUpdated(el);
      toggleInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Up" }));
      await elementUpdated(el);

      const itemsEl = el.querySelectorAll(
        ".kuc-combobox__group__select-menu__item"
      );
      expect(
        itemsEl[2].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight next item when triggered "ArrowDown" keyboard event', async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.click();
      await elementUpdated(el);
      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);

      const itemsEl = el.querySelectorAll(
        ".kuc-combobox__group__select-menu__item"
      );
      expect(
        itemsEl[1].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight next item when triggered "Down" keyboard event', async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.click();
      await elementUpdated(el);
      toggleInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));
      await elementUpdated(el);

      const itemsEl = el.querySelectorAll(
        ".kuc-combobox__group__select-menu__item"
      );
      expect(
        itemsEl[1].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should highlight first item when pressing "Home" key', async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[2].value,
      });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);

      toggleInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Home" }));
      await elementUpdated(el);

      const itemsEl = el.querySelectorAll(
        ".kuc-combobox__group__select-menu__item"
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it('should highlight last item when pressing "End" key', async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);

      toggleInput.dispatchEvent(new KeyboardEvent("keydown", { key: "End" }));
      await elementUpdated(el);

      const itemsEl = el.querySelectorAll(
        ".kuc-combobox__group__select-menu__item"
      );
      expect(
        itemsEl[2].classList.contains(
          "kuc-combobox__group__select-menu__highlight"
        )
      ).to.equal(true);
    });

    it("should open menu when it can get filter result", async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.dispatchEvent(new InputEvent("input", { data: "a" }));
      await fixture(container);

      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLUListElement;

      expect(menuEl.hidden).to.equal(false);
    });

    it('should changed value when pressing "Enter" key', async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp" })
      );
      await elementUpdated(el);

      toggleInput.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);

      toggleInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);

      expect(container.value).to.equal(initItems[1].value);
    });

    it('should hide menu when pressing "Tab" key', async () => {
      const container = new Combobox({ items: initItems });
      const el = await fixture(container);
      const toggleInput = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;

      toggleInput.click();
      await elementUpdated(el);

      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLUListElement;
      expect(menuEl.hidden).to.equal(false);

      toggleInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
      await elementUpdated(el);
      expect(menuEl.hidden).to.equal(true);
    });
  });
});
