import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("confirm placeholder default prop is null", () => {
  const container = new TextArea();

  it("confirm placeholder default prop is null", async () => {
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.be.equal("");
  });
});

describe("placeholder constructor set successfully", () => {
  const container = new TextArea({ placeholder: "Fruit" });

  it("placeholder constructor set successfully'", async () => {
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.be.equal("Fruit");
  });
});

describe("placeholder prop set successfully", () => {
  const container = new TextArea();
  container.placeholder = "Fruit";

  it("placeholder prop set successfully'", async () => {
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.be.equal("Fruit");
  });
});

describe("placeholder prop replace successfully", () => {
  const container = new TextArea({ placeholder: "Fruit" });
  container.placeholder = "Food";

  it("placeholder prop replace successfully'", async () => {
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.be.equal("Food");
  });
});

describe("placeholder default prop set to null successfully", () => {
  // @ts-ignore
  const container = new TextArea({ placeholder: null });

  it("placeholder default prop set to null successfully'", async () => {
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.be.equal("null");
  });
});

describe("placeholder prop set to null successfully", () => {
  const container = new TextArea();
  // @ts-ignore
  container.placeholder = null;

  it("placeholder prop set to null successfully'", async () => {
    const el = await fixture(container);
    const textAreaEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLTextAreaElement;
    expect(textAreaEl.getAttribute("placeholder")).to.be.equal("null");
  });
});
