import { expect, fixture } from "@open-wc/testing";

import { Switch } from "../index";

describe("Switch", () => {
  describe("checkedText", () => {
    it('should be display "" when not assigned in constructor', async () => {
      const container = new Switch();
      const el = await fixture(container);

      const spanEl = el.querySelector(
        ".kuc-switch__group__switch__track__text--checked",
      ) as HTMLSpanElement;
      expect(spanEl.textContent).to.equal("");
    });

    it('should be display "options-checked-text" when assigned "options-checked-text" in constructor', async () => {
      const container = new Switch({ checkedText: "options-checked-text" });
      const el = await fixture(container);

      const spanEl = el.querySelector(
        ".kuc-switch__group__switch__track__text--checked",
      ) as HTMLSpanElement;
      expect(spanEl.textContent).to.equal("options-checked-text");
    });

    it('should be display "replace-checked-text" when changed to "replace-checked-text" by setter', async () => {
      const container = new Switch({
        checkedText: "options-checked-text",
      });
      container.checkedText = "replace-checked-text";

      const el = await fixture(container);
      const spanEl = el.querySelector(
        ".kuc-switch__group__switch__track__text--checked",
      ) as HTMLSpanElement;
      expect(spanEl.textContent).to.equal("replace-checked-text");
    });
  });
});
