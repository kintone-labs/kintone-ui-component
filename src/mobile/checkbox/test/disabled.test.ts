import { expect, fixture } from "@open-wc/testing";
import { MobileCheckbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];
const initValue = ["orange"];

describe("MobileCheckbox", () => {
  describe("disabled", () => {
    it("should not be added into input elements when not assigned in constructor", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: initValue,
      });

      const el = await fixture(container);
      const groupEl = el.querySelector(
        ".kuc-mobile-checkbox__group__select-menu"
      ) as HTMLDivElement;
      expect(groupEl.hasAttribute("disabled")).to.equal(false);

      const inputEls = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputEls[0].hasAttribute("disabled")).to.equal(false);
      expect(inputEls[1].hasAttribute("disabled")).to.equal(false);
      expect(inputEls[2].hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into input elements when assigned true in constructor", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: initValue,
        disabled: true,
      });

      const el = await fixture(container);
      const groupEl = el.querySelector(
        ".kuc-mobile-checkbox__group__select-menu"
      ) as HTMLDivElement;
      expect(groupEl.hasAttribute("disabled")).to.equal(true);

      const inputEls = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputEls[0].hasAttribute("disabled")).to.equal(true);
      expect(inputEls[1].hasAttribute("disabled")).to.equal(true);
      expect(inputEls[2].hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into input elements when changed to true by setter", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: initValue,
        disabled: false,
      });
      container.disabled = true;

      const el = await fixture(container);
      const groupEl = el.querySelector(
        ".kuc-mobile-checkbox__group__select-menu"
      ) as HTMLDivElement;
      expect(groupEl.hasAttribute("disabled")).to.equal(true);

      const inputEls = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputEls[0].hasAttribute("disabled")).to.equal(true);
      expect(inputEls[1].hasAttribute("disabled")).to.equal(true);
      expect(inputEls[2].hasAttribute("disabled")).to.equal(true);
    });

    it("should not be added into input elements when changed to false by setter", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: initValue,
        disabled: true,
      });
      container.disabled = false;

      const el = await fixture(container);
      const groupEl = el.querySelector(
        ".kuc-mobile-checkbox__group__select-menu"
      ) as HTMLDivElement;
      expect(groupEl.hasAttribute("disabled")).to.equal(false);

      const inputEls = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputEls[0].hasAttribute("disabled")).to.equal(false);
      expect(inputEls[1].hasAttribute("disabled")).to.equal(false);
      expect(inputEls[2].hasAttribute("disabled")).to.equal(false);
    });
  });
});
