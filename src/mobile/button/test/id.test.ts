import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("id default prop is null", () => {
  const container = new MobileButton({});

  it("id default prop is null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equals("");
  });
});

describe("id constructor set successfully", () => {
  const container = new MobileButton({ id: "options-id" });

  it("id constructor set successfully", async () => {
    const el = await fixture(container);
    await expect(el.id).to.have.equals("options-id");
  });
});

describe("id prop replace successfully", () => {
  const container = new MobileButton({
    id: "options-id"
  });
  container.id = "replace-id";

  it("id prop replace successfully", async () => {
    const el = await fixture(container);
    await expect(el.id).to.have.equals("replace-id");
  });
});

describe("id default prop set to null", () => {
  // @ts-ignore
  const container = new MobileButton({ id: null });

  it("id default prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equals("null");
  });
});

describe("id prop set to null", () => {
  const container = new MobileButton({});
  // @ts-ignore
  container.id = null;

  it("id prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.have.equals("null");
  });
});
