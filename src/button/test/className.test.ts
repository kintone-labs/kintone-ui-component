import { expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("className default prop is null", () => {
  const container = new Button();

  it("className default prop is null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(0);
  });
});

describe("className default prop set successfully", () => {
  const container = new Button({
    className: "options-class"
  });

  it("className default prop set successfully", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("options-class");
  });
});

describe("className prop replace successfully", () => {
  const container = new Button({
    className: "options-class"
  });
  container.className = "replace-class";

  it("className prop replace successfully'", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("replace-class");
  });
});

describe("className default prop set to null", () => {
  // @ts-ignore
  const container = new Button({ className: null });

  it("className default prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("null");
  });
});

describe("className prop set to null", () => {
  const container = new Button();
  // @ts-ignore
  container.className = null;

  it("className prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("null");
  });
});
