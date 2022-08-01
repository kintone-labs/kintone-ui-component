import { expect, fixture } from "@open-wc/testing";
import "../../../base/mobile-error";
import "../../../base/mobile-label";
import { MobileDateTimePicker } from "../index";

describe("MobileDateTimePicker", () => {
  describe("error", () => {
    it("does not display when initializing without props option", async () => {
      const container = new MobileDateTimePicker({});
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl).has.attribute("hidden");
    });

    it('should be equal "error-message" when initializing error with "error-message"', async () => {
      const container = new MobileDateTimePicker({ error: "error-message" });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.have.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });

    it('should be replace by "replace-error" when changing by setter', async () => {
      const container = new MobileDateTimePicker({
        error: "error-message",
      });
      container.error = "replace-error";
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.have.equal("replace-error");
      expect(errorEl).not.has.attribute("hidden");
    });
  });
});
