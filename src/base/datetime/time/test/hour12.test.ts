import { expect, fixture } from "@open-wc/testing";
import { BaseDateTime } from "../index";

describe("BaseTime", () => {
  describe("hour12", () => {
    it("should be false when not assigning", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.value = "13:15";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.hour12).to.be.equal(false);
      expect(inputEl.value).to.be.equal("13:15");
    });

    it("should be true when assigned true by setter", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.value = "13:15";
      container.hour12 = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.hour12).to.be.equal(true);
      expect(inputEl.value).to.be.equal("01:15 PM");
    });

    it("should be false when change to false", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.value = "13:15";
      container.hour12 = true;
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
