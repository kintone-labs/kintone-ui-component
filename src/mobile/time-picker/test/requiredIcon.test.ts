import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { MobileTimePicker } from "..";

describe("MobileTimePicker", () => {
  describe("requiredIcon", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new MobileTimePicker();
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be display block when assigned true in constructor", async () => {
      const container = new MobileTimePicker({ requiredIcon: true });
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
    });

    it("should be display block when changed to true by setter", async () => {
      const container = new MobileTimePicker({ requiredIcon: false });
      const el = await fixture(container);
      container.requiredIcon = true;
      await elementUpdated(el);
      const requiredIconEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
    });

    it("should be display none when changed to false by setter", async () => {
      const container = new MobileTimePicker({ requiredIcon: true });
      const el = await fixture(container);
      container.requiredIcon = false;
      await elementUpdated(el);
      const requiredIconEl = el.querySelector(
        ".kuc-base-mobile-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
    });
  });
});
