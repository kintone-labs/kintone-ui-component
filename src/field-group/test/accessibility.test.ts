import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { FieldGroup } from "../index";

describe("FieldGroup", () => {
  describe("accessibility", () => {
    it("Should expand the content when the Enter key is pressed while the group is collapsed.", async () => {
      const container = new FieldGroup({
        label: "FieldGroup's label",
        content: "FieldGroup's content",
      });

      const el = await fixture(container);
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle",
      ) as HTMLButtonElement;
      buttonToggle.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Enter",
        }),
      );
      await elementUpdated(el);
      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      expect(divContentEl.hasAttribute("hidden")).to.equal(false);
      expect(buttonToggle.getAttribute("aria-expanded")).to.equal("true");
    });

    it("Should expand the content when the Space key is pressed while the group is collapsed.", async () => {
      const container = new FieldGroup({
        label: "FieldGroup's label",
        content: "FieldGroup's content",
      });

      const el = await fixture(container);
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle",
      ) as HTMLButtonElement;
      buttonToggle.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: " ",
        }),
      );
      await elementUpdated(el);
      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      expect(divContentEl.hasAttribute("hidden")).to.equal(false);
      expect(buttonToggle.getAttribute("aria-expanded")).to.equal("true");
    });

    it("Should collapse the content when the Enter key is pressed while the group is expanded.", async () => {
      const container = new FieldGroup({
        label: "FieldGroup's label",
        content: "FieldGroup's content",
        expanded: true,
      });

      const el = await fixture(container);
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle",
      ) as HTMLButtonElement;
      buttonToggle.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Enter",
        }),
      );
      await elementUpdated(el);
      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      expect(divContentEl.hasAttribute("hidden")).to.equal(true);
      expect(buttonToggle.getAttribute("aria-expanded")).to.equal("false");
    });

    it("Should collapse the content when the Space key is pressed while the group is expanded.", async () => {
      const container = new FieldGroup({
        label: "FieldGroup's label",
        content: "FieldGroup's content",
        expanded: true,
      });

      const el = await fixture(container);
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle",
      ) as HTMLButtonElement;
      buttonToggle.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: " ",
        }),
      );
      await elementUpdated(el);
      const divContentEl = el.querySelector(
        ".kuc-field-group__group__body",
      ) as HTMLDivElement;
      expect(divContentEl.hasAttribute("hidden")).to.equal(true);
      expect(buttonToggle.getAttribute("aria-expanded")).to.equal("false");
    });
  });
});
