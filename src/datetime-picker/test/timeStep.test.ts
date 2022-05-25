import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { DateTimePicker } from "../index";

describe("DateTimePicker", () => {
  describe("timeStep", () => {
    it("Time step should be 30 when not assigning", async () => {
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
      expect(itemsEl[1].getAttribute("value")).to.equal("00:30");
    });

    it('Time step should be 60 when assigned "60" by constructor', async () => {
      const container = new DateTimePicker({ timeStep: 60 });
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
      expect(itemsEl[1].getAttribute("value")).to.equal("01:00");
    });

    it('Time step should be 60 when assigned "60" by setter', async () => {
      const container = new DateTimePicker();
      container.timeStep = 60;
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
      expect(itemsEl[1].getAttribute("value")).to.equal("01:00");
    });

    it("should throw error when assigned value is not number", async () => {
      // @ts-expect-error
      const container = new DateTimePicker({ timeStep: "" });
      try {
        const el = await fixture(container);
      } catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'timeStep' property is not number");
      }
    });

    it("should throw error when set invalid value", async () => {
      const container = new DateTimePicker({ timeStep: -1 });
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

    it("should throw error when it is too large", async () => {
      const container = new DateTimePicker({
        timeStep: 130,
        min: "10:00",
        max: "12:00"
      });
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
  });
});
