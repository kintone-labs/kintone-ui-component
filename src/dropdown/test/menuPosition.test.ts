import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Dropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Pear", value: "pear" },
];

describe("Dropdown", () => {
  describe("menuPosition", () => {
    it("Show menu below default", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);
      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle",
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu",
      ) as HTMLDivElement;

      expect(menuEl.style.position).to.equal("fixed");
      const toggleRect = toggle.getBoundingClientRect();
      expect(parseInt(menuEl.style.top, 10)).to.equal(toggleRect.bottom);
    });

    it("Show scroll bar when menu display is incomplete below", async () => {
      const container = new Dropdown({
        items: [...initItems, ...initItems, ...initItems],
        value: initItems[0].value,
      });
      const el = await fixture(container);

      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.bottom = "50px";
      document.body.appendChild(el);

      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle",
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu",
      ) as HTMLDivElement;

      expect(menuEl.style.position).to.equal("fixed");
      expect(menuEl.style.overflowY).to.equal("auto");
      document.body.removeChild(el);
    });

    it("Show menu above when it cannot be completely displayed below", async () => {
      const manyItems = Array.from({ length: 20 }, (_, i) => ({
        label: `Option ${i + 1}`,
        value: `option${i + 1}`,
      }));

      const container = new Dropdown({
        items: manyItems,
        value: manyItems[0].value,
      });
      const el = await fixture(container);

      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.bottom = "20px";
      document.body.appendChild(el);

      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle",
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu",
      ) as HTMLDivElement;

      expect(menuEl.style.position).to.equal("fixed");
      const toggleRect = toggle.getBoundingClientRect();
      const menuTop = parseInt(menuEl.style.top, 10);

      expect(menuTop).to.be.lessThan(toggleRect.top);

      document.body.removeChild(el);
    });

    it("Show scroll bar when menu display is incomplete above", async () => {
      const manyItems = Array.from({ length: 25 }, (_, i) => ({
        label: `Option ${i + 1}`,
        value: `option${i + 1}`,
      }));

      const container = new Dropdown({
        items: manyItems,
        value: manyItems[0].value,
      });
      const el = await fixture(container);

      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.top = "60%";
      document.body.appendChild(el);

      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle",
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu",
      ) as HTMLDivElement;

      expect(menuEl.style.position).to.equal("fixed");
      expect(menuEl.style.overflowY).to.equal("auto");

      const maxHeight = parseInt(menuEl.style.maxHeight, 10);
      expect(maxHeight).to.be.greaterThan(0);

      document.body.removeChild(el);
    });
  });
});
