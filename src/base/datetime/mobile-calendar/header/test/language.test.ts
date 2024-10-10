import { expect, fixture } from "@open-wc/testing";

import { BaseMobileDateTimeCalendarHeader } from "../index";

describe("BaseMobileDateTimeCalendarHeader", () => {
  describe("language", () => {
    it("should be 'en' when not assigning", async () => {
      const container = new BaseMobileDateTimeCalendarHeader();
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(
        headerCenterEl.children[0].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__month",
        ),
      ).to.equal(true);
      expect(
        headerCenterEl.children[1].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__year",
        ),
      ).to.equal(true);
    });

    it("should be 'ja' when assigning 'ja' by setter", async () => {
      const container = new BaseMobileDateTimeCalendarHeader();
      container.language = "ja";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;

      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(
        headerCenterEl.children[0].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__year",
        ),
      ).to.equal(true);
      expect(
        headerCenterEl.children[1].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__month",
        ),
      ).to.equal(true);
    });

    it("should be 'zh' when assigning 'zh' by setter", async () => {
      const container = new BaseMobileDateTimeCalendarHeader();
      container.language = "zh";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;
      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(
        headerCenterEl.children[0].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__year",
        ),
      ).to.equal(true);
      expect(
        headerCenterEl.children[1].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__month",
        ),
      ).to.equal(true);
    });

    it("should be 'zh-TW' when assigning 'zh-TW' by setter", async () => {
      const container = new BaseMobileDateTimeCalendarHeader();
      container.language = "zh-TW";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;
      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(
        headerCenterEl.children[0].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__year",
        ),
      ).to.equal(true);
      expect(
        headerCenterEl.children[1].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__month",
        ),
      ).to.equal(true);
    });

    it("should be 'es' when assigning 'es' by setter", async () => {
      const container = new BaseMobileDateTimeCalendarHeader();
      container.language = "es";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;
      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(
        headerCenterEl.children[0].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__month",
        ),
      ).to.equal(true);
      expect(
        headerCenterEl.children[1].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__year",
        ),
      ).to.equal(true);
    });

    it("should be 'en' when assigning invalid value by setter", async () => {
      const container = new BaseMobileDateTimeCalendarHeader();
      container.language = "xx";
      const el = await fixture(container);
      const headerCenterEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center",
      ) as HTMLSpanElement;
      expect(headerCenterEl.childElementCount).to.equal(2);
      expect(
        headerCenterEl.children[0].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__month",
        ),
      ).to.equal(true);
      expect(
        headerCenterEl.children[1].classList.contains(
          "kuc-base-mobile-datetime-calendar-header__group__center__year",
        ),
      ).to.equal(true);
    });
  });
});
