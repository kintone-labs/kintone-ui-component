import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Combobox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Pear", value: "pear" },
];

describe("Combobox", () => {
  describe("menuPosition", () => {
    it("Show menu below default", async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal("auto");
      expect(menuEl.style.height).to.equal("auto");
    });

    it("Show scroll bar when menu display is incomplete below", async () => {
      await fixture('<div style="height: 200px" />');

      const container = new Combobox({
        items: [
          ...initItems,
          ...initItems.map((item) => {
            return { label: item.label, value: item.value + "_0" };
          }),
          ...initItems.map((item) => {
            return { label: item.label, value: item.value + "_1" };
          }),
        ],
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal("auto");
      expect(menuEl.style.overflowY).to.equal("scroll");
    });

    it("Show menu above when it cannot be completely displayed below", async () => {
      await fixture('<div style="height: 500px" />');

      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
        error: "Error",
      });
      const el = await fixture(container);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLDivElement;
      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      const toggle = el.querySelector(
        ".kuc-combobox__group__toggle"
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal(
        `${toggle.offsetHeight + errorEl.offsetHeight + 16}px`
      );
      expect(menuEl.style.height).to.equal("auto");
    });

    it("Show scroll bar when menu display is incomplete above", async () => {
      await fixture('<div style="height: 300px" />');

      const container = new Combobox({
        items: [
          ...initItems,
          ...initItems.map((item) => {
            return { label: item.label, value: item.value + "_0" };
          }),
          ...initItems.map((item) => {
            return { label: item.label, value: item.value + "_1" };
          }),
        ],
        value: initItems[0].value,
      });
      const el = await fixture(container);
      document.body.appendChild(el);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button"
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu"
      ) as HTMLDivElement;
      const toggle = el.querySelector(
        ".kuc-combobox__group__toggle"
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal(`${toggle.offsetHeight}px`);
      expect(menuEl.style.overflowY).to.equal("scroll");
    });
  });
});
