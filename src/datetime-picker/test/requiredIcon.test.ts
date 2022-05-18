import { expect, fixture } from "@open-wc/testing";
import { DateTimePicker } from "../index";

describe("DateTimePicker", () => {
  describe("requiredIcon", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new DateTimePicker();
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be display block when assigned true in constructor", async () => {
      const container = new DateTimePicker({ requiredIcon: true });
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
    });

    it("should be display block when changed to true by setter", async () => {
      const container = new DateTimePicker({ requiredIcon: false });
      container.requiredIcon = true;
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(false);
    });

    it("should be display none when changed to false by setter", async () => {
      const container = new DateTimePicker({ requiredIcon: true });
      container.requiredIcon = false;
      const el = await fixture(container);
      const requiredIconEl = el.querySelector(
        ".kuc-base-label__required-icon"
      ) as HTMLSpanElement;
      expect(requiredIconEl.hasAttribute("hidden")).to.equal(true);
    });
  });
});
