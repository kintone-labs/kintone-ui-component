import { expect, fixture } from "@open-wc/testing";

import { Switch } from "../index";

describe("Switch", () => {
  describe("label", () => {
    it('should be display "" when not assigned in constructor', async () => {
      const container = new Switch();
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-switch__group__label",
      ) as HTMLLabelElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(true);

      const labelTextEl = el.querySelector(
        ".kuc-base-label__text",
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("");
    });

    it('should be display "options-label" when assigned "options-label" in constructor', async () => {
      const container = new Switch({ label: "options-label" });
      const el = await fixture(container);

      const labelEl = el.querySelector(
        ".kuc-switch__group__label",
      ) as HTMLLabelElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(false);

      const labelTextEl = el.querySelector(
        ".kuc-base-label__text",
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("options-label");
    });

    it('should be display "replace-label" when changed to "replace-label" by setter', async () => {
      const container = new Switch({
        label: "options-label",
      });
      container.label = "replace-label";

      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-switch__group__label",
      ) as HTMLLabelElement;
      expect(labelEl.hasAttribute("hidden")).to.equal(false);

      const labelTextEl = el.querySelector(
        ".kuc-base-label__text",
      ) as HTMLSpanElement;
      expect(labelTextEl.textContent).to.equal("replace-label");
    });
  });
});
