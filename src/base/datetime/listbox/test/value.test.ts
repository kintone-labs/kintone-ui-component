import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTimeListBox } from "../index";

describe("BaseDateTimeListBox", () => {
  describe("value", () => {
    it("should be update by setter", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;
      container.value = "1";

      const el = await fixture(container);
      const selectedItemEl = el.querySelector(
        '.kuc-base-datetime-listbox__listbox__item[aria-selected="true"]'
      ) as HTMLLIElement;
      expect(selectedItemEl.textContent?.trim()).to.equal("FEBRUARY");
    });
  });
});
