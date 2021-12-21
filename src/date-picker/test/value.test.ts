import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { DatePicker } from "../index";

describe("DatePicker", () => {
  describe("value", () => {
    it("should be empty string when not assigning", async () => {
      const container = new DatePicker();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("");
    });

    it('should be "12/12/2021" when assigning on constructor', async () => {
      const container = new DatePicker({ value: "2021-12-12" });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("12/12/2021");
    });

    it('should be "12/13/2021" when changed to "12/13/2021" by setter', async () => {
      const container = new DatePicker({ value: "2021-12-12" });
      container.value = "2021-12-13";
      const el = await fixture(container);
      el.setAttribute("value", "13:15");
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      expect(inputEl.value).to.be.equal("12/13/2021");
    });

    it("should throw error when set invalid value", async () => {
      const container = new DatePicker({ value: "12,12" });
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

    it("should throw error when set invalid value", async () => {
      const container = new DatePicker({ value: "2021-02-31" });
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
