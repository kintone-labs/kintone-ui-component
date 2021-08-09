import { fixture, expect } from "@open-wc/testing";
import { Dropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

describe("Dropdown", () => {
  describe("accessibility", () => {
    it("should be highlight/not highlight when mouseover/mouseleave the item", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLDivElement;
      toggleEl.click();
      const itemsEl = el.querySelectorAll(
        ".kuc-dropdown__group__select-menu__item"
      );

      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mouseover"));
      expect(
        itemsEl[2].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(true);

      (itemsEl[2] as HTMLDivElement).dispatchEvent(new Event("mouseleave"));
      expect(
        itemsEl[2].classList.contains(
          "kuc-dropdown__group__select-menu__highlight"
        )
      ).to.equal(false);
    });

    it('should be highlight next item when triggered "ArrowUp" keyboard event', async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLDivElement;
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

    it('should be highlight next item when triggered "Up" keyboard event for IE', async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLDivElement;
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
        value: initItems[0].value
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLDivElement;
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
        value: initItems[0].value
      });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLDivElement;
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
  });
});
