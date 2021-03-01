import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("confirm requiredIcon default prop is false", () => {
  const container = new TextArea();

  it("confirm requiredIcon default prop is false", async () => {
    const el = await fixture(container);
    const requiredEl = (await el.querySelector(
      ".kuc-textarea__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(window.getComputedStyle(requiredEl).display).to.be.equal(
      "none"
    );
  });
});

describe("requiredIcon constructor set to true successfully", () => {
  const container = new TextArea({ requiredIcon: true });

  it("requiredIcon constructor set to true successfully", async () => {
    const el = await fixture(container);
    const requiredIconEl = (await el.querySelector(
      ".kuc-textarea__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(window.getComputedStyle(requiredIconEl).display).to.be.equal(
      "inline"
    );
  });
});

describe("requiredIcon prop set to false successfully", () => {
  const container = new TextArea({ requiredIcon: true });
  container.requiredIcon = false;

  it("requiredIcon prop set to false successfully", async () => {
    const el = await fixture(container);
    const requiredIconEl = (await el.querySelector(
      ".kuc-textarea__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredIconEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(window.getComputedStyle(requiredIconEl).display).to.be.equal(
      "none"
    );
  });
});

describe("requiredIcon default prop set to null successfully", () => {
  // @ts-ignore
  const container = new TextArea({ requiredIcon: null });

  it("requiredIcon default prop set to null successfully", async () => {
    const el = await fixture(container);
    const requiredEl = (await el.querySelector(
      ".kuc-textarea__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(window.getComputedStyle(requiredEl).display).to.be.equal(
      "none"
    );
  });
});

describe("requiredIcon prop set to null successfully", () => {
  const container = new TextArea();
  // @ts-ignore
  container.requiredIcon = null;

  it("requiredIcon prop set to null successfully", async () => {
    const el = await fixture(container);
    const requiredEl = (await el.querySelector(
      ".kuc-textarea__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(window.getComputedStyle(requiredEl).display).to.be.equal(
      "none"
    );
  });
});
