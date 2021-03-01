import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("confirm className default prop is null", () => {
  const container = new Text();

  it("confirm className default prop is null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(0);
  });
});

describe("className constructor set successfully", () => {
  const container = new Text({ className: "options-class" });

  it("className constructor set successfully'", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("options-class")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});

describe("className prop set successfully", () => {
  const container = new Text();
  container.className = "options-class";

  it("className prop set successfully'", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("options-class")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});

describe("className prop replace successfully", () => {
  const container = new Text({ className: "options-class" });
  container.className = "replace-class";

  it("className prop replace successfully'", async () => {
    const el = await fixture(container);
    await expect(el.classList.contains("replace-class")).to.be.equal(true);
    await expect(el.classList.length).to.be.equal(1);
  });
});

describe("className default prop set to null", () => {
  // @ts-ignore
  const container = new Text({ className: null });

  it("className default prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("null");
  });
});

describe("className prop set to null", () => {
  const container = new Text();
  // @ts-ignore
  container.className = null;

  it("className prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.classList.length).to.be.equal(1);
    await expect(el.className).to.have.equals("null");
  });
});
