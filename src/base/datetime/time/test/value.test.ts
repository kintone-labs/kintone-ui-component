import { expect, fixture } from "@open-wc/testing";
import "../index";

describe("BaseTime", () => {
  describe("value", () => {
    it("should be empty string when not assigning", async () => {
      const container = document.createElement("kuc-base-time");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("");
    });

    it('should be "11:15" when assigned "11:15" by setter', async () => {
      const container = document.createElement("kuc-base-time");
      container.setAttribute("value", "11:15");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("11:15");
    });

    it('should be "13:15" when changed to "13:15" by setter', async () => {
      const container = document.createElement("kuc-base-time");
      container.setAttribute("value", "11:15");
      container.setAttribute("value", "13:15");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("13:15");
    });

    it('should be "13:15" when assigned "01:15 PM" by setter', async () => {
      const container = document.createElement("kuc-base-time");
      container.setAttribute("value", "01:15 PM");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("13:15");
    });

    it('should be "01:15 PM" when assigned "13:15" and hour12 to true', async () => {
      const container = document.createElement("kuc-base-time");
      container.setAttribute("value", "13:15");
      container.setAttribute("hour12", "true");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("01:15 PM");
    });
  });
});
