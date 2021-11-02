import { expect, fixture } from "@open-wc/testing";
import { TimePicker } from "../index";

describe("BaseTime", () => {
  describe("hour12", () => {
    it("should be false when not assigning on constructor", async () => {
      const container = new TimePicker({ value: "13:15" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.hour12).to.be.equal(false);
      expect(inputEl.value).to.be.equal("13:15");
    });

    it("should be true when assigned true by setter", async () => {
      const container = new TimePicker({ value: "13:15" });
      container.hour12 = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.hour12).to.be.equal(true);
      expect(inputEl.value).to.be.equal("01:15 PM");
    });

    it("should be false when change to false by setter", async () => {
      const container = new TimePicker({ value: "13:15", hour12: true });
      container.hour12 = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.hour12).to.be.equal(false);
      expect(inputEl.value).to.be.equal("13:15");
    });
  });
});
