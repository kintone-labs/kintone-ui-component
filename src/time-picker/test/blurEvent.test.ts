import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { TimePicker } from "../index";
import { TimePickerChangeEventDetail } from "../type";

describe("TimePicker", () => {
  describe("blur event", () => {
    const setup = async (value: string) => {
      const container = new TimePicker();
      container.value = value;
      const el = await fixture(container);
      return { container, el };
    };

    const getInputs = (el: Element) => ({
      hours: el.querySelector(
        ".kuc-base-time__group__hours",
      ) as HTMLInputElement,
      minutes: el.querySelector(
        ".kuc-base-time__group__minutes",
      ) as HTMLInputElement,
      toggle: el.querySelector(
        ".kuc-base-time__assistive-text",
      ) as HTMLButtonElement,
    });

    it("fires once on blur with the net value; change still fires live while editing", async () => {
      const { container, el } = await setup("10:30");
      let changeCount = 0;
      let blurCount = 0;
      let blurDetail: TimePickerChangeEventDetail | null = null;
      el.addEventListener("change", () => changeCount++);
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { hours } = getInputs(el);
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);

      // "change" is live; "blur" waits for blur
      expect(changeCount).to.equal(1);
      expect(blurCount).to.equal(0);
      expect(container.value).to.equal("11:30");

      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(el);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("11:30");
      expect(blurDetail!.oldValue).to.equal("10:30");
    });

    it("does not fire blur on internal focus moves (sibling input or toggle button)", async () => {
      const { el } = await setup("10:30");
      let blurCount = 0;
      el.addEventListener("blur", () => blurCount++);

      const { hours, minutes, toggle } = getInputs(el);
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);

      // hours -> minutes (sibling input): still inside the component
      hours.dispatchEvent(new FocusEvent("blur", { relatedTarget: minutes }));
      await elementUpdated(el);
      expect(blurCount).to.equal(0);

      // minutes -> toggle button: still inside the component
      minutes.dispatchEvent(new FocusEvent("blur", { relatedTarget: toggle }));
      await elementUpdated(el);
      expect(blurCount).to.equal(0);
    });

    it("does not fire blur when the value is unchanged (not dirty)", async () => {
      const { el } = await setup("10:30");
      let blurCount = 0;
      el.addEventListener("blur", () => blurCount++);

      const { hours } = getInputs(el);
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(el);

      expect(blurCount).to.equal(0);
    });

    it("does not fire blur when the net value is unchanged (edited then reverted)", async () => {
      const { el } = await setup("10:30");
      let blurCount = 0;
      el.addEventListener("blur", () => blurCount++);

      const { hours } = getInputs(el);
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);
      // revert back to the original value before leaving
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
      );
      await elementUpdated(el);

      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(el);

      expect(blurCount).to.equal(0);
    });

    it("selecting from the dropdown defers blur until blur", async () => {
      const { container, el } = await setup("");
      let blurCount = 0;
      let blurDetail: TimePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const groupInputEl = el.querySelector(
        ".kuc-base-time__group",
      ) as HTMLDivElement;
      groupInputEl.click();
      await elementUpdated(container);

      const ulElement = el.querySelector(
        ".kuc-base-datetime-listbox__listbox",
      ) as HTMLUListElement;
      const firstElement = ulElement.children[0] as HTMLLIElement;
      firstElement.dispatchEvent(new Event("mousedown", { bubbles: true }));
      await elementUpdated(container);

      // dropdown selection fires "change" live, but not "blur" yet
      expect(blurCount).to.equal(0);

      const { hours } = getInputs(el);
      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(container);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("00:00");
      expect(blurDetail!.oldValue).to.equal("");
    });

    it("reports an out-of-range value as undefined in blur", async () => {
      const container = new TimePicker();
      container.value = "11:00";
      container.min = "10:00";
      container.max = "12:00";
      const el = await fixture(container);
      let blurCount = 0;
      let blurDetail: TimePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { hours } = getInputs(el);
      hours.dispatchEvent(new Event("focus"));
      // step below min ("10:00"): 11:00 -> 10:00 -> 09:00 (out of range)
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
      );
      await elementUpdated(el);
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
      );
      await elementUpdated(el);

      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal(undefined);
      expect(blurDetail!.oldValue).to.equal("11:00");
    });

    it("calls preventDefault on mousedown of a non-input area, but not on an input", async () => {
      const { el } = await setup("10:30");

      const { hours } = getInputs(el);
      const colon = el.querySelector(
        ".kuc-base-time__group__colon",
      ) as HTMLSpanElement;

      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);

      // mousedown on the colon (non-input area) keeps focus -> no spurious blur
      const colonEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
      });
      colon.dispatchEvent(colonEvent);
      expect(colonEvent.defaultPrevented).to.equal(true);

      // mousedown directly on an input focuses it normally (not prevented)
      const inputEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
      });
      hours.dispatchEvent(inputEvent);
      expect(inputEvent.defaultPrevented).to.equal(false);
    });

    it("re-arms after a blur: a second edit fires blur again with a fresh oldValue", async () => {
      const { el } = await setup("10:30");
      let blurCount = 0;
      let blurDetail: TimePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });
      const { hours } = getInputs(el);

      // first edit + blur
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);
      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(el);
      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("11:30");
      expect(blurDetail!.oldValue).to.equal("10:30");

      // second edit + blur: pending flag was reset, so it fires again and the
      // baseline is now the value left by the first blur (11:30), not 10:30
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);
      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(el);
      expect(blurCount).to.equal(2);
      expect(blurDetail!.value).to.equal("12:30");
      expect(blurDetail!.oldValue).to.equal("11:30");
    });
  });
});
