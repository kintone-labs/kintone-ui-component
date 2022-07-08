import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../index";

describe("BaseMobileDate", () => {
  describe("language", () => {
    it("should be 'en' when not assigning ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("02/14/2022");
    });

    it("should be 'zh' when assigned by setter", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      container.setAttribute("language", "zh");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("2022-02-14");
    });

    it("should be 'ja' when assigned by setter", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      container.setAttribute("language", "ja");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("2022-02-14");
    });

    it("should change to 'ja' when assigned by setter", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("language", "en");
      container.setAttribute("value", "2022-02-14");
      const el = await fixture(container);
      container.setAttribute("language", "ja");
      await elementUpdated(container);

      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("2022-02-14");
    });
  });
});
