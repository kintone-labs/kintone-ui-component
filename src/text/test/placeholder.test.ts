import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("confirm placeholder default prop is null", () => {
  const container = new Text();

  it("confirm placeholder default prop is null", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.placeholder).to.be.equal("");
  });
});

describe("placeholder constructor set successfully", () => {
  const container = new Text({ placeholder: "Apple" });

  it("placeholder constructor set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    await expect(inputEl.placeholder).to.be.equal("Apple");
  });
});

describe("placeholder prop set successfully", () => {
  const container = new Text();
  container.placeholder = "Apple";

  it("placeholder prop set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.placeholder).to.be.equal("Apple");
  });
});

describe("placeholder prop replace successfully", () => {
  const container = new Text({ placeholder: "Orange" });
  container.placeholder = "Apple";

  it("placeholder prop replace successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.placeholder).to.be.equal("Apple");
  });
});
