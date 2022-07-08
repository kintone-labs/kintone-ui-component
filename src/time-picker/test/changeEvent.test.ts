import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("change event", () => {
    it("should be triggered when mousedown on item in ListBox", async () => {
      let triggeredEvent: any = null;
      const container = new TimePicker();
      container.addEventListener("change", (event) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const groupInputEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLDivElement;

      groupInputEl.click();
      await elementUpdated(container);

      const ulElement = el.querySelector(
        ".kuc-base-datetime-listbox__listbox"
      ) as HTMLUListElement;
      const firstElement = ulElement.children[0] as HTMLLIElement;
      firstElement.dispatchEvent(new Event("mousedown", { bubbles: true }));
      await elementUpdated(container);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");
    });

    it("should be triggered when focused listbox and press arrowUp/arrowDown key", async () => {
      let triggeredEvent: any = null;
      const container = new TimePicker();
      container.addEventListener("change", (event) => {
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

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");

      groupInputEl.click();
      await elementUpdated(el);
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true })
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");

      groupInputEl.click();
      await elementUpdated(el);
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");

      groupInputEl.click();
      await elementUpdated(el);
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Space", bubbles: true })
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");
    });

    it("should be not change value when paste new value to input", async () => {
      const container = new TimePicker();
      const el = await fixture(container);
      const hourInputEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;

      const event = Object.assign(
        new Event("paste", { bubbles: true, cancelable: true }),
        {
          clipboardData: {
            getData: () => "4321",
            types: ["text/html"],
          },
        }
      );
      hourInputEl.dispatchEvent(event);
      await elementUpdated(el);
      expect(hourInputEl.value).to.equal("");
    });
  });
});
