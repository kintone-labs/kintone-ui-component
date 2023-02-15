import { expect, fixture } from "@open-wc/testing";

import { Checkbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Checkbox", () => {
  describe("selectedIndex", () => {
    it("should be none checked items when not assinged on constructor", async () => {
      const container = new Checkbox({ items: initItems });
      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-checkbox__group__select-menu__item__input"
      );

      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
    });

    it("should be checked items when assinged on constructor", async () => {
      const container = new Checkbox({
        items: initItems,
        selectedIndex: [1],
      });
      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-checkbox__group__select-menu__item__input"
      );

      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(true);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
    });
  });

  it("should throw error when set invalid value", (done) => {
    const handleError = (event: any) => {
      const errorMsg = event.reason.message;
      expect(errorMsg).to.equal("'selectedIndex' property is not array.");
      window.removeEventListener("unhandledrejection", handleError);
      done();
    };
    window.addEventListener("unhandledrejection", handleError);

    // @ts-ignore
    const container = new Checkbox({ items: initItems, selectedIndex: null });
    fixture(container);
  });

  it("should be throw error when set null by setter", (done) => {
    const handleError = (event: any) => {
      const errorMsg = event.reason.message;
      expect(errorMsg).to.equal("'selectedIndex' property is not array.");
      window.removeEventListener("unhandledrejection", handleError);
      done();
    };
    window.addEventListener("unhandledrejection", handleError);

    const container = new Checkbox({ items: initItems, selectedIndex: [0] });
    container.selectedIndex = null;
    fixture(container);
  });
});
