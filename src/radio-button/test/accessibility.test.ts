import {
  expect,
  fixture,
  triggerBlurFor,
  triggerFocusFor,
} from "@open-wc/testing";
import { RadioButton } from "../index";

const initItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

describe("RadioButton", () => {
  describe("accessibility", () => {
    it("can be focused and blured", async () => {
      const container = new RadioButton({
        items: initItems,
        value: initItems[1].value,
      });

      const el: HTMLElement = await fixture(container);
      const itemsEl = el.querySelector(
        ".kuc-radio-button__group__select-menu__item__input"
      ) as HTMLInputElement;
      await triggerFocusFor(itemsEl);
      expect(
        document.activeElement?.classList.contains(
          "kuc-radio-button__group__select-menu__item__input"
        )
      ).to.equal(true);

      await triggerBlurFor(itemsEl);
      expect(
        document.activeElement?.classList.contains(
          "kuc-radio-button__group__select-menu__item__input"
        )
      ).to.equal(false);
    });
  });
});
