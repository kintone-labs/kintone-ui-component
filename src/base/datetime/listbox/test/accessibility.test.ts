import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeListBox } from "../index";

describe("BaseDateTimeListBox", () => {
  describe("accessibility", () => {
    it("should be highlight/not highlight when mouseover/mouseleave the item", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" }
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );

      itemsEl[2].dispatchEvent(new Event("mouseover"));
      expect(
        itemsEl[2].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);
    });
  });
});
