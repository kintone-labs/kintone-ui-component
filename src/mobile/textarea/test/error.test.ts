import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("MobileTextArea", () => {
  describe("error", () => {
    it("should not display when not assigning in constructor", async () => {
      const container = new MobileTextArea();
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-textarea__error"
      ) as HTMLDivElement;
      expect(errorEl).has.attribute("hidden");
    });

    it('should be "error-message" when assigning in constructor', async () => {
      const container = new MobileTextArea({ error: "error-message" });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-textarea__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });

    it('should be replaced by "replace-error" when changing by setter', async () => {
      const container = new MobileTextArea({ error: "error-message" });
      container.error = "replace-error";
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-textarea__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("replace-error");
      expect(errorEl).not.has.attribute("hidden");
    });
  });
});
