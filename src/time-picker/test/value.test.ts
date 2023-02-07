import { elementUpdated, expect, fixture } from "@open-wc/testing";

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

    it('should be "13:15" when assigned "13:15" on constructor', async () => {
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

    it("should throw error when set invalid value", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'value' property format is not valid.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new TimePicker({ value: "12,12" });
      fixture(container);
    });

    it("should throw error when it is less than min", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("Time is out of valid range.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new TimePicker({ value: "10:00", min: "12:00" });
      fixture(container);
    });

    it("should be empty value and UI when set '' on constructor", async () => {
      const container = new TimePicker({ value: "" });
      const el = await fixture(container);

      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be empty value and UI when set '' by setter", async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      container.value = "";
      await elementUpdated(el);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be empty value and UI when set undefined on constructor", async () => {
      const container = new TimePicker({ value: undefined });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be undefined value and empty on UI when set undefined on setter", async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      container.value = undefined;
      await elementUpdated(el);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal(undefined);
    });
  });
});
