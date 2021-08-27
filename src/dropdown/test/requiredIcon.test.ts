import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("Dropdown", () => {
  describe("requiredIcon", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new Dropdown();
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-dropdown__group__label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("none");
    });

    it("should be display inline when assigned true in constructor", async () => {
      const container = new Dropdown({ requiredIcon: true });
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-dropdown__group__label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("inline");
    });

    it("should be display inline when changed to true by setter", async () => {
      const container = new Dropdown({ requiredIcon: false });
      container.requiredIcon = true;
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-dropdown__group__label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("inline");
    });

    it("should be display none when changed to false by setter", async () => {
      const container = new Dropdown({ requiredIcon: true });
      container.requiredIcon = false;
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-dropdown__group__label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("none");
    });
  });
});
