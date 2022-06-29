import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

const initItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

describe("MultiChoice", () => {
  describe("accessibility", () => {
    it("should be highlight/not highlight when mouseover/mouseleave the item", async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[1].value],
      });

      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      itemsEl[2].dispatchEvent(new Event("mouseover"));
      expect(
        itemsEl[2].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);

      itemsEl[1].dispatchEvent(new Event("mouseover"));
      expect(
        itemsEl[2].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(false);
      expect(
        itemsEl[1].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);

      itemsEl[1].dispatchEvent(new Event("mouseleave"));
      expect(
        itemsEl[1].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(false);
    });

    it("should not highlight/not highlight when mouseover/mouseleave the item and assinging disabled is true", async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[1].value],
        disabled: true,
      });

      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      const highlightEl = el.querySelector(
        ".kuc-multi-choice__group__menu__highlight"
      );
      itemsEl[2].dispatchEvent(new Event("mouseover"));
      expect(highlightEl).to.equal(null);

      itemsEl[1].dispatchEvent(new Event("mouseover"));
      expect(highlightEl).to.equal(null);

      itemsEl[1].dispatchEvent(new Event("mouseleave"));
      expect(highlightEl).to.equal(null);
    });

    it("should not changed highlight when triggered mousedown", async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[1].value],
      });

      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      itemsEl[2].dispatchEvent(new Event("mouseover"));
      expect(
        itemsEl[2].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);

      itemsEl[2].dispatchEvent(new Event("mousedown"));
      expect(
        itemsEl[2].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight prev item when triggered "ArrowUp" keyboard event', async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      expect(
        itemsEl[2].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight prev item when triggered "Up" keyboard event for IE', async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Up" }));
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Up" }));

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      expect(
        itemsEl[2].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight next item when triggered "ArrowDown" keyboard event', async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);
    });

    it('should be highlight next item when triggered "Down" keyboard event for IE', async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);
    });

    it('should changed value when triggered "Spacebar" keyboard event', async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Spacebar" }));
      expect(container.value).to.deep.equal([
        initItems[0].value,
        initItems[1].value,
      ]);
    });

    it('should changed value when triggered " " keyboard event for IE', async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
      expect(container.value).to.deep.equal([
        initItems[0].value,
        initItems[1].value,
      ]);
    });

    it("should not changed highlight when triggered not handled key code", async () => {
      const container = new MultiChoice({
        items: initItems,
        value: [initItems[0].value],
      });
      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;
      menuEl.click();
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));

      const itemsEl = el.querySelectorAll(
        ".kuc-multi-choice__group__menu__item"
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);

      // "Space" is not handled key code and it will do nothing as default operation.
      menuEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Space" }));
      expect(
        itemsEl[0].classList.contains(
          "kuc-multi-choice__group__menu__highlight"
        )
      ).to.equal(true);
    });

    // TODO:
    // Testing for disabled compontent
  });
});
