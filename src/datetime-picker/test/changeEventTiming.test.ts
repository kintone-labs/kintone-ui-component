import { expect, fixture } from "@open-wc/testing";

import { DateTimePicker } from "../index";

describe("DateTimePicker", () => {
  describe("change-on-blur event (scope guard)", () => {
    it("does not emit change-on-blur even when the inner time field does", async () => {
      const container = new DateTimePicker();
      const el = await fixture(container);
      const baseTime = el.querySelector("kuc-base-time") as HTMLElement | null;
      expect(baseTime).to.not.equal(null);

      let count = 0;
      el.addEventListener("change-on-blur", () => count++);

      // The shared BaseTime always fires this internal event; datetime-picker
      // must not forward it as a public change-on-blur (time-picker only).
      baseTime?.dispatchEvent(
        new CustomEvent("kuc:base-time-change-on-blur", {
          detail: { value: "00:00", oldValue: "" },
          bubbles: true,
        }),
      );

      expect(count).to.equal(0);
    });
  });
});
