import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("confirm error default prop is null", () => {
  const container = new TextArea();

  it("confirm error default prop is null", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-textarea__error"
    )) as HTMLDivElement;
    const errorText = errorEl.textContent;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(errorText!.trim()).to.be.equal("");
  });
});

describe("error constructor set successfully", () => {
  const container = new TextArea({ error: "Error occurred!" });

  it("error constructor set successfully'", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-textarea__error"
    )) as HTMLDivElement;
    const errorText = errorEl.innerText;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(errorText).to.be.equal("Error occurred!");
  });
});

describe("error prop set successfully", () => {
  const container = new TextArea();
  container.error = "Error occurred!";

  it("error prop set successfully'", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-textarea__error"
    )) as HTMLDivElement;
    const errorText = errorEl.innerText;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(errorText).to.be.equal("Error occurred!");
  });
});

describe("error prop replace successfully", () => {
  const container = new TextArea({ error: "options-error" });
  container.error = "Error occurred!";

  it("error prop replace successfully", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-textarea__error"
    )) as HTMLDivElement;
    const errorText = errorEl.innerText;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(errorText).to.be.equal("Error occurred!");
  });
});

describe("error default prop set to null successfully", () => {
  // @ts-ignore
  const container = new TextArea({ error: null });

  it("error default prop set to null successfully", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-textarea__error"
    )) as HTMLDivElement;
    const errorText = errorEl.innerText;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(errorText!.trim()).to.be.equal("");
  });
});

describe("error prop set to null successfully", () => {
  const container = new TextArea({ error: "Error occurred!" });
  // @ts-ignore
  container.error = null;

  it("error prop set to null successfully", async () => {
    const el = await fixture(container);
    const errorEl = (await el.querySelector(
      ".kuc-textarea__error"
    )) as HTMLDivElement;
    const errorText = errorEl.innerText;
    await expect(errorEl.hasAttribute("hidden")).to.be.equal(true);
    await expect(errorText!.trim()).to.be.equal("");
  });
});
