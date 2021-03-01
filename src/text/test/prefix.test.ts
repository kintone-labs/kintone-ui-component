import { expect, fixture } from "@open-wc/testing";
import { Text } from "../index";

describe("confirm prefix default prop is null", () => {
  const container = new Text();

  it("confirm prefix default prop is null", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-text__text__input-form__prefix-outer__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(true);
  });
});

describe("prefix constructor set successfully", () => {
  const container = new Text({ prefix: "$" });

  it("prefix constructor set successfully'", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-text__text__input-form__prefix-outer__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(prefixEl.innerText).to.be.equal("$");
  });
});

describe("prefix prop set successfully", () => {
  const container = new Text();
  container.prefix = "$";

  it("prefix prop set successfully'", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-text__text__input-form__prefix-outer__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(prefixEl.innerText).to.be.equal("$");
  });
});

describe("prefix prop replace successfully", () => {
  const container = new Text({ prefix: "yen" });
  container.prefix = "$";

  it("prefix prop replace successfully'", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-text__text__input-form__prefix-outer__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(false);
    await expect(prefixEl.innerText).to.be.equal("$");
  });
});

describe("prefix prop set to null successfully", () => {
  const container = new Text({ prefix: "$" });
  // @ts-ignore
  container.prefix = null;

  it("prefix prop set to null successfully", async () => {
    const el = await fixture(container);
    const prefixEl = el.querySelector(
      ".kuc-text__text__input-form__prefix-outer__prefix"
    ) as HTMLSpanElement;
    await expect(prefixEl.hasAttribute("hidden")).to.be.equal(true);
  });
});
