import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("MobileButton", () => {
  describe("type", () => {
    it("should be normal when not assigning on constructor", async () => {
      const container = new MobileButton();
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.classList.length).to.equal(2);
      expect(buttonEl.classList[0]).to.equal("kuc-mobile-button__button");
      expect(buttonEl.classList[1]).to.equal(
        "kuc-mobile-button__button--normal"
      );
    });

    it("should be normal when assigning by setter", async () => {
      const container = new MobileButton({
        type: "submit",
      });
      container.type = "normal";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.classList.length).to.equal(2);
      expect(buttonEl.classList[0]).to.equal("kuc-mobile-button__button");
      expect(buttonEl.classList[1]).to.equal(
        "kuc-mobile-button__button--normal"
      );
    });

    it("should be submit when assigning submit by setter", async () => {
      const container = new MobileButton({
        type: "normal",
      });
      container.type = "submit";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.classList.length).to.equal(2);
      expect(buttonEl.classList[0]).to.equal("kuc-mobile-button__button");
      expect(buttonEl.classList[1]).to.equal(
        "kuc-mobile-button__button--submit"
      );
    });
    it('should be normal when assigning a type other than "normal | alert | submit" by setter', async () => {
      const container = new MobileButton({
        type: "submit",
      });
      container.type = "other_type";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-mobile-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.classList.length).to.equal(2);
      expect(buttonEl.classList[0]).to.equal("kuc-mobile-button__button");
      expect(buttonEl.classList[1]).to.equal(
        "kuc-mobile-button__button--normal"
      );
    });
  });
});
