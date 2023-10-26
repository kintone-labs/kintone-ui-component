import { expect, fixture } from "@open-wc/testing";

import { FieldGroup } from "../index";

describe("FieldGroup", () => {
  describe("expanded", () => {
    it("should be collapse when not assigned in constructor", async () => {
      const container = new FieldGroup({ content: "FieldGroup's content" });
      const el = await fixture(container);

      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle",
      ) as HTMLButtonElement;

      expect(buttonToggle.getAttribute("aria-expanded")).to.equal("false");
      expect(divContentEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be expanded when assigned true in constructor", async () => {
      const container = new FieldGroup({
        content: "FieldGroup's content",
        expanded: true,
      });
      const el = await fixture(container);

      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle",
      ) as HTMLButtonElement;

      expect(buttonToggle.getAttribute("aria-expanded")).to.equal("true");
      expect(divContentEl.hasAttribute("hidden")).to.equal(false);
    });

    it("should be collapse when assigned false in constructor", async () => {
      const container = new FieldGroup({
        content: "FieldGroup's content",
        expanded: false,
      });
      const el = await fixture(container);

      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle",
      ) as HTMLButtonElement;

      expect(buttonToggle.getAttribute("aria-expanded")).to.equal("false");
      expect(divContentEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be collapse when assigned expanded to true while disabled is true in constructor", async () => {
      const container = new FieldGroup({
        content: "FieldGroup's content",
        expanded: true,
        disabled: true,
      });
      const el = await fixture(container);

      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle",
      ) as HTMLButtonElement;

      expect(buttonToggle.getAttribute("aria-expanded")).to.equal("false");
      expect(divContentEl.hasAttribute("hidden")).to.equal(true);
    });
  });
});
