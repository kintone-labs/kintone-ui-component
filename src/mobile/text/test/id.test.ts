import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("confirm id default prop is null", () => {
  const container = new MobileText();

  it("confirm id default prop is null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equals("");
  });
});

describe("id constructor set successfully", () => {
  const container = new MobileText({ id: "options-id" });

  it("id constructor set successfully'", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equal("options-id");
  });
});

describe("id prop set successfully", () => {
  const container = new MobileText();
  container.id = "options-id";

  it("id prop set successfully'", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equal("options-id");
  });
});

describe("id prop replace successfully", () => {
  const container = new MobileText({ id: "options-id" });
  container.id = "replace-id";

  it("id prop replace successfully'", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equal("replace-id");
  });
});

describe("id default prop set to null", () => {
  // @ts-expect-error
  const container = new MobileText({ id: null });

  it("id default prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.have.equals("null");
  });
});

describe("id prop set to null", () => {
  const container = new MobileText();
  // @ts-expect-error
  container.id = null;

  it("id prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.have.equals("null");
  });
});
