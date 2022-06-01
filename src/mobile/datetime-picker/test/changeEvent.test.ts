import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../../../base/datetime/mobile-date";
import "../../../base/datetime/mobile-time";
import { MobileDateTimePicker } from "../index";
import { getTodayStringByLocale } from "../../../base/datetime/utils";

describe("MobileDateTimePicker", () => {
  describe("change event", () => {
    it("should be triggered when mousedown on date in calendar", async () => {
      let triggeredEvent: any = null;
      const container = new MobileDateTimePicker({
        value: "2021-12-20",
        language: "en"
      });
      container.addEventListener("change", event => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const selectedElUp = el.querySelector(
        "kuc-base-mobile-datetime-calendar-body .kuc-base-mobile-datetime-calendar-body__table__date--selected"
      ) as HTMLButtonElement;

      const nextEl = selectedElUp?.nextElementSibling as HTMLTableCellElement;
      const buttonEl = nextEl as HTMLElement;
      buttonEl.click();
      await elementUpdated(container);

      const inputHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-mobile-time__group__minutes"
      ) as HTMLSelectElement;

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("2021-12-21T00:00:00");
      expect(inputHourEl.value).to.equal("00");
      expect(inputMinuteEl.value).to.equal("00");
      expect(container.value).to.equal("2021-12-21T00:00:00");
    });

    it("should be triggered when click none button on calendar", async () => {
      let triggeredEvent: any = null;
      const container = new MobileDateTimePicker({
        value: "2021-12-20",
        language: "en"
      });
      container.addEventListener("change", event => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      inputDateEl.click();
      await elementUpdated(container);
      await elementUpdated(el);

      const noneBtnEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      noneBtnEl.click();
      await elementUpdated(container);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal(undefined);
      expect(triggeredEvent.detail.changedPart).to.equal("date");
    });

    it("should be triggered when change hour on time part", async () => {
      let triggeredEvent: any = null;
      const container = new MobileDateTimePicker({
        value: "2021-12-20",
        language: "en"
      });
      container.addEventListener("change", event => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const selectHourEl = el.querySelector(
        ".kuc-base-mobile-time__group__hours"
      ) as HTMLSelectElement;

      selectHourEl.value = "01";
      selectHourEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("2021-12-20T01:00:00");
      expect(triggeredEvent.detail.changedPart).to.equal("time");
    });

    it("should not triggered when pressing the same day", async () => {
      let triggeredEvent: any = null;
      const container = new MobileDateTimePicker({
        value: getTodayStringByLocale(),
        language: "ja"
      });
      container.addEventListener("change", event => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      inputDateEl.click();
      await elementUpdated(el);
      await elementUpdated(container);

      const todayBtnEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      todayBtnEl.click();
      await elementUpdated(el);

      expect(triggeredEvent).to.equal(null);
    });
  });
});
