import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("language", () => {
    it("should be using browser language when not assigned in constructor", async () => {
      const container = new TimePicker({
        value: "10:00",
        min: "9:00",
        max: "10:00"
      });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      document.documentElement.setAttribute("lang", "en");

      inputHourEl.click();
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })
      );
      await elementUpdated(el);

      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;

      expect(errorEl.innerText).to.equal("Time is out of valid range.");
    });

    it("should be format ja language when assigned in constructor", async () => {
      const container = new TimePicker({
        value: "10:00",
        min: "9:00",
        max: "10:00",
        language: "ja"
      });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      document.documentElement.setAttribute("lang", "en");

      inputHourEl.click();
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })
      );
      await elementUpdated(el);

      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;

      expect(errorEl.innerText).to.equal("時刻が有効な範囲外です。");
    });

    it("should be change to zh language when assigned by setter", async () => {
      const container = new TimePicker({
        value: "10:00",
        min: "9:00",
        max: "10:00",
        language: "ja"
      });
      container.language = "zh";
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      document.documentElement.setAttribute("lang", "en");

      inputHourEl.click();
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })
      );
      await elementUpdated(el);

      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;

      expect(errorEl.innerText).to.equal("时间超出有效范围。");
    });
  });
});
