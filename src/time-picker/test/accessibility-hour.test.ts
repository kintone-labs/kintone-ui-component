import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("accessibility-hour", () => {
    it("should focus minute input when press ArrowRight on hour input", async () => {
      let triggeredEventMinute: any = null;
      let triggeredEventSuffix: any = null;
      const container = new TimePicker({ hour12: true });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      const inputSuffixEl = el.querySelector(
        ".kuc-base-time__group__suffix"
      ) as HTMLInputElement;
      inputMinuteEl.addEventListener("focus", (event: Event) => {
        triggeredEventMinute = event;
      });
      inputSuffixEl.addEventListener("focus", (event: Event) => {
        triggeredEventSuffix = event;
      });
      inputHourEl.focus();
      await elementUpdated(el);
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true })
      );
      await elementUpdated(el);
      expect(triggeredEventMinute.type).to.equal("focus");
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );
      await elementUpdated(el);
      expect(triggeredEventSuffix.type).to.equal("focus");
    });

    it('should be "00" when focused input hour/minute and press Delete/BackSpace key', async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputHourEl.click();
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Delete", bubbles: true })
      );
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab", bubbles: true })
      );
      await elementUpdated(container);

      expect(inputHourEl.value).to.be.equal("00");
      expect(inputMinuteEl.value).to.be.equal("15");
    });

    it("should not change value when focused input hour and press unsupported key", async () => {
      const container = new TimePicker({ value: "08:15" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputHourEl.focus();
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "a", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("08");
      expect(inputMinuteEl.value).to.be.equal("15");
    });

    it("should be increase 1 hour when focused input hour and press ArrowUp key", async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputHourEl.click();
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("14");
      expect(inputMinuteEl.value).to.be.equal("15");
    });

    it("should be decrease 1 hour when focused input hour and press ArrowDown key", async () => {
      const container = new TimePicker({ value: "01:15" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputHourEl.click();
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("00");
      expect(inputMinuteEl.value).to.be.equal("15");

      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("23");
      expect(inputMinuteEl.value).to.be.equal("15");
    });

    it("should be decrease 1 hour when focused input hour and press ArrowDown key", async () => {
      const container = new TimePicker({ value: "13:15", hour12: true });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputHourEl.click();
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("12");
      expect(inputMinuteEl.value).to.be.equal("15");

      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("11");
      expect(inputMinuteEl.value).to.be.equal("15");
    });

    it("should 08:00 when press 8 key on hour input", async () => {
      const container = new TimePicker({ value: "11:15", hour12: true });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputHourEl.focus();
      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "8", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("08");
      expect(inputMinuteEl.value).to.be.equal("15");
    });
  });
});
