import { expect, fixture } from "@open-wc/testing";
import { MobileButton } from "../index";

describe("disabled default prop is false", () => {
  const container = new MobileButton({});

  it("disabled default prop is false", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.hasAttribute("disabled")).to.have.equal(false);
  });
});

describe("disabled constructor set successfully", () => {
  const container = new MobileButton({ disabled: true });

  it("disabled constructor set successfully'", async () => {
    const el = await fixture(container);
    const buttonEl = (await el.querySelector(
      ".kuc-mobile-button__button"
    )) as HTMLButtonElement;
    await expect(buttonEl.hasAttribute("disabled")).to.have.equal(true);
  });
});

describe("disabled prop set to true successfully", () => {
  const container = new MobileButton({ disabled: false });
  container.disabled = true;

  it("disabled prop set to true successfully", async () => {
    const el = await fixture(container);
    await expect(el.querySelector(".kuc-mobile-button__button")).to.have.attr(
      "disabled"
    );
  });
});

describe("disabled prop set to false successfully", () => {
  const container = new MobileButton({ disabled: true });
  container.disabled = false;

  it("disabled prop set to false successfully", async () => {
    const el = await fixture(container);
    await expect(
      el.querySelector(".kuc-mobile-button__button")
    ).not.to.have.attr("disabled");
  });
});

describe("disabled default prop set to null", () => {
  // @ts-ignore
  const container = new MobileButton({ disabled: null });

  it("disabled default prop set to null", async () => {
    const el = await fixture(container);
    await expect(
      el.querySelector(".kuc-mobile-button__button")
    ).not.to.have.attr("disabled");
  });
});

describe("disabled prop set to null", () => {
  const container = new MobileButton({});
  // @ts-ignore
  container.disabled = null;

  it("disabled prop set to null", async () => {
    const el = await fixture(container);
    await expect(
      el.querySelector(".kuc-mobile-button__button")
    ).not.to.have.attr("disabled");
  });
});
