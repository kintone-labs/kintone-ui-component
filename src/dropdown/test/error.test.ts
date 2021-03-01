import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("error default prop is null", () => {
  const container = new Dropdown({});

  it("error default prop is null", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(".kuc-dropdown__error") as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(errorEl).not.to.be.displayed;
  });
});

describe("error default prop set successfully", () => {
  const container = new Dropdown({ error: "error-message" });

  it("error default prop set successfully", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(".kuc-dropdown__error") as HTMLSpanElement;
    expect(errorEl.innerText).to.have.equal("error-message");
    // eslint-disable-next-line no-unused-expressions
    expect(errorEl).to.be.displayed;
  });
});

describe("error prop replace successfully", () => {
  const container = new Dropdown({
    error: "error-message"
  });
  container.error = "replace-error";

  it("error prop replace successfully", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(".kuc-dropdown__error") as HTMLSpanElement;
    expect(errorEl.innerText).to.have.equal("replace-error");
    // eslint-disable-next-line no-unused-expressions
    expect(errorEl).to.be.displayed;
  });
});

describe("error defaoult prop set to null", () => {
  const container = new Dropdown({
    // @ts-ignore
    error: null
  });

  it("error default prop set to null", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(".kuc-dropdown__error") as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(errorEl).not.to.be.displayed;
  });
});

describe("error prop set to null", () => {
  const container = new Dropdown({
    error: "error-message"
  });
  // @ts-ignore
  container.error = null;

  it("error prop set to null", async () => {
    const el = await fixture(container);
    const errorEl = el.querySelector(".kuc-dropdown__error") as HTMLSpanElement;
    // eslint-disable-next-line no-unused-expressions
    expect(errorEl).not.to.be.displayed;
  });
});
