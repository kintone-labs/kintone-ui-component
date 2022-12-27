import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Checkbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Checkbox", () => {
  describe("value", () => {
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
        value: [initItems[1].value],
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

    it("should be changed value when updated by setter", async () => {
      const container = new Checkbox({
        items: initItems,
        value: [initItems[1].value],
      });
      container.value = [initItems[2].value];

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-checkbox__group__select-menu__item__input"
      );

      expect(inputsEl.length).to.equal(3);
      expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
      expect((inputsEl[2] as HTMLInputElement).checked).to.equal(true);
    });
  });

  it("should be throw error when set null on constructor", (done) => {
    const handleError = (event: any) => {
      const errorMsg = event.reason.message;
      expect(errorMsg).to.equal("'value' property is not array.");
      window.removeEventListener("unhandledrejection", handleError);
      done();
    };
    window.addEventListener("unhandledrejection", handleError);

    const container = new Checkbox({ items: initItems, value: null });
    fixture(container);
  });

  it("should be throw error when set null by setter", (done) => {
    const handleError = (event: any) => {
      const errorMsg = event.reason.message;
      expect(errorMsg).to.equal("'value' property is not array.");
      window.removeEventListener("unhandledrejection", handleError);
      done();
    };
    window.addEventListener("unhandledrejection", handleError);

    const container = new Checkbox({
      items: initItems,
      value: [initItems[0].value],
    });
    container.value = null;
    fixture(container);
  });

  it("should be none checked items when set [] by setter", async () => {
    const container = new Checkbox({ items: initItems, value: ["orange"] });
    const el = await fixture(container);
    const inputsEl = el.querySelectorAll(
      ".kuc-checkbox__group__select-menu__item__input"
    );
    expect(inputsEl.length).to.equal(3);
    expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
    expect((inputsEl[1] as HTMLInputElement).checked).to.equal(true);
    expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
    expect(container.value[0]).to.equal("orange");

    container.value = [];
    await elementUpdated(el);

    expect(inputsEl.length).to.equal(3);
    expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
    expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
    expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
    expect(container.value.length).to.equal(0);
  });

  it("should be none checked items when set [] on constructor", async () => {
    const container = new Checkbox({ items: initItems, value: [] });
    const el = await fixture(container);
    const inputsEl = el.querySelectorAll(
      ".kuc-checkbox__group__select-menu__item__input"
    );
    expect(inputsEl.length).to.equal(3);
    expect((inputsEl[0] as HTMLInputElement).checked).to.equal(false);
    expect((inputsEl[1] as HTMLInputElement).checked).to.equal(false);
    expect((inputsEl[2] as HTMLInputElement).checked).to.equal(false);
    expect(container.value.length).to.equal(0);
  });
});
