import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileTime", () => {
  describe("hour12", () => {
    it("should be using 12-hour clock when not assigning", async () => {
      const container = document.createElement("kuc-base-mobile-time");
      container.setAttribute("value", "13:15");

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

    it("should be using 12-hour clock when assigned true by setter", async () => {
      const container = document.createElement("kuc-base-mobile-time");
      container.setAttribute("value", "13:15");
      container.setAttribute("hour12", "true");

      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLInputElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLInputElement;

      expect(selectHourEl.value).to.be.equal("PM 01");
      expect(selectMinuteEl.value).to.be.equal("15");

      container.setAttribute("value", "08:15");
      await elementUpdated(el);
      expect(selectHourEl.value).to.be.equal("AM 08");
      expect(selectMinuteEl.value).to.be.equal("15");
    });

    it("should be using 24-hour clock when change to false", async () => {
      const container = document.createElement("kuc-base-mobile-time");
      container.setAttribute("value", "13:15");
      container.setAttribute("hour12", "true");

      const el = await fixture(container);
      container.removeAttribute("hour12");
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
