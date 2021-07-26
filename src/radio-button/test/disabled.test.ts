import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];
const initValue = "orange";

describe("RadioButton", () => {
  describe("disabled", () => {
    it("should be not added into input elements when not assigned in constructor", async () => {
      const container = new RadioButton({ items: initItems, value: initValue });

      const el = await fixture(container);
      const inputEls = el.querySelectorAll(
        ".kuc-radio-button__group__select-menu__item__input"
      );

      expect(inputEls[0]).to.not.have.attr("disabled");
      expect(inputEls[1]).to.not.have.attr("disabled");
      expect(inputEls[2]).to.not.have.attr("disabled");
    });

    it("should be added into input elements when assigned true in constructor", async () => {
      const container = new RadioButton({
        items: initItems,
        value: initValue,
        disabled: true
      });

      const el = await fixture(container);
      const inputEls = el.querySelectorAll(
        ".kuc-radio-button__group__select-menu__item__input"
      );

      expect(inputEls[0]).to.have.attr("disabled");
      expect(inputEls[1]).to.have.attr("disabled");
      expect(inputEls[2]).to.have.attr("disabled");
    });

    it("should be added into input elements when changed to true by setter", async () => {
      const container = new RadioButton({
        items: initItems,
        value: initValue,
        disabled: false
      });
      container.disabled = true;

      const el = await fixture(container);
      const inputEls = el.querySelectorAll(
        ".kuc-radio-button__group__select-menu__item__input"
      );

      expect(inputEls[0]).to.have.attr("disabled");
      expect(inputEls[1]).to.have.attr("disabled");
      expect(inputEls[2]).to.have.attr("disabled");
    });

    it("should be not added into input elements when changed to false by setter", async () => {
      const container = new RadioButton({
        items: initItems,
        value: initValue,
        disabled: true
      });
      container.disabled = false;

      const el = await fixture(container);
      const inputEls = el.querySelectorAll(
        ".kuc-radio-button__group__select-menu__item__input"
      );

      expect(inputEls[0]).to.not.have.attr("disabled");
      expect(inputEls[1]).to.not.have.attr("disabled");
      expect(inputEls[2]).to.not.have.attr("disabled");
    });
  });
});
