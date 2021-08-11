import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("Render successfully without props", () => {
  const container = new MultiChoice();
  it('have "kuc-multi-choice"', async () => {
    const el = await fixture(container);
    const tagname = (await el).tagName;
    expect(tagname.toLowerCase()).to.be.equal("kuc-multi-choice");
    expect(el).dom.to.equalSnapshot({
      ignoreAttributes: ["aria-describedby", "aria-labelledby", "id", "style", "aria-live"]
    });
  });
});

describe("Render successfully full props", () => {
  const container = new MultiChoice({
    label: "Mutiple-Choice",
    requiredIcon: true,
    items: [
      {
        label: "Item 1",
        value: "item-1"
      },
      {
        label: "Item 2",
        value: "item-2"
      },
      {
        label: "Item 3",
        value: "item-3"
      },
      {
        label: "Item 4",
        value: "item-4"
      },
      {
        label: "Item 5",
        value: "item-5"
      }
    ],
    value: ["item-1", "item-3"],
    error: "Error occurred!",
    className: "sample-class",
    id: "sample-id",
    visible: true,
    disabled: false
  });
  it('Render successfully full props"', async () => {
    const el = await fixture(container);
    expect(el).dom.to.equalSnapshot({
      ignoreAttributes: ["aria-describedby", "aria-labelledby", "id", "style", "role", "aria-live"]
    });
  });
});
