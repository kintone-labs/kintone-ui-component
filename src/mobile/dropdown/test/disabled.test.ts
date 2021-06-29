import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("disabled", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" }
    ];

    it("disabled default prop is false", async () => {
      const container = new MobileDropdown({
        items: initItems
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).not.to.have.attr("disabled");
    });

    it("disabled default prop set to true successfully", async () => {
      const container = new MobileDropdown({
        items: initItems,
        disabled: true
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).to.have.attr("disabled");
    });

    it("disabled default prop set to true successfully", async () => {
      const container = new MobileDropdown({
        items: initItems,
        disabled: true
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).to.have.attr("disabled");
    });

    it("disabled prop set to true successfully", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        disabled: false
      });
      container.disabled = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).to.have.attr("disabled");
    });

    it("disabled prop set to false successfully", async () => {
      const container = new MobileDropdown({
        label: "Fruit",
        requiredIcon: false,
        items: initItems,
        disabled: true
      });
      container.disabled = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).not.to.have.attr("disabled");
    });

    it("disabled default prop set to null", async () => {
      const container = new MobileDropdown({
        items: initItems,
        // @ts-ignore
        disabled: null
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).not.to.have.attr("disabled");
    });

    it("disabled prop set to null", async () => {
      const container = new MobileDropdown({
        items: initItems
      });
      // @ts-ignore
      container.disabled = null;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-dropdown__input-form__select__input"
      );
      expect(inputEl).not.to.have.attr("disabled");
    });
  });
});
