import { expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("id default prop is null", () => {
  const container = new Button({});

  it("id default prop is null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equals("");
  });
});

describe("id default prop set successfully", () => {
  const container = new Button({ id: "options-id" });

  it("id default prop set successfully", async () => {
    const el = await fixture(container);
    await expect(el.id).to.have.equals("options-id");
  });
});

describe("id prop replace successfully", () => {
  const container = new Button({
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
  const container = new Button({ id: null });

  it("id default prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.be.equals("null");
  });
});

describe("id prop set to null", () => {
  const container = new Button({});
  // @ts-ignore
  container.id = null;

  it("id prop set to null", async () => {
    const el = await fixture(container);
    await expect(el.id).to.have.equals("null");
  });
});
