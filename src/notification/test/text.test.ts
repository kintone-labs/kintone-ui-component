import { expect, fixture } from "@open-wc/testing";
import { Notification } from "../index";

describe("text default prop is null", () => {
  const container = new Notification({});

  it("text default prop is null", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-notification__notification__title"
    )) as HTMLSpanElement;
    await expect(textEl.innerText).to.have.equals("");
  });
});

describe("text constructor set successfully", () => {
  const container = new Notification({ text: "Error occurred!" });
  container.open();

  it("text constructor set successfully", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-notification__notification__title"
    )) as HTMLSpanElement;
    await expect(textEl.innerText).to.have.equals("Error occurred!");
  });
});

describe("text prop replace successfully", () => {
  const container = new Notification({ text: "Nothing occurred!" });
  container.open();
  container.text = "Error occurred!";

  it("text prop replace successfully", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-notification__notification__title"
    )) as HTMLSpanElement;
    await expect(textEl.innerText).to.have.equals("Error occurred!");
  });
});

describe("text constructor set successfully with null", () => {
  // @ts-ignore
  const container = new Notification({ text: null });

  it("text constructor set successfully with null", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-notification__notification__title"
    )) as HTMLSpanElement;
    await expect(textEl.innerText).to.have.equals("");
  });
});

describe("text prop set successfully with null", () => {
  const container = new Notification({});
  // @ts-ignore
  container.text = null;

  it("text prop set successfully with null", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-notification__notification__title"
    )) as HTMLSpanElement;
    await expect(textEl.innerText).to.have.equals("");
  });
});
