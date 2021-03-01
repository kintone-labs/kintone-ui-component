import { expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("type default prop is normal", () => {
  const container = new Button({});

  it("type default prop is normal", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(
      ["kuc-button__button", "kuc-button__button--normal"].every(c =>
        buttonEl.classList.contains(c)
      )
    ).to.be.true;
  });
});

describe("type prop set to normal successfully", () => {
  const container = new Button({
    type: "submit"
  });
  container.type = "normal";

  it("type prop set to normal successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(
      ["kuc-button__button", "kuc-button__button--normal"].every(c =>
        buttonEl.classList.contains(c)
      )
    ).to.be.true;
  });
});

describe("type prop set to alert successfully", () => {
  const container = new Button({
    type: "normal"
  });
  container.type = "alert";

  it("type prop set to alert successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(
      ["kuc-button__button", "kuc-button__button--alert"].every(c =>
        buttonEl.classList.contains(c)
      )
    ).to.be.true;
  });
});

describe("type prop set to submit successfully", () => {
  const container = new Button({
    type: "normal"
  });
  container.type = "submit";

  it("type prop set to submit successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(
      ["kuc-button__button", "kuc-button__button--submit"].every(c =>
        buttonEl.classList.contains(c)
      )
    ).to.be.true;
  });
});

describe("type default prop set to null", () => {
  // @ts-ignore
  const container = new Button({ type: null });

  it("type default prop set to null", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(
      ["kuc-button__button", "kuc-button__button--normal"].every(c =>
        buttonEl.classList.contains(c)
      )
    ).to.be.true;
  });
});

describe("type prop set to null", () => {
  const container = new Button({ type: "normal" });
  // @ts-ignore
  container.type = null;

  it("type prop set to null", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(
      ["kuc-button__button", "kuc-button__button--normal"].every(c =>
        buttonEl.classList.contains(c)
      )
    ).to.be.true;
  });
});
