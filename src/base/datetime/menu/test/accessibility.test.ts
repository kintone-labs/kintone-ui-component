import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeMenu } from "../index";

describe("BaseDateTimeMenu", () => {
  describe("accessibility", () => {
    it("should be highlight/not highlight when mouseover/mouseleave the item", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" }
      ];
      const container = new BaseDateTimeMenu();
      container.items = initItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-menu__menu__item"
      );

      itemsEl[2].dispatchEvent(new Event("mouseover"));
      expect(
        itemsEl[2].classList.contains("kuc-base-datetime-menu__menu--highlight")
      ).to.equal(true);

      itemsEl[2].dispatchEvent(new Event("mouseleave"));
      expect(
        itemsEl[2].classList.contains("kuc-base-datetime-menu__menu--highlight")
      ).to.equal(false);
    });
  });
});
