import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("Function change event run successfully", () => {
  const container = new MobileTextArea({ value: "Orange" });
  container.addEventListener("change", (event: any) => {
    expect(event.detail.value).to.have.equal("Apple");
    expect(event.detail.oldValue).to.have.equal("Orange");
  });

  it("Function change event run successfully", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    textareaEl.value = "Apple";
    const event = new CustomEvent("change");
    textareaEl.dispatchEvent(event);
  });
});
