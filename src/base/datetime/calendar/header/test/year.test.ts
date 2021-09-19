import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarHeader } from "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("year", () => {
    it("should be 2021 when not assigning on constructor", async () => {
      const container = new BaseDateTimeCalendarHeader();
      const el = await fixture(container);
      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__year"
      ) as HTMLSelectElement;

      expect(yearSelectEl.value).to.equal("2021");
      expect(yearSelectEl.options.length).to.equal(200);
    });

    it("should be 2020 when assigning 2020 on constructor", async () => {
      const year = 2020;
      const container = new BaseDateTimeCalendarHeader({ year });
      const el = await fixture(container);
      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__year"
      ) as HTMLSelectElement;

      expect(yearSelectEl.value).to.equal(year.toString());
    });

    it("should be 2022 when assigning 2022 by setter", async () => {
      const year = 2022;
      const container = new BaseDateTimeCalendarHeader({
        year: 2020
      });
      container.year = year;
      const el = await fixture(container);
      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__year"
      ) as HTMLSelectElement;

      expect(yearSelectEl.value).to.equal(year.toString());
    });

    it("should be 2021 when assigning invalid value by setter", async () => {
      const container = new BaseDateTimeCalendarHeader({
        year: 2020
      });
      container.year = 123.33;
      const el = await fixture(container);
      const yearSelectEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__year"
      ) as HTMLSelectElement;

      expect(yearSelectEl.value).to.equal("2021");
    });
  });
});
