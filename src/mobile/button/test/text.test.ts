import { expect, fixture } from "@open-wc/testing";

import { MobileButton } from "../index";

describe("MobileButton", () => {
  describe("text", () => {
    it("should be null when not assigning on constructor", async () => {
      const container = new MobileButton();
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("");
    });

    it("should be 'text' when assigning on constructor", async () => {
      const container = new MobileButton({ text: "text" });
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("text");
    });

    it("should be replaced by 'update' when changed by setter", async () => {
      const container = new MobileButton({ text: "Alert" });
      container.text = "update";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.innerText).to.equal("update");
    });
  });
});
