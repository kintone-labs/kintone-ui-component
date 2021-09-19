import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarHeader } from "../index";

const props = {
  month: 6,
  year: 2021
};

describe("BaseDateTimeCalendarHeader", () => {
  describe("kuc:calendar-header-change event", () => {
    it("should be triggered when click the previous month button", async () => {
      const container = new BaseDateTimeCalendarHeader(props);
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        expect(event.type).to.equal("kuc:calendar-header-change");
        expect(event.detail.value).to.equal(`${props.year}-${props.month - 1}`);
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button-previous-month"
      ) as HTMLButtonElement;
      buttonEl.click();
    });

    it("should be return DECEMBER of previous year when month is 1 and click the previous month button", async () => {
      const container = new BaseDateTimeCalendarHeader({ ...props, month: 1 });
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        expect(event.type).to.equal("kuc:calendar-header-change");
        expect(event.detail.value).to.equal(`${props.year - 1}-${12}`);
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button-previous-month"
      ) as HTMLButtonElement;
      buttonEl.click();
    });

    it("should be triggered when click the next month button", async () => {
      const container = new BaseDateTimeCalendarHeader(props);
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        expect(event.type).to.equal("kuc:calendar-header-change");
        expect(event.detail.value).to.equal(`${props.year}-${props.month + 1}`);
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button-next-month"
      ) as HTMLButtonElement;
      buttonEl.click();
    });

    it("should be return JANUARY of next year when month is 12 and click the next month button", async () => {
      const container = new BaseDateTimeCalendarHeader({ ...props, month: 12 });
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        expect(event.type).to.equal("kuc:calendar-header-change");
        expect(event.detail.value).to.equal(`${props.year + 1}-${1}`);
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__button-next-month"
      ) as HTMLButtonElement;
      buttonEl.click();
    });

    it("should be triggered when select a year", async () => {
      const container = new BaseDateTimeCalendarHeader(props);
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        expect(event.type).to.equal("kuc:calendar-header-change");
        expect(event.detail.value).to.equal(`${props.year}-${props.month}`);
      });

      const el = await fixture(container);
      const selectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__year"
      ) as HTMLSelectElement;
      selectEl.dispatchEvent(new Event("change"));
    });

    it("should be triggered when select a month", async () => {
      const container = new BaseDateTimeCalendarHeader(props);
      container.addEventListener("kuc:calendar-header-change", (event: any) => {
        expect(event.type).to.equal("kuc:calendar-header-change");
        expect(event.detail.value).to.equal(`${props.year}-${props.month}`);
      });

      const el = await fixture(container);
      const selectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__month"
      ) as HTMLSelectElement;
      selectEl.dispatchEvent(new Event("change"));
    });
  });
});
