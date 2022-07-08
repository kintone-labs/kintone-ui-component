import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { DateTimePicker } from "../index";

describe("DateTimePicker", () => {
  describe("accessibility", () => {
    it("should do not open listbox when press click time group on disable mode", async () => {
      const container = new DateTimePicker({
        value: "2021-12-22T09:30:00",
        disabled: true,
      });
      const el = await fixture(container);
      const timeGroupEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLInputElement;
      timeGroupEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const dateTimeListbox = el.querySelector(
        ".kuc-base-time__group__listbox"
      ) as HTMLElement;
      expect(dateTimeListbox).to.equal(null);
    });

    it("should be opened listbox when input focus and blur listbox", async () => {
      const container = new DateTimePicker({
        value: "2021-12-22T14:30:00",
        hour12: true,
      });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      inputHourEl.click();
      inputHourEl.focus();
      await elementUpdated(el);

      const listboxEl = el.querySelector(
        ".kuc-base-time__group__listbox"
      ) as HTMLElement;

      listboxEl.dispatchEvent(
        new CustomEvent("kuc:listbox-blur", { bubbles: true })
      );
      await elementUpdated(el);
      expect(listboxEl.getAttribute("aria-hidden")).to.equal("false");
    });

    it("should be closed listbox when listbox open and pressing Tab key", async () => {
      const container = new DateTimePicker();
      const el = await fixture(container);
      const timeGroupEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLInputElement;
      timeGroupEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const assistiveTextEl = el.querySelector(
        ".kuc-base-time__assistive-text"
      ) as HTMLElement;
      assistiveTextEl.focus();
      assistiveTextEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab" })
      );
      await elementUpdated(el);
      const dateTimeListbox = el.querySelector(
        ".kuc-base-time__group__listbox"
      ) as HTMLElement;
      expect(dateTimeListbox).to.equal(null);
    });

    it("should be nothing when lisbox close and pressing Tab key", async () => {
      const container = new DateTimePicker();
      const el = await fixture(container);
      const timeGroupEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLInputElement;
      await elementUpdated(container);
      await elementUpdated(el);
      const assistiveTextEl = el.querySelector(
        ".kuc-base-time__assistive-text"
      ) as HTMLElement;
      assistiveTextEl.focus();
      assistiveTextEl.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab" })
      );
      await elementUpdated(el);
      const dateTimeListbox = el.querySelector(
        ".kuc-base-time__group__listbox"
      ) as HTMLElement;
      expect(dateTimeListbox).to.equal(null);
    });

    it("should be closed listbox when pressing Escape key", async () => {
      const container = new DateTimePicker({
        value: "2021-12-22T09:30:00",
        hour12: true,
      });
      const el = await fixture(container);
      const inputHourEl = el.querySelector(
        ".kuc-base-time__group__hours"
      ) as HTMLInputElement;
      inputHourEl.click();
      inputHourEl.focus();
      await elementUpdated(el);

      const listboxEl = el.querySelector(
        ".kuc-base-time__group__listbox"
      ) as HTMLElement;

      listboxEl.dispatchEvent(
        new CustomEvent("kuc:listbox-escape", { bubbles: true })
      );
      await elementUpdated(el);
      expect(listboxEl.getAttribute("aria-hidden")).to.equal("false");
    });

    it("should be changed minutes equal 00 when value is empty and pressing 3 key at minutes input", async () => {
      const container = new DateTimePicker({
        hour12: false,
      });
      const el = await fixture(container);
      const inputMinuteEl = el.querySelector(
        ".kuc-base-time__group__minutes"
      ) as HTMLInputElement;
      inputMinuteEl.focus();
      inputMinuteEl.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));
      await elementUpdated(el);
      expect(inputMinuteEl.value).to.equal("00");
    });

    it("should change to PM when pressing P key", async () => {
      const container = new DateTimePicker({
        hour12: true,
      });
      const el = await fixture(container);
      const suffixEl = el.querySelector(
        ".kuc-base-time__group__suffix"
      ) as HTMLInputElement;
      suffixEl.focus();
      suffixEl.dispatchEvent(new KeyboardEvent("keydown", { key: "P" }));
      await elementUpdated(el);
      expect(suffixEl.value).to.equal("PM");
    });
  });
});
