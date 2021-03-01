import { expect, fixture } from "@open-wc/testing";
import { MobileNotification } from "../index";

describe("text default prop is null", () => {
  const container = new MobileNotification({});

  it("text default prop is null", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-mobile-notification__notification__title"
    )) as HTMLParagraphElement;
    await expect(textEl.textContent!.trim()).to.have.equals("");
  });
});

describe("text constructor set successfully", () => {
  const container = new MobileNotification({ text: "Error occurred!" });

  it("text constructor set successfully", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-mobile-notification__notification__title"
    )) as HTMLParagraphElement;
    await expect(textEl.textContent!.trim()).to.have.equals("Error occurred!");
  });
});

describe("text prop replace successfully", () => {
  const container = new MobileNotification({ text: "Nothing occurred!" });
  container.text = "Error occurred!";

  it("text prop replace successfully", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-mobile-notification__notification__title"
    )) as HTMLParagraphElement;
    await expect(textEl.textContent!.trim()).to.have.equals("Error occurred!");
  });
});

describe("text constructor set successfully with null", () => {
  // @ts-expect-error
  const container = new MobileNotification({ text: null });

  it("text constructor set successfully with null", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-mobile-notification__notification__title"
    )) as HTMLParagraphElement;
    await expect(textEl.textContent!.trim()).to.have.equals("");
  });
});

describe("text prop set successfully with null", () => {
  const container = new MobileNotification({});
  // @ts-expect-error
  container.text = null;

  it("text prop set successfully with null", async () => {
    const el = await fixture(container);
    const textEl = (await el.querySelector(
      ".kuc-mobile-notification__notification__title"
    )) as HTMLParagraphElement;
    await expect(textEl.textContent!.trim()).to.have.equals("");
  });
});
