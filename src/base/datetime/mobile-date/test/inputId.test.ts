import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseMobileDate", () => {
  describe("inputId", () => {
    it("should '-label' when not assigned ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.id).to.equal("-label");
    });

    it("should 'sample-id-label' when assigned ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("inputId", "sample-id");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.id).to.equal("sample-id-label");
    });

    it("should 'replace-lable' when changed by setter ", async () => {
      const container = document.createElement("kuc-mobile-base-date");
      container.setAttribute("inputId", "sample-id");
      const el = await fixture(container);
      container.setAttribute("inputId", "replace");
      await elementUpdated(container);
      const inputEl = el.querySelector(
        ".kuc-mobile-base-date__group__input"
      ) as HTMLInputElement;

      expect(inputEl.id).to.equal("replace-label");
    });
  });
});
