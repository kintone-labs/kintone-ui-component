import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
];

describe("Dropdown", () => {
  describe("disabled", () => {
    it("should not be added into toggle element when not set in constructor", async () => {
      const container = new Dropdown({ items: initItems });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      expect(toggleEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into toggle element when set true in constructor", async () => {
      const container = new Dropdown({ items: initItems, disabled: true });
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      expect(toggleEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into toggle element when changed to true by setter", async () => {
      const container = new Dropdown({ items: initItems, disabled: false });
      container.disabled = true;
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      expect(toggleEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should not be added into toggle element when set false in constructor", async () => {
      const container = new Dropdown({ items: initItems, disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const toggleEl = el.querySelector(
        ".kuc-dropdown__group__toggle"
      ) as HTMLButtonElement;

      expect(toggleEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
