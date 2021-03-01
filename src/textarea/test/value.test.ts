import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("confirm value default prop is null", () => {
  const container = new TextArea();

  it("confirm value default prop is null", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("");
  });
});

describe("value constructor set successfully", () => {
  const container = new TextArea({ value: "Apple" });

  it("value constructor set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("Apple");
  });
});

describe("value prop set successfully", () => {
  const container = new TextArea();
  container.value = "Apple";

  it("value prop set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("Apple");
  });
});

describe("value prop replace successfully", () => {
  const container = new TextArea({ value: "Orange" });
  container.value = "Apple";

  it("value prop replace successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("Apple");
  });
});

describe("value default prop set to null successfully", () => {
  // @ts-ignore
  const container = new TextArea({ value: null });

  it("value default prop set successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("");
  });
});

describe("value prop set to null successfully", () => {
  const container = new TextArea();
  // @ts-ignore
  container.value = null;

  it("value prop set to null successfully'", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLInputElement;
    expect(inputEl.value).to.be.equal("");
  });
});
