import { expect, fixture } from "@open-wc/testing";
import { Dialog } from "../index";

describe("confirm title default prop is null", () => {
  const container = new Dialog();
  it("confirm title default prop is null", async () => {
    const el = await fixture(container);
    const titleEl = el.querySelector(
      ".kuc-dialog__dialog__header__title"
    ) as HTMLSpanElement;
    await expect(titleEl.textContent).to.be.equal("");
  });
});

describe("title constructor set successfully", () => {
  const container = new Dialog({
    title: "this is title"
  });
  it("title constructor set successfully", async () => {
    const el = await fixture(container);
    const titleEl = el.querySelector(
      ".kuc-dialog__dialog__header__title"
    ) as HTMLSpanElement;
    await expect(titleEl.textContent).to.be.equal("this is title");
  });
});

describe("title prop set successfully", () => {
  const container = new Dialog();
  container.title = "this is title";
  it("title prop set successfully", async () => {
    const el = await fixture(container);
    const titleEl = el.querySelector(
      ".kuc-dialog__dialog__header__title"
    ) as HTMLSpanElement;
    await expect(titleEl.textContent).to.be.equal("this is title");
  });
});

describe("title constructor set to null successfully", () => {
  const container = new Dialog({
    // @ts-ignore
    title: null
  });

  it("title constructor set to null successfully", async () => {
    const el = await fixture(container);
    const titleEl = el.querySelector(
      ".kuc-dialog__dialog__header__title"
    ) as HTMLSpanElement;
    await expect(titleEl.textContent).to.be.equal("");
  });
});

describe("title prop set to null successfully", () => {
  const container = new Dialog();
  // @ts-ignore
  container.title = null;
  it("title prop set to null successfully", async () => {
    const el = await fixture(container);
    const titleEl = el.querySelector(
      ".kuc-dialog__dialog__header__title"
    ) as HTMLSpanElement;
    await expect(titleEl.textContent).to.be.equal("");
  });
});

describe("title prop replace successfully", () => {
  const container = new Dialog({
    title: "this is title"
  });
  container.title = "this is replace title";
  it("title prop replace successfully", async () => {
    const el = await fixture(container);
    const titleEl = el.querySelector(
      ".kuc-dialog__dialog__header__title"
    ) as HTMLSpanElement;
    await expect(titleEl.textContent).to.be.equal("this is replace title");
  });
});
