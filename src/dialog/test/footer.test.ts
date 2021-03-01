import { expect, fixture } from "@open-wc/testing";
import { Dialog } from "../index";

describe("confirm footer default prop is null", () => {
  const container = new Dialog();
  it("confirm footer default prop is null", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.childElementCount).to.be.equals(0);
  });
});

describe("constructor: footer set string successfully", () => {
  const container = new Dialog({
    footer: "this is footer"
  });
  it("footer constructor set successfully", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.textContent!.trim()).to.be.equals("this is footer");
  });
});

describe("constructor: footer set HTMLElement successfully", () => {
  const divElement = document.createElement("div");
  divElement.textContent = "this is footer";
  const container = new Dialog({
    footer: divElement
  });
  it("footer constructor set successfully", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.firstElementChild!.tagName.toLowerCase()).to.be.equal(
      "div"
    );
    await expect(footerEl.firstElementChild!.textContent?.trim()).to.be.equal(
      "this is footer"
    );
  });
});

describe("constructor: footer set HTMLElement from string successfully", () => {
  const divElement = "<div>this is footer</div>";
  const container = new Dialog({
    footer: divElement
  });

  it("constructor: footer set HTMLElement from string successfully", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.firstElementChild!.tagName.toLowerCase()).to.be.equal(
      "div"
    );
    await expect(footerEl.firstElementChild!.textContent?.trim()).to.be.equal(
      "this is footer"
    );
  });
});

describe("constructor: footer set to null successfully", () => {
  const container = new Dialog({
    // @ts-ignore
    footer: null
  });

  it("constructor: content set to null successfully", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.textContent!.trim()).to.be.equals("");
  });
});

describe("property: footer set string successfully", () => {
  const container = new Dialog();
  container.footer = "this is footer";

  it("footer prop set successfully", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.textContent!.trim()).to.be.equal("this is footer");
  });
});

describe("property: footer set HTMLElement successfully", () => {
  const divElement = document.createElement("div");
  divElement.textContent = "this is footer";
  const container = new Dialog();
  container.footer = divElement;

  it("property: footer set HTMLElement successfully", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.firstElementChild!.tagName.toLowerCase()).to.be.equal(
      "div"
    );
    await expect(footerEl.firstElementChild!.textContent?.trim()).to.be.equal(
      "this is footer"
    );
  });
});

describe("property: footer set HTMLElement from string successfully", () => {
  const divElement = "<div>this is footer</div>";
  const container = new Dialog();
  container.footer = divElement;

  it("property: footer set HTMLElement from string successfully", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.firstElementChild!.tagName.toLowerCase()).to.be.equal(
      "div"
    );
    await expect(footerEl.firstElementChild!.textContent?.trim()).to.be.equal(
      "this is footer"
    );
  });
});

describe("property: footer set to null successfully", () => {
  const container = new Dialog();
  // @ts-ignore
  container.footer = null;

  it("property: footer set to null successfully", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.textContent!.trim()).to.be.equal("");
  });
});

describe("footer prop replace successfully", () => {
  const container = new Dialog({ footer: "this is footer" });
  container.footer = "replace footer";

  it("footer prop replace successfully", async () => {
    const el = await fixture(container);
    const footerEl = el.querySelector(
      ".kuc-dialog__dialog__footer"
    ) as HTMLDivElement;
    await expect(footerEl.textContent!.trim()).to.be.equal("replace footer");
  });
});
