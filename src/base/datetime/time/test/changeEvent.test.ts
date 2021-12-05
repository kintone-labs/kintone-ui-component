import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseDateTimeListBox", () => {
  describe("kuc:base-time-change event", () => {
    it("should be triggered when click on item in ListBox", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-base-time");
      container.addEventListener("kuc:base-time-change", event => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const groupInputEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLDivElement;

      groupInputEl.click();
      await elementUpdated(el);

      const ulElement = el.querySelector(
        ".kuc-base-datetime-listbox__listbox"
      ) as HTMLUListElement;
      const firstElement = ulElement.children[0] as HTMLLIElement;
      firstElement.dispatchEvent(new Event("mousedown", { bubbles: true }));
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("kuc:base-time-change");
      expect(triggeredEvent.detail.value).to.equal("00:00");
    });

    it("should be triggered when focused listbox and press arrowUp/arrowDown key", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-base-time");
      container.addEventListener("kuc:base-time-change", event => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const groupInputEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLDivElement;
      const buttonOpen = el.querySelector(
        ".kuc-base-time__assistive-text"
      ) as HTMLDivElement;

      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("kuc:base-time-change");
      expect(triggeredEvent.detail.value).to.equal("00:00");

      groupInputEl.click();
      await elementUpdated(el);
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("kuc:base-time-change");
      expect(triggeredEvent.detail.value).to.equal("00:00");

      groupInputEl.click();
      await elementUpdated(el);
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("kuc:base-time-change");
      expect(triggeredEvent.detail.value).to.equal("00:00");

      groupInputEl.click();
      await elementUpdated(el);
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Space", bubbles: true })
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("kuc:base-time-change");
      expect(triggeredEvent.detail.value).to.equal("00:00");
    });
  });
});
