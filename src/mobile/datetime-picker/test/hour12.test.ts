import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../../../base/datetime/mobile-time";
import { MobileDateTimePicker } from "../index";

describe("MobileDateTimePicker", () => {
  describe("hour12", () => {
    it("should be using time format hour 24 when not assigned on constructor", async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-22T14:30:00"
      });
      const el = await fixture(container);
      await elementUpdated(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.equal("14");
    });
    it("should be using time format hour 12 when assigned on constructor", async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-22T14:30:00",
        hour12: true
      });
      const el = await fixture(container);
      await elementUpdated(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.equal("PM 02");
    });

    it("should be using time format hour 12 when changed by setter", async () => {
      const container = new MobileDateTimePicker({
        value: "2021-12-22T14:30:00",
        hour12: false
      });
      const el = await fixture(container);
      container.hour12 = true;
      await elementUpdated(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.equal("PM 02");
    });
  });
});
