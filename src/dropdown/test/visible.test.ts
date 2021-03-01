import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("visible default prop is true", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
    items: [
      {
        label: expectedLabels[0],
        value: expectedValues[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1]
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ]
  });

  it("visible default prop is true", async () => {
    const el = await fixture(container);
    // eslint-disable-next-line no-unused-expressions
    expect(el).to.be.displayed;
  });
});

describe("visible prop set to false successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
    items: [
      {
        label: expectedLabels[0],
        value: expectedValues[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1]
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ],
    visible: false
  });

  it("visible prop set to false successfully", async () => {
    const el = await fixture(container);
    // eslint-disable-next-line no-unused-expressions
    expect(el).not.to.be.displayed;
  });
});

describe("visible prop set to true successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
    label: "Fruit",
    requiredIcon: false,
    items: [
      {
        label: expectedLabels[0],
        value: expectedValues[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1]
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ],
    visible: false
  });
  container.visible = true;

  it("visible prop set to true successfully", async () => {
    const el = await fixture(container);
    // eslint-disable-next-line no-unused-expressions
    expect(el).to.be.displayed;
  });
});

describe("visible prop set to false successfully", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
    label: "Fruit",
    requiredIcon: false,
    items: [
      {
        label: expectedLabels[0],
        value: expectedValues[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1]
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ],
    visible: true,
    className: "visible_test"
  });
  container.visible = false;

  it("visible prop set to false successfully'", async () => {
    const el = await fixture(container);
    // eslint-disable-next-line no-unused-expressions
    expect(el).not.to.be.displayed;
  });
});

describe("visible default prop set to null", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
    label: "Fruit",
    requiredIcon: false,
    items: [
      {
        label: expectedLabels[0],
        value: expectedValues[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1]
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ],
    // @ts-ignore
    visible: null
  });

  it("visible default prop set to null", async () => {
    const el = await fixture(container);
    // eslint-disable-next-line no-unused-expressions
    expect(el).not.to.be.displayed;
  });
});

describe("visible prop set to null", () => {
  const expectedLabels = ["-----", "Orange", "Apple"];
  const expectedValues = ["-----", "orange", "Apple"];

  const container = new Dropdown({
    label: "Fruit",
    requiredIcon: false,
    items: [
      {
        label: expectedLabels[0],
        value: expectedValues[0]
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1]
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2]
      }
    ]
  });
  // @ts-ignore
  container.visible = null;

  it("visible prop set to null", async () => {
    const el = await fixture(container);
    // eslint-disable-next-line no-unused-expressions
    expect(el).not.to.be.displayed;
  });
});
