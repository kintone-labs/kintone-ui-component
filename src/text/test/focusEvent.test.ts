import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("Function focus event run successfully", () => {
  const container = new Text({ value: "Orange" });
  container.addEventListener("focus", (event: any) => {
    expect(event.detail.value).to.have.equal("Orange");
  });

  it("Function focus event run successfully", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-text__text__input-form__input-outer__input"
    ) as HTMLInputElement;
    inputEl.focus();
  });
});
