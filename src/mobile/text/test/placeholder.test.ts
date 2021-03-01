import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("confirm placeholder default prop is null", () => {
  const container = new MobileText();

  it("confirm placeholder default prop is null", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    expect(inputEl.placeholder).to.be.equal("");
  });
});

describe("placeholder constructor set successfully", () => {
  const container = new MobileText({ placeholder: "Apple" });

  it("placeholder constructor set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    await expect(inputEl.placeholder).to.be.equal("Apple");
  });
});

describe("placeholder prop set successfully", () => {
  const container = new MobileText();
  container.placeholder = "Apple";

  it("placeholder prop set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    expect(inputEl.placeholder).to.be.equal("Apple");
  });
});

describe("placeholder prop replace successfully", () => {
  const container = new MobileText({ placeholder: "Orange" });
  container.placeholder = "Apple";

  it("placeholder prop replace successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    expect(inputEl.placeholder).to.be.equal("Apple");
  });
});
