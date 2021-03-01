import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("confirm suffix default prop is null", () => {
  const container = new Text();

  it("confirm suffix default prop is null", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-text__text__input-form__suffix-outer__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(true);
  });
});

describe("suffix constructor set successfully", () => {
  const container = new Text({ suffix: "yen" });

  it("suffix constructor set successfully'", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-text__text__input-form__suffix-outer__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(suffixEl.innerText).to.be.equal("yen");
  });
});

describe("suffix prop set successfully", () => {
  const container = new Text();
  container.suffix = "yen";

  it("suffix prop set successfully'", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-text__text__input-form__suffix-outer__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(suffixEl.innerText).to.be.equal("yen");
  });
});

describe("suffix prop replace successfully", () => {
  const container = new Text({ suffix: "$" });
  container.suffix = "yen";

  it("suffix prop replace successfully'", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-text__text__input-form__suffix-outer__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(suffixEl.innerText).to.be.equal("yen");
  });
});

describe("suffix prop set to null successfully", () => {
  const container = new Text({ suffix: "$" });
  // @ts-ignore
  container.suffix = null;

  it("suffix prop set to null successfully", async () => {
    const el = await fixture(container);
    const suffixEl = el.querySelector(
      ".kuc-text__text__input-form__suffix-outer__suffix"
    ) as HTMLSpanElement;
    await expect(suffixEl.hasAttribute("hidden")).to.be.equal(true);
  });
});
