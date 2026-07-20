import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { DateTimePicker } from "../index";
import { DateTimePickerChangeEventDetail } from "../type";

describe("DateTimePicker", () => {
  describe("blur event (inner time field)", () => {
    const setup = async (value: string) => {
      const container = new DateTimePicker();
      container.value = value;
      const el = await fixture(container);
      const hours = el.querySelector(
        ".kuc-base-time__group__hours",
      ) as HTMLInputElement;
      return { container, el, hours };
    };

    const editTime = (hours: HTMLInputElement) => {
      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
    };

    const blur = (hours: HTMLInputElement) =>
      hours.dispatchEvent(
        new FocusEvent("blur", { relatedTarget: document.body }),
      );

    it("fires once on time blur with the net datetime; change still fires live", async () => {
      const { container, el, hours } = await setup("2022-01-01T10:30:00");
      let changeCount = 0;
      let blurCount = 0;
      let blurDetail: DateTimePickerChangeEventDetail | null = null;
      el.addEventListener("change", () => changeCount++);
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      editTime(hours);
      await elementUpdated(el);

      // "change" is live; "blur" waits until focus leaves the time field
      expect(changeCount).to.equal(1);
      expect(blurCount).to.equal(0);
      expect(container.value).to.equal("2022-01-01T11:30:00");

      blur(hours);
      await elementUpdated(el);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2022-01-01T11:30:00");
      expect(blurDetail!.oldValue).to.equal("2022-01-01T10:30:00");
      expect(blurDetail!.changedPart).to.equal("time");
    });

    it("does not fire blur when the time is unchanged", async () => {
      const { el, hours } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      el.addEventListener("blur", () => blurCount++);

      hours.dispatchEvent(new Event("focus"));
      blur(hours);
      await elementUpdated(el);

      expect(blurCount).to.equal(0);
    });

    it("does not fire blur on a date-only change; oldValue is the datetime when time editing started", async () => {
      const { el, hours } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      let blurDetail: DateTimePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      // change the date only -> no time blur pending
      const dateEl = el.querySelector(
        ".kuc-datetime-picker__group__inputs--date",
      ) as HTMLElement;
      dateEl.dispatchEvent(
        new CustomEvent("kuc:base-date-change", {
          detail: { value: "2022-02-02", oldValue: "2022-01-01" },
        }),
      );
      await elementUpdated(el);
      expect(blurCount).to.equal(0);

      // now edit the time and leave: oldValue reflects the post-date-change datetime
      editTime(hours);
      await elementUpdated(el);
      blur(hours);
      await elementUpdated(el);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2022-02-02T11:30:00");
      expect(blurDetail!.oldValue).to.equal("2022-02-02T10:30:00");
      expect(blurDetail!.changedPart).to.equal("time");
    });

    it("does not fire blur when the net time is unchanged (edited then reverted)", async () => {
      const { el, hours } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      el.addEventListener("blur", () => blurCount++);

      hours.dispatchEvent(new Event("focus"));
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }),
      );
      await elementUpdated(el);
      // revert back to the original time before leaving
      hours.dispatchEvent(
        new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }),
      );
      await elementUpdated(el);

      blur(hours);
      await elementUpdated(el);

      expect(blurCount).to.equal(0);
    });

    it("reports an out-of-range (invalid) time as undefined in blur", async () => {
      const container = new DateTimePicker();
      container.value = "2022-01-01T11:00:00";
      container.min = "10:00";
      container.max = "12:00";
      const el = await fixture(container);
      const hours = el.querySelector(
        ".kuc-base-time__group__hours",
      ) as HTMLInputElement;
      let blurCount = 0;
      let blurDetail: DateTimePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

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

      blur(hours);
      await elementUpdated(el);

      // invalid value is still reported on blur (for validate-on-blur), as undefined
      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal(undefined);
      expect(blurDetail!.oldValue).to.equal("2022-01-01T11:00:00");
      expect(blurDetail!.changedPart).to.equal("time");
    });

    it("selecting from the dropdown defers blur until blur", async () => {
      const { container, el, hours } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      let blurDetail: DateTimePickerChangeEventDetail | null = null;
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

      blur(hours);
      await elementUpdated(container);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2022-01-01T00:00:00");
      expect(blurDetail!.oldValue).to.equal("2022-01-01T10:30:00");
      expect(blurDetail!.changedPart).to.equal("time");
    });

    it("does not fire blur when focus moves into a time listbox item", async () => {
      const { container, el, hours } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      el.addEventListener("blur", () => blurCount++);

      // pending time edit: 10:30 -> 11:30
      editTime(hours);
      await elementUpdated(el);

      // open the time dropdown and grab a real <li>
      const groupInputEl = el.querySelector(
        ".kuc-base-time__group",
      ) as HTMLDivElement;
      groupInputEl.click();
      await elementUpdated(container);
      const li = el.querySelector(
        ".kuc-base-datetime-listbox__listbox__item",
      ) as HTMLLIElement;
      expect(li).to.not.equal(null);

      // focus moving from the input into a listbox item stays inside the component
      hours.dispatchEvent(new FocusEvent("blur", { relatedTarget: li }));
      await elementUpdated(el);

      expect(blurCount).to.equal(0);
    });

    it("fires blur when focus moves from the time field to the date field", async () => {
      const { el, hours } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      let blurDetail: DateTimePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      const dateInput = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;

      editTime(hours);
      await elementUpdated(el);

      // the date input is inside datetime-picker but OUTSIDE the time field,
      // so leaving the time field for it still fires the time blur
      hours.dispatchEvent(new FocusEvent("blur", { relatedTarget: dateInput }));
      await elementUpdated(el);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2022-01-01T11:30:00");
      expect(blurDetail!.oldValue).to.equal("2022-01-01T10:30:00");
      expect(blurDetail!.changedPart).to.equal("time");
    });

    it("re-arms after a blur: a second time edit fires blur again with a fresh oldValue", async () => {
      const { el, hours } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      let blurDetail: DateTimePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      editTime(hours);
      await elementUpdated(el);
      blur(hours);
      await elementUpdated(el);
      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2022-01-01T11:30:00");
      expect(blurDetail!.oldValue).to.equal("2022-01-01T10:30:00");

      // second edit + blur: baseline is now the value left by the first blur
      editTime(hours);
      await elementUpdated(el);
      blur(hours);
      await elementUpdated(el);
      expect(blurCount).to.equal(2);
      expect(blurDetail!.value).to.equal("2022-01-01T12:30:00");
      expect(blurDetail!.oldValue).to.equal("2022-01-01T11:30:00");
    });
  });

  describe("blur event (inner date field)", () => {
    const setup = async (value: string) => {
      const container = new DateTimePicker({ value, language: "en" });
      const el = await fixture(container);
      const input = el.querySelector(
        ".kuc-base-date__input",
      ) as HTMLInputElement;
      const hours = el.querySelector(
        ".kuc-base-time__group__hours",
      ) as HTMLInputElement;
      return { container, el, input, hours };
    };

    const typeDate = async (
      input: HTMLInputElement,
      value: string,
      el: Element,
    ) => {
      input.value = value;
      input.dispatchEvent(new Event("change", { bubbles: true }));
      await elementUpdated(el);
    };

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

    it("fires once on date blur with the net datetime; change still fires live", async () => {
      const { el, input } = await setup("2022-01-01T10:30:00");
      let changeCount = 0;
      let blurCount = 0;
      let blurDetail: DateTimePickerChangeEventDetail | null = null;
      el.addEventListener("change", () => changeCount++);
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      await typeDate(input, "01/02/2022", el);
      expect(changeCount).to.equal(1);
      expect(blurCount).to.equal(0);

      await blur(input, document.body, el);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal("2022-01-02T10:30:00");
      expect(blurDetail!.oldValue).to.equal("2022-01-01T10:30:00");
      expect(blurDetail!.changedPart).to.equal("date");
    });

    it("does not fire blur when the date is unchanged", async () => {
      const { el, input } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      el.addEventListener("blur", () => blurCount++);

      await blur(input, document.body, el);
      expect(blurCount).to.equal(0);
    });

    it("does not fire blur when the net date is unchanged (edited then reverted)", async () => {
      const { el, input } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      el.addEventListener("blur", () => blurCount++);

      await typeDate(input, "01/02/2022", el);
      await typeDate(input, "01/01/2022", el);

      await blur(input, document.body, el);
      expect(blurCount).to.equal(0);
    });

    it("fires date blur when focus moves from the date field to the time field", async () => {
      const { el, input, hours } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      let blurDetail: DateTimePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      await typeDate(input, "01/02/2022", el);
      // Tab from the date input to the time input = leaving the date field
      await blur(input, hours, el);

      expect(blurCount).to.equal(1);
      expect(blurDetail!.changedPart).to.equal("date");
      expect(blurDetail!.value).to.equal("2022-01-02T10:30:00");
      expect(blurDetail!.oldValue).to.equal("2022-01-01T10:30:00");
    });

    it("reports an invalid date as undefined in blur (e.g. 'aa' in the year)", async () => {
      const { el, input } = await setup("2022-01-01T10:30:00");
      let blurCount = 0;
      let blurDetail: DateTimePickerChangeEventDetail | null = null;
      el.addEventListener("blur", (event: Event) => {
        blurCount++;
        blurDetail = (event as CustomEvent).detail;
      });

      await typeDate(input, "01/01/aaaa", el);
      await blur(input, document.body, el);

      // invalid value is still reported on blur (for validate-on-blur), as undefined
      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal(undefined);
      expect(blurDetail!.oldValue).to.equal("2022-01-01T10:30:00");
      expect(blurDetail!.changedPart).to.equal("date");
    });
  });
});
