import { elementUpdated, expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseDateTimeListBox", () => {
  describe("accessibility", () => {
    it("should highlight first item when open listbox", async () => {
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

    it("should focus hour input when press ArrowLeft on minute input", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-base-time");
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      inputHourEl.addEventListener("focus", (event: Event) => {
        triggeredEvent = event;
      });

      inputMinuteEl.focus();
      await elementUpdated(el);

      inputMinuteEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true })
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("focus");
    });

    it("should focus minute input when press ArrowLeft on suffix input", async () => {
      let triggeredEvent: any = null;
      const container = document.createElement("kuc-base-time");
      container.setAttribute("hour12", "true");
      const el = await fixture(container);
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      const inputSuffixEl = el.querySelector(
        ".kuc-base-time__group__suffix"
      ) as HTMLInputElement;
      inputMinuteEl.addEventListener("focus", (event: Event) => {
        triggeredEvent = event;
      });

      inputSuffixEl.focus();
      await elementUpdated(el);

      inputSuffixEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true })
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("focus");
    });

    it("should focus minute input when press ArrowRight on hour input", async () => {
      let triggeredEventMinute: any = null;
      let triggeredEventSuffix: any = null;
      const container = document.createElement("kuc-base-time");
      container.setAttribute("hour12", "true");
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      const inputSuffixEl = el.querySelector(
        ".kuc-base-time__group__suffix"
      ) as HTMLInputElement;

      inputMinuteEl.addEventListener("focus", (event: Event) => {
        triggeredEventMinute = event;
      });
      inputSuffixEl.addEventListener("focus", (event: Event) => {
        triggeredEventSuffix = event;
      });

      inputHourEl.focus();
      await elementUpdated(el);

      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true })
      );
      await elementUpdated(el);
      expect(triggeredEventMinute.type).to.equal("focus");

      inputHourEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );
      await elementUpdated(el);
      expect(triggeredEventSuffix.type).to.equal("focus");
    });

    it("should close listbox when @kuc:listbox-blur triggered", async () => {
      const container = document.createElement("kuc-base-time");
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      inputHourEl.click();
      await elementUpdated(el);

      const listboxEl = el.querySelector(
        ".kuc-base-datetime-listbox__listbox"
      ) as HTMLUListElement;
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
      const container = document.createElement("kuc-base-time");
      container.setAttribute("value", "08:30");
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
  });
});
