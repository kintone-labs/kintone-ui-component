import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("hour12", () => {
    it("should be using 12-hour clock when not assigning", async () => {
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

    it("should be using 12-hour clock when assigned true by setter", async () => {
      const container = new TimePicker({ value: "13:15", hour12: true });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      const inputSuffixEl = el.querySelector(
        ".kuc-base-time__group__suffix"
      ) as HTMLInputElement;

      expect(inputHourEl.value).to.be.equal("01");
      expect(inputMinuteEl.value).to.be.equal("15");
      expect(inputSuffixEl.value).to.be.equal("PM");
    });

    it("should be using 24-hour clock when change to false", async () => {
      const container = new TimePicker({ value: "13:15", hour12: true });
      container.hour12 = false;
      const el = await fixture(container);
      await elementUpdated(el);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputHourEl.value).to.be.equal("13");
      expect(inputMinuteEl.value).to.be.equal("15");
    });
  });
});
