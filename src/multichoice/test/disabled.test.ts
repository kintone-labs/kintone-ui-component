import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

const initItems = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

describe("MultiChoice", () => {
  describe("disabled", () => {
    it("should be not added into element when not assigned in constructor", async () => {
      const container = new MultiChoice({ items: initItems });
      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;

      expect(menuEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into element when assigned true in constructor", async () => {
      const container = new MultiChoice({ items: initItems, disabled: true });
      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;

      expect(menuEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into element when changed to true by setter", async () => {
      const container = new MultiChoice({ items: initItems, disabled: false });
      container.disabled = true;

      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;

      expect(menuEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be not added into element when changed to false by setter", async () => {
      const container = new MultiChoice({ items: initItems, disabled: true });
      container.disabled = false;

      const el = await fixture(container);
      const menuEl = el.querySelector(
        ".kuc-multi-choice__group__menu"
      ) as HTMLDivElement;

      expect(menuEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
