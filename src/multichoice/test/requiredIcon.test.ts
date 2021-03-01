import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("requiredIcon default prop is false", () => {
  const container = new MultiChoice({});

  it("requiredIcon default prop is false", async () => {
    const el = await fixture(container);
    const requiredEl = (await el.querySelector(
      ".kuc-multi-choice__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredEl).to.be.visible;
  });
});

describe("requiredIcon prop set to true successfully", () => {
  const container = new MultiChoice({ requiredIcon: true });

  it("requiredIcon prop set to true successfully", async () => {
    const el = await fixture(container);
    const requiredEl = (await el.querySelector(
      ".kuc-multi-choice__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredEl.innerText).to.have.equals("*");
  });
});

describe("requiredIcon prop set to true successfully", () => {
  const container = new MultiChoice({});
  container.requiredIcon = true;

  it("requiredIcon prop set to true successfully", async () => {
    const el = await fixture(container);
    const requiredEl = (await el.querySelector(
      ".kuc-multi-choice__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredEl.innerText).to.have.equals("*");
  });
});

describe("requiredIcon prop set to false successfully", () => {
  const container = new MultiChoice({});
  container.requiredIcon = false;

  it("requiredIcon prop set to false successfully", async () => {
    const el = await fixture(container);
    const requiredEl = (await el.querySelector(
      ".kuc-multi-choice__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredEl).to.be.visible;
  });
});

describe("requiredIcon default prop set to null", () => {
  // @ts-ignore
  const container = new MultiChoice({ requiredIcon: null });

  it("requiredIcon default prop set to null", async () => {
    const el = await fixture(container);
    const requiredEl = (await el.querySelector(
      ".kuc-multi-choice__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredEl).to.be.visible;
  });
});

describe("requiredIcon prop set to null", () => {
  const container = new MultiChoice({});
  // @ts-ignore
  container.requiredIcon = null;

  it("requiredIcon prop set to null", async () => {
    const el = await fixture(container);
    const requiredEl = (await el.querySelector(
      ".kuc-multi-choice__label__required-icon"
    )) as HTMLSpanElement;
    await expect(requiredEl).to.be.visible;
  });
});
