import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTimeCalendarBody } from "../index";

describe("BaseDateTimeCalendarBody", () => {
  describe("accessibility", () => {
    const initValue = {
      month: 8,
      year: 2021,
      value: "2021-08-22",
    };

    const expectValue = {
      previousDay: "2021-08-21",
      previousWeek: "2021-08-15",
      nextDay: "2021-08-23",
      nextWeek: "2021-08-29",
      next2Weeks: "2021-09-05",
    };

    it('should be highlight previous week when triggered "Up" keyboard event for IE', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Up" }));
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.previousWeek);
    });

    it('should be highlight previous week when triggered "ArrowUp" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.previousWeek);
    });

    it('should be highlight previous week when triggered "Down" keyboard event for IE', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.nextWeek);
    });

    it('should be highlight next week when triggered "ArrowDown" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.nextWeek);
    });

    it('should be highlight next 2 weeks when triggered "ArrowDown" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.next2Weeks);
    });

    it('should be highlight previous week when triggered "Left" keyboard event for IE', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Left" }));
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.previousDay);
    });

    it('should be highlight previous day when triggered "ArrowLeft" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowLeft" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.previousDay);
    });

    it('should be highlight previous week when triggered "Right" keyboard event for IE', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Right" }));
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.nextDay);
    });

    it('should be highlight next day when triggered "ArrowRight" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.nextDay);
    });

    it('should changed value when pressing "Enter" key', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;

      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      await elementUpdated(el);

      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.nextDay);
    });

    it('should changed value when pressing "Space" key', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;

      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      await elementUpdated(el);

      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
      await elementUpdated(el);
      expect(container.value).to.equal(expectValue.nextDay);
    });

    it("should do nothing when pressing not handled key", async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = initValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      ) as HTMLButtonElement;
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
      await elementUpdated(el);
      expect(container.value).to.equal(initValue.value);
    });

    it('should be highlight next year when triggered "ArrowRight" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = 12;
      container.year = 2021;
      container.value = "2021-12-31";

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal("2022-01-01");
    });

    it("should be highlight the first day of month when click the first day of calendar and pressing Enter key", async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = initValue.month;
      container.year = initValue.year;
      container.value = "2021-08";

      const el = await fixture(container);
      const selectedEl = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__date__button"
      ) as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);
      expect(container.value).to.equal("2021-08-01");
    });
  });
});
