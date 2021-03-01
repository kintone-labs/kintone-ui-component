import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("confirm suffix default prop is null", () => {
  const container = new MobileText();

  it("confirm suffix default prop is null", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-mobile-text__input-form__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(true);
  });
});

describe("suffix constructor set successfully", () => {
  const container = new MobileText({ suffix: "yen" });

  it("suffix constructor set successfully'", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-mobile-text__input-form__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(suffixEl.innerText).to.be.equal("yen");
  });
});

describe("suffix prop set successfully", () => {
  const container = new MobileText();
  container.suffix = "yen";

  it("suffix prop set successfully'", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-mobile-text__input-form__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(suffixEl.innerText).to.be.equal("yen");
  });
});

describe("suffix prop replace successfully", () => {
  const container = new MobileText({ suffix: "$" });
  container.suffix = "yen";

  it("suffix prop replace successfully'", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-mobile-text__input-form__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(suffixEl.innerText).to.be.equal("yen");
  });
});

describe("suffix prop set to null successfully", () => {
  const container = new MobileText({ suffix: "$" });
  // @ts-expect-error
  container.suffix = null;

  it("suffix prop set to null successfully", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-mobile-text__input-form__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(true);
  });
});
