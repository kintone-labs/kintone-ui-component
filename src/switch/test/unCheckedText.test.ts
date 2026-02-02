import { expect, fixture } from "@open-wc/testing";

import { Switch } from "../index";

describe("Switch", () => {
  describe("unCheckedText", () => {
    it('should be display "" when not assigned in constructor', async () => {
      const container = new Switch();
      const el = await fixture(container);

      const spanEl = el.querySelector(
        ".kuc-switch__group__switch__track__text--unchecked",
      ) as HTMLSpanElement;
      expect(spanEl.textContent).to.equal("");
    });

    it('should be display "options-unchecked-text" when assigned "options-unchecked-text" in constructor', async () => {
      const container = new Switch({ unCheckedText: "options-unchecked-text" });
      const el = await fixture(container);

      const spanEl = el.querySelector(
        ".kuc-switch__group__switch__track__text--unchecked",
      ) as HTMLSpanElement;
      expect(spanEl.textContent).to.equal("options-unchecked-text");
    });

    it('should be display "replace-unchecked-text" when changed to "replace-unchecked-text" by setter', async () => {
      const container = new Switch({
        unCheckedText: "options-unchecked-text",
      });
      container.unCheckedText = "replace-unchecked-text";

      const el = await fixture(container);
      const spanEl = el.querySelector(
        ".kuc-switch__group__switch__track__text--unchecked",
      ) as HTMLSpanElement;
      expect(spanEl.textContent).to.equal("replace-unchecked-text");
    });
  });
});
