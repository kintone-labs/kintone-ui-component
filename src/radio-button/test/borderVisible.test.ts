import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

describe("confirm borderVisible default value is true", () => {
  const container = new RadioButton();

  it("confirm borderVisible default value is true", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(true);
  });
});

describe("borderVisible constructor set successfully", () => {
  const container = new RadioButton({ borderVisible: false });

  it("borderVisible constructor set successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
  });
});

describe("borderVisible prop set to true successfully", () => {
  const container = new RadioButton({ borderVisible: false });
  container.borderVisible = true;

  it("borderVisible prop set to true successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(true);
  });
});

describe("borderVisible prop set to false successfully", () => {
  const container = new RadioButton({ borderVisible: true });
  container.borderVisible = false;

  it("borderVisible prop set to false successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
  });
});

describe("borderVisible constructor set to null successfully", () => {
  // @ts-ignore
  const container = new RadioButton({ borderVisible: null });

  it("borderVisible constructor set to null successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
  });
});

describe("borderVisible prop set to null successfully", () => {
  const container = new RadioButton({ borderVisible: true });
  // @ts-ignore
  container.borderVisible = null;

  it("borderVisible prop set to null successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
  });
});
