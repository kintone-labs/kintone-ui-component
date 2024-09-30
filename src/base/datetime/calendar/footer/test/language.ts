import { expect, fixture } from "@open-wc/testing";

import { BaseDateTimeCalendarFooter } from "../index";

describe("BaseDateTimeCalendarFooter", () => {
  describe("language", () => {
    it("should be 'en' when not assigning language prop", async () => {
      const container = new BaseDateTimeCalendarFooter();
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("Today");
      expect(buttonNoneEl.innerText).to.equal("None");
    });

    it("should be '今日' and '選択を解除' when assigning language prop with 'ja'", async () => {
      const container = new BaseDateTimeCalendarFooter();
      container.language = "ja";
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("今日");
      expect(buttonNoneEl.innerText).to.equal("選択を解除");
    });

    it("should be '今天' and '清空' when assigning language prop with 'zh'", async () => {
      const container = new BaseDateTimeCalendarFooter();
      container.language = "zh";
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("今天");
      expect(buttonNoneEl.innerText).to.equal("清空");
    });
    it("should be '今天' and '清空' when assigning language prop with 'zh-TW'", async () => {
      const container = new BaseDateTimeCalendarFooter();
      container.language = "zh-TW";
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("今天");
      expect(buttonNoneEl.innerText).to.equal("清空");
    });
    it("should be 'Hoy' and 'Ninguno' when assigning language prop with 'es'", async () => {
      const container = new BaseDateTimeCalendarFooter();
      container.language = "es";
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--today",
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-datetime-calendar-footer__group__button--none",
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("Hoy");
      expect(buttonNoneEl.innerText).to.equal("Ninguno");
    });
  });
});
