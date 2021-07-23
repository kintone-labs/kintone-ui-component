import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("error", () => {
    it("does not display when initializing without props option", async () => {
      const container = new MobileMultiChoice({});
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-multi-choice__error"
      ) as HTMLDivElement;
      expect(errorEl).has.attribute("hidden");
    });

    it('should be equal "error-message" when initializing error with "error-message"', async () => {
      const container = new MobileMultiChoice({ error: "error-message" });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-multi-choice__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.have.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });

    it('should be replace by "replace-error" when changing by setter', async () => {
      const container = new MobileMultiChoice({
        error: "error-message"
      });
      container.error = "replace-error";
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-multi-choice__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.have.equal("replace-error");
      expect(errorEl).not.has.attribute("hidden");
    });
  });
});
