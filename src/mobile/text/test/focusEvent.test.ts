import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("Function focus event run successfully", () => {
  const container = new MobileText({ value: "Orange" });
  container.addEventListener("focus", (event: any) => {
    expect(event.detail.value).to.have.equal("Orange");
  });

  it("Function focus event run successfully", async () => {
    const el = await fixture(container);
    const inputEl = el.querySelector(
      ".kuc-mobile-text__input-form__input"
    ) as HTMLInputElement;
    inputEl.focus();
  });
});
