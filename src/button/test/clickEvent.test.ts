import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("Button", () => {
  describe("clickEvent", () => {
    it("should be triggered click event", async () => {
      const container = new Button({});
      container.addEventListener("click", (event: MouseEvent) => {
        container.text = event.type;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(buttonEl.innerText).to.equal("click");
    });

    it("should be not triggered click event when disabled", async () => {
      const container = new Button({
        disabled: true,
        text: "no event",
      });
      container.addEventListener("click", (event: MouseEvent) => {
        container.text = event.type;
      });

      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;

      buttonEl.click();
      await elementUpdated(buttonEl);

      expect(buttonEl.innerText).to.equal("no event");
    });
  });
});
