import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { getTodayStringByLocale } from "../../../base/datetime/utils";
import { MobileDatePicker } from "../index";

describe("MobileDatePicker", () => {
  describe("value", () => {
    it("should be empty string when not assigning", async () => {
      const container = new MobileDatePicker();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("");
    });

    it('should be "12/12/2021" when assigning on constructor', async () => {
      const container = new MobileDatePicker({ value: "2021-12-12" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("12/12/2021");
    });

    it('should be "12/13/2021" when changed to "12/13/2021" by setter', async () => {
      const container = new MobileDatePicker({ value: "2021-12-12" });
      container.value = "2021-12-13";
      const el = await fixture(container);
      el.setAttribute("value", "13:15");
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("12/13/2021");
    });

    it("should throw error when set invalid value", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'value' property format is not valid.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MobileDatePicker({ value: "12,12" });
      fixture(container);
    });

    it("should throw error when set invalid value", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'value' property format is not valid.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MobileDatePicker({ value: "2021-02-31" });
      fixture(container);
    });

    it("should be today value when press today button on calendar", async () => {
      const container = new MobileDatePicker({
        value: "2021-12-12",
        language: "ja",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
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
    });

    it("should be undefined value and input emtpy on UI when set undefined by setter", async () => {
      const container = new MobileDatePicker({
        value: "2021-12-12",
        language: "ja",
      });
      const el = await fixture(container);
      container.value = undefined;
      await elementUpdated(el);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(container.value).to.be.equal(undefined);
    });

    it("should be empty value and input emtpy on UI when set undefined on constructor", async () => {
      const container = new MobileDatePicker({
        value: undefined,
        language: "ja",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be empty value and input emtpy on UI when set `` on constructor", async () => {
      const container = new MobileDatePicker({
        value: "",
        language: "ja",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be empty value and input emtpy on UI when set `` by setter", async () => {
      const container = new MobileDatePicker({
        value: "2021-12-12",
        language: "ja",
      });
      const el = await fixture(container);
      container.value = "";
      await elementUpdated(el);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputDateEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });
  });
});
