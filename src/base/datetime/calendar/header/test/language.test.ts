import { expect, fixture } from "@open-wc/testing";

import { BaseDateTimeCalendarHeader } from "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("language", () => {
    it("should be 'en' when not assigning", async () => {
      const container = new BaseDateTimeCalendarHeader();
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH",
      );
      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-YEAR",
      );
    });

    it("should be 'ja' when assigning 'ja' by setter", async () => {
      const container = new BaseDateTimeCalendarHeader();
      container.language = "ja";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);

      const yearEl = headerCenterEl.children[0];
      expect(yearEl.tagName).to.equal("KUC-BASE-DATETIME-HEADER-YEAR");
      expect(yearEl.textContent).to.contain("年");

      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH",
      );
    });

    it("should be 'zh' when assigning 'zh' by setter", async () => {
      const container = new BaseDateTimeCalendarHeader();
      container.language = "zh";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);

      const yearEl = headerCenterEl.children[0];
      expect(yearEl.tagName).to.equal("KUC-BASE-DATETIME-HEADER-YEAR");
      expect(yearEl.textContent).to.contain("年");

      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH",
      );
    });

    it("should be 'zh-TW' when assigning 'zh-TW' by setter", async () => {
      const container = new BaseDateTimeCalendarHeader();
      container.language = "zh-TW";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);

      const yearEl = headerCenterEl.children[0];
      expect(yearEl.tagName).to.equal("KUC-BASE-DATETIME-HEADER-YEAR");
      expect(yearEl.textContent).to.contain("年");

      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH",
      );
    });

    it("should be 'en' when assigning 'en' by setter", async () => {
      const container = new BaseDateTimeCalendarHeader();
      container.language = "en";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH",
      );
      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-YEAR",
      );
    });

    it("should be 'es' when assigning 'es' by setter", async () => {
      const container = new BaseDateTimeCalendarHeader();
      container.language = "es";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH",
      );
      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-YEAR",
      );
    });

    it("should be 'en' when assigning invalid value by setter", async () => {
      const container = new BaseDateTimeCalendarHeader();
      container.language = "xx";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH",
      );
      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-YEAR",
      );
    });
  });
});
