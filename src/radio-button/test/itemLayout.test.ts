import { expect, fixture } from "@open-wc/testing";
import { RadioButton } from "../index";

describe("confirm itemLayout default value is horizontal", () => {
  const container = new RadioButton();

  it("itemLayout constructor set successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal(
      "horizontal"
    );
  });
});

describe("itemLayout constructor set successfully", () => {
  const container = new RadioButton({ itemLayout: "vertical" });

  it("itemLayout constructor set successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal(
      "vertical"
    );
  });
});

describe("itemLayout prop set to 'horizontal' successfully", () => {
  const container = new RadioButton({ itemLayout: "vertical" });
  container.itemLayout = "horizontal";

  it("itemLayout prop set to 'horizontal' successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal(
      "horizontal"
    );
  });
});

describe("itemLayout prop set to 'vertical' successfully", () => {
  const container = new RadioButton({ itemLayout: "horizontal" });
  container.itemLayout = "vertical";

  it("itemLayout prop set to 'vertical' successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal(
      "vertical"
    );
  });
});

describe("itemLayout constructor set to null successfully", () => {
  // @ts-ignore
  const container = new RadioButton({ itemLayout: null });

  it("itemLayout constructor set to null successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal("null");
  });
});

describe("itemLayout prop set to null successfully", () => {
  const container = new RadioButton({ itemLayout: "vertical" });
  // @ts-ignore
  container.itemLayout = null;

  it("itemLayout prop set to null successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-radio-button__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.getAttribute("itemLayout")).to.be.equal("null");
  });
});
