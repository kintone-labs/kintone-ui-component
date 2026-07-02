import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("change event", () => {
    it("should be triggered when mousedown on item in ListBox", async () => {
      let triggeredEvent: any = null;
      const container = new TimePicker();
      container.addEventListener("change", (event: Event) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
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

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");
    });

    it("should be triggered when focused listbox and press arrowUp/arrowDown key", async () => {
      let triggeredEvent: any = null;
      const container = new TimePicker();
      container.addEventListener("change", (event: Event) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const groupInputEl = el.querySelector(
        ".kuc-base-time__group",
      ) as HTMLDivElement;
      const buttonOpen = el.querySelector(
        ".kuc-base-time__assistive-text",
      ) as HTMLDivElement;

      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
      );
      await fixture(container);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");

      groupInputEl.click();
      await elementUpdated(el);
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");

      groupInputEl.click();
      await elementUpdated(el);
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");

      groupInputEl.click();
      await elementUpdated(el);
      buttonOpen.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Space", bubbles: true }),
      );
      await elementUpdated(el);

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.equal("00:00");
    });

    it("should be not change value when paste new value to input", async () => {
      const container = new TimePicker();
      const el = await fixture(container);
      const hourInputEl = el.querySelector(
        ".kuc-base-time__group__hours",
      ) as HTMLInputElement;

      const event = Object.assign(
        new Event("paste", { bubbles: true, cancelable: true }),
        {
          clipboardData: {
            getData: () => "4321",
            types: ["text/html"],
          },
        },
      );
      hourInputEl.dispatchEvent(event);
      await elementUpdated(el);
      expect(hourInputEl.value).to.equal("");
    });
  });

  describe("change-on-blur event", () => {
    const setup = async (value: string, hour12 = false) => {
      const container = new TimePicker();
      container.value = value;
      container.hour12 = hour12;
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
      let blurDetail: any = null;
      el.addEventListener("change", () => changeCount++);
      el.addEventListener("change-on-blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { hours } = getInputs(el);
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);

      // "change" is live; "change-on-blur" waits for blur
      expect(changeCount).to.equal(1);
      expect(blurCount).to.equal(0);
      expect(container.value).to.equal("11:30");

      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(el);

      expect(blurCount).to.equal(1);
      expect(blurDetail.value).to.equal("11:30");
      expect(blurDetail.oldValue).to.equal("10:30");
    });

    it("does not fire change-on-blur on internal focus moves (sibling input or toggle button)", async () => {
      const { el } = await setup("10:30");
      let blurCount = 0;
      el.addEventListener("change-on-blur", () => blurCount++);

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

    it("does not fire change-on-blur when the value is unchanged (not dirty)", async () => {
      const { el } = await setup("10:30");
      let blurCount = 0;
      el.addEventListener("change-on-blur", () => blurCount++);

      const { hours } = getInputs(el);
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(el);

      expect(blurCount).to.equal(0);
    });

    it("works in hour12 mode (fires once on blur after an edit)", async () => {
      const { el } = await setup("10:30", true);
      let blurCount = 0;
      let blurDetail: any = null;
      el.addEventListener("change-on-blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { hours } = getInputs(el);
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);
      expect(blurCount).to.equal(0);

      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(el);
      expect(blurCount).to.equal(1);
      expect(blurDetail.oldValue).to.equal("10:30");
      expect(blurDetail.value).to.not.equal("10:30");
    });

    it("selecting from the dropdown defers change-on-blur until blur", async () => {
      const { container, el } = await setup("");
      let blurCount = 0;
      let blurDetail: any = null;
      el.addEventListener("change-on-blur", (event: Event) => {
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

      // dropdown selection fires "change" live, but not "change-on-blur" yet
      expect(blurCount).to.equal(0);

      const { hours } = getInputs(el);
      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );
      await elementUpdated(container);

      expect(blurCount).to.equal(1);
      expect(blurDetail.value).to.equal("00:00");
    });

    it("reports an out-of-range value as undefined in change-on-blur", async () => {
      const container = new TimePicker();
      container.value = "11:00";
      container.min = "10:00";
      container.max = "12:00";
      const el = await fixture(container);
      let blurCount = 0;
      let blurDetail: any = null;
      el.addEventListener("change-on-blur", (event: Event) => {
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
      expect(blurDetail.value).to.equal(undefined);
      expect(blurDetail.oldValue).to.equal("11:00");
    });

    it("keeps focus (preventDefault) on mousedown of a non-input area, so no change-on-blur fires", async () => {
      const { el } = await setup("10:30");
      let blurCount = 0;
      el.addEventListener("change-on-blur", () => blurCount++);

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
      expect(blurCount).to.equal(0);

      // mousedown directly on an input focuses it normally (not prevented)
      const inputEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
      });
      hours.dispatchEvent(inputEvent);
      expect(inputEvent.defaultPrevented).to.equal(false);
    });
  });
});
