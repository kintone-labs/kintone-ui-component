import { expect, fixture } from "@open-wc/testing";
import { DateTimePicker } from "../index";

describe("DateTimePicker", () => {
  describe("language", () => {
    it("should be using browser language when not assigned in constructor", async () => {
      const container = new DateTimePicker({ value: "2021-12-22T09:30:00" });
      const el = await fixture(container);
      document.documentElement.setAttribute("lang", "en");
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      expect(inputDateEl.value).to.equal("12/22/2021");
    });

    it("should be format ja language when assigned in constructor", async () => {
      const container = new DateTimePicker({
        value: "2021-12-22T09:30:00",
        language: "ja",
      });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      expect(inputDateEl.value).to.equal("2021-12-22");
    });

    it("should be change to zh language when assigned by setter", async () => {
      const container = new DateTimePicker({
        value: "2021-12-22T09:30:00",
        language: "en",
      });
      container.language = "zh";
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      expect(inputDateEl.value).to.equal("2021-12-22");
    });
  });
});
