import { expect, fixture } from "@open-wc/testing";

import { BaseDateTimeCalendarBody } from "../index";

describe("BaseDateTimeCalendarBody", () => {
  describe("language", () => {
    it('The first day of the week is "SUN" when not assigning language prop', async () => {
      const container = new BaseDateTimeCalendarBody();
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("SUN");
    });

    it('The first day of the week is "SUN" when assigning language prop is invalid', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.language = "vn";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("SUN");
    });

    it('The first day of the week in English is "SUN" when not assigning language prop', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.language = "en";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("SUN");
    });

    it('The first day of the week in Japanese is "日" when not assigning language prop', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.language = "ja";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("日");
    });

    it('The first day of the week in Chinese is "周日" when not assigning language prop', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.language = "zh";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("周日");
    });

    it('The first day of the week in Spanish is "Do." when not assigning language prop', async () => {
      const container = new BaseDateTimeCalendarBody();
      container.language = "es";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("Do.");
    });
  });
});
