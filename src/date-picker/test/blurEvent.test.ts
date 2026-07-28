import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { DatePicker } from "../index";
import { DatePickerChangeEventDetail } from "../type";

describe("DatePicker", () => {
  describe("blur event", () => {
    const setup = async (value: string) => {
      const container = new DatePicker({ value, language: "en" });
      const el = await fixture(container);
      return { container, el };
    };

    const getParts = (el: Element) => ({
      input: el.querySelector(".kuc-base-date__input") as HTMLInputElement,
      button: el.querySelector(
        ".kuc-base-date__assistive-text",
      ) as HTMLButtonElement,
    });

    const typeValue = async (
      input: HTMLInputElement,
      value: string,
      el: Element,
    ) => {
      input.value = value;
      input.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(el);
    };

    const focusIn = (input: HTMLInputElement) =>
      input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));

    const blur = async (
      input: HTMLInputElement,
      relatedTarget: Element,
      el: Element,
    ) => {
      input.dispatchEvent(
        new FocusEvent("focusout", { relatedTarget, bubbles: true }),
      );
      await elementUpdated(el);
    };

    it("fires once on blur with the current value; change still fires live while editing", async () => {
      const { el } = await setup("2021-12-20");
      let changeCount = 0;
      let blurCount = 0;
      let blurDetail: DatePickerChangeEventDetail | null = null;
      el.addEventListener("change", () => changeCount++);
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { input } = getParts(el);
      focusIn(input);
      await typeValue(input, "12/13/2021", el);

      // "change" is live; "blur" waits for blur
      expect(changeCount).to.equal(1);
      expect(blurCount).to.equal(0);

      await blur(input, document.body, el);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2021-12-13");
      expect(blurDetail!.oldValue).to.equal("2021-12-20");
    });

    it("does not fire blur on internal focus move (to the calendar button)", async () => {
      const { el } = await setup("2021-12-20");
      let blurCount = 0;
      el.addEventListener("blur", () => blurCount++);

      const { input, button } = getParts(el);
      focusIn(input);
      await typeValue(input, "12/13/2021", el);

      await blur(input, button, el);
      expect(blurCount).to.equal(0);
    });

    it("fires blur every time focus leaves the field, even without an edit", async () => {
      const { el } = await setup("2021-12-20");
      let blurCount = 0;
      let blurDetail: DatePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { input } = getParts(el);
      focusIn(input);
      await blur(input, document.body, el);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2021-12-20");
      expect(blurDetail!.oldValue).to.equal("2021-12-20");
    });

    it("still fires blur when the net value is unchanged (edited then reverted)", async () => {
      const { el } = await setup("2021-12-20");
      let blurCount = 0;
      let blurDetail: DatePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { input } = getParts(el);
      focusIn(input);
      await typeValue(input, "12/13/2021", el);
      // revert back to the original value before leaving
      await typeValue(input, "12/20/2021", el);

      await blur(input, document.body, el);
      // fires on every leave now; oldValue is the value when focus entered
      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2021-12-20");
      expect(blurDetail!.oldValue).to.equal("2021-12-20");
    });

    it("reports an invalid value as undefined in blur", async () => {
      const { el } = await setup("2021-12-20");
      let blurCount = 0;
      let blurDetail: DatePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { input } = getParts(el);
      focusIn(input);
      await typeValue(input, "2021-12/12", el);

      await blur(input, document.body, el);

      // invalid value is still reported on blur (for validate-on-blur), as undefined
      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal(undefined);
      expect(blurDetail!.oldValue).to.equal("2021-12-20");
    });

    it("fires blur again on a second leave; oldValue is undefined when focus entered on an invalid value", async () => {
      const { el } = await setup("2021-12-20");
      let blurCount = 0;
      let blurDetail: DatePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { input } = getParts(el);
      // session 1: valid -> invalid, then leave
      focusIn(input);
      await typeValue(input, "2021-12/12", el);
      await blur(input, document.body, el);
      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal(undefined);
      expect(blurDetail!.oldValue).to.equal("2021-12-20");

      // session 2: focus enters while already invalid -> still invalid, leave.
      // fires again; oldValue is undefined because the entered value was invalid.
      focusIn(input);
      await typeValue(input, "2021-12/13", el);
      await blur(input, document.body, el);
      expect(blurCount).to.equal(2);
      expect(blurDetail!.value).to.equal(undefined);
      expect(blurDetail!.oldValue).to.equal(undefined);
    });

    it("re-arms after a blur: a second edit fires blur again with a fresh oldValue", async () => {
      const { el } = await setup("2021-12-20");
      let blurCount = 0;
      let blurDetail: DatePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { input } = getParts(el);
      focusIn(input);
      await typeValue(input, "12/13/2021", el);
      await blur(input, document.body, el);
      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2021-12-13");
      expect(blurDetail!.oldValue).to.equal("2021-12-20");

      // second edit + blur: baseline is now the value left by the first blur
      focusIn(input);
      await typeValue(input, "12/25/2021", el);
      await blur(input, document.body, el);
      expect(blurCount).to.equal(2);
      expect(blurDetail!.value).to.equal("2021-12-25");
      expect(blurDetail!.oldValue).to.equal("2021-12-13");
    });

    it("selecting a date from the calendar defers blur until blur", async () => {
      const { container, el } = await setup("2021-12-20");
      let blurCount = 0;
      let blurDetail: DatePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const { input } = getParts(el);
      focusIn(input);
      input.click();
      await elementUpdated(container);
      await elementUpdated(el);

      // move selection (fires change live), then commit with Enter (closes the
      // calendar and refocuses the input)
      const selected = el.querySelector(
        'kuc-base-datetime-calendar-body .kuc-base-datetime-calendar-body__table__date--selected[aria-selected="true"]',
      ) as HTMLButtonElement;
      selected.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowRight" }),
      );
      await elementUpdated(container);

      const moved = el.querySelector(
        'kuc-base-datetime-calendar-body .kuc-base-datetime-calendar-body__table__date--selected[aria-selected="true"]',
      ) as HTMLButtonElement;
      moved.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      await elementUpdated(container);

      // calendar interaction fires "change" live, but not "blur" yet
      expect(blurCount).to.equal(0);

      await blur(input, document.body, el);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2021-12-21");
      expect(blurDetail!.oldValue).to.equal("2021-12-20");
    });
  });
});
