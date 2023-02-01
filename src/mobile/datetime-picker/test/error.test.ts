import { elementUpdated, expect, fixture } from "@open-wc/testing";

import "../../../base/mobile-error";
import "../../../base/mobile-label";
import "../../../base/datetime/mobile-time";
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
    it('should be equal "Format is not valid." when click any invalid value and should be hidden when click any valid value', async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-23",
        error: "error-message",
      });
      const el = await fixture(container);
      const selectMinutesEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;
      selectMinutesEl.value = "";
      selectMinutesEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      await elementUpdated(el);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.have.equal("Format is not valid.");
      expect(errorEl).not.has.attribute("hidden");
      selectMinutesEl.value = "01";
      selectMinutesEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      await elementUpdated(el);
      expect(errorEl).has.attribute("hidden");
    });
  });
});
