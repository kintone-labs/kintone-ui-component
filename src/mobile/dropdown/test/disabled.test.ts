import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

function generateInitItems() {
  return [
    { label: "-----", value: "-----" },
    { label: "Orange", value: "orange" },
    { label: "Apple", value: "apple" }
  ];
}

describe("MobileDropdown", () => {
  describe("disabled", () => {
    it("does not exists on element when initializing without props option", async () => {
      const container = new MobileDropdown({ items: generateInitItems() });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).not.to.have.attr("disabled");
    });

    it("exists on element when initializing disabled value is true", async () => {
      const container = new MobileDropdown({
        items: generateInitItems(),
        disabled: true
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).to.have.attr("disabled");
    });

    it("exists on element when changing by setter", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: generateInitItems(),
        disabled: false
      });
      container.disabled = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).to.have.attr("disabled");
    });

    it("does not exists on element when changing by setter", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: generateInitItems(),
        disabled: true
      });
      container.disabled = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).not.to.have.attr("disabled");
    });
  });
});
