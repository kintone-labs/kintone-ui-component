import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseLabel", () => {
  describe("requiredIcon", () => {
    it("should be null when not assigned", async () => {
      const container = document.createElement("kuc-base-label");
      const el = await fixture(container);

      const requiredIconEl = el.querySelector(
        ".kuc-base-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("none");
    });

    it("should be display inline when assigned true in constructor", async () => {
      const container = document.createElement("kuc-base-label");
      container.setAttribute("requiredIcon", "true");
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("inline");
    });

    it("should be display inline when changed to true by setter", async () => {
      const container = document.createElement("kuc-base-label");
      container.setAttribute("requiredIcon", "false");

      const el = await fixture(container);
      container.setAttribute("requiredIcon", "true");
      await elementUpdated(el);
      const requiredIconEl = el.querySelector(
        ".kuc-base-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("inline");
    });

    it("should be display none when changed to false by setter", async () => {
      const container = document.createElement("kuc-base-label");
      container.setAttribute("requiredIcon", "true");

      const el = await fixture(container);
      container.removeAttribute("requiredIcon");
      await elementUpdated(el);
      const requiredIconEl = el.querySelector(
        ".kuc-base-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
      const computedStyle = window.getComputedStyle(requiredIconEl);
      expect(computedStyle.display).to.equal("none");
    });
  });
});
