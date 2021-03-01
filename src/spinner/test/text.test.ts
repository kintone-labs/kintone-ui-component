import { expect, fixture } from "@open-wc/testing";
import { Spinner } from "../index";

describe("when text prop is nothing, text is displayed 'now loading…'", () => {
  const container = new Spinner();
  container.open();
  it("when text prop is nothing, text is displayed 'now loading…'", async () => {
    const el = await fixture(container);
    const inputTextEl = (await el.querySelector(
      ".kuc-spinner__spinner__text"
    )) as HTMLSpanElement;
    await expect(inputTextEl.innerText).to.have.equal("now loading…");
  });
});

describe("text prop set to constructor successfully", () => {
  const container = new Spinner({
    text: "display spinner"
  });
  container.open();
  it("text prop set to constructor successfully", async () => {
    const el = await fixture(container);
    const inputTextEl = (await el.querySelector(
      ".kuc-spinner__spinner__text"
    )) as HTMLSpanElement;
    await expect(inputTextEl.innerText).to.have.equal("display spinner");
  });
});

describe("text prop replace successfully", () => {
  const container = new Spinner({
    text: "display spinner"
  });
  container.text = "replace-text";

  it("text prop replace successfully", async () => {
    const el = await fixture(container);
    const replaceTextEl = (await el.querySelector(
      ".kuc-spinner__spinner__text"
    )) as HTMLSpanElement;
    await expect(replaceTextEl.innerText).to.have.equal("replace-text");
  });
});

describe("text prop set null at constructor successfully", () => {
  const container = new Spinner({
    // @ts-ignore
    text: null
  });

  it("text prop set null at constructor successfully", async () => {
    const el = await fixture(container);
    const replaceTextEl = (await el.querySelector(
      ".kuc-spinner__spinner__text"
    )) as HTMLSpanElement;
    await expect(replaceTextEl.innerText).to.have.equal("now loading…");
  });
});

describe("text prop set null successfully", () => {
  const container = new Spinner({
    text: "display spinner"
  });
  // @ts-ignore
  container.text = null;

  it("text prop set null successfully", async () => {
    const el = await fixture(container);
    const replaceTextEl = (await el.querySelector(
      ".kuc-spinner__spinner__text"
    )) as HTMLSpanElement;
    await expect(replaceTextEl.innerText).to.have.equal("now loading…");
  });
});
