import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { BaseMobileDate } from "../index";

describe("BaseMobileDate", () => {
  describe("language", () => {
    it("should be 'en' when not assigning ", async () => {
      const container = new BaseMobileDate();
      container.setAttribute("value", "2022-02-14");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("02/14/2022");
    });

    it("should be 'zh' when assigned by setter", async () => {
      const container = new BaseMobileDate();
      container.value = "2022-02-14";
      container.language = "zh";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("2022-02-14");
    });

    it("should be 'zh-TW' when assigned by setter", async () => {
      const container = new BaseMobileDate();
      container.value = "2022-02-14";
      container.language = "zh-TW";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("2022-02-14");
    });

    it("should be 'ja' when assigned by setter", async () => {
      const container = new BaseMobileDate();
      container.value = "2022-02-14";
      container.language = "ja";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("2022-02-14");
    });

    it("should be 'es' when assigned by setter", async () => {
      const container = new BaseMobileDate();
      container.value = "2022-02-14";
      container.language = "es";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("2022-02-14");
    });

    it("should change to 'ja' when assigned by setter", async () => {
      const container = new BaseMobileDate();
      container.value = "2022-02-14";
      container.language = "en";
      const el = await fixture(container);
      container.language = "ja";
      await elementUpdated(container);

      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input",
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("2022-02-14");
    });
  });
});
