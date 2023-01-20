import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDate", () => {
  describe("value", () => {
    it("should be empty when not assigning ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("");
    });

    it("should be '02/14/2022' when assigning", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("02/14/2022");
    });

    it("should be '02/15/2022' when change by setter", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("value", "2022-02-14");
      const el = await fixture(container);
      container.setAttribute("value", "2022-02-15");
      await elementUpdated(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.equal("02/15/2022");
    });
  });
});
