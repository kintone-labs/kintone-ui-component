import { expect, fixture } from "@open-wc/testing";
import { MobileTextArea } from "../index";

describe("Function focus event run successfully", () => {
  const container = new MobileTextArea({ value: "Orange" });
  container.addEventListener("focus", (event: any) => {
    expect(event.detail.value).to.have.equal("Orange");
  });

  it("Function focus event run successfully", async () => {
    const el = await fixture(container);
    const textareaEl = el.querySelector(
      ".kuc-mobile-textarea__form__textarea"
    ) as HTMLTextAreaElement;
    textareaEl.focus();
  });
});
