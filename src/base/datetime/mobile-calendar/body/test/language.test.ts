import { expect, fixture } from "@open-wc/testing";

import { BaseMobileDateTimeCalendarBody } from "../index";

describe("BaseMobileDateTimeCalendarBody", () => {
  describe("language", () => {
    it('The first day of the week is "SUN" when not assigning language prop', async () => {
      const container = new BaseMobileDateTimeCalendarBody();
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("SUN");
    });

    it('The first day of the week is "SUN" when assigning language prop is invalid', async () => {
      const container = new BaseMobileDateTimeCalendarBody();
      container.language = "vn";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("SUN");
    });

    it('The first day of the week in English is "SUN" when not assigning language prop', async () => {
      const container = new BaseMobileDateTimeCalendarBody();
      container.language = "en";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("SUN");
    });

    it('The first day of the week in Japanese is "日" when not assigning language prop', async () => {
      const container = new BaseMobileDateTimeCalendarBody();
      container.language = "ja";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("日");
    });

    it('The first day of the week in Traditional Chinese is "週日" when not assigning language prop', async () => {
      const container = new BaseMobileDateTimeCalendarBody();
      container.language = "zh-TW";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("週日");
    });
    it('The first day of the week in Chinese is "周日" when not assigning language prop', async () => {
      const container = new BaseMobileDateTimeCalendarBody();
      container.language = "zh";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("周日");
    });
    it('The first day of the week in Spanish is "Do." when not assigning language prop', async () => {
      const container = new BaseMobileDateTimeCalendarBody();
      container.language = "es";
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header",
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("Do.");
    });
  });
});
