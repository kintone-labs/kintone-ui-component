import { expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("Button", () => {
  describe("disabled", () => {
    it("should not be added into button element when not set on constructor", async () => {
      const container = new Button();
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl).to.not.have.attr("disabled");
    });

    it("should be added into button element when set to true on constructor", async () => {
      const container = new Button({ disabled: true });
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl).to.have.attr("disabled");
    });

    it("should be added into button element when changed to true by setter", async () => {
      const container = new Button({ disabled: false });
      container.disabled = true;
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl).to.have.attr("disabled");
    });

    it("should not be added into button element when changed to false by setter", async () => {
      const container = new Button({ disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl).to.not.have.attr("disabled");
    });
  });
});
