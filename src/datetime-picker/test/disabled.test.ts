import { expect, fixture } from "@open-wc/testing";

import { DateTimePicker } from "../index";

describe("DateTimePicker", () => {
  describe("disabled", () => {
    it("should be not added into input element when not assigned", async () => {
      const container = new DateTimePicker();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;

      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
      expect(inputHourEl.hasAttribute("disabled")).to.equal(false);
      expect(inputMinuteEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into input element when assigned true", async () => {
      const container = new DateTimePicker({ disabled: true });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;

      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
      expect(inputHourEl.hasAttribute("disabled")).to.equal(true);
      expect(inputMinuteEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into input element when changed to true", async () => {
      const container = new DateTimePicker({ disabled: true });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;

      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
      expect(inputHourEl.hasAttribute("disabled")).to.equal(true);
      expect(inputMinuteEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be not added into input element when changed to false by setter", async () => {
      const container = new DateTimePicker({ disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;

      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
      expect(inputHourEl.hasAttribute("disabled")).to.equal(false);
      expect(inputMinuteEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
