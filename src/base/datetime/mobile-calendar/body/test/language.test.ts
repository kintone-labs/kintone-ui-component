import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDateTimeCalendarBody", () => {
  describe("language", () => {
    it('The first day of the week is "SUN" when not assigning language prop', async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header"
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("SUN");
    });

    it('The first day of the week is "SUN" when assigning language prop is invalid', async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      container.setAttribute("language", "vn");
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header"
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("SUN");
    });

    it('The first day of the week in English is "SUN" when not assigning language prop', async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      container.setAttribute("language", "en");
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header"
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("SUN");
    });

    it('The first day of the week in Japanese is "日" when not assigning language prop', async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      container.setAttribute("language", "ja");
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header"
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("日");
    });

    it('The first day of the week in English is "周日" when not assigning language prop', async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-body"
      );
      container.setAttribute("language", "zh");
      const el = await fixture(container);
      const item = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-body__table__header"
      ) as HTMLTableSectionElement;
      expect(item.innerText).to.equal("周日");
    });
  });
});
