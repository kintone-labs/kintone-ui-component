import { fixture, expect, elementUpdated } from "@open-wc/testing";
import { Dropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

describe("Dropdown", () => {
  describe("menuPosition", () => {
    it("Show menu below default", async () => {
      document.body.style.height = "200px";
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
      document.body.style.height = "100px";
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
      expect(menuEl.style.overflowY).to.equal("scroll");
    });

    it("Show menu above when it cannot be completely displayed below", async () => {
      document.body.style.height = "200px";
      await fixture('<div style="height: 150px" />');

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
      expect(menuEl.style.bottom).to.equal(`${toggle.offsetHeight}px`);
      expect(menuEl.style.height).to.equal("auto");
    });

    it("Show scroll bar when menu display is incomplete above", async () => {
      document.body.style.height = "200px";
      await fixture('<div style="height: 100px" />');

      const container = new Dropdown({
        items: initItems,
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
