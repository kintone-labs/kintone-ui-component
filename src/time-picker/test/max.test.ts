import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("max", () => {
    it("should show all options when not assigning", async () => {
      const container = new TimePicker();
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
      const container = new TimePicker({ max: "13:15" });
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
      const container = new TimePicker({ max: "10:15" });
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

    it("should throw error when set invalid value", async () => {
      const container = new TimePicker({ max: "12,12" });
      try {
        const el = await fixture(container);
      } catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.be.equal("Format is not valid.");
      }
    });

    it("should throw error when it is less than min", async () => {
      const container = new TimePicker({ max: "10:00", min: "12:00" });
      try {
        const el = await fixture(container);
      } catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.be.equal(
          '"min" must not be greater than "max".'
        );
      }
    });
  });
});