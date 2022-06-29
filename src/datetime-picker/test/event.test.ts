import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { DateTimePicker } from "../index";
import { BaseDate } from "../../base/datetime/date";

describe("DateTimePicker", () => {
  describe("event", () => {
    it("should be new value when dispatch base-date-change event", async () => {
      const container = new DateTimePicker({
        value: "",
      });
      const el = await fixture(container);
      const baseDateEl = el.querySelector(
        ".kuc-datetime-picker__group__inputs--date"
      ) as BaseDate;
      baseDateEl.dispatchEvent(
        new CustomEvent("kuc:base-date-change", {
          detail: { value: "2022-01-01", oldValue: undefined },
        })
      );
      await elementUpdated(el);

      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      expect(inputDateEl.value).to.be.equal("01/01/2022");

      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      expect(inputHourEl.value).to.be.equal("");
      expect(inputMinuteEl.value).to.be.equal("");
    });
  });
});
