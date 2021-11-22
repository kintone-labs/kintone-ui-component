import { expect, fixture } from "@open-wc/testing";
import { BaseDateTimeListBox } from "../index";

describe("BaseDateTimeListBox", () => {
  describe("kuc:calendar-listbox-click event", () => {
    it("should be triggered kuc:calendar-listbox-click event", async () => {
      let triggeredEvent: any = null;
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" }
      ];

      const container = new BaseDateTimeListBox();
      container.items = initItems;
      container.addEventListener("kuc:calendar-listbox-click", event => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );
      (itemsEl[2] as HTMLLIElement).dispatchEvent(
        new CustomEvent("mousedown", { bubbles: true })
      );

      expect(triggeredEvent.type).to.equal("kuc:calendar-listbox-click");
      expect(triggeredEvent.detail.value).to.equal(initItems[2].value);
    });

    it("should be triggered when press Escape key", async () => {
      let triggeredEvent: any = null;
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" }
      ];

      const container = new BaseDateTimeListBox();
      container.items = initItems;
      container.addEventListener("kuc:calendar-listbox-click", event => {
        console.log("event");
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );
      (itemsEl[2] as HTMLLIElement).dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
      );

      expect(triggeredEvent.type).to.equal("kuc:calendar-listbox-click");
      expect(triggeredEvent.detail.value).to.equal(undefined);
    });
  });
});
