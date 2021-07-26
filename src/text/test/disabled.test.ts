import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Text", () => {
  describe("disabled", () => {
    it("should be not added into input element when not assigned in constructor", async () => {
      const container = new Text();
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;

      expect(inputEl).to.not.have.attr("disabled");
    });

    it("should be added into input element when assigned true in constructor", async () => {
      const container = new Text({ disabled: true });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;

      expect(inputEl).to.have.attr("disabled");
    });

    it("should be added into input element when changed to true by setter", async () => {
      const container = new Text({ disabled: false });
      container.disabled = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;

      expect(inputEl).to.have.attr("disabled");
    });

    it("should be not added into input element when changed to false by setter", async () => {
      const container = new Text({ disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input"
      ) as HTMLInputElement;

      expect(inputEl).to.not.have.attr("disabled");
    });
  });
});
