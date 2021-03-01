import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("confirm textAlign default prop is left", () => {
  const container = new MobileText();

  it("confirm textAlign default prop is left", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    await expect(inputEl.getAttribute("textalign")).to.be.equal("left");
    await expect(window.getComputedStyle(inputEl).textAlign).to.be.equal(
      "left"
    );
  });
});

describe("textAlign constructor set successfully", () => {
  const container = new MobileText({ textAlign: "right" });

  it("textAlign constructor set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    await expect(inputEl.getAttribute("textalign")).to.be.equal("right");
    await expect(window.getComputedStyle(inputEl).textAlign).to.be.equal(
      "right"
    );
  });
});

describe("textAlign prop set successfully", () => {
  const container = new MobileText();
  container.textAlign = "right";

  it("textAlign prop set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    await expect(inputEl.getAttribute("textalign")).to.be.equal("right");
    await expect(window.getComputedStyle(inputEl).textAlign).to.be.equal(
      "right"
    );
  });
});

describe("textAlign prop replace successfully", () => {
  const container = new MobileText({ textAlign: "left" });
  container.textAlign = "right";

  it("textAlign prop replace successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    await expect(inputEl.getAttribute("textalign")).to.be.equal("right");
    await expect(window.getComputedStyle(inputEl).textAlign).to.be.equal(
      "right"
    );
  });
});
