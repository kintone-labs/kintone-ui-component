import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTime } from "../index";

describe("BaseTime", () => {
  describe("hour12", () => {
    it("should be using 24h hour clock when not assigning", async () => {
      const container = document.createElement("kuc-base-time");
      container.setAttribute("value", "13:15");
      const el = await fixture(container);

      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("13:15");
    });

    it("should be using 12h hour clock when assigned by setter", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.value = "13:15";
      container.hour12 = true;
      const el = await fixture(container);

      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("01:15 PM");
    });

    it("should be using 12h hour clock when assigned by setter", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.value = "05:30";
      container.hour12 = true;
      const el = await fixture(container);

      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("05:30 AM");
    });

    it("should be using 24h hour clock when changed from to false", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.hour12 = true;
      container.value = "13:15";
      container.hour12 = false;
      const el = await fixture(container);

      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;
      expect(inputEl.value).to.be.equal("13:15");
    });
  });
});
