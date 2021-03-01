import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("confirm visible default prop is true", () => {
  const container = new TextArea();

  it("confirm visible default prop is true", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(false);
    await expect(window.getComputedStyle(el).display).to.be.equal(
      "inline-block"
    );
  });
});

describe("visible constructor set to true successfully", () => {
  const container = new TextArea({ visible: false });

  it("visible constructor set to true successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible prop set to true successfully", () => {
  const container = new TextArea({ visible: false });
  container.visible = true;

  it("visible prop set to true successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(false);
    await expect(window.getComputedStyle(el).display).to.be.equal(
      "inline-block"
    );
  });
});

describe("visible prop set to false successfully", () => {
  const container = new TextArea({ visible: true });
  container.visible = false;

  it("visible prop set to false successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible default prop set to null successfully", () => {
  // @ts-ignore
  const container = new TextArea({ visible: null });

  it("visible default prop set to true successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible prop set to null successfully", () => {
  const container = new TextArea();
  // @ts-ignore
  container.visible = null;

  it("visible prop set to null successfully'", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});
