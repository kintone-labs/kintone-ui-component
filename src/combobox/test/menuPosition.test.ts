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
      const toggleEl = el.querySelector(
        ".kuc-combobox__group__toggle",
      ) as HTMLDivElement;

      expect(menuEl.style.position).to.equal("fixed");
      const toggleRect = toggleEl.getBoundingClientRect();
      expect(parseInt(menuEl.style.top, 10)).to.equal(toggleRect.bottom);
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
      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.bottom = "50px";
      document.body.appendChild(el);
      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button",
      ) as HTMLButtonElement;
      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu",
      ) as HTMLDivElement;
      expect(menuEl.style.position).to.equal("fixed");
      expect(menuEl.style.overflowY).to.equal("auto");
      document.body.removeChild(el);
    });

    it("Show menu above when it cannot be completely displayed below", async () => {
      const manyItems = Array.from({ length: 20 }, (_, i) => ({
        label: `Item ${i + 1}`,
        value: `item${i + 1}`,
      }));

      const container = new Combobox({
        items: manyItems,
        value: manyItems[0].value,
      });
      const el = await fixture(container);

      window.resizeTo(800, 600);
      document.body.style.height = "2000px";
      document.body.appendChild(el);
      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.bottom = "10px";

      window.scrollTo(0, window.innerHeight - 100);

      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button",
      ) as HTMLButtonElement;
      const toggle = el.querySelector(
        ".kuc-combobox__group__toggle",
      ) as HTMLDivElement;

      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu",
      ) as HTMLDivElement;

      expect(menuEl.style.position).to.equal("fixed");
      const toggleRect = toggle.getBoundingClientRect();
      const menuTop = parseInt(menuEl.style.top, 10);
      expect(menuTop).to.be.lessThan(toggleRect.top);

      document.body.removeChild(el);
    });

    it("Show scroll bar when menu display is incomplete above", async () => {
      const manyItems = Array.from({ length: 25 }, (_, i) => ({
        label: `Item ${i + 1}`,
        value: `item${i + 1}`,
      }));

      const container = new Combobox({
        items: manyItems,
        value: manyItems[0].value,
      });
      const el = await fixture(container);

      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.top = "60%";
      document.body.appendChild(el);

      const toggleIconButton = el.querySelector(
        ".kuc-combobox__group__toggle__icon__button",
      ) as HTMLButtonElement;

      toggleIconButton.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-combobox__group__select-menu",
      ) as HTMLDivElement;

      expect(menuEl.style.position).to.equal("fixed");
      expect(menuEl.style.overflowY).to.equal("auto");

      const maxHeight = parseInt(menuEl.style.maxHeight, 10);
      expect(maxHeight).to.be.greaterThan(0);

      document.body.removeChild(el);
    });
  });
});
