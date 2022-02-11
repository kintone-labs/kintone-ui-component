import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../index";

describe("BaseMobileDateTimeCalendarFooter", () => {
  describe("language", () => {
    it("should be 'en' when not assigning language prop", async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-footer"
      );
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("Today");
      expect(buttonNoneEl.innerText).to.equal("None");
    });

    it("should be '今日' and '選択を解除' when assigning language prop with 'ja'", async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-footer"
      );
      container.setAttribute("language", "ja");
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("今日");
      expect(buttonNoneEl.innerText).to.equal("選択を解除");
    });

    it("should be '今天' and '清空' when assigning language prop with 'zh'", async () => {
      const container = document.createElement(
        "kuc-base-mobile-datetime-calendar-footer"
      );
      container.setAttribute("language", "zh");
      const el = await fixture(container);
      const buttonTodayEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--today"
      ) as HTMLButtonElement;
      const buttonNoneEl = el.querySelector(
        ".kuc-base-mobile-datetime-calendar-footer__group__button--none"
      ) as HTMLButtonElement;
      expect(buttonTodayEl.innerText).to.equal("今天");
      expect(buttonNoneEl.innerText).to.equal("清空");
    });
  });
});
