import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { BaseMobileTime } from "../index";

describe("BaseMobileTime", () => {
  describe("change event", () => {
    it("should be triggered when selected on hour 24", async () => {
      let triggeredEvent: any = null;
      const container = new BaseMobileTime({ value: "12:30" });
      container.addEventListener("change", event => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      selectHourEl.value = "01";
      await elementUpdated(container);

      selectHourEl.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(container);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.target.value).to.equal("01");
    });

    it("should be triggered when selected on hour 12", async () => {
      let triggeredEvent: any = null;
      const container = new BaseMobileTime({ value: "12:30", hour12: true });
      container.addEventListener("change", event => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      selectHourEl.value = "PM 03";
      await elementUpdated(container);

      selectHourEl.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(container);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.target.value).to.equal("PM 03");
    });

    it("should be triggered when selected on item in minute", async () => {
      let triggeredEvent: any = null;
      const container = new BaseMobileTime({ value: "12:30" });
      container.addEventListener("change", event => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;
      selectMinuteEl.value = "35";
      await elementUpdated(container);

      selectMinuteEl.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(container);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.target.value).to.equal("35");
    });
  });
});
