import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeCalendarHeader } from "../index";

describe("BaseDateTimeCalendarHeader", () => {
  describe("language", () => {
    it("should be 'en' when not assigning on constructor", async () => {
      const container = new BaseDateTimeCalendarHeader();
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__month"
      );
      expect(headerCenterEl.children[1].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__year"
      );
    });

    it("should be 'ja' when assigning on constructor", async () => {
      const container = new BaseDateTimeCalendarHeader({
        language: "ja"
      });
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__year"
      );
      expect(headerCenterEl.children[1].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__month"
      );
    });

    it("should be 'zh' when assigning 'zh' by setter", async () => {
      const container = new BaseDateTimeCalendarHeader({
        language: "en"
      });
      container.language = "zh";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__year"
      );
      expect(headerCenterEl.children[1].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__month"
      );
    });

    it("should be 'en' when assigning 'en' by setter", async () => {
      const container = new BaseDateTimeCalendarHeader({
        language: "ja"
      });
      container.language = "en";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__month"
      );
      expect(headerCenterEl.children[1].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__year"
      );
    });

    it("should be 'en' when assigning invalid value by setter", async () => {
      const container = new BaseDateTimeCalendarHeader();
      container.language = "xx";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-datetime-calendar-header__group__center"
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(headerCenterEl.children[0].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__month"
      );
      expect(headerCenterEl.children[1].className?.trim()).to.equal(
        "kuc-base-datetime-calendar-header__group__year"
      );
    });
  });
});
