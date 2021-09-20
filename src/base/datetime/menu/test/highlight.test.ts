import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeMenu } from "../index";

describe("BaseDateTimeMenu", () => {
  describe("hightlight", () => {
    it("should be highlight first item when uses highlightFirstItem function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeMenu();
      container.items = initItems;
      const el = await fixture(container);
      container.highlightFirstItem();

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-menu__menu__item"
      );
      expect(
        itemsEl[0].classList.contains("kuc-base-datetime-menu__menu--highlight")
      ).to.equal(true);

      container.highlightLastItem();
      container.highlightFirstItem();
      expect(
        itemsEl[0].classList.contains("kuc-base-datetime-menu__menu--highlight")
      ).to.equal(true);
    });

    it("should be highlight last item when uses highlightLastItem function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeMenu();
      container.items = initItems;
      const el = await fixture(container);
      container.highlightLastItem();

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-menu__menu__item"
      );
      expect(
        itemsEl[3].classList.contains("kuc-base-datetime-menu__menu--highlight")
      ).to.equal(true);
    });

    it("should be highlight next item when uses highlightNextItem function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeMenu();
      container.items = initItems;
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-menu__menu__item"
      );
      container.highlightNextItem();
      expect(
        itemsEl[0].classList.contains("kuc-base-datetime-menu__menu--highlight")
      ).to.equal(true);

      container.highlightNextItem();
      expect(
        itemsEl[1].classList.contains("kuc-base-datetime-menu__menu--highlight")
      ).to.equal(true);
    });

    it("should be highlight previous item when uses highlightPrevItem function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeMenu();
      container.items = initItems;
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-menu__menu__item"
      );
      container.highlightPrevItem();
      expect(
        itemsEl[3].classList.contains("kuc-base-datetime-menu__menu--highlight")
      ).to.equal(true);

      container.highlightPrevItem();
      expect(
        itemsEl[2].classList.contains("kuc-base-datetime-menu__menu--highlight")
      ).to.equal(true);
    });

    it("should be return the id of the highlighted item when uses getHighlightItemId function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeMenu();
      container.items = initItems;
      const el = await fixture(container);
      let idHighlighted = container.getHighlightItemId() || "";
      expect(idHighlighted).to.equal("");

      container.highlightLastItem();
      idHighlighted = container.getHighlightItemId() || "";
      expect(idHighlighted.includes("-menuitem-3")).to.equal(true);
    });

    it("should be return the element of the highlighted item when uses getHighlightItemEl function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeMenu();
      container.items = initItems;
      const el = await fixture(container);
      container.highlightLastItem();
      const highlightEl = container.getHighlightItemEl();
      expect(
        highlightEl.classList.contains(
          "kuc-base-datetime-menu__menu--highlight"
        )
      ).to.equal(true);
    });
  });
});
