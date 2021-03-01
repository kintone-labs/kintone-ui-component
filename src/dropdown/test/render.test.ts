import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("Render successfully without props", () => {
  const container = new Dropdown();
  it('have "kuc-dropdown"', async () => {
    const el = await fixture(container);
    const tagname = (await el).tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-dropdown");
    expect(el).dom.to.equalSnapshot({
      ignoreAttributes: ["aria-describedby", "aria-labelledby", "id", "aria-live", "type", "style"]
    });
  });
});

describe("Render successfully full props", () => {
  const container = new Dropdown({
    label: "Fruit",
    requiredIcon: false,
    items: [
      {
        label: "orange",
        value: "Orange"
      },
      {
        label: "apple",
        value: "Apple"
      }
    ],
    value: "Orange",
    error: "Error occurred!",
    className: "options-class",
    id: "options-id",
    visible: true,
    disabled: false
  });
  it('Render successfully full props"', async () => {
    const el = await fixture(container);
  });
});

describe("Render successfully with showing and hiding selection list", () => {
  const container = new Dropdown();

  it("displaed select item", async () => {
    const el = await fixture(container);
    const toggle = (await el.querySelector(
      ".kuc-dropdown__toggle"
    )) as HTMLDivElement;
    const itemsEl = (await el.querySelector(
      ".kuc-dropdown__select-menu"
    )) as HTMLDivElement;
    const outer = (await el.querySelector(
      ".kuc-dropdown__label__text"
    )) as HTMLDivElement;

    toggle.click();
    outer.click();
    await expect(itemsEl).not.to.be.displayed;

    toggle.click();
    await expect(itemsEl).to.be.displayed;
  });
});
