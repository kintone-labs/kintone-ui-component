import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Function change event run successfully", () => {
  const container = new Text({ value: "Orange" });
  container.addEventListener("change", (event: any) => {
    expect(event.detail.value).to.have.equal("Apple");
    expect(event.detail.oldValue).to.have.equal("Orange");
  });

  it("Function change event run successfully", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    inputEl.value = "Apple";
    const event = new CustomEvent("change");
    inputEl.dispatchEvent(event);
  });
});
