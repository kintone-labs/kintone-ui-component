import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("Function change event run successfully", () => {
  const container = new TextArea({ value: "Orange" });
  container.addEventListener("change", (event: any) => {
    expect(event.detail.value).to.have.equal("Apple");
    expect(event.detail.oldValue).to.have.equal("Orange");
  });

  it("Function change event run successfully", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-textarea__group__textarea"
    ) as HTMLInputElement;
    inputEl.value = "Apple";
    const event = new CustomEvent("change");
    inputEl.dispatchEvent(event);
  });

  it("event mousedown", async () => {
    const el = await fixture(container);
    el.querySelector(".kuc-textarea__resizer")!.dispatchEvent(
      new CustomEvent("mousedown")
    );
    // TODO: Update expect() logic
    // I was not found something happened on HTML when mousedown
  });

  it("event mousemove", async () => {
    const event = new CustomEvent("mousemove");
    document.dispatchEvent(event);
    // TODO: Update expect() logic
    // I was not found something happened on HTML when mousedown
  });

  it("event mouseup", async () => {
    const event = new CustomEvent("mouseup");
    document.dispatchEvent(event);
    // TODO: Update expect() logic
    // I was not found something happened on HTML when mousedown
  });
});
