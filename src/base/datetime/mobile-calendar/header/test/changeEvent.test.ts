import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDateTimeCalendarHeader", () => {
  describe("kuc:mobile-calendar-header-change event", () => {
    it("should be triggered when click the previous month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener(
        "kuc:mobile-calendar-header-change",
        (event: any) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__button--previous-month"
      ) as HTMLButtonElement;
      buttonEl.click();

      expect(triggeredEvent.type).to.equal("kuc:mobile-calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2021-5");
    });

    it("should be return DECEMBER of previous year when month is 1 and click the previous month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-header"
      );
      container.setAttribute("month", "1");
      container.setAttribute("year", "2021");
      container.addEventListener(
        "kuc:mobile-calendar-header-change",
        (event: any) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__button--previous-month"
      ) as HTMLButtonElement;
      buttonEl.click();

      expect(triggeredEvent.type).to.equal("kuc:mobile-calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2020-12");
    });

    it("should be triggered when click the next month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener(
        "kuc:mobile-calendar-header-change",
        (event: any) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__button--next-month"
      ) as HTMLButtonElement;
      buttonEl.click();

      expect(triggeredEvent.type).to.equal("kuc:mobile-calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2021-7");
    });

    it("should be return JANUARY of next year when month is 12 and click the next month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-header"
      );
      container.setAttribute("month", "12");
      container.setAttribute("year", "2021");
      container.addEventListener(
        "kuc:mobile-calendar-header-change",
        (event: any) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__button--next-month"
      ) as HTMLButtonElement;
      buttonEl.click();

      expect(triggeredEvent.type).to.equal("kuc:mobile-calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2022-1");
    });

    it("should be triggered when change a year", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener(
        "kuc:mobile-calendar-header-change",
        (event: any) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const selectYearEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center__year__select"
      ) as HTMLSelectElement;
      selectYearEl.value = "2023";
      selectYearEl.dispatchEvent(new Event("change"));

      expect(triggeredEvent.type).to.equal("kuc:mobile-calendar-header-change");
    });

    it("should be triggered when change a month", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener(
        "kuc:mobile-calendar-header-change",
        (event: any) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const selectMonthEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center__month__select"
      ) as HTMLSelectElement;
      selectMonthEl.value = "3";
      selectMonthEl.dispatchEvent(new Event("change"));

      expect(triggeredEvent.type).to.equal("kuc:mobile-calendar-header-change");
    });
  });
});
