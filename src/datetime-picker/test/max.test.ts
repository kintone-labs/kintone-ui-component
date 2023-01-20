import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { DateTimePicker } from "../index";

describe("DateTimePicker", () => {
  describe("max", () => {
    it("should show all options when not assigning", async () => {
      const container = new DateTimePicker();
      const el = await fixture(container);
      const groupInputEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLDivElement;

      groupInputEl.click();
      await elementUpdated(container);

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );

      expect(itemsEl[0].getAttribute("value")).to.equal("00:00");
      expect(itemsEl[itemsEl.length - 1].getAttribute("value")).to.equal(
        "23:30"
      );
    });

    it('the last option should be 13:00 when assigned "13:15" by constructor', async () => {
      const container = new DateTimePicker({ max: "13:15" });
      const el = await fixture(container);
      const groupInputEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLDivElement;

      groupInputEl.click();
      await elementUpdated(container);

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );

      expect(itemsEl[itemsEl.length - 1].getAttribute("value")).to.equal(
        "13:00"
      );
    });

    it('the last option should be 13:00 when assigned "13:15" by setter', async () => {
      const container = new DateTimePicker({ max: "10:15" });
      container.max = "13:15";
      const el = await fixture(container);
      const groupInputEl = el.querySelector(
        ".kuc-base-time__group"
      ) as HTMLDivElement;

      groupInputEl.click();
      await elementUpdated(container);

      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );

      expect(itemsEl[itemsEl.length - 1].getAttribute("value")).to.equal(
        "13:00"
      );
    });

    it("should throw error when set invalid value", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'max' property format is not valid.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new DateTimePicker({ max: "12,12" });
      fixture(container);
    });

    it("should throw error when it is less than min", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal(
          `"max" must be greater than or equal to "min".`
        );
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);
      const container = new DateTimePicker({ max: "10:00", min: "12:00" });
      fixture(container);
    });
  });
});
