import { expect, fixture } from "@open-wc/testing";
import { MobileRadioButton } from "../index";

describe("confirm id default value is null", () => {
  const container = new MobileRadioButton();

  it("confirm id default value is null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equal("");
  });
});

describe("id constructor set successfully", () => {
  const container = new MobileRadioButton({ id: "options-id" });

  it("id constructor set successfully", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equal("options-id");
  });
});

describe("id prop replace successfully", () => {
  const container = new MobileRadioButton({ id: "options-id" });
  container.id = "replace-id";

  it("id prop replace successfully", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equal("replace-id");
  });
});

describe("id constructor set to null successfully", () => {
  // @ts-expect-error
  const container = new MobileRadioButton({ id: null });

  it("id constructor set to null successfully", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equal("null");
  });
});

describe("id prop set to null successfully", () => {
  const container = new MobileRadioButton({ id: "options-id" });
  // @ts-expect-error
  container.id = null;

  it("id prop set to null successfully", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equal("null");
  });
});
