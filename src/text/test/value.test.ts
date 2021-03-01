import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("confirm value default prop is null", () => {
  const container = new Text();

  it("confirm value default prop is null", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("");
  });
});

describe("value constructor set successfully", () => {
  const container = new Text({ value: "Apple" });

  it("value constructor set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("Apple");
  });
});

describe("value prop set successfully", () => {
  const container = new Text();
  container.value = "Apple";

  it("value prop set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("Apple");
  });
});

describe("value prop replace successfully", () => {
  const container = new Text({ value: "Orange" });
  container.value = "Apple";

  it("value prop replace successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("Apple");
  });
});
