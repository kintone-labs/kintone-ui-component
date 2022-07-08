import { expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("Button", () => {
  describe("type", () => {
    it("should be normal when not assigning on constructor", async () => {
      const container = new Button();
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.classList.length).to.equal(2);
      expect(buttonEl.classList[0]).to.equal("kuc-button__button");
      expect(buttonEl.classList[1]).to.equal("kuc-button__button--normal");
    });

    it("should be normal when assigning by setter", async () => {
      const container = new Button({
        type: "submit",
      });
      container.type = "normal";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.classList.length).to.equal(2);
      expect(buttonEl.classList[0]).to.equal("kuc-button__button");
      expect(buttonEl.classList[1]).to.equal("kuc-button__button--normal");
    });

    it("should be alert when assigning alert by setter", async () => {
      const container = new Button({
        type: "normal",
      });
      container.type = "alert";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.classList.length).to.equal(2);
      expect(buttonEl.classList[0]).to.equal("kuc-button__button");
      expect(buttonEl.classList[1]).to.equal("kuc-button__button--alert");
    });

    it("should be submit when assigning submit by setter", async () => {
      const container = new Button({
        type: "normal",
      });
      container.type = "submit";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.classList.length).to.equal(2);
      expect(buttonEl.classList[0]).to.equal("kuc-button__button");
      expect(buttonEl.classList[1]).to.equal("kuc-button__button--submit");
    });

    it('should be normal when assigning a type other than "normal | alert | submit" by setter', async () => {
      const container = new Button({ type: "submit" });
      container.type = "other_type";
      const el = await fixture(container);
      const buttonEl = el.querySelector(
        ".kuc-button__button"
      ) as HTMLButtonElement;
      expect(buttonEl.classList.length).to.equal(2);
      expect(buttonEl.classList[0]).to.equal("kuc-button__button");
      expect(buttonEl.classList[1]).to.equal("kuc-button__button--normal");
    });
  });
});
