import { expect, fixture } from "@open-wc/testing";
import { BaseMobileTime } from "../index";

describe("BaseMobileTime", () => {
  describe("value", () => {
    it("should be empty string when not assigning", async () => {
      const container = new BaseMobileTime();
      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.be.equal("");
      expect(selectMinuteEl.value).to.be.equal("");
    });

    it('should be "13:15" when assigned "13:15" by setter', async () => {
      const container = new BaseMobileTime({ value: "13:15" });
      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.be.equal("13");
      expect(selectMinuteEl.value).to.be.equal("15");
    });

    it('should be "13:15" when changed to "13:15" by setter', async () => {
      const container = new BaseMobileTime({ value: "11:15" });
      container.value = "13:15";
      const el = await fixture(container);
      el.setAttribute("value", "13:15");
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const selectMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(selectHourEl.value).to.be.equal("13");
      expect(selectMinuteEl.value).to.be.equal("15");
    });

    it("should throw error when set invalid value", async () => {
      const container = new BaseMobileTime({ value: "12,12" });
      try {
        const el = await fixture(container);
      } catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.be.equal("Format is not valid.");
      }
    });
  });
});
