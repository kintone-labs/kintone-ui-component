import { expect, fixture } from "@open-wc/testing";

import { Combobox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Combobox", () => {
  describe("disabled", () => {
    it("should not be added into toggle element when not set in constructor", async () => {
      const container = new Combobox({ items: initItems });
      const el = await fixture(container);

      const toggleInputEl = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      expect(toggleInputEl.hasAttribute("disabled")).to.equal(false);

      const toggleIconButtonEl = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;
      expect(toggleIconButtonEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into toggle element when set true in constructor", async () => {
      const container = new Combobox({ items: initItems, disabled: true });
      const el = await fixture(container);

      const toggleInputEl = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      expect(toggleInputEl.hasAttribute("disabled")).to.equal(true);

      const toggleIconButtonEl = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;
      expect(toggleIconButtonEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into toggle element when changed to true by setter", async () => {
      const container = new Combobox({ items: initItems, disabled: false });
      container.disabled = true;
      const el = await fixture(container);

      const toggleInputEl = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      expect(toggleInputEl.hasAttribute("disabled")).to.equal(true);

      const toggleIconButtonEl = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;
      expect(toggleIconButtonEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should not be added into toggle element when changed to false by setter", async () => {
      const container = new Combobox({ items: initItems, disabled: true });
      container.disabled = false;
      const el = await fixture(container);

      const toggleInputEl = el.querySelector(
        ".kuc-combobox__group__toggle__input"
      ) as HTMLInputElement;
      expect(toggleInputEl.hasAttribute("disabled")).to.equal(false);

      const toggleIconButtonEl = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;
      expect(toggleIconButtonEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
