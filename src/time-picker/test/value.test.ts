import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("value", () => {
    it("should be empty string when not assigning", async () => {
      const container = new TimePicker();
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
    });

    it('should be "13:15" when assigned "13:15" by setter', async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputHourEl.value).to.be.equal("13");
      expect(inputMinuteEl.value).to.be.equal("15");
    });

    it('should be "13:15" when changed to "13:15" by setter', async () => {
      const container = new TimePicker({ value: "11:15" });
      container.value = "13:15";
      const el = await fixture(container);
      el.setAttribute("value", "13:15");
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputHourEl.value).to.be.equal("13");
      expect(inputMinuteEl.value).to.be.equal("15");
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

    it("should 08:00 when focus input group and press 8 key while value is empty", async () => {
      const container = new TimePicker({ value: "" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      const buttonOpen = el.querySelector(
        ".kuc-base-time__assistive-text"
      ) as HTMLButtonElement;

      buttonOpen.focus();
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "8", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("08");
      expect(inputMinuteEl.value).to.be.equal("00");
    });

    it("should throw error when set invalid value", async () => {
      const container = new TimePicker({ value: "12,12" });
      try {
        const el = await fixture(container);
      } catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.be.equal("Format is not valid.");
      }
    });
  });
});
