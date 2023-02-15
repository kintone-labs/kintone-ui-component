import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { MobileTimePicker } from "../index";

describe("MobileTimePicker", () => {
  describe("error", () => {
    it("should not display when not assigning in constructor", async () => {
      const container = new MobileTimePicker();
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl).has.attribute("hidden");
    });

    it('should be "error-message" when assigning in constructor', async () => {
      const container = new MobileTimePicker({ error: "error-message" });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });

    it('should be "error-message" when setting by setter', async () => {
      const container = new MobileTimePicker();
      const el = await fixture(container);
      container.error = "error-message";
      await elementUpdated(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });

    it('should be replaced by "replace-error" when changing by setter', async () => {
      const container = new MobileTimePicker({ error: "error-message" });
      const el = await fixture(container);
      container.error = "replace-error";
      await elementUpdated(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("replace-error");
      expect(errorEl).not.has.attribute("hidden");
    });
    it('should be replaced by "Format is not valid." when select a invalid value and should be empty when select a valid value', async () => {
      const container = new MobileTimePicker({
        error: "error-message",
        language: "en",
      });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;
      selectMinuteEl.value = "35";
      selectMinuteEl.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(container);
      expect(errorEl.innerText).to.equal("Format is not valid.");
      expect(container.value).to.equal(undefined);
    });
    it('should be equal "Format is not valid." when click any invalid value and should be hidden when click any valid value', async () => {
      const container = new MobileTimePicker({
        value: "12:32",
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
