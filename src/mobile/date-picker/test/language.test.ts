import { expect, fixture } from "@open-wc/testing";
import { MobileDatePicker } from "../index";

describe("MobileDatePicker", () => {
  describe("language", () => {
    it("should be 'en' when not assigned in constructor", async () => {
      const container = new MobileDatePicker({ value: "2021-12-22" });
      const el = await fixture(container);
      document.documentElement.setAttribute("lang", "fr");
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      expect(inputDateEl.value).to.equal("12/22/2021");
    });

    it("should be format ja language when assigned in constructor", async () => {
      const container = new MobileDatePicker({
        value: "2021-12-22",
        language: "ja",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      expect(inputDateEl.value).to.equal("2021-12-22");
    });

    it("should be change to zh language when assigned by setter", async () => {
      const container = new MobileDatePicker({
        value: "2021-12-22",
        language: "en",
      });
      container.language = "zh";
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;
      expect(inputDateEl.value).to.equal("2021-12-22");
    });
  });
});
