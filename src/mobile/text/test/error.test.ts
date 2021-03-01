import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("confirm error default prop is null", () => {
  const container = new MobileText();

  it("confirm error default prop is null", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-mobile-text__error"
    )) as HTMLDivElement;
    const errorText = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(errorText!.trim()).to.be.equal("");
  });
});

describe("error constructor set successfully", () => {
  const container = new MobileText({ error: "Error occurred!" });

  it("error constructor set successfully'", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-mobile-text__error"
    )) as HTMLDivElement;
    const errorText = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(errorText!.trim()).to.be.equal("Error occurred!");
  });
});

describe("error prop set successfully", () => {
  const container = new MobileText();
  container.error = "Error occurred!";

  it("error prop set successfully'", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-mobile-text__error"
    )) as HTMLDivElement;
    const errorText = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(errorText!.trim()).to.be.equal("Error occurred!");
  });
});

describe("error prop replace successfully", () => {
  const container = new MobileText({ error: "options-error" });
  container.error = "Error occurred!";

  it("error prop replace successfully", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-mobile-text__error"
    )) as HTMLDivElement;
    const errorText = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(errorText!.trim()).to.be.equal("Error occurred!");
  });
});

describe("error prop set to null successfully", () => {
  const container = new MobileText({ error: "Error occurred!" });
  // @ts-expect-error
  container.error = null;

  it("error prop set to null successfully", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-mobile-text__error"
    )) as HTMLDivElement;
    const errorText = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(errorText!.trim()).to.be.equal("");
  });
});
