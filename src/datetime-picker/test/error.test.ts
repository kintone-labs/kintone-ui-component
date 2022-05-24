import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { DateTimePicker } from "../index";

describe("DateTimePicker", () => {
  describe("error", () => {
    it("should not display when not assigning in constructor", async () => {
      const container = new DateTimePicker();
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      expect(errorEl).has.attribute("hidden");
    });

    it('should be "error-message" when assigning in constructor', async () => {
      const container = new DateTimePicker({ error: "error-message" });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });

    it('should be "error-message" when setting by setter', async () => {
      const container = new DateTimePicker();
      container.error = "error-message";
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("error-message");
      expect(errorEl).not.has.attribute("hidden");
    });

    it('should be replaced by "replace-error" when changing by setter', async () => {
      const container = new DateTimePicker({ error: "error-message" });
      container.error = "replace-error";
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      expect(errorEl.innerText).to.equal("replace-error");
      expect(errorEl).not.has.attribute("hidden");
    });

    it("should have width equal label when label longer than input width", async () => {
      const container = new DateTimePicker({
        error: "error-message",
        label: "long label long label long label long label"
      });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;
      const labelEl = el.querySelector(
        ".kuc-datetime-picker__group__label"
      ) as HTMLDivElement;
      expect(errorEl.getBoundingClientRect().width).to.equal(
        labelEl.getBoundingClientRect().width
      );
    });

    it("should show `Format is not valid` when input invalid value", async () => {
      const container = new DateTimePicker({
        error: "error-message",
        label: "long label long label long label long label"
      });
      const el = await fixture(container);
      const dateInputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      dateInputEl.value = "aa-12-12";
      dateInputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      const errorEl = el.querySelector(
        ".kuc-base-error__error"
      ) as HTMLDivElement;

      expect(errorEl.innerText).to.equal("Format is not valid.");
    });
  });
});
