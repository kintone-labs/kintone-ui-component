import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

describe("MobileRadioButton", () => {
  describe("error", () => {
    it("should not display when not assigning in constructor", async () => {
      const container = new MobileRadioButton();
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-radio-button__group__error"
      ) as HTMLDivElement;
      expect(errorEl).has.attribute("hidden");
    });

    it('should be "error-message" when assigning in constructor', async () => {
      const container = new MobileRadioButton({ error: "error-message" });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-radio-button__group__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });

    it('should be replaced by "replace-error" when changing by setter', async () => {
      const container = new MobileRadioButton({ error: "error-message" });
      container.error = "replace-error";
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-radio-button__group__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("replace-error");
      expect(errorEl).not.has.attribute("hidden");
    });
  });
});
