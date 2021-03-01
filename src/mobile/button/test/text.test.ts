import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("text default prop is null", () => {
  const container = new MobileButton({});

  it("text default prop is null", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("");
  });
});

describe("text default prop set successfully", () => {
  const container = new MobileButton({ text: "text" });

  it("text default prop set successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("text");
  });
});

describe("text prop replace successfully", () => {
  const container = new MobileButton({ text: "Alert" });
  container.text = "update";

  it("text prop replace successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("update");
  });
});

describe("text default prop set to null", () => {
  // @ts-ignore
  const container = new MobileButton({ text: null });

  it("text default prop set to null", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("");
  });
});

describe("text prop set successfully with null", () => {
  const container = new MobileButton({});
  // @ts-ignore
  container.text = null;

  it("text prop set successfully with null", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("");
  });
});
