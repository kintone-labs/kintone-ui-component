import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

describe("confirm visible default value is true", () => {
  const container = new MobileRadioButton();

  it("confirm visible default value is true", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(false);
    await expect(window.getComputedStyle(el).display).to.be.equal(
      "inline-block"
    );
  });
});

describe("visible constructor set successfully", () => {
  const container = new MobileRadioButton({ visible: false });

  it("visible constructor set successfully", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible prop set to true successfully", () => {
  const container = new MobileRadioButton({ visible: false });
  container.visible = true;

  it("visible prop set to true successfully", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(false);
    await expect(window.getComputedStyle(el).display).to.be.equal(
      "inline-block"
    );
  });
});

describe("visible prop set to false successfully", () => {
  const container = new MobileRadioButton({ visible: true });
  container.visible = false;

  it("visible prop set to false successfully", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible constructor set to null successfully", () => {
  // @ts-expect-error
  const container = new MobileRadioButton({ visible: null });

  it("visible constructor set to null successfully", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});

describe("visible prop set to null successfully", () => {
  const container = new MobileRadioButton({ visible: true });
  // @ts-expect-error
  container.visible = null;

  it("visible prop set to null successfully", async () => {
    const el = await fixture(container);
    await expect(el.hasAttribute("hidden")).to.have.equal(true);
    await expect(window.getComputedStyle(el).display).to.be.equal("none");
  });
});
