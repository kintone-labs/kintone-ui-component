import { expect, fixture } from "@open-wc/testing";

import { Button } from "../index";

describe("Button", () => {
  describe("text", () => {
    it("should be null when not assigning on constructor", async () => {
      const container = new Button();
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("");
    });

    it("should be 'text' when assigning on constructor", async () => {
      const container = new Button({ text: "text" });
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("text");
    });

    it("should be replaced by 'update' when changed by setter", async () => {
      const container = new Button({ text: "Alert" });
      container.text = "update";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("update");
    });
  });
});
