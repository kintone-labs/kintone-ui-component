import { expect, fixture } from "@open-wc/testing";
import { ReadOnlyTable } from "../index";

describe("confirm visible default prop is true", () => {
  const container = new ReadOnlyTable();

  it("confirm visible default prop is true", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(false);
    await expect(window.getComputedStyle(el).display).to.be.equal("block");
  });
});

describe("visible constructor set to false successfully", () => {
  const container = new ReadOnlyTable({ visible: false });
  it("visible constructor set to false successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible prop set to true successfully", () => {
  const container = new ReadOnlyTable({ visible: false });
  container.visible = true;

  it("visible prop set to true successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(false);
    await expect(window.getComputedStyle(el).display).to.be.equal("block");
  });
});

describe("visible prop set to false successfully", () => {
  const container = new ReadOnlyTable({ visible: true });
  container.visible = false;

  it("visible prop set to false successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible constructor set to null successfully", () => {
  // @ts-ignore
  const container = new ReadOnlyTable({ visible: null });

  it("visible constructor set to null successfully", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible prop set to null successfully", () => {
  const container = new ReadOnlyTable({ visible: true });
  // @ts-ignore
  container.visible = null;

  it("visible prop set to null successfully", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});
