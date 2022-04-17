import { expect, fixture } from "@open-wc/testing";
import { Checkbox } from "../index";

describe("Checkbox", () => {
  describe("label", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new Checkbox();
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-checkbox__group__label"
      ) as HTMLLegendElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(true);

      const labelCheckboxEl = el.querySelector(
        ".kuc-base-label__text"
      ) as HTMLSpanElement;
      expect(labelCheckboxEl.textContent).to.equal("");
    });

    it('should be display "options-label" when assigned "options-label" in constructor', async () => {
      const container = new Checkbox({ label: "options-label" });
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-checkbox__group__label"
      ) as HTMLLegendElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(false);

      const labelCheckboxEl = el.querySelector(
        ".kuc-base-label__text"
      ) as HTMLSpanElement;
      expect(labelCheckboxEl.textContent).to.equal("options-label");
    });

    it('should be display "replace-label" when changed to "replace-label" by setter', async () => {
      const container = new Checkbox({ label: "options-label" });
      container.label = "replace-label";
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-checkbox__group__label"
      ) as HTMLLegendElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(false);

      const labelCheckboxEl = el.querySelector(
        ".kuc-base-label__text"
      ) as HTMLSpanElement;
      expect(labelCheckboxEl.textContent).to.equal("replace-label");
    });
  });
});
