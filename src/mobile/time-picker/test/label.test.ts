import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { MobileTimePicker } from "..";

describe("MobileTimePicker", () => {
  describe("label", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new MobileTimePicker();
      const el = await fixture(container);

      const labelTextEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("");
    });

    it('should be display "replace-label" when changed to "replace-label" by setter', async () => {
      const container = new MobileTimePicker({
        label: "options-label"
      });

      const el = await fixture(container);
      container.label = "replace-label";
      await elementUpdated(el);
      const labelTextEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("replace-label");
    });
  });
});
