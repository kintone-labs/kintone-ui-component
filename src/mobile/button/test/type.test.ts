import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("type default prop is normal", () => {
  const container = new MobileButton({});

  it("type default prop is normal", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(
      [
        "kuc-mobile-button__button",
        "kuc-mobile-button__button--normal"
      ].every(c => buttonEl.classList.contains(c))
    ).to.be.true;
  });
});

describe("type prop set to normal successfully", () => {
  const container = new MobileButton({
    type: "submit"
  });
  container.type = "normal";

  it("type prop set to normal successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(
      [
        "kuc-mobile-button__button",
        "kuc-mobile-button__button--normal"
      ].every(c => buttonEl.classList.contains(c))
    ).to.be.true;
  });
});

describe("type prop set to submit successfully", () => {
  const container = new MobileButton({
    type: "normal"
  });
  container.type = "submit";

  it("type prop set to submit successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(
      [
        "kuc-mobile-button__button",
        "kuc-mobile-button__button--submit"
      ].every(c => buttonEl.classList.contains(c))
    ).to.be.true;
  });
});

describe("type default prop set to null", () => {
  // @ts-ignore
  const container = new MobileButton({ type: null });

  it("type default prop set to null", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(
      [
        "kuc-mobile-button__button",
        "kuc-mobile-button__button--normal"
      ].every(c => buttonEl.classList.contains(c))
    ).to.be.true;
  });
});

describe("type prop set to null successfully", () => {
  const container = new MobileButton({
    type: "normal"
  });

  // @ts-ignore
  container.type = null;

  it("type prop set to null successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(
      [
        "kuc-mobile-button__button",
        "kuc-mobile-button__button--normal"
      ].every(c => buttonEl.classList.contains(c))
    ).to.be.true;
  });
});
