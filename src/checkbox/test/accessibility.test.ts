import {
  triggerFocusFor,
  triggerBlurFor,
  expect,
  fixture,
} from "@open-wc/testing";
import { Checkbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Checkbox", () => {
  describe("accessibility", () => {
    it("can be focused and blured", async () => {
      const container = new Checkbox({
        items: initItems,
        value: [initItems[1].value],
      });

      const el: HTMLElement = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-checkbox__group__select-menu__item__input"
      ) as HTMLInputElement;
      await triggerFocusFor(inputEl);
      expect(document.activeElement?.className).to.equal(
        "kuc-checkbox__group__select-menu__item__input"
      );

      triggerBlurFor(inputEl);
      expect(document.activeElement?.className).to.not.equal(
        "kuc-checkbox__group__select-menu__item__input"
      );
    });
  });
});
