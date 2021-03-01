import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

describe("confirm requiredIcon default value is false", () => {
  const container = new RadioButton();

  it("confirm requiredIcon default value is false", async () => {
    const el = await fixture(container);
    const requiredIconEl = el.querySelector(
      ".kuc-radio-button__group__label__required-icon"
    ) as HTMLSpanElement;
    await expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(window.getComputedStyle(requiredIconEl).display).to.be.equal(
      "none"
    );
  });
});

describe("requiredIcon constructor set successfully", () => {
  const container = new RadioButton({ requiredIcon: true });

  it("requiredIcon constructor set successfully", async () => {
    const el = await fixture(container);
    const requiredIconEl = el.querySelector(
      ".kuc-radio-button__group__label__required-icon"
    ) as HTMLSpanElement;
    await expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(window.getComputedStyle(requiredIconEl).display).to.be.equal(
      "inline"
    );
  });
});

describe("requiredIcon prop set to true successfully", () => {
  const container = new RadioButton({ requiredIcon: false });
  container.requiredIcon = true;

  it("requiredIcon prop set to true successfully", async () => {
    const el = await fixture(container);
    const requiredIconEl = el.querySelector(
      ".kuc-radio-button__group__label__required-icon"
    ) as HTMLSpanElement;
    await expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(window.getComputedStyle(requiredIconEl).display).to.be.equal(
      "inline"
    );
  });
});

describe("requiredIcon set to false successfully", () => {
  const container = new RadioButton({ requiredIcon: true });
  container.requiredIcon = false;

  it("requiredIcon prop set to false successfully", async () => {
    const el = await fixture(container);
    const requiredIconEl = el.querySelector(
      ".kuc-radio-button__group__label__required-icon"
    ) as HTMLSpanElement;
    await expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(window.getComputedStyle(requiredIconEl).display).to.be.equal(
      "none"
    );
  });
});

describe("requiredIcon constructor set to null successfully", () => {
  // @ts-ignore
  const container = new RadioButton({ requiredIcon: null });

  it("requiredIcon constructor set to null successfully", async () => {
    const el = await fixture(container);
    const requiredEl = el.querySelector(
      ".kuc-radio-button__group__label__required-icon"
    ) as HTMLSpanElement;
    await expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(window.getComputedStyle(requiredEl).display).to.be.equal(
      "none"
    );
  });
});

describe("requiredIcon prop set to null successfully", () => {
  const container = new RadioButton();
  // @ts-ignore
  container.requiredIcon = null;

  it("requiredIcon prop set to null successfully", async () => {
    const el = await fixture(container);
    const requiredEl = el.querySelector(
      ".kuc-radio-button__group__label__required-icon"
    ) as HTMLSpanElement;
    await expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(window.getComputedStyle(requiredEl).display).to.be.equal(
      "none"
    );
  });
});
