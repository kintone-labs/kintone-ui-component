import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeListBox } from "../index";

describe("BaseDateTimeListBox", () => {
  describe("hightlight", () => {
    it("should be highlight first item when uses highlightFirstItem function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;
      const el = await fixture(container);
      container.highlightFirstItem();

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );
      expect(
        itemsEl[0].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);

      container.highlightLastItem();
      container.highlightFirstItem();
      expect(
        itemsEl[0].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);
    });

    it("should be highlight last item when uses highlightLastItem function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;
      const el = await fixture(container);
      container.highlightLastItem();

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );
      expect(
        itemsEl[3].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);
    });

    it("should be highlight next item when uses highlightNextItem function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );
      container.highlightNextItem();
      expect(
        itemsEl[0].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);

      container.highlightNextItem();
      expect(
        itemsEl[1].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);
    });

    it("should be highlight previous item when uses highlightPrevItem function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );
      container.highlightPrevItem();
      expect(
        itemsEl[3].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);

      container.highlightPrevItem();
      expect(
        itemsEl[2].classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);
    });

    it("should be return the id of the highlighted item when uses getHighlightItemId function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;
      const el = await fixture(container);
      let idHighlighted = container.getHighlightItemId() || "";
      expect(idHighlighted).to.equal("");

      container.highlightLastItem();
      idHighlighted = container.getHighlightItemId() || "";
      expect(idHighlighted.includes("-listboxitem-3")).to.equal(true);
    });

    it("should be return the element of the highlighted item when uses getHighlightItemEl function", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;
      const el = await fixture(container);
      container.highlightLastItem();
      const highlightEl = container.getHighlightItemEl();
      expect(
        highlightEl.classList.contains(
          "kuc-base-datetime-listbox__listbox--highlight"
        )
      ).to.equal(true);
    });

    it("should be return highlight element when call getHighlightItemEl function", async () => {
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

      expect((container.getHighlightItemEl() as HTMLLIElement).value).to.equal(
        2
      );
    });

    it("should be return title null when item listbox dont have label", async () => {
      const initItems = [{ value: "0" }, { value: "1" }, { value: "2" }];
      const container = new BaseDateTimeListBox();
      container.items = initItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );

      expect((itemsEl[1] as HTMLLIElement).title).to.equal("");
    });

    it("should be return value null when item listbox dont have value", async () => {
      const initItems = [
        { label: "2021" },
        { label: "2022" },
        { label: "2023" }
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );
      console.log((itemsEl[1] as HTMLLIElement).value, "checks");
      expect((itemsEl[1] as HTMLLIElement).value).to.equal(0);
    });

    it("should return null when call getHighlightItemId and getHighlightItemValue function while higlight item is null", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
        { value: "3", label: "APRIL" }
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;

      expect(container.getHighlightItemId()).to.equal("");
      expect(container.getHighlightValue()).to.equal("");
    });
  });
});
