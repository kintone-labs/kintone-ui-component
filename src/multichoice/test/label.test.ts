import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("MultiChoice", () => {
  describe("label", () => {
    it("should be display none when not assigned in constructor", async () => {
      const container = new MultiChoice();
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-multi-choice__group__label"
      ) as HTMLLegendElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(true);

      const labelTextEl = el.querySelector(
        ".kuc-base-label__text"
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("");
    });

    it('should be display "options-label" when assigned "options-label" in constructor', async () => {
      const container = new MultiChoice({ label: "options-label" });
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-multi-choice__group__label"
      ) as HTMLLegendElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(false);

      const labelTextEl = el.querySelector(
        ".kuc-base-label__text"
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("options-label");
    });

    it('should be display "replace-label" when changed to "replace-label" by setter', async () => {
      const container = new MultiChoice({
        label: "options-label",
      });
      container.label = "replace-label";

      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-multi-choice__group__label"
      ) as HTMLLegendElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(false);

      const labelTextEl = el.querySelector(
        ".kuc-base-label__text"
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("replace-label");
    });
  });
});
