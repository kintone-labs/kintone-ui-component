import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("confirm value default prop is null", () => {
  const container = new MobileText();

  it("confirm value default prop is null", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("");
  });
});

describe("value constructor set successfully", () => {
  const container = new MobileText({ value: "Apple" });

  it("value constructor set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("Apple");
  });
});

describe("value prop set successfully", () => {
  const container = new MobileText();
  container.value = "Apple";

  it("value prop set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("Apple");
  });
});

describe("value prop replace successfully", () => {
  const container = new MobileText({ value: "Orange" });
  container.value = "Apple";

  it("value prop replace successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("Apple");
  });
});
