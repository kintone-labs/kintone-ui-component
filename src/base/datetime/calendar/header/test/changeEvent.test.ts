import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("kuc:calendar-header-change event", () => {
    it("should be triggered when click the previous month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button--previous-month"
      ) as HTMLButtonElement;
      buttonEl.click();

      expect(triggeredEvent.type).to.equal("kuc:calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2021-5");
    });

    it("should be return DECEMBER of previous year when month is 1 and click the previous month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "1");
      container.setAttribute("year", "2021");
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button--previous-month"
      ) as HTMLButtonElement;
      buttonEl.click();

      expect(triggeredEvent.type).to.equal("kuc:calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2020-12");
    });

    it("should be triggered when press shifttab key on the previous month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener(
        "kuc:calendar-header-previous-shifttab",
        (event: any) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button--previous-month"
      ) as HTMLButtonElement;

      buttonEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab", shiftKey: true })
      );
      expect(triggeredEvent.type).to.equal(
        "kuc:calendar-header-previous-shifttab"
      );
    });

    it("should not be triggered when press shift + a key on the previous month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener(
        "kuc:calendar-header-previous-shifttab",
        (event: any) => {
          triggeredEvent = event;
        }
      );

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button--previous-month"
      ) as HTMLButtonElement;

      buttonEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "a", shiftKey: true })
      );
      expect(triggeredEvent).to.equal(null);
    });

    it("should be triggered when click the next month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button--next-month"
      ) as HTMLButtonElement;
      buttonEl.click();

      expect(triggeredEvent.type).to.equal("kuc:calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2021-7");
    });

    it("should be return JANUARY of next year when month is 12 and click the next month button", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "12");
      container.setAttribute("year", "2021");
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button--next-month"
      ) as HTMLButtonElement;
      buttonEl.click();

      expect(triggeredEvent.type).to.equal("kuc:calendar-header-change");
      expect(triggeredEvent.detail.value).to.equal("2022-1");
    });

    it("should be triggered when select a year", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const selectEl = el.querySelector(
        "kuc-base-datetime-header-year"
      ) as HTMLElement;

      selectEl.dispatchEvent(
        new CustomEvent("kuc:year-dropdown-change", {
          detail: { value: "2022" },
        })
      );

      expect(triggeredEvent.type).to.equal("kuc:calendar-header-change");
    });

    it("should be triggered when select a month", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("month", "6");
      container.setAttribute("year", "2021");
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const selectEl = el.querySelector(
        "kuc-base-datetime-header-month"
      ) as HTMLSelectElement;
      selectEl.dispatchEvent(
        new CustomEvent("kuc:month-dropdown-change", {
          detail: { value: "1" },
        })
      );

      expect(triggeredEvent.type).to.equal("kuc:calendar-header-change");
    });

    it("should be triggered when change calendar year listbox", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const btnYearToggleEl = el.querySelector(
        ".kuc-base-datetime-header-year__toggle"
      ) as HTMLButtonElement;
      btnYearToggleEl.click();
      await elementUpdated(el);

      const listboxEl = el.querySelector(
        ".kuc-base-datetime-header-year__listbox"
      ) as HTMLSelectElement;

      listboxEl.dispatchEvent(
        new CustomEvent("kuc:listbox-click", {
          detail: { value: "2022" },
        })
      );

      expect(triggeredEvent.type).to.equal("kuc:calendar-header-change");
    });

    it("should be triggered when change calendar month listbox", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const btnMonthToggleEl = el.querySelector(
        ".kuc-base-datetime-header-month__toggle"
      ) as HTMLButtonElement;
      btnMonthToggleEl.click();
      await elementUpdated(el);

      const listboxEl = el.querySelector(
        ".kuc-base-datetime-header-month__listbox"
      ) as HTMLSelectElement;

      listboxEl.dispatchEvent(
        new CustomEvent("kuc:listbox-click", {
          detail: { value: "JANUARY" },
        })
      );

      expect(triggeredEvent.type).to.equal("kuc:calendar-header-change");
    });
  });
});
