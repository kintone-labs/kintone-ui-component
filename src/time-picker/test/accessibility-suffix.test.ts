import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("accessibility-suffix", () => {
    it("should focus minute input when press ArrowLeft on suffix input", async () => {
      let triggeredEvent: any = null;
      const container = new TimePicker({ hour12: true });
      const el = await fixture(container);
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      const inputSuffixEl = el.querySelector(
        ".kuc-base-time__group__suffix"
      ) as HTMLInputElement;
      inputMinuteEl.addEventListener("focus", (event: Event) => {
        triggeredEvent = event;
      });
      inputSuffixEl.focus();
      await elementUpdated(el);
      inputSuffixEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true })
      );
      await elementUpdated(el);
      expect(triggeredEvent.type).to.equal("focus");
    });

    it("should be toggle AM/PM when focused input suffix and press ArrowUp key", async () => {
      const container = new TimePicker({ value: "08:15", hour12: true });
      const el = await fixture(container);
      const inputSuffixEl = el.querySelector(
        ".kuc-base-time__group__suffix"
      ) as HTMLInputElement;
      expect(inputSuffixEl.value).to.be.equal("AM");

      inputSuffixEl.focus();
      inputSuffixEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })
      );
      await elementUpdated(el);
      expect(inputSuffixEl.value).to.be.equal("PM");

      inputSuffixEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })
      );
      await elementUpdated(el);
      expect(inputSuffixEl.value).to.be.equal("AM");
    });

    it("should be AM/PM when focused input suffix and press A/P key", async () => {
      const container = new TimePicker({ value: "08:15", hour12: true });
      const el = await fixture(container);
      const inputSuffixEl = el.querySelector(
        ".kuc-base-time__group__suffix"
      ) as HTMLInputElement;
      expect(inputSuffixEl.value).to.be.equal("AM");

      inputSuffixEl.focus();
      inputSuffixEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "p", bubbles: true })
      );
      await elementUpdated(el);
      expect(inputSuffixEl.value).to.be.equal("PM");

      inputSuffixEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "a", bubbles: true })
      );
      await elementUpdated(el);
      expect(inputSuffixEl.value).to.be.equal("AM");
    });

    it("should not change value when focused input suffix and press unsupported key", async () => {
      const container = new TimePicker({ value: "08:15", hour12: true });
      const el = await fixture(container);
      const inputSuffixEl = el.querySelector(
        ".kuc-base-time__group__suffix"
      ) as HTMLInputElement;
      expect(inputSuffixEl.value).to.be.equal("AM");

      inputSuffixEl.focus();
      inputSuffixEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "m", bubbles: true })
      );
      inputSuffixEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Delete", bubbles: true })
      );
      inputSuffixEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "8", bubbles: true })
      );
      await elementUpdated(el);
      expect(inputSuffixEl.value).to.be.equal("AM");
    });
  });
});
