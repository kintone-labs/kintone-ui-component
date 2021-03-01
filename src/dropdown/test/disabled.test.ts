import { expect, fixture } from "@open-wc/testing";
import { Dropdown } from "../index";

describe("disabled default prop is false", () => {
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

  it("disabled default prop is false", async () => {
    const el = await fixture(container);
    expect(el.querySelector(".kuc-dropdown__toggle")).not.to.have.attr(
      "disabled"
    );
  });
});

describe("disabled default prop set to true successfully", () => {
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
    disabled: true
  });

  it("disabled default prop set to true successfully", async () => {
    const el = await fixture(container);
    expect(el.querySelector(".kuc-dropdown__toggle")).to.have.attr("disabled");
  });
});

describe("disabled prop set to true successfully", () => {
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
    disabled: false
  });
  container.disabled = true;

  it("disabled prop set to true successfully", async () => {
    const el = await fixture(container);
    expect(el.querySelector(".kuc-dropdown__toggle")).to.have.attr("disabled");
  });
});

describe("disabled prop set to false successfully", () => {
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
    disabled: true
  });
  container.disabled = false;

  it("disabled prop set to false successfully", async () => {
    const el = await fixture(container);
    expect(el.querySelector(".kuc-dropdown__toggle")).not.to.have.attr(
      "disabled"
    );
  });
});

describe("disabled default prop set to null", () => {
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
    // @ts-ignore
    disabled: null
  });

  it("disabled default prop set to null", async () => {
    const el = await fixture(container);
    expect(el.querySelector(".kuc-dropdown__toggle")).not.to.have.attr(
      "disabled"
    );
  });
});

describe("disabled prop set to null", () => {
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
  // @ts-ignore
  container.disabled = null;

  it("disabled prop set to null", async () => {
    const el = await fixture(container);
    expect(el.querySelector(".kuc-dropdown__toggle")).not.to.have.attr(
      "disabled"
    );
  });
});
