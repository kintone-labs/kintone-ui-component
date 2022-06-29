import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileTime", () => {
  describe("change event", () => {
    it("should be triggered when selected on hour 24", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-base-mobile-time");
      container.setAttribute("value", "12:30");
      container.addEventListener("kuc:base-mobile-time-change", (event) => {
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

      expect(triggeredEvent.type).to.equal("kuc:base-mobile-time-change");
      expect(triggeredEvent.detail.value).to.equal("01:30");
    });

    it("should be triggered when selected on hour 12", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-base-mobile-time");
      container.setAttribute("value", "12:30");
      container.setAttribute("hour12", "true");
      container.addEventListener("kuc:base-mobile-time-change", (event) => {
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

      expect(triggeredEvent.type).to.equal("kuc:base-mobile-time-change");
      expect(triggeredEvent.detail.value).to.equal("15:30");
    });

    it("should be triggered when selected on item in minute", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-base-mobile-time");
      container.setAttribute("value", "12:30");
      container.addEventListener("kuc:base-mobile-time-change", (event) => {
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

      expect(triggeredEvent.type).to.equal("kuc:base-mobile-time-change");
      expect(triggeredEvent.detail.value).to.equal("12:35");
    });
  });
});
