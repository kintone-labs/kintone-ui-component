import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { MobileTimePicker } from "../index";

describe("MobileTimePicker", () => {
  describe("change event", () => {
    it('should be replaced by "Format is not valid." when assign "en" to language and select a invalid value', async () => {
      const container = new MobileTimePicker({
        error: "error-message",
        language: "en",
      });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error",
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes",
      ) as HTMLSelectElement;
      selectMinuteEl.value = "35";
      selectMinuteEl.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(container);
      expect(errorEl.innerText).to.equal("Format is not valid.");
      expect(container.value).to.equal(undefined);
    });

    it('should be replaced by "時刻の形式が不正です。" when assign "ja" to language and select a invalid value', async () => {
      const container = new MobileTimePicker({
        error: "error-message",
        language: "ja",
      });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error",
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes",
      ) as HTMLSelectElement;
      selectMinuteEl.value = "35";
      selectMinuteEl.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(container);
      expect(errorEl.innerText).to.equal("時刻の形式が不正です。");
      expect(container.value).to.equal(undefined);
    });

    it('should be replaced by "时间格式不正确。" when assign "zh" to language and select a invalid value', async () => {
      const container = new MobileTimePicker({
        error: "error-message",
        language: "zh",
      });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error",
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes",
      ) as HTMLSelectElement;
      selectMinuteEl.value = "35";
      selectMinuteEl.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(container);
      expect(errorEl.innerText).to.equal("时间格式不正确。");
      expect(container.value).to.equal(undefined);
    });

    it('should be replaced by "時間格式錯誤。" when assign "zh-TW" to language and select a invalid value', async () => {
      const container = new MobileTimePicker({
        error: "error-message",
        language: "zh-TW",
      });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error",
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes",
      ) as HTMLSelectElement;
      selectMinuteEl.value = "35";
      selectMinuteEl.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(container);
      expect(errorEl.innerText).to.equal("時間格式錯誤。");
      expect(container.value).to.equal(undefined);
    });

    it('should be replaced by "Formato no válido." when assign "es" to language and select a invalid value', async () => {
      const container = new MobileTimePicker({
        error: "error-message",
        language: "es",
      });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-mobile-error__error",
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes",
      ) as HTMLSelectElement;
      selectMinuteEl.value = "35";
      selectMinuteEl.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(container);
      expect(errorEl.innerText).to.equal("Formato no válido.");
      expect(container.value).to.equal(undefined);
    });
  });
});
