import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("language", () => {
    it("should be 'en' when not assigning", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH"
      );
      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-YEAR"
      );
    });

    it("should be 'ja' when assigning 'ja' by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("language", "ja");
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-YEAR"
      );
      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH"
      );
    });

    it("should be 'zh' when assigning 'zh' by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("language", "zh");
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-YEAR"
      );
      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH"
      );
    });

    it("should be 'en' when assigning 'en' by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("language", "en");
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH"
      );
      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-YEAR"
      );
    });

    it("should be 'en' when assigning invalid value by setter", async () => {
      const container = document.createElement(
        "kuc-base-datetime-calendar-header"
      );
      container.setAttribute("language", "xx");
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-MONTH"
      );
      expect(headerCenterEl.children[1].tagName).to.equal(
        "KUC-BASE-DATETIME-HEADER-YEAR"
      );
    });
  });
});
