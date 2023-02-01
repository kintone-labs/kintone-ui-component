import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { DateTimePicker } from "../index";

describe("DatePicker", () => {
  describe("hour12", () => {
    it("should be changed hour when change time format to 12 hours", async () => {
      const container = new DateTimePicker({ value: "2021-12-22T14:30:00" });
      container.hour12 = true;

      const el = await fixture(container);
      await elementUpdated(container);
      await elementUpdated(el);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      expect(inputHourEl.value).to.equal("02");
    });
  });
});
