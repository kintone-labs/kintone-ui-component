import { expect, fixture } from "@open-wc/testing";
import { MobileText } from "../index";

describe("confirm prefix default prop is null", () => {
  const container = new MobileText();

  it("confirm prefix default prop is null", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-mobile-text__input-form__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(true);
  });
});

describe("prefix constructor set successfully", () => {
  const container = new MobileText({ prefix: "$" });

  it("prefix constructor set successfully'", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-mobile-text__input-form__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(prefixEl.innerText).to.be.equal("$");
  });
});

describe("prefix prop set successfully", () => {
  const container = new MobileText();
  container.prefix = "$";

  it("prefix prop set successfully'", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-mobile-text__input-form__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(prefixEl.innerText).to.be.equal("$");
  });
});

describe("prefix prop replace successfully", () => {
  const container = new MobileText({ prefix: "yen" });
  container.prefix = "$";

  it("prefix prop replace successfully'", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-mobile-text__input-form__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(prefixEl.innerText).to.be.equal("$");
  });
});

describe("prefix prop set to null successfully", () => {
  const container = new MobileText({ prefix: "$" });
  // @ts-expect-error
  container.prefix = null;

  it("prefix prop set to null successfully", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-mobile-text__input-form__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(true);
  });
});
