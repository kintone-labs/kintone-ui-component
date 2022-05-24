import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("MobileText", () => {
  describe("requiredIcon", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new MobileText();
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("none");
    });

    it("should be display inline when assigned true in constructor", async () => {
      const container = new MobileText({ requiredIcon: true });
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("inline");
    });

    it("should be display inline when changed to true by setter", async () => {
      const container = new MobileText({ requiredIcon: false });
      container.requiredIcon = true;
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("inline");
    });

    it("should be display none when changed to false by setter", async () => {
      const container = new MobileText({ requiredIcon: true });
      container.requiredIcon = false;
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("none");
    });
  });
});
