import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("accessibility", () => {
    it("should highlight first item when open listbox", async () => {
      let triggeredEvent: any = null;
      const container = new TimePicker();
      container.addEventListener("change", (event: Event) => {
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
      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");
    });

    it("should close listbox when @kuc:listbox-blur triggered", async () => {
      const container = new TimePicker();
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      inputHourEl.click();
      await elementUpdated(el);
      const listboxEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox"
      ) as HTMLUListElement;
      listboxEl.click();
      listboxEl.dispatchEvent(
        new CustomEvent("kuc:listbox-blur", { bubbles: true })
      );
      await elementUpdated(el);
      const listboxElHidden = el.querySelector(
        ".kuc-base-datetime-listbox__listbox"
      ) as HTMLUListElement;
      expect(listboxElHidden).to.equal(null);
    });

    it("should close listbox when press Escape key", async () => {
      const container = new TimePicker({ value: "08:30" });
      const el = await fixture(container);
      const buttonOpen = el.querySelector(
        ".kuc-base-time__assistive-text"
      ) as HTMLButtonElement;
      buttonOpen.focus();
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );
      await elementUpdated(el);
      const itemEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox__item"
      ) as HTMLUListElement;
      itemEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
      );
      await elementUpdated(el);
      const listboxEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox"
      ) as HTMLUListElement;
      expect(listboxEl).to.equal(null);
    });

    it("should close listbox and focus group input when press Escape key while value is empty", async () => {
      const container = new TimePicker({ value: "" });
      const el = await fixture(container);
      const groupInputEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLDivElement;
      const buttonOpen = el.querySelector(
        ".kuc-base-time__assistive-text"
      ) as HTMLDivElement;

      groupInputEl.click();
      await elementUpdated(el);
      const itemElShow = el.querySelector(
        ".kuc-base-datetime-listbox__listbox__item"
      ) as HTMLLIElement;
      expect(itemElShow.title).to.equal("00:00");

      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true })
      );
      await elementUpdated(container);
      const itemElHide = el.querySelector(
        ".kuc-base-datetime-listbox__listbox__item"
      ) as HTMLLIElement;
      expect(itemElHide).to.equal(null);
      expect(
        groupInputEl.classList.contains("kuc-base-time__group--focus")
      ).to.equal(true);
    });

    it("should 08:00 when focus input group and press 8 key while value is empty", async () => {
      const container = new TimePicker({ value: "" });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      const buttonOpen = el.querySelector(
        ".kuc-base-time__assistive-text"
      ) as HTMLButtonElement;

      buttonOpen.focus();
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "8", bubbles: true })
      );
      await elementUpdated(el);

      expect(inputHourEl.value).to.be.equal("08");
      expect(inputMinuteEl.value).to.be.equal("00");
    });
  });
});
