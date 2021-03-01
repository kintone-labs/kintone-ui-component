import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("className default prop is null", () => {
  const container = new Dropdown();

  it("className default prop is null", async () => {
    const el = await fixture(container);
    expect(el.classList.length).to.be.equal(0);
  });
});

describe("className default prop set successfully", () => {
  const container = new Dropdown({ className: "options-class" });

  it("className default prop set successfully", async () => {
    const el = await fixture(container);
    expect(el.classList.length).to.be.equal(1);
    expect(el.className).to.have.equal("options-class");
  });
});

describe("className prop replace successfully", () => {
  const container = new Dropdown({
    className: "options-class"
  });
  container.className = "replace-class";

  it("className prop replace successfully'", async () => {
    const el = await fixture(container);
    expect(el.classList.length).to.be.equal(1);
    expect(el.className).to.have.equal("replace-class");
  });
});

describe("className default prop set to null", () => {
  // @ts-ignore
  const container = new Dropdown({ className: null });

  it("className default prop set to null", async () => {
    const el = await fixture(container);
    expect(el.classList.length).to.be.equal(1);
    expect(el.className).to.have.equal("null");
  });
});

describe("className prop set to null", () => {
  const container = new Dropdown();
  // @ts-ignore
  container.className = null;

  it("className prop set to null", async () => {
    const el = await fixture(container);
    expect(el.classList.length).to.be.equal(1);
    expect(el.className).to.have.equal("null");
  });
});
