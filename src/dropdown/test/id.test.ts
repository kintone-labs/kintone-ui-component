import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("id default prop is null", () => {
  const container = new Dropdown({});

  it("id default prop is null", async () => {
    const el = await fixture(container);
    expect(el.id).to.be.equal("");
  });
});

describe("id default prop set successfully", () => {
  const container = new Dropdown({ id: "options-id" });

  it("id default prop set successfully", async () => {
    const el = await fixture(container);
    expect(el.id).to.have.equal("options-id");
  });
});

describe("id prop replace successfully", () => {
  const container = new Dropdown({
    id: "options-id"
  });
  container.id = "replace-id";

  it("id prop replace successfully", async () => {
    const el = await fixture(container);
    expect(el.id).to.have.equal("replace-id");
  });
});

describe("id default prop set to null", () => {
  // @ts-ignore
  const container = new Dropdown({ id: null });

  it("id default prop set to null", async () => {
    const el = await fixture(container);
    expect(el.id).to.be.equal("null");
  });
});

describe("id prop set to null", () => {
  const container = new Dropdown({});
  // @ts-ignore
  container.id = null;

  it("id prop set to null", async () => {
    const el = await fixture(container);
    expect(el.id).to.have.equal("null");
  });
});
