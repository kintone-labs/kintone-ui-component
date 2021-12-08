import { expect, fixture } from "@open-wc/testing";
import { MobileCheckbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

describe("MobileCheckbox", () => {
  describe("value", () => {
    it("should be none checked items when not assinged on constructor", async () => {
      const container = new MobileCheckbox({ items: initItems });
      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
    });

    it("should be checked items when assinged on constructor", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: [initItems[1].value]
      });
      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(true);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
    });

    it("should be changed value when updated by setter", async () => {
      const container = new MobileCheckbox({
        items: initItems,
        value: [initItems[1].value]
      });
      container.value = [initItems[2].value];

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-mobile-checkbox__group__select-menu__item__input"
      );

      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(true);
    });

    it("should be throw error when set null on constructor", async () => {
      expect(() => {
        // @ts-expect-error
        const container = new MobileCheckbox({ items: initItems, value: null });
      }).to.throw(Error, "'value' property is not array");
    });

    it("should be throw error when set null by setter", async () => {
      expect(() => {
        const container = new MobileCheckbox({ items: initItems });
        // @ts-expect-error
        container.value = null;
      }).to.throw(Error, "'value' property is not array");
    });
  });
});
