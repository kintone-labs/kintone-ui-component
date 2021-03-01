import { expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("text default prop is null", () => {
  const container = new Button({});

  it("text default prop is null", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("");
  });
});

describe("text default prop set successfully", () => {
  const container = new Button({ text: "Alert" });

  it("text default prop set successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("Alert");
  });
});

describe("text prop replace successfully", () => {
  const container = new Button({ text: "Alert" });
  container.text = "update";

  it("text prop replace successfully", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("update");
  });
});

describe("text default prop set to null", () => {
  // @ts-ignore
  const container = new Button({ text: null });

  it("text default prop set to null", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("");
  });
});

describe("text prop set to null", () => {
  const container = new Button({});
  // @ts-ignore
  container.text = null;

  it("text prop set to null", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.innerText).to.have.equals("");
  });
});
