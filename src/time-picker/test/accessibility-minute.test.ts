import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("accessibility-minute", () => {
    it("should focus hour input when press ArrowLeft on minute input", async () => {
      let triggeredEvent: any = null;
      const container = new TimePicker();
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      inputHourEl.addEventListener("focus", (event: Event) => {
        triggeredEvent = event;
      });
      inputMinuteEl.focus();
      await elementUpdated(el);
      inputMinuteEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true })
      );
      await elementUpdated(el);
      expect(triggeredEvent.type).to.equal("focus");
    });

    it('should be "13:00" when focused input minute and press Delete key', async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputHourEl.click();
      inputMinuteEl.click();
      inputMinuteEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Backspace", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("13");
      expect(inputMinuteEl.value).to.be.equal("00");
    });

    it("should be increase 1 minute when focused input minute and press ArrowUp key", async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputMinuteEl.click();
      inputMinuteEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("13");
      expect(inputMinuteEl.value).to.be.equal("16");
    });

    it("should be decrease 1 minute when focused input minute and press ArrowDown key", async () => {
      const container = new TimePicker({ value: "12:00" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputMinuteEl.click();
      inputMinuteEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("12");
      expect(inputMinuteEl.value).to.be.equal("59");
    });

    it("should change minute when press number key on minute input", async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      inputMinuteEl.focus();
      inputMinuteEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "2", bubbles: true })
      );
      await elementUpdated(el);
      expect(inputHourEl.value).to.be.equal("13");
      expect(inputMinuteEl.value).to.be.equal("52");

      inputMinuteEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "8", bubbles: true })
      );
      await elementUpdated(el);
      expect(inputHourEl.value).to.be.equal("13");
      expect(inputMinuteEl.value).to.be.equal("28");

      inputMinuteEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "8", bubbles: true })
      );
      await elementUpdated(el);
      expect(inputHourEl.value).to.be.equal("13");
      expect(inputMinuteEl.value).to.be.equal("08");
    });
  });
});
