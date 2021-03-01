import { expect, fixture } from "@open-wc/testing";
import { Dialog } from "../index";

describe("confirm content default prop is null", () => {
  const container = new Dialog();
  it("confirm content default prop is null", async () => {
    const el = await fixture(container);
    const cotentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(cotentEl.childElementCount).to.be.equals(0);
  });
});

describe("constructor: content set string successfully", () => {
  const container = new Dialog({
    content: "this is content"
  });
  it("content constructor set successfully", async () => {
    const el = await fixture(container);
    const cotentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(cotentEl.textContent!.trim()).to.be.equals("this is content");
  });
});

describe("constructor: content set HTMLElement successfully", () => {
  const divElement = document.createElement("div");
  divElement.textContent = "this is content";
  const container = new Dialog({
    content: divElement
  });
  it("content constructor set successfully", async () => {
    const el = await fixture(container);
    const cotentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(cotentEl.firstElementChild!.tagName.toLowerCase()).to.be.equal(
      "div"
    );
    await expect(cotentEl.firstElementChild!.textContent?.trim()).to.be.equal(
      "this is content"
    );
  });
});

describe("constructor: content set HTMLElement from string successfully", () => {
  const divElement = "<div>this is content</div>";
  const container = new Dialog({
    content: divElement
  });

  it("constructor: content set HTMLElement from string successfully", async () => {
    const el = await fixture(container);
    const contentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(
      contentEl.firstElementChild!.tagName.toLowerCase()
    ).to.be.equal("div");
    await expect(contentEl.firstElementChild!.textContent?.trim()).to.be.equal(
      "this is content"
    );
  });
});

describe("constructor: content set to null successfully", () => {
  const container = new Dialog({
    // @ts-ignore
    content: null
  });

  it("constructor: content set to null successfully", async () => {
    const el = await fixture(container);
    const cotentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(cotentEl.textContent?.trim()).to.be.equal("");
  });
});

describe("property: content set string successfully", () => {
  const container = new Dialog();
  container.content = "this is content";

  it("content prop set successfully", async () => {
    const el = await fixture(container);
    const cotentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(cotentEl.textContent!.trim()).to.be.equal("this is content");
  });
});

describe("property: content set HTMLElement successfully", () => {
  const divElement = document.createElement("div");
  divElement.textContent = "this is content";
  const container = new Dialog();
  container.content = divElement;

  it("property: content set HTMLElement successfully", async () => {
    const el = await fixture(container);
    const cotentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(cotentEl.firstElementChild!.tagName.toLowerCase()).to.be.equal(
      "div"
    );
    await expect(cotentEl.firstElementChild!.textContent?.trim()).to.be.equal(
      "this is content"
    );
  });
});

describe("property: content set HTMLElement from string successfully", () => {
  const divElement = "<div>this is content</div>";
  const container = new Dialog();
  container.content = divElement;

  it("property: content set HTMLElement from string successfully", async () => {
    const el = await fixture(container);
    const contentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(
      contentEl.firstElementChild!.tagName.toLowerCase()
    ).to.be.equal("div");
    await expect(contentEl.firstElementChild!.textContent?.trim()).to.be.equal(
      "this is content"
    );
  });
});

describe("property: content set to null successfully", () => {
  const container = new Dialog();
  // @ts-ignore
  container.content = null;

  it("property: content set to null successfully", async () => {
    const el = await fixture(container);
    const contentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(contentEl.textContent?.trim()).to.be.equal("");
  });
});

describe("content prop replace successfully", () => {
  const container = new Dialog({ content: "this is content" });
  container.content = "replace content";

  it("content prop replace successfully", async () => {
    const el = await fixture(container);
    const cotentEl = el.querySelector(
      ".kuc-dialog__dialog__content"
    ) as HTMLDivElement;
    await expect(cotentEl.textContent!.trim()).to.be.equal("replace content");
  });
});
