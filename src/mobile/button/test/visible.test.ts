import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("visible default prop is true", () => {
  const container = new MobileButton({});

  it("visible default prop is true", async () => {
    const el = await fixture(container);
    await expect(el).to.be.displayed;
  });
});

describe("visible constructor set to true successfully", () => {
  const container = new MobileButton({ visible: false });

  it("visible constructor set to true successfully", async () => {
    const el = await fixture(container);
    await expect(el).not.to.be.displayed;
  });
});

describe("visible prop set to true successfully", () => {
  const container = new MobileButton({
    visible: false
  });
  container.visible = true;

  it("visible prop set to true successfully", async () => {
    const el = await fixture(container);
    await expect(el).to.be.displayed;
  });
});

describe("visible prop set to false successfully", () => {
  const container = new MobileButton({
    visible: true
  });
  container.visible = false;

  it("visible prop set to false successfully", async () => {
    const el = await fixture(container);
    await expect(el).not.to.be.displayed;
  });
});

describe("visible default prop set to null", () => {
  // @ts-ignore
  const container = new MobileButton({ visible: null });

  it("visible default prop set to null", async () => {
    const el = await fixture(container);
    await expect(el).not.to.be.displayed;
  });
});

describe("visible prop set to null", () => {
  const container = new MobileButton({});
  // @ts-ignore
  container.visible = null;

  it("visible prop set to null", async () => {
    const el = await fixture(container);
    await expect(el).not.to.be.displayed;
  });
});
