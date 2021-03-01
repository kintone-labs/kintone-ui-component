import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("confirm disabled default prop is false", () => {
  const container = new MobileText();

  it("confirm disabled default prop is false", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-mobile-text__input-form__input"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
  });
});

describe("disabled constructor set successfully", () => {
  const container = new MobileText({ disabled: true });

  it("disabled constructor set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-mobile-text__input-form__input"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(true);
  });
});

describe("disabled prop set to true successfully", () => {
  const container = new MobileText({ disabled: false });
  container.disabled = true;

  it("disabled prop set to true successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-mobile-text__input-form__input"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(true);
  });
});

describe("disabled prop set to false successfully", () => {
  const container = new MobileText({ disabled: true });
  container.disabled = false;

  it("disabled prop set to false successfully'", async () => {
    const el = await fixture(container);
    const inputEl = (await el.querySelector(
      ".kuc-mobile-text__input-form__input"
    )) as HTMLInputElement;
    await expect(inputEl.hasAttribute("disabled")).to.have.equal(false);
  });
});
