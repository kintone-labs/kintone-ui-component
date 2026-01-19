/* eslint-disable no-unused-expressions */
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
        ".kuc-combobox__group__toggle__icon__button",
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu",
      ) as HTMLDivElement;

      expect(menuEl.getAttribute("hidden")).to.be.null;
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
        ".kuc-combobox__group__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu",
      ) as HTMLDivElement;
      // Menu should have height or scroll when space is limited
      const hasHeightOrScroll =
        (menuEl.style.height && menuEl.style.height !== "auto") ||
        menuEl.scrollHeight > menuEl.clientHeight;
      expect(hasHeightOrScroll).to.be.true;
    });

    it("Show menu when error is present", async () => {
      const container = new Combobox({
        items: initItems,
        value: initItems[0].value,
        error: "Error",
      });
      const el = await fixture(container);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button",
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu",
      ) as HTMLDivElement;

      // Menu should be visible even with error
      expect(menuEl.getAttribute("hidden")).to.be.null;
    });

    it("Show menu with many items", async () => {
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
        ".kuc-combobox__group__toggle__icon__button",
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu",
      ) as HTMLDivElement;

      // Menu should be visible with many items
      expect(menuEl.getAttribute("hidden")).to.be.null;
      // Menu should have overflow set to auto
      expect(menuEl.style.overflowY).to.equal("auto");
    });
  });
});
