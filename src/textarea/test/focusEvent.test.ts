import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("Function focus event run successfully", () => {
  const container = new TextArea({ value: "Orange" });
  container.addEventListener("focus", (event: any) => {
    expect(event.detail.value).to.have.equal("Orange");
  });

  it("Function focus event run successfully", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-textarea__textarea"
    ) as HTMLInputElement;
    inputEl.focus();
  });
});
