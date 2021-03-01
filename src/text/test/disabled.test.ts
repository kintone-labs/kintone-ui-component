import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("confirm disabled default prop is false", () => {
  const container = new Text();

  it("confirm disabled default prop is false", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
  });
});

describe("disabled constructor set successfully", () => {
  const container = new Text({ disabled: true });

  it("disabled constructor set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(true);
  });
});

describe("disabled prop set to true successfully", () => {
  const container = new Text({ disabled: false });
  container.disabled = true;

  it("disabled prop set to true successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(true);
  });
});

describe("disabled prop set to false successfully", () => {
  const container = new Text({ disabled: true });
  container.disabled = false;

  it("disabled prop set to false successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
  });
});
