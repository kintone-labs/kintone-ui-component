import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("requiredIcon default prop is false", () => {
  const container = new Dropdown({});

  it("requiredIcon default prop is false", async () => {
    const el = await fixture(container);
    const requiredEl = el.querySelector(
      ".kuc-dropdown__label__required-icon"
    ) as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(requiredEl).to.be.visible;
  });
});

describe("requiredIcon prop set to true successfully", () => {
  const container = new Dropdown({ requiredIcon: true });

  it("requiredIcon prop set to true successfully", async () => {
    const el = await fixture(container);
    const requiredEl = el.querySelector(
      ".kuc-dropdown__label__required-icon"
    ) as HTMLSpanElement;
    expect(requiredEl.innerText).to.have.equal("*");
  });
});

describe("requiredIcon prop set to true successfully", () => {
  const container = new Dropdown({});
  container.requiredIcon = true;

  it("requiredIcon prop set to true successfully", async () => {
    const el = await fixture(container);
    const requiredEl = el.querySelector(
      ".kuc-dropdown__label__required-icon"
    ) as HTMLSpanElement;
    expect(requiredEl.innerText).to.have.equal("*");
  });
});

describe("requiredIcon prop set to false successfully", () => {
  const container = new Dropdown({});
  container.requiredIcon = false;

  it("requiredIcon prop set to false successfully", async () => {
    const el = await fixture(container);
    const requiredEl = el.querySelector(
      ".kuc-dropdown__label__required-icon"
    ) as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(requiredEl).to.be.visible;
  });
});

describe("requiredIcon default prop set to null", () => {
  // @ts-ignore
  const container = new Dropdown({ requiredIcon: null });

  it("requiredIcon default prop set to null", async () => {
    const el = await fixture(container);
    const requiredEl = el.querySelector(
      ".kuc-dropdown__label__required-icon"
    ) as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(requiredEl).to.be.visible;
  });
});

describe("requiredIcon prop set to null", () => {
  const container = new Dropdown({});
  // @ts-ignore
  container.requiredIcon = null;

  it("requiredIcon prop set to null", async () => {
    const el = await fixture(container);
    const requiredEl = el.querySelector(
      ".kuc-dropdown__label__required-icon"
    ) as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(requiredEl).to.be.visible;
  });
});
