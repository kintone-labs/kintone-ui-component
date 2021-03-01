import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("className default prop is null", () => {
  const container = new MobileButton();

  it("className default prop is null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(0);
  });
});

describe("className constructor set successfully", () => {
  const container = new MobileButton({
    className: "options-class"
  });

  it("className constructor set successfully", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("options-class");
  });
});

describe("className prop replace successfully", () => {
  const container = new MobileButton({
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
  const container = new MobileButton({ className: null });

  it("className default prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("null");
  });
});

describe("className prop set to null", () => {
  const container = new MobileButton();
  // @ts-ignore
  container.className = null;

  it("className prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("null");
  });
});
