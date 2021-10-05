import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTimeCalendarBody } from "../index";

describe("BaseDateTimeCalendarBody", () => {
  describe("accessibility", () => {
    const InitValue = {
      month: 8,
      year: 2021,
      value: "2021-9-22",
      previousDay: "2021-9-21",
      previousWeek: "2021-9-15",
      nextDay: "2021-9-23",
      nextWeek: "2021-9-29",
      next2Weeks: "2021-10-6"
    };

    it('should be highlight previous week when triggered "Up" keyboard event for IE', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Up" }));
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.previousWeek);
    });

    it('should be highlight previous week when triggered "ArrowUp" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.previousWeek);
    });

    it('should be highlight previous week when triggered "Down" keyboard event for IE', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Down" }));
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.nextWeek);
    });

    it('should be highlight next week when triggered "ArrowDown" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.nextWeek);
    });

    it('should be highlight next 2 weeks when triggered "ArrowDown" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.next2Weeks);
    });

    it('should be highlight previous week when triggered "Left" keyboard event for IE', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Left" }));
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.previousDay);
    });

    it('should be highlight previous day when triggered "ArrowLeft" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowLeft" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.previousDay);
    });

    it('should be highlight previous week when triggered "Right" keyboard event for IE', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Right" }));
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.nextDay);
    });

    it('should be highlight next day when triggered "ArrowRight" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.nextDay);
    });

    it('should changed value when pressing "Enter" key', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      await elementUpdated(el);

      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.nextDay);
    });

    it("should do nothing when pressing not handled key", async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = InitValue.month;
      container.year = InitValue.year;
      container.value = InitValue.value;

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
      await elementUpdated(el);
      expect(container.value).to.equal(InitValue.value);
    });

    it('should be highlight next year when triggered "ArrowRight" keyboard event', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.month = 11;
      container.year = 2021;
      container.value = "2021-12-31";

      const el = await fixture(container);
      const selectedEl = el.querySelectorAll(
        '.kuc-base-datetime-calendar-body__date[aria-selected="true"]'
      )[0] as HTMLButtonElement;
      selectedEl.click();
      selectedEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" })
      );
      await elementUpdated(el);
      expect(container.value).to.equal("2022-1-1");
    });
  });
});
