import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

describe("confirm error default value is null", () => {
  const container = new MobileRadioButton();

  it("confirm error default value is null", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(
      ".kuc-mobile-radio-button__error"
    ) as HTMLDivElement;
    const errorMessage = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(errorMessage!.trim()).to.be.equal("");
  });
});

describe("error constructor set successfully", () => {
  const container = new MobileRadioButton({ error: "Error occurred!" });

  it("error constructor set successfully", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(
      ".kuc-mobile-radio-button__error"
    ) as HTMLDivElement;
    const errorMessage = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(errorMessage!.trim()).to.be.equal("Error occurred!");
  });
});

describe("error prop replace successfully", () => {
  const container = new MobileRadioButton({ error: "options-error" });
  container.error = "Error occurred!";

  it("error prop replace successfully", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(
      ".kuc-mobile-radio-button__error"
    ) as HTMLDivElement;
    const errorMessage = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(errorMessage!.trim()).to.be.equal("Error occurred!");
  });
});

describe("error constructor set to null successfully", () => {
  // @ts-expect-error
  const container = new MobileRadioButton({ error: null });

  it("error constructor set to null successfully", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(
      ".kuc-mobile-radio-button__error"
    ) as HTMLDivElement;
    const errorMessage = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(errorMessage!.trim()).to.be.equal("");
  });
});

describe("error prop set to null successfully", () => {
  const container = new MobileRadioButton({ error: "Error occurred!" });
  // @ts-expect-error
  container.error = null;

  it("error prop set to null successfully", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(
      ".kuc-mobile-radio-button__error"
    ) as HTMLDivElement;
    const errorMessage = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(errorMessage!.trim()).to.be.equal("");
  });
});
