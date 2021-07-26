import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("MobileButton", () => {
  describe("disabled", () => {
    it("should not be added into button element when not assigned in constructor", async () => {
      const container = new MobileButton({});
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl).to.not.have.attr("disabled");
    });

    it("should be added into button element when assigned true in constructor", async () => {
      const container = new MobileButton({ disabled: true });
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl).to.have.attr("disabled");
    });

    it("should be added into button element when changed to true by setter", async () => {
      const container = new MobileButton({ disabled: false });
      container.disabled = true;
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl).to.have.attr("disabled");
    });

    it("should not be added into button element when changed to false by setter", async () => {
      const container = new MobileButton({ disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;

      expect(buttonEl).to.not.have.attr("disabled");
    });
  });
});
