import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("MobileButton", () => {
  describe("clickEvent", () => {
    it("should be triggered click event", async () => {
      const container = new MobileButton({});
      container.addEventListener("click", (event: MouseEvent) => {
        container.text = event.type;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(buttonEl.innerText).to.equal("click");
    });

    it("should be not triggered click event when disabled", async () => {
      const container = new MobileButton({
        disabled: true,
        text: "no event",
      });
      container.addEventListener("click", (event: MouseEvent) => {
        container.text = event.type;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(buttonEl.innerText).to.equal("no event");
    });
  });
});
