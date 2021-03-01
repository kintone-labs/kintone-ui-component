import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("Function change event run successfully", () => {
  const container = new MobileText({ value: "Orange" });
  container.addEventListener("change", (event: any) => {
    expect(event.detail.value).to.have.equal("Apple");
    expect(event.detail.oldValue).to.have.equal("Orange");
  });

  it("Function change event run successfully", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    inputEl.value = "Apple";
    const event = new CustomEvent("change");
    inputEl.dispatchEvent(event);
  });
});
