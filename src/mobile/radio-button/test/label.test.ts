import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

describe("MobileRadioButton", () => {
  describe("label", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new MobileRadioButton();
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-mobile-radio-button__group__label"
      ) as HTMLLegendElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(true);

      const labelTextEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("");
    });

    it('should be display "options-label" when assigned "options-label" in constructor', async () => {
      const container = new MobileRadioButton({ label: "options-label" });
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-mobile-radio-button__group__label"
      ) as HTMLLegendElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(false);

      const labelTextEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("options-label");
    });

    it('should be display "replace-label" when changed to "replace-label" by setter', async () => {
      const container = new MobileRadioButton({
        label: "options-label"
      });
      container.label = "replace-label";

      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-mobile-radio-button__group__label"
      ) as HTMLLegendElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(false);

      const labelTextEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("replace-label");
    });
  });
});
