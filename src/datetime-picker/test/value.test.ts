import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { DateTimePicker } from "../index";
import { getTodayStringByLocale } from "../../base/datetime/utils";

describe("DateTimePicker", () => {
  describe("value", () => {
    it("should be empty string when not assigning", async () => {
      const container = new DateTimePicker();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("");
      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
    });

    it('should be "12/12/2021" when assigning on constructor', async () => {
      const container = new DateTimePicker({ value: "2021-12-12" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("12/12/2021");
      expect(inputHourEl.value).to.be.equal("00");
      expect(inputMinuteEl.value).to.be.equal("00");
    });

    it('should be "12/13/2021" when assigned "2021-12-13" by setter', async () => {
      const container = new DateTimePicker({ value: "2021-12-12" });
      container.value = "2021-12-13";
      const el = await fixture(container);
      el.setAttribute("value", "13:15");
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("12/13/2021");
    });

    it("should throw error when set invalid value", async () => {
      const container = new DateTimePicker({ value: "2021-02-28T09:30:61" });
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

    it("should throw error when set invalid value", async () => {
      const container = new DateTimePicker({ value: "2021-02-28T" });
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

    it("should throw error when set invalid value", async () => {
      const container = new DateTimePicker({ value: "2021-02-28T09:30" });
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

    it("should throw error when set value is not a string", async () => {
      const container = new DateTimePicker({ value: undefined });
      // @ts-expect-error
      container.value = {};
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

    it("should be today value when press today button on calendar", async () => {
      const container = new DateTimePicker({
        value: "2021-02-28T09:30:00",
        language: "ja"
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const todayBtnEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      todayBtnEl.click();
      await elementUpdated(el);
      const todayStr = getTodayStringByLocale();
      expect(inputDateEl.value).to.be.equal(todayStr);

      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      expect(inputHourEl.value).to.be.equal("09");
      expect(inputMinuteEl.value).to.be.equal("30");
    });

    it("should be empty value and UI when set '' on constructor", async () => {
      const container = new DateTimePicker({ value: "", language: "ja" });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be empty value and UI when set '' by setter", async () => {
      const container = new DateTimePicker({
        value: "2022-12-12",
        language: "ja"
      });
      const el = await fixture(container);
      container.value = "";
      await elementUpdated(el);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be empty value and UI when set undefined on constructor", async () => {
      const container = new DateTimePicker({
        value: undefined,
        language: "ja"
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be undefined value and empty on UI when set undefined on setter", async () => {
      const container = new DateTimePicker({
        value: "2022-12-12",
        language: "ja"
      });
      const el = await fixture(container);
      container.value = undefined;
      await elementUpdated(el);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(container.value).to.be.equal(undefined);
    });

    it("should throw error when it is less than min", async () => {
      const container = new DateTimePicker({
        value: "2022-12-12T10:00",
        min: "12:00"
      });
      try {
        const el = await fixture(container);
      } catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.be.equal("Time is out of valid range.");
      }
    });
  });
});
