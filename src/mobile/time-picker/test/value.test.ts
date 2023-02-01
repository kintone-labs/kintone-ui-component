import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { MobileTimePicker } from "..";

describe("MobileTimePicker", () => {
  describe("value", () => {
    it("should be empty string when not assigning", async () => {
      const container = new MobileTimePicker();
      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.be.equal("");
      expect(selectMinuteEl.value).to.be.equal("");
    });

    it('should be "13:15" when assigned "13:15" in constructor', async () => {
      const container = new MobileTimePicker({ value: "13:15" });
      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.be.equal("13");
      expect(selectMinuteEl.value).to.be.equal("15");
    });

    it('should be "13:15" when changed to "13:15" by setter', async () => {
      const container = new MobileTimePicker({ value: "11:15" });
      const el = await fixture(container);
      container.value = "13:15";
      await elementUpdated(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.be.equal("13");
      expect(selectMinuteEl.value).to.be.equal("15");
    });

    it("should be empty value and UI when set undefined in constructor", async () => {
      const container = new MobileTimePicker({ value: undefined });
      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.be.equal("");
      expect(selectMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal("");
    });

    it("should be undefined value and empty on UI when assigned undefined by setter", async () => {
      const container = new MobileTimePicker({ value: "13:15" });
      const el = await fixture(container);
      container.value = undefined;
      await elementUpdated(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.be.equal("");
      expect(selectMinuteEl.value).to.be.equal("");
      expect(container.value).to.be.equal(undefined);
    });

    it("should throw error when set invalid value", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'value' property format is not valid.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new MobileTimePicker({ value: "12:234" });
      fixture(container);
    });
  });
});
