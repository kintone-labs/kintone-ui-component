import { expect, fixture } from "@open-wc/testing";
import { BaseMobileTime } from "../index";

describe("BaseMobileTime", () => {
  describe("disabled", () => {
    it("should be not added into input element when not assigned", async () => {
      const container = new BaseMobileTime();
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
      const container = new BaseMobileTime({ disabled: true });
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
      const container = new BaseMobileTime({ disabled: true });
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

    it("should be not added into input element when changed to false by setter", async () => {
      const container = new BaseMobileTime({ disabled: true });
      container.disabled = false;
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
  });
});
