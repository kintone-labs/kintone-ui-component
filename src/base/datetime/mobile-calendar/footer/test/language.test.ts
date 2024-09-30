import { expect, fixture } from "@open-wc/testing";

import { BaseMobileDateTimeCalendarFooter } from "../index";

describe("BaseMobileDateTimeCalendarFooter", () => {
  describe("language", () => {
    it("should be 'en' when not assigning language prop", async () => {
      const container = new BaseMobileDateTimeCalendarFooter();
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      const buttonCloseEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--close",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("Today");
      expect(buttonNoneEl.innerText).to.equal("None");
      expect(buttonCloseEl.innerText).to.equal("Close");
    });

    it("should be '今日' and '選択を解除' when assigning language prop with 'ja'", async () => {
      const container = new BaseMobileDateTimeCalendarFooter();
      container.language = "ja";
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      const buttonCloseEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--close",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("今日");
      expect(buttonNoneEl.innerText).to.equal("選択を解除");
      expect(buttonCloseEl.innerText).to.equal("閉じる");
    });

    it("should be '今天' and '清空' when assigning language prop with 'zh'", async () => {
      const container = new BaseMobileDateTimeCalendarFooter();
      container.language = "zh";
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      const buttonCloseEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--close",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("今天");
      expect(buttonNoneEl.innerText).to.equal("清空");
      expect(buttonCloseEl.innerText).to.equal("关闭");
    });
    it("should be '今天' and '清空' and '關閉' when assigning language prop with 'zh-TW'", async () => {
      const container = new BaseMobileDateTimeCalendarFooter();
      container.language = "zh-TW";
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      const buttonCloseEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--close",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("今天");
      expect(buttonNoneEl.innerText).to.equal("清空");
      expect(buttonCloseEl.innerText).to.equal("關閉");
    });
    it("should be 'Hoy' and 'Ninguno' and 'Cerrar' when assigning language prop with 'es'", async () => {
      const container = new BaseMobileDateTimeCalendarFooter();
      container.language = "es";
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      const buttonCloseEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--close",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("Hoy");
      expect(buttonNoneEl.innerText).to.equal("Ninguno");
      expect(buttonCloseEl.innerText).to.equal("Cerrar");
    });
  });
});
