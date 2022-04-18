import { fixture, expect, elementUpdated } from "@open-wc/testing";
import { Dropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Pear", value: "pear" }
];

describe("Dropdown", () => {
  describe("menuPosition", () => {
    it("Show menu below default", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value
      });
      const el = await fixture(container);
      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal("auto");
      expect(menuEl.style.height).to.equal("auto");
    });

    it("Show scroll bar when menu display is incomplete below", async () => {
      await fixture('<div style="height: 200px" />');

      const container = new Dropdown({
        items: [...initItems, ...initItems, ...initItems],
        value: initItems[0].value
      });
      const el = await fixture(container);
      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal("auto");
      expect(menuEl.style.overflowY).to.equal("scroll");
    });

    it("Show menu above when it cannot be completely displayed below", async () => {
      await fixture('<div style="height: 500px" />');

      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
        error: "Error"
      });
      const el = await fixture(container);
      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLDivElement;
      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal(
        `${toggle.offsetHeight + errorEl.offsetHeight + 16}px`
      );
      expect(menuEl.style.height).to.equal("auto");
    });

    it("Show scroll bar when menu display is incomplete above", async () => {
      await fixture('<div style="height: 300px" />');

      const container = new Dropdown({
        items: [...initItems, ...initItems, ...initItems],
        value: initItems[0].value
      });
      const el = await fixture(container);
      document.body.appendChild(el);
      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu"
      ) as HTMLDivElement;
      expect(menuEl.style.bottom).to.equal(`${toggle.offsetHeight}px`);
      expect(menuEl.style.overflowY).to.equal("scroll");
    });
  });
});
