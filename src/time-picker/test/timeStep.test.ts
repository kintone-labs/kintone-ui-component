import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("timeStep", () => {
    it("Time step should be 30 when not assigning", async () => {
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
      expect(itemsEl[1].getAttribute("value")).to.equal("00:30");
    });

    it('Time step should be 60 when assigned "60" by constructor', async () => {
      const container = new TimePicker({ timeStep: 60 });
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
      const container = new TimePicker();
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

    it("should throw error when assigned value is not number", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'timeStep' property is not number.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new TimePicker({ timeStep: "" });
      fixture(container);
    });

    it("should throw error when set invalid value", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'timeStep' property format is not valid.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new TimePicker({ timeStep: -1 });
      fixture(container);
    });

    it("should throw error when it is too large", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'timeStep' property format is not valid.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);

      const container = new TimePicker({
        timeStep: 130,
        min: "10:00",
        max: "12:00",
      });
      fixture(container);
    });
  });
});
