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

      window.resizeTo(800, 600);
      document.body.style.height = "2000px";
      document.body.appendChild(el);
      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.bottom = "10px";

      window.scrollTo(0, window.innerHeight - 100);

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
      const menuRect = menuEl.getBoundingClientRect();

      expect(menuRect.bottom).to.be.at.most(toggleRect.top);
      expect(menuRect.top).to.be.lessThan(toggleRect.top);

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

      const height = parseInt(menuEl.style.height, 10);
      expect(height).to.be.greaterThan(0);

      expect(menuEl.style.maxHeight).to.equal(
        "var(--kuc-dropdown-menu-max-height, none)",
      );

      document.body.removeChild(el);
    });

    it("Show menu to the left when there is not enough space on the right", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);

      // Position dropdown near the right edge of viewport
      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.right = "10px";
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
      // Menu should use right positioning when space on right is insufficient
      expect(menuEl.style.left).to.equal("auto");
      expect(menuEl.style.right).to.not.equal("auto");

      document.body.removeChild(el);
    });

    it("Show menu with right:0px when button is partially outside viewport", async () => {
      const container = new Dropdown({
        items: initItems,
        value: initItems[0].value,
      });
      const el = await fixture(container);

      // Position dropdown so button extends beyond viewport width
      (el as HTMLElement).style.position = "fixed";
      (el as HTMLElement).style.left = `${window.innerWidth - 50}px`;
      document.body.appendChild(el);

      const toggle = el.querySelector(
        ".kuc-dropdown__group__toggle",
      ) as HTMLButtonElement;

      toggle.click();
      await elementUpdated(container);
      const menuEl = el.querySelector(
        ".kuc-dropdown__group__select-menu",
      ) as HTMLDivElement;

      const buttonRect = toggle.getBoundingClientRect();
      const viewportWidth =
        window.innerWidth > document.documentElement.clientWidth
          ? document.documentElement.clientWidth
          : window.innerWidth;

      if (viewportWidth < buttonRect.right && viewportWidth > buttonRect.left) {
        // Button is partially outside, menu should be at right edge
        expect(menuEl.style.right).to.equal("0px");
      } else {
        // Button is fully inside, menu should align with button right edge
        const expectedRight = viewportWidth - buttonRect.right;
        expect(menuEl.style.right).to.equal(`${expectedRight}px`);
      }

      document.body.removeChild(el);
    });
  });
});
