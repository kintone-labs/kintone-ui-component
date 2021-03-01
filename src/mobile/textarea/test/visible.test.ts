import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("confirm visible default prop is true", () => {
  const container = new MobileTextArea();

  it("confirm visible default prop is true", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(false);
    await expect(window.getComputedStyle(el).display).to.be.equal("block");
  });
});

describe("visible constructor set to true successfully", () => {
  const container = new MobileTextArea({ visible: false });

  it("visible constructor set to true successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible prop set to true successfully", () => {
  const container = new MobileTextArea({ visible: false });
  container.visible = true;

  it("visible prop set to true successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(false);
    await expect(window.getComputedStyle(el).display).to.be.equal("block");
  });
});

describe("visible prop set to false successfully", () => {
  const container = new MobileTextArea({ visible: true });
  container.visible = false;

  it("visible prop set to false successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible default prop set to null successfully", () => {
  // @ts-expect-error
  const container = new MobileTextArea({ visible: null });

  it("visible default prop set to true successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible prop set to null successfully", () => {
  const container = new MobileTextArea();
  // @ts-expect-error
  container.visible = null;

  it("visible prop set to null successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});
