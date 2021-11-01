import { expect, fixture } from "@open-wc/testing";
import { BaseDateTime } from "../index";

describe("BaseTime", () => {
  describe("disabled", () => {
    it("should be not added into input element when not assigned", async () => {
      const container = document.createElement("kuc-base-time");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
    });

    it("should be added into input element when assigned true", async () => {
      const container = document.createElement("kuc-base-time");
      container.setAttribute("disabled", "true");
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be added into input element when changed to true", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.disabled = false;
      container.disabled = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(true);
    });

    it("should be not added into input element when changed to false by setter", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.disabled = true;
      container.disabled = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(inputEl.hasAttribute("disabled")).to.equal(false);
    });
  });
});
