import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { MobileTimePicker } from "../index";

describe("MobileTimePicker", () => {
  describe("hour12", () => {
    it("should be using 24-hour clock when not assigning", async () => {
      const container = new MobileTimePicker({ value: "13:15" });

      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLInputElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLInputElement;

      expect(selectHourEl.value).to.be.equal("13");
      expect(selectMinuteEl.value).to.be.equal("15");
    });

    it("should be using 12-hour clock when assigned true in constructor", async () => {
      const container = new MobileTimePicker({ value: "13:15", hour12: true });

      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLInputElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLInputElement;

      expect(selectHourEl.value).to.be.equal("PM 01");
      expect(selectMinuteEl.value).to.be.equal("15");

      container.value = "08:15";
      await elementUpdated(el);
      expect(selectHourEl.value).to.be.equal("AM 08");
      expect(selectMinuteEl.value).to.be.equal("15");
    });

    it("should be using 24-hour clock when change to false", async () => {
      const container = new MobileTimePicker({ value: "13:15", hour12: true });
      const el = await fixture(container);
      container.hour12 = false;
      await elementUpdated(el);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLInputElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLInputElement;

      expect(selectHourEl.value).to.be.equal("13");
      expect(selectMinuteEl.value).to.be.equal("15");
    });
  });
});
