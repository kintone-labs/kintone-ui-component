import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeListBox } from "../index";

describe("BaseDateTimeListBox", () => {
  describe("hightlight", () => {
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

      expect(container.getHighlightItemEl().id).to.equal("");
      expect(container.getHighlightItemEl().value).to.equal("");
    });
  });
});
