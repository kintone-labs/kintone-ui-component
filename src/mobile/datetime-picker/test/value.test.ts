import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../../../base/datetime/mobile-time";
import "../../../base/datetime/mobile-date";
import { MobileDateTimePicker } from "../index";
import { getTodayStringByLocale } from "../../../base/datetime/utils";

describe("MobileDateTimePicker", () => {
  describe("value", () => {
    it("should be empty string when not assigning", async () => {
      const container = new MobileDateTimePicker();
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it('should be "12/12/2021T00:00:00" when assigning missing time part on constructor', async () => {
      const container = new MobileDateTimePicker({ value: "2021-12-12" });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(inputDateEl.value).to.be.equal("12/12/2021");
      expect(inputHourEl.value).to.be.equal("00");
      expect(inputMinuteEl.value).to.be.equal("00");
      expect(container.value).to.be.equal("2021-12-12T00:00:00");
    });

    it('should be "12/12/2021T12:12:12" when assigning on constructor', async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-12T12:12:12",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(inputDateEl.value).to.be.equal("12/12/2021");
      expect(inputHourEl.value).to.be.equal("12");
      expect(inputMinuteEl.value).to.be.equal("12");
      expect(container.value).to.be.equal("2021-12-12T12:12:12");
    });

    it('should be "2021-12-13T11:11:00" when changed to "2021-12-13T11:11:00" by setter', async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-12T11:11:00",
      });
      const el = await fixture(container);
      container.value = "2021-12-13T11:11:00";
      await elementUpdated(el);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(inputDateEl.value).to.be.equal("12/13/2021");
      expect(inputHourEl.value).to.be.equal("11");
      expect(inputMinuteEl.value).to.be.equal("11");
      expect(container.value).to.be.equal("2021-12-13T11:11:00");
    });

    it("should throw error when set invalid value", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("Format is not valid.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MobileDateTimePicker();
      container.value = "12,12";
      fixture(container);
    });

    it("should throw error when set null", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("Format is not valid.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MobileDateTimePicker();
      // @ts-ignore
      container.value = null;
      fixture(container);
    });

    it("should be today value when pressing today button on calendar", async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-12T12:12:12",
        language: "ja",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const todayBtnEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      todayBtnEl.click();
      await elementUpdated(el);
      const todayStr = getTodayStringByLocale();
      expect(inputDateEl.value).to.be.equal(todayStr);
      expect(inputHourEl.value).to.be.equal("12");
      expect(inputMinuteEl.value).to.be.equal("12");
      expect(container.value).to.be.equal(`${todayStr}T12:12:12`);
    });

    it("should be undefined value and input emtpy on UI when set undefined by setter", async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-12",
        language: "ja",
      });
      const el = await fixture(container);
      container.value = undefined;
      await elementUpdated(el);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal(undefined);
    });

    it("should be empty value and input emtpy on UI when assigning undefined on constructor", async () => {
      const container = new MobileDateTimePicker({
        value: undefined,
        language: "ja",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be empty value and input emtpy on UI when set `` on constructor", async () => {
      const container = new MobileDateTimePicker({
        value: "",
        language: "ja",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be empty value and input emtpy on UI when set `` by setter", async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-12",
        language: "ja",
      });
      const el = await fixture(container);
      container.value = "";
      await elementUpdated(el);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be undefined when select empty on hour", async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-12T01",
        language: "ja",
      });
      const el = await fixture(container);
      container.value = "";
      await elementUpdated(el);
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const baseTimeEl = el.querySelector(
        ".kuc-mobile-datetime-picker__group__input--time"
      ) as HTMLElement;
      inputHourEl.value = "";
      baseTimeEl.dispatchEvent(
        new CustomEvent("kuc:base-mobile-time-change", {
          detail: {
            value: ":00",
            oldValue: "00:00",
            error: "Format is not valid.",
          },
        })
      );
      await elementUpdated(el);
      expect(container.value).to.be.equal(undefined);
    });

    it("should be undefined when select today while missing time hour", async () => {
      const container = new MobileDateTimePicker({
        value: getTodayStringByLocale(),
        language: "ja",
      });
      const el = await fixture(container);
      container.value = "";
      await elementUpdated(el);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const baseTimeEl = el.querySelector(
        ".kuc-mobile-datetime-picker__group__input--time"
      ) as HTMLElement;
      inputHourEl.value = "";
      baseTimeEl.dispatchEvent(
        new CustomEvent("kuc:base-mobile-time-change", {
          detail: {
            value: ":00",
            oldValue: "00:00",
            error: "Format is not valid.",
          },
        })
      );
      await elementUpdated(el);
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const todayBtnEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      todayBtnEl.dispatchEvent(new Event("click"));
      await elementUpdated(el);

      expect(container.value).to.be.equal(undefined);
    });

    it("should be today value when pressing today button on calendar", async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-12T12:12:12",
        language: "ja",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const todayBtnEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      todayBtnEl.click();
      await elementUpdated(el);
      const todayStr = getTodayStringByLocale();
      expect(inputDateEl.value).to.be.equal(todayStr);
      expect(inputHourEl.value).to.be.equal("12");
      expect(inputMinuteEl.value).to.be.equal("12");
      expect(container.value).to.be.equal(`${todayStr}T12:12:12`);
    });
  });
});
