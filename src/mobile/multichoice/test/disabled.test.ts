import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("disabled", () => {
    const initItems = [
      { label: "-----", value: "-----" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ];

    it("does not add into input element when initializing without props option", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-multi-choice__input-form__select__input"
      );
      expect(inputEl).not.to.have.attr("disabled");
    });

    it("added into input element when initializing disabled value is true", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
        disabled: true,
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-multi-choice__input-form__select__input"
      );
      expect(inputEl).to.have.attr("disabled");
    });

    it("added into input element when changing from false to true by setter", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
        disabled: false,
      });
      container.disabled = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-multi-choice__input-form__select__input"
      );
      expect(inputEl).to.have.attr("disabled");
    });

    it("removing from input element when changing from true to false by setter", async () => {
      const container = new MobileMultiChoice({
        items: initItems,
        disabled: true,
      });
      container.disabled = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-multi-choice__input-form__select__input"
      );
      expect(inputEl).not.to.have.attr("disabled");
    });
  });
});
