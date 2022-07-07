import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTimeListBox } from "../index";

describe("BaseDateTimeListBox", () => {
  describe("accessibility", () => {
    it("should be highlight/not highlight when mouseover/mouseleave the item", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
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

    it("should be highlight/not highlight when mouseover/mouseleave the item", async () => {
      let triggeredEvent: any = null;
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
      ];
      const container = new BaseDateTimeListBox();
      container.addEventListener("kuc:listbox-click", (event) => {
        triggeredEvent = event;
      });
      container.items = initItems;

      const el = await fixture(container);
      const listboxItem = el.querySelector(
        ".kuc-base-datetime-listbox__listbox__item"
      ) as HTMLLIElement;

      listboxItem.focus();

      listboxItem.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
      await elementUpdated(container);
      await elementUpdated(el);
      expect(triggeredEvent.type).to.equal("kuc:listbox-click");
    });

    it("should be do nothing when mouseover after pressing ArrowUp key", async () => {
      let triggeredEvent: any = null;
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
      ];
      const container = new BaseDateTimeListBox();
      container.addEventListener("kuc:listbox-click", (event) => {
        triggeredEvent = event;
      });
      container.items = initItems;

      const el = await fixture(container);
      const listboxItem = el.querySelector(
        ".kuc-base-datetime-listbox__listbox__item"
      ) as HTMLLIElement;

      listboxItem.focus();

      listboxItem.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp" })
      );
      listboxItem.dispatchEvent(new Event("mouseover"));
      await elementUpdated(container);
      await elementUpdated(el);
      expect(triggeredEvent).to.equal(null);
    });

    it("should be do nothing when mouseover after pressing ArrowDown key", async () => {
      let triggeredEvent: any = null;
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
      ];
      const container = new BaseDateTimeListBox();
      container.addEventListener("kuc:listbox-click", (event) => {
        triggeredEvent = event;
      });
      container.items = initItems;

      const el = await fixture(container);
      const listboxItem = el.querySelector(
        ".kuc-base-datetime-listbox__listbox__item"
      ) as HTMLLIElement;

      listboxItem.focus();

      listboxItem.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown" })
      );
      listboxItem.dispatchEvent(new Event("mouseover"));
      await elementUpdated(container);
      await elementUpdated(el);
      expect(triggeredEvent).to.equal(null);
    });
  });
});
