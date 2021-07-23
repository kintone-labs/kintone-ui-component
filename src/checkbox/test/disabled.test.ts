import { expect, fixture } from "@open-wc/testing";
import { Checkbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

const initValues = ["apple"];

describe("Checkbox", () => {
  describe("disabled", () => {
    it("should not be added into input elements when not set in constructor", async () => {
      const container = new Checkbox({ items: initItems, value: initValues });
      const el = await fixture(container);
      const inputEls = el.querySelectorAll(
        ".kuc-checkbox__group__select-menu__item__input"
      );

      expect(inputEls[0]).to.not.have.attr("disabled");
      expect(inputEls[1]).to.not.have.attr("disabled");
      expect(inputEls[2]).to.not.have.attr("disabled");
    });

    it("should be added into input elements when set true in constructor", async () => {
      const container = new Checkbox({
        items: initItems,
        value: initValues,
        disabled: true
      });
      const el = await fixture(container);
      const inputEls = el.querySelectorAll(
        ".kuc-checkbox__group__select-menu__item__input"
      );

      expect(inputEls[0]).to.have.attr("disabled");
      expect(inputEls[1]).to.have.attr("disabled");
      expect(inputEls[2]).to.have.attr("disabled");
    });
  });

  it("should be added into input elements when chenged to true by setter", async () => {
    const container = new Checkbox({
      items: initItems,
      value: initValues,
      disabled: false
    });
    container.disabled = true;

    const el = await fixture(container);
    const inputEls = el.querySelectorAll(
      ".kuc-checkbox__group__select-menu__item__input"
    );

    expect(inputEls[0]).to.have.attr("disabled");
    expect(inputEls[1]).to.have.attr("disabled");
    expect(inputEls[2]).to.have.attr("disabled");
  });

  it("should not be added into input elements when chenged to false by setter", async () => {
    const container = new Checkbox({
      items: initItems,
      value: initValues,
      disabled: true
    });
    container.disabled = false;

    const el = await fixture(container);
    const inputEls = el.querySelectorAll(
      ".kuc-checkbox__group__select-menu__item__input"
    );

    expect(inputEls[0]).to.not.have.attr("disabled");
    expect(inputEls[1]).to.not.have.attr("disabled");
    expect(inputEls[2]).to.not.have.attr("disabled");
  });
});
