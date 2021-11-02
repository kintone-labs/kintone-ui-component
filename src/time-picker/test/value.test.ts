import { expect, fixture } from "@open-wc/testing";
import { TimePicker } from "../index";

describe("TimePicker", () => {
  describe("value", () => {
    it("should be empty string when not assigned on constructor", async () => {
      const container = new TimePicker();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("");
    });

    it('should be "13:15" when assigned "13:15" on constructor', async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("13:15");
    });

    it('should be "01:15 PM" when assigned "13:15" and hour12 to "true" on constructor', async () => {
      const container = new TimePicker({ value: "13:15", hour12: true });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("01:15 PM");
    });

    it('should be "13:15" when set "13:15" by setter', async () => {
      const container = new TimePicker();
      container.value = "13:15";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("13:15");
    });

    it('should be "01:15 PM" when set "13:15" and hour12 to "true" by setter', async () => {
      const container = new TimePicker();
      container.value = "13:15";
      container.hour12 = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("01:15 PM");
    });

    it('should be changed to "14:15" when set "14:15" by setter', async () => {
      const container = new TimePicker({ value: "13:15" });
      container.value = "14:15";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("14:15");
    });
  });
});
