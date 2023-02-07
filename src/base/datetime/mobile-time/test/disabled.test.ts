import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileTime", () => {
  describe("disabled", () => {
    it("should be not added into input element when not assigned", async () => {
      const container = document.createElement("kuc-base-mobile-time");
      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLInputElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLInputElement;

      expect(selectHourEl.disabled).to.equal(false);
      expect(selectMinuteEl.disabled).to.equal(false);
    });

    it("should be added into input element when assigned true", async () => {
      const container = document.createElement("kuc-base-mobile-time");
      container.setAttribute("disabled", "true");
      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLInputElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLInputElement;

      expect(selectHourEl.disabled).to.equal(true);
      expect(selectMinuteEl.disabled).to.equal(true);
    });

    it("should be added into input element when changed to true", async () => {
      const container = document.createElement("kuc-base-mobile-time");
      const el = await fixture(container);
      container.setAttribute("disabled", "true");
      await elementUpdated(el);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLInputElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLInputElement;

      expect(selectHourEl.disabled).to.equal(true);
      expect(selectMinuteEl.disabled).to.equal(true);
    });

    it("should be not added into input element when changed to false by setter", async () => {
      const container = document.createElement("kuc-base-mobile-time");
      container.setAttribute("disabled", "true");

      const el = await fixture(container);
      container.removeAttribute("disabled");
      await elementUpdated(el);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLInputElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLInputElement;

      expect(selectHourEl.disabled).to.equal(false);
      expect(selectMinuteEl.disabled).to.equal(false);
    });
  });
});
