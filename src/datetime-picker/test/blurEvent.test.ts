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

    it("reports an out-of-range time as undefined in blur", async () => {
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
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(blurCount).to.equal(1);
      expect(blurDetail!.value).to.equal(undefined);
      expect(blurDetail!.oldValue).to.equal("2022-01-01T11:00:00");
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
      expect(blurDetail!.changedPart).to.equal("time");
    });
  });
});
